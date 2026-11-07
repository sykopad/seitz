'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, ShieldCheck, Copy, Check, Smartphone, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'byseitz.agency@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#05070b]/95 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-500 p-[1px]">
                <div className="w-full h-full bg-[#05070b] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-sky-400">
                  S//
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                SEITZ
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono">
                <ShieldCheck className="w-3 h-3" />
                Verified Systems Studio
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Principal Application Architect & Full-Stack Systems Studio. Engineering scalable Next.js platforms, store-ready Android solutions, and automated Apify data pipelines in Durban, South Africa.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Durban, KwaZulu-Natal, South Africa 🇿🇦 • UTC+2</span>
            </div>

            {/* Direct Email quick copy */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs text-slate-300 hover:text-white transition group cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-mono">{email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition" />
                )}
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
              Studio & Services
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/#capabilities" className="hover:text-sky-400 transition">
                  Capabilities & Services
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-sky-400 transition">
                  Solutions & Architecture
                </Link>
              </li>
              <li>
                <Link href="/#platforms" className="hover:text-sky-400 transition">
                  Verified Platform Profiles
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-sky-400 transition">
                  Selected Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-sky-400 transition">
                  Service Packages & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/google-play-testing"
                  className="text-amber-300 hover:text-amber-200 font-mono transition"
                >
                  12-Tester Fast-Track ($299) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Beta */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
              Testing Lab & Ecosystem
            </span>

            <div className="p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/25 space-y-2">
              <Link
                href="/testers"
                className="text-xs font-display font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  The Seitz Testing Lab
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  /testers
                </span>
              </Link>
              <p className="text-[11px] text-slate-300/80 leading-relaxed">
                Test upcoming Android utilities and indie games across 14-day cohorts to unlock free lifetime promo codes.
              </p>
              <div className="pt-1 flex flex-wrap gap-2 text-[10px] font-mono">
                <Link href="/testers/vote" className="text-amber-300 hover:underline">
                  Community Vote
                </Link>
                <span className="text-white/20">•</span>
                <Link href="/testers/leaderboard" className="text-sky-300 hover:underline">
                  Claim Promo Code
                </Link>
                <span className="text-white/20">•</span>
                <Link href="/testers/feedback" className="text-emerald-300 hover:underline">
                  3-Min Check-In
                </Link>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/muhammed-faiz-seitz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.07] text-slate-300 hover:text-white text-xs font-mono transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/seitzmf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.07] text-slate-300 hover:text-white text-xs font-mono transition"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.07] text-slate-300 hover:text-white text-xs font-mono transition"
              >
                <span className="text-xs">📱</span>
                <span>TikTok &quot;I Tell You Stuff&quot;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} Seitz.co.za. Engineered with Next.js 16 & Supabase.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/services/google-play-testing"
              className="text-emerald-400 hover:text-emerald-300 transition"
            >
              12-Tester Fast-Track Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/anti-incentive" className="hover:text-white transition">
              Anti-Incentive Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
