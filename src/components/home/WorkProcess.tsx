import React from 'react';
import { Compass, Hammer, CheckCheck, Rocket } from 'lucide-react';

export function WorkProcess() {
  const steps = [
    {
      step: '01',
      icon: Compass,
      title: 'Technical Scoping & Architecture Review',
      description:
        'We analyze your exact business requirements, select the optimal tech stack, map database schemas and API dependencies, and establish immutable milestone objectives.',
    },
    {
      step: '02',
      icon: Hammer,
      title: 'Sprint-Based Build & Sandbox Previews',
      description:
        'Work proceeds in structured agile sprints. You receive live preview URLs, staging APKs, and direct check-ins to monitor implementation without technical friction.',
    },
    {
      step: '03',
      icon: CheckCheck,
      title: 'Rigorous Testing & Store Compliance',
      description:
        'Every API endpoint, SQL query, and mobile screen is tested across physical devices. For mobile apps, we deploy through our 12-tester closed-testing cohort before submission.',
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Production Deployment & Total Handoff',
      description:
        'Full delivery of production source code, deployment scripts, Supabase infrastructure configs, and clean documentation ensuring complete client ownership.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
          Engagement Framework
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          How We Work Together
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          Predictable delivery with zero technical ambiguity. Every contract is structured around transparent milestones and verifiable code deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div
            key={s.step}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <s.icon className="w-6 h-6 text-sky-400" />
                </div>
                <span className="text-2xl font-black font-mono text-white/20 group-hover:text-sky-400/40 transition">
                  {s.step}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-3 leading-snug">{s.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{s.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                Milestone Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
