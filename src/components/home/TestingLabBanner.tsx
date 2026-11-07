'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export function TestingLabBanner() {
  const perks = [
    'Lifetime promo codes to paid apps upon public release',
    'Direct developer channel & priority feature influence',
    '100% free closed-track Google Play Store downloads',
    'Real human Android tester community (no emulators/bots)',
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-emerald-300 bg-gradient-to-r from-emerald-50 via-sky-50/60 to-white backdrop-blur-2xl shadow-xs">
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/8 rounded-full blur-[110px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Community Beta &amp; Compliance Lab</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              The Seitz Testing Lab{' '}
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
                (/testers)
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Before any mobile utility or civic app launches publicly on Google Play, it undergoes continuous 14-day beta testing inside the Seitz Testing Lab. Testers receive early builds, report bugs, and earn lifetime complimentary access and VIP perks instead of paying retail app store prices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs w-full sm:w-auto text-left lg:text-right">
              <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider font-bold block">
                Active Visita &amp; Seitz Pool
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold text-slate-950 font-mono">
                73+ Beta Testers
              </span>
              <p className="text-[11px] text-slate-500 font-mono mt-1">
                Recruited via TikTok &amp; Community
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto">
              <Link
                href="/testers"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-sky-600 to-emerald-500 text-white font-display font-bold text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 hover:scale-[1.01] transition"
              >
                <span>Join Testing Cohorts (/testers)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/testers/vote"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-mono text-xs text-center flex items-center justify-center gap-1.5 transition border border-slate-200 shadow-2xs"
              >
                <span>Vote on 6 Pipeline Apps →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
