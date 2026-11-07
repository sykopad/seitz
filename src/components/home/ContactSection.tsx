'use client';

import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  MapPin,
  Clock,
  Terminal,
} from 'lucide-react';
import { submitInquiry, InquiryFormData } from '@/app/actions/inquiry';

export function ContactSection() {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    businessEmail: '',
    preferredPlatform: 'direct',
    projectScope: 'Full-Stack Web Application',
    budgetRange: '$1,800 - $3,500 (R32,000 - R60,000)',
    timeline: '2 to 4 Weeks',
    projectDetails: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await submitInquiry(formData);
    setLoading(false);
    setStatus(res);

    if (res.success) {
      setFormData({
        fullName: '',
        businessEmail: '',
        preferredPlatform: 'direct',
        projectScope: 'Full-Stack Web Application',
        budgetRange: '',
        timeline: '',
        projectDetails: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="studio-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Glow behind form */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Left Column: Direct Info & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-300 text-xs font-mono uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>Project Intake & Advisory</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Ready to Architect Something Exceptional?
            </h2>

            <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed">
              Share your product goals, timeline, and architectural requirements. Whether you need a turnkey SaaS platform, an Android release clearing Google’s 12-tester review, or resilient Apify extractors, you will receive a technical scoping reply within 24 hours.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Direct Studio Desk
                  </span>
                  <a
                    href="mailto:byseitz.agency@gmail.com"
                    className="text-white font-mono hover:text-sky-400 underline underline-offset-4 transition"
                  >
                    byseitz.agency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Operations Base
                  </span>
                  <span>Durban, KwaZulu-Natal, South Africa 🇿🇦 (UTC+2)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    IP & Confidentiality
                  </span>
                  <span>100% IP assignment upon completion & strict NDA</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] space-y-2 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-display font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Escrow & Contract Protection
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Clock className="w-3 h-3 inline mr-1" />
                  &lt; 24h SLA
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prefer milestone escrow? Contracts can be executed directly via Upwork or Fiverr Pro, or billed via direct invoice (ZAR EFT / USD Wire).
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="studio-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.07]">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  // Technical Scoping Dossier
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Fields marked * required
                </span>
              </div>

              {status && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-start gap-3 ${
                    status.success
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                  }`}
                >
                  {status.success ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Full Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition"
                  />
                </div>

                {/* Business Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Business Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Platform */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Preferred Contract Route
                  </label>
                  <select
                    value={formData.preferredPlatform}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredPlatform: e.target.value as InquiryFormData['preferredPlatform'],
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition"
                  >
                    <option value="direct" className="bg-[#05070b]">
                      Direct Contract (Bank EFT / Wire / PayPal)
                    </option>
                    <option value="upwork" className="bg-[#05070b]">
                      Upwork Milestone Escrow
                    </option>
                    <option value="fiverr" className="bg-[#05070b]">
                      Fiverr Pro / Marketplace
                    </option>
                    <option value="other" className="bg-[#05070b]">
                      Other / Advisory Call First
                    </option>
                  </select>
                </div>

                {/* Project Scope */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Project Scope <span className="text-sky-400">*</span>
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition"
                  >
                    <option value="Full-Stack Web Application" className="bg-[#05070b]">
                      Tier 2: Full-Stack Web Platform / SaaS
                    </option>
                    <option value="Android Mobile App Development" className="bg-[#05070b]">
                      Tier 3: Android App Development & Launch
                    </option>
                    <option value="Apify Actor / Web Scraping" className="bg-[#05070b]">
                      Tier 1: Web Scraping & Apify Actors
                    </option>
                    <option value="Custom Enterprise Architecture" className="bg-[#05070b]">
                      Tier 4: Custom Enterprise Architecture
                    </option>
                    <option value="Google Play Closed Testing Fast-Track" className="bg-[#05070b]">
                      Add-On: Google Play Closed Testing ($299 / R5,500)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Target Budget Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $2,500 (R45,000)"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-400 transition"
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">Target Timeline</label>
                  <input
                    type="text"
                    placeholder="e.g. 3 to 4 Weeks"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-400 transition"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">
                  Project Details & Core Requirements <span className="text-sky-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline the core objective, desired features, external APIs, and any target launch dates..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition shadow-xl shadow-sky-500/20 hover:scale-[1.01] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span>Transmitting Scoping Dossier...</span>
                ) : (
                  <>
                    <span>Submit Project Scoping Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
