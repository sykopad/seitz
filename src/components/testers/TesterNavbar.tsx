'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ArrowLeft,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  Gift,
  Award,
  MessageSquare,
  Sparkles,
  Layers,
} from 'lucide-react';
import { UserAuthButton } from '@/components/auth/UserAuthButton';
import { NavDropdown, NavDropdownItem } from '@/components/navigation/NavDropdown';

export function TesterNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toolItems: NavDropdownItem[] = [
    {
      name: 'Leaderboard & Rewards',
      href: '/testers/leaderboard',
      icon: Award,
      badge: 'XP Rank',
      badgeColor: 'sky',
      description: 'Track verified tester points, rank level & gift cards',
    },
    {
      name: '3-Min Daily Check-In',
      href: '/testers/feedback',
      icon: MessageSquare,
      badge: 'Active',
      badgeColor: 'emerald',
      description: 'Log daily usage, report bugs & maintain your 14-day streak',
    },
    {
      name: 'Community App Vote',
      href: '/testers#vote',
      icon: Sparkles,
      description: 'Vote on upcoming indie apps entering closed testing',
    },
    {
      name: 'Play Console Kit',
      href: '/testers/compliance',
      icon: ShieldCheck,
      badge: '2026 Ready',
      badgeColor: 'amber',
      description: 'Google Play 14-day compliance documentation & checklist',
    },
    {
      name: 'Promo Vault & Badges',
      href: '/account',
      icon: Gift,
      description: 'Access unlocked 23-character Play Store codes & achievements',
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
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
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-700 uppercase tracking-wider font-semibold">
                <Smartphone className="w-3 h-3 text-emerald-600" />
                Testing Lab
              </span>
            </Link>

            <Link
              href="/"
              className="hidden 2xl:inline-flex items-center gap-1.5 ml-2 px-2.5 py-1 rounded-lg text-slate-500 hover:text-sky-700 text-xs font-mono transition"
            >
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Studio</span>
            </Link>
          </div>

          {/* Desktop Navigation Links (Clean 4-Item Hierarchy) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a
              href="/testers#cohorts"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Active Cohorts</span>
            </a>

            <a
              href="/testers#how-it-works"
              className="px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition"
            >
              How It Works
            </a>

            <NavDropdown label="Tester Tools" items={toolItems} />

            <a
              href="/testers#faq"
              className="px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-2.5">
            <UserAuthButton compact={false} />

            <Link
              href="/services/google-play-testing"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-amber-800 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 transition font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Fast-Track ($299)</span>
            </Link>

            <a
              href="/testers#apply"
              className="px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-display font-bold text-xs tracking-wide uppercase transition shadow-md shadow-emerald-500/20 flex items-center gap-1.5 shrink-0"
            >
              <span>Join Cohort</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <UserAuthButton compact={true} />
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

            <div className="px-4 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Testing Navigation
            </div>

            <a
              href="/testers#cohorts"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Active Cohorts (4 Live)</span>
            </a>

            <a
              href="/testers#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition"
            >
              How It Works
            </a>

            <div className="pt-2 border-t border-slate-100 px-4 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Tester Tools &amp; Portal
            </div>

            {toolItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition flex items-center justify-between"
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-slate-100 text-slate-700">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}

            <a
              href="/testers#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition"
            >
              FAQ
            </a>

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
              <span>Join Cohort</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
