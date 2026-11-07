import { AISuggestionAnalysis } from '@/lib/openrouter/client';

export interface CommunitySuggestionItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  authorName: string;
  authorEmail?: string;
  createdAt: string;
  communityVotes: number;
  voteThreshold: number;
  hasGraduated: boolean;
  isCommunitySubmitted: boolean;
  aiAnalysis: AISuggestionAnalysis;
}

// Initial vibrant community-submitted apps to seed the pipeline
export const seedCommunitySuggestions: CommunitySuggestionItem[] = [
  {
    id: 'sug-loadshedding-saver',
    slug: 'loadshedding-saver',
    title: 'StageWise: Battery & Power Automation',
    tagline: 'Predictive device battery preservation synced directly with EskomSePush load-shedding schedules.',
    category: 'Tools & Utilities',
    authorName: 'Thabo M.',
    createdAt: '2026-11-04T10:30:00Z',
    communityVotes: 44,
    voteThreshold: 50,
    hasGraduated: false,
    isCommunitySubmitted: true,
    aiAnalysis: {
      refinedTitle: 'StageWise: Battery & Power Automation',
      tagline: 'Predictive device battery preservation synced directly with EskomSePush load-shedding schedules.',
      category: 'Tools & Utilities',
      targetAudience: 'South African Android users navigating unpredictable power outages.',
      keyMechanics: [
        {
          title: 'Automated Battery Throttle',
          description: 'Triggers ultra-low power profile and pauses background sync 15 minutes before scheduled outages.',
        },
        {
          title: 'Smart Charge Reminder',
          description: 'Notifies users to plug in if battery level is insufficient to survive an upcoming 2.5-hour stage.',
        },
        {
          title: 'Offline Area Schedule Cache',
          description: 'Keeps suburb stages locally accessible even during total cellular network blackout.',
        },
      ],
      techStack: {
        frontend: 'Android Native (Kotlin, Jetpack Compose, Glance Widgets)',
        backend: 'Next.js App Router API & Serverless Cron',
        database: 'Room Database + EncryptedSharedPreferences',
        specialized: 'WorkManager, BroadcastReceiver for Power & Battery State',
      },
      feasibilityScore: 4.9,
      estimatedSprints: '2 Sprints (3 Weeks)',
      communityAppeal: 'High utility for every South African resident with immediate viral referral appeal.',
    },
  },
  {
    id: 'sug-spaza-pos',
    slug: 'spaza-pos',
    title: 'SpazaQuick: Offline Micro-POS',
    tagline: 'Zero-fee inventory and informal customer credit ledger for neighborhood township merchants.',
    category: 'Civic & Community',
    authorName: 'Sipho K.',
    createdAt: '2026-11-05T14:15:00Z',
    communityVotes: 37,
    voteThreshold: 50,
    hasGraduated: false,
    isCommunitySubmitted: true,
    aiAnalysis: {
      refinedTitle: 'SpazaQuick: Offline Micro-POS',
      tagline: 'Zero-fee inventory and informal customer credit ledger for neighborhood township merchants.',
      category: 'Civic & Community',
      targetAudience: 'Informal corner store owners, tuckshops, and mobile food traders.',
      keyMechanics: [
        {
          title: 'Tap-to-Record Sales',
          description: 'Large-touch fast grid enabling rapid cash logging in under 3 seconds per basket.',
        },
        {
          title: 'Customer Credit Book (Mali Ya Bantu)',
          description: 'Tracks trusted customer balances with automated SMS reminders and zero paper receipts.',
        },
        {
          title: 'Peer-to-Peer Bluetooth Sync',
          description: 'Syncs daily totals across multiple staff phones without requiring active mobile data.',
        },
      ],
      techStack: {
        frontend: 'Android Kotlin + Jetpack Compose',
        backend: 'Supabase Edge Functions + PostgreSQL',
        database: 'Room DB (Full Offline-First)',
        specialized: 'Nearby Connections API (Bluetooth/WiFi P2P)',
      },
      feasibilityScore: 4.7,
      estimatedSprints: '3 Sprints (5 Weeks)',
      communityAppeal: 'Direct social impact supporting grassroots African economic empowerment.',
    },
  },
  {
    id: 'sug-kasi-lingo',
    slug: 'kasi-lingo',
    title: 'Mzansi Slang Quest',
    tagline: 'Gamified urban slang and cultural phrasebook across Tsotsitaal, S’pitori, and vernac dialects.',
    category: 'Games & Casual',
    authorName: 'Nandi Z.',
    createdAt: '2026-11-06T09:00:00Z',
    communityVotes: 29,
    voteThreshold: 50,
    hasGraduated: false,
    isCommunitySubmitted: true,
    aiAnalysis: {
      refinedTitle: 'Mzansi Slang Quest',
      tagline: 'Gamified urban slang and cultural phrasebook across Tsotsitaal, S’pitori, and vernac dialects.',
      category: 'Games & Casual',
      targetAudience: 'Youth, travelers, and South African culture enthusiasts.',
      keyMechanics: [
        {
          title: 'Street Context Trivia',
          description: 'Multiple-choice daily challenges guessing meanings of trending phrases with native audio clips.',
        },
        {
          title: 'Crowdsourced Slang Dictionary',
          description: 'Community-voted regional definitions from Soweto, Umlazi, Mitchells Plain, and Mamelodi.',
        },
        {
          title: 'Audio Pronunciation Engine',
          description: 'Local audio snippets featuring authentic South African accents and colloquial rhythm.',
        },
      ],
      techStack: {
        frontend: 'React 19 / Next.js PWA + Capacitor Android Wrapper',
        backend: 'Supabase Storage for Audio + Database',
        database: 'PostgreSQL with Full-Text Search',
        specialized: 'ExoPlayer Audio Playback Engine',
      },
      feasibilityScore: 4.8,
      estimatedSprints: '2 Sprints (4 Weeks)',
      communityAppeal: 'Fun, culturally resonant, and highly shareable across social media.',
    },
  },
];

// In-memory dynamic store combining seed and live submitted proposals
const communitySuggestionsStore: CommunitySuggestionItem[] = [...seedCommunitySuggestions];

export function getCommunitySuggestions(): CommunitySuggestionItem[] {
  return [...communitySuggestionsStore];
}

export function saveCommunitySuggestion(item: CommunitySuggestionItem): CommunitySuggestionItem {
  communitySuggestionsStore.unshift(item);
  return item;
}

export function findCommunitySuggestion(slugOrId: string): CommunitySuggestionItem | undefined {
  return communitySuggestionsStore.find((s) => s.slug === slugOrId || s.id === slugOrId);
}

export function incrementCommunitySuggestionVote(slugOrId: string): number {
  const item = findCommunitySuggestion(slugOrId);
  if (item) {
    item.communityVotes += 1;
    if (item.communityVotes >= item.voteThreshold) {
      item.hasGraduated = true;
    }
    return item.communityVotes;
  }
  return 0;
}
