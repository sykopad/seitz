import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Gift,
  Scale,
  ExternalLink,
  Mail,
  MapPin,
  Lock,
} from 'lucide-react';
import { Footer } from '@/components/shared/Footer';
import { appsCatalog } from '@/data/apps-catalog';

export const metadata: Metadata = {
  title: 'Terms of Service & Mobile App EULA | Google Play Developer Terms | Seitz.co.za',
  description:
    'Terms of Service and End User License Agreement (EULA) governing mobile applications, Google Play in-app purchases, closed beta testing cohorts, and bespoke engineering services provided by Muhammed Faiz Seitz.',
  openGraph: {
    title: 'Terms of Service & Mobile App EULA | Seitz.co.za',
    description:
      'Official End User License Agreement (EULA) and commercial terms for all Seitz Android apps, The Seitz Testing Lab, and custom engineering services.',
    url: 'https://seitz.co.za/terms',
  },
};

export default function TermsOfServicePage() {
  const publishedApps = appsCatalog.filter((a) => a.googlePlayPackage);

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
              <span className="text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/25 px-2.5 py-0.5 rounded-full">
                Google Play EULA & Commercial SLAs
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Effective: November 2026
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-mono uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>End User License Agreement (EULA) & Terms of Use</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Terms of Service & Mobile EULA
            </h1>
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
              These Terms of Service and End User License Agreement (&ldquo;<strong>Agreement</strong>&rdquo; or &ldquo;<strong>Terms</strong>&rdquo;) constitute a legally binding agreement between you (&ldquo;<strong>User</strong>&rdquo; or &ldquo;<strong>you</strong>&rdquo;) and <strong>Muhammed Faiz Seitz</strong> (&ldquo;<strong>Developer</strong>&rdquo;, &ldquo;<strong>Seitz</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo;, or &ldquo;<strong>us</strong>&rdquo;). This Agreement governs your access to and use of our website (<code className="text-sky-300 font-mono">seitz.co.za</code>), our beta testing community (<code className="text-emerald-300 font-mono">seitz.co.za/testers</code>), and all mobile applications published by Seitz on the Google Play Store.
            </p>
          </div>

          {/* Quick Index */}
          <div className="studio-card rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Sections & EULA Terms:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <a href="#license-grant" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                1. License Grant (EULA)
              </a>
              <a href="#google-play-terms" className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-300 hover:bg-sky-500/20 transition">
                2. Google Play Store Terms
              </a>
              <a href="#in-app-purchases" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                3. Billing & Refunds
              </a>
              <a href="#beta-testing" className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 transition">
                4. Closed Beta Testing & Perks
              </a>
              <a href="#client-services" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                5. Client Services & Fast-Track SLAs
              </a>
              <a href="#acceptable-use" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                6. Acceptable Use
              </a>
              <a href="#disclaimers" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                7. Disclaimers & Liability
              </a>
              <a href="#governing-law" className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition">
                8. Governing Law (RSA)
              </a>
            </div>
          </div>

          <div className="studio-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {/* 1. License Grant & Intellectual Property */}
            <section id="license-grant" className="space-y-4 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  1
                </span>
                Mobile Application License Grant (EULA)
              </h2>
              <p>
                Subject to your compliance with these Terms, Seitz grants you a personal, revocable, non-exclusive, non-transferable, non-sublicensable limited license to download, install, and use our mobile applications (including <em>Mzansi Midnight</em>, <em>OmniRemote</em>, <em>Clean and Clean</em>, <em>Would You Rather</em>, and related experimental builds) solely for your personal, non-commercial entertainment and utility on compatible Android devices that you own or control.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {publishedApps.map((app) => (
                  <span key={app.slug} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.08] text-xs font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <strong className="text-white">{app.name}</strong> ({app.googlePlayPackage})
                  </span>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-2">
                <strong className="text-white font-display text-sm block">License Restrictions:</strong>
                <p className="text-slate-300/90 text-xs">You explicitly agree that you shall not:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300/80 text-xs">
                  <li>Decompile, reverse-engineer, disassemble, or attempt to derive the underlying source code or algorithms of any compiled application, except where strictly permitted by applicable mandatory law.</li>
                  <li>Modify, translate, adapt, or create derivative works of any app, storyline, or audio synthesizer engine.</li>
                  <li>Rent, lease, lend, sell, redistribute, or sublicense the applications or any promotional unlock codes.</li>
                  <li>Circumvent or disable any digital rights management (DRM), licensing checks, or security features implemented in the software.</li>
                </ul>
              </div>
            </section>

            {/* 2. Google Play Store Terms Incorporation */}
            <section id="google-play-terms" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  2
                </span>
                Google Play Store Terms &amp; Third-Party Beneficiary
              </h2>
              <p>
                These Terms are entered into solely between you and Seitz, and not with Google LLC (&ldquo;<strong>Google</strong>&rdquo;). However, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>
                  <strong>Developer Responsibility:</strong> Seitz is solely responsible for the mobile applications, their maintenance, content, warranty, and customer support. Google has no obligation whatsoever to furnish any maintenance or support services with respect to the applications.
                </li>
                <li>
                  <strong>Third-Party Beneficiary:</strong> Google and its subsidiaries are third-party beneficiaries of this Agreement. Upon your acceptance of these Terms, Google will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary.
                </li>
                <li>
                  <strong>Google Play Terms:</strong> Your use of the apps must additionally comply with Google Play&apos;s Terms of Service and Developer Distribution Agreements.
                </li>
              </ul>
            </section>

            {/* 3. In-App Purchases, Billing & Refunds */}
            <section id="in-app-purchases" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  3
                </span>
                In-App Purchases, Subscriptions &amp; Refund Policy
              </h2>
              <div className="space-y-3">
                <p>
                  Certain features, expansions (such as full episodic storylines in <em>Mzansi Midnight</em> or ad-free lifetime licenses in <em>OmniRemote</em>), or digital items may be offered as In-App Purchases (IAP) or subscriptions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-display font-bold text-xs">
                      <CreditCard className="w-4 h-4" />
                      <span>Google Play Billing Engine</span>
                    </div>
                    <p className="text-xs text-slate-300/80 leading-relaxed">
                      All financial transactions for Android applications are processed exclusively through Google Play In-App Billing. Seitz does not store or process payment card numbers or banking credentials.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-1.5">
                    <div className="flex items-center gap-2 text-sky-400 font-display font-bold text-xs">
                      <Scale className="w-4 h-4" />
                      <span>Refund Procedures</span>
                    </div>
                    <p className="text-xs text-slate-300/80 leading-relaxed">
                      Refund requests for mobile app purchases are governed by Google Play&apos;s standard refund policy. Users can request refunds directly through Google Play Order History within 48 hours of purchase.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Beta Testing, The Seitz Testing Lab & Anti-Incentive Compliance */}
            <section id="beta-testing" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  4
                </span>
                The Seitz Testing Lab &amp; Closed Beta Rules
              </h2>
              <p>
                When participating as an enrolled tester in <strong>The Seitz Testing Lab</strong> (<code className="text-emerald-300 font-mono">seitz.co.za/testers</code>):
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/25 space-y-1.5">
                  <strong className="text-white font-display text-sm block">14-Day Continuous Retention Commitment:</strong>
                  <p className="text-xs text-slate-300/90 leading-relaxed">
                    Under Google Play Console policy, personal developer accounts must maintain at least 12 opted-in testers for 14 continuous days. Testers agree to keep assigned builds installed on their registered physical Android device for the full window and launch the app periodically to test core features.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-1.5">
                  <strong className="text-white font-display text-sm block">Tester Perks &amp; Lifetime Promo Codes:</strong>
                  <p className="text-xs text-slate-300/90 leading-relaxed">
                    Upon completing the 14-day continuous period and submitting basic qualitative check-in feedback, testers receive complimentary lifetime unlock codes. Promo codes are personal, non-transferable, and possess zero cash surrender value.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/[0.05] border border-amber-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Strict Anti-Incentive Policy Disclosure</span>
                  </div>
                  <p className="text-xs text-slate-300/90 leading-relaxed">
                    In strict compliance with Google Play Developer Program Policies: testing rewards and promo codes are provided exclusively for closed-track beta evaluation, crash identification, and private feedback. <strong>Leaving a public 5-star review or positive app store rating is never required, requested, tracked, or conditioned upon claiming tester rewards.</strong> See our dedicated <Link href="/anti-incentive" className="text-amber-300 underline font-mono">Anti-Incentive Policy</Link> for details.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Client Engineering Services & Fast-Track SLAs */}
            <section id="client-services" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  5
                </span>
                Client Engineering Services &amp; 12-Tester Fast-Track SLAs
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <strong className="text-white font-display text-sm block">A. Custom Development Milestones &amp; IP Handoff:</strong>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    Custom web applications, Android builds, and Apify Actor automations proceed under sprint milestones. Full intellectual property (IP), source code, repository rights, and deployment credentials transfer completely and irrevocably to the client upon final milestone payment.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <strong className="text-white font-display text-sm block">B. 12-Tester Fast-Track Service Guarantee:</strong>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    For developers ordering our Standalone Google Play Closed Testing Fast-Track ($299 / R5,500), we commit to assigning 15 real human Android devices (a +3 device safety buffer) with guaranteed 14-day continuous retention and questionnaire preparation assistance. If Google Play requires an extended closed testing cycle, we provide a <strong>100% Free Rerun Guarantee</strong> at zero extra fee. We do not guarantee store approval for apps containing fatal crashes, trademark infringements, or policy-violating content.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. User Conduct & Acceptable Use */}
            <section id="acceptable-use" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  6
                </span>
                Acceptable Use &amp; Community Standards
              </h2>
              <p>You agree not to use our applications or web portals to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li>Submit false, defamatory, obscene, or fraudulent community cleanup reports or photographs in <em>Clean and Clean</em>.</li>
                <li>Deploy automated bot traffic, headless vote scripts, or IP spoofers against the <em>Community Prioritization Voting Hub</em>.</li>
                <li>Harass, threaten, or abuse other players in multiplayer rooms or community forums.</li>
                <li>Interfere with or disrupt our servers, Supabase database endpoints, or local network relays.</li>
              </ul>
              <p>
                We reserve the right to immediately suspend or terminate access for any user found violating these standards.
              </p>
            </section>

            {/* 7. Disclaimers of Warranties & Limitation of Liability */}
            <section id="disclaimers" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-xs">
                  7
                </span>
                Warranty Disclaimers &amp; Limitation of Liability
              </h2>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-2">
                <p className="text-slate-300 text-xs uppercase font-mono tracking-wider font-bold">
                  &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; DISCLAIMER:
                </p>
                <p className="text-xs text-slate-300/85 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SEITZ APPLICATIONS, WEBSITES, AND BETA BUILDS ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND. SEITZ DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-xs text-slate-300/85 leading-relaxed pt-1">
                  SEITZ DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE APPLICATIONS WILL MEET YOUR SPECIFIC HARDWARE REQUIREMENTS, THAT SMART TV WI-FI PAIRING PROTOCOLS WILL OPERATE WITHOUT LOCAL NETWORK INTERFERENCE, OR THAT BETA BUILDS WILL BE ENTIRELY FREE OF DEFECTS.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-2">
                <p className="text-slate-300 text-xs uppercase font-mono tracking-wider font-bold">
                  LIMITATION OF LIABILITY:
                </p>
                <p className="text-xs text-slate-300/85 leading-relaxed">
                  TO THE EXTENT NOT PROHIBITED BY APPLICABLE LAW, IN NO EVENT SHALL SEITZ BE LIABLE FOR PERSONAL INJURY, OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING LOSS OF PROFITS, DATA LOSS, DEVICE CORRUPTION, OR BUSINESS INTERRUPTION) ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE APPLICATIONS. IN NO EVENT SHALL SEITZ&apos;S TOTAL AGGREGATE LIABILITY EXCEED THE GREATER OF THE AMOUNT ACTUALLY PAID BY YOU FOR THE SPECIFIC APPLICATION OR ONE HUNDRED SOUTH AFRICAN RANDS (ZAR 100).
                </p>
              </div>
            </section>

            {/* 8. Governing Law & Dispute Resolution */}
            <section id="governing-law" className="space-y-4 border-t border-white/[0.08] pt-8 scroll-mt-24">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  8
                </span>
                Governing Law, Jurisdiction &amp; Legal Notices
              </h2>
              <p>
                This Agreement shall be governed by and construed in accordance with the laws of the <strong>Republic of South Africa</strong>, without giving effect to any principles of conflicts of law. You agree to submit to the exclusive jurisdiction of the High Court of South Africa (KwaZulu-Natal Division, Durban).
              </p>
              <p>
                Nothing in this Agreement limits any non-waivable statutory rights you may hold under South Africa&apos;s <strong>Consumer Protection Act 68 of 2008 (CPA)</strong> or applicable mandatory consumer protection laws in your jurisdiction of residence.
              </p>

              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base text-white">Muhammed Faiz Seitz (Seitz)</span>
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/25 text-sky-400 text-[10px]">
                    Verified Developer
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>Legal Contact: <a href="mailto:byseitz.agency@gmail.com" className="text-sky-300 hover:underline">byseitz.agency@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Address: Durban, KwaZulu-Natal, Republic of South Africa 🇿🇦</span>
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
