import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Freelance Contracts & Testing Lab SLAs | Seitz.co.za',
  description:
    'Terms of Service governing custom software engineering, Apify data pipelines, and Google Play closed testing services provided by Seitz.co.za.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-[#f8fafc] relative selection:bg-emerald-400 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-75 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="border-b border-white/10 bg-black/60 backdrop-blur-xl sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-emerald-400 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <span className="text-xs font-mono text-white/40">Effective: November 2026</span>
          </div>
        </header>

        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Commercial Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Terms of Service & Engineering SLAs
            </h1>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              These Terms of Service govern all professional engineering services, Apify web scraping pipelines, and Google Play Closed Testing Fast-Track cohorts provided by Muhammed Faiz Seitz (<strong>Seitz</strong>).
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-8 text-xs sm:text-sm text-white/80 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  1
                </span>
                Freelance & Development Engagements
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li>
                  <strong>Milestone-Based Execution:</strong> All custom web and mobile projects proceed through defined milestone phases. Work commences upon escrow deposit (Upwork, Fiverr) or agreed upfront milestone invoice.
                </li>
                <li>
                  <strong>Intellectual Property:</strong> Upon final milestone payment, 100% of all custom source code, assets, repository rights, and deployment credentials transfer completely and irrevocably to the client.
                </li>
                <li>
                  <strong>Warranty Period:</strong> We provide a complimentary 14 to 30-day post-launch warranty on all turnkey builds to resolve bugs, unexpected browser discrepancies, or environment misconfigurations.
                </li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  2
                </span>
                Google Play 12-Tester Fast-Track Service SLAs
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li>
                  <strong>Human Device Commitment:</strong> We commit to deploying 15 real Android devices (exceeding Google’s 12-tester minimum by 3 reserve devices) with guaranteed continuous retention across the 14-day testing window.
                </li>
                <li>
                  <strong>Free Rerun Guarantee:</strong> If Google Play requests an extended closed testing period due to cohort timing or reviewer discretion, we will run a second 14-day cohort at zero additional charge.
                </li>
                <li>
                  <strong>Code & Compliance Boundary:</strong> Our service guarantees authentic human tester retention, crash feedback, and production questionnaire preparation. We do not and cannot guarantee store approval for applications with fatal crashes, trademark infringements, policy-violating content, or unauthorized permissions.
                </li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  3
                </span>
                Strict Anti-Incentive Policy Compliance
              </h2>
              <p className="text-white/70">
                In strict adherence to Google Play Developer Program Policies:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/70">
                <li>Our testers provide honest private evaluation, bug reports, and crash telemetry through closed track channels.</li>
                <li>We do not sell, solicit, or require public 5-star ratings or reviews on the Google Play Store.</li>
                <li>Client rewards (e.g. lifetime licenses) are provided solely for continuous beta installation and functional evaluation, not conditioned on sentiment.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs">
                  4
                </span>
                Governing Law & Disputes
              </h2>
              <p className="text-white/70">
                For direct engagements, these terms are governed by the laws of the Republic of South Africa. Engagements brokered through Upwork or Fiverr Pro are additionally subject to the dispute resolution and escrow frameworks of their respective platforms.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
