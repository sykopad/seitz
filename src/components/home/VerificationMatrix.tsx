import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';
import { UpworkIcon } from '@/components/icons/UpworkIcon';
import { FiverrIcon } from '@/components/icons/FiverrIcon';
import { ApifyIcon } from '@/components/icons/ApifyIcon';

export function VerificationMatrix() {
  const platforms = [
    {
      name: 'Google Play Console',
      brand: 'Seitz Developer Profile',
      status: 'Active Android Developer',
      scope: 'Utility, productivity, civic technology, and community mobile apps.',
      icon: GooglePlayIcon,
      accent: 'text-emerald-400',
      badgeBorder: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-500/10',
      linkText: 'View Developer Profile',
      href: 'https://play.google.com/store/apps/dev?id=Seitz',
    },
    {
      name: 'Upwork',
      brand: 'Top Rated Engineering',
      status: 'Identity Verified | Escrow Protection',
      scope: 'Fixed-price milestone builds and long-term full-stack engineering contracts.',
      icon: UpworkIcon,
      accent: 'text-sky-400',
      badgeBorder: 'border-sky-500/30',
      badgeBg: 'bg-sky-500/10',
      linkText: 'Hire on Upwork',
      href: 'https://www.upwork.com/freelancers/~01faizseitz',
    },
    {
      name: 'Fiverr Pro / Marketplace',
      brand: 'Verified Specialized Seller',
      status: 'Specialized Seller Profile',
      scope: 'Scrapers, Apify automation workflows, and defined mobile/web micro-deliverables.',
      icon: FiverrIcon,
      accent: 'text-green-400',
      badgeBorder: 'border-green-500/30',
      badgeBg: 'bg-green-500/10',
      linkText: 'View Marketplace Gigs',
      href: 'https://www.fiverr.com/seitz_dev',
    },
    {
      name: 'Apify Marketplace',
      brand: 'Published Actor Developer',
      status: '37 Production Actors',
      scope: 'Public and bespoke crawlers, automated web extractors, and live RAG monitors.',
      icon: ApifyIcon,
      accent: 'text-amber-400',
      badgeBorder: 'border-amber-500/30',
      badgeBg: 'bg-amber-500/10',
      linkText: 'Inspect Published Actors',
      href: 'https://apify.com',
    },
  ];

  return (
    <section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4">
          Verification Matrix
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Verified Track Record Across Global Platforms
        </h2>
        <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed">
          Engage directly for enterprise custom contracts or hire through established freelance escrow networks where my developer track record is identity-verified and contract-protected.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((p) => (
          <div
            key={p.name}
            className="studio-card rounded-2xl p-6 border border-white/10 hover:border-white/25 flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <p.icon className={`w-5 h-5 ${p.accent}`} />
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${p.badgeBorder} ${p.badgeBg} ${p.accent}`}
                >
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-white mb-1">{p.name}</h3>
              <div className="text-xs font-mono text-slate-400 mb-3">{p.brand}</div>
              <p className="text-xs text-slate-300/80 leading-relaxed mb-6">{p.scope}</p>
            </div>

            <div className="pt-4 border-t border-white/[0.07]">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-slate-200 group-hover:text-sky-400 transition"
              >
                <span>{p.linkText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
