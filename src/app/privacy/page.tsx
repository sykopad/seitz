import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | POPIA & GDPR Compliance | Seitz.co.za',
  description:
    'Privacy Policy for Seitz.co.za and The Seitz Testing Lab. Learn how we handle developer inquiries, client intellectual property, and tester device telemetry under South African POPIA and international standards.',
};

export default function PrivacyPolicyPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>POPIA & GDPR Compliant</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Privacy Policy & Data Protection
            </h1>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              This Privacy Policy details how Muhammed Faiz Seitz (operating as <strong>Seitz</strong>, <strong>seitz.co.za</strong>, and <strong>The Seitz Testing Lab</strong>) collects, processes, and protects your information in compliance with South Africa’s Protection of Personal Information Act (POPIA) and global data privacy standards.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-8 text-xs sm:text-sm text-white/80 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  1
                </span>
                Information We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li>
                  <strong>Client & Inquirer Data:</strong> Name, business email, organization, project scoping briefs, budget parameters, and payment preferences submitted through our contact or client intake forms.
                </li>
                <li>
                  <strong>Tester Community Data:</strong> Full name / alias, Google Play account email (required to authorize closed testing tracks), primary Android device model, Android OS version, and optional feedback ratings.
                </li>
                <li>
                  <strong>Client App Telemetry:</strong> Package name, closed track opt-in links, test credentials (if provided), and non-proprietary diagnostic logs.
                </li>
                <li>
                  <strong>Technical Metadata:</strong> IP address hashes, browser user agent, and basic session cookies used solely for rate limiting and duplicate vote prevention.
                </li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  2
                </span>
                How We Use Your Information
              </h2>
              <p className="text-white/70">
                We strictly process data for legitimate engineering and testing purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/70">
                <li>Authorizing device access via Google Play Console closed tracks and our master Google Group (<code>seitz@googlegroups.com</code>).</li>
                <li>Delivering lifetime promotional unlock codes and bug bounty recognitions to verified testers.</li>
                <li>Communicating project scoping milestones, contracts, and testing progress reports to clients.</li>
                <li>Preventing malicious automated bot voting on our Community Prioritization pipeline.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  3
                </span>
                We Never Sell or Rent Your Data
              </h2>
              <p className="text-white/70">
                We do not sell, rent, monetize, or broker personal information to data brokers, ad networks, or external marketing entities under any circumstances. Tester emails are shared only with the respective Google Play Console closed track authorized for the test.
              </p>
            </section>

            <section className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  4
                </span>
                POPIA & GDPR Data Subject Rights
              </h2>
              <p className="text-white/70">
                Under POPIA and international data protection regulations, you hold the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-white/70">
                <li>Request confirmation of whether we hold your personal records.</li>
                <li>Request rectification or deletion of inaccurate, irrelevant, or obsolete records.</li>
                <li>Unsubscribe from the Seitz Testing Lab or revoke closed track opt-in authorization at any time.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-white/5 pt-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs">
                  5
                </span>
                Contact & Information Officer
              </h2>
              <p className="text-white/70">
                For data access requests, deletion notices, or inquiries regarding our information practices, contact:
              </p>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-white/90 space-y-1">
                <span className="block font-bold text-emerald-400">Muhammed Faiz Seitz</span>
                <span>Email: <a href="mailto:byseitz.agency@gmail.com" className="text-sky-300 hover:underline">byseitz.agency@gmail.com</a></span><br />
                <span>Johannesburg, South Africa</span>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
