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
  ExternalLink,
} from 'lucide-react';
import { submitInquiry, InquiryFormData } from '@/app/actions/inquiry';
import { UpworkIcon } from '@/components/icons/UpworkIcon';
import { FiverrIcon } from '@/components/icons/FiverrIcon';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';
import { PROFESSIONAL_LINKS } from '@/data/social-links';

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
      <div className="studio-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 bg-white shadow-xs relative overflow-hidden">
        {/* Glow behind form */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Left Column: Direct Info & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <Terminal className="w-3.5 h-3.5 text-sky-600" />
              <span>Project Intake &amp; Advisory</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
              Ready to Architect Something Exceptional?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Share your product goals, timeline, and architectural requirements. Whether you need a turnkey SaaS platform, an Android release clearing Google’s 12-tester review, or resilient Apify extractors, you will receive a technical scoping reply within 24 hours.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block">
                    Direct Studio Desk
                  </span>
                  <a
                    href="mailto:byseitz.agency@gmail.com"
                    className="text-slate-950 font-mono hover:text-sky-600 underline underline-offset-4 transition font-medium"
                  >
                    byseitz.agency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block">
                    Operations Base
                  </span>
                  <span>Durban, KwaZulu-Natal, South Africa 🇿🇦 (UTC+2)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block">
                    IP &amp; Confidentiality
                  </span>
                  <span>100% IP assignment upon completion &amp; strict NDA</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-display font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Escrow &amp; Contract Protection
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  <Clock className="w-3 h-3 inline mr-1" />
                  &lt; 24h SLA
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prefer milestone escrow? Contracts can be executed directly via Upwork or Fiverr Pro, or billed via direct invoice (ZAR EFT / USD Wire).
              </p>
              <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-2">
                <a
                  href={PROFESSIONAL_LINKS.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#14a800] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <UpworkIcon className="w-3.5 h-3.5" />
                  <span>Hire on Upwork</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={PROFESSIONAL_LINKS.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#1dbf73] bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors"
                >
                  <FiverrIcon className="w-3.5 h-3.5" />
                  <span>Order on Fiverr</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={PROFESSIONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#0a66c2] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="studio-card rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 space-y-5 shadow-xs"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-bold">
                  // Technical Scoping Dossier
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Fields marked * required
                </span>
              </div>

              {status && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-start gap-3 ${
                    status.success
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border border-rose-200 text-rose-900'
                  }`}
                >
                  {status.success ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 font-semibold block">
                    Full Name <span className="text-sky-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition shadow-2xs"
                  />
                </div>

                {/* Business Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 font-semibold block">
                    Business Email <span className="text-sky-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Platform */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 font-semibold block">
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition shadow-2xs"
                  >
                    <option value="direct" className="bg-white text-slate-900">
                      Direct Contract (Bank EFT / Wire / PayPal)
                    </option>
                    <option value="upwork" className="bg-white text-slate-900">
                      Upwork Milestone Escrow
                    </option>
                    <option value="fiverr" className="bg-white text-slate-900">
                      Fiverr Pro / Marketplace
                    </option>
                    <option value="other" className="bg-white text-slate-900">
                      Other / Advisory Call First
                    </option>
                  </select>
                </div>

                {/* Project Scope */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 font-semibold block">
                    Project Scope <span className="text-sky-600">*</span>
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition shadow-2xs"
                  >
                    <option value="Full-Stack Web Application" className="bg-white text-slate-900">
                      Tier 2: Full-Stack Web Platform / SaaS
                    </option>
                    <option value="Android Mobile App Development" className="bg-white text-slate-900">
                      Tier 3: Android App Development &amp; Launch
                    </option>
                    <option value="Apify Actor / Web Scraping" className="bg-white text-slate-900">
                      Tier 1: Web Scraping &amp; Apify Actors
                    </option>
                    <option value="Custom Enterprise Architecture" className="bg-white text-slate-900">
                      Tier 4: Custom Enterprise Architecture
                    </option>
                    <option value="Google Play Closed Testing Fast-Track" className="bg-white text-slate-900">
                      Add-On: Google Play Closed Testing ($299 / R5,500)
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 font-semibold block">
                    Target Budget Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $2,500 (R45,000)"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-mono focus:bg-white focus:outline-none focus:border-sky-500 transition shadow-2xs"
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 font-semibold block">Target Timeline</label>
                  <input
                    type="text"
                    placeholder="e.g. 3 to 4 Weeks"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-mono focus:bg-white focus:outline-none focus:border-sky-500 transition shadow-2xs"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 font-semibold block">
                  Project Details &amp; Core Requirements <span className="text-sky-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline the core objective, desired features, external APIs, and any target launch dates..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition resize-none shadow-2xs"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-emerald-600 hover:from-sky-400 hover:to-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition shadow-md shadow-sky-500/20 hover:scale-[1.01] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
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
