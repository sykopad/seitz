'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles, Smartphone, Code2 } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Solutions & Architecture', href: '#solutions' },
    { name: 'Verified Platforms', href: '#platforms' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing Tiers', href: '#pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#090a0f]/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-emerald-500 to-violet-600 p-[1px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090a0f] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                  S
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-2">
                Seitz
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[11px] text-white/50 font-mono tracking-tight hidden sm:block">
                Application Architect & Full-Stack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition"
              >
                {link.name}
              </a>
            ))}

            {/* Testing Portal Pill Link */}
            <Link
              href="/testers"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20 transition group"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Testing Lab (/testers)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping group-hover:scale-125 transition" />
            </Link>
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 hover:from-sky-400 hover:to-emerald-300 text-black font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-sky-500/20 flex items-center gap-1.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/testers"
              className="p-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs flex items-center gap-1"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>/testers</span>
            </Link>
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/testers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Beta Testing Lab (/testers)
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider bg-emerald-500/20 px-2 py-0.5 rounded">
                Free Perks
              </span>
            </Link>
          </div>

          <div className="pt-4 border-t border-white/5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 text-black font-semibold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
