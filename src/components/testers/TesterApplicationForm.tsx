'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Send, Sparkles, Smartphone } from 'lucide-react';
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
        colors: ['#10b981', '#38bdf8', '#8b5cf6', '#f59e0b'],
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
      <div className="studio-panel rounded-3xl p-6 sm:p-12 border border-emerald-500/35 shadow-2xl relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Device Registration & Cohort Enrollment</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Apply for the Next Testing Cohort
          </h2>
          <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed">
            Enter your Android device specifications below. Your Google email is required to authorize your account on our Google Play Console closed testing tracks.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {status && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 ${
                status.success
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
              }`}
            >
              {status.success ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
              )}
              <div className="space-y-1">
                <span className="font-display font-bold block text-white">
                  {status.success ? 'Device Registered Successfully!' : 'Application Notice'}
                </span>
                <span className="leading-relaxed block">{status.message}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 block">
                Full Name / Preferred Alias <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Johnson"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition"
              />
            </div>

            {/* Google Play Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 block">
                Google Play Account Email <span className="text-emerald-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="your-email@gmail.com"
                value={formData.googleEmail}
                onChange={(e) => setFormData({ ...formData, googleEmail: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition"
              />
              <span className="text-[11px] text-slate-400 block leading-tight">
                Must match the account logged into Google Play on your Android phone.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Primary Android Device Model */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 block">
                Primary Android Device Model <span className="text-emerald-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Samsung Galaxy S23, Xiaomi Redmi 12, Pixel 7"
                value={formData.deviceModel}
                onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition"
              />
              <span className="text-[11px] text-slate-400 block leading-tight">
                Helps us balance screen sizes and hardware specs across the 15-tester cohort.
              </span>
            </div>

            {/* Android OS Version */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 block">
                Android OS Version <span className="text-emerald-400">*</span>
              </label>
              <select
                value={formData.androidVersion}
                onChange={(e) => setFormData({ ...formData, androidVersion: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition"
              >
                <option value="Android 15" className="bg-[#05070b]">
                  Android 15 (Latest)
                </option>
                <option value="Android 14" className="bg-[#05070b]">
                  Android 14
                </option>
                <option value="Android 13" className="bg-[#05070b]">
                  Android 13
                </option>
                <option value="Android 12 or earlier" className="bg-[#05070b]">
                  Android 12 or earlier
                </option>
                <option value="Not sure" className="bg-[#05070b]">
                  Not sure (Standard Android)
                </option>
              </select>
            </div>
          </div>

          {/* Interested Categories */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-slate-300 block">
                App Categories You Are Most Interested In Testing:
              </label>
              <button
                type="button"
                onClick={handleSelectAllCategories}
                className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
              >
                {formData.interestedCategories.length === availableCategories.length
                  ? 'Deselect All'
                  : 'Select All'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableCategories.map((cat) => {
                const checked = formData.interestedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryToggle(cat)}
                    className={`px-3.5 py-2.5 rounded-xl border text-left text-xs transition flex items-center justify-between cursor-pointer ${
                      checked
                        ? 'border-emerald-500/45 bg-emerald-500/15 text-white font-medium'
                        : 'border-white/10 bg-black/40 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                        checked
                          ? 'bg-emerald-400 border-emerald-300 text-slate-950 font-bold'
                          : 'border-white/20'
                      }`}
                    >
                      {checked && '✓'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Commitment Agreement */}
          <div className="pt-2">
            <label className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-black/40 hover:bg-white/[0.03] transition cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.commitmentAccepted}
                onChange={(e) =>
                  setFormData({ ...formData, commitmentAccepted: e.target.checked })
                }
                className="mt-1 w-4 h-4 rounded border-white/20 bg-black/60 text-emerald-400 focus:ring-emerald-400 focus:ring-offset-0"
              />
              <span className="text-xs text-slate-300 leading-relaxed">
                <strong className="font-display text-white block mb-0.5">
                  14-Day Continuous Retention Commitment:
                </strong>
                I agree to keep assigned test apps installed on my device for at least 14 continuous days and open them periodically to test core features. I understand this qualifies me for permanent lifetime promo codes upon public launch.
              </span>
            </label>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition shadow-xl shadow-emerald-500/25 hover:scale-[1.01] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <span>Enrolling Device in Testing Lab...</span>
            ) : (
              <>
                <Smartphone className="w-4 h-4" />
                <span>Submit Tester Application & Reserve Slot</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
