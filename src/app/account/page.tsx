import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShieldCheck, Gift, Award, Smartphone } from 'lucide-react';
import { getUserAccountSummary } from '@/app/actions/account';
import { AccountDashboardClient } from '@/components/account/AccountDashboardClient';
import { Footer } from '@/components/shared/Footer';
import { UserAuthButton } from '@/components/auth/UserAuthButton';

export const metadata: Metadata = {
  title: 'Tester Account & Rewards Hub | Seitz Testing Lab',
  description:
    'Access your verified Google Play closed beta applications, unlocked promo codes and gift cards, and earned tester badges.',
};

export default async function AccountPage() {
  const summary = await getUserAccountSummary();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-emerald-500/20 selection:text-emerald-950 flex flex-col justify-between">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Mini Header */}
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl sticky top-0 z-40 shadow-xs relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/seitz-logo.png"
              alt="Seitz"
              width={100}
              height={44}
              priority
              className="h-8 w-auto object-contain"
            />
            <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-md font-semibold">
              Testing Lab Member Hub
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/testers"
              className="text-xs font-mono text-slate-600 hover:text-slate-950 transition hidden sm:inline"
            >
              /testers
            </Link>
            <UserAuthButton compact={false} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {summary ? (
          <AccountDashboardClient summary={summary} />
        ) : (
          /* Unauthenticated State Notice */
          <div className="max-w-xl mx-auto my-12 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-slate-950 tracking-tight">
                Sign In to View Your Account
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect your Google Account to view your unlocked 23-character Google Play promo codes, track your active 14-day closed beta retention, and see your earned badges.
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <UserAuthButton />
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs text-slate-700">
              <span className="font-mono uppercase tracking-wider text-[10px] text-slate-500 font-bold block">
                Member Hub Privileges:
              </span>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant copyable Google Play promo codes for all tested apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Gamified badge progression &amp; verified tester rank</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-violet-600 shrink-0" />
                <span>1-Click access to closed-track Play Store updates</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
