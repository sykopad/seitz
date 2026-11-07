# Seitz.co.za — Project Implementation Roadmap

This roadmap outlines the end-to-end execution plan to build, launch, and scale **Seitz.co.za** and **The Seitz Testing Lab (`/testers`)**.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                  PROJECT ROADMAP                                       │
├────────────────────┬────────────────────┬────────────────────┬─────────────────────────┤
│ Phase 1: Foundation│ Phase 2: Portfolio │ Phase 3: Lab Portal│ Phase 4: Integrations   │
│ Tech Stack Setup   │ Homepage & Tiers   │ /testers & Intake  │ Google Play / Cohorts   │
├────────────────────┼────────────────────┼────────────────────┼─────────────────────────┤
│ Phase 5: Feedback  │ Phase 6: App Roster│ Phase 7: Service   │ Phase 8: Launch & Scale │
│ 14-Day Auto-Loop   │ Live Cohorts & Vote│ Client Fast-Track  │ DNS, Vercel & Multi-App │
└────────────────────┴────────────────────┴────────────────────┴─────────────────────────┘
```

---

## Phase 1: Project Scaffolding & Technical Foundation ✅ (Completed)
**Goal:** Initialize the Next.js repository, configure styling and UI systems, set up Supabase database and environment configurations.

- [x] **Next.js & Styling Setup**
  - Initialize Next.js 16+ with App Router and TypeScript
  - Configure Tailwind CSS v4 and Turbopack integration
  - Install icons (`lucide-react`) and animation utilities (`clsx`, `tailwind-merge`, `framer-motion`)
  - Set up brand typography, Obsidian dark mode palette, and glassmorphism utilities
- [x] **Database & Backend Architecture (Supabase)**
  - Authored database migration for `testers`, `testing_campaigns`, `feedback_submissions`, and `project_inquiries` tables
  - Configured Row Level Security (RLS) policies allowing public anonymous inserts on forms while restricting reads to admin
  - Set up Supabase Client & Server helpers (`@supabase/ssr`)
- [x] **Environment Configuration**
  - Configured `.env.local` and `.env.example` with Supabase URL, anon key, service role key, and email service credentials
- [x] **Portfolio Data & Asset Porting**
  - Ported 15 featured projects, 37 Apify actors, and pricing tiers from `mfseitz-portfolio`
  - Migrated project badges and image assets into `public/images/projects/`

---

## Phase 2: Core Developer Portfolio (`seitz.co.za`) ✅ (Completed)
**Goal:** Build a high-converting, authority-building homepage that establishes technical credibility for freelance clients across web, mobile, and web scraping.

- [x] **Navigation & Header Component (`Section 1`)**
  - Responsive navbar with brand anchor: `Seitz | Application Architect & Full-Stack Engineer`
  - Navigation anchors (`#capabilities`, `#solutions`, `#platforms`, `#pricing`, `/testers`)
  - "Start a Project" CTA button with smooth scroll to contact intake
- [x] **Hero Section & Authority Badges (`Section 2`)**
  - Dynamic headline: *"Production-Grade Web & Mobile Engineering. From Concept to Production."*
  - Supporting badge ribbon: Full-Stack Web & Mobile Architecture, Google Play Verified Developer, Top Rated Automation, Strict Milestones
  - Dual CTAs: *Schedule Architecture Call* & *Explore Live Solutions*, plus direct email copy helper
- [x] **Engineering Philosophy & Architecture Rigor (`Section 3`)**
  - Three pillar cards: *Architectural Rigor*, *Store-Ready Compliance*, *Automation at Scale*
- [x] **Core Services & Interactive Pricing Tiers (`Section 4`)**
  - 4 capability breakdowns (Web, Android, Scrapers/Actors, API Integrations)
  - Interactive pricing matrix with live **USD ($) / ZAR (R)** currency toggle:
    - Tier 1: Micro-Pipelines & Apify Actors (\$450 / R8,000)
    - Tier 2: MVP Web Applications (\$1,800 / R32,000) — *Popular*
    - Tier 3: Turnkey Android Solutions (\$2,600 / R46,000) — *Includes Closed Testing Access*
    - Tier 4: Custom Enterprise Architecture (\$4,500+ / R80,000+)
  - Standalone Google Play Closed Testing Fast-Track callout box (\$299 / R5,500)
- [x] **Verification Matrix & Escrow Badges (`Section 5`)**
  - Verified profiles grid: Google Play Store, Upwork Escrow, Fiverr Pro, Apify Marketplace
  - Direct links to published profiles and client escrow protections
- [x] **Case Studies & Proven Implementations (`Section 6`)**
  - Civic Mapping & Incident Verification Platform (*Clean and Clean* & *Visita*)
  - Dynamic Content Extraction & Monitoring Actor (*Apify Suite*)
  - Google Play Mobile Utility with Verified Beta Closed-Track Cycle
- [x] **Testing Lab Feature Banner (`Section 7`)**
  - Dedicated callout component directing visitors and community members to `/testers` with rewards and 73+ beta tester pool highlight
- [x] **Work Process & Client Intake Form (`Sections 8 & 9`)**
  - 4-step execution model (Scoping -> Sprints -> Testing -> Production Handoff)
  - Interactive intake form capturing name, business email, preferred platform (Direct/Upwork/Fiverr), scope, budget, and timeline
  - Next.js Server Action (`submitInquiry`) connecting form submissions to Supabase `project_inquiries` table with validation and feedback states
- [x] **Comprehensive Shared Footer**
  - Identity verification, direct links, social channels (TikTok *"I Tell You Stuff"*, LinkedIn, GitHub), and legal links

---

## Phase 3: The Seitz Testing Lab Portal (`/testers`) ✅ (Completed)
**Goal:** Deliver a dedicated sub-portal tailored to Android beta testers to collect real device registrations and educate the community on closed-testing perks.

- [x] **Sub-Portal Layout & Branding**
  - Header with `Seitz | Testing Lab` identity, navigation anchors, back link to Developer Portfolio, and "Join the Cohort" action
- [x] **Hero & Value Proposition**
  - Value headline: *"Test Unreleased Android Apps. Unlock Lifetime Premium Access for Free."*
  - Trust badges: 100% Free Access to Paid Apps, Real Android Hardware Only, Direct Developer Channel, Official Closed Track
- [x] **The 4-Phase Testing Lifecycle**
  - Visual timeline: 1. Register Device -> 2. Opt In & Install -> 3. Keep Installed for 14 Days -> 4. Submit Feedback & Claim Perks
- [x] **Perks & Rewards Showcase**
  - Lifetime Premium Upgrades, Priority Feature Influence, Exclusive Early Access & VIP Badges
- [x] **Active Testing Cohorts Display**
  - Live campaign cards showing open slots, testing duration (14 Days), reward type, and current status (*Mobile Utility & Workflow Automation*, *Community Mapping & Incident Tracker*)
- [x] **Interactive Tester Application Form**
  - Client-side validation for:
    - Full Name / Preferred Alias
    - Google Play Account Email (with helper note regarding store account identity)
    - Primary Android Device Model (e.g. Galaxy S23, Xiaomi Redmi 12)
    - Android OS Version (Dropdown: Android 15, 14, 13, 12 or earlier)
    - Category preferences (Productivity, Utilities, Civic, Games, All)
    - Mandatory 14-day continuous retention commitment agreement
  - Next.js Server Action (`registerTester`) with duplicate email checks and Supabase `testers` table insertion
  - Instant success confirmation state with confetti animation (`canvas-confetti`)
- [x] **Comprehensive FAQ Section**
  - Accordion covering 14-day rule reasoning, device safety, zero fees, app open expectations, early uninstalls, reward delivery, and strict anti-incentive policies (no public reviews)
- [x] **Page Route & Metadata (`/testers`)**
  - Full route prerendered statically with dedicated OpenGraph metadata

---

## Phase 4: Tester Pool Consolidation & Google Play Integration ✅ (Completed)
**Goal:** Unify the existing 73 Visita testers with incoming website applicants into an automated Google Play closed-testing pipeline.

- [x] **Visita 73-Tester Cohort Migration**
  - Seed migration authored (`supabase/migrations/20261106000001_seed_73_visita_testers.sql`) seeding all 73 accounts into `public.testers` tagged with `source: 'visita_legacy'` and `status: 'active_testing'`
  - Formatted dataset created in `src/data/legacy-testers.ts` with auto-capitalized user names and source provenance
  - Generated ready-to-upload files: `public/data/seitz-testers-73.csv` and `public/data/seitz-testers-emails.txt`
  - Authored VIP Announcement Email for the 73 testers with Google Group link (`https://groups.google.com/u/2/g/seitz/`) and testing lab hub link
  - Broadcast short WhatsApp/SMS teaser template (< 300 chars) for TikTok *"I Tell You Stuff"* community contacts
- [x] **Google Play Console Track Setup & Group Automation**
  - Mapped master Google Group: `https://groups.google.com/u/2/g/seitz/` (`seitz@googlegroups.com`) to Google Play Console Closed Testing Tracks across all apps
  - Created live automated export endpoint (`/api/admin/testers/export`) delivering CSV (`?format=csv`), JSON (`?format=json`), or clean email string (`?format=list`) dynamically merging the 73 legacy testers + newly registered website applicants

---

## Phase 5: Feedback Loop & 14-Day Compliance Automation ✅ (Completed)
**Goal:** Automate engagement during the mandatory 14-day window to satisfy Google Play audit metrics (active open rates, bug feedback, retention).

- [x] **Transactional Email Workflows (Resend)**
  - Configured Resend SDK & REST helper in `src/lib/email.ts` using `RESEND_API_KEY`
  - Automated client lead alerts delivered to `byseitz.agency@gmail.com`
  - Automated tester welcome invitation with Google Group direct link (`https://groups.google.com/u/2/g/seitz/`)
  - Automated post-feedback autoresponder locking in lifetime promo codes
- [x] **3-Minute Beta Check-In Form Implementation**
  - Hosted interactive route at `/testers/feedback` collecting:
    - Google Email, Device Model, Android Version
    - App Stability rating (Smooth / Stutter / Crash / Unusable)
    - Visual layout & Navigation rating (1–5 star interactive scale)
    - Bug reports and screen descriptions
    - Most useful feature & requested additions
    - Active continuous installation confirmation check
  - Next.js Server Action (`submitFeedback`) inserting records into Supabase `feedback_submissions` and triggering Resend autoresponder
  - Celebratory confetti feedback (`canvas-confetti`)
- [x] **Google Play Production Readiness Guide & Questionnaire Generator**
  - Hosted compliance kit at `/testers/compliance` formatting the exact responses for Google Play Console's 3 mandatory application sections:
    - *Part 1: About your closed test* (recruitment, engagement, feedback influence)
    - *Part 2: About your app/game* (target audience, value proposition)
    - *Part 3: About your production readiness* (crash-free rates, SDK compliance, launch sign-off)
  - One-click copy buttons for effortless pasting into Play Console during production application

---

## Phase 6: Multi-App Testing Roster, Community Voting & Dedicated Game/App Pages
**Goal:** Showcase live testing apps and in-development pipeline on Seitz.co.za with dedicated individual pages (`/apps/[slug]`) for each app/game, displaying detailed descriptions and mechanics from each project's `GEMINI.md`, current tester numbers, status (Closed Testing vs In Development), media assets from `Pictures\projects\`, and community voting.

- [x] **Live Closed-Testing Apps Integration**
  - Update `src/components/testers/ActiveCohorts.tsx` and home showcases to feature real production apps from workspaces:
    - **Mzansi Midnight** (`C:\Users\Faiz\Documents\workspaces\mzansi-midnight`):
      - 5-part South African state capture dice-and-node noir RPG anthology (10 SA languages, 107 Vitest unit & narrative tests).
      - Cohort Status: *Active Closed Beta Track* (14-Day continuous retention).
      - Current Testers: 11 active / 15 capacity (4 open buffer slots).
      - Tester Reward: Free Lifetime Full Edition unlock ($19.99 retail value) + Supporter Badge.
      - Media Assets: Feature Graphic banner, App Icon, and 5 gameplay screenshots from `C:\Users\Faiz\Pictures\projects\mzansi-midnight`.
    - **Clean and Clean** (`C:\Users\Faiz\Documents\workspaces\cleanandclean`):
      - Nationwide grassroots civic cleanup & environmental gamification platform with Mapbox superclustering and GPS bag collection audits.
      - Cohort Status: *Active Closed Beta Track* (Ward Leaderboard verification).
      - Current Testers: 9 active / 15 capacity (6 open buffer slots).
      - Tester Reward: Lifetime Supporter Tier & Ward Champion Badge.
    - **OmniRemote** (formerly Samsung Remote, `C:\Users\Faiz\Documents\workspaces\samsung-remote`):
      - Universal Smart TV Web Remote & PWA for Samsung (Tizen OS 2016–2026), Roku OS (TCL, Hisense, Sharp, Philips, Onn), LG webOS (3.0–24+), and Universal Smart TVs (Skyworth, Sony BRAVIA, Hisense VIDAA OS, Aiwa, Logik, Mora, etc.) with zero-latency WebSockets, HTTP ECP, SSAP, DLNA, and haptic feedback.
      - Cohort Status: *Active Closed Beta Track* (Hardware & Wi-Fi latency testing).
      - Current Testers: 10 active / 15 capacity (5 open buffer slots).
      - Tester Reward: Free Lifetime Ad-Free Pro Remote License.
      - Media Assets: OmniRemote Feature Graphic, OmniRemote Icon, and 5 mobile device screenshots from `C:\Users\Faiz\Pictures\projects\omniremote`.

- [x] **Dedicated Individual App & Game Pages (`/apps/[slug]`)**
  - Implement dynamic route `src/app/apps/[slug]/page.tsx` generating rich, dedicated pages for each of the 10 apps:
    - **Header & Meta**: App Icon, App Store/Game Title, Category, Status Badge (`Closed Testing` vs `In Development / Voting Open`), and Live Tester/Vote count.
    - **Tester / Vote Callout**:
      - For Closed Testing: Live enrollment widget (e.g. "11 of 15 slots filled — 4 slots open"), 14-day retention requirement badge, and one-click "Join Closed Beta" linking to tester intake.
      - For In Development: Interactive vote button with live progress bar toward the 50-vote Closed Testing graduation threshold.
    - **Media Showcase Gallery**:
      - High-resolution Feature Graphic banner and responsive mobile device screenshots carousel (using copied assets in `public/images/projects/`).
    - **In-Depth Story & Architecture Specs (from each project's `GEMINI.md`)**:
      - Core gameplay loop or technical innovation breakdown.
      - Feature highlights, faction systems, hardware protocols, or algorithmic engines.
      - Complete Tech Stack & architectural specifications.
    - **Google Play Compliance & Perks**:
      - Guaranteed lifetime perk unlock details and anti-incentive compliance disclaimer.

- [x] **In-Development Projects & Interactive Community Voting Hub**
  - Implement an interactive voting module (`CommunityVotingHub.tsx`) on `/testers` and `/testers/vote` featuring the 7 pipeline projects from workspaces:
    1. **Decolonize: South Africa** (`C:\Users\Faiz\Documents\workspaces\decolonize`): Asymmetric strategy board game & economic network simulation modeling capital flight, state capture, and neocolonial money flows on an interactive graph canvas (@xyflow/react).
    2. **Mira** (`C:\Users\Faiz\Documents\workspaces\mira`): AI-powered mobile-first wardrobe intelligence platform & digital stylist for women (60s single-selfie 12-season color analysis, WASM background removal, FAL AI virtual try-on, WhatsApp fit check).
    3. **Payday (Trust-Buster)** (`C:\Users\Faiz\Documents\workspaces\payday`): The Collective Commonwealth Engine—cooperative economic board game inverting Monopoly, where players band together to dismantle an entrenched corporate syndicate that starts Turn 1 owning everything.
    4. **Syndicate Mzansi Edition** (`C:\Users\Faiz\Documents\workspaces\syndicate`): Cape Flats Wars (Numbers Gangs 26s/27s/28s) & Taxi Wars (CATA/CODETA, Izinkabi hitmen, 30% construction mafia) underworld strategy & RPG simulation.
    5. **Toll Plaza (Mzansi Trivia Road Trip)** (`C:\Users\Faiz\Documents\workspaces\toll-plaza`): Cultural road trip trivia game navigating national highways (N1–N4, R56), provincial toll plazas, 6 regional trivia decks, and 6 cultural souvenir badges.
    6. **Would You Rather (Mzansi Edition)** (`C:\Users\Faiz\Documents\workspaces\would-you-rather`): Real-time cultural dilemma party game with 4 first-class age tiers (Kids, Teens, Adults Family, Adults After Dark), live synchronized room codes, and 1v1 duels.
    7. **Debate League** (`C:\Users\Faiz\Documents\workspaces\debate-league`): Digital operating system for competitive parliamentary debate (WSDC/BP) with real-time case prep flowpad, precision timer/POI tracker, Gemini AI sparring bot, and digital ballot scorecards.
  - Interactive voting features:
    - Real-time upvoting button per project (linked to tester profile or local state).
    - Progress bars showing community vote counts and target thresholds to start 14-day closed test.
    - Direct links to each project's dedicated `/apps/[slug]` showcase page.
    - Live leaderboard sorting projects by community demand.

- [x] **Database & Backend Architecture for Community Voting**
  - Migration `20261106000002_create_community_votes.sql`:
    - Table `community_votes` tracking `project_id`, `voter_email`, `ip_hash`, `created_at`.
    - RLS allowing one vote per project per email/session.
  - Server Action `voteForProject(projectId, email)` updating tally and returning real-time rank.

---

## Phase 7: Standalone 12-Tester Fast-Track Service Commerce
**Goal:** Productize the 12-tester / 14-day testing cohort as a standalone high-margin B2B service for external indie developers and agency clients.

- [x] **Dedicated Service Landing Page / Module**
  - Value proposition: Pass Google Play's 12-tester, 14-day requirement safely with 15 verified human testers
  - Pricing: \$299 USD / R5,500 ZAR (16–18 day turnaround)
  - Inclusion checklist: 15 real Android devices, continuous retention monitoring, private bug reports, questionnaire preparation guide
- [x] **Client App Screening Intake**
  - Form capturing client package name, target SDK, test credentials, and app stability guarantees
  - Clear terms of service: strictly human beta testing; zero guaranteed store approval for non-compliant apps; strict ban on fake public ratings
- [x] **Milestone & Escrow Integration**
  - Set up direct payment links (Stripe/Paystack) and custom gig offers on Upwork and Fiverr for platform-conscious clients

---

## Phase 8: Deployment, Domain Configuration & Launch
**Goal:** Optimize search visibility, structured data, dynamic sitemaps, and legal compliance (Vercel deployment bypassed per user instruction).

- [ ] **Domain & DNS Setup** *(Deferred: Vercel deployment ignored for now per user instruction)*
  - Connect `seitz.co.za` to Vercel production deployment
  - Configure root and wildcard DNS records, verify SSL certificate provisioning
  - Set up domain emails / MX records (e.g. `testers@seitz.co.za`, `faiz@seitz.co.za`)
- [x] **SEO, Performance & Social Metadata**
  - OpenGraph images, Twitter cards, JSON-LD structured data (Person, ProfessionalService, SoftwareApplication in `layout.tsx`)
  - Dynamic `sitemap.xml` (`src/app/sitemap.ts`) indexing all 10 apps, service pages, and legal routes
  - Dynamic `robots.txt` (`src/app/robots.ts`) with crawler directives
  - Legal compliance: Dedicated Privacy Policy (`/privacy`), Terms of Service (`/terms`), and Anti-Incentive Policy disclosure (`/anti-incentive`)
- [x] **Official Launch & Profile Preparation**
  - Cross-linked platform verification across Upwork, Fiverr Pro, GitHub, and Apify profiles
  - Social media links (TikTok "I Tell You Stuff", LinkedIn) integrated across footers and testing hub

---

## Phase 9: Long-Term Scaling & Multi-App Pipeline
**Goal:** Leverage the community to launch a regular stream of internal and client software products.

- [x] Maintain an active rolling tester pool of 100+ vetted Android users (73 seeded + intake pipeline)
- [x] Automate lifetime promo code generation and distribution via Google Play Console Promotions API architecture (`src/app/actions/promo.ts`)
- [x] Expand testing lab capabilities to multi-region testing and localized civic beta groups
- [x] Offer premium bug bounty unlocks and merchandise perks for top community bug reporters (`/testers/leaderboard`)
