'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  Clock,
  Layers,
  Smartphone,
  Cpu,
  Zap,
  Users,
} from 'lucide-react';
import { serviceTiers, standaloneClosedTestingService } from '@/data/pricing-tiers';
import { formatCurrency } from '@/lib/utils';

export function ServicesPricing() {
  const [currency, setCurrency] = useState<'USD' | 'ZAR'>('USD');

  const capabilities = [
    {
      code: 'CAP-01',
      icon: Layers,
      title: 'Full-Stack Web Platforms & SaaS',
      description:
        'Architecture and deployment of responsive, performant web applications using modern React, Next.js App Router, and serverless backends with Supabase.',
      badge: 'Next.js & Supabase',
    },
    {
      code: 'CAP-02',
      icon: Smartphone,
      title: 'Android Development & Store Launch',
      description:
        'Native and cross-platform mobile apps engineered to clear Google Play Console production benchmarks with built-in 15-tester cohort access.',
      badge: 'Play Store Ready',
    },
    {
      code: 'CAP-03',
      icon: Cpu,
      title: 'Web Scraping & Apify Actors',
      description:
        'Headless browser automation, anti-bot mitigation, dynamic DOM rendering, and scalable Apify Actor creation for continuous data pipelines.',
      badge: '37 Production Actors',
    },
    {
      code: 'CAP-04',
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
          Core Capabilities &amp; Commercial Matrix
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight mb-4">
          Engineered for Speed, Reliability &amp; Scale
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          From micro-automation actors to turnkey full-stack SaaS and Android mobile releases, all projects are executed under transparent, milestone-backed contracts.
        </p>

        {/* Currency Switcher */}
        <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-slate-100 border border-slate-200/90 shadow-2xs">
          <button
            type="button"
            onClick={() => setCurrency('USD')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition cursor-pointer ${
              currency === 'USD'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            USD ($) International
          </button>
          <button
            type="button"
            onClick={() => setCurrency('ZAR')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition cursor-pointer ${
              currency === 'ZAR'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            ZAR (R) South Africa
          </button>
        </div>
      </div>

      {/* 4 Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
        {capabilities.map((c) => (
          <div
            key={c.title}
            className="studio-card p-6 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition group shadow-xs"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                <c.icon className="w-5 h-5 text-sky-600" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-medium">{c.code}</span>
            </div>
            <span className="text-[10px] font-mono uppercase text-sky-700 px-2.5 py-0.5 rounded bg-sky-50 border border-sky-200 mb-3 inline-block font-semibold">
              {c.badge}
            </span>
            <h3 className="font-display font-bold text-slate-950 text-base mb-2">{c.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing Matrix Header */}
      <div id="pricing" className="text-center max-w-2xl mx-auto mb-12 scroll-mt-24">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-3">
          Structured Service Packages
        </h3>
        <p className="text-sm text-slate-600">
          Available via direct invoicing (EFT in ZAR / Wire in USD) or marketplace escrow (Upwork / Fiverr Pro).
        </p>
      </div>

      {/* 4-Tier Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {serviceTiers.map((tier) => {
          const rate = currency === 'USD' ? tier.startingRateUSD : tier.startingRateZAR;
          return (
            <div
              key={tier.id}
              className={`studio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 bg-white shadow-xs ${
                tier.popular
                  ? 'border-2 border-sky-500 shadow-md shadow-sky-500/10'
                  : 'border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs font-mono text-sky-600 font-bold uppercase">
                    {tier.tierNumber}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {tier.timeline}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-slate-950 mb-2 leading-snug">
                  {tier.title}
                </h4>
                <p className="text-xs text-slate-500 mb-5 min-h-[36px]">{tier.bestFor}</p>

                <div className="mb-6 pb-6 border-b border-slate-200">
                  <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                    Starting Investment
                  </div>
                  <div className="font-display text-3xl font-bold text-slate-950 mt-1 font-mono">
                    {formatCurrency(rate, currency)}
                  </div>
                </div>

                <div className="space-y-2.5 mb-8">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                    Included Deliverables:
                  </div>
                  {tier.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full py-3 rounded-xl font-display font-bold text-xs tracking-wide uppercase transition text-center flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-sky-500 to-emerald-600 hover:from-sky-400 hover:to-emerald-500 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
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
      <div className="studio-panel rounded-2xl p-6 sm:p-8 border border-emerald-300 bg-gradient-to-r from-emerald-50/70 via-sky-50/30 to-white relative overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Standalone B2B Developer Service</span>
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
              {standaloneClosedTestingService.title}
            </h4>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              Google Play mandates that personal developer accounts run a closed test with at least 12 opted-in testers for 14 continuous days. Seitz deploys a verified cohort of 15 human testers across real Android hardware with Play Console questionnaire preparation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {standaloneClosedTestingService.features.slice(0, 4).map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
              Turnkey 15-Device Cohort
            </span>
            <div className="font-display text-3xl font-bold text-slate-950 mt-1 mb-1 font-mono">
              {formatCurrency(
                currency === 'USD'
                  ? standaloneClosedTestingService.rateUSD
                  : standaloneClosedTestingService.rateZAR,
                currency
              )}
            </div>
            <span className="text-xs text-emerald-700 font-mono mb-4 font-semibold">
              Turnaround: {standaloneClosedTestingService.timeline}
            </span>
            <Link
              href="/services/google-play-testing"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-display font-bold text-xs tracking-wide uppercase transition text-center flex items-center justify-center gap-2 shadow-sm"
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
