import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Trash2, ShieldCheck, HelpCircle, Mail, MapPin } from 'lucide-react';
import { Footer } from '@/components/shared/Footer';
import { DeletionRequestForm } from '@/components/legal/DeletionRequestForm';

export const metadata: Metadata = {
  title: 'App Account & Data Deletion Request | Google Play Data Safety | Seitz.co.za',
  description:
    'Official Google Play account and data deletion request portal for all applications developed by Muhammed Faiz Seitz. Request account deletion without reinstalling the app.',
  openGraph: {
    title: 'App Account & Data Deletion Portal | Seitz.co.za',
    description:
      'Submit an official account erasure request for Clean and Clean, The Seitz Testing Lab, or any Seitz mobile application.',
    url: 'https://seitz.co.za/delete-account',
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-rose-500/20 selection:text-rose-950">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl sticky top-0 z-40 shadow-xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-slate-950 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="text-xs font-mono text-slate-600 hover:text-slate-950 transition"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/terms"
                className="text-xs font-mono text-slate-600 hover:text-slate-950 transition"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10">
          {/* Top Title Banner */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-300 text-rose-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <Trash2 className="w-3.5 h-3.5 text-rose-600" />
              <span>Google Play App Account Deletion Resource (2026 Policy Standard)</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight">
              Account &amp; Data Deletion Request
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              In accordance with the <strong>Google Play Data Safety Policy</strong> and <strong>South Africa&apos;s POPIA Act</strong>, this page provides a direct mechanism to request permanent deletion of your app account and all associated personal records.
            </p>
          </div>

          {/* Interactive Form Component */}
          <DeletionRequestForm />

          {/* Explanatory FAQ & Policy Disclosures */}
          <div className="studio-card rounded-2xl p-6 sm:p-8 border border-slate-200 bg-white shadow-xs space-y-6 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2 text-slate-950 font-display font-bold text-base border-b border-slate-200 pb-3">
              <HelpCircle className="w-4 h-4 text-sky-600" />
              <span>Frequently Asked Questions About Account Deletion</span>
            </div>

            <div className="space-y-4">
              <div>
                <strong className="text-slate-950 block font-display mb-1">
                  Do I need to reinstall the app to delete my account?
                </strong>
                <p className="text-slate-600 leading-relaxed text-xs">
                  No. Google Play policy strictly mandates that account deletion must be accessible on the web without requiring the user to reinstall or reopen the mobile application. Submitting the form above is sufficient.
                </p>
              </div>

              <div>
                <strong className="text-slate-950 block font-display mb-1">
                  How long does the deletion process take?
                </strong>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Requests are verified against our Supabase Auth and database tables, and all personal identifiers, uploaded media, and location coordinates are permanently purged within <strong>30 calendar days</strong>.
                </p>
              </div>

              <div>
                <strong className="text-slate-950 block font-display mb-1">
                  What happens to my closed testing rewards or leaderboard scores?
                </strong>
                <p className="text-slate-600 leading-relaxed text-xs">
                  If you request deletion of your beta testing enrollment, your device model association and email are removed from our active Google Group and Supabase database. Any unused promo codes linked to that specific email may be forfeited.
                </p>
              </div>

              <div>
                <strong className="text-slate-950 block font-display mb-1">
                  What data may be retained?
                </strong>
                <p className="text-slate-600 leading-relaxed text-xs">
                  We retain only aggregated, non-identifiable telemetry (e.g. total number of cleaned bags across a municipality without user identifiers) or statutory commercial invoicing records required by South African revenue law.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
              <span className="text-slate-500 block uppercase tracking-wider text-[10px]">
                Direct Compliance Contact:
              </span>
              <span className="text-slate-950 font-bold block">Muhammed Faiz Seitz (Information Officer)</span>
              <span className="text-sky-700 block font-semibold">Email: byseitz.agency@gmail.com</span>
              <span className="text-slate-600 block">Durban, KwaZulu-Natal, Republic of South Africa</span>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
