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
      liveUrl: '/apps/clean-and-clean',
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
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    },
    {
      slug: 'clean-and-clean',
      name: 'Clean and Clean',
      category: 'Civic GIS Platform',
      status: 'Closed Beta (9/15)',
      icon: '/images/projects/cleanandclean-icon.png',
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    },
    {
      slug: 'omniremote',
      name: 'OmniRemote',
      category: 'Universal Smart TV Remote',
      status: 'Closed Beta (10/15)',
      icon: '/images/projects/omniremote/icon.png',
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    },
    {
      slug: 'decolonize',
      name: 'Decolonize: South Africa',
      category: 'Strategy & Economic Sim',
      status: 'Community Voting',
      icon: '/images/projects/decolonize-icon.svg',
      accent: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4">
          Proof of Engineering
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Selected Solutions & Architectural Dossiers
        </h2>
        <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed">
          Demonstrated production capability across civic GIS mapping, headless web automation clusters, and Google Play Android launches.
        </p>
      </div>

      <div className="space-y-6">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            className="studio-card rounded-2xl p-6 sm:p-9 border border-white/10 transition-all overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-sky-300 font-semibold px-3 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cs.code}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {cs.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono">{cs.tagline}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold block">
                      01 // The Challenge
                    </span>
                    <p className="text-xs text-slate-300/85 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5">
                    <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold block">
                      02 // Architectural Solution
                    </span>
                    <p className="text-xs text-slate-300/85 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-3.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 flex items-start sm:items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                    <span>
                      <strong className="text-emerald-300 font-mono uppercase tracking-wider mr-1.5">
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
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.07]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action column */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Deployment Status
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-display font-bold text-white">
                      Verified Production System
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Link
                    href={cs.liveUrl}
                    className="w-full py-3 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 font-display font-bold text-xs text-center flex items-center justify-center gap-2 transition group"
                  >
                    <span>Inspect Architecture Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  {cs.externalUrl && (
                    <a
                      href={cs.externalUrl}
                      target={cs.externalUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white font-mono text-xs text-center flex items-center justify-center gap-1.5 transition"
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
      <div className="mt-12 studio-panel rounded-2xl p-6 sm:p-8 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
              Live Product Roster • 10 In-House Builds
            </span>
            <h3 className="font-display text-xl font-bold text-white">
              Explore Dedicated App & Game Architecture Pages
            </h3>
          </div>
          <Link
            href="/testers"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 px-3.5 py-2 rounded-xl border border-emerald-500/25 transition shrink-0"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>View Full 10-App Roster (/testers) →</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredShowcaseApps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="p-4 rounded-xl bg-black/40 hover:bg-white/[0.05] border border-white/[0.08] hover:border-sky-500/35 transition group flex items-center gap-3.5"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/15 bg-black shrink-0">
                <Image src={app.icon} alt={app.name} fill className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-sky-300 transition truncate">
                    {app.name}
                  </h4>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white shrink-0" />
                </div>
                <p className="text-[11px] text-slate-400 truncate">{app.category}</p>
                <span
                  className={`inline-block mt-1 text-[10px] font-mono px-2 py-0.2 rounded border ${app.accent}`}
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
