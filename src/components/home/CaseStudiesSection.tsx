import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, MapPin, Database, Smartphone, Globe } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 'civic-mapping',
      title: 'High-Performance Civic Mapping & Incident Verification Platform',
      tagline: 'Clean and Clean & Visita Geospatial Systems',
      category: 'Civic & Geospatial',
      image: '/images/projects/cleanandclean-icon.png',
      isIcon: true,
      challenge:
        'Build a localized reporting system requiring real-time geolocation mapping, secure image submission, and zero-latency mobile rendering across low-bandwidth environments.',
      solution:
        'Engineered a lightweight serverless web platform with custom Mapbox GL superclustering, Supabase PostGIS spatial indices, and automated municipal ward issue triage.',
      impact:
        'Sub-second initial page loads, streamlined community verification, and near-zero infrastructure overhead.',
      tags: ['Next.js', 'Mapbox GL', 'Supabase', 'PostGIS', 'Supercluster'],
      liveUrl: 'https://cleanandclean.co.za',
    },
    {
      id: 'apify-extraction',
      title: 'Resilient Dynamic Content Extraction & Monitoring Actor',
      tagline: 'Autonomous Headless Web Scraping Suite',
      category: 'Automation & Data Pipelines',
      challenge:
        'Extract continuous, structured product and market intelligence from dynamic single-page web applications with aggressive bot mitigations.',
      solution:
        'Architected a resilient Apify cloud crawler using smart session rotation, headless Playwright browser orchestration, and direct PostgreSQL export pipelines.',
      impact:
        '99.8% extraction reliability across automated daily runs, replacing manual workflows with real-time automated data streams.',
      tags: ['Playwright', 'Apify SDK', 'Crawlee', 'Proxy Rotation', 'PostgreSQL'],
      liveUrl: 'https://apify.com',
    },
    {
      id: 'google-play-closed-testing',
      title: 'Google Play Mobile Utility with Closed-Track Verification',
      tagline: 'Store-Ready Android Release Management',
      category: 'Mobile Engineering',
      image: '/images/projects/shayapay-hero.png',
      challenge:
        'Clear Google Play’s strict 12-tester, 14-day continuous closed-testing verification barrier for a new personal developer account.',
      solution:
        'Designed mobile utility screens, in-app billing logic, and orchestrated a verified cohort of 15 human Android testers through our dedicated testing hub with daily check-ins.',
      impact:
        'Seamless transition from closed beta to full production approval on the first review cycle with zero uninstalls.',
      tags: ['Android', 'Play Console', 'Google Groups', 'Closed Testing', 'Supabase'],
      liveUrl: '/testers',
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
          Proof of Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Selected Solutions & Architectural Case Studies
        </h2>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
          Demonstrated technical capability across civic GIS mapping, headless web automation clusters, and Google Play Android production launches.
        </p>
      </div>

      <div className="space-y-8">
        {caseStudies.map((cs, idx) => (
          <div
            key={cs.id}
            className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-sky-400 font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-white/40">Case Study 0{idx + 1}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {cs.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono">{cs.tagline}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-amber-400/90 uppercase tracking-wider font-semibold">
                      The Challenge
                    </span>
                    <p className="text-xs text-white/70 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[11px] font-mono text-sky-400/90 uppercase tracking-wider font-semibold">
                      The Solution
                    </span>
                    <p className="text-xs text-white/70 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      <strong className="text-emerald-400">Measured Impact:</strong> {cs.impact}
                    </span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action column */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-white/40 uppercase">Deployment Status</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-semibold text-white">Live in Production</span>
                  </div>
                </div>

                <a
                  href={cs.liveUrl}
                  target={cs.liveUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 transition group"
                >
                  <span>Explore Implementation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
