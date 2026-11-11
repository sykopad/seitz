'use client';

import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';
import { UpworkIcon } from '@/components/icons/UpworkIcon';
import { FiverrIcon } from '@/components/icons/FiverrIcon';
import { ApifyIcon } from '@/components/icons/ApifyIcon';
import { PROFESSIONAL_LINKS } from '@/data/social-links';

export function VerificationMatrix() {
  const platforms = [
    {
      name: 'Google Play Console',
      brand: 'Seitz Organization Developer',
      status: 'Verified Organization Account',
      scope: 'Production Android ecosystem, real-device QA lab, and community mobile apps.',
      icon: GooglePlayIcon,
      accent: 'text-emerald-700',
      badgeBorder: 'border-emerald-200',
      badgeBg: 'bg-emerald-50',
      linkText: 'View Developer Profile',
      href: 'https://play.google.com/store/apps/dev?id=Seitz',
    },
    {
      name: 'Upwork',
      brand: 'Top Rated Engineering',
      status: 'Identity Verified | Escrow Protection',
      scope: 'Fixed-price milestone builds and long-term full-stack engineering contracts.',
      icon: UpworkIcon,
      accent: 'text-sky-700',
      badgeBorder: 'border-sky-200',
      badgeBg: 'bg-sky-50',
      linkText: 'Hire on Upwork',
      href: PROFESSIONAL_LINKS.upwork,
    },
    {
      name: 'Fiverr Pro / Marketplace',
      brand: 'Verified Specialized Seller',
      status: 'Specialized Seller Profile',
      scope: 'Scrapers, Apify automation workflows, and defined mobile/web micro-deliverables.',
      icon: FiverrIcon,
      accent: 'text-green-700',
      badgeBorder: 'border-green-200',
      badgeBg: 'bg-green-50',
      linkText: 'View Marketplace Gigs',
      href: PROFESSIONAL_LINKS.fiverr,
    },
    {
      name: 'Apify Marketplace',
      brand: 'Published Actor Developer',
      status: '37 Production Actors',
      scope: 'Public and bespoke crawlers, automated web extractors, and live RAG monitors.',
      icon: ApifyIcon,
      accent: 'text-amber-700',
      badgeBorder: 'border-amber-200',
      badgeBg: 'bg-amber-50',
      linkText: 'Inspect Published Actors',
      href: 'https://apify.com',
    },
  ];

  return (
    <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
          Verification Matrix
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight mb-4">
          Verified Track Record Across Global Platforms
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Engage directly for enterprise custom contracts or hire through established freelance escrow networks where my developer track record is identity-verified and contract-protected.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="studio-card rounded-2xl p-6 bg-white border border-slate-200 hover:border-slate-300 flex flex-col justify-between transition-all group shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                  <p.icon className={`w-5 h-5 ${p.accent}`} />
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${p.badgeBorder} ${p.badgeBg} ${p.accent}`}
                >
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-slate-950 mb-1">{p.name}</h3>
              <div className="text-xs font-mono text-slate-500 mb-3">{p.brand}</div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{p.scope}</p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 hover:text-sky-700 transition"
              >
                <span>{p.linkText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
