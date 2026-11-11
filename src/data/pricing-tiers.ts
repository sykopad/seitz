import { ServiceTierItem } from '@/types/portfolio';

export const serviceTiers: ServiceTierItem[] = [
  {
    id: 'tier-1-micro-pipelines',
    tierNumber: 'Tier 1',
    title: 'Micro-Pipelines & Apify Actors',
    focusArea: 'Web Automation & Scraping',
    timeline: '3 to 7 Days',
    startingRateUSD: 450,
    startingRateZAR: 8000,
    bestFor: 'Targeted data extraction, lead pipelines, API bridges',
    deliverables: [
      'Bespoke web scraper built with Playwright, Puppeteer, or Crawlee',
      'Apify Actor configuration with clear input/output schemas for non-technical operation',
      'Anti-bot countermeasure handling (proxy rotation setup, session management, dynamic rendering)',
      'Automated exports to Google Sheets, Supabase, PostgreSQL, or webhooks',
      '14 days of post-deployment maintenance to cover initial target site layout shifts'
    ]
  },
  {
    id: 'tier-2-mvp-web-applications',
    tierNumber: 'Tier 2',
    title: 'Production-Grade MVP Web Applications',
    focusArea: 'Full-Stack Web Development',
    timeline: '2 to 3 Weeks',
    startingRateUSD: 1800,
    startingRateZAR: 32000,
    popular: true,
    bestFor: 'Founders, micro-SaaS, business workflow tools',
    deliverables: [
      'Full-stack application architecture built with Next.js (App Router), React, and TypeScript',
      'Styled, responsive UI using Tailwind CSS optimized for mobile and desktop screens',
      'Backend and database setup using Supabase (PostgreSQL, row-level security, auth, and storage)',
      'Third-party API integrations (payment gateways like Paystack/Stripe/PayPal, transaction emails, AI models)',
      'Production deployment on Vercel or cloud provider with custom domain and SSL'
    ]
  },
  {
    id: 'tier-3-turnkey-android-solutions',
    tierNumber: 'Tier 3',
    title: 'Turnkey Android Solutions',
    focusArea: 'Mobile Development + Store Prep',
    timeline: '3 to 4 Weeks',
    startingRateUSD: 2600,
    startingRateZAR: 46000,
    bestFor: 'Consumer utility apps, companion apps, Play Store launches',
    deliverables: [
      'Responsive, intuitive mobile application UI with clean navigation and state management',
      'Backend synchronization (Supabase / Firebase / custom REST APIs)',
      'Core device capabilities (camera, storage, push notifications, offline local caching)',
      'Google Play Console preparation: store listing assets, privacy policy integration, target SDK compliance',
      'Android QA & Market Viability Testing: Direct access to the Seitz Testing Lab (/testers) for multi-OEM stress testing, crash telemetry, and optional 14-day Play Console compliance clearance'
    ]
  },
  {
    id: 'tier-4-custom-enterprise-architecture',
    tierNumber: 'Tier 4',
    title: 'Custom Enterprise Architecture',
    focusArea: 'End-to-End System Engineering',
    timeline: '4 to 8 Weeks',
    startingRateUSD: 4500,
    startingRateZAR: 80000,
    bestFor: 'Complex multi-tenant platforms, high-throughput systems',
    deliverables: [
      'Complete system architecture documentation (ERDs, API specifications)',
      'Unified backend serving both Next.js web portals and Android mobile applications',
      'Complex mapping or data visualization layers (Mapbox GL, real-time geolocation filtering)',
      'Robust background workers, queue processing, and automated reporting',
      'Dedicated priority staging environment, end-to-end integration testing, and team training sessions'
    ]
  }
];

export const standaloneClosedTestingService = {
  id: 'google-play-closed-testing-fasttrack',
  title: 'Android QA & Market Viability Cohort (+ Google Play Compliance Track)',
  focusArea: 'Real-Device Hardware Stress Testing & Play Store Readiness',
  rateUSD: 299,
  rateZAR: 5500,
  timeline: '16 to 18 Days Total',
  cohortSize: '20 Verified Human Testers (8-device buffer included)',
  retentionWindow: '14 Continuous Days (Optional for Compliance)',
  features: [
    '20 verified human testers on physical Android hardware across diverse OEMs (Samsung, Pixel, Xiaomi, etc.)',
    'Category-specific UX heuristics audit, crash telemetry, and Market Viability Index calculation',
    'Direct tester cash bounty distribution ($10.00/tester) ensuring authentic motivation and rigorous feedback',
    'Guaranteed 14-day continuous retention monitoring with reserve replacement buffer for personal developer accounts',
    '1-Click master sync via seitz@googlegroups.com and complete Production Questionnaire answer preparation'
  ]
};
