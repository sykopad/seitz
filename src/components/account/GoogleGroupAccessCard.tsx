'use client';

import React from 'react';
import {
  Users,
  ShieldCheck,
  ExternalLink,
  Smartphone,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SEITZ_GOOGLE_GROUP, SEITZ_APPS_WITH_GOOGLE_GROUP_ACCESS } from '@/lib/google-groups/client';

interface GoogleGroupAccessCardProps {
  userEmail: string;
}

export function GoogleGroupAccessCard({ userEmail }: GoogleGroupAccessCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-mono font-semibold">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>Centralized Tester Group • 1 Join = All 4 Apps</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
            <span>Seitz Google Group All-Access Pass</span>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800">
              4 Apps Authorized
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            All our Google Play games use the central group{' '}
            <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-emerald-700 font-bold">
              {SEITZ_GOOGLE_GROUP.email}
            </code>{' '}
            for closed testing tracks. By providing your email (<strong>{userEmail}</strong>), you only ever need to join this one group to receive instant closed-track access across our entire portfolio.
          </p>
        </div>

        <a
          href={SEITZ_GOOGLE_GROUP.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-display font-bold text-xs uppercase tracking-wide transition shadow-md shadow-emerald-500/15 shrink-0 cursor-pointer"
        >
          <Users className="w-4 h-4" />
          <span>Confirm Google Group Join</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 4 Connected Apps Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Pre-Authorized Google Play Closed Beta Apps
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            Click Opt-In on each app below
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SEITZ_APPS_WITH_GOOGLE_GROUP_ACCESS.map((app, index) => (
            <div
              key={app.slug}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition space-y-3 relative group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-semibold">
                      {app.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition">
                    {app.shortName}
                  </h3>
                </div>

                <div className="p-2 rounded-xl bg-white border border-slate-200 text-emerald-600 shadow-2xs shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {app.description}
              </p>

              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2">
                <a
                  href={app.optInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Opt-In on Play Store</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>

                <a
                  href={app.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-medium text-xs flex items-center gap-1 transition"
                  title="Direct Google Play Store details page"
                >
                  <span>Store</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fast Instructions Pill */}
      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3 text-xs text-emerald-950">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5 leading-relaxed">
          <span className="font-bold">How Closed Beta Testing Works:</span>
          <p className="text-[11px] text-emerald-800">
            1. Tap <strong>Confirm Google Group Join</strong> once to ensure your Google Account is recognized.
            <br />
            2. Tap <strong>Opt-In on Play Store</strong> for each app above. Google Play will say <em>&quot;You are now a tester&quot;</em>.
            <br />
            3. Download or update the app on your Android phone and keep it installed for 14 continuous days to earn your verified badges &amp; promo codes!
          </p>
        </div>
      </div>
    </div>
  );
}
