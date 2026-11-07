'use client';

import React from 'react';
import { Gift, Sliders, ShieldCheck, Check } from 'lucide-react';

export function TesterPerks() {
  const perks = [
    {
      index: 'PERK // 01',
      icon: Gift,
      title: 'Lifetime Premium Upgrades',
      subtitle: 'Never pay retail app store prices',
      description:
        'Testers who fulfill the 14-day continuous testing period receive unique Google Play promo codes granting permanent lifetime access to paid app versions and premium subscription tiers.',
      highlights: [
        'Free lifetime promo codes directly in your inbox',
        'Full access to all future premium feature updates',
        'Zero subscription fees or in-app upgrade costs',
      ],
      border: 'border-emerald-200/90',
      glow: 'from-emerald-50/60 to-white',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200 font-semibold',
      iconColor: 'text-emerald-600',
    },
    {
      index: 'PERK // 02',
      icon: Sliders,
      title: 'Priority Feature Influence',
      subtitle: 'Your feedback shapes the roadmap',
      description:
        'Your bug reports and usability feedback directly guide our updates. Suggest workflow enhancements, report device glitches, and see your ideas implemented prior to public store release.',
      highlights: [
        'Direct communication with lead architect Faiz Seitz',
        'Vote on upcoming feature priority queues',
        'Fast turnaround on device-specific performance fixes',
      ],
      border: 'border-sky-200/90',
      glow: 'from-sky-50/60 to-white',
      badgeColor: 'text-sky-800 bg-sky-50 border-sky-200 font-semibold',
      iconColor: 'text-sky-600',
    },
    {
      index: 'PERK // 03',
      icon: ShieldCheck,
      title: 'Exclusive Early Access & VIP Badges',
      subtitle: 'First hands-on access to unreleased tools',
      description:
        'Get first look and hands-on access to upcoming tools across mobile utilities, civic technology platforms, and indie games before they hit the general public on Google Play.',
      highlights: [
        'VIP access to all future Seitz developer releases',
        'Special supporter recognition badges inside civic apps',
        'Priority enrollment in high-reward testing cohorts',
      ],
      border: 'border-violet-200/90',
      glow: 'from-violet-50/60 to-white',
      badgeColor: 'text-violet-800 bg-violet-50 border-violet-200 font-semibold',
      iconColor: 'text-violet-600',
    },
  ];

  return (
    <section id="perks" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
          Tester Benefits &amp; Rewards
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight mb-4">
          What You Receive as a Verified Tester
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          We deeply respect our testers&apos; time and device storage. In exchange for your 14-day participation, we grant permanent software value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {perks.map((p) => (
          <div
            key={p.title}
            className={`studio-card rounded-2xl p-7 sm:p-8 border ${p.border} bg-gradient-to-b ${p.glow} flex flex-col justify-between shadow-xs`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  <p.icon className={`w-5 h-5 ${p.iconColor}`} />
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-semibold">
                  {p.index}
                </span>
              </div>

              <div
                className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border w-fit mb-3 ${p.badgeColor}`}
              >
                {p.subtitle}
              </div>

              <h3 className="font-display text-xl font-bold text-slate-950 mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{p.description}</p>
            </div>

            <div className="pt-5 border-t border-slate-200 space-y-2.5">
              {p.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className={`w-4 h-4 ${p.iconColor} shrink-0 mt-0.5`} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
