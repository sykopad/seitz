import { ProjectItem } from '@/types/portfolio';

export const featuredProjects: ProjectItem[] = [
  {
    id: 'aytada',
    name: 'Aytada',
    tagline: 'AI-Powered Short-Form Video Ad Generation Engine',
    category: 'AI & Media',
    description: 'Transform product URLs and descriptions into high-converting, scroll-stopping social video ads. Automates scriptwriting, multi-scene storyboarding, AI video generation, voiceovers, and subtitles.',
    websiteUrl: 'https://aytada.app',
    githubUrl: 'https://github.com/seitzmf/aytada',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\aytada',
    logoUrl: '/images/projects/aytada-logo.svg',
    tags: ['Next.js 16', 'fal.ai', 'OpenRouter', 'ElevenLabs', 'Supabase', 'Drizzle', 'Paystack'],
    featured: true,
    highlights: [
      'Multi-scene automated storyboard synthesis with fal.ai video models',
      'Studio timeline interface with real-time audio and voiceover synchronization',
      'Integrated dual payments for ZAR (Paystack) and international USD (PayPal)'
    ],
    techStack: {
      frontend: 'Next.js 16 (App Router), React 19',
      backend: 'Next.js Server Actions & Edge Handlers',
      database: 'Supabase PostgreSQL + Drizzle ORM',
      styling: 'Tailwind CSS v4 + Glassmorphism',
      specialized: 'fal.ai, OpenRouter, ElevenLabs Voice Synthesis'
    }
  },
  {
    id: 'omniremote',
    name: 'OmniRemote',
    tagline: 'Universal Zero-Lag Smart TV Remote Hub for Samsung, Roku, LG & 30+ Brands',
    category: 'Developer Tools & Utilities',
    description: 'Commercial-grade Smart TV Remote Hub and PWA controlling Samsung Tizen, Roku OS, LG webOS, and universal smart TVs over local Wi-Fi with WebSocket, HTTP ECP, SSAP, and DLNA protocols.',
    githubUrl: 'https://github.com/seitzmf/samsung-remote',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\samsung-remote',
    logoUrl: '/images/projects/omniremote/icon.png',
    tags: ['Next.js 15', 'Capacitor', 'WebSockets', 'Roku ECP', 'LG SSAP', 'Haptics', 'Wake-on-LAN'],
    featured: true,
    highlights: [
      'MultiScreen WebSocket & SSAP protocol reverse engineering for zero-latency local TV control',
      'Wake-on-LAN magic packet injection and universal UPnP/DLNA discovery',
      'Lock screen MediaSession controls and tactile haptic feedback'
    ],
    techStack: {
      frontend: 'Next.js 15, React 19, Capacitor Android',
      backend: 'Next.js Edge API Handlers & Local UDP Relays',
      database: 'IndexedDB & Encrypted Local Device Storage',
      styling: 'Tailwind CSS + OEM Dark Skins',
      specialized: 'Capacitor Haptics, Web Speech API, Wake-on-LAN'
    }
  },
  {
    id: 'cleanandclean',
    name: 'Clean and Clean',
    tagline: 'Grassroots Civic Action & Environmental Gamification',
    category: 'Civic & GovTech',
    description: 'Nationwide environmental action platform mobilizing communities to clean up South Africa. Features ward-level cleanup campaigns, GPS bag collection audits, referral systems, and civic points leaderboards.',
    websiteUrl: 'https://cleanandclean.co.za',
    githubUrl: 'https://github.com/cleanandclean-coza/cleanandclean',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\cleanandclean',
    logoUrl: '/images/projects/cleanandclean-icon.png',
    tags: ['Next.js', 'Mapbox GL', 'Supabase', 'PostGIS', 'Supercluster', 'Vercel'],
    featured: true,
    highlights: [
      'Interactive Mapbox cluster map of municipal cleanup spots with live superclustering',
      'Ward-level civic leaderboards tracking collected waste bags and environmental points',
      'Grassroots referral system empowering local community champions'
    ],
    techStack: {
      frontend: 'Next.js (App Router), React',
      backend: 'Supabase Auth & Database Rules',
      database: 'PostgreSQL + PostGIS',
      styling: 'Tailwind CSS',
      specialized: 'Mapbox GL JS + use-supercluster'
    }
  },
  {
    id: 'decolonize',
    name: 'Decolonize: South Africa',
    tagline: 'Asymmetric Board Game & Neocolonial Flow Network',
    category: 'Games & Simulations',
    description: 'A digital asymmetric multiplayer strategy board game turning neocolonialism, capital flight, trust funds, and state capture into a tangible, playable economic network graph.',
    githubUrl: 'https://github.com/MisterSeitz/decolonize',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\decolonize',
    tags: ['Next.js 16', 'React 19', 'React Flow', 'Supabase', 'Web Audio API', 'fal.ai'],
    featured: true,
    highlights: [
      'Interactive economic network graph powered by @xyflow/react with custom bezier flow edges',
      'Multi-boss cartel AI decision engine with probabilistic threat clocks',
      'Dynamic spatial soundscape engine built on the Web Audio API'
    ],
    techStack: {
      frontend: 'Next.js 16.4, React 19.3',
      backend: 'Supabase Realtime & Postgres',
      database: 'PostgreSQL + Ledger Tables',
      styling: 'Tailwind CSS v4 + Cyber-Decolonial Design System',
      specialized: '@xyflow/react (React Flow 12), Web Audio API'
    }
  },
  {
    id: 'durud',
    name: 'Durud Live',
    tagline: 'Global Real-Time Devotional Recitation PWA',
    category: 'AI & Media',
    description: 'Global real-time platform uniting the Muslim Ummah through collective devotional recitation. Features a live synchronized global counter, offline-first personal tally with haptic pulses, and live recitation lobbies.',
    websiteUrl: 'https://durud.live',
    githubUrl: 'https://github.com/duroodlive/durood-live',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\durud',
    logoUrl: '/images/projects/durud-icon.png',
    tags: ['Next.js', 'PWA', 'Supabase Realtime', 'Web Haptics', 'Tailwind CSS'],
    featured: true,
    highlights: [
      'Live streaming global tally with zero-latency updates across worldwide users',
      'Thursday-to-Friday Maghrib marathon tracker with dynamic timezone adaptation',
      'Offline-first digital counter button with synchronized batch uploads'
    ],
    techStack: {
      frontend: 'Next.js, React, Progressive Web App (PWA)',
      backend: 'Supabase Realtime Broadcast Channels',
      database: 'Supabase PostgreSQL',
      styling: 'Tailwind CSS with Emerald & Obsidian aesthetic',
      specialized: 'Navigator Haptic Feedback API, Service Workers'
    }
  },
  {
    id: 'initra',
    name: 'Initra',
    tagline: 'Autonomous AI Project Scaffolding & Agent IDE Configs',
    category: 'FinTech & SaaS',
    description: 'Intelligent project bootstrapping engine that analyzes repository architectures and generates bespoke IDE agent configurations (GEMINI.md, AGENTS.md, CLAUDE.md, .cursorrules).',
    githubUrl: 'https://github.com/sykopad/initra',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\initra',
    logoUrl: '/images/projects/initra-dark.svg',
    tags: ['Next.js', 'TypeScript', 'AST Analysis', 'Agent Workflows', 'Tailwind CSS'],
    featured: false,
    highlights: [
      'Automated codebase inspection and architectural blueprint generation',
      'Multi-IDE configuration output for Gemini Code Assist, Cursor, and Claude Code',
      'Standardized convention generator for production full-stack repos'
    ],
    techStack: {
      frontend: 'Next.js (App Router), TypeScript',
      backend: 'Node.js AST Code Generation',
      database: 'Stateless / Client-Side Schema Generator',
      styling: 'Tailwind CSS',
      specialized: 'Agent Prompt Engineering & Prompt Compilers'
    }
  },
  {
    id: 'kinetik',
    name: 'Kinetik',
    tagline: 'B2B Fight Gym Roster & Matchmaking Micro-SaaS',
    category: 'FinTech & SaaS',
    description: 'Specialized SaaS for MMA, Boxing, and BJJ fight academies to manage athlete records, medical certificates, training camps, and inter-gym matchmaking across weight divisions.',
    githubUrl: 'https://github.com/MisterSeitz/kinetik',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\kinetik',
    tags: ['Next.js 14+', 'Supabase', 'Drizzle ORM', 'TypeScript', 'Dark Mode'],
    featured: false,
    highlights: [
      'Isolated kinetik database schema with granular multi-gym row-level security',
      'Fighter matchmaking matrix factoring fight records, weight tolerance, and experience',
      'High-contrast combat sports aesthetic with glassmorphism dashboard views'
    ],
    techStack: {
      frontend: 'Next.js 14+ (App Router)',
      backend: 'Next.js Server Actions + Drizzle ORM',
      database: 'Supabase PostgreSQL (Custom kinetik schema)',
      styling: 'Vanilla CSS Design Tokens + Obsidian Dark Mode'
    }
  },
  {
    id: 'schooler',
    name: 'Schooler',
    tagline: 'CAPS Curriculum Dynamic Education & Assessment Platform',
    category: 'Civic & GovTech',
    description: 'Flagship educational platform mapping the South African Department of Basic Education (DBE) curriculum. Ingests over 25,000 learning assets, 11,900+ past exam papers and memos, Mind the Gap study guides, and university masterclasses.',
    websiteUrl: 'https://schooler.co.za',
    githubUrl: 'https://github.com/luceyskye/visita-scholar',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\luceyskye\\visita-scholar',
    logoUrl: '/images/projects/schooler-logo.svg',
    tags: ['Next.js', 'Cloudflare R2', 'Apify Pipelines', 'Mind Maps', '11 SA Languages'],
    featured: true,
    highlights: [
      'Processed and cataloged 11,915 official DBE exam papers and memos stored in Cloudflare R2',
      'Curriculum Term Tracker synchronizing weekly lessons with official DBE schedules',
      'Interactive SVG Bezier Mind Maps and multilingual micro-skills in all 11 SA languages'
    ],
    techStack: {
      frontend: 'Next.js (App Router), React',
      backend: 'Cloudflare Workers & Next.js API Routes',
      database: 'Supabase PostgreSQL',
      styling: 'Tailwind CSS',
      specialized: 'Cloudflare R2 Storage, DotNetNuke Data Ingestion Engine'
    }
  },
  {
    id: 'lumina-work',
    name: 'Lumina Work',
    tagline: 'Multi-Tenant South African HRO & Payroll Compliance SaaS',
    category: 'FinTech & SaaS',
    description: 'Comprehensive Human Resources Outsourcing (HRO) and automated payroll SaaS engineered specifically for South African statutory compliance (PAYE, UIF, SDL, IRP5, BCEA, and POPIA).',
    githubUrl: 'https://github.com/hiraislamiclearning/lumina-work',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\lumina-work',
    tags: ['Next.js Multi-Tenant', 'Supabase', 'Drizzle ORM', 'BCEA Rules', 'Shadcn UI'],
    featured: false,
    highlights: [
      'Multi-tenant architecture separating Client Admin and Employee Self-Service portals',
      'South African statutory tax calculation engine with automated IRP5 tax year filings',
      'POPIA-compliant digital employee document management and leave tracking'
    ],
    techStack: {
      frontend: 'Next.js (App Router with Subdomain Proxying)',
      backend: 'Next.js Route Handlers + Drizzle ORM',
      database: 'Supabase PostgreSQL',
      styling: 'Tailwind CSS + Shadcn UI',
      specialized: 'SARS Tax Compliance & South African Labor Law Engines'
    }
  },
  {
    id: 'mzansi-midnight',
    name: 'Mzansi Midnight',
    tagline: 'South African State Capture Noir RPG Anthology',
    category: 'Games & Simulations',
    description: 'An episodic 5-part connected Dice-and-Node Noir RPG anthology inspired by Citizen Sleeper and Disco Elysium. Maps the systemic anatomy of South African state capture, Eskom sabotage, and political syndicates.',
    githubUrl: 'https://github.com/MisterSeitz/mzansi-midnight',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\mzansi-midnight',
    logoUrl: '/images/projects/mzansi-midnight-icon.svg',
    tags: ['Next.js 15', 'React 19', 'Vitest 107', '10 SA Languages', 'State Capture Lore'],
    featured: true,
    highlights: [
      '5 connected regional campaign crucibles (eThekwini-Gold, Highveld-Chrome, Namaqua-Diamond)',
      'Segmented threat clocks, faction loyalty dynamics, and Keystone Dossier extractions',
      'Full localization engine supporting 10 official South African languages'
    ],
    techStack: {
      frontend: 'Next.js 15.1, React 19',
      backend: 'Deterministic Dice-and-Node RPG Engine',
      database: 'Local State + Session Persistence',
      styling: 'Tailwind CSS Noir Aesthetic',
      specialized: 'Vitest Unit & Narrative Test Suite (107 Tests)'
    }
  },
  {
    id: 'syndicate-mzansi',
    name: 'Syndicate Mzansi Edition',
    tagline: 'Adversarial Cartel Threat-Clock Simulation Engine',
    category: 'Games & Simulations',
    description: 'Autonomous cartel and organized crime network simulation engine. Simulates extortion rings, cash-in-transit syndicates, tender collusion, and illegal mining rackets using probabilistic decision graphs.',
    githubUrl: 'https://github.com/MisterSeitz/decolonize',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\decolonize',
    tags: ['TypeScript', 'AI Threat Clocks', 'Graph Algorithms', 'State Machines'],
    featured: false,
    highlights: [
      'Finite-state AI decision engine executing extortion and regulatory capture maneuvers',
      'Dynamic graph edge corruption models reflecting financial flow laundering',
      'Modular simulation harness shared between investigative tools and strategy games'
    ],
    techStack: {
      frontend: 'React Flow Canvas Integration',
      backend: 'Node.js Finite State AI Engine',
      database: 'In-Memory Graph Representation',
      styling: 'Tailwind CSS Graph Overlays'
    }
  },
  {
    id: 'home-masjid',
    name: 'Home Masjid',
    tagline: 'Global Inter-Masjid Geospatial Discovery & Community Bridge',
    category: 'Civic & GovTech',
    description: 'A global geospatial platform connecting Muslim communities to local masjids. Features high-accuracy Adhan prayer schedules based on GPS coordinates, verified masjid administration, community notices, and crowdfunding.',
    websiteUrl: 'https://homemasjid.co.za',
    githubUrl: 'https://github.com/seitzcodes/home-masjid',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\seitz.codes\\home-masjid',
    logoUrl: '/images/projects/home-masjid-logo.svg',
    tags: ['Next.js', 'PostGIS', 'Adhan API', 'Mapbox GL', 'Resend', 'Supabase'],
    featured: true,
    highlights: [
      'PostGIS geospatial discovery locating closest congregations with millisecond queries',
      'Astronomical prayer timetable calculations calibrated to exact local coordinates',
      'Masjid administrative verification workflows and direct community announcements'
    ],
    techStack: {
      frontend: 'Next.js (App Router), React',
      backend: 'Next.js Server Actions & API Handlers',
      database: 'Supabase PostgreSQL + PostGIS (home_masjid schema)',
      styling: 'Tailwind CSS',
      specialized: 'Adhan Calculation Engine, Mapbox GL JS'
    }
  },
  {
    id: 'crime-intelligence',
    name: 'Crime Intelligence',
    tagline: 'SAPS Precinct Heatmap & Criminal Syndicate Analytics',
    category: 'Civic & GovTech',
    description: 'Geospatial crime intelligence platform aggregating and analyzing official South African Police Service (SAPS) statistics, precinct hotspots, crime category longitudinal trends, and syndicate activities.',
    websiteUrl: 'https://crime.visita.co.za',
    githubUrl: 'https://github.com/MisterSeitz/visita-intelligence',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\visita-intelligence',
    logoUrl: '/images/projects/crime-intelligence-og.png',
    tags: ['Next.js', 'Mapbox GL', 'PostGIS', 'Crime Analytics', 'Supabase'],
    featured: true,
    highlights: [
      'Precinct-level geospatial crime heatmap with quarterly and annual trend filters',
      'Automated extraction and harmonization of national police crime bulletin datasets',
      'High-risk corridor identification and spatial clustering for community security'
    ],
    techStack: {
      frontend: 'Next.js (App Router), React',
      backend: 'Next.js Server Actions + PostGIS Analytics',
      database: 'PostgreSQL + PostGIS',
      styling: 'Tailwind CSS Dark Mode',
      specialized: 'Spatial Heatmaps & SAPS Bulletin ETL Pipelines'
    }
  },
  {
    id: 'shayapay',
    name: 'Shaya Pay',
    tagline: 'Passive NFC Wristband Micro-Fintech for Informal Workers',
    category: 'FinTech & SaaS',
    description: 'Empowers informal workers (car guards, petrol attendants, security guards, casual trades) with digital identity, verification, and cashless customer tipping via passive NFC wristbands.',
    websiteUrl: 'https://shayapay.co.za',
    githubUrl: 'https://github.com/shayapay/shayapay',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\shayapay',
    logoUrl: '/images/projects/shayapay-hero.png',
    tags: ['Next.js 15', 'NFC Hardware', 'Paystack', 'Supabase', '3-Sec Tap Flow'],
    featured: true,
    highlights: [
      '3-second frictionless tap-to-pay workflow requiring zero application download from the customer',
      'Digital professional verification profile providing safety and credibility for workers',
      'Instant payout split integration via Paystack payment rails'
    ],
    techStack: {
      frontend: 'Next.js 15, React 19',
      backend: 'Next.js Server Handlers + Paystack Webhooks',
      database: 'Supabase PostgreSQL + Realtime Balance Sync',
      styling: 'Tailwind CSS v4 + High-Visibility Neon Palette',
      specialized: 'Web NFC API & Passive RFID/NFC Hardware Protocol'
    }
  },
  {
    id: 'visita-civic',
    name: 'Visita Civic',
    tagline: 'South African Municipal Ward & Councillor Intelligence',
    category: 'Civic & GovTech',
    description: 'Civic intelligence platform for South Africa, focusing on the 2026 local ward elections. Enables citizens to find their ward by address/GPS, inspect councillor track records, and review municipal performance metrics.',
    websiteUrl: 'https://visita.co.za',
    githubUrl: 'https://github.com/MisterSeitz/visita-civic',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\visita-civic',
    tags: ['Next.js 15', 'React 19', 'Mapbox GL', 'PostGIS', 'Drizzle ORM'],
    featured: true,
    highlights: [
      'Exact electoral ward boundary lookup with vector polygon map overlays',
      'Elected councillor accountability scorecards and municipal budget monitoring',
      'Voter education center covering local government powers and reporting channels'
    ],
    techStack: {
      frontend: 'Next.js 15 (App Router), React 19',
      backend: 'Next.js Server Actions + Drizzle ORM',
      database: 'Supabase PostgreSQL + PostGIS',
      styling: 'Tailwind CSS v4 + Shadcn UI',
      specialized: 'Electoral Ward Vector Demarcation Overlays'
    }
  },
  {
    id: 'would-you-rather',
    name: 'Would You Rather (Mzansi Edition)',
    tagline: 'Real-Time Cultural Dilemma Game & Live Party Mode',
    category: 'Games & Simulations',
    description: 'Interactive cultural dilemma game tailored with South African humor. Features 4 curated age tiers (Kids, Teens, Adults, After Dark 21+), big-screen Party Rooms, 1v1 Friend Duels, and real-time demographic polling.',
    githubUrl: 'https://github.com/MisterSeitz/would-you-rather',
    localPath: 'C:\\Users\\Faiz\\Documents\\workspaces\\would-you-rather',
    tags: ['Next.js 16', 'Framer Motion', 'Supabase Realtime', 'Party Mode', 'Tailwind CSS'],
    featured: false,
    highlights: [
      'Live synchronized TV/Screen Party Mode with mobile PIN/QR room joining',
      '1v1 Friend Compatibility Duel with shareable challenge URLs and result percentages',
      'Real-time percentage reveal animations powered by Framer Motion'
    ],
    techStack: {
      frontend: 'Next.js 16, React 19',
      backend: 'Supabase Realtime Rooms',
      database: 'Supabase PostgreSQL',
      styling: 'Tailwind CSS v4 + Custom Neon Glow Design System',
      specialized: 'Framer Motion Fluid Transitions & Synchronized State'
    }
  }
];
