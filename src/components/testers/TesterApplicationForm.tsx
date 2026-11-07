'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Send, Sparkles, Smartphone, ExternalLink } from 'lucide-react';
import { registerTester, TesterRegistrationData } from '@/app/actions/tester';

export function TesterApplicationForm() {
  const [formData, setFormData] = useState<TesterRegistrationData>({
    fullName: '',
    googleEmail: '',
    deviceModel: '',
    androidVersion: 'Android 14',
    interestedCategories: ['Productivity & Daily Utilities', 'Civic & Community Mapping'],
    commitmentAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const availableCategories = [
    'Productivity & Daily Utilities',
    'Developer Tools & System Automation',
    'Civic & Community Mapping',
    'Games & Trivia',
  ];

  const handleCategoryToggle = (category: string) => {
    if (formData.interestedCategories.includes(category)) {
      setFormData({
        ...formData,
        interestedCategories: formData.interestedCategories.filter((c) => c !== category),
      });
    } else {
      setFormData({
        ...formData,
        interestedCategories: [...formData.interestedCategories, category],
      });
    }
  };

  const handleSelectAllCategories = () => {
    if (formData.interestedCategories.length === availableCategories.length) {
      setFormData({ ...formData, interestedCategories: [] });
    } else {
      setFormData({ ...formData, interestedCategories: [...availableCategories] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await registerTester(formData);
    setLoading(false);
    setStatus(res);

    if (res.success) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#059669', '#0284c7', '#7c3aed', '#d97706'],
      });

      setFormData({
        fullName: '',
        googleEmail: '',
        deviceModel: '',
        androidVersion: 'Android 14',
        interestedCategories: ['Productivity & Daily Utilities'],
        commitmentAccepted: false,
      });
    }
  };

  return (
    <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="studio-panel rounded-3xl p-6 sm:p-12 border border-emerald-300 bg-white shadow-xs relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Device Registration &amp; Cohort Enrollment</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-3">
            Apply for the Next Testing Cohort
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Enter your Android device specifications below. Your Google email is required to authorize your account on our Google Play Console closed testing tracks.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {status && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 ${
                status.success
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border border-rose-200 text-rose-900'
              }`}
            >
              {status.success ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
              )}
              <div className="space-y-1">
                <span className="font-display font-bold block text-slate-900">
                  {status.success ? 'Device Registered & Google Group Pre-Authorized!' : 'Application Notice'}
                </span>
                <span className="leading-relaxed block">{status.message}</span>
                {status.success && (
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <a
                      href="https://groups.google.com/g/seitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-xs transition"
                    >
                      <span>Confirm Google Group Join (1-Click)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <Link
                      href="/account"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50 font-medium text-xs transition"
                    >
                      <span>View All-Access Pass (/account) →</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 font-semibold block">
                Full Name / Preferred Alias <span className="text-emerald-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Johnson"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition shadow-2xs"
              />
            </div>

            {/* Google Play Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 font-semibold block">
                Google Play Account Email <span className="text-emerald-600">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="your-email@gmail.com"
                value={formData.googleEmail}
                onChange={(e) => setFormData({ ...formData, googleEmail: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition shadow-2xs"
              />
              <span className="text-[11px] text-slate-500 block leading-tight font-mono">
                Must match the account logged into Google Play on your Android phone.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Primary Android Device Model */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 font-semibold block">
                Primary Android Device Model <span className="text-emerald-600">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Samsung Galaxy S23, Xiaomi Redmi 12, Pixel 7"
                value={formData.deviceModel}
                onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition shadow-2xs"
              />
              <span className="text-[11px] text-slate-500 block leading-tight font-mono">
                Helps us balance screen sizes and hardware specs across the 15-tester cohort.
              </span>
            </div>

            {/* Android OS Version */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 font-semibold block">
                Android OS Version <span className="text-emerald-600">*</span>
              </label>
              <select
                value={formData.androidVersion}
                onChange={(e) => setFormData({ ...formData, androidVersion: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-600 transition shadow-2xs"
              >
                <option value="Android 15" className="bg-white text-slate-900">
                  Android 15 (Latest)
                </option>
                <option value="Android 14" className="bg-white text-slate-900">
                  Android 14
                </option>
                <option value="Android 13" className="bg-white text-slate-900">
                  Android 13
                </option>
                <option value="Android 12 or earlier" className="bg-white text-slate-900">
                  Android 12 or earlier
                </option>
                <option value="Not sure" className="bg-white text-slate-900">
                  Not sure (Standard Android)
                </option>
              </select>
            </div>
          </div>

          {/* Interested Categories */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-slate-700 font-semibold block">
                App Categories You Are Most Interested In Testing:
              </label>
              <button
                type="button"
                onClick={handleSelectAllCategories}
                className="text-[11px] font-mono text-emerald-700 hover:text-emerald-900 underline cursor-pointer font-medium"
              >
                {formData.interestedCategories.length === availableCategories.length
                  ? 'Deselect All'
                  : 'Select All'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableCategories.map((category) => {
                const isSelected = formData.interestedCategories.includes(category);
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryToggle(category)}
                    className={`p-3 rounded-xl text-xs font-mono text-left flex items-center justify-between transition border cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold shadow-2xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-emerald-600 text-white' : 'border border-slate-300'
                      }`}
                    >
                      {isSelected ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Commitment Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/70 transition">
              <input
                type="checkbox"
                required
                checked={formData.commitmentAccepted}
                onChange={(e) => setFormData({ ...formData, commitmentAccepted: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 bg-white"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I agree to keep assigned test apps installed on my device for at least 14 continuous days and open them periodically to test core features. I understand this qualifies me for permanent lifetime promo codes upon public launch.
              </span>
            </label>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-sky-600 to-emerald-500 hover:from-emerald-400 hover:to-sky-500 text-white font-display font-bold text-xs uppercase tracking-wider transition shadow-md shadow-emerald-500/20 hover:scale-[1.01] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <span>Registering Device Specs...</span>
            ) : (
              <>
                <Smartphone className="w-4 h-4" />
                <span>Submit 14-Day Tester Enrollment</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
