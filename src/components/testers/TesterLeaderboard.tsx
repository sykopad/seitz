'use client';

import React, { useState } from 'react';
import {
  Trophy,
  Award,
  ShieldCheck,
  Gift,
  CheckCircle2,
  Bug,
  Smartphone,
  Sparkles,
  Search,
  Key,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';
import { appsCatalog } from '@/data/apps-catalog';
import { claimPromoCode } from '@/app/actions/promo';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';

export function TesterLeaderboard() {
  const [email, setEmail] = useState('');
  const [selectedApp, setSelectedApp] = useState('mzansi-midnight');
  const [loading, setLoading] = useState(false);
  const [claimResult, setClaimResult] = useState<{
    success: boolean;
    message: string;
    code?: string;
    redeemUrl?: string;
    isOfficialConsoleCode?: boolean;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Top community contributors & bug hunters
  const topTesters = [
    {
      rank: 1,
      alias: 'Devon G.',
      device: 'Samsung Galaxy S23 Ultra (Android 14)',
      retentionStreak: '28 Days Active',
      verifiedBugs: 7,
      points: 750,
      badges: ['14-Day Veteran', 'Lead Bug Hunter', 'Keystone Detective'],
    },
    {
      rank: 2,
      alias: 'Francois C.',
      device: 'Pixel 7 Pro (Android 15)',
      retentionStreak: '21 Days Active',
      verifiedBugs: 5,
      points: 580,
      badges: ['14-Day Veteran', 'UI Heuristics Scout'],
    },
    {
      rank: 3,
      alias: 'Nadeem M.',
      device: 'Xiaomi Redmi Note 12 (Android 13)',
      retentionStreak: '18 Days Active',
      verifiedBugs: 4,
      points: 490,
      badges: ['14-Day Veteran', 'Ward Champion'],
    },
    {
      rank: 4,
      alias: 'Samira S.',
      device: 'Samsung Galaxy A54 (Android 14)',
      retentionStreak: '16 Days Active',
      verifiedBugs: 3,
      points: 410,
      badges: ['14-Day Veteran', 'Audio Engine Auditor'],
    },
    {
      rank: 5,
      alias: 'Lebogang S.',
      device: 'Motorola Edge 40 (Android 14)',
      retentionStreak: '15 Days Active',
      verifiedBugs: 3,
      points: 390,
      badges: ['14-Day Veteran', 'Beta Scout'],
    },
  ];

  const handleClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setClaimResult(null);

    try {
      const res = await claimPromoCode(email, selectedApp);
      setClaimResult(res);
    } catch {
      setClaimResult({
        success: false,
        message: 'Unable to connect to promo code vault. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Promo Code Claim Widget */}
      <div className="rounded-3xl p-6 sm:p-10 border border-emerald-300 bg-emerald-50/70 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold">
              <Gift className="w-4 h-4 text-emerald-600" />
              <span>Tester Reward Redemption Portal</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              Claim Your Free Lifetime Unlock Code
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Enter your registered Google Play tester email to generate and retrieve your official promo code.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold">
              Google Play Console API Ready
            </span>
          </div>
        </div>

        <form onSubmit={handleClaim} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Google Play email..."
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-emerald-600 shadow-2xs"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={selectedApp}
              onChange={(e) => setSelectedApp(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-emerald-600 shadow-2xs"
            >
              {appsCatalog.map((app) => (
                <option key={app.slug} value={app.slug} className="bg-white text-slate-900">
                  {app.name} ({app.status === 'closed_testing' ? 'Active Beta' : 'Pipeline'})
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm disabled:opacity-50 cursor-pointer h-full"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Key className="w-3.5 h-3.5" />
                  <span>Claim Unlock Code</span>
                </>
              )}
            </button>
          </div>
        </form>

        {claimResult && (
          <div
            className={`p-6 rounded-2xl border text-xs sm:text-sm space-y-4 ${
              claimResult.success
                ? 'bg-white border-emerald-300 text-emerald-950 shadow-xs'
                : 'bg-rose-50 border-rose-200 text-rose-900 shadow-xs'
            }`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{claimResult.message}</span>
            </div>

            {claimResult.code && (
              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono font-black text-lg text-emerald-400 tracking-widest shadow-inner">
                    {claimResult.code}
                  </div>

                  <button
                    onClick={() => copyCode(claimResult.code!)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-mono text-xs flex items-center gap-1.5 transition cursor-pointer font-medium shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Promo Code</span>
                      </>
                    )}
                  </button>

                  <a
                    href={claimResult.redeemUrl || `https://play.google.com/redeem?code=${claimResult.code}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-600 hover:from-emerald-400 hover:to-sky-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition shadow-sm"
                  >
                    <GooglePlayIcon className="w-3.5 h-3.5" />
                    <span>Redeem on Google Play ↗</span>
                  </a>
                </div>

                {/* Play Store redemption instructions */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 space-y-1 font-mono">
                  <span className="text-emerald-700 font-bold block">How to Redeem on Android:</span>
                  <ol className="list-decimal list-inside space-y-0.5 text-slate-600">
                    <li>Open the <strong className="text-slate-900">Google Play Store</strong> app on your Android device.</li>
                    <li>Tap your profile icon at top right &gt; <strong className="text-slate-900">Payments &amp; subscriptions</strong> &gt; <strong className="text-slate-900">Redeem code</strong>.</li>
                    <li>Paste your 23-character code to unlock permanent lifetime license for free.</li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Leaderboard Table */}
      <div className="studio-card rounded-3xl p-6 sm:p-10 bg-white border border-slate-200 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>Community Honor Roll</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              Top Bug Hunters &amp; Retention Leaders
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Recognizing community members who consistently report verified edge-case crashes, memory leaks, and UI glitches.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500">
            Pool Size: <span className="text-slate-900 font-bold">73+ Human Devices</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-mono uppercase tracking-wider">
                <th className="py-3 px-3">Rank</th>
                <th className="py-3 px-4">Tester Alias</th>
                <th className="py-3 px-4">Device &amp; OS</th>
                <th className="py-3 px-4">Retention Streak</th>
                <th className="py-3 px-4 text-center">Verified Bugs</th>
                <th className="py-3 px-4">Badges &amp; Honors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {topTesters.map((t) => (
                <tr key={t.rank} className="hover:bg-slate-50 transition">
                  <td className="py-4 px-3 font-mono font-bold">
                    <span
                      className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${
                        t.rank === 1
                          ? 'bg-amber-400 text-slate-950 font-extrabold shadow-2xs'
                          : t.rank === 2
                          ? 'bg-slate-200 text-slate-800 font-bold'
                          : t.rank === 3
                          ? 'bg-amber-600 text-white font-bold'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {t.rank}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-bold text-slate-900 text-sm">{t.alias}</td>
                  <td className="py-4 px-4 text-slate-600 font-mono text-[11px]">{t.device}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {t.retentionStreak}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-sky-700 text-sm">
                    {t.verifiedBugs}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1.5">
                      {t.badges.map((b, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
