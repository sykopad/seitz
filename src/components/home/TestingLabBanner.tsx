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
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-emerald-500/35 bg-gradient-to-r from-emerald-950/45 via-sky-950/25 to-[#05070b] backdrop-blur-2xl shadow-2xl">
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/12 rounded-full blur-[110px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Community Beta & Compliance Lab</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The Seitz Testing Lab{' '}
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                (/testers)
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
              Before any mobile utility or civic app launches publicly on Google Play, it undergoes continuous 14-day beta testing inside the Seitz Testing Lab. Testers receive early builds, report bugs, and earn lifetime complimentary access and VIP perks instead of paying retail app store prices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 w-full sm:w-auto text-left lg:text-right">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                Active Visita & Seitz Pool
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold text-white font-mono">
                73+ Beta Testers
              </span>
              <p className="text-[11px] text-slate-400 font-mono mt-1">
                Recruited via TikTok & Community
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto">
              <Link
                href="/testers"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 text-slate-950 font-display font-bold text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 hover:scale-[1.01] transition"
              >
                <span>Join Testing Cohorts (/testers)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/testers/vote"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-200 hover:text-white font-mono text-xs text-center flex items-center justify-center gap-1.5 transition border border-white/10"
              >
                <span>Vote on 7 Pipeline Apps →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
