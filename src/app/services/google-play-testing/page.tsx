import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Users,
  Award,
  ArrowRight,
  HelpCircle,
  AlertTriangle,
  FileText,
  Lock,
} from 'lucide-react';
import { ClientIntakeForm } from '@/components/services/ClientIntakeForm';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Google Play 12-Tester Fast-Track Service | Pass Production Access | Seitz',
  description:
    'Pass Google Play’s strict 12-tester, 14-day continuous closed testing requirement with 15 verified human Android testers. Fast 16-18 day turnaround with questionnaire preparation.',
  openGraph: {
    title: 'Google Play 12-Tester Closed Testing Fast-Track Service | Seitz',
    description:
      'Guaranteed 14-day continuous retention across real Android devices. Fulfill Google Play requirement with zero churn.',
    url: 'https://seitz.co.za/services/google-play-testing',
  },
};

export default function GooglePlayTestingServicePage() {
  const comparisons = [
    {
      feature: 'Tester Authenticity',
      seitz: '100% Real human testers on physical Android hardware',
      freelance: 'Mixed or unverified users; often missing daily retention',
      botFarms: 'Emulated virtual devices (triggers Google bot bans)',
    },
    {
      feature: 'Compliance Buffer',
      seitz: '15 Devices assigned (+3 buffer over Google’s 12)',
      freelance: 'Exactly 12 or 10; 1 uninstall voids the entire 14 days',
      botFarms: 'Inflated fake numbers with zero authentic IP diversity',
    },
    {
      feature: 'Setup Simplicity',
      seitz: '1-Click setup via master Google Group (seitz@googlegroups.com)',
      freelance: 'Manual email CSV uploading and constant chasing',
      botFarms: 'Direct APK uploads via sketchy side channels',
    },
    {
      feature: 'Questionnaire Support',
      seitz: 'Copy-paste ready answers for Parts 1, 2, and 3',
      freelance: 'Zero assistance with the production application',
      botFarms: 'None',
    },
    {
      feature: 'SLA Guarantee',
      seitz: 'Free rerun or 100% refund if Google requires more time',
      freelance: 'No refunds once escrow released',
      botFarms: 'No guarantees; high account risk',
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070b] text-[#f8fafc] relative selection:bg-emerald-400 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-75 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <header className="border-b border-white/[0.08] bg-[#05070b]/85 backdrop-blur-2xl sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 p-[1px] shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full bg-[#05070b] rounded-[11px] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight flex items-center gap-2">
                  SEITZ
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono uppercase tracking-wider">
                    Fast-Track
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-tight">
                  Google Play Closed Testing Service
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/testers"
                className="hidden sm:inline-block text-xs font-mono text-white/70 hover:text-white transition"
              >
                Tester Lab Portal
              </Link>
              <Link
                href="/testers/compliance"
                className="hidden md:inline-block text-xs font-mono text-emerald-400 hover:underline"
              >
                Play Console Guide
              </Link>
              <a
                href="#order"
                className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs uppercase tracking-wider transition shadow-md shadow-emerald-500/20"
              >
                Order Cohort
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Google Play Policy Compliant</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Pass Google Play’s{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400">
                12-Tester, 14-Day Requirement
              </span>{' '}
              Safely with Real Android Devices
            </h1>

            <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Google now blocks new personal developer accounts from launching apps on the Play Store until 12 testers maintain 14 days of continuous installation. We deploy a verified cohort of 15 real human Android users with 1-click Google Group integration and comprehensive questionnaire preparation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-mono text-white/70">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Users className="w-3.5 h-3.5 text-sky-400" />
                <span>15 Devices (Buffer Included)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>16–18 Days Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Upwork / Fiverr Escrow Option</span>
              </div>
            </div>
          </section>

          {/* Core Service Highlights Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">15 Real Human Testers</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We assign 15 verified human testers (providing a +3 device safety buffer over Google’s 12-tester minimum). Authentic device models spanning Samsung, Pixel, Xiaomi, and Motorola on Android 12 through 15.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">14 Continuous Retention Days</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Zero churn guarantee. Testers keep your app installed for the full 14 consecutive days and open it periodically to register authentic usage telemetry in your Google Play Console dashboard.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Production Questionnaire Copy</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                When the 14 days end, Google asks 3 detailed multi-part questionnaires about your feedback loops and fixes. We provide tailored, audit-tested answers ready to copy-paste directly into the Play Console.
              </p>
            </div>
          </section>

          {/* Comparison Matrix */}
          <section className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why Developers Choose Seitz Over Freelance Gigs & Bot Farms
              </h2>
              <p className="text-xs sm:text-sm text-white/60">
                Google’s automated review systems detect emulated clicks, sudden mass uninstalls, and fake IP clusters. Here is how our human cohort compares:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white/50 font-mono uppercase tracking-wider">
                    <th className="py-3 px-4">Evaluation Factor</th>
                    <th className="py-3 px-4 text-emerald-400 font-bold">Seitz Testing Lab</th>
                    <th className="py-3 px-4">Random Freelance Gigs</th>
                    <th className="py-3 px-4">Bot Farms & Auto-Clickers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisons.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition">
                      <td className="py-3.5 px-4 font-semibold text-white">{row.feature}</td>
                      <td className="py-3.5 px-4 text-emerald-300 font-medium bg-emerald-500/[0.03]">
                        {row.seitz}
                      </td>
                      <td className="py-3.5 px-4 text-white/60">{row.freelance}</td>
                      <td className="py-3.5 px-4 text-red-400/80">{row.botFarms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Transparent All-Inclusive Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Choose Your Cohort Package
              </h2>
              <p className="text-xs sm:text-sm text-white/60">
                Backed by our 100% Free Rerun Guarantee. If Google requests more testing time, we run a second cohort at no extra cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Standard Tier */}
              <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                      Most Popular for Indie Devs
                    </span>
                    <span className="text-xs font-mono text-white/40">16–18 Days</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white">Standard Production Cohort</h3>
                    <p className="text-xs text-white/60 mt-1">
                      Designed to pass Google Play’s 12-tester requirement on your first submission.
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white font-mono">$299</span>
                    <span className="text-xs text-white/50">USD / ~R5,500 ZAR</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                    {[
                      '15 Verified human Android testers (3-device safety buffer)',
                      '14 Continuous days of guaranteed installation retention',
                      '1-Click master Google Group sync (seitz@googlegroups.com)',
                      'Private bug reports and device crash telemetry',
                      'Complete copy-paste answers for Play Console Parts 1, 2 & 3',
                      'Direct WhatsApp / Telegram support channel',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#order"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-black font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
                  >
                    <span>Reserve Standard Cohort ($299)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Pro Tier */}
              <div className="glass-card rounded-3xl p-8 border border-sky-500/30 flex flex-col justify-between relative overflow-hidden bg-sky-950/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-bold">
                      For Game Studios & Agencies
                    </span>
                    <span className="text-xs font-mono text-white/40">16–18 Days</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white">Pro Audit Cohort</h3>
                    <p className="text-xs text-white/60 mt-1">
                      Expanded device coverage with comprehensive QA video recordings.
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white font-mono">$499</span>
                    <span className="text-xs text-white/50">USD / ~R8,900 ZAR</span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-white/80">
                    {[
                      '25 Verified human Android testers across Android 12, 13, 14, 15',
                      '14 Continuous days of guaranteed installation retention',
                      'Detailed UX heuristic evaluation and screen video bug recordings',
                      'Deep QA breakdown covering network latency and low-memory devices',
                      'Priority Play Console questionnaire review and 1-on-1 prep',
                      'Custom escrow via Upwork Direct Contract or Fiverr Pro',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#order"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 hover:from-sky-400 hover:to-emerald-300 text-black font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition shadow-lg shadow-sky-500/20"
                  >
                    <span>Reserve Pro Cohort ($499)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Client Intake Form Section */}
          <section id="order" className="space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Instant Onboarding
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Submit Your App for the Next Available Cohort
              </h2>
              <p className="text-xs sm:text-sm text-white/60">
                Fill in your app details below. We initialize device deployment within 24 hours.
              </p>
            </div>

            <ClientIntakeForm />
          </section>

          {/* Anti-Incentive Policy Disclosure */}
          <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 bg-white/[0.02] max-w-3xl mx-auto space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Google Play Policy & Ethics Commitment</span>
            </div>
            <h4 className="text-base font-bold text-white">Strict Anti-Incentive Compliance</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Google Play strictly forbids incentivizing public app store ratings or reviews. The Seitz Testing Lab operates strictly within Google’s developer guidelines: our service coordinates functional testing, device retention, crash reporting, and private bug feedback through official Play Console closed-track channels. We do not sell, guarantee, or solicit public 5-star ratings or reviews.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
