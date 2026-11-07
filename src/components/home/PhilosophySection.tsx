import React from 'react';
import { Terminal, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export function PhilosophySection() {
  const pillars = [
    {
      icon: Terminal,
      title: 'Architectural Rigor',
      description:
        'Clean system design using modern TypeScript, modular APIs, and relational database schemas optimized for scale. Built on Next.js 16 App Router and Supabase with strict Row-Level Security.',
      points: [
        'Strict type-safety across client, server, and database',
        'Relational modeling with sub-millisecond query indexing',
        'Zero vendor lock-in with clean microservice boundaries',
      ],
      accentColor: 'from-sky-500/20 to-sky-500/5',
      borderColor: 'border-sky-500/20',
      iconColor: 'text-sky-400',
    },
    {
      icon: ShieldCheck,
      title: 'Store-Ready Compliance',
      description:
        'End-to-end Google Play and mobile release management. We build mobile utilities that pass strict compliance reviews, backed by guaranteed 12-tester / 14-day continuous closed-testing cohorts.',
      points: [
        'Pre-configured Play Console closed tracks with automated cohorts',
        '14-day retention tracking with real human tester check-ins',
        'Compliance questionnaire guidance for Google Play production access',
      ],
      accentColor: 'from-emerald-500/20 to-emerald-500/5',
      borderColor: 'border-emerald-500/20',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Cpu,
      title: 'Automation at Scale',
      description:
        'Custom data scrapers, headless browser automation, and scheduled compute workloads built for high throughput and fault tolerance. Powered by 37 production-tested Apify actors.',
      points: [
        'Anti-bot countermeasure handling & intelligent session rotation',
        'Dynamic DOM parsing & headless browser cluster orchestration',
        'Automated database and webhook synchronization pipelines',
      ],
      accentColor: 'from-violet-500/20 to-violet-500/5',
      borderColor: 'border-violet-500/20',
      iconColor: 'text-violet-400',
    },
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
          Core Principles
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Engineering Without Technical Debt
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          Modern digital products require more than generic templates. I specialize in building serverless, high-efficiency systems engineered for peak performance, robust security, and near-zero ongoing maintenance costs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`glass-card rounded-2xl p-8 border ${p.borderColor} bg-gradient-to-b ${p.accentColor} flex flex-col justify-between hover:scale-[1.01] transition-transform`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <p.icon className={`w-6 h-6 ${p.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">{p.description}</p>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-2.5">
              {p.points.map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 text-xs text-white/80">
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
