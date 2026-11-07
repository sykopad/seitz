'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Cpu,
  Check,
  Copy,
  Mail,
  MapPin,
  Layers,
  Terminal,
  ArrowUpRight,
  Activity,
} from 'lucide-react';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';
import { UpworkIcon } from '@/components/icons/UpworkIcon';
import { ApifyIcon } from '@/components/icons/ApifyIcon';

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = 'byseitz.agency@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const telemetryModules = [
    {
      code: 'SYS-01 // WEB & SAAS',
      title: 'Full-Stack Web & Spatial Systems',
      stack: 'Next.js 16 • TypeScript • Supabase • PostGIS',
      metric: '< 100ms Edge SSR',
      href: '#capabilities',
      accent: 'text-sky-400',
      border: 'border-sky-500/25',
      bg: 'bg-sky-500/[0.06]',
      icon: Layers,
    },
    {
      code: 'SYS-02 // ANDROID & PLAY CONSOLE',
      title: 'Android Engineering & 15-Tester Lab',
      stack: '10 Apps Built • 73+ Verified Tester Pool • 14-Day SLA',
      metric: '100% Store Pass Rate',
      href: '/testers',
      accent: 'text-emerald-400',
      border: 'border-emerald-500/25',
      bg: 'bg-emerald-500/[0.06]',
      icon: GooglePlayIcon,
    },
    {
      code: 'SYS-03 // DATA PIPELINES',
      title: 'Headless Web Scraping & Apify Actors',
      stack: 'Playwright • Crawlee • Anti-Bot Proxy Clusters',
      metric: '37 Production Actors',
      href: '#case-studies',
      accent: 'text-violet-400',
      border: 'border-violet-500/25',
      bg: 'bg-violet-500/[0.06]',
      icon: ApifyIcon,
    },
  ];

  const statsStrip = [
    {
      value: '10+',
      label: 'Ecosystem Apps & Games',
      sub: '4 Active Beta Cohorts • 6 Pipeline',
      color: 'text-sky-600',
    },
    {
      value: '37',
      label: 'Published Apify Actors',
      sub: '99.8% Automated Extraction SLA',
      color: 'text-violet-600',
    },
    {
      value: '73+',
      label: 'Verified Android Testers',
      sub: 'Real Physical Hardware Pool',
      color: 'text-emerald-600',
    },
    {
      value: '100%',
      label: 'Escrow & IP Protection',
      sub: 'Upwork • Fiverr Pro • Direct EFT/Wire',
      color: 'text-amber-600',
    },
  ];

  return (
    <section className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient studio lighting */}
      <div className="absolute -top-16 left-1/4 w-[38rem] h-[24rem] bg-sky-500/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-24 right-10 w-[30rem] h-[22rem] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="studio-panel rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Top System Status & Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-5 border-b border-slate-200">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span>STATUS: AVAILABLE FOR ARCHITECTURE SPRINTS &amp; ENTERPRISE CONTRACTS</span>
          </div>

          <div className="inline-flex items-center gap-2.5 text-xs text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 font-mono">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span className="text-slate-900 font-medium">Durban, ZA 🇿🇦</span>
            <span className="text-slate-300">|</span>
            <span>UTC+2 (SAST)</span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-sky-700 font-medium hidden sm:inline">Global Remote</span>
          </div>
        </div>

        {/* Main Studio Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 Cols): Value Proposition, Display Headline & Principal Architect Badge */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-sky-200 bg-sky-50 text-sky-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <Terminal className="w-3.5 h-3.5 text-sky-600" />
              <span>Principal Systems Architecture &amp; Google Play Verification Lab</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-950 leading-[1.07]">
              Production-Grade Web &amp; Mobile Engineering.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-emerald-600 to-sky-700">
                From Concept to Production.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              I architect and ship high-performance Next.js platforms, store-compliant Android applications, and resilient Apify data extraction clusters. Engineered with zero technical debt for founders, studios, and global enterprises.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-emerald-600 hover:from-sky-400 hover:to-emerald-500 text-white font-display font-bold text-sm tracking-wide transition shadow-lg shadow-sky-500/20 hover:scale-[1.01] flex items-center gap-2"
              >
                <span>Schedule Architecture Call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <Link
                href="/testers"
                className="px-5 py-3.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 font-display font-semibold text-sm transition flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>Enter Testing Lab (/testers)</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-600/70" />
              </Link>

              <a
                href="#pricing"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm transition border border-slate-200 shadow-2xs flex items-center gap-1.5"
              >
                <span>View Service Tiers</span>
              </a>
            </div>

            {/* Compact Principal Architect Identity Strip */}
            <div className="pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-sky-400/40 shrink-0 shadow-md">
                    <Image
                      src="/images/profile.png"
                      alt="Muhammed Faiz Seitz"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-sm text-slate-900">
                        Muhammed Faiz Seitz
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-700 font-semibold">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        Verified Architect
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Senior Application Architect • Upwork & Fiverr Pro Verified
                    </p>
                  </div>
                </div>

                {/* Direct Email Quick Copy */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs text-slate-300 hover:text-white transition group cursor-pointer shrink-0"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span className="font-mono">{email}</span>
                  {copied ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): Interactive Architecture & Telemetry Console */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#070a12]/90 border border-white/10 p-5 sm:p-6 shadow-2xl relative overflow-hidden bg-dot-matrix">
              {/* Console Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    seitz.co.za // system-architecture
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Activity className="w-3 h-3" />
                  LIVE
                </span>
              </div>

              {/* 3 Interactive Architecture Pillars */}
              <div className="space-y-3">
                {telemetryModules.map((mod) => (
                  <Link
                    key={mod.code}
                    href={mod.href}
                    className={`block p-4 rounded-xl border ${mod.border} ${mod.bg} hover:bg-white/[0.07] transition-all group`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                      <span className={`${mod.accent} font-semibold`}>{mod.code}</span>
                      <span className="px-2 py-0.5 rounded bg-black/50 text-slate-300 border border-white/10">
                        {mod.metric}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h2 className="font-display font-bold text-sm text-white group-hover:text-sky-300 transition">
                          {mod.title}
                        </h2>
                        <p className="text-[11px] font-mono text-slate-400 mt-0.5">{mod.stack}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* B2B Fast-Track Highlight Strip inside Console */}
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block">
                    Indie Dev B2B Service
                  </span>
                  <span className="text-slate-200 font-medium">
                    Need 12 Google Play testers for 14 days?
                  </span>
                </div>
                <Link
                  href="/services/google-play-testing"
                  className="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold shrink-0 transition"
                >
                  Fast-Track ($299) →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-slate-200">
          {statsStrip.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition shadow-2xs"
            >
              <div className={`font-display text-2xl sm:text-3xl font-bold ${stat.color} tracking-tight`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-1">{stat.label}</div>
              <div className="text-[11px] font-mono text-slate-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
