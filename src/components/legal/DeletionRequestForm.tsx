'use client';

import React, { useState } from 'react';
import { Trash2, CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, Mail } from 'lucide-react';
import { submitDeletionRequest, DeletionRequestData } from '@/app/actions/deletion';
import { appsCatalog } from '@/data/apps-catalog';

export function DeletionRequestForm() {
  const [formData, setFormData] = useState<DeletionRequestData>({
    email: '',
    appName: 'Clean and Clean',
    scope: 'full_account',
    notes: '',
    confirmation: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string; referenceId?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await submitDeletionRequest(formData);
    setLoading(false);
    setStatus(res);

    if (res.success) {
      setFormData({
        email: '',
        appName: 'Clean and Clean',
        scope: 'full_account',
        notes: '',
        confirmation: false,
      });
    }
  };

  return (
    <div className="studio-card rounded-2xl p-6 sm:p-10 border border-rose-500/30 bg-rose-950/[0.04] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
            Google Play Data Safety • Mandatory Web Resource
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
            Submit App Account &amp; Data Deletion Request
          </h2>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-300 border border-rose-500/25 shrink-0">
          <ShieldCheck className="w-3.5 h-3.5" />
          POPIA / GDPR / Google Play
        </span>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        Under Google Play Developer Program Policies, users can request complete deletion of their account and associated data directly through this web interface without needing to reinstall the mobile application.
      </p>

      {status && (
        <div
          className={`p-5 rounded-xl text-xs sm:text-sm flex items-start gap-3.5 ${
            status.success
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
              : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
          }`}
        >
          {status.success ? (
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
          )}
          <div className="space-y-1.5">
            <span className="font-display font-bold block text-white">
              {status.success ? 'Request Acknowledged & Logged' : 'Notice'}
            </span>
            <p className="leading-relaxed">{status.message}</p>
            {status.referenceId && (
              <span className="inline-block mt-1 font-mono text-[11px] px-2.5 py-0.5 rounded bg-black/60 border border-emerald-500/30 text-emerald-300">
                Reference Code: {status.referenceId}
              </span>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 block">
              Registered Account Email <span className="text-rose-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="your-account@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-400 transition"
            />
            <span className="text-[10px] text-slate-400 block font-mono">
              The email used to sign in to the app or register for closed testing.
            </span>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 block">
              Target Application / Service <span className="text-rose-400">*</span>
            </label>
            <select
              value={formData.appName}
              onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-rose-400 transition"
            >
              <option value="Clean and Clean" className="bg-[#05070b]">
                Clean and Clean (za.co.cleanandclean.app)
              </option>
              <option value="The Seitz Testing Lab" className="bg-[#05070b]">
                The Seitz Testing Lab (seitz.co.za/testers)
              </option>
              <option value="Mzansi Midnight" className="bg-[#05070b]">
                Mzansi Midnight (za.co.seitz.mzansimidnight)
              </option>
              <option value="OmniRemote" className="bg-[#05070b]">
                OmniRemote (com.omniremote.universal)
              </option>
              <option value="Client Project / Inquiry Record" className="bg-[#05070b]">
                Client Inquiries &amp; Service Quotes
              </option>
              <option value="All Seitz Apps & Services" className="bg-[#05070b]">
                All Seitz Applications (Universal Erasure)
              </option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-300 block">
            Scope of Deletion <span className="text-rose-400">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'full_account', label: 'Complete Account & All Data', sub: 'Authentication, profiles, logs, and storage' },
              { id: 'testing_enrollment', label: 'Beta Testing Record Only', sub: 'Purge hardware ID and tester status' },
              { id: 'cleanup_data', label: 'Civic Hotspot Reports Only', sub: 'Purge photos, cleanups, and coordinates' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setFormData({ ...formData, scope: opt.id as any })}
                className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                  formData.scope === opt.id
                    ? 'border-rose-500/50 bg-rose-500/15 text-white font-semibold'
                    : 'border-white/10 bg-black/40 text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-xs block font-display">{opt.label}</span>
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{opt.sub}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono text-slate-300 block">
            Additional Context or Specific Records to Remove (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Please purge my submitted ward cleanup photos and associated location records."
            value={formData.notes || ''}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-400 transition resize-none"
          />
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08]">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.confirmation}
              onChange={(e) => setFormData({ ...formData, confirmation: e.target.checked })}
              className="mt-1 rounded bg-black/60 border-white/20 text-rose-500 focus:ring-rose-500"
            />
            <span className="text-xs text-slate-300 leading-relaxed">
              I confirm that I am the registered account owner and request that Seitz permanently purge my account credentials, associated database records, and storage assets within 30 days. I understand this action cannot be reversed.
            </span>
          </label>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg shadow-rose-500/25 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Recording Deletion Request...</span>
              </>
            ) : (
              <>
                <Trash2 className="w-4 h-4" />
                <span>Submit Official Deletion Request</span>
              </>
            )}
          </button>

          <a
            href="mailto:byseitz.agency@gmail.com?subject=%5BDATA%20DELETION%20REQUEST%5D&body=Account%20Email:%20%0AApp%20Name:%20%0ARequest:%20Please%20delete%20my%20account%20and%20associated%20data."
            className="text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1.5 transition"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Or email directly: byseitz.agency@gmail.com</span>
          </a>
        </div>
      </form>
    </div>
  );
}
