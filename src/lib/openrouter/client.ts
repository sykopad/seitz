export interface UserSuggestionInput {
  title: string;
  description: string;
  category?: string;
  targetPlatform?: string;
  authorName?: string;
  authorEmail?: string;
}

export interface AISuggestionAnalysis {
  refinedTitle: string;
  tagline: string;
  category: string;
  targetAudience: string;
  keyMechanics: Array<{ title: string; description: string }>;
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    specialized: string;
  };
  feasibilityScore: number; // 1 to 5
  estimatedSprints: string;
  communityAppeal: string;
}

/**
 * Intelligent fallback spec generator if OpenRouter is unreachable or in offline mode
 */
function generateFallbackAnalysis(input: UserSuggestionInput): AISuggestionAnalysis {
  const title = input.title.trim();
  const category = input.category || 'Productivity & Utilities';
  const desc = input.description.trim();

  return {
    refinedTitle: title.charAt(0).toUpperCase() + title.slice(1),
    tagline: `An intuitive ${category.toLowerCase()} solution: ${desc.slice(0, 90)}...`,
    category,
    targetAudience: 'Android users & tech enthusiasts seeking focused mobile utilities',
    keyMechanics: [
      {
        title: 'Core Engine & Workflow',
        description: `Delivers streamlined ${title} processing with responsive local device performance.`,
      },
      {
        title: 'Offline-First Storage',
        description: 'Synchronizes preferences and operational state securely with Room Database.',
      },
      {
        title: 'Haptic & Material 3 Interface',
        description: 'Polished Jetpack Compose UI engineered for fluid one-handed navigation.',
      },
    ],
    techStack: {
      frontend: 'Android Native (Kotlin, Jetpack Compose)',
      backend: 'Next.js App Router API & Server Actions',
      database: 'Supabase PostgreSQL + Local Room DB',
      specialized: 'Coroutines, StateFlow, Material You Dynamic Theming',
    },
    feasibilityScore: 4.8,
    estimatedSprints: '2 Sprints (4 Weeks to Closed Beta)',
    communityAppeal:
      'Solves a distinct daily friction point with zero bloat, high privacy standards, and clean Android aesthetics.',
  };
}

/**
 * Calls OpenRouter to analyze and engineer an app suggestion using LLMs
 */
export async function analyzeAppSuggestionWithLLM(
  input: UserSuggestionInput
): Promise<AISuggestionAnalysis> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || 'google/gemini-2.0-flash-001';

  if (!apiKey || apiKey.includes('placeholder')) {
    console.warn('[OpenRouter] Missing API key, using intelligent synthesizer fallback');
    return generateFallbackAnalysis(input);
  }

  const systemPrompt = `You are the Lead Systems Architect at Seitz (seitz.co.za), a boutique software systems studio and Google Play testing lab.
Your task is to analyze user-submitted mobile app and indie game ideas, transform them into professional software specifications, and return ONLY a valid JSON object.

JSON Schema to return:
{
  "refinedTitle": "Market-ready punchy title",
  "tagline": "A compelling 1-sentence tagline describing the value proposition",
  "category": "One of: Games & Casual, Tools & Utilities, AI & Media, Civic & Community, EdTech & Culture",
  "targetAudience": "Concise target demographic in 1 sentence",
  "keyMechanics": [
    { "title": "Mechanic 1 Name", "description": "1-2 sentence specification" },
    { "title": "Mechanic 2 Name", "description": "1-2 sentence specification" },
    { "title": "Mechanic 3 Name", "description": "1-2 sentence specification" }
  ],
  "techStack": {
    "frontend": "e.g. Android Kotlin / Jetpack Compose / React 19",
    "backend": "e.g. Next.js App Router / Go Microservices",
    "database": "e.g. Supabase PostgreSQL / Redis / SQLite",
    "specialized": "e.g. Apify Scrapers / MediaPipe / Room DB"
  },
  "feasibilityScore": 4.5, // Float between 1.0 and 5.0
  "estimatedSprints": "e.g. 2 Sprints (4 Weeks)",
  "communityAppeal": "Why Android users and beta testers will vote and engage with this project"
}

Ensure the analysis is inspiring, technically sound, and formatted as pure JSON with no markdown wrapping or preamble.`;

  const userPrompt = `App Idea Submission:
Title: ${input.title}
Concept & Description: ${input.description}
Suggested Category: ${input.category || 'General'}
Target Platform: ${input.targetPlatform || 'Android'}`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://seitz.co.za',
        'X-Title': 'Seitz Systems Studio & Testing Lab',
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      console.warn(`[OpenRouter HTTP Error]: ${response.status} ${response.statusText}`);
      return generateFallbackAnalysis(input);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content) {
      console.warn('[OpenRouter] Empty response content from model');
      return generateFallbackAnalysis(input);
    }

    // Strip markdown formatting if present
    const cleanJson = content
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();

    const parsed: AISuggestionAnalysis = JSON.parse(cleanJson);
    return parsed;
  } catch (err: unknown) {
    console.warn('[OpenRouter Exception - Defaulting to Fallback]:', err instanceof Error ? err.message : err);
    return generateFallbackAnalysis(input);
  }
}
