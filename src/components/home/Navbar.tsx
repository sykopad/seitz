'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ArrowUpRight,
  Smartphone,
  Layers,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { UserAuthButton } from '@/components/auth/UserAuthButton';
import { NavDropdown, NavDropdownItem } from '@/components/navigation/NavDropdown';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutionItems: NavDropdownItem[] = [
    {
      name: 'Capabilities & Scope',
      href: '#capabilities',
      icon: Layers,
      description: 'Full-stack engineering, bespoke APIs & cloud infrastructure',
    },
    {
      name: 'Systems Architecture',
      href: '#solutions',
      icon: Cpu,
      description: 'Distributed services, real-time sockets & resilient pipelines',
    },
    {
      name: 'Platforms & Stacks',
      href: '#platforms',
      icon: Smartphone,
      description: 'Next.js App Router, native Android Kotlin & Apify web scrapers',
    },
    {
      name: '12-Tester Fast-Track',
      href: '/services/google-play-testing',
      icon: ShieldCheck,
      badge: '$299',
      badgeColor: 'amber',
      description: 'Google Play 14-day closed testing compliance turnkey package',
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
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
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-[10px] font-mono text-sky-700 uppercase tracking-wider font-semibold">
                Systems Studio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links (Clean Hierarchy) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavDropdown label="Solutions" items={solutionItems} />

            <a
              href="#case-studies"
              className="px-3.5 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition"
            >
              Case Studies
            </a>

            <a
              href="#pricing"
              className="px-3.5 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition"
            >
              Pricing
            </a>

            <Link
              href="/testers"
              className="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-700 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/15 transition"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Testing Lab</span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-200/80 text-emerald-900 text-[9px] font-bold">
                4 Live
              </span>
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <UserAuthButton compact={false} />

            <a
              href="#contact"
              className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-emerald-600 hover:from-sky-400 hover:to-emerald-500 text-white font-display font-bold text-xs tracking-wide uppercase transition shadow-md shadow-sky-500/20 flex items-center gap-1.5 shrink-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <UserAuthButton compact={true} />
            <Link
              href="/testers"
              className="px-2.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 text-xs font-mono flex items-center gap-1"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>/testers</span>
            </Link>
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
            <div className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Engineering Solutions
            </div>
            {solutionItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition flex items-center justify-between"
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-amber-100 text-amber-800">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100 px-4 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Explore Seitz
            </div>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition"
            >
              Case Studies
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition"
            >
              Pricing
            </a>

            <Link
              href="/testers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-mono text-emerald-800 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                The Seitz Testing Lab
              </span>
              <span className="text-[10px] uppercase font-mono bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-900 font-bold">
                4 Live Cohorts
              </span>
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
