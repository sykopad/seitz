import React from 'react';
import { UserCheck, DownloadCloud, Smartphone, Gift, CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const phases = [
    {
      phase: 'Phase 01',
      icon: UserCheck,
      title: 'Register Your Device',
      description:
        'Submit your primary Android hardware model and the Google account email associated with your Google Play Store so you can be added to the closed-track permission list.',
      tag: '1-Minute Form',
    },
    {
      phase: 'Phase 02',
      icon: DownloadCloud,
      title: 'Opt In & Install via Google Play',
      description:
        'When a cohort launches, you receive a direct official Google Play closed-track testing link. Accept the invitation and install the application directly from the Play Store for free.',
      tag: 'Official Play Store',
    },
    {
      phase: 'Phase 03',
      icon: Smartphone,
      title: 'Keep Installed for 14 Days',
      description:
        'Google Play requires 14 continuous days of tester retention. Explore features naturally, open the build every couple of days, and keep it active on your device.',
      tag: '14 Continuous Days',
    },
    {
      phase: 'Phase 04',
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
          The Testing Lifecycle
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          How the Testing Program Works
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          Google Play requires personal developer accounts to run closed tests with at least 12 opted-in testers for 14 continuous days. We turn that compliance requirement into a value exchange: you test high-quality software, and we give you full access forever.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((p, idx) => (
          <div
            key={p.phase}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <p.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-xs font-mono font-bold text-white/30 uppercase tracking-widest">
                  {p.phase}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-snug">{p.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">{p.description}</p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-emerald-400/90 uppercase tracking-wider">
                {p.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
