import React from 'react';
import { Gift, Sliders, ShieldCheck, Check } from 'lucide-react';

export function TesterPerks() {
  const perks = [
    {
      icon: Gift,
      title: 'Lifetime Premium Upgrades',
      subtitle: 'Never pay for app features',
      description:
        'Testers who fulfill the 14-day continuous testing period receive unique Google Play promo codes granting permanent lifetime access to paid app versions and premium subscription tiers.',
      highlights: [
        'Free lifetime promo codes directly in your inbox',
        'Full access to all future premium feature updates',
        'Zero subscription fees or in-app upgrade costs',
      ],
      border: 'border-emerald-500/30',
      glow: 'from-emerald-500/10 to-transparent',
      badgeColor: 'text-emerald-400 bg-emerald-500/10',
    },
    {
      icon: Sliders,
      title: 'Priority Feature Influence',
      subtitle: 'Your feedback shapes the roadmap',
      description:
        'Your bug reports and usability feedback directly guide our updates. Suggest workflow enhancements, report device glitches, and see your ideas implemented prior to public store release.',
      highlights: [
        'Direct communication with lead developer Faiz Seitz',
        'Vote on upcoming feature priority queues',
        'Fast turnaround on device-specific performance fixes',
      ],
      border: 'border-sky-500/30',
      glow: 'from-sky-500/10 to-transparent',
      badgeColor: 'text-sky-400 bg-sky-500/10',
    },
    {
      icon: ShieldCheck,
      title: 'Exclusive Early Access & VIP Badges',
      subtitle: 'Be first on unreleased tools',
      description:
        'Get first look and hands-on access to upcoming tools across mobile utilities, civic technology platforms, and indie games before they hit the general public on Google Play.',
      highlights: [
        'VIP access to all future Seitz developer releases',
        'Special supporter recognition badges inside civic apps',
        'Priority enrollment in high-reward testing cohorts',
      ],
      border: 'border-violet-500/30',
      glow: 'from-violet-500/10 to-transparent',
      badgeColor: 'text-violet-400 bg-violet-500/10',
    },
  ];

  return (
    <section id="perks" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
          Tester Benefits
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          What You Receive as a Verified Tester
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          We deeply respect our testers' time and device battery. In exchange for your 14-day participation, we grant you permanent value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {perks.map((p) => (
          <div
            key={p.title}
            className={`glass-card rounded-2xl p-8 border ${p.border} bg-gradient-to-b ${p.glow} flex flex-col justify-between hover:scale-[1.01] transition-transform`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <p.icon className="w-6 h-6 text-white" />
              </div>

              <div className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full w-fit mb-3 ${p.badgeColor}`}>
                {p.subtitle}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-2.5">
              {p.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 text-xs text-white/80">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
