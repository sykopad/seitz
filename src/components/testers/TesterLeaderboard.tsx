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

export function TesterLeaderboard() {
  const [email, setEmail] = useState('');
  const [selectedApp, setSelectedApp] = useState('mzansi-midnight');
  const [loading, setLoading] = useState(false);
  const [claimResult, setClaimResult] = useState<{
    success: boolean;
    message: string;
    code?: string;
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
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-emerald-500/30 bg-emerald-950/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <Gift className="w-4 h-4" />
              <span>Tester Reward Redemption Portal</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Claim Your Free Lifetime Unlock Code
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Enter your registered Google Play tester email to generate and retrieve your official promo code.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
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
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={selectedApp}
              onChange={(e) => setSelectedApp(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
            >
              {appsCatalog.map((app) => (
                <option key={app.slug} value={app.slug} className="bg-black text-white">
                  {app.name} ({app.status === 'closed_testing' ? 'Active Beta' : 'Pipeline'})
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-md shadow-emerald-500/20 disabled:opacity-50 cursor-pointer h-full"
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
            className={`p-5 rounded-2xl border text-xs sm:text-sm space-y-3 ${
              claimResult.success
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}
          >
            <p className="leading-relaxed">{claimResult.message}</p>
            {claimResult.code && (
              <div className="flex items-center gap-3 pt-1">
                <div className="px-4 py-2 rounded-xl bg-black border border-emerald-500/50 font-mono font-black text-base text-white tracking-widest">
                  {claimResult.code}
                </div>
                <button
                  onClick={() => copyCode(claimResult.code!)}
                  className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1.5 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Promo Code</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Leaderboard Table */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <Trophy className="w-4 h-4" />
              <span>Community Honor Roll</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Top Bug Hunters & Retention Leaders
            </h3>
            <p className="text-xs sm:text-sm text-white/60">
              Recognizing community members who consistently report verified edge-case crashes, memory leaks, and UI glitches.
            </p>
          </div>

          <div className="text-xs font-mono text-white/50">
            Pool Size: <span className="text-white font-bold">73+ Human Devices</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-white/50 font-mono uppercase tracking-wider">
                <th className="py-3 px-3">Rank</th>
                <th className="py-3 px-4">Tester Alias</th>
                <th className="py-3 px-4">Device & OS</th>
                <th className="py-3 px-4">Retention Streak</th>
                <th className="py-3 px-4 text-center">Verified Bugs</th>
                <th className="py-3 px-4">Badges & Honors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {topTesters.map((t) => (
                <tr key={t.rank} className="hover:bg-white/[0.02] transition">
                  <td className="py-4 px-3 font-mono font-bold">
                    <span
                      className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${
                        t.rank === 1
                          ? 'bg-amber-500 text-black font-extrabold'
                          : t.rank === 2
                          ? 'bg-slate-300 text-black font-bold'
                          : t.rank === 3
                          ? 'bg-amber-700 text-white font-bold'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {t.rank}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-bold text-white text-sm">{t.alias}</td>
                  <td className="py-4 px-4 text-white/70 font-mono text-[11px]">{t.device}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {t.retentionStreak}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-sky-400 text-sm">
                    {t.verifiedBugs}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1.5">
                      {t.badges.map((b, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/80"
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
