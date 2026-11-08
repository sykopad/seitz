'use client';

import React from 'react';
import { User, Smartphone, Gift, Trophy, DollarSign } from 'lucide-react';

interface AccountTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  unlockedAppsCount: number;
  promoCodesCount: number;
  badgesCount: number;
}

export function AccountTabs({
  activeTab,
  onTabChange,
  unlockedAppsCount,
  promoCodesCount,
  badgesCount,
}: AccountTabsProps) {
  const tabs = [
    {
      id: 'overview',
      name: 'Overview & Profile',
      icon: <User className="w-4 h-4" />,
    },
    {
      id: 'apps',
      name: 'My Closed Beta Apps',
      icon: <Smartphone className="w-4 h-4" />,
      badge: unlockedAppsCount,
    },
    {
      id: 'vault',
      name: 'Promo Codes Vault',
      icon: <Gift className="w-4 h-4" />,
      badge: promoCodesCount,
    },
    {
      id: 'badges',
      name: 'Badges & Trophies',
      icon: <Trophy className="w-4 h-4" />,
      badge: badgesCount,
    },
    {
      id: 'bounties',
      name: 'Cash Rewards ($)',
      icon: <DollarSign className="w-4 h-4 text-emerald-500" />,
      badge: 'PayPal',
    },
  ];

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-xs overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
              isActive
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            {tab.icon}
            <span>{tab.name}</span>
            {tab.badge !== undefined && (
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
