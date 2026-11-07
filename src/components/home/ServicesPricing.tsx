'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  Smartphone,
  Cpu,
  Zap,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { serviceTiers, standaloneClosedTestingService } from '@/data/pricing-tiers';
import { formatCurrency } from '@/lib/utils';

export function ServicesPricing() {
  const [currency, setCurrency] = useState<'USD' | 'ZAR'>('USD');

  const capabilities = [
    {
      icon: Layers,
      title: 'Full-Stack Web Platforms & SaaS',
      description:
        'Architecture and deployment of responsive, performant web applications using modern React, Next.js, and serverless backends with Supabase.',
      badge: 'Next.js & Supabase',
    },
    {
      icon: Smartphone,
      title: 'Android Development & Deployment',
      description:
        'Native and cross-platform mobile apps engineered to clear Google Play Console production benchmarks with built-in testing cohort access.',
      badge: 'Play Store Ready',
    },
    {
      icon: Cpu,
      title: 'Web Scraping & Apify Actors',
      description:
        'Headless browser automation, anti-bot mitigation, dynamic DOM rendering, and scalable Apify Actor creation for continuous data pipelines.',
      badge: '37 Production Actors',
    },
    {
      icon: Zap,
      title: 'Custom API Integrations & Bridges',
      description:
        'Integration of payment gateways (Paystack/Stripe/PayPal), AI models, transactional emails, webhooks, and third-party data services.',
      badge: 'Enterprise Automations',
    },
  ];

  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Capabilities Overview Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
          Core Services & Pricing
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Engineered for Speed, Reliability & Scale
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          From micro-automation actors to turnkey full-stack SaaS and Android mobile releases, all projects are executed under transparent, milestone-backed contracts.
        </p>

        {/* Currency Switcher */}
        <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
              currency === 'USD'
                ? 'bg-sky-500 text-black shadow-md shadow-sky-500/20'
                : 'text-white/60 hover:text-white'
            }`}
          >
            USD ($) Global
          </button>
          <button
            type="button"
            onClick={() => setCurrency('ZAR')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
              currency === 'ZAR'
                ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                : 'text-white/60 hover:text-white'
            }`}
          >
            ZAR (R) South Africa
          </button>
        </div>
      </div>

      {/* 4 Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {capabilities.map((c) => (
          <div
            key={c.title}
            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-sky-500/30 transition group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <c.icon className="w-5 h-5 text-sky-400" />
            </div>
            <span className="text-[10px] font-mono uppercase text-sky-400/80 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 mb-3 inline-block">
              {c.badge}
            </span>
            <h3 className="font-bold text-white text-base mb-2">{c.title}</h3>
            <p className="text-xs text-white/60 leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing Matrix Header */}
      <div id="pricing" className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Structured Service Packages
        </h3>
        <p className="text-sm text-white/60">
          Available via direct invoicing (EFT / Wire) or marketplace escrow (Upwork / Fiverr).
        </p>
      </div>

      {/* 4-Tier Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {serviceTiers.map((tier) => {
          const rate = currency === 'USD' ? tier.startingRateUSD : tier.startingRateZAR;
          return (
            <div
              key={tier.id}
              className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'border-sky-500/50 shadow-2xl shadow-sky-500/15 bg-gradient-to-b from-sky-500/10 to-transparent'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 text-[10px] font-black uppercase tracking-wider text-black shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-sky-400 font-bold uppercase">
                    {tier.tierNumber}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-white/50 font-mono">
                    <Clock className="w-3 h-3 text-white/40" />
                    {tier.timeline}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 leading-snug">{tier.title}</h4>
                <p className="text-xs text-white/60 mb-5 min-h-[36px]">{tier.bestFor}</p>

                <div className="mb-6 pb-6 border-b border-white/5">
                  <div className="text-[11px] text-white/40 uppercase font-mono tracking-wider">
                    Starting From
                  </div>
                  <div className="text-3xl font-black text-white mt-1">
                    {formatCurrency(rate, currency)}
                  </div>
                </div>

                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-2">
                    Deliverables:
                  </div>
                  {tier.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full py-2.5 rounded-xl font-semibold text-xs tracking-wide uppercase transition text-center flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-sky-500 hover:bg-sky-400 text-black shadow-md shadow-sky-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                <span>Select Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Standalone Closed-Testing Fast-Track Callout Card */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-sky-500/5 to-transparent relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>Standalone Developer Service</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">
              {standaloneClosedTestingService.title}
            </h4>
            <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
              Google Play requires personal developer accounts to run a closed test with at least 12 opted-in testers for 14 continuous days. Seitz pairs your build with 15 verified human testers across real Android devices to clear the compliance barrier safely.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {standaloneClosedTestingService.features.slice(0, 4).map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-white/80">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center p-6 rounded-xl bg-black/40 border border-white/5">
            <span className="text-xs font-mono text-white/40 uppercase">Flat Turnkey Fee</span>
            <div className="text-3xl font-black text-white mt-1 mb-1">
              {formatCurrency(
                currency === 'USD'
                  ? standaloneClosedTestingService.rateUSD
                  : standaloneClosedTestingService.rateZAR,
                currency
              )}
            </div>
            <span className="text-xs text-emerald-400 font-mono mb-4">
              Turnaround: {standaloneClosedTestingService.timeline}
            </span>
            <Link
              href="/services/google-play-testing"
              className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wide uppercase transition text-center flex items-center justify-center gap-2"
            >
              <span>Book Closed Testing Cohort</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
