'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShieldCheck, Gift, Award, Smartphone, Loader2 } from 'lucide-react';
import { signInWithGoogle } from '@/lib/supabase/auth';
import { Footer } from '@/components/shared/Footer';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithGoogle('/account');
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-emerald-500/20 selection:text-emerald-950 flex flex-col justify-between">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Header */}
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl sticky top-0 z-40 shadow-xs relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-slate-950 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Seitz</span>
          </Link>

          <Link href="/" className="flex items-center">
            <Image
              src="/images/seitz-logo.png"
              alt="Seitz"
              width={100}
              height={44}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Google Identity SSO</span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Sign In to Seitz Lab
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Authenticate with your Google Account to access your closed-track beta apps, unlocked lifetime promo codes, and tester achievement badges.
            </p>
          </div>

          {/* Google SSO Action Button */}
          <div className="space-y-4 relative z-10">
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 text-slate-900 font-display font-bold text-sm flex items-center justify-center gap-3 transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-slate-600" />
                  <span>Redirecting to Google...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </button>

            <span className="text-[11px] font-mono text-slate-500 block text-center">
              Requires the Google email enrolled in closed beta cohorts.
            </span>
          </div>

          {/* Value Props Checklist */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-700 relative z-10">
            <span className="font-mono uppercase tracking-wider text-[10px] text-slate-500 font-bold block">
              What you unlock in your account:
            </span>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Personal 23-char Google Play Promo Code Vault</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Earned Tester Badges &amp; Gamification Points</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-violet-600 shrink-0" />
              <span>14-Day Continuous Retention Tracking</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
