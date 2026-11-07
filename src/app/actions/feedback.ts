'use server';

import { createClient } from '@/lib/supabase/server';
import { sendFeedbackConfirmationEmail } from '@/lib/email';

export interface FeedbackFormData {
  campaignId?: string;
  googleEmail: string;
  deviceModel: string;
  androidVersion: string;
  stabilityRating: string;
  navigationRating: number;
  bugGlitchesNotes: string;
  mostUsefulFeature?: string;
  featureImprovementRequest?: string;
  isCurrentlyInstalled: boolean;
}

export interface FeedbackResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function submitFeedback(data: FeedbackFormData): Promise<FeedbackResponse> {
  try {
    if (!data.googleEmail || !data.deviceModel || !data.stabilityRating) {
      return {
        success: false,
        message: 'Please complete all required fields.',
        error: 'Missing required fields',
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.googleEmail)) {
      return {
        success: false,
        message: 'Please provide a valid Google Play email address.',
        error: 'Invalid email address',
      };
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // Database insertion if Supabase is active
    if (supabaseUrl && !supabaseUrl.includes('placeholder-project')) {
      const supabase = await createClient();
      const { error } = await (supabase.from('feedback_submissions') as any).insert({
        campaign_id: data.campaignId || null,
        google_email: data.googleEmail.trim().toLowerCase(),
        device_model: data.deviceModel.trim(),
        android_version: data.androidVersion,
        stability_rating: data.stabilityRating,
        navigation_rating: data.navigationRating,
        bug_glitches_notes: data.bugGlitchesNotes.trim(),
        most_useful_feature: data.mostUsefulFeature?.trim() || null,
        feature_improvement_request: data.featureImprovementRequest?.trim() || null,
        is_currently_installed: data.isCurrentlyInstalled,
      });

      if (error) {
        console.error('Supabase feedback insert error:', error);
      }
    } else {
      console.log('[Dev Mock Feedback Recorded]:', data);
    }

    // Trigger post-feedback email autoresponder via Resend
    await sendFeedbackConfirmationEmail({
      googleEmail: data.googleEmail.trim().toLowerCase(),
      deviceModel: data.deviceModel.trim(),
      stabilityRating: data.stabilityRating,
    });

    return {
      success: true,
      message:
        'Feedback recorded! Thank you for helping polish this build. Please keep the app installed for the remainder of the 14-day window. Your lifetime promo unlock will be dispatched directly to your inbox.',
    };
  } catch (err: unknown) {
    console.error('Unexpected feedback submission error:', err);
    return {
      success: false,
      message: 'An error occurred while saving feedback. Please reach out to byseitz.agency@gmail.com.',
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}
