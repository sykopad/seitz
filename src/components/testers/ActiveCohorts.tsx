import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Clock, Gift, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { getActiveTestingApps } from '@/data/apps-catalog';

export function ActiveCohorts() {
  const activeApps = getActiveTestingApps();

  return (
    <section id="cohorts" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
          Google Play Closed Tracks
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Active Testing Cohorts
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          Google Play mandates 12 opted-in testers for 14 continuous days. We maintain 15-device cohorts for safe compliance buffers. Claim an open slot in our active Android tracks below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {activeApps.map((app) => (
          <div
            key={app.slug}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              {/* Header Badge & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Closed Beta Track
                </span>

                <span className="text-[11px] font-mono text-white/50">{app.category}</span>
              </div>

              {/* App Identity */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/20 bg-black/60 shrink-0">
                  <Image
                    src={app.media.icon}
                    alt={`${app.name} icon`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">
                    <Link href={`/apps/${app.slug}`} className="hover:underline">
                      {app.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2 mt-1">{app.tagline}</p>
                </div>
              </div>

              {/* Capacity Progress Bar */}
              <div className="space-y-1.5 py-3 border-t border-white/5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white/60 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-sky-400" />
                    Enrolled Testers:
                  </span>
                  <span className="font-bold text-emerald-400">
                    {app.currentTesters} of {app.targetTesters} ({app.openSlots} open)
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full transition-all"
                    style={{
                      width: `${Math.round((app.currentTesters / app.targetTesters) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Specs & Rewards List */}
              <div className="space-y-2.5 py-3 border-y border-white/5 text-xs text-white/80">
                <div className="flex items-center justify-between">
                  <span className="text-white/50 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Retention Window:
                  </span>
                  <span className="font-mono text-white font-medium">14 Days Continuous</span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <span className="text-white/50 flex items-center gap-1.5 shrink-0">
                    <Gift className="w-3.5 h-3.5 text-violet-400" />
                    Tester Perk:
                  </span>
                  <span className="font-semibold text-emerald-300 text-right text-[11px] line-clamp-1">
                    {app.reward}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-2 flex flex-col gap-2">
              <Link
                href="/testers#apply"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-black font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition shadow-md shadow-emerald-500/20 active:scale-[0.98]"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Reserve Testing Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href={`/apps/${app.slug}`}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white font-mono text-xs text-center flex items-center justify-center gap-1.5 transition border border-white/5"
              >
                <span>View Screenshots & Story</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
