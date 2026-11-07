'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, LogOut, Trophy, Award, Calendar, Sparkles } from 'lucide-react';
import { UserAuthDetails } from '@/app/actions/auth';
import { signOutClient } from '@/lib/supabase/auth';

interface ProfileCardProps {
  user: UserAuthDetails;
  stats: {
    totalPoints: number;
    badgesCount: number;
    unlockedAppsCount: number;
    promoCodesCount: number;
    level: number;
    levelTitle: string;
  };
}

export function ProfileCard({ user, stats }: ProfileCardProps) {
  const initials = user.fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const formattedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  // Calculate level progress (e.g., target 1000 pts for level 4)
  const nextLevelThreshold = stats.level === 1 ? 300 : stats.level === 2 ? 600 : stats.level === 3 ? 1000 : 1500;
  const progressPercent = Math.min(100, Math.round((stats.totalPoints / nextLevelThreshold) * 100));

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-500/10 via-sky-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        {/* User Identity info */}
        <div className="flex items-center gap-5">
          {user.avatarUrl ? (
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-md shrink-0 bg-slate-100">
              <Image
                src={user.avatarUrl}
                alt={user.fullName}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-md shrink-0">
              {initials}
            </div>
          )}

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                {user.fullName}
              </h1>
              {user.isGoogleVerified && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-mono font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Verified</span>
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm font-mono text-slate-600">{user.email}</p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-0.5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Member since {formattedDate}
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Level {stats.level}: {stats.levelTitle}
              </span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => signOutClient()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-rose-50 hover:border-rose-200 text-slate-700 hover:text-rose-700 text-xs font-mono font-semibold transition cursor-pointer shadow-2xs"
          >
            <LogOut className="w-4 h-4 text-rose-600" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Gamification Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 text-xs">
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block font-mono text-[11px] mb-1 uppercase tracking-wider">
            Total Points
          </span>
          <span className="text-xl font-extrabold text-slate-950 font-mono">
            {stats.totalPoints} <span className="text-xs text-emerald-600 font-sans font-bold">XP</span>
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block font-mono text-[11px] mb-1 uppercase tracking-wider">
            Earned Badges
          </span>
          <span className="text-xl font-extrabold text-sky-700 font-mono flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-sky-600" />
            {stats.badgesCount}
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block font-mono text-[11px] mb-1 uppercase tracking-wider">
            Active App Cohorts
          </span>
          <span className="text-xl font-extrabold text-violet-700 font-mono">
            {stats.unlockedAppsCount}
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-500 block font-mono text-[11px] mb-1 uppercase tracking-wider">
            Unlocked Promo Codes
          </span>
          <span className="text-xl font-extrabold text-emerald-700 font-mono">
            {stats.promoCodesCount}
          </span>
        </div>
      </div>

      {/* Level Progress Bar */}
      <div className="mt-4 pt-2 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Rank Progression: {stats.levelTitle}</span>
          <span>{stats.totalPoints} / {nextLevelThreshold} XP ({progressPercent}%)</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 rounded-full transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
