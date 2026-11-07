'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowLeft, Smartphone, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

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
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#05070b]/85 backdrop-blur-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity + Dual-Portal Mode Switcher */}
          <div className="flex items-center gap-4">
            <Link href="/testers" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#05070b] rounded-[11px] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight flex items-center gap-2">
                  SEITZ
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono uppercase tracking-wider">
                    Testing Lab
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                  Google Play 14-Day Compliance Engine
                </span>
              </div>
            </Link>

            {/* Dual-Audience Mode Switcher (Desktop) */}
            <div className="hidden xl:flex items-center p-1 rounded-xl bg-white/[0.03] border border-white/[0.07]">
              <Link
                href="/"
                className="px-3 py-1 rounded-lg text-slate-400 hover:text-sky-300 text-[11px] font-mono transition flex items-center gap-1.5"
              >
                <Layers className="w-3 h-3 text-sky-400" />
                <span>Studio Portfolio</span>
              </Link>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-semibold flex items-center gap-1.5">
                <Smartphone className="w-3 h-3 text-emerald-400" />
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
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/services/google-play-testing"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 transition"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Hire 15 Testers ($299)</span>
            </Link>

            <a
              href="/testers#apply"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 hover:from-emerald-300 hover:to-sky-300 text-slate-950 font-display font-bold text-xs tracking-wide uppercase transition shadow-lg shadow-emerald-500/20 flex items-center gap-1.5"
            >
              <span>Join the Cohort</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="/testers#apply"
              className="px-3 py-1.5 rounded-lg bg-emerald-400 text-slate-950 font-display font-bold text-xs"
            >
              Enroll
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#05070b]/98 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-mono text-sky-300 bg-sky-500/10 border border-sky-500/20 flex items-center gap-2 mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Systems Studio (seitz.co.za)
            </Link>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/services/google-play-testing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Hire 15 Testers for Your App
              </span>
              <span className="text-[10px] font-mono bg-amber-500/20 px-2 py-0.5 rounded">
                $299
              </span>
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href="/testers#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-950 font-display font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <span>Apply for Next Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
