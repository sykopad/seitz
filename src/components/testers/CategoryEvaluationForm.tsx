'use client';

import React, { useState, useMemo } from 'react';
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
  Activity,
  Flame,
  Award,
  DollarSign,
  Cpu,
  Layers,
} from 'lucide-react';
import Link from 'next/link';
import {
  AppCategory,
  CATEGORY_RUBRICS,
  calculateMarketViabilityScore,
} from '@/data/testing-metrics';
import { submitCategoryEvaluation, CategoryEvaluationData } from '@/app/actions/feedback';

interface AppPreset {
  name: string;
  category: AppCategory;
  packageName: string;
}

const FEATURED_APPS: AppPreset[] = [
  { name: 'FocusPulse Tracker', category: 'productivity', packageName: 'co.za.seitz.focuspulse' },
  { name: 'Ward 33: Clinical Protocol', category: 'health', packageName: 'co.za.seitz.ward33' },
  { name: 'HabitArcade: Quest Tracker', category: 'games', packageName: 'co.za.seitz.habitarcade' },
  { name: 'AudioVibe Spatial Soundscape', category: 'social', packageName: 'co.za.seitz.audiovibe' },
  { name: 'Client Cohort Testing App', category: 'productivity', packageName: 'com.client.customapp' },
];

export function CategoryEvaluationForm() {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('productivity');
  const [selectedApp, setSelectedApp] = useState<string>('FocusPulse Tracker');
  const [customAppName, setCustomAppName] = useState<string>('');
  const [customPackageName, setCustomPackageName] = useState<string>('');

  const [googleEmail, setGoogleEmail] = useState<string>('');
  const [deviceModel, setDeviceModel] = useState<string>('');
  const [androidVersion, setAndroidVersion] = useState<string>('Android 14');
  const [ramGigs, setRamGigs] = useState<string>('8 GB RAM');

  // Dynamic ratings initialized to 4 for all metrics in category
  const [coreRatings, setCoreRatings] = useState<Record<string, number>>({
    time_to_first_task: 4,
    offline_and_sync_resilience: 4,
    ui_clarity_and_ergonomics: 4,
    memory_and_background_efficiency: 4,
    error_prevention_and_recovery: 4,
  });

  const [quantitativeMetrics, setQuantitativeMetrics] = useState<Record<string, string>>({});
  const [qualitativeAnswers, setQualitativeAnswers] = useState<Record<string, string>>({});

  const [crashesObserved, setCrashesObserved] = useState<number>(0);
  const [anrObserved, setAnrObserved] = useState<number>(0);
  const [wouldRecommend, setWouldRecommend] = useState<boolean>(true);
  const [wouldPayOrKeep, setWouldPayOrKeep] = useState<boolean>(true);
  const [overallNotes, setOverallNotes] = useState<string>('');

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    success?: boolean;
    message?: string;
    viabilityScore?: number;
    viabilityTier?: string;
  } | null>(null);

  const rubric = CATEGORY_RUBRICS[selectedCategory];

  // Handle category switch
  const handleCategorySwitch = (cat: AppCategory) => {
    setSelectedCategory(cat);
    const newRubric = CATEGORY_RUBRICS[cat];
    const initialRatings: Record<string, number> = {};
    newRubric.coreMetrics.forEach((m) => {
      initialRatings[m.id] = coreRatings[m.id] || 4;
    });
    setCoreRatings(initialRatings);
  };

  // Handle app preset switch
  const handleAppSelect = (appName: string) => {
    setSelectedApp(appName);
    const preset = FEATURED_APPS.find((a) => a.name === appName);
    if (preset && preset.name !== 'Client Cohort Testing App') {
      handleCategorySwitch(preset.category);
    }
  };

  // Real-time Market Viability calculation
  const viability = useMemo(() => {
    return calculateMarketViabilityScore({
      coreRatings,
      crashesObserved,
      anrObserved,
      wouldRecommend,
      wouldPayOrKeep,
    });
  }, [coreRatings, crashesObserved, anrObserved, wouldRecommend, wouldPayOrKeep]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const appFinalName = selectedApp === 'Client Cohort Testing App' ? (customAppName || 'Client Custom App') : selectedApp;
    const finalPackage = selectedApp === 'Client Cohort Testing App' ? (customPackageName || 'com.client.customapp') : (FEATURED_APPS.find(a => a.name === selectedApp)?.packageName || '');

    const payload: CategoryEvaluationData = {
      appName: appFinalName,
      packageName: finalPackage,
      category: selectedCategory,
      googleEmail,
      deviceModel,
      androidVersion,
      ramGigs,
      coreRatings,
      quantitativeMetrics,
      qualitativeAnswers,
      crashesObserved,
      anrObserved,
      wouldRecommend,
      wouldPayOrKeep,
      overallNotes,
    };

    const res = await submitCategoryEvaluation(payload);
    setLoading(false);
    setStatus(res);

    if (res.success) {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.4 },
        colors: ['#10b981', '#0284c7', '#8b5cf6', '#f59e0b'],
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/testers"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Testing Hub</span>
        </Link>
        <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold flex items-center gap-1.5">
          <DollarSign className="w-3 h-3 text-emerald-600" />
          <span>Bounty Eligible Submission</span>
        </span>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5 text-sky-600" />
            <span>Market Viability &amp; Hardware QA Protocol</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
            Category-Specific App Evaluation
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Your evaluation stress-tests real hardware performance, identifies UX friction, and computes the <strong>Market Viability Index (MVI)</strong>. Completing this audit awards you tester bounty credits and lifetime software keys.
          </p>
        </div>

        {/* Live Viability Meter Preview */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold block">
                // Real-Time Viability Index Preview
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                  {viability.score}
                  <span className="text-xs text-slate-400 font-normal"> / 100</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Grade: {viability.grade}
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  {viability.tier}
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-xl p-3 sm:max-w-xs space-y-1">
              <div className="flex justify-between text-[11px] font-mono">
                <span>Observed Crashes:</span>
                <span className={crashesObserved > 0 ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                  {crashesObserved}
                </span>
              </div>
              <div className="flex justify-between text-[11px] font-mono">
                <span>Freezes / ANRs:</span>
                <span className={anrObserved > 0 ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                  {anrObserved}
                </span>
              </div>
              <div className="flex justify-between text-[11px] font-mono">
                <span>Recommend to Friends:</span>
                <span className={wouldRecommend ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                  {wouldRecommend ? 'Yes (+10 pts)' : 'No'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
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
                  {status.success ? 'Evaluation Successfully Recorded!' : 'Submission Notice'}
                </span>
                <span className="leading-relaxed block">{status.message}</span>
              </div>
            </div>
          )}

          {/* Section 1: App & Category Selection */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-800 font-bold border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>Step 1: Select Application &amp; Testing Category</span>
              <span className="text-slate-500 font-normal">Adaptive Rubric</span>
            </div>

            {/* App Preset Pills */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-700 block font-semibold">
                Application Being Evaluated *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {FEATURED_APPS.map((app) => (
                  <button
                    key={app.name}
                    type="button"
                    onClick={() => handleAppSelect(app.name)}
                    className={`p-2.5 rounded-xl text-left border transition text-xs cursor-pointer ${
                      selectedApp === app.name
                        ? 'border-sky-500 bg-sky-50/80 text-sky-950 font-bold ring-1 ring-sky-500'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block truncate">{app.name}</span>
                    <span className="text-[10px] font-mono text-slate-500 block truncate">
                      {app.packageName}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedApp === 'Client Cohort Testing App' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-700">Client App Name</span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ApexFit Pro"
                    value={customAppName}
                    onChange={(e) => setCustomAppName(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-700">Package Identifier</span>
                  <input
                    type="text"
                    required
                    placeholder="com.company.app"
                    value={customPackageName}
                    onChange={(e) => setCustomPackageName(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-900"
                  />
                </div>
              </div>
            )}

            {/* Category Rubric Switcher */}
            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-mono text-slate-700 block font-semibold">
                Category Evaluation Framework *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.keys(CATEGORY_RUBRICS) as AppCategory[]).map((catKey) => {
                  const catRubric = CATEGORY_RUBRICS[catKey];
                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => handleCategorySwitch(catKey)}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                        selectedCategory === catKey
                          ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold ring-1 ring-emerald-600 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-xs block font-bold">{catRubric.badge}</span>
                      <span className="text-[10px] text-slate-500 block line-clamp-1">
                        {catRubric.displayName}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-600 mt-1 italic">
                {rubric.description}
              </p>
            </div>
          </div>

          {/* Section 2: Tester & Device Telemetry */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold border-b border-slate-200 pb-2">
              Step 2: Hardware &amp; Tester Identity
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
                  value={googleEmail}
                  onChange={(e) => setGoogleEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
                />
                <span className="text-[10px] text-slate-500 block">
                  Required for bounty crediting and Google Play internal access.
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 block">
                  Device Hardware Model <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samsung Galaxy S23 Ultra, Pixel 7a, Xiaomi Redmi Note 13"
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 block">
                  Android OS Version <span className="text-emerald-600">*</span>
                </label>
                <select
                  value={androidVersion}
                  onChange={(e) => setAndroidVersion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
                >
                  <option value="Android 15">Android 15</option>
                  <option value="Android 14">Android 14</option>
                  <option value="Android 13">Android 13</option>
                  <option value="Android 12 or earlier">Android 12 or earlier</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 block">
                  System Memory (RAM)
                </label>
                <select
                  value={ramGigs}
                  onChange={(e) => setRamGigs(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
                >
                  <option value="12 GB+ RAM">12 GB+ (Flagship Performance Tier)</option>
                  <option value="8 GB RAM">8 GB RAM (Mid-High Standard)</option>
                  <option value="6 GB RAM">6 GB RAM (Balanced)</option>
                  <option value="4 GB RAM or less">4 GB RAM or less (Budget / Stress Test)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Adaptive Category Rubric Evaluation */}
          <div className="space-y-6 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-800 font-bold border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>Step 3: Core Rubric Scoring ({rubric.displayName})</span>
              <span className="text-sky-600 text-[11px] font-normal">5 Weighted Heuristics</span>
            </div>

            <div className="space-y-5">
              {rubric.coreMetrics.map((metric) => {
                const currentRating = coreRatings[metric.id] || 4;
                return (
                  <div
                    key={metric.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="text-xs font-display font-bold text-slate-900 block">
                          {metric.name}
                        </span>
                        <span className="text-[11px] text-slate-500 leading-snug">
                          {metric.description}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200 font-semibold shrink-0">
                        Target: {metric.benchmarkTarget}
                      </span>
                    </div>

                    {/* Star / Score Rating Slider */}
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setCoreRatings({ ...coreRatings, [metric.id]: val })}
                          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                            currentRating >= val
                              ? 'bg-amber-400 text-slate-950 shadow-2xs'
                              : 'bg-white border border-slate-200 text-slate-400 hover:text-slate-700'
                          }`}
                        >
                          <Star className={`w-3.5 h-3.5 ${currentRating >= val ? 'fill-current' : ''}`} />
                          <span>{val}</span>
                        </button>
                      ))}
                    </div>

                    {/* Dynamic Rubric Explanation based on score */}
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-800">
                        {currentRating <= 2
                          ? '⚠️ Underperforming: '
                          : currentRating === 3
                          ? '🟡 Passable: '
                          : '✅ Excellent / Production Ready: '}
                      </span>
                      {currentRating <= 2
                        ? metric.rubricGuide.poor
                        : currentRating === 3
                        ? metric.rubricGuide.average
                        : metric.rubricGuide.excellent}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Quantitative Performance & Stability Audit */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-rose-800 font-bold border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>Step 4: Hardware Stability &amp; Crash Audit</span>
              <span className="text-rose-600 text-[11px]">Zero-Tolerance Stability</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <label className="text-xs font-mono text-slate-800 font-semibold block">
                  Observed Crashes (App Closed Abruptly)
                </label>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setCrashesObserved(num)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                        crashesObserved === num
                          ? num === 0
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {num === 3 ? '3+ Fatal' : `${num} Crashes`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <label className="text-xs font-mono text-slate-800 font-semibold block">
                  Freezes / ANR (&quot;App Not Responding&quot;)
                </label>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setAnrObserved(num)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                        anrObserved === num
                          ? num === 0
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {num === 3 ? '3+ ANRs' : `${num} Freezes`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Category Quantitative Telemetry Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {rubric.quantitativePrompts.map((q) => (
                <div key={q.label} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono text-slate-700 block font-medium">
                      {q.label}
                    </label>
                    <span className="text-[10px] font-mono text-slate-500">[{q.unit}]</span>
                  </div>
                  <input
                    type="text"
                    placeholder={q.placeholder}
                    value={quantitativeMetrics[q.label] || ''}
                    onChange={(e) =>
                      setQuantitativeMetrics({ ...quantitativeMetrics, [q.label]: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-sky-500 transition shadow-2xs"
                  />
                  <span className="text-[10px] text-slate-500 block">{q.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Qualitative Critique & Market Validation */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-violet-800 font-bold border-b border-slate-200 pb-2">
              Step 5: Qualitative Critique &amp; Viability Verdict
            </div>

            <div className="space-y-4">
              {rubric.qualitativeQuestions.map((q) => (
                <div key={q.id} className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-800 font-semibold block">
                    {q.question} *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder={q.placeholder}
                    value={qualitativeAnswers[q.id] || ''}
                    onChange={(e) =>
                      setQualitativeAnswers({ ...qualitativeAnswers, [q.id]: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-violet-500 transition resize-none shadow-2xs"
                  />
                </div>
              ))}

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-800 font-semibold block">
                  General Bug Findings, Edge-Cases &amp; Device Specific Quirks:
                </label>
                <textarea
                  rows={2}
                  placeholder="Note any UI overlap on curved screens, gesture navigation conflicts, or keyboard obstruction..."
                  value={overallNotes}
                  onChange={(e) => setOverallNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-violet-500 transition resize-none shadow-2xs"
                />
              </div>
            </div>

            {/* Commercial Viability Intent Checks */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 pt-3">
              <span className="text-xs font-mono uppercase text-slate-700 font-bold block">
                Commercial Viability &amp; Retention Intent
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={wouldRecommend}
                    onChange={(e) => setWouldRecommend(e.target.checked)}
                    className="rounded bg-white border-slate-300 text-emerald-600 focus:ring-emerald-500 shrink-0"
                  />
                  <span className="text-slate-700">
                    I would genuinely recommend this app to peers/friends.
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={wouldPayOrKeep}
                    onChange={(e) => setWouldPayOrKeep(e.target.checked)}
                    className="rounded bg-white border-slate-300 text-emerald-600 focus:ring-emerald-500 shrink-0"
                  />
                  <span className="text-slate-700">
                    I will keep this build installed on my primary phone.
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white font-extrabold text-sm uppercase tracking-wider transition shadow-md hover:shadow-lg hover:scale-[1.005] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <span>Calculating &amp; Dispatched Evaluation...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit {rubric.displayName} Audit (Score: {viability.score}/100)</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
