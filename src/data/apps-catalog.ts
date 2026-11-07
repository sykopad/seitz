export type AppStatus = 'closed_testing' | 'in_development';

export interface AppMedia {
  icon: string;
  featureGraphic?: string;
  screenshots: string[];
}

export interface AppTechStack {
  frontend: string;
  backend: string;
  database: string;
  styling: string;
  specialized: string;
}

export interface KeyMechanic {
  title: string;
  description: string;
}

export interface AppCatalogItem {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  status: AppStatus;
  trackStatus: string;
  currentTesters: number;
  targetTesters: number;
  openSlots: number;
  communityVotes: number;
  voteThreshold: number;
  testingDuration?: string;
  reward: string;
  rewardValue?: string;
  media: AppMedia;
  summary: string;
  description: string;
  highlights: string[];
  keyMechanics: KeyMechanic[];
  techStack: AppTechStack;
  workspacePath: string;
  googlePlayPackage?: string;
  playStoreUrl?: string;
  featured: boolean;
}

export const appsCatalog: AppCatalogItem[] = [
  {
    slug: 'mzansi-midnight',
    name: 'Mzansi Midnight',
    shortName: 'Mzansi Midnight',
    tagline: '5-Part Dice-and-Node Noir RPG Anthology Mapping South African State Capture',
    category: 'Noir RPG & Interactive Fiction',
    status: 'closed_testing',
    trackStatus: 'Active Closed Beta Track (14-Day Retention)',
    currentTesters: 11,
    targetTesters: 15,
    openSlots: 4,
    communityVotes: 148,
    voteThreshold: 50,
    testingDuration: '14 Continuous Days on Real Android Device',
    reward: 'Free Lifetime Full Edition Unlock + Supporter Badge',
    rewardValue: '$19.99 USD / R350 ZAR',
    media: {
      icon: '/images/projects/mzansi-midnight/icon.png',
      featureGraphic: '/images/projects/mzansi-midnight/feature-graphic.png',
      screenshots: [
        '/images/projects/mzansi-midnight/mzansi-midnight-01.jpg',
        '/images/projects/mzansi-midnight/mzansi-midnight-02.jpg',
        '/images/projects/mzansi-midnight/mzansi-midnight-03.jpg',
        '/images/projects/mzansi-midnight/mzansi-midnight-04.jpg',
        '/images/projects/mzansi-midnight/mzansi-midnight-05.jpg',
      ],
    },
    summary:
      'An episodic, connected 5-part Dice-and-Node Noir RPG anthology inspired by Citizen Sleeper and Disco Elysium, mapping the systemic anatomy of South African state capture, resource cartels, and political conspiracy across five regional crucibles.',
    description:
      'In Mzansi Midnight (Story 1: eThekwini-Gold), players take on the role of a suspended Hawks (DPCI) Warrant Officer surviving out of a generator-powered flat in the Mercury Arcade. Thrust into a conspiracy involving Docket #409—a R400 million municipal water-tanker tender secretly used to transport liquid chemical precursors from Pier 2 for methamphetamine super-labs—players navigate load shedding grids, SAPS roadblocks, and dangerous faction loyalties.',
    highlights: [
      '5 Complete Stories: eThekwini-Gold, Highveld-Chrome, Namaqua-Diamond, Cape-Nocturne, and The Sovereign Octagon',
      'Daily Action Dice & Composure mechanics (rolling 3 to 5 d6 dice based on psychological stability)',
      'Four deep investigator stats: Street, Dockets, Wire, and Influence with black-market hardware upgrades',
      'Rolling Load Shedding system (Stages 2, 4, 6) with Stage 6 server lockouts and covert infiltration bonuses',
      'SAPS Roadblocks, cold-drink bribes, and 1/day faction perks across 10 official South African languages',
    ],
    keyMechanics: [
      {
        title: 'Daily Action Dice & Deterministic Slots',
        description:
          'Each morning cycle rolls 3 to 5 dice based on Composure (80-100% = 5 dice, 40-79% = 4 dice, <40% = 3 dice). Slots resolve mechanically: Clean Success (6+), Compromised Success (4-5), and Failure/Blowback (1-3).',
      },
      {
        title: 'Two-Act Campaign & Segmented Threat Clocks',
        description:
          'Act 1 (The Ghost Docket) races against Brigadier Mokoena’s sweep, gunshot wound trauma, and precinct heat, climaxing at Berth 14 before transitioning into Act 2 (The Commission of Inquiry).',
      },
      {
        title: 'Rolling Blackouts & Generator Overrides',
        description:
          'The city power grid shifts dynamically across Stages 2, 4, and 6. Stage 6 locks out server terminals unless backup diesel generators are fueled (R300) while granting stealth cover bonuses.',
      },
      {
        title: 'SAPS Corridors & Faction Standing Perks',
        description:
          'High heat locks down transit corridors requiring tactical bribes or cloned SAPS transponders. Aligning with factions unlocks tactical perks like City Hall Grid Manipulation and Hawks Safechannels.',
      },
    ],
    techStack: {
      frontend: 'Next.js 16 (App Router), React 19, TypeScript',
      backend: 'Next.js Server Actions & Web Audio Synthesis',
      database: 'Supabase PostgreSQL + Local Storage Cache',
      styling: 'Tailwind CSS v4 + Obsidian Noir Design System',
      specialized: 'Deterministic Dice Engine, 107 Vitest Unit & Narrative Tests',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\mzansi-midnight',
    googlePlayPackage: 'za.co.mzansimidnight.app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=za.co.mzansimidnight.app&hl=en',
    featured: true,
  },
  {
    slug: 'omniremote',
    name: 'OmniRemote: Universal Smart TV Remote',
    shortName: 'OmniRemote',
    tagline: 'Universal Zero-Lag Smart TV Remote Hub for Samsung, Roku, LG & 30+ Brands',
    category: 'Utilities & Smart Home',
    status: 'closed_testing',
    trackStatus: 'Active Closed Beta Track (14-Day Retention)',
    currentTesters: 10,
    targetTesters: 15,
    openSlots: 5,
    communityVotes: 124,
    voteThreshold: 50,
    testingDuration: '14 Continuous Days on Real Android Device',
    reward: 'Free Lifetime Ad-Free Pro Remote License',
    rewardValue: '$14.99 USD / R275 ZAR',
    media: {
      icon: '/images/projects/omniremote/icon.png',
      featureGraphic: '/images/projects/omniremote/feature-graphic.png',
      screenshots: [
        '/images/projects/omniremote/omniremote-01.jpeg',
        '/images/projects/omniremote/omniremote-02.jpeg',
        '/images/projects/omniremote/omniremote-03.jpeg',
        '/images/projects/omniremote/omniremote-04.jpeg',
        '/images/projects/omniremote/omniremote-05.jpeg',
      ],
    },
    summary:
      'A commercial-grade full-stack Android & Web application designed to discover, authenticate, and remotely control Samsung Smart TVs, Roku OS displays, LG webOS, and universal global smart displays over local Wi-Fi with zero external cloud dependencies.',
    description:
      'Originally reverse-engineered from the Android APK Controlla (Samsung MultiScreen WebSocket protocol, Wake-on-LAN, SSDP UPnP), OmniRemote has evolved into a 30+ brand smart home entertainment hub. It replaces sluggish or lost physical remotes with an instant, OEM-adaptive tactile controller complete with volume dials, directional navigation pads, Web Speech API voice dictation, and lock screen media playback controls.',
    highlights: [
      'Comprehensive Brand Matrix: Samsung (Tizen OS 2016-2026), Roku OS (TCL, Hisense, Sharp), LG webOS (3.0 to 24+), and Universal Smart TVs',
      'Dual WebSocket & HTTP Engines: Port 8001/8002 TLS WS (Samsung), Port 8060 ECP (Roku), Port 3000/3001 SSAP (LG), DLNA/DIAL Engine',
      'Wake-on-LAN (WOL) magic packet generation to power on sleeping displays directly over LAN',
      'Mobile MediaSession integration providing system lock screen volume and playback buttons',
      'Native Navigator Haptics, voice input dictation, sleep timers, and smart home webhook trigger hub',
    ],
    keyMechanics: [
      {
        title: 'MultiScreen & SSAP WebSocket Clients',
        description:
          'Connects directly to Samsung and LG TVs using encrypted local TLS WebSockets, exchanging handshake tokens and persisting client authorizations without third-party servers.',
      },
      {
        title: 'Universal SSDP & DIAL Auto-Discovery',
        description:
          'Scans local subnets for mSearch UPnP devices and DIAL endpoints, identifying TV manufacturers, MAC addresses, and active capabilities in under 800ms.',
      },
      {
        title: 'Roku ECP REST Integration',
        description:
          'Communicates with Roku OS displays (TCL, Hisense, Onn) via standard HTTP port 8060, enabling instant keypress dispatch, app launch deep links, and device info polling.',
      },
      {
        title: 'Lock Screen & Background Control',
        description:
          'Registers HTML5 MediaSession actions allowing users to adjust TV volume, pause movies, and skip tracks straight from the Android lock screen or notification shade.',
      },
    ],
    techStack: {
      frontend: 'Next.js 15, React 19, Capacitor Android',
      backend: 'Next.js Edge API Handlers & Local UDP/WebSocket Relays',
      database: 'IndexedDB & Encrypted Local Device Storage',
      styling: 'Tailwind CSS + Adaptive OEM Dark Skins',
      specialized: 'Capacitor Haptics, Web Speech API, Wake-on-LAN Magic Packets',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\samsung-remote',
    googlePlayPackage: 'co.za.omniremote.app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=co.za.omniremote.app',
    featured: true,
  },
  {
    slug: 'cleanandclean',
    name: 'Clean and Clean',
    shortName: 'Clean and Clean',
    tagline: 'Nationwide Grassroots Civic Action & Environmental Gamification Platform',
    category: 'Civic & GovTech',
    status: 'closed_testing',
    trackStatus: 'Active Closed Beta Track (14-Day Retention)',
    currentTesters: 9,
    targetTesters: 15,
    openSlots: 6,
    communityVotes: 98,
    voteThreshold: 50,
    testingDuration: '14 Continuous Days on Real Android Device',
    reward: 'Permanent Supporter Tier & Ward Champion Badge',
    rewardValue: 'Lifetime Recognition & VIP Civic Points',
    media: {
      icon: '/images/projects/cleanandclean-icon.png',
      screenshots: [
        '/images/projects/cleanandclean-icon.png',
      ],
    },
    summary:
      'A nationwide environmental action platform mobilizing communities to clean up South Africa, encourage a culture of cleanliness, and systematically scale grassroots actions starting in Verulam.',
    description:
      'Clean and Clean combines high-performance geospatial mapping with social gamification. Citizens register cleanup hotspots, coordinate community events, log GPS-verified waste bags, and compete on ward-level leaderboards. The platform turns waste management from an invisible municipal grievance into a tangible, celebrated civic achievement.',
    highlights: [
      'Interactive Mapbox GL cluster map with use-supercluster for smooth rendering of thousands of cleanup sites',
      'GPS-verified bag collection audits with before-and-after photo uploads and municipal tagging',
      'Ward-level leaderboards tracking accumulated cleanup points and active volunteer participation',
      'Grassroots referral system and Buddy Groups fostering street-by-street collective ownership',
      'Full Supabase Auth with Google OAuth and PostgreSQL Row-Level Security',
    ],
    keyMechanics: [
      {
        title: 'Geospatial Superclustering',
        description:
          'Aggregates high-density municipal cleanup spots into dynamic map clusters that expand into detailed hotspot cards upon zooming.',
      },
      {
        title: 'Ward-Level Civic Points Leaderboard',
        description:
          'Allocates verified points to municipal wards, allowing communities to compare cleanliness progress and crown quarterly Ward Champions.',
      },
      {
        title: 'Bag Audit Verification Workflow',
        description:
          'Requires event organizers to log collected waste bag tallies with photo evidence, preventing spam and ensuring reliable environmental reporting.',
      },
      {
        title: 'Buddy Groups & Referral Engine',
        description:
          'Enables community members to form cleanup squads, coordinate transport, and invite neighbors with localized referral links.',
      },
    ],
    techStack: {
      frontend: 'Next.js (App Router), React 19, TypeScript',
      backend: 'Supabase Server Actions & Webhooks',
      database: 'PostgreSQL + PostGIS Geospatial Extensions',
      styling: 'Tailwind CSS with Nature Emerald Theme',
      specialized: 'Mapbox GL JS, react-map-gl, use-supercluster',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\cleanandclean',
    googlePlayPackage: 'za.co.cleanandclean.app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=za.co.cleanandclean.app&hl=en',
    featured: true,
  },
  {
    slug: 'decolonize',
    name: 'Decolonize: South Africa',
    shortName: 'Decolonize',
    tagline: 'Asymmetric Board Game & Neocolonial Flow Network Simulation',
    category: 'Strategy Games & Simulations',
    status: 'in_development',
    trackStatus: 'Community Voting Track (Target: 50 Votes)',
    currentTesters: 0,
    targetTesters: 15,
    openSlots: 15,
    communityVotes: 38,
    voteThreshold: 50,
    testingDuration: '14 Days upon Closed Beta Release',
    reward: 'Permanent Liberation Architect Founder Badge + Full Game Unlock',
    rewardValue: '$19.99 USD / R350 ZAR',
    media: {
      icon: '/images/projects/initra-dark.svg',
      screenshots: [],
    },
    summary:
      'An asymmetric multiplayer strategy board game and civic education blueprint turning neocolonialism, capital flight, discretionary trusts, and state capture into a tangible, playable 4-band spatial network graph.',
    description:
      'Unlike traditional games that simulate simplistic property trading, Decolonize: South Africa models how modern wealth extraction operates: layered corporate shells, transfer pricing via Mauritius, public-private partnership debt traps, and regulatory capture. Players cooperate as a Liberation Coalition or play as an Oligarch Syndicate in a high-stakes constitutional battle.',
    highlights: [
      '4-Band Spatial Coordinate Board built with @xyflow/react (Offshore Vault, The Chambers, The Registry, The Commons)',
      'Dual Asymmetric Game Modes: Co-op Liberation Mode (1-4 Players vs System AI Boss) and Asymmetric PvP (1 Oligarch vs 3 Coalition)',
      'Mechanisms modeling transfer pricing, SLAPP lawsuits, Land Trusts, Mutual Banks, PAIA audits, and general strikes',
      'Dynamic spatial soundscape engine built on the pure Web Audio API',
      'Authoritative game state machine with zero-latency synchronization',
    ],
    keyMechanics: [
      {
        title: 'The 4-Band Spatial Network Graph',
        description:
          'Wealth flows vertically from physical community nodes up into offshore tax havens (Mauritius, BVI) unless intercepted horizontally into community sovereignty.',
      },
      {
        title: 'Sovereignty vs. Extraction Index',
        description:
          'The Coalition wins by driving Sovereignty to 100%; the Syndicate wins if the Extraction Index reaches 100%, triggering IMF structural adjustment austerity.',
      },
      {
        title: 'Co-op vs. Asymmetric PvP Modes',
        description:
          'Supports solo/co-op play against an adaptive System AI Boss or cutthroat 1v3 multiplayer where one player commands legal shields and capital.',
      },
      {
        title: 'Corporate Piercing & PAIA Audits',
        description:
          'Players deploy legal discovery, union strikes, and community buyouts to pierce obfuscated discretionary trusts and reclaim municipal land.',
      },
    ],
    techStack: {
      frontend: 'Next.js 16.4, React 19.3, TypeScript',
      backend: 'Supabase Realtime Broadcast Channels',
      database: 'PostgreSQL + Ledger Flow State',
      styling: 'Tailwind CSS v4 + Cyber-Decolonial Aesthetic',
      specialized: '@xyflow/react (React Flow 12), Web Audio API Synth',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\decolonize',
    featured: true,
  },
  {
    slug: 'mira',
    name: 'Mira: AI Wardrobe & Stylist',
    shortName: 'Mira',
    tagline: 'AI-Powered Mobile Wardrobe Intelligence & Personal Color Stylist for Women',
    category: 'AI & Fashion Tech',
    status: 'in_development',
    trackStatus: 'Community Voting Track (Target: 50 Votes)',
    currentTesters: 0,
    targetTesters: 15,
    openSlots: 15,
    communityVotes: 34,
    voteThreshold: 50,
    testingDuration: '14 Days upon Closed Beta Release',
    reward: 'Lifetime VIP Stylist Pro Tier + Free Virtual Try-On Credits',
    rewardValue: '$29.99 USD / R500 ZAR',
    media: {
      icon: '/images/projects/aytada-logo.svg',
      screenshots: [],
    },
    summary:
      'An AI-powered, mobile-first wardrobe intelligence platform that transforms physical closets into an interactive digital wardrobe using multimodal computer vision, 12-season color psychology, and generative virtual try-on.',
    description:
      'Mira solves the morning cognitive load of dressing. A 60-second single selfie analyzes skin undertone, contrast, and personal color season. Users digitize garments with in-browser WebAssembly background removal, receive weather-calibrated outfit recommendations with psychological rationales, and try on outfits virtually with diffusion AI.',
    highlights: [
      '60-Second single-selfie 12-season color analysis with custom power palette generation',
      'One-tap garment digitization with zero-server-cost in-browser WebAssembly background removal',
      'Weather-calibrated daily stylist (Open-Meteo) factoring temperature, humidity, UV, and personal mood',
      'Controlled generative Virtual Try-On (VTON) rendering outfits onto personal body photos via fal.ai',
      'WhatsApp "Fit Check" live friend polls with zero-login voting and dynamic OpenGraph previews',
    ],
    keyMechanics: [
      {
        title: 'Single-Selfie 12-Season Color Engine',
        description:
          'Utilizes Gemini 2.5 Flash multimodal vision to extract skin undertones, contrast ratios, and metallics, mapping users to their precise seasonal palette.',
      },
      {
        title: 'Client-Side WASM Background Stripping',
        description:
          'Uses @imgly/background-removal in WebAssembly to isolate clothing items directly on the mobile device with zero server processing latency.',
      },
      {
        title: 'Generative Virtual Try-On (VTON)',
        description:
          'Blends user garment cuts onto baseline photos with fal.ai diffusion models, caching outfit combination signatures to avoid redundant compute.',
      },
      {
        title: 'Social Fit-Check WhatsApp Polls',
        description:
          'Generates instant shareable web polls where friends vote on outfits with zero app install required.',
      },
    ],
    techStack: {
      frontend: 'Next.js 15+, React 19, Vaul Mobile Bottom Sheets',
      backend: 'Next.js Server Actions & Edge Route Handlers',
      database: 'Supabase PostgreSQL + Storage Buckets',
      styling: 'Tailwind CSS + Editorial Luxury Minimal Palette',
      specialized: 'Google Gemini 2.5 Flash, fal.ai VTON, @imgly/background-removal, Open-Meteo',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\mira',
    featured: true,
  },
  {
    slug: 'payday',
    name: 'Payday (Trust-Buster)',
    shortName: 'Payday',
    tagline: 'The Collective Commonwealth Engine: Cooperative Board Game Inverting Monopoly',
    category: 'Co-op Strategy Board Games',
    status: 'in_development',
    trackStatus: 'Community Voting Track (Target: 50 Votes)',
    currentTesters: 0,
    targetTesters: 15,
    openSlots: 15,
    communityVotes: 29,
    voteThreshold: 50,
    testingDuration: '14 Days upon Closed Beta Release',
    reward: 'Lifetime Trust-Buster Collector Edition + Supporter Badge',
    rewardValue: '$19.99 USD / R350 ZAR',
    media: {
      icon: '/images/projects/shayapay-hero.png',
      screenshots: [],
    },
    summary:
      'An asymmetric, cooperative economic board game reviving the original anti-monopolist roots of board gaming: players band together to dismantle an entrenched corporate syndicate that starts Turn 1 owning everything.',
    description:
      'Reviving Elizabeth Magie’s 1904 Landlord’s Game premise, Payday: Trust-Buster starts at the monopoly endgame. Every property is owned by a corporate Syndicate extracting predatory tariffs. Players pool Capital, Solidarity, and Leverage to convert monopolies into Community Land Trusts, Worker Cooperatives, and Municipal Commons before burnout or regulatory capture triggers table defeat.',
    highlights: [
      'Historical Inversion: Starts at Monopoly endgame where players cooperate to liberate private monopolies into commons',
      '4 Dynamic Currencies: Capital ($), Solidarity Tokens, Leverage Tokens, and personal Burnout (0 to 6)',
      'Dual Global Tracks: Regulatory Capture Track (Syndicate countdown) vs. Public Trust Track (Player dividend engine)',
      'De-commodification mechanics converting railroads into free transit hubs and utilities into municipal power',
      'The Holding Cell (Jail) functions as a tactical organizing hub for solidarity strikes',
    ],
    keyMechanics: [
      {
        title: 'Zero-Sum Accumulation to Cooperative Liberation',
        description:
          'Players win or lose as a coalition. A single player collapsing from Burnout can cause table defeat, making mutual aid essential.',
      },
      {
        title: 'De-commodification over Rent Extraction',
        description:
          'Landing on syndicate properties allows players to organize boycotts, squat spaces, or initiate collective community buyouts.',
      },
      {
        title: 'Universal Dividend on Payday',
        description:
          'Passing GO triggers a dynamic community dividend that increases in value as public infrastructure is reclaimed from monopolies.',
      },
      {
        title: 'Tactical Carceral Resistance',
        description:
          'Players in the Holding Cell can launch hunger strikes and legal challenges that freeze Syndicate tariffs across the entire board.',
      },
    ],
    techStack: {
      frontend: 'Next.js 15, React 19, TypeScript',
      backend: 'Next.js Server Actions & Game State Engine',
      database: 'Supabase PostgreSQL + Realtime State',
      styling: 'Tailwind CSS with Retro-Economic Aesthetic',
      specialized: 'Finite State Machine Game Engine, Web Audio API Sound Effects',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\payday',
    featured: true,
  },
  {
    slug: 'syndicate',
    name: 'Mzansi Syndicate: Cape Flats & Taxi Wars',
    shortName: 'Mzansi Syndicate',
    tagline: 'South African Underworld Strategy & RPG Territorial Simulation',
    category: 'Strategy & RPG Simulations',
    status: 'in_development',
    trackStatus: 'Community Voting Track (Target: 50 Votes)',
    currentTesters: 0,
    targetTesters: 15,
    openSlots: 15,
    communityVotes: 42,
    voteThreshold: 50,
    testingDuration: '14 Days upon Closed Beta Release',
    reward: 'Free Lifetime Underworld Kingpin Pass + Custom Capo Alias',
    rewardValue: '$24.99 USD / R420 ZAR',
    media: {
      icon: '/images/projects/crime-intelligence-og.png',
      screenshots: [],
    },
    summary:
      'A South African underworld strategy and RPG simulation inspired by classic Mafia Wars game loops, featuring persistent territorial conquest across Cape Flats gang turfs and national taxi association routes.',
    description:
      'Mzansi Syndicate features two selectable campaign theatres: the Cape Flats Wars (The Americans, Hard Livings, 26s/27s/28s Numbers Gangs, Mandrax/Tik/Perlemoen rackets) and the Taxi Wars (CATA, CODETA, Izinkabi hitmen, Quantum fleet wars, and 30% construction mafia extortion). Features 5-tier HQ ascension, tactical lieutenants, dynamic highway bullion convoys, and procedural Web Audio.',
    highlights: [
      'Two Selectable Campaign Theatres: Cape Flats Gang Wars and Gauteng/KZN Taxi Association Wars',
      'Authentic Numbers Gang initiation rites (26s Cunning, 27s Blood Law, 28s Night Soldiers)',
      '5-Tier HQ Ascension: Shack to Garage to Loft to Penthouse to Citadel Tower',
      'Tactical Lieutenants & Orders Engine assigning Izinkabi to attack, defend, patrol, and convoy intercept stances',
      'Zero-dependency procedural Web Audio synthesizing realistic gunshots, coin arpeggios, and police sirens',
    ],
    keyMechanics: [
      {
        title: 'Classic Vitals & Financial Laundering',
        description:
          'Health, Energy, and Stamina govern criminal operations and street ambushes. Cash in hand is vulnerable to muggings; bank deposits incur a 10% laundering fee.',
      },
      {
        title: 'Tactical Lieutenants & Stance Engine',
        description:
          'Assign recruited enforcers to persistent stances (attack, defend, patrol, heist, escort, intercept) to secure controlled territory.',
      },
      {
        title: 'Dynamic Highway Bullion Convoys',
        description:
          'Scheduled Cash-in-Transit (CIT) armored vans travel real-time highway corridors (N1, R21, N2) that players can escort or ambush.',
      },
      {
        title: 'Pollsmoor Prison & Magistrate Bail System',
        description:
          'Arrests trigger active prison yard mechanics involving cell boss politics, contraband trade, and jailbreak coordination.',
      },
    ],
    techStack: {
      frontend: 'React 19, Next.js, TypeScript',
      backend: 'Next.js Server Actions & State Reducers',
      database: 'Supabase PostgreSQL + Realtime Presence',
      styling: 'Tailwind CSS with Gritty Underworld Neon Dark Mode',
      specialized: 'Zero-Dependency Web Audio API Procedural Synthesizer',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\syndicate',
    featured: true,
  },
  {
    slug: 'toll-plaza',
    name: 'Mzansi Trivia Road Trip (Toll Plaza)',
    shortName: 'Toll Plaza',
    tagline: 'Multiplayer South African Trivia Road Trip Across National Highways',
    category: 'Cultural Trivia Board Games',
    status: 'in_development',
    trackStatus: 'Community Voting Track (Target: 50 Votes)',
    currentTesters: 0,
    targetTesters: 15,
    openSlots: 15,
    communityVotes: 31,
    voteThreshold: 50,
    testingDuration: '14 Days upon Closed Beta Release',
    reward: 'Lifetime Road Trip Pass + Golden Quantum Taxi Token',
    rewardValue: '$14.99 USD / R250 ZAR',
    media: {
      icon: '/images/projects/toll-plaza-icon.svg',
      screenshots: [],
    },
    summary:
      'An interactive, multiplayer South African trivia board game where 2 to 6 players navigate iconic national highways (N1, N2, N3, N4, R56), conquer provincial toll plazas, survive load shedding, and collect regional souvenirs.',
    description:
      'Mzansi Trivia Road Trip combines physical board game ergonomics with authentic road trip banter. Driving Minibus Taxis, Karoo Bakkies, or Citi Golfs, players earn Padstal Points by answering questions across 6 rich regional trivia decks, clearing toll chokepoints, and racing to collect all 6 cultural souvenirs.',
    highlights: [
      'Interactive connected highway graph of national routes (N1-N4) and gravel shortcuts (R56)',
      '6 Color-Coded Regional Trivia Decks: Beats & Screen, Diski & Bokke, Braai & Chow, History & Icons, Mzansi Slang, The Scenic Route',
      '6 Collectible Cultural Souvenirs: Protea Pin, Golden Braai Tongs, Minibus Taxi, Golden Vuvuzela, Zulu Beaded Flag, Springbok Horns',
      'Toll Plaza barrier chokepoints requiring Padstal Points, 10s True/False sprints, or Taxi Fare Hooter passes',
      'Special road event tiles: Padstals, Corner Spaza Shops, Potholes, and Stage 6 Load Shedding blur outages',
    ],
    keyMechanics: [
      {
        title: 'Highway Graph Navigation',
        description:
          'Choose between reliable tar national highways or treacherous gravel shortcuts with higher risks of pothole tire blowouts and Eish! cards.',
      },
      {
        title: 'Toll Plaza Chokepoints',
        description:
          'Provincial borders force vehicles to stop until players pay 100 Padstal Points, win a rapid-fire trivia sprint, or spend an inventory pass.',
      },
      {
        title: 'Cultural Souvenir Collection Quest',
        description:
          'Victory requires gathering all 6 regional cultural tokens from different provinces before racing to the destination hub.',
      },
      {
        title: 'Load Shedding Event Tiles',
        description:
          'Landing on a Stage 6 blackout tile blurs multiple-choice answers, testing players on pure recall without prompt hints.',
      },
    ],
    techStack: {
      frontend: 'React 19, Vite, TypeScript',
      backend: 'Supabase Realtime Broadcast Rooms',
      database: 'PostgreSQL Trivia Question Banks',
      styling: 'Tailwind CSS with Roadside Padstal Aesthetic',
      specialized: 'Web Audio API Engine, Realtime Multiplayer Sync',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\toll-plaza',
    featured: true,
  },
  {
    slug: 'would-you-rather',
    name: 'Would You Rather (Mzansi Edition)',
    shortName: 'Would You Rather',
    tagline: 'Multi-Age Cultural Dilemma Party Game with Synchronized Rooms & Live Duels',
    category: 'Party Games & Social Dilemmas',
    status: 'closed_testing',
    trackStatus: 'Active Closed Beta Track (14-Day Retention)',
    currentTesters: 8,
    targetTesters: 15,
    openSlots: 7,
    communityVotes: 52,
    voteThreshold: 50,
    testingDuration: '14 Continuous Days on Real Android Device',
    reward: 'Lifetime Party Host Pass + Custom Duel Rooms',
    rewardValue: '$9.99 USD / R180 ZAR',
    media: {
      icon: '/images/projects/would-you-rather/icon.png',
      screenshots: [],
    },
    summary:
      'A multi-age cultural dilemma party web application with four distinct dynamic age tiers, live synchronized room codes, 1v1 friend duels, and demographic breakdowns.',
    description:
      'Would You Rather treats age tiers as first-class dynamic themes that alter UI styling, animations, and content safety. From silly animal questions for kids (with Web Speech TTS) to sharp cultural dilemmas for teens and spicy late-night questions for adults, it delivers instant entertainment with real-time community vote percentages.',
    highlights: [
      '4 First-Class Age Tiers: Kids (6-12), Teens (13-17), Adults Family (18+), and Adults After Dark (18+ Gated)',
      'Synchronized multiplayer party rooms with live room codes for group gatherings and party games',
      '1v1 Friend Duel mode with split-screen synchronized voting',
      'Deep demographic voting breakdown showing how different age tiers and provinces voted',
      'Text-to-Speech audio prompts for young early readers in the Kids tier',
    ],
    keyMechanics: [
      {
        title: 'Age-Tiered Dynamic Guardrails',
        description:
          'Kids mode enforces strict curation and big tap targets; Teens mode unlocks swipe animations and streaks; After Dark mode requires verified age gates.',
      },
      {
        title: 'Synchronized Group Rooms',
        description:
          'Host group party rooms where everyone in the room votes simultaneously and sees real-time vote reveals on screen.',
      },
      {
        title: 'Demographic Breakdown Engine',
        description:
          'Reveals how age groups, genders, and regions differed on difficult cultural choices with interactive bar charts.',
      },
      {
        title: 'Community Submission & Moderation',
        description:
          'Allows players to submit their own wild cultural dilemmas for community voting and peer review.',
      },
    ],
    techStack: {
      frontend: 'Next.js 16 (App Router), React 19, TypeScript',
      backend: 'Next.js Server Actions & Edge Handlers',
      database: 'Supabase PostgreSQL with Atomic Vote Increments',
      styling: 'Tailwind CSS v4 + Framer Motion Animations',
      specialized: 'Web Speech API Text-to-Speech, Session Tracking',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\would-you-rather',
    googlePlayPackage: 'co.za.wouldyourather.app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=co.za.wouldyourather.app',
    featured: true,
  },
  {
    slug: 'debate-league',
    name: 'Debate League',
    shortName: 'Debate League',
    tagline: 'Digital Operating Platform for Competitive Parliamentary Debate & Forensics',
    category: 'EdTech & AI Forensics',
    status: 'in_development',
    trackStatus: 'Community Voting Track (Target: 50 Votes)',
    currentTesters: 0,
    targetTesters: 15,
    openSlots: 15,
    communityVotes: 25,
    voteThreshold: 50,
    testingDuration: '14 Days upon Closed Beta Release',
    reward: 'Lifetime Adjudicator & Coach Pro Tier',
    rewardValue: '$39.99 USD / R699 ZAR',
    media: {
      icon: '/images/projects/schooler-logo.svg',
      screenshots: [],
    },
    summary:
      'An offline-first digital operating platform engineered for debaters, squads, adjudicators, coaches, and league tab rooms across WSDC and British Parliamentary (BP) debate formats.',
    description:
      'Debate League unifies real-time case preparation and flowpad canvases with precision competitive timers, Point of Information (POI) tracking, Google Gemini AI sparring bots, Swiss/BP tournament tabulation, and digital ballot scorecards with official speaker scoring bands.',
    highlights: [
      'Real-time Case Prep & Flowpad Canvas for First, Second, Third, and Reply speakers',
      'Precision parliamentary timer with protected minute bell knocks and POI tracking',
      'Google Gemini AI Sparring Bot for automated speech evaluation, rebuttal drilling, and argument clash analysis',
      'Tournament Tabulation Engine with Swiss and British Parliamentary pairing algorithms',
      'Adjudicator digital ballot scorecards with WSDC (60-80) and BP (50-100) scoring bands',
    ],
    keyMechanics: [
      {
        title: 'Real-Time Case Prep & Flowpad Canvas',
        description:
          'Allows team debaters to map argument splits, stakeholder impact frameworks, and rebuttal assignments simultaneously during 15-minute prep.',
      },
      {
        title: 'Precision Parliamentary Timekeeper',
        description:
          'Enforces official bell knocks at protected minutes (e.g. 1st and 7th minute in WSDC) while tracking POIs offered versus accepted.',
      },
      {
        title: 'Gemini AI Debate Sparring Partner',
        description:
          'Debaters practice speeches against an adaptive AI opponent that generates cross-examinations and scores argumentation depth.',
      },
      {
        title: 'Swiss & BP Tournament Tab Room',
        description:
          'Replaces cumbersome legacy tab software with instant browser-based Swiss pairings, conflict-of-interest checks, and live ballot calculation.',
      },
    ],
    techStack: {
      frontend: 'Next.js 15+, React 19, TypeScript',
      backend: 'Next.js Server Actions & Supabase Realtime',
      database: 'Supabase PostgreSQL + Dexie.js (IndexedDB Offline)',
      styling: 'Tailwind CSS with Academic Minimal Theme',
      specialized: 'Google Gemini AI Audio/STT, Web Audio Gavel Engine',
    },
    workspacePath: 'C:\\Users\\Faiz\\Documents\\workspaces\\debate-league',
    featured: true,
  },
];

export function getAppBySlug(slug: string): AppCatalogItem | undefined {
  return appsCatalog.find((app) => app.slug === slug);
}

export function getActiveTestingApps(): AppCatalogItem[] {
  return appsCatalog.filter((app) => app.status === 'closed_testing');
}

export function getVotingProjects(): AppCatalogItem[] {
  return appsCatalog.filter((app) => app.status === 'in_development');
}
