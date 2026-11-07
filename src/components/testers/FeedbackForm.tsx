'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Star,
  Smartphone,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';
import { submitFeedback, FeedbackFormData } from '@/app/actions/feedback';

export function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackFormData>({
    googleEmail: '',
    deviceModel: '',
    androidVersion: 'Android 14',
    stabilityRating: 'Smooth with zero crashes or freezes',
    navigationRating: 5,
    bugGlitchesNotes: 'None',
    mostUsefulFeature: '',
    featureImprovementRequest: '',
    isCurrentlyInstalled: true,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const stabilityOptions = [
    'Smooth with zero crashes or freezes',
    'Minor stutter/lag on certain screens, but no crashes',
    'Froze or crashed at least once',
    'Unusable / Crashes on launch',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await submitFeedback(formData);
    setLoading(false);
    setStatus(res);

    if (res.success) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#10b981', '#38bdf8', '#8b5cf6', '#f59e0b'],
      });

      // Reset form
      setFormData({
        googleEmail: '',
        deviceModel: '',
        androidVersion: 'Android 14',
        stabilityRating: 'Smooth with zero crashes or freezes',
        navigationRating: 5,
        bugGlitchesNotes: 'None',
        mostUsefulFeature: '',
        featureImprovementRequest: '',
        isCurrentlyInstalled: true,
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6">
        <Link
          href="/testers"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Testing Lab</span>
        </Link>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>14-Day Cohort Check-In</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
            3-Minute Beta Check-In
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Thank you for testing through Google Play. This check-in verifies your device performance and logs your participation to unlock your lifetime promo code reward.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {status && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 ${
                status.success
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              {status.success ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
              )}
              <div className="space-y-1">
                <span className="font-semibold block">
                  {status.success ? 'Feedback Recorded & Locked In!' : 'Notice'}
                </span>
                <span className="leading-relaxed block">{status.message}</span>
              </div>
            </div>
          )}

          {/* Section 1: Tester & Device Verification */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold border-b border-slate-200 pb-2">
              Section 1: Tester & Device Verification
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 block">
                  Google Account Email <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="your-email@gmail.com"
                  value={formData.googleEmail}
                  onChange={(e) => setFormData({ ...formData, googleEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                />
                <span className="text-[10px] text-slate-500 block">
                  Must match the email enrolled in Google Play closed testing.
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 block">
                  Device Details <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samsung Galaxy A54, Xiaomi Redmi 12"
                  value={formData.deviceModel}
                  onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 block">
                Android Version <span className="text-emerald-600">*</span>
              </label>
              <select
                value={formData.androidVersion}
                onChange={(e) => setFormData({ ...formData, androidVersion: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
              >
                <option value="Android 15" className="bg-white text-slate-900">
                  Android 15
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
                  Not sure
                </option>
              </select>
            </div>
          </div>

          {/* Section 2: Core Performance & Usability */}
          <div className="space-y-4 pt-4">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-700 font-bold border-b border-slate-200 pb-2">
              Section 2: Core Performance & Usability
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 block">
                Overall App Stability <span className="text-sky-600">*</span>
              </label>
              <div className="space-y-2">
                {stabilityOptions.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition ${
                      formData.stabilityRating === opt
                        ? 'border-sky-300 bg-sky-50/80 text-sky-950 font-medium'
                        : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="stability"
                      checked={formData.stabilityRating === opt}
                      onChange={() => setFormData({ ...formData, stabilityRating: opt })}
                      className="text-sky-600 focus:ring-0"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation scale 1 to 5 */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-700 block">
                  Visual Layout & Ease of Navigation (1 = Confusing, 5 = Clean & Intuitive)
                </label>
                <span className="text-xs font-mono text-emerald-700 font-bold">
                  {formData.navigationRating} / 5 Stars
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setFormData({ ...formData, navigationRating: val })}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
                      formData.navigationRating >= val
                        ? 'bg-emerald-100 border border-emerald-300 text-emerald-800'
                        : 'bg-white border border-slate-200 text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{val}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bug report */}
            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-mono text-slate-700 block">
                Did you encounter any specific bugs or visual glitches? <span className="text-sky-600">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="If you ran into a problem, what screen were you on and what happened? (Write 'None' if everything worked properly)."
                value={formData.bugGlitchesNotes}
                onChange={(e) => setFormData({ ...formData, bugGlitchesNotes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-sky-500 transition resize-none"
              />
            </div>
          </div>

          {/* Section 3: Feature Feedback & Value */}
          <div className="space-y-4 pt-4">
            <div className="text-xs font-mono uppercase tracking-wider text-violet-700 font-bold border-b border-slate-200 pb-2">
              Section 3: Feature Feedback & Verification
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 block">
                  Which feature or screen did you find most useful?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Offline sync, Quick dashboard"
                  value={formData.mostUsefulFeature}
                  onChange={(e) => setFormData({ ...formData, mostUsefulFeature: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-violet-500 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 block">
                  One thing you would change or improve:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Add dark theme toggle, faster load"
                  value={formData.featureImprovementRequest}
                  onChange={(e) =>
                    setFormData({ ...formData, featureImprovementRequest: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-violet-500 transition"
                />
              </div>
            </div>

            {/* Installation confirmation check */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-mono text-slate-700 block">
                Installation Status Check <span className="text-violet-600">*</span>
              </label>
              <div className="space-y-2">
                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition ${
                    formData.isCurrentlyInstalled
                      ? 'border-emerald-300 bg-emerald-50/80 text-emerald-950 font-medium'
                      : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="installed"
                    checked={formData.isCurrentlyInstalled === true}
                    onChange={() => setFormData({ ...formData, isCurrentlyInstalled: true })}
                    className="text-emerald-600 focus:ring-0"
                  />
                  <span>Yes, the app is currently installed and active on my device.</span>
                </label>

                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition ${
                    !formData.isCurrentlyInstalled
                      ? 'border-rose-300 bg-rose-50/80 text-rose-950 font-medium'
                      : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="installed"
                    checked={formData.isCurrentlyInstalled === false}
                    onChange={() => setFormData({ ...formData, isCurrentlyInstalled: false })}
                    className="text-rose-600 focus:ring-0"
                  />
                  <span>No, I uninstalled it (please let us know why in comments above).</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-emerald-600/20 hover:shadow-lg hover:scale-[1.01] disabled:opacity-50 flex items-center justify-center gap-2 mt-6 cursor-pointer"
          >
            {loading ? (
              <span>Saving Check-In...</span>
            ) : (
              <>
                <span>Submit Feedback & Lock In Promo Code</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
