'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, ShieldCheck, Copy, Check } from 'lucide-react';
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
    <footer className="mt-20 border-t border-white/10 bg-[#090a0f]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-xl text-white tracking-tight">Seitz</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                <ShieldCheck className="w-3 h-3" />
                Verified Architect
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              Application Architect & Full-Stack Engineer. Building scalable Next.js web applications, store-ready Android solutions, and automated Apify data pipelines in Durban, South Africa.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Durban, KwaZulu-Natal, South Africa 🇿🇦</span>
            </div>

            {/* Direct Email quick copy */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-white/70 hover:text-white transition group"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-mono">{email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition" />
                )}
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white/40 tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#capabilities" className="hover:text-sky-400 transition">
                  Capabilities & Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-sky-400 transition">
                  Solutions & Architecture
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-sky-400 transition">
                  Verified Platform Profiles
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-sky-400 transition">
                  Selected Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-sky-400 transition">
                  Service Packages & Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition">
                  Start a Project / Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Beta */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase text-white/40 tracking-wider block">
              Testing Lab & Channels
            </span>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
              <Link
                href="/testers"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center justify-between"
              >
                <span>The Seitz Testing Lab</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20">
                  /testers
                </span>
              </Link>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Test upcoming Android utilities and unlock lifetime free promo codes. Fulfilling Google Play closed testing cohorts.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/muhammed-faiz-seitz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-mono transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/seitzmf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-mono transition"
              >
                <GithubIcon className="w-3.5 h-3.5 text-white/70" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-mono transition"
              >
                <span className="text-xs">📱</span>
                <span>TikTok "I Tell You Stuff"</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
          <div>
            © {new Date().getFullYear()} Seitz.co.za. Built with Next.js & Supabase.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services/google-play-testing" className="text-emerald-400 hover:text-emerald-300 transition">
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
