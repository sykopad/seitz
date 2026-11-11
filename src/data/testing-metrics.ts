export type AppCategory =
  | 'games'
  | 'productivity'
  | 'fintech'
  | 'social'
  | 'health'
  | 'ai';

export interface EvaluationMetric {
  id: string;
  name: string;
  description: string;
  benchmarkTarget: string; // e.g. "Stable >= 58 FPS", "< 3s time-to-first-task"
  rubricGuide: {
    poor: string; // 1-2 rating
    average: string; // 3 rating
    excellent: string; // 4-5 rating
  };
}

export interface CategoryRubric {
  category: AppCategory;
  displayName: string;
  badge: string;
  description: string;
  coreMetrics: EvaluationMetric[];
  quantitativePrompts: {
    label: string;
    description: string;
    unit: string;
    placeholder: string;
  }[];
  qualitativeQuestions: {
    id: string;
    question: string;
    placeholder: string;
  }[];
}

export const CATEGORY_RUBRICS: Record<AppCategory, CategoryRubric> = {
  games: {
    category: 'games',
    displayName: 'Mobile Games & Indie Titles',
    badge: '🎮 Game Loop & Performance',
    description:
      'Rigorous evaluation of gameplay pacing, first-time user experience (FTUX), touch control latency, and frame rate stability.',
    coreMetrics: [
      {
        id: 'gameplay_loop',
        name: 'Core Gameplay Loop & Immersion',
        description: 'How engaging, intuitive, and rewarding the core mechanic feels within the first 10 minutes.',
        benchmarkTarget: 'High retention appeal (>= 4.0 / 5.0)',
        rubricGuide: {
          poor: 'Confusing objectives, dull mechanics, or rapid player boredom.',
          average: 'Playable and functional, but lacks clear progression hooks or satisfying feedback.',
          excellent: 'Addictive, responsive, satisfying feedback loops with strong urge to play again.',
        },
      },
      {
        id: 'fps_and_frame_drops',
        name: 'FPS Stability & Thermal Throttle',
        description: 'Smoothness of animations, particle effects, and absence of micro-stutters during action.',
        benchmarkTarget: 'Smooth >= 55 FPS with no thermal stuttering',
        rubricGuide: {
          poor: 'Frequent stuttering, unplayable frame drops during intense scenes, device gets noticeably hot.',
          average: 'Playable with minor visual hiccups or occasional frame drops during transitions.',
          excellent: 'Silky smooth 60 FPS performance with cool device thermals and steady battery drain.',
        },
      },
      {
        id: 'touch_input_latency',
        name: 'Touch Controls & Input Precision',
        description: 'Responsiveness of virtual joysticks, taps, gestures, and multi-finger inputs.',
        benchmarkTarget: '< 50ms perceived touch-to-action response',
        rubricGuide: {
          poor: 'Laggy inputs, misregistered taps, clumsy joystick dead-zones.',
          average: 'Acceptable response time, but requires occasional re-tapping or awkward finger gymnastics.',
          excellent: 'Instantaneous tactile precision, comfortable finger zones, zero misfires.',
        },
      },
      {
        id: 'ftux_and_tutorial',
        name: 'Tutorial Clarity & First-Session Friction',
        description: 'How quickly a brand new player understands how to play without frustration or text overload.',
        benchmarkTarget: 'Complete core tutorial in < 90 seconds without confusion',
        rubricGuide: {
          poor: 'Overwhelming wall of text, confusing mechanics, or zero guidance leaving player lost.',
          average: 'Player figures it out through trial and error, but pacing feels interrupted.',
          excellent: 'Seamless contextual teaching, intuitive mechanics, quick ramp up to the fun.',
        },
      },
      {
        id: 'monetization_and_ad_friction',
        name: 'Monetization & Ad Balance',
        description: 'Whether ads, paywalls, or IAP prompts break gameplay immersion or feel intrusive.',
        benchmarkTarget: 'Zero forced interruption during critical gameplay moments',
        rubricGuide: {
          poor: 'Aggressive full-screen popups, intrusive banners overlapping controls, pay-to-win barriers.',
          average: 'Noticeable ads, but placed at acceptable break points like game over screens.',
          excellent: 'Thoughtful rewarded placements, unobtrusive store, player respects the model.',
        },
      },
    ],
    quantitativePrompts: [
      {
        label: 'Observed Average Frame Rate',
        description: 'Estimated visual smoothness (e.g. 60fps, 45fps, 30fps)',
        unit: 'FPS',
        placeholder: 'e.g. 60 FPS',
      },
      {
        label: 'Approximate Battery Drain Rate',
        description: 'Percentage of battery consumed during a 20-minute play test',
        unit: '% per 20 min',
        placeholder: 'e.g. 4%',
      },
    ],
    qualitativeQuestions: [
      {
        id: 'hook_critique',
        question: 'What was the single most engaging moment in the first 5 minutes of play?',
        placeholder: 'Describe the opening scene, control feeling, or sound effect that stood out...',
      },
      {
        id: 'friction_critique',
        question: 'Where did you feel lost, frustrated, or tempted to close the app?',
        placeholder: 'Describe any level difficulty spikes, confusing UI buttons, or control dead-zones...',
      },
      {
        id: 'willingness_to_play',
        question: 'Would you keep this game installed on your primary personal device? Why or why not?',
        placeholder: 'Honest assessment of long-term appeal vs existing titles on the Play Store...',
      },
    ],
  },

  productivity: {
    category: 'productivity',
    displayName: 'Productivity & Utilities',
    badge: '⚡ Workflow Speed & Reliability',
    description:
      'Rigorous evaluation of time-to-first-task, offline functionality, memory efficiency, and UI ergonomics under real workload pressure.',
    coreMetrics: [
      {
        id: 'time_to_first_task',
        name: 'Time-to-Value & Task Velocity',
        description: 'How quickly and effortlessly a user can accomplish the primary job-to-be-done.',
        benchmarkTarget: '< 45 seconds from install to primary task execution',
        rubricGuide: {
          poor: 'Tedious multi-step mandatory setup, confusing navigation, slow task setup.',
          average: 'Task can be completed, but takes extra taps and cognitive effort to find actions.',
          excellent: 'Instantaneous clarity: user achieves objective in seconds with zero manual reading.',
        },
      },
      {
        id: 'offline_and_sync_resilience',
        name: 'Offline Readiness & Data Sync',
        description: 'How gracefully the app handles airplane mode, intermittent cellular, and background saving.',
        benchmarkTarget: '100% data preservation during sudden network loss',
        rubricGuide: {
          poor: 'App crashes, locks up, or silently loses user input when Wi-Fi/cellular drops.',
          average: 'App warns of network loss, but requires manual retry or blocks offline editing.',
          excellent: 'Flawless local-first caching, silent background sync reconciliation upon reconnect.',
        },
      },
      {
        id: 'ui_clarity_and_ergonomics',
        name: 'Visual Hierarchy & Single-Hand Usability',
        description: 'Readability of typography, button reachability on large screens, and absence of visual clutter.',
        benchmarkTarget: 'All primary action buttons within thumb reach zone',
        rubricGuide: {
          poor: 'Tiny touch targets, cramped layouts, critical buttons unreachable at screen top.',
          average: 'Standard layout, but occasionally crowded or hard to parse at a glance.',
          excellent: 'Spacious modern layout, clear visual hierarchy, accessible thumb-friendly actions.',
        },
      },
      {
        id: 'memory_and_background_efficiency',
        name: 'RAM Footprint & Background Behavior',
        description: 'Whether the app stays alive in multitasking memory or triggers aggressive OS task-killing.',
        benchmarkTarget: '< 180MB RAM footprint without background battery drain',
        rubricGuide: {
          poor: 'Heavy memory consumer; OS kills it immediately when switching apps; drains battery in background.',
          average: 'Restarts state occasionally upon app switch; moderate resource footprint.',
          excellent: 'Lightweight, preserves instant state restoration when switching back from other apps.',
        },
      },
      {
        id: 'error_prevention_and_recovery',
        name: 'Input Validation & Mistake Recovery',
        description: 'How the app handles accidental deletes, invalid inputs, or system permission denials.',
        benchmarkTarget: 'Non-destructive undo mechanism & human-readable error messages',
        rubricGuide: {
          poor: 'Accidental taps destroy data; cryptic error codes like "NullPointer" shown to user.',
          average: 'Asks for confirmation, but lacks simple undo or clear explanation of required inputs.',
          excellent: 'Forgiving UX with instant Undo snackbars and polite, actionable input guidance.',
        },
      },
    ],
    quantitativePrompts: [
      {
        label: 'Cold Start Launch Time',
        description: 'Time from clicking icon until interactive (e.g. 1.2s, 2.5s)',
        unit: 'seconds',
        placeholder: 'e.g. 1.5s',
      },
      {
        label: 'Taps to Complete Core Action',
        description: 'Number of taps needed to create/execute the primary item',
        unit: 'taps',
        placeholder: 'e.g. 3 taps',
      },
    ],
    qualitativeQuestions: [
      {
        id: 'daily_workflow_fit',
        question: 'Does this app save you genuine time compared to your current tool or default Android notes/calendar?',
        placeholder: 'Compare with standard workflows and explain what feature stands out most...',
      },
      {
        id: 'friction_critique',
        question: 'What was the most cumbersome interaction in this build?',
        placeholder: 'Mention confusing icons, unnecessary modal dialogues, or hard-to-reach buttons...',
      },
      {
        id: 'pricing_willingness',
        question: 'What pricing model would feel fair for this tool (e.g. Free with Ads, $2.99 one-off, or subscription)?',
        placeholder: 'Explain what would make this app worth paying for...',
      },
    ],
  },

  fintech: {
    category: 'fintech',
    displayName: 'Fintech & Transactional Apps',
    badge: '💳 Security, Trust & Frictionless Checkout',
    description:
      'Rigorous evaluation of checkout flow velocity, biometric security feel, network fault tolerance, and transparency.',
    coreMetrics: [
      {
        id: 'trust_and_security_perception',
        name: 'Perceived Security & Data Privacy',
        description: 'Whether the visual design, permissions, and authentication inspire confidence.',
        benchmarkTarget: '100% confidence rating with zero suspicious permission requests',
        rubricGuide: {
          poor: 'Looks amateurish, asks for unnecessary phone/location access, triggers user suspicion.',
          average: 'Functional security, standard password prompts, basic bank-like appearance.',
          excellent: 'Institutional polish: seamless biometric unlock (fingerprint/face), explicit encryption badges.',
        },
      },
      {
        id: 'checkout_friction_and_dropoff',
        name: 'Transaction Velocity & Form Ergonomics',
        description: 'Ease of entering payment details, autofill support, and step-by-step checkout progression.',
        benchmarkTarget: '< 3-step checkout with Google Autofill / GPay support',
        rubricGuide: {
          poor: 'Exhaustive forms with redundant fields, broken numeric keypad, loses form state on error.',
          average: 'Works reliably but requires extensive manual typing and repetitive confirmation screens.',
          excellent: 'Frictionless: automatic card scan/autofill, dynamic numeric keypad, 1-click confirmation.',
        },
      },
      {
        id: 'network_latency_tolerance',
        name: 'Slow Connection (3G/Poor LTE) Resilience',
        description: 'How well the transaction states prevent double-charging or freeze when connectivity fluctuates.',
        benchmarkTarget: 'Zero double-spend / Idempotent submit with clear spinner status',
        rubricGuide: {
          poor: 'Button clickable multiple times on laggy network, leading to double charges or infinite spinner.',
          average: 'Disables button on tap, but times out without helpful retry instructions.',
          excellent: 'Clear animated pending state, transaction idempotency, instant push receipt upon reconnect.',
        },
      },
      {
        id: 'fee_transparency_and_receipts',
        name: 'Cost Breakdown & Ledger Transparency',
        description: 'Clarity of line-item costs, taxes, exchange rates, and post-transaction receipts.',
        benchmarkTarget: '100% itemized transparency before final submit',
        rubricGuide: {
          poor: 'Hidden fees revealed only at final authorization; no downloadable or itemized receipt.',
          average: 'Shows total cost, but breakdown of processing fees is ambiguous.',
          excellent: 'Crystal clear itemization, exchange rate lock indicator, instant shareable PDF/email receipt.',
        },
      },
      {
        id: 'error_messaging_clarity',
        name: 'Declined & Edge-Case Communication',
        description: 'How clearly the app explains card declines, insufficient funds, or KYC verification steps.',
        benchmarkTarget: 'Plain language explanations with immediate remediation steps',
        rubricGuide: {
          poor: 'Generic "Transaction Error: 500" with zero guidance on how to fix.',
          average: 'Tells user card was declined, but does not specify if it was CVV, limit, or 3D Secure.',
          excellent: 'Pinpoints exact error field (e.g. "Check card expiration year") with 1-tap correction.',
        },
      },
    ],
    quantitativePrompts: [
      {
        label: 'Seconds to Complete Checkout / Transfer',
        description: 'Total seconds from cart / send screen to confirmation',
        unit: 'seconds',
        placeholder: 'e.g. 35 seconds',
      },
      {
        label: 'Biometric Unlock Speed',
        description: 'Time taken to authenticate fingerprint / face unlock',
        unit: 'seconds',
        placeholder: 'e.g. 0.4s',
      },
    ],
    qualitativeQuestions: [
      {
        id: 'trust_sentiment',
        question: 'Did you feel 100% comfortable entering credentials or simulating a transaction? Why or why not?',
        placeholder: 'Comment on layout security, typography, permissions, and overall professional finish...',
      },
      {
        id: 'dropoff_risk',
        question: 'At which step would a real paying customer be most likely to abandon their checkout?',
        placeholder: 'Highlight confusing prompts, lack of preferred payment methods, or confusing fee structures...',
      },
      {
        id: 'audit_verdict',
        question: 'What is the single biggest security or UX polish item before deploying to public production?',
        placeholder: 'Your recommendation for the development team...',
      },
    ],
  },

  social: {
    category: 'social',
    displayName: 'Social, Media & Community Platforms',
    badge: '🌐 Feed Velocity & Engagement Loops',
    description:
      'Rigorous evaluation of infinite scroll performance, media playback buffering, community interaction ergonomics, and moderation accessibility.',
    coreMetrics: [
      {
        id: 'feed_scroll_performance',
        name: 'Feed Smoothness & Infinite Scroll',
        description: 'Smooth 60 FPS scrolling through mixed media lists (images, video previews, text cards).',
        benchmarkTarget: 'Zero jank / micro-stutters during rapid flick scrolling',
        rubricGuide: {
          poor: 'Jerky scrolling, images pop in abruptly causing layout shifts, scroll stuttering.',
          average: 'Acceptable scroll, occasional hiccup when loading new batch of 20 items.',
          excellent: 'Butter-smooth continuous scroll, intelligent pre-caching, rock-solid list recycling.',
        },
      },
      {
        id: 'media_upload_and_playback',
        name: 'Media Compression & Playback Buffering',
        description: 'Speed and reliability of uploading photos/audio and instant playback in feed.',
        benchmarkTarget: '< 1s video playback start with background upload progress',
        rubricGuide: {
          poor: 'Failed uploads without retry, heavy buffering wheels, videos play muted without controls.',
          average: 'Media uploads correctly, but takes noticeable time with modal progress blocking the UI.',
          excellent: 'Instant background uploads with progress bar; video previews start instantaneously.',
        },
      },
      {
        id: 'interaction_loop_ergonomics',
        name: 'Reaction, Comment & Share Ergonomics',
        description: 'Speed of double-tap liking, comment keyboard pop-up, and native share sheet triggering.',
        benchmarkTarget: 'Single-tap reaction with optimistic UI response',
        rubricGuide: {
          poor: 'Laggy comment modal, like button takes 2 seconds to highlight, clunky sharing.',
          average: 'Standard functionality, but lacks tactile micro-animations or haptics.',
          excellent: 'Delightful haptic feedback, instant optimistic UI update, fluid spring animations.',
        },
      },
      {
        id: 'notification_relevance_and_pacing',
        name: 'Push Notification Quality & Fatigue',
        description: 'Whether push notifications deliver genuine value without feeling spammy or intrusive.',
        benchmarkTarget: 'Actionable deep-links directly to the relevant conversation/post',
        rubricGuide: {
          poor: 'Repetitive spam notifications, clicking notification opens home screen instead of the target post.',
          average: 'Relevant alerts, but lacks granular category toggles in settings.',
          excellent: 'Crisp, rich notifications with inline reply actions that deep-link with zero delay.',
        },
      },
      {
        id: 'safety_and_moderation_ease',
        name: 'Report, Block & Privacy Controls',
        description: 'Accessibility of reporting abusive content, blocking profiles, and managing visibility.',
        benchmarkTarget: '< 2 taps to report or block any content item',
        rubricGuide: {
          poor: 'No way to report spam or block users; hidden or non-functional privacy settings.',
          average: 'Report button exists, but requires a lengthy multi-page survey.',
          excellent: 'Swift, humane 2-tap report and mute system with instant confirmation and visual hiding.',
        },
      },
    ],
    quantitativePrompts: [
      {
        label: 'Video Buffer / Start Latency',
        description: 'Seconds before video starts playing smoothly in feed',
        unit: 'seconds',
        placeholder: 'e.g. 0.8s',
      },
      {
        label: 'Media Upload Duration',
        description: 'Time to upload a standard photo/video attachment',
        unit: 'seconds',
        placeholder: 'e.g. 3.2s',
      },
    ],
    qualitativeQuestions: [
      {
        id: 'retention_draw',
        question: 'What element of the community or content would bring you back tomorrow?',
        placeholder: 'Describe the notifications, discussion topics, or creators that caught your attention...',
      },
      {
        id: 'clutter_critique',
        question: 'Was the screen layout too busy or confusing to navigate comfortably?',
        placeholder: 'Comment on bottom tab bar, floating buttons, or unread badge counts...',
      },
      {
        id: 'growth_verdict',
        question: 'Does this platform offer a unique reason to exist alongside Reddit, X, or Instagram?',
        placeholder: 'Honest appraisal of market niche and community potential...',
      },
    ],
  },

  health: {
    category: 'health',
    displayName: 'Health, Fitness & Lifestyle Apps',
    badge: '🏃 Sensor Fidelity & Habit Formation',
    description:
      'Rigorous evaluation of background sensor tracking, GPS battery impact, BLE peripheral reconnection, and glanceable metric dashboards.',
    coreMetrics: [
      {
        id: 'sensor_and_gps_fidelity',
        name: 'Sensor Precision & Location Tracking',
        description: 'Accuracy of step counting, route GPS tracking, and activity detection.',
        benchmarkTarget: 'GPS lock within < 5s with < 3% distance drift',
        rubricGuide: {
          poor: 'Wildly inaccurate route tracking (spiderweb lines), failure to acquire GPS lock indoors.',
          average: 'Acceptable distance recording, but cuts corners or drops tracking in sleep mode.',
          excellent: 'Pinpoint GPS route fidelity with intelligent pause-on-stop and minimal coordinate drift.',
        },
      },
      {
        id: 'background_battery_impact',
        name: 'Continuous Background Tracking Efficiency',
        description: 'Impact on device battery during a 1-hour active tracking session with screen off.',
        benchmarkTarget: '< 6% battery drain per hour of continuous GPS/BLE tracking',
        rubricGuide: {
          poor: 'Device runs hot in pocket, drains 15%+ battery per hour, triggers Android battery warning.',
          average: 'Moderate drain (8-10%/hr); usable for short workouts but unsuitable for all-day wear.',
          excellent: 'Optimized low-power location algorithms, runs quietly with negligible battery drop.',
        },
      },
      {
        id: 'glanceable_dashboard_readability',
        name: 'High-Contrast Dashboard & Motion Legibility',
        description: 'Legibility of key metrics (pace, heart rate, calories) while running or outdoors in sunlight.',
        benchmarkTarget: 'High-contrast typography readable at arms length in daylight',
        rubricGuide: {
          poor: 'Tiny grey text on light background; completely unreadable in outdoor sunlight or while moving.',
          average: 'Readable when stopped, but requires squinting to differentiate split times during motion.',
          excellent: 'Bold high-contrast numerals, configurable data fields, high visibility in direct sun.',
        },
      },
      {
        id: 'habit_and_streak_motivation',
        name: 'Habit Formation & Streak Feedback',
        description: 'How effectively the app rewards daily consistency without inducing toxic guilt.',
        benchmarkTarget: 'Clear positive reinforcement with milestone celebration',
        rubricGuide: {
          poor: 'Zero encouragement, or sends punishing notifications that discourage returning.',
          average: 'Basic streak counter with generic alert reminders.',
          excellent: 'Thoughtful micro-celebrations, adaptable rest-day logic, inspiring visual progression.',
        },
      },
      {
        id: 'privacy_and_health_data_trust',
        name: 'Health Connect / Google Fit Data Transparency',
        description: 'Clear explanations for health permission scopes and medical disclaimer clarity.',
        benchmarkTarget: 'Explicit Health Connect scope transparency & compliant disclaimers',
        rubricGuide: {
          poor: 'Requests unrestricted health permissions without explaining why; makes unverified medical claims.',
          average: 'Standard consent screen, but settings lack granular data export or deletion controls.',
          excellent: 'Exemplary Health Connect integration, clear non-medical disclaimer, easy 1-tap data purge.',
        },
      },
    ],
    quantitativePrompts: [
      {
        label: 'GPS Initial Lock Time',
        description: 'Seconds from opening tracker to verified satellite lock',
        unit: 'seconds',
        placeholder: 'e.g. 4 seconds',
      },
      {
        label: 'Workout Battery Consumption',
        description: 'Battery drop during a 30-minute workout session',
        unit: '% drop',
        placeholder: 'e.g. 3%',
      },
    ],
    qualitativeQuestions: [
      {
        id: 'outdoor_legibility',
        question: 'How easy was it to read your stats while walking or under outdoor sunlight?',
        placeholder: 'Comment on text size, color contrast, and widget placement...',
      },
      {
        id: 'tracking_confidence',
        question: 'Did you trust the accuracy of the logged distance, steps, or duration? Why or why not?',
        placeholder: 'Compare with your smartwatch or built-in phone pedometer...',
      },
      {
        id: 'habit_assessment',
        question: 'Would this app genuinely help you build a healthier habit over 30 days?',
        placeholder: 'Evaluate the motivation, reminder quality, and overall lifestyle fit...',
      },
    ],
  },

  ai: {
    category: 'ai',
    displayName: 'AI Tools & Intelligent Assistants',
    badge: '🤖 Response Velocity & Practical Utility',
    description:
      'Rigorous evaluation of token streaming latency, prompt template ergonomics, response utility vs hallucination, and network timeout handling.',
    coreMetrics: [
      {
        id: 'time_to_first_token',
        name: 'Response Latency & Streaming Fluidity',
        description: 'Time elapsed between tapping send and the first word streaming onto the screen.',
        benchmarkTarget: '< 1.2s to first token on 4G cellular',
        rubricGuide: {
          poor: 'Long frozen blank screen (> 5s); tokens dump all at once causing layout jump.',
          average: 'Reasonable wait (2-3s) with standard loading spinner before text begins streaming.',
          excellent: 'Near-instantaneous typing indicator with smooth typewriter streaming and zero layout shifts.',
        },
      },
      {
        id: 'practical_utility_vs_hallucination',
        name: 'Accuracy & Real-World Utility',
        description: 'Whether responses are concrete, actionable, and free from fabricated claims or repetitive filler.',
        benchmarkTarget: 'Direct, actionable answers tailored to the user prompt',
        rubricGuide: {
          poor: 'Hallucinates nonexistent facts, gives superficial canned non-answers, or repeats itself.',
          average: 'Generally accurate, but verbose and requires follow-up prompts to get to the point.',
          excellent: 'Crisp, highly relevant, accurately structured answers with helpful follow-up suggestions.',
        },
      },
      {
        id: 'prompt_scaffolding_and_templates',
        name: 'Prompt Helpers & Quick Action Starters',
        description: 'Presence of contextual starter chips, voice input, photo uploads, or curated prompts.',
        benchmarkTarget: 'Contextual prompt chips that reduce typing by > 50%',
        rubricGuide: {
          poor: 'Empty intimidating text box with zero starter ideas or guidance on what the AI can do.',
          average: 'Generic starter suggestions, but not customized to the user context or app niche.',
          excellent: 'Intuitive curated prompt cards, microphone voice dictation, smart contextual autocomplete.',
        },
      },
      {
        id: 'timeout_and_fallback_resilience',
        name: 'API Error Handling & Retry Gracefulness',
        description: 'How the app behaves when the LLM provider rate limits, throws a 504 gateway timeout, or loses signal.',
        benchmarkTarget: 'Preserves input prompt with 1-tap retry and clear error message',
        rubricGuide: {
          poor: 'Entire prompt wiped clean on error; app crashes or hangs on infinite loading.',
          average: 'Shows error alert, but requires user to re-paste their prompt from scratch.',
          excellent: 'Keeps user prompt safe in input bar, displays friendly retry chip, explains cause clearly.',
        },
      },
      {
        id: 'token_cost_and_model_value',
        name: 'Perceived Value for Credits / Subscription',
        description: 'Whether the output quality justifies the required subscription, credit balance, or ad watch.',
        benchmarkTarget: 'Clear credit meter with undeniable productivity boost',
        rubricGuide: {
          poor: 'Exhausts credits after 2 basic questions; aggressive paywalls before proving any capability.',
          average: 'Fair free allowance, but pricing feels steep for standard LLM wrapper features.',
          excellent: 'Generous trial value, transparent token/credit meter, clear professional time savings.',
        },
      },
    ],
    quantitativePrompts: [
      {
        label: 'Time to First Streamed Token',
        description: 'Seconds from hitting send until first words appear',
        unit: 'seconds',
        placeholder: 'e.g. 1.1s',
      },
      {
        label: 'Character Count / Answer Depth',
        description: 'Approximate depth of typical answer',
        unit: 'words',
        placeholder: 'e.g. 150 words',
      },
    ],
    qualitativeQuestions: [
      {
        id: 'intelligence_perception',
        question: 'Did the AI understand your intent on the first try, or did you need to repeatedly rephrase?',
        placeholder: 'Detail the prompt you tested and how closely the answer matched your expectation...',
      },
      {
        id: 'formatting_critique',
        question: 'How clean was the markdown, code blocks, lists, or tables in the generated response?',
        placeholder: 'Comment on text wrapping, copy-to-clipboard button convenience, and syntax highlighting...',
      },
      {
        id: 'commercial_differentiation',
        question: 'Is this tool noticeably better or more convenient than opening ChatGPT or Gemini in a browser?',
        placeholder: 'Explain the unique workflow advantage or niche feature this app brings...',
      },
    ],
  },
};

/**
 * Calculates a consolidated Market Viability Index (MVI) out of 100
 * based on core ratings, stability factors, and tester recommendation.
 */
export function calculateMarketViabilityScore(params: {
  coreRatings: Record<string, number>; // ratings 1-5
  crashesObserved: number;
  anrObserved: number;
  wouldRecommend: boolean;
  wouldPayOrKeep: boolean;
}): {
  score: number; // 0-100
  tier: 'Production Ready' | 'Promising with UX Polish' | 'Critical Rework Needed';
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
} {
  const ratingsArray = Object.values(params.coreRatings);
  const avgRating =
    ratingsArray.length > 0
      ? ratingsArray.reduce((acc, curr) => acc + curr, 0) / ratingsArray.length
      : 3.0;

  // Base score from ratings (up to 70 points)
  let score = (avgRating / 5.0) * 70;

  // Recommendation bonus (up to 15 points)
  if (params.wouldRecommend) score += 10;
  if (params.wouldPayOrKeep) score += 5;

  // Stability penalty
  const crashPenalty = params.crashesObserved * 15;
  const anrPenalty = params.anrObserved * 8;
  score = Math.max(0, Math.min(100, Math.round(score - crashPenalty - anrPenalty)));

  let tier: 'Production Ready' | 'Promising with UX Polish' | 'Critical Rework Needed' =
    'Critical Rework Needed';
  let grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F' = 'F';

  if (score >= 88) {
    tier = 'Production Ready';
    grade = score >= 95 ? 'A+' : 'A';
  } else if (score >= 70) {
    tier = 'Promising with UX Polish';
    grade = 'B';
  } else if (score >= 50) {
    tier = 'Promising with UX Polish';
    grade = 'C';
  } else if (score >= 35) {
    tier = 'Critical Rework Needed';
    grade = 'D';
  } else {
    tier = 'Critical Rework Needed';
    grade = 'F';
  }

  return { score, tier, grade };
}
