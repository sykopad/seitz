'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowLeft, Smartphone, ArrowRight, Layers, ShieldCheck } from 'lucide-react';

export function TesterNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'How It Works', href: '/testers#how-it-works' },
    { name: 'Active Cohorts', href: '/testers#cohorts' },
    { name: 'Community Vote', href: '/testers#vote' },
    { name: 'Leaderboard & Rewards', href: '/testers/leaderboard' },
    { name: '3-Min Check-In', href: '/testers/feedback' },
    { name: 'Play Console Kit', href: '/testers/compliance' },
    { name: 'FAQ', href: '/testers#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity + Dual-Portal Mode Switcher */}
          <div className="flex items-center gap-4">
            <Link href="/testers" className="flex items-center gap-3 group">
              <div className="relative h-10 flex items-center">
                <Image
                  src="/images/seitz-logo.png"
                  alt="Seitz"
                  width={112}
                  height={50}
                  priority
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-700 uppercase tracking-wider font-semibold">
                  <Smartphone className="w-3 h-3 text-emerald-600" />
                  Testing Lab
                </span>
                <span className="text-[11px] text-slate-500 font-mono tracking-tight">
                  Google Play 14-Day Compliance Engine
                </span>
              </div>
            </Link>

            {/* Dual-Audience Mode Switcher (Desktop) */}
            <div className="hidden xl:flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/90 shadow-2xs">
              <Link
                href="/"
                className="px-3 py-1 rounded-lg text-slate-600 hover:text-sky-700 text-[11px] font-mono transition flex items-center gap-1.5"
              >
                <Layers className="w-3 h-3 text-sky-600" />
                <span>Studio Portfolio</span>
              </Link>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-200/80 text-emerald-700 text-[11px] font-mono font-semibold flex items-center gap-1.5 shadow-xs">
                <Smartphone className="w-3 h-3 text-emerald-600" />
                <span>Testing Lab</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/services/google-play-testing"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-amber-800 bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/25 transition font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Hire 15 Testers ($299)</span>
            </Link>

            <a
              href="/testers#apply"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-display font-bold text-xs tracking-wide uppercase transition shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
            >
              <span>Join the Cohort</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="/testers#apply"
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white font-display font-bold text-xs shadow-xs"
            >
              Enroll
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-mono text-sky-800 bg-sky-500/10 border border-sky-500/20 flex items-center gap-2 mb-2 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Systems Studio (seitz.co.za)
            </Link>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/services/google-play-testing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-mono text-amber-800 bg-amber-500/10 border border-amber-500/20 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                12-Tester Fast-Track Service
              </span>
              <span className="text-[10px] uppercase font-mono bg-amber-500/20 px-2 py-0.5 rounded text-amber-900 font-bold">
                $299
              </span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="/testers#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 text-white font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition shadow-sm"
            >
              <span>Join 14-Day Testing Cohort</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
