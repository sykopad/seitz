import React from 'react';
import { UserCheck, DownloadCloud, Smartphone, Gift } from 'lucide-react';

export function HowItWorks() {
  const phases = [
    {
      phase: 'PHASE // 01',
      icon: UserCheck,
      title: 'Register Your Device',
      description:
        'Submit your primary Android hardware model and the Google account email associated with your Google Play Store so you can be added to the closed-track permission list.',
      tag: '1-Minute Form',
    },
    {
      phase: 'PHASE // 02',
      icon: DownloadCloud,
      title: 'Opt In & Install via Google Play',
      description:
        'When a cohort launches, you receive a direct official Google Play closed-track testing link. Accept the invitation and install the application directly from the Play Store for free.',
      tag: 'Official Play Store',
    },
    {
      phase: 'PHASE // 03',
      icon: Smartphone,
      title: 'Keep Installed for 14 Days',
      description:
        'Google Play requires 14 continuous days of tester retention. Explore features naturally, open the build every couple of days, and keep it active on your device.',
      tag: '14 Continuous Days',
    },
    {
      phase: 'PHASE // 04',
      icon: Gift,
      title: 'Submit Feedback & Claim Perks',
      description:
        'Share quick observations or bug reports via our 3-minute check-in form. Once the cohort concludes, your permanent lifetime promo code or VIP upgrade is delivered to your inbox.',
      tag: 'Permanent Lifetime Access',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4">
          The Testing Lifecycle
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          How the Testing Program Works
        </h2>
        <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed">
          Google Play requires personal developer accounts to run closed tests with at least 12 opted-in testers for 14 continuous days. We turn that compliance requirement into a direct value exchange: you test high-quality software, and we unlock full access forever.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((p) => (
          <div
            key={p.phase}
            className="lab-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <p.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  {p.phase}
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-white mb-2.5 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-slate-300/80 leading-relaxed mb-6">{p.description}</p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
                {p.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
