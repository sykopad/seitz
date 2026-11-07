'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Smartphone } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 'civic-mapping',
      code: 'CASE // 01',
      title: 'High-Performance Civic Mapping & Incident Verification Platform',
      tagline: 'Clean and Clean & Visita Geospatial Systems',
      category: 'Civic & Geospatial',
      challenge:
        'Build a localized reporting system requiring real-time geolocation mapping, secure image submission, and zero-latency mobile rendering across low-bandwidth environments.',
      solution:
        'Engineered a lightweight serverless web platform with custom Mapbox GL superclustering, Supabase PostGIS spatial indices, and automated municipal ward issue triage.',
      impact:
        'Sub-second initial page loads, streamlined community verification, and near-zero infrastructure overhead.',
      tags: ['Next.js 16', 'Mapbox GL', 'Supabase', 'PostGIS', 'Supercluster'],
      liveUrl: '/apps/cleanandclean',
      externalUrl: 'https://cleanandclean.co.za',
    },
    {
      id: 'apify-extraction',
      code: 'CASE // 02',
      title: 'Resilient Dynamic Content Extraction & Monitoring Actor Suite',
      tagline: 'Autonomous Headless Web Scraping Cluster (37 Production Actors)',
      category: 'Automation & Data Pipelines',
      challenge:
        'Extract continuous, structured product and market intelligence from dynamic single-page web applications protected by aggressive anti-bot mitigations.',
      solution:
        'Architected a resilient Apify cloud crawler suite using smart session rotation, headless Playwright browser orchestration, and direct PostgreSQL export pipelines.',
      impact:
        '99.8% extraction reliability across automated daily runs, replacing manual workflows with real-time automated data streams.',
      tags: ['Playwright', 'Apify SDK', 'Crawlee', 'Proxy Rotation', 'PostgreSQL'],
      liveUrl: '#contact',
      externalUrl: 'https://apify.com',
    },
    {
      id: 'google-play-closed-testing',
      code: 'CASE // 03',
      title: 'Multi-App Android Ecosystem & Closed-Track Compliance Engine',
      tagline: 'Mzansi Midnight, OmniRemote & 15-Tester Verification Lab',
      category: 'Mobile Engineering & QA',
      challenge:
        'Clear Google Play’s strict 12-tester, 14-day continuous closed-testing verification barrier reliably across utility apps and narrative RPG builds.',
      solution:
        'Built native-grade mobile experiences and orchestrated a verified pool of 73+ human Android testers through our dedicated Testing Lab with automated 14-day retention tracking.',
      impact:
        'Seamless transition from closed beta to full production readiness with zero cohort churn and 100% policy compliance.',
      tags: ['Android', 'Play Console', 'Google Groups Sync', 'Closed Testing', 'Supabase'],
      liveUrl: '/apps/mzansi-midnight',
      externalUrl: '/testers',
    },
  ];

  const featuredShowcaseApps = [
    {
      slug: 'mzansi-midnight',
      name: 'Mzansi Midnight',
      category: 'Noir RPG Anthology',
      status: 'Closed Beta (11/15)',
      icon: '/images/projects/mzansi-midnight/icon.png',
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      slug: 'cleanandclean',
      name: 'Clean and Clean',
      category: 'Civic GIS Platform',
      status: 'Closed Beta (9/15)',
      icon: '/images/projects/cleanandclean-icon.png',
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      slug: 'omniremote',
      name: 'OmniRemote',
      category: 'Universal Smart TV Remote',
      status: 'Closed Beta (10/15)',
      icon: '/images/projects/omniremote/icon.png',
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      slug: 'would-you-rather',
      name: 'Would You Rather',
      category: 'Party Game & Dilemmas',
      status: 'Closed Beta (8/15)',
      icon: '/images/projects/would-you-rather/icon.png',
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      slug: 'decolonize',
      name: 'Decolonize: South Africa',
      category: 'Strategy & Economic Sim',
      status: 'Community Voting',
      icon: '/images/projects/decolonize-icon.svg',
      accent: 'text-amber-700 bg-amber-50 border-amber-200',
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
          Proof of Engineering
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight mb-4">
          Selected Solutions &amp; Architectural Dossiers
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Demonstrated production capability across civic GIS mapping, headless web automation clusters, and Google Play Android launches.
        </p>
      </div>

      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            className="studio-card rounded-2xl p-6 sm:p-9 bg-white border border-slate-200 hover:border-slate-300 transition-all overflow-hidden shadow-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-sky-700 font-semibold px-3 py-0.5 rounded-full bg-sky-50 border border-sky-200">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cs.code}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 tracking-tight leading-snug">
                  {cs.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700 font-mono font-medium">{cs.tagline}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-mono text-amber-700 uppercase tracking-wider font-bold block">
                      01 // The Challenge
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-mono text-sky-700 uppercase tracking-wider font-bold block">
                      02 // Architectural Solution
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start sm:items-center gap-2.5 text-xs text-emerald-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                    <span>
                      <strong className="text-emerald-800 font-mono uppercase tracking-wider mr-1.5 font-bold">
                        Measured Telemetry:
                      </strong>
                      {cs.impact}
                    </span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action column */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    Deployment Status
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-display font-bold text-slate-900">
                      Verified Production System
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Link
                    href={cs.liveUrl}
                    className="w-full py-3 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 font-display font-bold text-xs text-center flex items-center justify-center gap-2 transition group"
                  >
                    <span>Inspect Architecture Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  {cs.externalUrl && (
                    <a
                      href={cs.externalUrl}
                      target={cs.externalUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 font-mono text-xs text-center flex items-center justify-center gap-1.5 transition"
                    >
                      <span>Open Live Portal</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive App Ecosystem Strip Linking to /apps/[slug] */}
      <div className="mt-12 studio-panel rounded-2xl p-6 sm:p-8 border border-slate-200 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-1">
              Live Product Roster • 10 In-House Builds
            </span>
            <h3 className="font-display text-xl font-bold text-slate-950">
              Explore Dedicated App &amp; Game Architecture Pages
            </h3>
          </div>
          <Link
            href="/testers"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-800 hover:text-emerald-950 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 transition shrink-0 font-semibold"
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>View Full 10-App Roster (/testers) →</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {featuredShowcaseApps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 transition group flex items-center gap-3.5 shadow-2xs"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-white shrink-0">
                <Image src={app.icon} alt={app.name} fill className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-sky-700 transition truncate">
                    {app.name}
                  </h4>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 shrink-0" />
                </div>
                <p className="text-[11px] text-slate-500 truncate">{app.category}</p>
                <span
                  className={`inline-block mt-1 text-[10px] font-mono px-2 py-0.2 rounded border font-medium ${app.accent}`}
                >
                  {app.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
