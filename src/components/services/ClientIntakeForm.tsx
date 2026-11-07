'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  ShieldCheck,
  Send,
  Loader2,
  CheckCircle2,
  DollarSign,
  Briefcase,
  AlertCircle,
  Users,
  Clock,
  Sparkles,
} from 'lucide-react';
import { submitClientTestingOrder, ClientTestingOrderData } from '@/app/actions/client-service';

export function ClientIntakeForm() {
  const [formData, setFormData] = useState<ClientTestingOrderData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    appName: '',
    packageName: '',
    appCategory: 'Productivity',
    optInLink: '',
    testCredentials: '',
    tier: 'standard_15',
    preferredEscrow: 'direct',
    notes: '',
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await submitClientTestingOrder(formData);
      if (res.success) {
        setSubmitted(true);
        setResponseMsg(res.message);
      } else {
        setErrorMsg(res.message);
      }
    } catch {
      setErrorMsg('An unexpected error occurred. Please reach out to byseitz.agency@gmail.com.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-300 text-center max-w-2xl mx-auto space-y-6 shadow-md">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Cohort Initialized Successfully!
        </h3>

        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
          {responseMsg}
        </p>

        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs sm:text-sm">
          <span className="text-emerald-800 font-mono font-bold block uppercase tracking-wider">
            Immediate Action Required in Play Console:
          </span>
          <p className="text-slate-700 leading-relaxed">
            1. Open your <strong>Google Play Console</strong> &gt; <strong>Testing &gt; Closed testing</strong>.<br />
            2. Under <strong>Testers</strong>, add Google Group email: <code className="text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-mono font-bold">seitz@googlegroups.com</code>.<br />
            3. Save changes and ensure your closed track build is rolled out.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                clientName: '',
                clientEmail: '',
                clientPhone: '',
                appName: '',
                packageName: '',
                appCategory: 'Productivity',
                optInLink: '',
                testCredentials: '',
                tier: 'standard_15',
                preferredEscrow: 'direct',
                notes: '',
                termsAccepted: false,
              });
            }}
            className="text-xs font-mono text-emerald-700 font-semibold hover:underline"
          >
            ← Register another app or submit update
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 max-w-3xl mx-auto">
      {/* Tier Selection */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block">
          1. Select Testing Service Tier
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, tier: 'standard_15' })}
            className={`p-5 rounded-2xl border text-left transition-all ${
              formData.tier === 'standard_15'
                ? 'border-emerald-500 bg-emerald-50/60 shadow-md shadow-emerald-500/10'
                : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                15 Testers (Safe Buffer)
              </span>
              <span className="text-lg font-bold text-slate-950 font-mono">$299 USD</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">Standard Production Cohort</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              15 real Android devices, 14 continuous retention days, private bug log, and complete questionnaire answers.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, tier: 'pro_25' })}
            className={`p-5 rounded-2xl border text-left transition-all ${
              formData.tier === 'pro_25'
                ? 'border-sky-500 bg-sky-50/60 shadow-md shadow-sky-500/10'
                : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">
                25 Testers (Multi-OS)
              </span>
              <span className="text-lg font-bold text-slate-950 font-mono">$499 USD</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">Pro Audit Cohort</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              25 Android devices (Android 12–15), deep functional QA breakdown, screen video recordings, and expedited turnaround.
            </p>
          </button>
        </div>
      </div>

      {/* Escrow & Payment Channel Selection */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block">
          2. Preferred Payment & Escrow Channel
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { id: 'direct', label: 'Direct Invoice', sub: 'Stripe / Paystack / Wire' },
            { id: 'upwork', label: 'Upwork Escrow', sub: 'Direct Contract Milestone' },
            { id: 'fiverr', label: 'Fiverr Pro', sub: 'Platform Custom Offer' },
          ].map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => setFormData({ ...formData, preferredEscrow: ch.id as any })}
              className={`p-3.5 rounded-xl border text-center transition ${
                formData.preferredEscrow === ch.id
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <span className="text-xs block font-semibold">{ch.label}</span>
              <span className="text-[10px] font-mono text-slate-500 block mt-0.5">{ch.sub}</span>
            </button>
          ))}
        </div>
      </div>

      {/* App & Developer Details */}
      <div className="space-y-4">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block">
          3. App & Contact Information
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs text-slate-700 font-medium">Your Name / Studio *</span>
            <input
              type="text"
              required
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              placeholder="e.g. Alex Vance (Apex Labs)"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs text-slate-700 font-medium">Business Email Address *</span>
            <input
              type="email"
              required
              value={formData.clientEmail}
              onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
              placeholder="alex@apexlabs.dev"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs text-slate-700 font-medium">App Display Name *</span>
            <input
              type="text"
              required
              value={formData.appName}
              onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
              placeholder="e.g. FocusPulse Tracker"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs text-slate-700 font-medium">Android Package ID *</span>
            <input
              type="text"
              required
              value={formData.packageName}
              onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
              placeholder="com.apexlabs.focuspulse"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-mono focus:bg-white focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs text-slate-700 font-medium">WhatsApp / Telegram (Optional)</span>
            <input
              type="text"
              value={formData.clientPhone || ''}
              onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
              placeholder="+1 555-0199 or @telegram"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs text-slate-700 font-medium">Play Console Opt-In Link (Optional)</span>
            <input
              type="url"
              value={formData.optInLink || ''}
              onChange={(e) => setFormData({ ...formData, optInLink: e.target.value })}
              placeholder="https://play.google.com/apps/testing/..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-mono focus:bg-white focus:outline-none focus:border-emerald-500 transition"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <span className="text-xs text-slate-700 font-medium">Demo Credentials / Login Notes (if applicable)</span>
          <input
            type="text"
            value={formData.testCredentials || ''}
            onChange={(e) => setFormData({ ...formData, testCredentials: e.target.value })}
            placeholder="User: demo@example.com / Pass: test1234 or N/A"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
          />
        </div>

        <div className="space-y-1.5">
          <span className="text-xs text-slate-700 font-medium">Additional Notes / Testing Scope</span>
          <textarea
            rows={2}
            value={formData.notes || ''}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Mention any specific features or flows you want extra attention on..."
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-emerald-500 transition"
          />
        </div>
      </div>

      {/* Compliance Terms Checkbox */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.termsAccepted}
            onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
            className="mt-1 rounded bg-white border-slate-300 text-emerald-600 focus:ring-emerald-500 shrink-0"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I confirm that this app complies with Google Play Developer Program Policies. I understand this service provides authentic evaluation and device retention by real human testers. Public store ratings and reviews are strictly excluded per Google Play's Anti-Incentive Policy.
          </span>
        </label>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50 cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing Order & Reserving Cohort...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>
              Reserve {formData.tier === 'pro_25' ? '25' : '15'}-Device Cohort ({formData.tier === 'pro_25' ? '$499' : '$299'})
            </span>
          </>
        )}
      </button>
    </form>
  );
}
