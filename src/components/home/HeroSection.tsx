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
  Sparkles,
  ArrowUpRight,
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

  const badges = [
    {
      label: 'Full-Stack Web & Mobile',
      icon: Layers,
      color: 'text-sky-400',
      border: 'border-sky-500/20',
      bg: 'bg-sky-500/10',
    },
    {
      label: 'Google Play Verified Developer',
      icon: GooglePlayIcon,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/10',
    },
    {
      label: 'Top Rated Automation & 37 Actors',
      icon: ApifyIcon,
      color: 'text-violet-400',
      border: 'border-violet-500/20',
      bg: 'bg-violet-500/10',
    },
    {
      label: 'Zero Fluff, Strict Milestones',
      icon: ShieldCheck,
      color: 'text-amber-400',
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/10',
    },
  ];

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-violet-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Availability & Location Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for Senior Architecture Contracts & Enterprise Sprints
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-white/50 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Durban, South Africa 🇿🇦</span>
            <span className="text-white/20">•</span>
            <span className="text-white/70 font-mono">SAST (UTC+2)</span>
          </div>
        </div>

        {/* Main Grid: Avatar & Core Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Avatar Profile Column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Animated radiant border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500 via-emerald-500 to-violet-600 opacity-75 blur group-hover:opacity-100 transition duration-500" />

              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-[#090a0f] border border-white/20 shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Muhammed Faiz Seitz"
                  fill
                  priority
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 192px, 224px"
                />
              </div>

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#090a0f]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white/80 shadow-lg whitespace-nowrap flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Muhammed Faiz Seitz</span>
              </div>
            </div>

            {/* Quick Email Copy Button */}
            <div className="mt-8 flex flex-col items-center gap-2">
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
              {copied && (
                <span className="text-[10px] text-emerald-400 font-mono animate-fade-in">
                  Email copied to clipboard!
                </span>
              )}
            </div>
          </div>

          {/* Copy & Value Proposition Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Engineer & Application Architect</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Production-Grade Web & Mobile Engineering.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400">
                From Concept to Production.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              I architect and build high-performance full-stack web applications, native Android solutions, and scalable API automation systems. Delivering reliable, low-maintenance digital products for global businesses, founders, and enterprises.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-emerald-400 to-sky-400 text-black font-bold text-sm tracking-wide transition shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Schedule Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#case-studies"
                className="px-6 py-3.5 rounded-xl glass-card hover:bg-white/10 text-white font-medium text-sm transition border border-white/10 flex items-center gap-2"
              >
                <span>Explore Live Solutions</span>
                <ArrowUpRight className="w-4 h-4 text-white/50" />
              </a>

              <Link
                href="/testers"
                className="px-5 py-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold text-sm transition flex items-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Testing Lab (/testers)</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Supporting Stat Badges Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-white/5">
          {badges.map((b) => (
            <div
              key={b.label}
              className={`p-4 rounded-xl border ${b.border} ${b.bg} flex items-center gap-3 transition-transform hover:-translate-y-0.5`}
            >
              <b.icon className={`w-5 h-5 ${b.color} shrink-0`} />
              <span className="text-xs sm:text-sm font-semibold text-white/90 leading-snug">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
