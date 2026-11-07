import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Google Play Anti-Incentive Policy Disclosure | Seitz.co.za',
  description:
    'Our formal compliance declaration regarding Google Play Developer Program Policies, incentivized reviews, and authentic human beta testing standards.',
};

export default function AntiIncentivePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-emerald-500/20 selection:text-emerald-950">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl sticky top-0 z-40 shadow-xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link
              href="/testers"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-slate-950 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Testing Lab</span>
            </Link>
            <span className="text-xs font-mono text-emerald-800 font-semibold">Policy Reference: Play Console 2026</span>
          </div>
        </header>

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Developer Disclosure</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Anti-Incentive Policy & Testing Ethics
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Google Play requires developers to maintain a closed test with at least 12 opted-in testers for 14 continuous days. This document outlines how Seitz operates strictly within Google’s Developer Program Policies regarding incentivized ratings and authentic user evaluation.
            </p>
          </div>

          <div className="studio-card rounded-2xl p-6 sm:p-10 border border-slate-200 bg-white shadow-xs space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Google’s Policy on Incentivized Engagement
              </h2>
              <blockquote className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-500 text-slate-700 italic text-xs leading-relaxed">
                "Developers must not attempt to manipulate the placement of any apps on Google Play. This includes, but is not limited to, inflating product ratings, reviews, or install counts by illegitimate means, such as fraudulent or incentivized installs, reviews, and ratings."
                <span className="block mt-2 font-mono text-[10px] text-slate-500 not-italic font-semibold">
                  — Google Play Developer Policy Center: Spam and Placement
                </span>
              </blockquote>
            </section>

            <section className="space-y-4 border-t border-slate-200 pt-6">
              <h2 className="text-lg font-bold text-slate-950">How Seitz Maintains 100% Policy Compliance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Private Feedback Only
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    All bug reports, usability notes, and device metrics are submitted privately through Google Play Console feedback channels or our private forms.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Zero Review Incentives
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    We never offer money, gifts, promo codes, or rewards in exchange for public Play Store reviews or star ratings. Reviews are never tracked or required.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Real Physical Hardware
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Zero emulators, automated bot scripts, or virtual machines. 100% real human users with authentic device IDs across diverse Android models and IP addresses.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Transparent Compensation
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Testers receive complimentary beta access to use the software and optional lifetime promotional unlock codes solely for keeping the software installed.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3 border-t border-slate-200 pt-6">
              <h2 className="text-lg font-bold text-slate-950">Production Questionnaire Certification</h2>
              <p className="text-slate-600 leading-relaxed">
                When developers apply for production access in Play Console, they must certify that their closed testing feedback was authentic. We provide transparent bug reports detailing real crash fixes and user interface feedback that developers can honestly present to Google reviewers.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
