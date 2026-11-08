'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Loader2,
  Sparkles,
  ArrowRight,
  Wallet,
} from 'lucide-react';
import {
  getTesterBountiesSummary,
  saveTesterPayPalPayoutAddress,
  claimTesterBountyReward,
  TesterBountiesSummary,
} from '@/app/actions/bounties';

interface TesterBountiesCardProps {
  userEmail: string;
}

export function TesterBountiesCard({ userEmail }: TesterBountiesCardProps) {
  const [summary, setSummary] = useState<TesterBountiesSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [paypalEmail, setPaypalEmail] = useState('');
  const [savingPaypal, setSavingPaypal] = useState(false);
  const [paypalSavedMsg, setPaypalSavedMsg] = useState<string | null>(null);
  const [claimingId, setClaimingId] = useState<string | null>(null);
  const [claimFeedback, setClaimFeedback] = useState<string | null>(null);

  useEffect(() => {
    getTesterBountiesSummary(userEmail).then((res) => {
      setSummary(res);
      setPaypalEmail(res.paypalPayoutEmail || userEmail);
      setLoading(false);
    });
  }, [userEmail]);

  const handleSavePayPal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paypalEmail) return;

    setSavingPaypal(true);
    setPaypalSavedMsg(null);

    const res = await saveTesterPayPalPayoutAddress(paypalEmail, userEmail);
    setSavingPaypal(false);
    setPaypalSavedMsg(res.message);
  };

  const handleClaim = async (bountyId: string) => {
    setClaimingId(bountyId);
    setClaimFeedback(null);

    const res = await claimTesterBountyReward(bountyId, userEmail);
    setClaimingId(null);

    if (res.success) {
      setClaimFeedback(res.message);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#0284c7', '#f59e0b'],
      });

      // Refresh summary
      getTesterBountiesSummary(userEmail).then((updated) => {
        setSummary(updated);
      });
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-slate-200 flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
      {/* Header & Stats Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-mono font-semibold">
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>Client-Funded Cash Bounties • PayPal Payouts</span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
            <span>Tester Cash Rewards &amp; Payout Vault</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            When developer clients order 12–30 tester fast-track cohorts, their payment funds real cash bounties ($9.00 – $10.00 USD per app) for testers who maintain continuous 14-day installation and submit private stability check-ins.
          </p>
        </div>

        {/* Balance Counters */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center min-w-[130px]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
              Claimed Earned
            </span>
            <span className="font-display text-2xl font-black text-emerald-900">
              ${summary?.totalEarnedUsd.toFixed(2) || '0.00'}
            </span>
            <span className="text-[10px] font-mono text-emerald-700 block">USD via PayPal</span>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center min-w-[130px]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block">
              In-Progress
            </span>
            <span className="font-display text-2xl font-black text-amber-900">
              ${summary?.pendingBountiesUsd.toFixed(2) || '0.00'}
            </span>
            <span className="text-[10px] font-mono text-amber-700 block">Unlocking Soon</span>
          </div>
        </div>
      </div>

      {/* PayPal Payout Address Setup */}
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Wallet className="w-4 h-4 text-sky-600" />
            <span className="font-display font-bold text-xs text-slate-900">
              Your PayPal Payout Destination:
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Funds transfer directly to this address
          </span>
        </div>

        <form onSubmit={handleSavePayPal} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            placeholder="e.g. your-paypal-email@gmail.com"
            value={paypalEmail}
            onChange={(e) => setPaypalEmail(e.target.value)}
            className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:border-sky-500 shadow-2xs"
          />
          <button
            type="submit"
            disabled={savingPaypal}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs font-mono transition shrink-0 cursor-pointer disabled:opacity-60"
          >
            {savingPaypal ? 'Saving...' : 'Update PayPal Address'}
          </button>
        </form>

        {paypalSavedMsg && (
          <p className="text-[11px] text-emerald-700 font-mono font-semibold animate-in fade-in">
            ✓ {paypalSavedMsg}
          </p>
        )}
      </div>

      {claimFeedback && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{claimFeedback}</p>
        </div>
      )}

      {/* Available Client Bounties List */}
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
          Client-Funded Cohort Tasks &amp; Bounties
        </span>

        <div className="space-y-3">
          {summary?.availableBounties.map((bounty) => {
            const isQualified = bounty.status === 'qualified';
            const isClaimed = bounty.status === 'claimed';
            const isRecruiting = bounty.status === 'recruiting';

            return (
              <div
                key={bounty.id}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-bold text-sm text-slate-900">
                      {bounty.appName}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                      ${bounty.bountyAmountUsd.toFixed(2)} USD Bounty
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 font-mono truncate">
                    Package: {bounty.packageName}
                  </p>

                  {/* Task Progress Tracker */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      Retention: {bounty.currentRetentionDays} / {bounty.retentionDaysRequired} days
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <ShieldCheck
                        className={`w-3.5 h-3.5 ${
                          bounty.hasSubmittedFeedback ? 'text-emerald-600' : 'text-slate-400'
                        }`}
                      />
                      Check-in: {bounty.hasSubmittedFeedback ? 'Submitted' : 'Pending Day 7'}
                    </span>
                  </div>
                </div>

                {/* Status / Claim CTA */}
                <div className="shrink-0 flex items-center gap-2">
                  {isQualified ? (
                    <button
                      type="button"
                      onClick={() => handleClaim(bounty.id)}
                      disabled={claimingId === bounty.id}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-display font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer disabled:opacity-60 flex items-center gap-1.5"
                    >
                      {claimingId === bounty.id ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <DollarSign className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Claim ${bounty.bountyAmountUsd.toFixed(2)} USD</span>
                        </>
                      )}
                    </button>
                  ) : isClaimed ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Reward Paid via PayPal</span>
                    </span>
                  ) : isRecruiting ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-sky-50 text-sky-800 font-mono text-xs font-medium border border-sky-200">
                      <span>Recruiting Testers</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-200/80 text-slate-700 font-mono text-xs font-medium">
                      <span>In Progress ({bounty.currentRetentionDays}/14 Days)</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Google Play Policy Safeguard Notice */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed text-[11px] text-amber-900">
          <strong>Google Play Developer Policy Disclosure:</strong> Cash bounties are funded by participating developers exclusively to compensate testers for their time evaluating stability, reporting bugs, and maintaining authentic 14-day device retention. <strong>Public Google Play 5-star ratings or reviews are strictly un-incentivized.</strong>
        </p>
      </div>
    </div>
  );
}
