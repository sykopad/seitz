'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Clock, Gift, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { getActiveTestingApps } from '@/data/apps-catalog';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';

export function ActiveCohorts() {
  const activeApps = getActiveTestingApps();

  return (
    <section id="cohorts" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
          Google Play Closed Tracks
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight mb-4">
          Active Testing Cohorts
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Google Play mandates 12 opted-in testers for 14 continuous days. We maintain 15-device cohorts for safe compliance buffers. Claim an open slot in our active Android tracks below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {activeApps.map((app) => (
          <div
            key={app.slug}
            className="lab-card rounded-2xl p-6 sm:p-7 bg-white border border-emerald-200/90 shadow-xs flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              {/* Header Badge & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border bg-emerald-50 text-emerald-800 border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Closed Beta Track
                </span>

                <span className="text-[11px] font-mono text-slate-500">{app.category}</span>
              </div>

              {/* App Identity */}
              <div className="flex items-start gap-4 mb-5">
                <div className="relative w-15 h-15 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0 shadow-2xs">
                  <Image
                    src={app.media.icon}
                    alt={`${app.name} icon`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold text-slate-950 group-hover:text-emerald-700 transition">
                    <Link href={`/apps/${app.slug}`} className="hover:underline">
                      {app.name}
                    </Link>
                  </h3>
                  {app.googlePlayPackage && (
                    <span className="text-[10px] font-mono text-sky-700 block mt-0.5 truncate font-medium">
                      {app.googlePlayPackage}
                    </span>
                  )}
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">{app.tagline}</p>
                </div>
              </div>

              {/* Segmented 15-Device Capacity Telemetry Bar */}
              <div className="space-y-2 py-3.5 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-sky-600" />
                    Cohort Slots:
                  </span>
                  <span className="font-bold text-emerald-700">
                    {app.currentTesters} / {app.targetTesters} ({app.openSlots} open)
                  </span>
                </div>

                {/* 15-slot segmented indicator */}
                <div className="grid grid-cols-15 gap-1 pt-0.5">
                  {Array.from({ length: app.targetTesters }).map((_, idx) => {
                    const isFilled = idx < app.currentTesters;
                    return (
                      <div
                        key={idx}
                        className={`h-2 rounded-sm transition-all ${
                          isFilled
                            ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-2xs'
                            : 'bg-slate-100 border border-slate-200/60'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Specs & Rewards List */}
              <div className="space-y-2.5 py-3.5 border-y border-slate-200 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Retention Window:
                  </span>
                  <span className="font-mono text-slate-950 font-semibold">14 Days Continuous</span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <span className="text-slate-500 flex items-center gap-1.5 shrink-0">
                    <Gift className="w-3.5 h-3.5 text-violet-600" />
                    Tester Perk:
                  </span>
                  <span className="font-semibold text-emerald-700 text-right text-[11px] line-clamp-1">
                    {app.reward}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-1 flex flex-col gap-2">
              <Link
                href="/testers#apply"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition shadow-sm active:scale-[0.98]"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Reserve Testing Slot</span>
                <ArrowRight className="w-3 h-3" />
              </Link>

              {app.playStoreUrl && (
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-mono text-[11px] text-center flex items-center justify-center gap-1.5 transition border border-sky-200 font-medium"
                >
                  <GooglePlayIcon className="w-3 h-3 text-sky-600" />
                  <span>Google Play Link ↗</span>
                </a>
              )}

              <Link
                href={`/apps/${app.slug}`}
                className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 font-mono text-[11px] text-center flex items-center justify-center gap-1 transition border border-slate-200 font-medium"
              >
                <span>Architecture &amp; Screenshots</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
