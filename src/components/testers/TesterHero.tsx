import React from 'react';
import { Smartphone, Gift, ShieldCheck, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';

export function TesterHero() {
  const statBadges = [
    {
      label: '100% Free Access to Paid Apps',
      icon: Gift,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    {
      label: 'Real Android Hardware Only (No Emulators)',
      icon: Smartphone,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/20',
    },
    {
      label: 'Direct Developer Channel',
      icon: MessageSquare,
      color: 'text-violet-400',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/20',
    },
    {
      label: 'Official Google Play Closed Track',
      icon: GooglePlayIcon,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
    },
  ];

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-violet-500/10 blur-[140px] pointer-events-none -z-10" />

      <div className="glass-panel rounded-3xl p-6 sm:p-14 border border-emerald-500/20 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
        {/* Ribbon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Google Play 12-Tester / 14-Day Closed Testing Community</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
          Test Unreleased Android Apps.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400">
            Unlock Lifetime Premium Access for Free.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
          Join the private testing community for Seitz.co.za. Get early access to upcoming mobile utilities, digital tools, and indie games before they hit Google Play. Help eliminate bugs and receive complimentary lifetime licenses, in-app perks, and direct rewards instead of paying retail app store prices.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#apply"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 text-black font-bold text-sm tracking-wide transition shadow-xl shadow-emerald-500/25 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <span>Join as an Active Tester</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#cohorts"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:bg-white/10 text-white font-medium text-sm transition border border-white/10 flex items-center justify-center gap-2"
          >
            <span>View Active Testing Rounds</span>
          </a>
        </div>

        {/* 4 Stat Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-8 border-t border-white/5 text-left">
          {statBadges.map((b) => (
            <div
              key={b.label}
              className={`p-4 rounded-xl border ${b.border} ${b.bg} flex items-center gap-3`}
            >
              <b.icon className={`w-5 h-5 ${b.color} shrink-0`} />
              <span className="text-xs font-semibold text-white/90 leading-snug">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
