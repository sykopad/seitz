'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, AlertTriangle, ExternalLink } from 'lucide-react';
import { ProfileCard } from '@/components/account/ProfileCard';
import { AccountTabs } from '@/components/account/AccountTabs';
import { BadgesGrid } from '@/components/account/BadgesGrid';
import { UnlockedAppsList } from '@/components/account/UnlockedAppsList';
import { PromoVault } from '@/components/account/PromoVault';
import { UserAccountSummary } from '@/app/actions/account';

interface AccountDashboardClientProps {
  summary: UserAccountSummary;
}

export function AccountDashboardClient({ summary }: AccountDashboardClientProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-8">
      {/* Top Breadcrumb & Status */}
      <div className="flex items-center justify-between text-xs font-mono">
        <Link
          href="/testers"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Testing Lab</span>
        </Link>

        <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
          Active Tester Session
        </span>
      </div>

      {/* Main Profile & Level Card */}
      <ProfileCard user={summary.user} stats={summary.stats} />

      {/* Navigation Tabs */}
      <AccountTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        unlockedAppsCount={summary.stats.unlockedAppsCount}
        promoCodesCount={summary.stats.promoCodesCount}
        badgesCount={summary.stats.badgesCount}
      />

      {/* Tab Panels */}
      {activeTab === 'overview' && (
        <div className="space-y-10">
          <PromoVault promoCodes={summary.promoCodes} />
          <UnlockedAppsList unlockedApps={summary.unlockedApps} />
          <BadgesGrid badges={summary.badges} />
        </div>
      )}

      {activeTab === 'apps' && (
        <UnlockedAppsList unlockedApps={summary.unlockedApps} />
      )}

      {activeTab === 'vault' && (
        <PromoVault promoCodes={summary.promoCodes} />
      )}

      {activeTab === 'badges' && (
        <BadgesGrid badges={summary.badges} />
      )}

      {/* Data Management & Google Play Privacy */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div className="space-y-0.5">
          <span className="font-display font-bold text-slate-950 block">
            Google Play Data Safety &amp; Account Control
          </span>
          <p className="text-slate-600">
            You can export your testing telemetry or permanently delete your account at any time.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/delete-account"
            className="text-rose-700 hover:text-rose-800 underline font-mono font-semibold"
          >
            Request Data Deletion
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/privacy"
            className="text-slate-600 hover:text-slate-900 underline font-mono"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
