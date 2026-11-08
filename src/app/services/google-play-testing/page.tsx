import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-emerald-500/20 selection:text-emerald-950">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl sticky top-0 z-40 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/seitz-logo.png"
                alt="Seitz"
                width={112}
                height={50}
                priority
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm text-slate-900 tracking-tight flex items-center gap-2">
                  SEITZ
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-800 font-mono uppercase tracking-wider font-semibold">
                    Fast-Track
                  </span>
                </span>
                <span className="text-[11px] text-slate-500 font-mono tracking-tight">
                  Google Play Closed Testing Service
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/testers"
                className="hidden sm:inline-block text-xs font-mono text-slate-600 hover:text-slate-950 transition"
              >
                Tester Lab Portal
              </Link>
              <Link
                href="/testers/compliance"
                className="hidden md:inline-block text-xs font-mono text-emerald-700 hover:underline font-semibold"
              >
                Play Console Guide
              </Link>
              <a
                href="#order"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-emerald-600/20"
              >
                Order Cohort
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Google Play Policy Compliant</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              Pass Google Play’s{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600">
                12-Tester, 14-Day Requirement
              </span>{' '}
              Safely with Real Android Devices
            </h1>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Google now blocks new personal developer accounts from launching apps on the Play Store until 12 testers maintain 14 days of continuous installation. We deploy a verified cohort of 15 real human Android users with 1-click Google Group integration and comprehensive questionnaire preparation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-mono text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <Users className="w-3.5 h-3.5 text-sky-600" />
                <span>15 Devices (Buffer Included)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>16–18 Days Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Upwork / Fiverr Escrow Option</span>
              </div>
            </div>
          </section>

          {/* Core Service Highlights Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">15 Real Human Testers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We assign 15 verified human testers (providing a +3 device safety buffer over Google’s 12-tester minimum). Authentic device models spanning Samsung, Pixel, Xiaomi, and Motorola on Android 12 through 15.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">14 Continuous Retention Days</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero churn guarantee. Testers keep your app installed for the full 14 consecutive days and open it periodically to register authentic usage telemetry in your Google Play Console dashboard.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-violet-600">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Production Questionnaire Copy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When the 14 days end, Google asks 3 detailed multi-part questionnaires about your feedback loops and fixes. We provide tailored, audit-tested answers ready to copy-paste directly into the Play Console.
              </p>
            </div>
          </section>

          {/* Comparison Matrix */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Why Developers Choose Seitz Over Freelance Gigs & Bot Farms
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Google’s automated review systems detect emulated clicks, sudden mass uninstalls, and fake IP clusters. Here is how our human cohort compares:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-mono uppercase tracking-wider">
                    <th className="py-3 px-4">Evaluation Factor</th>
                    <th className="py-3 px-4 text-emerald-800 font-bold">Seitz Testing Lab</th>
                    <th className="py-3 px-4">Random Freelance Gigs</th>
                    <th className="py-3 px-4">Bot Farms & Auto-Clickers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisons.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/60 transition">
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{row.feature}</td>
                      <td className="py-3.5 px-4 text-emerald-800 font-medium bg-emerald-50/50">
                        {row.seitz}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">{row.freelance}</td>
                      <td className="py-3.5 px-4 text-rose-700">{row.botFarms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                Transparent All-Inclusive Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Choose Your Cohort Package
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Backed by our 100% Free Rerun Guarantee. If Google requests more testing time, we run a second cohort at no extra cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Starter Tier (12 Testers) */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold">
                      12 Testers
                    </span>
                    <span className="text-xs font-mono text-slate-500">14–16 Days</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">Starter Cohort</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Direct baseline fulfillment of Google Play&apos;s 12-tester requirement.
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-950 font-mono">$199</span>
                    <span className="text-xs text-slate-500">USD via PayPal</span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-[11px] font-mono text-emerald-900 space-y-0.5">
                    <div className="font-bold uppercase tracking-wider text-[10px] text-emerald-800">Direct Tester Incentive Pool:</div>
                    <div>• $120.00 to 12 Testers ($10.00 each)</div>
                    <div className="text-slate-600">• $79.00 Seitz Compliance &amp; Support</div>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    {[
                      '12 Verified human Android testers on real devices',
                      '14 Continuous days of guaranteed retention',
                      '1-Click sync via seitz@googlegroups.com',
                      'Private crash and stability feedback telemetry',
                      'Play Console Parts 1, 2 & 3 answers kit',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <a
                    href="#order"
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    <span>Choose Starter ($199)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Standard Tier (20 Testers) - Popular */}
              <div className="bg-white rounded-3xl p-7 border-2 border-emerald-500 shadow-md flex flex-col justify-between relative overflow-hidden">
                <span className="absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-emerald-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  Most Popular
                </span>
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold">
                      20 Testers (+8 Buffer)
                    </span>
                    <span className="text-xs font-mono text-slate-500">14–16 Days</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">Standard Fast-Track</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Generous safety buffer ensuring zero compliance drops or retention stalls.
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-950 font-mono">$299</span>
                    <span className="text-xs text-slate-500">USD via PayPal</span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-[11px] font-mono text-emerald-900 space-y-0.5">
                    <div className="font-bold uppercase tracking-wider text-[10px] text-emerald-800">Direct Tester Incentive Pool:</div>
                    <div>• $200.00 to 20 Testers ($10.00 each)</div>
                    <div className="text-slate-600">• $99.00 Seitz Compliance &amp; Support</div>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    {[
                      '20 Verified human testers (8-device safety margin)',
                      '14 Continuous days of guaranteed retention',
                      '1-Click sync via seitz@googlegroups.com',
                      'Comprehensive private bug reports & telemetry',
                      'Complete copy-paste answers for Play Console',
                      'Direct WhatsApp / Telegram support channel',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <a
                    href="#order"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition shadow-md shadow-emerald-600/20"
                  >
                    <span>Choose Standard ($299)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Enterprise Tier (30 Testers) */}
              <div className="bg-white rounded-3xl p-7 border border-sky-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-300 text-sky-800 text-xs font-mono font-bold">
                      30 Testers (Multi-OEM)
                    </span>
                    <span className="text-xs font-mono text-slate-500">14–18 Days</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">Enterprise Audit Cohort</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Maximized device diversity across Samsung, Xiaomi, Pixel, and Android 12–15.
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-950 font-mono">$399</span>
                    <span className="text-xs text-slate-500">USD via PayPal</span>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200 text-[11px] font-mono text-sky-900 space-y-0.5">
                    <div className="font-bold uppercase tracking-wider text-[10px] text-sky-800">Direct Tester Incentive Pool:</div>
                    <div>• $270.00 to 30 Testers ($9.00 each)</div>
                    <div className="text-slate-600">• $129.00 Seitz Compliance &amp; Support</div>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    {[
                      '30 Verified testers across Android 12, 13, 14 & 15',
                      'Detailed UX heuristic evaluation & screen recordings',
                      'Network latency & low-RAM device stress tests',
                      'Priority Play Console questionnaire preparation',
                      'Instant PayPal or Upwork escrow protection',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <a
                    href="#order"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition shadow-md shadow-sky-600/20"
                  >
                    <span>Choose Enterprise ($399)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Client Intake Form Section */}
          <section id="order" className="space-y-8 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                Instant Onboarding
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Submit Your App for the Next Available Cohort
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Fill in your app details below. We initialize device deployment within 24 hours.
              </p>
            </div>

            <ClientIntakeForm />
          </section>

          {/* Anti-Incentive Policy Disclosure */}
          <section className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-xs max-w-3xl mx-auto space-y-3">
            <div className="flex items-center gap-2 text-amber-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Google Play Policy & Ethics Commitment</span>
            </div>
            <h4 className="text-base font-bold text-slate-950">Strict Anti-Incentive Compliance</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Google Play strictly forbids incentivizing public app store ratings or reviews. The Seitz Testing Lab operates strictly within Google’s developer guidelines: our service coordinates functional testing, device retention, crash reporting, and private bug feedback through official Play Console closed-track channels. We do not sell, guarantee, or solicit public 5-star ratings or reviews.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
