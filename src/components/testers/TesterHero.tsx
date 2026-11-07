'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Gift, MessageSquare, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';

export function TesterHero() {
  const statBadges = [
    {
      label: '100% Free Access to Paid Apps',
      icon: Gift,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
    },
    {
      label: 'Real Android Hardware Only',
      icon: Smartphone,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
    },
    {
      label: 'Direct Developer Channel',
      icon: MessageSquare,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
      border: 'border-violet-200',
    },
    {
      label: 'Official Google Play Closed Track',
      icon: GooglePlayIcon,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
  ];

  return (
    <section className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-emerald-500/8 via-sky-500/6 to-violet-500/6 blur-[140px] pointer-events-none -z-10" />

      <div className="studio-panel rounded-3xl p-6 sm:p-12 lg:p-14 border border-emerald-300 bg-white relative overflow-hidden shadow-xs">
        {/* Top Lab Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 pb-5 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>LAB STATUS: 4 ACTIVE CLOSED BETA TRACKS • 6 PIPELINE BUILDS</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>73+ Verified Android Devices Enrolled</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-6 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Google Play 12-Tester / 14-Day Compliance Engine</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-6">
            Test Unreleased Android Apps.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-sky-600 to-emerald-700">
              Unlock Lifetime Premium Access for Free.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Join the private testing community for Seitz.co.za. Get early access to upcoming mobile utilities, civic tools, and indie games before they hit Google Play. Help eliminate bugs and receive complimentary lifetime licenses and VIP perks instead of paying retail store prices.
          </p>

          {/* Dual Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <a
              href="#apply"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-sky-600 to-emerald-500 text-white font-display font-bold text-sm tracking-wide transition shadow-md shadow-emerald-500/20 hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              <span>Join as an Active Tester</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a
              href="#cohorts"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-display font-semibold text-sm transition border border-slate-200 shadow-2xs flex items-center justify-center gap-2"
            >
              <span>Explore 4 Active Cohorts</span>
            </a>
            <Link
              href="/testers/leaderboard"
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-800 font-mono text-xs font-semibold transition flex items-center justify-center gap-2 shadow-2xs"
            >
              <Gift className="w-4 h-4 text-amber-600" />
              <span>Claim Promo Code</span>
            </Link>
          </div>
        </div>

        {/* 4 Stat Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-8 border-t border-slate-200 text-left">
          {statBadges.map((b) => (
            <div
              key={b.label}
              className={`p-4 rounded-xl border ${b.border} ${b.bg} flex items-center gap-3 shadow-2xs`}
            >
              <b.icon className={`w-5 h-5 ${b.color} shrink-0`} />
              <span className="text-xs font-display font-bold text-slate-900 leading-snug">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
