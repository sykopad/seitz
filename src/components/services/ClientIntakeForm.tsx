'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  ShieldCheck,
  Send,
  Loader2,
  CheckCircle2,
  DollarSign,
  AlertCircle,
  Users,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { submitClientTestingOrder, ClientTestingOrderData } from '@/app/actions/client-service';
import { PayPalCheckoutButton } from '@/components/payments/PayPalCheckoutButton';
import { TestingTierId, TESTING_TIERS } from '@/lib/paypal/client';
import { UpworkIcon } from '@/components/icons/UpworkIcon';
import { FiverrIcon } from '@/components/icons/FiverrIcon';
import { PROFESSIONAL_LINKS } from '@/data/social-links';

export function ClientIntakeForm() {
  const [selectedTier, setSelectedTier] = useState<TestingTierId>('tier_20');
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'invoice'>('paypal');

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
  const [paidOrderId, setPaidOrderId] = useState<string | null>(null);

  const tier = TESTING_TIERS[selectedTier];

  const handleInvoiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await submitClientTestingOrder({
        ...formData,
        tier: selectedTier === 'tier_30' ? 'pro_25' : 'standard_15',
      });
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

  const handlePayPalSuccess = (orderId: string, captureId: string) => {
    setSubmitted(true);
    setPaidOrderId(orderId);
    setResponseMsg(
      `Your payment of $${tier.priceUsd.toFixed(2)} USD is confirmed (Capture ID: ${captureId})! We have allocated $${tier.totalTesterPoolUsd.toFixed(2)} USD to the verified tester bounty pool ($${tier.bountyPerTesterUsd.toFixed(2)}/tester) and activated your ${tier.testerCount}-tester cohort.`
    );
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-300 text-center max-w-2xl mx-auto space-y-6 shadow-md animate-in zoom-in-95">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Cohort Initialized &amp; Bounties Funded!
        </h3>

        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
          {responseMsg}
        </p>

        {paidOrderId && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800">
            Order Reference: <strong>{paidOrderId}</strong> • PayPal Verified
          </div>
        )}

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
              setPaidOrderId(null);
            }}
            className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-mono text-xs transition cursor-pointer"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto space-y-8">
      {/* 1. Select Cohort Tier */}
      <div className="space-y-4">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold flex items-center justify-between">
          <span>1. Select Testing Cohort Tier</span>
          <span className="text-emerald-700 text-[11px] font-semibold">
            60-68% directly funds tester cash bounties
          </span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {(['tier_12', 'tier_20', 'tier_30'] as TestingTierId[]).map((tId) => {
            const t = TESTING_TIERS[tId];
            const isSelected = selectedTier === tId;

            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelectedTier(tId)}
                className={`p-4 rounded-2xl border text-left transition relative cursor-pointer ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {tId === 'tier_20' && (
                  <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-mono font-bold uppercase tracking-wider shadow-2xs">
                    Popular
                  </span>
                )}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-slate-500 block uppercase">
                    {t.testerCount} Testers
                  </span>
                  <div className="font-display font-extrabold text-lg text-slate-950">
                    ${t.priceUsd.toFixed(0)} <span className="text-xs font-normal text-slate-500">USD</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 mt-1">
                    {t.description}
                  </p>
                  <div className="pt-2 border-t border-slate-200/60 text-[10px] font-mono text-emerald-800">
                    Bounty: <strong>${t.bountyPerTesterUsd.toFixed(0)}/tester</strong> (${t.totalTesterPoolUsd.toFixed(0)} pool)
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. App & Developer Details */}
      <div className="space-y-4">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block">
          2. App &amp; Contact Information
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs text-slate-700 font-medium">Your Name / Studio *</span>
            <input
              type="text"
              required
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              placeholder="e.g. Alex Johnson (Apex Labs)"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
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
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
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
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
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
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-mono focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <span className="text-xs text-slate-700 font-medium">Closed Track Opt-In Link (Optional now, can send later)</span>
          <input
            type="url"
            value={formData.optInLink || ''}
            onChange={(e) => setFormData({ ...formData, optInLink: e.target.value })}
            placeholder="https://play.google.com/apps/testing/com.yourcompany.app"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-mono focus:bg-white focus:outline-hidden focus:border-emerald-500 transition shadow-2xs"
          />
        </div>
      </div>

      {/* 3. Payment Method Switcher */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold block">
          3. Payment Channel
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setPaymentMethod('paypal')}
            className={`p-3 rounded-xl border text-center transition cursor-pointer ${
              paymentMethod === 'paypal'
                ? 'border-[#003087] bg-sky-50/50 text-[#003087] font-bold ring-1 ring-[#003087]'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span className="text-xs block font-bold">Instant PayPal Checkout</span>
            <span className="text-[10px] font-mono text-slate-500 block">Funds tester bounties immediately</span>
          </button>

          <button
            type="button"
            onClick={() => setPaymentMethod('invoice')}
            className={`p-3 rounded-xl border text-center transition cursor-pointer ${
              paymentMethod === 'invoice'
                ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-600'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span className="text-xs block font-bold">Invoice / Upwork / Wire</span>
            <span className="text-[10px] font-mono text-slate-500 block">Manual invoice dispatch</span>
          </button>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.termsAccepted}
            onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
            className="mt-1 rounded bg-white border-slate-300 text-emerald-600 focus:ring-emerald-500 shrink-0"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I understand that payments fund verified human testing time and private crash/stability feedback. Public store ratings and reviews are strictly excluded per Google Play&apos;s Anti-Incentive Policy.
          </span>
        </label>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Payment Action */}
      {paymentMethod === 'paypal' ? (
        <PayPalCheckoutButton
          tierId={selectedTier}
          clientDetails={{
            clientName: formData.clientName,
            clientEmail: formData.clientEmail,
            appName: formData.appName,
            packageName: formData.packageName,
            optInLink: formData.optInLink,
            testCredentials: formData.testCredentials,
            notes: formData.notes,
          }}
          onSuccess={handlePayPalSuccess}
          onError={(err) => setErrorMsg(err)}
        />
      ) : (
        <div className="space-y-3">
          <form onSubmit={handleInvoiceSubmit}>
            <button
              type="submit"
              disabled={loading || !formData.termsAccepted}
              className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition disabled:opacity-50 cursor-pointer shadow-md"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Cohort Reservation...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Manual Invoice for {tier.name} (${tier.priceUsd})</span>
                </>
              )}
            </button>
          </form>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
            <span className="font-medium text-slate-700">Or fund milestone escrow directly on verified platforms:</span>
            <div className="flex items-center gap-2">
              <a
                href={PROFESSIONAL_LINKS.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[#14a800] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <UpworkIcon className="w-3.5 h-3.5" />
                <span>Upwork Contract</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={PROFESSIONAL_LINKS.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-[#1dbf73] bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors"
              >
                <FiverrIcon className="w-3.5 h-3.5" />
                <span>Fiverr Order</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
