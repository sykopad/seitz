import React from 'react';
import { Terminal, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';

export function PhilosophySection() {
  const pillars = [
    {
      index: '01 // ARCHITECTURE',
      icon: Terminal,
      title: 'Architectural Rigor',
      specTag: 'Next.js 16 • TypeScript • Supabase RLS',
      description:
        'Clean system design using strict TypeScript, modular APIs, and relational database schemas optimized for scale. Built on Next.js App Router and Supabase with strict Row-Level Security.',
      points: [
        'End-to-end type-safety across client, server, and database',
        'Relational modeling with sub-millisecond query indexing',
        'Zero vendor lock-in with clean service boundaries',
      ],
      accentColor: 'from-sky-500/15 to-transparent',
      borderColor: 'border-sky-500/25',
      iconColor: 'text-sky-400',
    },
    {
      index: '02 // COMPLIANCE',
      icon: ShieldCheck,
      title: 'Store-Ready Compliance',
      specTag: 'Play Console • 15-Device Buffer • 14-Day SLA',
      description:
        'End-to-end Google Play and mobile release management. We build mobile utilities that pass strict compliance reviews, backed by guaranteed 12-tester / 14-day continuous closed-testing cohorts.',
      points: [
        'Pre-configured Play Console closed tracks with human cohorts',
        '14-day retention tracking with verified tester check-ins',
        'Audit-ready questionnaire preparation for production access',
      ],
      accentColor: 'from-emerald-500/15 to-transparent',
      borderColor: 'border-emerald-500/25',
      iconColor: 'text-emerald-400',
    },
    {
      index: '03 // AUTOMATION',
      icon: Cpu,
      title: 'Automation at Scale',
      specTag: 'Playwright • Crawlee • 37 Apify Actors',
      description:
        'Custom data scrapers, headless browser automation, and scheduled compute workloads built for high throughput and fault tolerance. Powered by 37 production-tested Apify actors.',
      points: [
        'Anti-bot countermeasure handling & session rotation',
        'Dynamic DOM parsing & headless browser cluster orchestration',
        'Automated PostgreSQL and webhook synchronization pipelines',
      ],
      accentColor: 'from-violet-500/15 to-transparent',
      borderColor: 'border-violet-500/25',
      iconColor: 'text-violet-400',
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4">
          <span>System Standards</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Engineering Without Technical Debt
        </h2>
        <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed">
          Modern digital products require more than generic templates. Every system is engineered for sub-second latency, strict data security, and near-zero ongoing maintenance overhead.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`studio-card rounded-2xl p-7 sm:p-8 border ${p.borderColor} bg-gradient-to-b ${p.accentColor} flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <p.icon className={`w-5 h-5 ${p.iconColor}`} />
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-400 tracking-wider">
                  {p.index}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">{p.title}</h3>
              <div className="inline-block text-[11px] font-mono text-slate-300 px-2.5 py-0.5 rounded bg-black/40 border border-white/[0.07] mb-4">
                {p.specTag}
              </div>
              <p className="text-sm text-slate-300/80 leading-relaxed mb-6">{p.description}</p>
            </div>

            <div className="pt-5 border-t border-white/[0.07] space-y-2.5">
              {p.points.map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className={`w-4 h-4 ${p.iconColor} shrink-0 mt-0.5`} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
