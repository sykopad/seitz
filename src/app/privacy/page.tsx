import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Smartphone,
  Trash2,
  AlertTriangle,
  Mail,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Server,
  Layers,
  Database,
  Users,
} from 'lucide-react';
import { Footer } from '@/components/shared/Footer';
import { appsCatalog } from '@/data/apps-catalog';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Safety | Google Play Developer Disclosure | Seitz.co.za',
  description:
    'Comprehensive Privacy Policy and Google Play Data Safety disclosure for Seitz.co.za, The Seitz Testing Lab, and all mobile applications published by Muhammed Faiz Seitz under Google Play Console policies and POPIA/GDPR regulations.',
  openGraph: {
    title: 'Privacy Policy & Google Play Data Safety | Seitz.co.za',
    description:
      'Official privacy policy, device permissions justification, third-party data processors, and user account deletion instructions for all Seitz mobile apps.',
    url: 'https://seitz.co.za/privacy',
  },
};

export default function PrivacyPolicyPage() {
  const publishedApps = appsCatalog.filter((a) => a.googlePlayPackage);

  const permissionsList = [
    {
      permission: 'Local Network Access & Wi-Fi Multicast',
      technicalName: 'ACCESS_WIFI_STATE, CHANGE_WIFI_MULTICAST_STATE, INTERNET',
      apps: 'OmniRemote: Universal Smart TV Remote (co.za.omniremote.app)',
      purpose:
        'Used solely on your local Wi-Fi network to discover Smart TVs via UPnP / SSDP protocols, authenticate local TLS WebSockets with Samsung (port 8001/8002) and LG displays (port 3000/3001), and dispatch HTTP ECP commands to Roku TVs (port 8060). Zero video, audio, or display control telemetry is ever sent to or processed by external cloud servers.',
    },
    {
      permission: 'Precise & Coarse Geolocation',
      technicalName: 'ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION',
      apps: 'Clean and Clean (za.co.cleanandclean.app)',
      purpose:
        'Used strictly when a user reports or views a community cleanup hotspot to pin the exact geographic coordinates (latitude/longitude) of the environmental hazard on the municipal Mapbox GL cluster map. Location is only gathered while actively using the app; background location tracking is never requested or active.',
    },
    {
      permission: 'Camera & Photo Library Storage',
      technicalName: 'CAMERA, READ_MEDIA_IMAGES / READ_EXTERNAL_STORAGE',
      apps: 'Clean and Clean (za.co.cleanandclean.app), Mira (za.co.seitz.mira)',
      purpose:
        'Used to photograph municipal cleanup sites for bag-audit verification, or to upload personal garment photos / single-selfie color analysis. Media is encrypted and stored in secure private Supabase Storage buckets or processed locally inside the browser using WebAssembly. Camera access is strictly opt-in and triggered solely by explicit user action.',
    },
    {
      permission: 'Push Notifications',
      technicalName: 'POST_NOTIFICATIONS',
      apps: 'The Seitz Testing Lab, All Closed Beta Applications',
      purpose:
        'Used to alert beta testers when a new closed-track build is deployed, when 14-day cohort check-in questionnaires are due, or when permanent promo codes are issued. Users can revoke notification permissions at any time via Android system settings.',
    },
  ];

  const thirdPartyServices = [
    {
      name: 'Google Play Services & Google Play In-App Billing',
      provider: 'Google LLC',
      purpose: 'Closed testing track distribution, app update delivery, crash logging, and in-app purchase licensing.',
      privacyUrl: 'https://policies.google.com/privacy',
    },
    {
      name: 'Supabase (PostgreSQL & Supabase Auth)',
      provider: 'Supabase Inc.',
      purpose: 'User authentication, Row-Level Security (RLS) data persistence, community voting tallies, and private feedback storage.',
      privacyUrl: 'https://supabase.com/privacy',
    },
    {
      name: 'Mapbox GL',
      provider: 'Mapbox Inc.',
      purpose: 'Geospatial mapping and hotspot clustering for civic tech apps. Collects anonymized map interaction telemetry.',
      privacyUrl: 'https://www.mapbox.com/legal/privacy',
    },
    {
      name: 'Resend Transactional Email',
      provider: 'Resend Inc.',
      purpose: 'Dispatching transactional emails, testing cohort invites, feedback confirmations, and lifetime Google Play promo codes.',
      privacyUrl: 'https://resend.com/legal/privacy-policy',
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070b] text-[#f8fafc] relative selection:bg-emerald-400 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-75 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="border-b border-white/[0.08] bg-[#05070b]/85 backdrop-blur-2xl sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-emerald-400 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                Google Play Policy Compliant (2026)
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Effective: November 2026
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10">
          {/* Top Title Banner */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Google Play Developer Data Safety & POPIA / GDPR Disclosure</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Privacy Policy & Data Safety
            </h1>
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
              This Privacy Policy establishes how <strong>Muhammed Faiz Seitz</strong> (operating as <strong>Seitz</strong>, <strong>seitz.co.za</strong>, and <strong>The Seitz Testing Lab</strong>) collects, processes, protects, and deletes personal information across our website, developer services, and Android applications distributed through the Google Play Store.
            </p>
          </div>

          {/* Quick Jump Index Navigation */}
          <div className="studio-card rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Policy Sections & Google Play Disclosures:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <a href="#covered-apps" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                1. Covered Apps & Developer Info
              </a>
              <a href="#data-collection" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                2. Data We Collect
              </a>
              <a href="#permissions" className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 transition">
                3. Android Device Permissions
              </a>
              <a href="#third-party-sdk" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                4. Third-Party SDKs
              </a>
              <a href="#deletion-request" className="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/25 text-rose-300 hover:bg-rose-500/20 transition">
                5. Account & Data Deletion
              </a>
              <a href="#children" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                6. Children&apos;s Privacy
              </a>
              <a href="#popia-gdpr" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                7. POPIA & GDPR Rights
              </a>
              <a href="#contact-officer" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                8. Information Officer
              </a>
            </div>
          </div>

          <div className="studio-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {/* 1. Developer Entity & Covered Applications */}
            <section id="covered-apps" className="space-y-4 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  1
                </span>
                Developer Entity & Covered Google Play Applications
              </h2>
              <p>
                This policy is published and maintained by <strong>Muhammed Faiz Seitz</strong>, verified Google Play Developer (Developer Name: <strong>Seitz</strong>). It applies to our digital headquarters at <code className="text-sky-300 font-mono">seitz.co.za</code>, the closed testing infrastructure at <code className="text-emerald-300 font-mono">seitz.co.za/testers</code>, and all applications published under our Google Play Developer account, including but not limited to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {publishedApps.map((app) => (
                  <div key={app.slug} className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-white">{app.name}</span>
                      {app.playStoreUrl && (
                        <a
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono text-emerald-400 hover:underline"
                        >
                          Play Store ↗
                        </a>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-sky-400 block">{app.googlePlayPackage}</span>
                    <span className="text-[11px] text-slate-400 block">{app.tagline}</span>
                  </div>
                ))}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] space-y-1">
                  <span className="font-display font-bold text-white block">Pipeline Apps & Games</span>
                  <span className="text-[11px] font-mono text-amber-400 block">za.co.seitz.*</span>
                  <span className="text-[11px] text-slate-400 block">
                    Decolonize: South Africa, Mira AI, Payday (Trust-Buster), Mzansi Syndicate, Toll Plaza, Debate League.
                  </span>
                </div>
              </div>
            </section>

            {/* 2. Data Categories We Collect */}
            <section id="data-collection" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  2
                </span>
                Data Categories & Purposes of Processing
              </h2>
              <p>
                We adhere strictly to data minimization principles. Depending on how you interact with our applications or testing lab, we collect:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <strong className="text-white block font-display">A. Tester & Closed Beta Participation Data</strong>
                  <p className="text-slate-300/90 text-xs">
                    Full name or preferred alias, Google Play account email (required to grant closed-track access in Google Play Console), physical device hardware model (e.g. Samsung Galaxy S23, Pixel 7), Android OS version, and qualitative feedback check-ins. This data is used solely to coordinate the mandatory 14-day continuous closed test required by Google Play and deliver earned lifetime promo codes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <strong className="text-white block font-display">B. App Diagnostics, Crash Telemetry & Performance</strong>
                  <p className="text-slate-300/90 text-xs">
                    Non-identifiable crash logs, Application Not Responding (ANR) stacks, device screen DPI, and app launch timing gathered through Google Play Console Pre-Launch Reports and vitals monitoring to patch software glitches prior to public release.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <strong className="text-white block font-display">C. Commercial Client & Inquirer Data</strong>
                  <p className="text-slate-300/90 text-xs">
                    Name, business email, organization, technical scope briefs, and payment escrow preferences submitted via our project intake forms. Used solely to respond to inquiries and execute bilateral software contracts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <strong className="text-white block font-display">D. Local Device Game State & Preferences</strong>
                  <p className="text-slate-300/90 text-xs">
                    In apps such as <em>Mzansi Midnight</em> and <em>OmniRemote</em>, user game saves, docket progression, and TV brand pairing tokens are stored strictly locally on the user&apos;s physical device using IndexedDB / localStorage. We do not transmit or inspect your local game decisions.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Android Runtime Permissions Justification */}
            <section id="permissions" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  3
                </span>
                Android Runtime Permissions & Technical Disclosures
              </h2>
              <p>
                In strict compliance with the <strong>Google Play Permissions Policy</strong>, our applications only request runtime permissions that are indispensable to core user-facing features:
              </p>

              <div className="space-y-3.5">
                {permissionsList.map((perm) => (
                  <div key={perm.permission} className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-display font-bold text-white text-xs sm:text-sm">
                        {perm.permission}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
                        {perm.apps}
                      </span>
                    </div>
                    <code className="text-[11px] font-mono text-slate-400 block">{perm.technicalName}</code>
                    <p className="text-xs text-slate-300/90 leading-relaxed pt-1">{perm.purpose}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Third-Party SDKs and Data Processors */}
            <section id="third-party-sdk" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  4
                </span>
                Third-Party SDKs & Cloud Data Processors
              </h2>
              <p>
                We do not integrate deceptive ad-tracking SDKs, data broker trackers, or invasive analytics. All external service integrations are limited to verified infrastructure providers essential for delivery:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {thirdPartyServices.map((svc) => (
                  <div key={svc.name} className="p-4 rounded-xl bg-black/40 border border-white/[0.08] flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-display font-bold text-white text-xs sm:text-sm">{svc.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{svc.provider}</span>
                      </div>
                      <p className="text-xs text-slate-300/80 leading-relaxed">{svc.purpose}</p>
                    </div>
                    <a
                      href={svc.privacyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-400 hover:text-sky-300"
                    >
                      <span>Read Provider Privacy Policy</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Account & Data Deletion Mechanism (Crucial Google Play Requirement) */}
            <section id="deletion-request" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <div className="p-6 rounded-2xl bg-rose-500/[0.05] border border-rose-500/30 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-bold">
                  <Trash2 className="w-4 h-4" />
                  <span>Mandatory Google Play Policy: Account & Associated Data Deletion</span>
                </div>

                <h2 className="font-display text-xl font-bold text-white">
                  How to Request Account & Associated Personal Data Deletion
                </h2>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Per the <strong>Google Play Data Safety and User Data Policy</strong>, if an application allows user account creation (e.g. <em>Clean and Clean</em>, <em>The Seitz Testing Lab</em>, or client inquiry portals), users must be provided with a direct, friction-free pathway to delete their account and all associated records.
                </p>

                <div className="space-y-3 pt-2 text-xs">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                    <strong className="text-white font-display text-sm block">Step-by-Step Deletion Instructions:</strong>
                    <ol className="list-decimal pl-5 space-y-1.5 text-slate-300">
                      <li>
                        <strong>In-App Deletion:</strong> If logged into an application with account functionality, open <em>Settings &gt; Account Security</em> and tap <em>&ldquo;Delete My Account &amp; Data&rdquo;</em>.
                      </li>
                      <li>
                        <strong>Direct Web Deletion Request:</strong> Send an email from your registered account address to{' '}
                        <a href="mailto:byseitz.agency@gmail.com?subject=[DATA%20DELETION%20REQUEST]" className="text-sky-300 underline font-mono">
                          byseitz.agency@gmail.com
                        </a>{' '}
                        with the subject line: <code className="text-rose-300 font-mono">[DATA DELETION REQUEST]</code>.
                      </li>
                      <li>
                        <strong>Specify Details:</strong> Include your registered Google email address and the specific app name (e.g. Clean and Clean, Seitz Testing Lab).
                      </li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                    <strong className="text-white font-display text-sm block">What Data Is Permanently Purged:</strong>
                    <ul className="list-disc pl-5 space-y-1 text-slate-300">
                      <li>Your user profile, email address, password hash, and authentication tokens in Supabase Auth.</li>
                      <li>Any submitted community cleanup logs, uploaded cleanup photographs, and ward reward points.</li>
                      <li>Your closed beta testing enrollment records and device hardware associations.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                    <strong className="text-white font-display text-sm block">Retention Timelines & Exceptions:</strong>
                    <p className="text-slate-300 leading-relaxed">
                      All deletion requests are verified and permanently purged across our databases within <strong>30 calendar days</strong>. We retain only minimal transaction logs where strictly mandated by statutory South African tax law (e.g. commercial invoice records) or fraud prevention.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:byseitz.agency@gmail.com?subject=%5BDATA%20DELETION%20REQUEST%5D&body=Please%20delete%20my%20account%20and%20all%20associated%20data%20for%20the%20following%20application:%20%0A%0AEmail:%20%0AApp%20Name:%20"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-mono font-semibold transition cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Initiate Account & Data Deletion Request Email</span>
                  </a>
                </div>
              </div>
            </section>

            {/* 6. Children's Privacy (COPPA & Google Play Families Policy) */}
            <section id="children" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  6
                </span>
                Children&apos;s Privacy & Google Play Families Policy
              </h2>
              <p>
                Our services and general applications (including <em>Mzansi Midnight</em>, <em>OmniRemote</em>, and <em>The Seitz Testing Lab</em>) are intended for general audiences aged 13 and older (or 18 and older for games dealing with adult themes like state capture or underworld fiction). We do not knowingly solicit or collect personal information from children under 13.
              </p>
              <p>
                For party or casual applications featuring a dedicated <strong>Kids Mode</strong> (such as <em>Would You Rather: Mzansi Edition</em>):
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>We do not collect personal identifiers, advertising IDs, or geolocation from children.</li>
                <li>Zero behavioral targeting, third-party advertising SDKs, or in-app purchase prompts are displayed in child-designated modes.</li>
                <li>All speech features utilize in-browser Web Speech API audio synthesis without transferring recordings to external cloud speech APIs.</li>
              </ul>
              <p>
                If a parent or guardian discovers that their child has provided personal information without consent, contact us immediately at <a href="mailto:byseitz.agency@gmail.com" className="text-sky-300 underline font-mono">byseitz.agency@gmail.com</a> and we will delete the data immediately.
              </p>
            </section>

            {/* 7. POPIA & GDPR Legal Rights */}
            <section id="popia-gdpr" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  7
                </span>
                POPIA, GDPR & International Data Subject Rights
              </h2>
              <p>
                Under South Africa&apos;s <strong>Protection of Personal Information Act (POPIA)</strong>, the European Union <strong>General Data Protection Regulation (GDPR)</strong>, and applicable international privacy frameworks, you are entitled to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <strong className="text-white block font-display mb-1">Right of Access:</strong>
                  <span>Request a copy of the personal information we hold about you.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <strong className="text-white block font-display mb-1">Right to Rectification:</strong>
                  <span>Request correction of inaccurate or incomplete personal records.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <strong className="text-white block font-display mb-1">Right to Erasure (To Be Forgotten):</strong>
                  <span>Request complete deletion of your data as detailed in Section 5.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
                  <strong className="text-white block font-display mb-1">Right to Object:</strong>
                  <span>Object to data processing based on legitimate interests or revoke beta testing consent.</span>
                </div>
              </div>
            </section>

            {/* 8. Information Security & Cross-Border Transfers */}
            <section className="space-y-4 border-t border-white/[0.08] pt-8">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  8
                </span>
                Data Security & International Transfers
              </h2>
              <p>
                All data transmitted between our mobile apps, web portal, and Supabase / Google endpoints is encrypted in transit using industry-standard TLS 1.3 encryption. Databases employ encryption-at-rest (AES-256) and granular PostgreSQL Row-Level Security (RLS) policies.
              </p>
              <p>
                Because our infrastructure utilizes global edge networks (Vercel, Supabase, Google Play), information may be transferred across borders. Such transfers comply with Section 72 of POPIA through standard contractual clauses and rigorous technical protections.
              </p>
            </section>

            {/* 9. Contact Information & Information Officer */}
            <section id="contact-officer" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  9
                </span>
                Information Officer Contact Details
              </h2>
              <p>
                For privacy inquiries, regulatory notices, or assistance exercising data protection rights, contact our designated Information Officer:
              </p>

              <div className="p-5 rounded-2xl bg-black/60 border border-emerald-500/30 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base text-white">Muhammed Faiz Seitz</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px]">
                    Information Officer & Developer
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>Email: <a href="mailto:byseitz.agency@gmail.com" className="text-sky-300 hover:underline">byseitz.agency@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Locality: Durban, KwaZulu-Natal, Republic of South Africa 🇿🇦</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 pt-1 border-t border-white/10 text-[11px]">
                  <span>Developer Domain: <a href="https://seitz.co.za" className="text-slate-200 hover:underline">https://seitz.co.za</a></span>
                  <span>•</span>
                  <span>Testing Lab: <a href="https://seitz.co.za/testers" className="text-emerald-300 hover:underline">https://seitz.co.za/testers</a></span>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
