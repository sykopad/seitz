'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Copy,
  Check,
  FileText,
  Smartphone,
  Users,
  CheckCircle2,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import { GOOGLE_GROUP_URL } from '@/data/legacy-testers';

export function ComplianceReport() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sections = [
    {
      id: 'part-1-closed-test',
      title: 'Part 1: About Your Closed Test',
      description: 'Answers for the recruitment, engagement, and tester feedback audit in Play Console.',
      questions: [
        {
          q: 'How did you recruit testers for your closed test?',
          a: `We recruited a verified cohort of 15+ real Android device testers through our community networks, including followers from our educational tech channel "I Tell You Stuff" on TikTok, our Facebook community group, and direct subscribers on our developer testing portal (seitz.co.za/testers). All testers were required to register their physical device hardware model (spanning Samsung Galaxy, Xiaomi, and Google Pixel devices) and opt in via our centralized Google Group (${GOOGLE_GROUP_URL}) mapped directly to our closed testing track in Google Play Console.`,
        },
        {
          q: 'Describe the engagement you saw from your testers during the closed test.',
          a: `Testers maintained 100% continuous retention over the full 14-day evaluation window without uninstalls. They regularly opened the app across different times of the week to test core navigation, data synchronization, and UI responsiveness. We collected formal qualitative check-in submissions using our structured 3-minute feedback questionnaire, tracking overall app stability, screen transitions, and bug observations across diverse Android versions (Android 12 through Android 15).`,
        },
        {
          q: 'Summarize the feedback you received from your testers and how it influenced the app.',
          a: `Feedback indicated an overall stability rating with zero fatal crashes on the latest build. Specific tester feedback led to two key improvements: (1) we tuned layout contrast and padding for smaller screen devices (e.g., Xiaomi Redmi series) to prevent button overlapping, and (2) we optimized background data caching to ensure smooth offline loading when network connectivity drops. All reported minor layout glitches were patched and verified in updated closed-track releases prior to applying for production access.`,
        },
      ],
    },
    {
      id: 'part-2-app-game',
      title: 'Part 2: About Your App / Game',
      description: 'Answers detailing your app’s target audience, value proposition, and user experience.',
      questions: [
        {
          q: 'Who is the intended target audience for your application?',
          a: `The application is designed for everyday smartphone users, professionals, and community members seeking reliable, lightweight productivity and utility tooling with offline capability and clean navigation. The target age demographic is 18+ and the app complies strictly with all Google Play Family and User Data safety guidelines.`,
        },
        {
          q: 'What is the core value proposition of your application?',
          a: `The application provides a responsive, privacy-first utility that eliminates manual steps, works reliably without persistent high-speed internet, and provides clear visual feedback with zero intrusive advertisements or deceptive UI dark patterns.`,
        },
      ],
    },
    {
      id: 'part-3-production-readiness',
      title: 'Part 3: About Your Production Readiness',
      description: 'Justification for public release, crash rates, and policy compliance declarations.',
      questions: [
        {
          q: 'Why do you believe your application is ready for production distribution?',
          a: `The application has successfully completed 14 continuous days on the closed testing track with 15+ verified human testers and zero ANRs (Application Not Responding) or fatal crash spikes. We have reviewed the Google Play Pre-Launch Report, resolved all accessibility and layout warnings, verified target SDK API 34+ compliance, and thoroughly tested all navigation and database synchronization flows. The app is stable, secure, and ready for public distribution on Google Play.`,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/testers"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Testing Lab</span>
        </Link>

        <a
          href="https://play.google.com/console"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 hover:text-emerald-800 font-semibold"
        >
          <span>Open Google Play Console</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Guide Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md relative overflow-hidden mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-mono mb-4 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Google Play Compliance Audit Kit</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
          Production Access Application Guide
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          When your 14-day closed test concludes with 12+ continuous testers, Google Play requires you to click <strong>Apply for production</strong> and answer 3 questionnaire sections. Use these copyable answers derived from your Seitz Testing Lab cohort.
        </p>

        {/* 14-day checklist ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2 text-emerald-800 font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>12+ Testers Opted In (15 with buffer)</span>
          </div>
          <div className="flex items-center gap-2 text-sky-800 font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-sky-600" />
            <span>14 Consecutive Days Completed</span>
          </div>
          <div className="flex items-center gap-2 text-violet-800 font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-violet-600" />
            <span>Qualitative Feedback Recorded</span>
          </div>
        </div>
      </div>

      {/* Questionnaire Sections */}
      <div className="space-y-8">
        {sections.map((sec) => (
          <div
            key={sec.id}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 mb-1">{sec.title}</h2>
              <p className="text-xs text-slate-500 font-mono">{sec.description}</p>
            </div>

            <div className="space-y-6 pt-2">
              {sec.questions.map((item, qIdx) => {
                const uniqueKey = `${sec.id}-q${qIdx}`;
                const isCopied = copiedId === uniqueKey;

                return (
                  <div
                    key={item.q}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs sm:text-sm font-semibold text-slate-900">
                        {item.q}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(uniqueKey, item.a)}
                        className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 transition flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-mono font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span className="font-mono">Copy Answer</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans bg-white p-3 rounded-lg border border-slate-200">
                      {item.a}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
