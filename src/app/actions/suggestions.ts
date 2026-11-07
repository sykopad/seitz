'use server';

import {
  analyzeAppSuggestionWithLLM,
  UserSuggestionInput,
  AISuggestionAnalysis,
} from '@/lib/openrouter/client';
import {
  CommunitySuggestionItem,
  saveCommunitySuggestion,
  getCommunitySuggestions,
} from '@/data/community-suggestions';
import { getCurrentUser } from '@/app/actions/auth';
import { createClient } from '@/lib/supabase/server';

export interface SubmitSuggestionResponse {
  success: boolean;
  message: string;
  suggestion?: CommunitySuggestionItem;
  error?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function submitAppSuggestion(
  input: UserSuggestionInput
): Promise<SubmitSuggestionResponse> {
  try {
    if (!input.title || input.title.trim().length < 3) {
      return {
        success: false,
        message: 'Please provide a clear title or concept name for your app idea.',
        error: 'Title too short',
      };
    }

    if (!input.description || input.description.trim().length < 10) {
      return {
        success: false,
        message: 'Please describe the core utility or gameplay mechanics (at least 10 characters).',
        error: 'Description too short',
      };
    }

    // 1. Check for logged in user session (Google SSO)
    const currentUser = await getCurrentUser();
    const authorName = input.authorName?.trim() || currentUser?.fullName || 'Community Innovator';
    const authorEmail = input.authorEmail?.trim() || currentUser?.email || undefined;

    // 2. Perform AI architectural analysis via OpenRouter
    const aiAnalysis: AISuggestionAnalysis = await analyzeAppSuggestionWithLLM({
      ...input,
      authorName,
      authorEmail,
    });

    const slug = slugify(aiAnalysis.refinedTitle || input.title) + '-' + Math.floor(Math.random() * 1000);

    const newSuggestion: CommunitySuggestionItem = {
      id: `sug-${Date.now()}`,
      slug,
      title: aiAnalysis.refinedTitle,
      tagline: aiAnalysis.tagline,
      category: aiAnalysis.category || input.category || 'Tools & Utilities',
      authorName,
      authorEmail,
      createdAt: new Date().toISOString(),
      communityVotes: 1, // Author's first vote included
      voteThreshold: 50,
      hasGraduated: false,
      isCommunitySubmitted: true,
      aiAnalysis,
    };

    // 3. Save to in-memory store
    saveCommunitySuggestion(newSuggestion);

    // 4. Try saving to Supabase if configured
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      if (supabaseUrl && !supabaseUrl.includes('placeholder')) {
        const supabase = await createClient();
        await (supabase.from('community_suggestions') as any).insert({
          id: newSuggestion.id,
          slug: newSuggestion.slug,
          title: newSuggestion.title,
          tagline: newSuggestion.tagline,
          category: newSuggestion.category,
          author_name: newSuggestion.authorName,
          author_email: newSuggestion.authorEmail,
          community_votes: newSuggestion.communityVotes,
          ai_analysis: newSuggestion.aiAnalysis,
          created_at: newSuggestion.createdAt,
        });
      }
    } catch (dbErr) {
      console.warn('[Supabase Suggestion Insert Notice - Fallback to Store]:', dbErr);
    }

    return {
      success: true,
      message: `"${newSuggestion.title}" was analyzed by Seitz AI and successfully entered into the community voting pipeline!`,
      suggestion: newSuggestion,
    };
  } catch (err: unknown) {
    console.error('Error submitting app suggestion:', err);
    return {
      success: false,
      message: 'Failed to process app suggestion. Please try again.',
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}

export async function fetchCommunitySuggestions(): Promise<CommunitySuggestionItem[]> {
  return getCommunitySuggestions();
}
