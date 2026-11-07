'use client';

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
        'Every API endpoint, SQL query, and mobile screen is tested across physical devices. For mobile apps, we deploy through our 15-tester closed-testing cohort before submission.',
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
          Engagement Framework
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight mb-4">
          How We Work Together
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Predictable delivery with zero technical ambiguity. Every contract is structured around transparent milestones and verifiable code deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div
            key={s.step}
            className="studio-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between relative group shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <s.icon className="w-5 h-5 text-sky-600" />
                </div>
                <span className="font-display text-2xl font-bold font-mono text-slate-300 group-hover:text-sky-600/40 transition">
                  // {s.step}
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-slate-950 mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                Milestone Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
