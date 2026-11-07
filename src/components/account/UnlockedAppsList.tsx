'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Smartphone,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';
import { UnlockedAppStatus } from '@/app/actions/account';

interface UnlockedAppsListProps {
  unlockedApps: UnlockedAppStatus[];
}

export function UnlockedAppsList({ unlockedApps }: UnlockedAppsListProps) {
  return (
    <section id="unlocked-apps" className="space-y-4 scroll-mt-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-emerald-600" />
            <span>My Active Closed Beta Apps &amp; Reviews</span>
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Android applications assigned to your Google Play account for the 14-day continuous closed-track period.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
          {unlockedApps.length} Apps Enrolled
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {unlockedApps.map((item) => {
          const { app, hasSubmittedFeedback } = item;

          return (
            <div
              key={app.slug}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-300 hover:shadow-md transition"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0">
                      <Image
                        src={app.media.icon}
                        alt={app.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-slate-950">
                        {app.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 block">
                        {app.googlePlayPackage}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-semibold border ${
                      hasSubmittedFeedback
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}
                  >
                    {hasSubmittedFeedback ? '14-Day Check-In Completed' : 'Check-In Due'}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {app.summary}
                </p>

                {/* Status Telemetry */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Continuous Retention:
                    </span>
                    <span className="text-emerald-700 font-bold">14-Day Closed Track Active</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                    <span>Tester Reward:</span>
                    <span className="text-slate-900 font-semibold">{app.reward}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                {app.playStoreUrl ? (
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs text-center flex items-center justify-center gap-1.5 transition shadow-xs"
                  >
                    <GooglePlayIcon className="w-3.5 h-3.5 text-sky-400" />
                    <span>Open in Play Store ↗</span>
                  </a>
                ) : (
                  <Link
                    href={`/apps/${app.slug}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs text-center flex items-center justify-center gap-1.5 transition"
                  >
                    <span>View App Specs</span>
                  </Link>
                )}

                <Link
                  href="/testers/feedback"
                  className={`py-2 px-3.5 rounded-xl text-xs font-mono font-semibold transition flex items-center gap-1 shrink-0 ${
                    hasSubmittedFeedback
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-xs'
                  }`}
                >
                  {hasSubmittedFeedback ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Feedback Logged</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Submit 3-Min Check-In</span>
                    </>
                  )}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
