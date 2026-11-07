import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Trophy } from 'lucide-react';
import { TesterNavbar } from '@/components/testers/TesterNavbar';
import { TesterLeaderboard } from '@/components/testers/TesterLeaderboard';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Tester Leaderboard & Reward Redemption | Seitz Testing Lab',
  description:
    'Community leaderboard for top Android bug hunters, retention streaks, and instant promo code claiming for verified Seitz closed beta testers.',
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-[#f8fafc] relative selection:bg-emerald-400 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-75 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <TesterNavbar />

        <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
          <div className="flex items-center justify-between">
            <Link
              href="/testers"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-emerald-400 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Testing Lab Overview</span>
            </Link>

            <span className="text-xs font-mono text-white/40">Updated Rolling Cohort</span>
          </div>

          <TesterLeaderboard />
        </main>

        <Footer />
      </div>
    </div>
  );
}
