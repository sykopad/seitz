'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  X,
  Send,
  Loader2,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';
import { submitAppSuggestion } from '@/app/actions/suggestions';
import { CommunitySuggestionItem } from '@/data/community-suggestions';

interface SuggestAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuggestionAdded: (suggestion: CommunitySuggestionItem) => void;
}

export function SuggestAppModal({
  isOpen,
  onClose,
  onSuggestionAdded,
}: SuggestAppModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Tools & Utilities');
  const [targetPlatform, setTargetPlatform] = useState('Android Native (Kotlin)');
  const [authorName, setAuthorName] = useState('');
  const [loading, setLoading] = useState(false);
  const [analyzedItem, setAnalyzedItem] = useState<CommunitySuggestionItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await submitAppSuggestion({
      title,
      description,
      category,
      targetPlatform,
      authorName: authorName.trim() || undefined,
    });

    setLoading(false);

    if (res.success && res.suggestion) {
      setAnalyzedItem(res.suggestion);
      onSuggestionAdded(res.suggestion);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#059669', '#0284c7', '#f59e0b', '#7c3aed'],
      });
    } else {
      setError(res.message || 'Failed to submit proposal');
    }
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setAuthorName('');
    setAnalyzedItem(null);
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-amber-500/5 via-sky-500/5 to-emerald-500/5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-950">
                Suggest an App or Game to Build
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Powered by OpenRouter LLM • Evaluates feasibility &amp; generates architecture
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {analyzedItem ? (
            /* Success & AI Breakdown View */
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-sm block text-emerald-900">
                    AI Analysis Complete &amp; Proposal Added!
                  </span>
                  <p className="text-[11px] text-emerald-800 leading-relaxed">
                    Your concept has been enriched by OpenRouter LLM and entered into the Community Voting Hub with 1 initial backer vote.
                  </p>
                </div>
              </div>

              {/* AI Spec Summary Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">
                      {analyzedItem.aiAnalysis.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                      Feasibility: {analyzedItem.aiAnalysis.feasibilityScore} / 5.0
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-950">
                    {analyzedItem.aiAnalysis.refinedTitle}
                  </h4>
                  <p className="text-xs text-slate-600 italic mt-1">
                    &ldquo;{analyzedItem.aiAnalysis.tagline}&rdquo;
                  </p>
                </div>

                {/* Key Mechanics */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block">
                    Core Mechanics &amp; Features:
                  </span>
                  <div className="space-y-1.5">
                    {analyzedItem.aiAnalysis.keyMechanics.map((m) => (
                      <div key={m.title} className="text-xs">
                        <strong className="text-slate-800 font-semibold">• {m.title}:</strong>{' '}
                        <span className="text-slate-600">{m.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Spec */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block font-bold">
                      FRONTEND:
                    </span>
                    <span className="text-slate-800 font-medium">
                      {analyzedItem.aiAnalysis.techStack.frontend}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block font-bold">
                      ESTIMATED TIMELINE:
                    </span>
                    <span className="text-emerald-700 font-medium">
                      {analyzedItem.aiAnalysis.estimatedSprints}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer"
              >
                View in Community Voting Pipeline
              </button>
            </div>
          ) : (
            /* Suggestion Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
                  {error}
                </div>
              )}

              {/* Title */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 font-semibold block">
                  App or Game Concept Title <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Loadshedding Battery Saver, SA Lingo Quest, Township POS..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-amber-500 transition shadow-2xs"
                />
              </div>

              {/* Category & Platform */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 font-semibold block">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-hidden focus:border-amber-500 transition shadow-2xs"
                  >
                    <option value="Tools & Utilities">Tools &amp; Utilities</option>
                    <option value="Games & Casual">Games &amp; Casual</option>
                    <option value="AI & Media">AI &amp; Media</option>
                    <option value="Civic & Community">Civic &amp; Community</option>
                    <option value="EdTech & Culture">EdTech &amp; Culture</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 font-semibold block">
                    Target Platform
                  </label>
                  <select
                    value={targetPlatform}
                    onChange={(e) => setTargetPlatform(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-hidden focus:border-amber-500 transition shadow-2xs"
                  >
                    <option value="Android Native (Kotlin)">Android Native (Kotlin)</option>
                    <option value="Next.js Full-Stack Web App">Next.js Web App</option>
                    <option value="Cross-Platform (PWA + Android)">Cross-Platform (PWA)</option>
                  </select>
                </div>
              </div>

              {/* Description & Gameplay/Utility */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 font-semibold block">
                  Concept Description &amp; Core Mechanics <span className="text-amber-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="What problem does this solve? What are the key features or gameplay mechanics you want to see? What makes it exciting?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-amber-500 transition shadow-2xs"
                />
              </div>

              {/* Author Alias */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 font-semibold block">
                  Your Name or Community Alias (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sipho, Alex J., CapeDev"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-amber-500 transition shadow-2xs"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 hover:from-amber-400 hover:to-emerald-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md shadow-amber-500/20 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Concept with OpenRouter AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Analyze &amp; Submit for Community Votes</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
