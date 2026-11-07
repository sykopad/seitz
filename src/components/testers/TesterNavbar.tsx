'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowLeft, Smartphone, Sparkles, ArrowRight } from 'lucide-react';

export function TesterNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'How It Works', href: '/testers#how-it-works' },
    { name: 'Active Cohorts', href: '/testers#cohorts' },
    { name: 'Community Vote', href: '/testers#vote' },
    { name: 'Leaderboard', href: '/testers/leaderboard' },
    { name: 'Check-In Form', href: '/testers/feedback' },
    { name: 'Play Console Guide', href: '/testers/compliance' },
    { name: 'FAQ', href: '/testers#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#090a0f]/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/70 hover:text-white transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Developer Portfolio</span>
            </Link>

            <Link href="/testers" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#090a0f] rounded-[11px] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-2">
                  Seitz
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                    Testing Lab
                  </span>
                </span>
                <span className="text-[11px] text-white/50 font-mono tracking-tight hidden sm:block">
                  Google Play Beta Tester Community
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#apply"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 hover:from-emerald-300 hover:to-sky-300 text-black font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-emerald-500/20 flex items-center gap-1.5"
            >
              <span>Join the Cohort</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#apply"
              className="px-3 py-1.5 rounded-lg bg-emerald-400 text-black font-bold text-xs"
            >
              Apply
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/5 border border-white/5 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#090a0f]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Developer Portfolio (Seitz.co.za)
            </Link>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/5">
            <a
              href="#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-sky-400 text-black font-semibold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <span>Apply for Next Cohort</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
