'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Smartphone, Layers, ShieldCheck } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Architecture', href: '#solutions' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#05070b]/85 backdrop-blur-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity + Dual-Portal Mode Switcher */}
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-emerald-500 to-violet-500 p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#05070b] rounded-[11px] flex items-center justify-center">
                  <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                    S//
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white tracking-tight flex items-center gap-2">
                  SEITZ
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                    Systems Studio
                  </span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                  Web • Android • Apify Automation
                </span>
              </div>
            </Link>

            {/* Dual-Audience Mode Switcher (Desktop) */}
            <div className="hidden xl:flex items-center p-1 rounded-xl bg-white/[0.03] border border-white/[0.07]">
              <span className="px-3 py-1 rounded-lg bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[11px] font-mono font-semibold flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-sky-400" />
                Client Services
              </span>
              <Link
                href="/testers"
                className="px-3 py-1 rounded-lg text-slate-400 hover:text-emerald-300 text-[11px] font-mono transition flex items-center gap-1.5"
              >
                <Smartphone className="w-3 h-3 text-emerald-400" />
                <span>Testing Lab</span>
                <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold">
                  3 Live
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition"
              >
                {link.name}
              </a>
            ))}

            <Link
              href="/services/google-play-testing"
              className="ml-1 px-3 py-1.5 rounded-lg text-xs font-mono text-amber-300/90 hover:text-amber-200 bg-amber-500/[0.08] hover:bg-amber-500/15 border border-amber-500/20 transition flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>12-Tester Fast-Track</span>
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/testers"
              className="xl:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-emerald-400 border border-emerald-500/25 bg-emerald-500/10 hover:bg-emerald-500/20 transition"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>/testers</span>
            </Link>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 text-slate-950 font-display font-bold text-xs tracking-wide uppercase transition shadow-lg shadow-sky-500/20 flex items-center gap-1.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/testers"
              className="px-2.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono flex items-center gap-1"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>/testers</span>
            </Link>
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
            {navLinks.map((link) => (
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
                12-Tester Fast-Track Service
              </span>
              <span className="text-[10px] uppercase font-mono bg-amber-500/20 px-2 py-0.5 rounded">
                $299
              </span>
            </Link>
            <Link
              href="/testers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                The Seitz Testing Lab (/testers)
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider bg-emerald-500/20 px-2 py-0.5 rounded">
                Free VIP Perks
              </span>
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-emerald-400 text-slate-950 font-display font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
