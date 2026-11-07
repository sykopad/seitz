'use client';

import React from 'react';
import {
  ShieldCheck,
  Flame,
  Sparkles,
  Vote,
  Key,
  Smartphone,
  Compass,
  CheckCircle2,
  Lock,
  Trophy,
} from 'lucide-react';
import { UserBadgeProgress } from '@/data/user-badges';

interface BadgesGridProps {
  badges: UserBadgeProgress[];
}

export function BadgesGrid({ badges }: BadgesGridProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Vote':
        return <Vote className="w-5 h-5" />;
      case 'Key':
        return <Key className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <Trophy className="w-5 h-5" />;
    }
  };

  const earnedCount = badges.filter((b) => b.isEarned).length;

  return (
    <section id="badges" className="space-y-4 scroll-mt-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Tester Badges &amp; Achievements</span>
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Earn permanent recognition for real hardware testing, retention streaks, and community contributions.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
          {earnedCount} / {badges.length} Unlocked
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((badge) => {
          return (
            <div
              key={badge.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between relative overflow-hidden ${
                badge.isEarned
                  ? 'bg-white border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md'
                  : 'bg-slate-50/60 border-slate-200/60 opacity-75'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      badge.isEarned
                        ? badge.tier === 'platinum'
                          ? 'bg-violet-100 text-violet-700 border border-violet-200'
                          : badge.tier === 'gold'
                          ? 'bg-amber-100 text-amber-700 border border-amber-200'
                          : badge.tier === 'silver'
                          ? 'bg-sky-100 text-sky-700 border border-sky-200'
                          : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-200 text-slate-400 border border-slate-300'
                    }`}
                  >
                    {getIcon(badge.icon)}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                        badge.isEarned
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-200/80 text-slate-500'
                      }`}
                    >
                      {badge.isEarned ? 'Unlocked' : 'Locked'}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-bold">
                      +{badge.points} XP
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-sm text-slate-950 mb-1 flex items-center gap-1.5">
                  {badge.name}
                  {badge.isEarned && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 inline" />
                  )}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {badge.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="truncate">Requirement:</span>
                  <span className="text-slate-700 font-medium">{badge.progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      badge.isEarned ? 'bg-emerald-500' : 'bg-slate-300'
                    }`}
                    style={{ width: `${badge.progressPercent}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-400 italic line-clamp-1">{badge.criteria}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
