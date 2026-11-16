import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Smartphone,
  Gamepad2,
  Clock,
  Gift,
  Users,
  ShieldCheck,
  Layers,
  Code2,
  Flame,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import {
  AppCatalogItem,
  appsCatalog,
  getAllApps,
  getAllGames,
  getProductDetailHref,
} from '@/data/apps-catalog';
import { AppMediaGallery } from '@/components/apps/AppMediaGallery';
import { AppVoteButton } from '@/components/apps/AppVoteButton';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';
import { Footer } from '@/components/shared/Footer';

interface ProductDetailViewProps {
  app: AppCatalogItem;
  sectionContext?: 'app' | 'game';
}

export function ProductDetailView({ app, sectionContext }: ProductDetailViewProps) {
  const effectiveKind = sectionContext || app.kind;
  const isGame = effectiveKind === 'game';
  const sectionHref = isGame ? '/games' : '/apps';
  const sectionName = isGame ? 'Games' : 'Applications';
  const otherSectionHref = isGame ? '/apps' : '/games';
  const otherSectionName = isGame ? 'Applications' : 'Games';

  const isProduction = app.status === 'production';
  const isClosedTesting = app.status === 'closed_testing';

  const sameSectionPeers = (isGame ? getAllGames() : getAllApps())
    .filter((item) => item.slug !== app.slug)
    .slice(0, 3);
  const otherSectionPeers = (isGame ? getAllApps() : getAllGames()).slice(0, 3);

  const statusBadge = isProduction
    ? {
        label: 'Live on Google Play (Production)',
        pillClass: 'bg-emerald-50 text-emerald-800 border-emerald-300',
        dotClass: 'bg-emerald-500',
      }
    : isClosedTesting
    ? {
        label: 'Closed Beta Track',
        pillClass: 'bg-sky-50 text-sky-800 border-sky-300',
        dotClass: 'bg-sky-500 animate-pulse',
      }
    : {
        label: 'In Development / Voting',
        pillClass: 'bg-amber-50 text-amber-800 border-amber-300',
        dotClass: 'bg-amber-500',
      };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-emerald-500/20 selection:text-emerald-950">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Mini-Navbar */}
        <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl sticky top-0 z-40 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                href={sectionHref}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-700 hover:text-slate-950 font-semibold transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to {sectionName}</span>
              </Link>

              <span className="hidden sm:inline text-slate-300">|</span>

              <Link
                href={otherSectionHref}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 transition"
              >
                {isGame ? (
                  <Smartphone className="w-3.5 h-3.5 text-sky-600" />
                ) : (
                  <Gamepad2 className="w-3.5 h-3.5 text-violet-600" />
                )}
                <span>Browse {otherSectionName}</span>
              </Link>

              <Link
                href="/testers"
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 hover:text-emerald-900 transition"
              >
                <span>Testing Lab</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${statusBadge.pillClass}`}
              >
                <span className={`w-2 h-2 rounded-full ${statusBadge.dotClass}`} />
                {statusBadge.label}
              </span>

              <Link
                href="/"
                className="hidden sm:inline-block text-xs font-mono text-slate-500 hover:text-slate-900 transition"
              >
                seitz.co.za
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
          {/* Breadcrumb */}
          <nav className="text-xs font-mono text-slate-500 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-slate-900 transition">
              Studio
            </Link>
            <span>/</span>
            <Link href={sectionHref} className="hover:text-slate-900 transition">
              {sectionName}
            </Link>
            <span>/</span>
            <span className="text-emerald-700 font-bold">{app.name}</span>
          </nav>

          {/* Hero Header Card */}
          <div className="studio-panel rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="flex items-start gap-6">
                {/* App Icon */}
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white shrink-0">
                  <Image
                    src={app.media.icon}
                    alt={`${app.name} icon`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={sectionHref}
                      className={`text-xs font-mono px-3 py-0.5 rounded-full border font-semibold transition ${
                        isGame
                          ? 'bg-violet-50 border-violet-200 text-violet-800 hover:bg-violet-100'
                          : 'bg-sky-50 border-sky-200 text-sky-800 hover:bg-sky-100'
                      }`}
                    >
                      {app.kind === 'game' ? 'Game' : 'Application'}
                    </Link>
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                      {app.category}
                    </span>
                    {app.googlePlayPackage && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
                        {app.googlePlayPackage}
                      </span>
                    )}
                    {app.playStoreUrl && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition"
                      >
                        <GooglePlayIcon className="w-3 h-3 text-emerald-600" />
                        <span>{isProduction ? 'Live on Play Store ↗' : 'Play Store Track ↗'}</span>
                      </a>
                    )}
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
                    {app.name}
                  </h1>

                  <p className="text-base sm:text-lg text-emerald-700 font-medium">
                    {app.tagline}
                  </p>
                </div>
              </div>

              {/* Status & Action Metrics Box */}
              <div className="w-full md:w-auto shrink-0 flex flex-col gap-3 min-w-[290px]">
                {isProduction ? (
                  <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-300 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Release Status:
                      </span>
                      <span className="text-emerald-900 font-bold">Production Live</span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      Passed Google Play&apos;s 14-day closed testing requirement (15/15 verified devices) and is now live in Production.
                    </p>

                    <div className="flex flex-col gap-2 pt-1">
                      {app.playStoreUrl && (
                        <a
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition shadow-md shadow-emerald-600/20"
                        >
                          <GooglePlayIcon className="w-4 h-4 text-white" />
                          <span>Get on Google Play ↗</span>
                        </a>
                      )}
                      <Link
                        href="/testers/leaderboard"
                        className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-emerald-200 text-emerald-900 font-mono text-xs text-center flex items-center justify-center gap-2 transition font-semibold"
                      >
                        <Gift className="w-3.5 h-3.5 text-amber-600" />
                        <span>Beta Testers: Claim Promo Code</span>
                      </Link>
                    </div>
                  </div>
                ) : isClosedTesting ? (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-700 flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-emerald-600" />
                        Tester Capacity:
                      </span>
                      <span className="text-emerald-800 font-bold">
                        {app.currentTesters} / {app.targetTesters} Enrolled
                      </span>
                    </div>

                    <div className="grid grid-cols-15 gap-1">
                      {Array.from({ length: app.targetTesters }).map((_, idx) => {
                        const isFilled = idx < app.currentTesters;
                        return (
                          <div
                            key={idx}
                            className={`h-2 rounded-sm ${
                              isFilled
                                ? 'bg-gradient-to-t from-emerald-600 to-emerald-400'
                                : 'bg-slate-200'
                            }`}
                          />
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 pt-1">
                      <span>{app.openSlots} buffer spots remaining</span>
                      <span className="text-emerald-800 font-semibold">14-Day Closed Track</span>
                    </div>

                    <div className="flex flex-col gap-2 pt-1">
                      <Link
                        href="/testers#apply"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition shadow-md shadow-emerald-600/20"
                      >
                        <Smartphone className="w-4 h-4" />
                        <span>Reserve Closed Beta Slot</span>
                      </Link>

                      {app.playStoreUrl && (
                        <a
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-mono text-xs text-center flex items-center justify-center gap-2 transition shadow-xs"
                        >
                          <GooglePlayIcon className="w-3.5 h-3.5 text-sky-600" />
                          <span>View on Google Play ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <AppVoteButton
                    slug={app.slug}
                    appName={app.name}
                    initialVotes={app.communityVotes}
                    voteThreshold={app.voteThreshold}
                  />
                )}
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 block mb-1 font-mono uppercase tracking-wider">
                  {isProduction ? 'Release Stage' : 'Target Retention'}
                </span>
                <span className="text-slate-900 font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  {isProduction ? 'Google Play Production' : '14 Days Continuous'}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block mb-1 font-mono uppercase tracking-wider">
                  Tester Reward
                </span>
                <span className="text-slate-900 font-semibold flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-violet-600" />
                  {app.reward}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block mb-1 font-mono uppercase tracking-wider">
                  Estimated Value
                </span>
                <span className="text-emerald-700 font-semibold font-mono">
                  {app.rewardValue || 'VIP Access'}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block mb-1 font-mono uppercase tracking-wider">
                  Store Compliance
                </span>
                <span className="text-slate-900 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  {isProduction ? 'Play Store Verified' : 'Google Play Closed Track'}
                </span>
              </div>
            </div>
          </div>

          {/* Media Showcase (Feature Graphic & Screenshots) */}
          <section className="space-y-4">
            <AppMediaGallery media={app.media} appName={app.name} />
          </section>

          {/* Deep-Dive Architecture & Story Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Story, Core Vision & Key Mechanics */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-emerald-600" />
                  <span>Project Vision &amp; Story</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-950 tracking-tight">About {app.name}</h2>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {app.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="space-y-2 pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    Key Innovations &amp; Features
                  </h3>
                  <div className="space-y-2">
                    {app.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div className="flex items-center gap-2 text-sky-700 text-xs font-mono uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-sky-600" />
                  <span>Core Mechanics &amp; Architecture Breakdown</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
                  Gameplay &amp; System Pillars
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {app.keyMechanics.map((mech, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 hover:border-emerald-500/30 transition"
                    >
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-mono font-bold">
                          {idx + 1}
                        </span>
                        {mech.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {mech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Tech Stack, Perks, and Tester Guidelines */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-violet-700 text-xs font-mono uppercase tracking-wider">
                  <Code2 className="w-4 h-4 text-violet-600" />
                  <span>Technical Specifications</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950">System Architecture</h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block font-mono">Frontend / UI:</span>
                    <span className="text-slate-900 font-medium">{app.techStack.frontend}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block font-mono">Backend Engine:</span>
                    <span className="text-slate-900 font-medium">{app.techStack.backend}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block font-mono">Database &amp; State:</span>
                    <span className="text-slate-900 font-medium">{app.techStack.database}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block font-mono">Specialized Technologies:</span>
                    <span className="text-emerald-700 font-mono font-semibold">
                      {app.techStack.specialized}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-mono uppercase tracking-wider">
                  <Gift className="w-4 h-4 text-emerald-600" />
                  <span>Tester Perks &amp; Anti-Incentive Disclosure</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950">Guaranteed Tester Reward</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Testers who complete the 14-day continuous closed-testing window for {app.name} unlock:
                </p>

                <div className="p-4 rounded-xl bg-white border border-emerald-300 text-emerald-800 font-bold text-sm flex items-center justify-between shadow-xs">
                  <span>
                    {app.reward} ({app.rewardValue || 'Permanent Promo Code'})
                  </span>
                </div>

                <Link
                  href="/testers/leaderboard"
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-100 hover:bg-amber-200/80 border border-amber-300 text-amber-900 font-mono text-xs font-semibold text-center flex items-center justify-center gap-2 transition"
                >
                  <Gift className="w-3.5 h-3.5 text-amber-700" />
                  <span>Claim Earned Promo Code ↗</span>
                </Link>

                <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200 text-[11px] text-slate-600 leading-relaxed space-y-1">
                  <span className="font-semibold text-slate-800 block">Google Play Policy Compliance:</span>
                  <span>
                    Per Google Play developer policy, rewards are provided strictly for functional testing and private bug reporting. Leaving a public 5-star review is never required or conditioned upon claiming rewards.
                  </span>
                </div>
              </div>

              {/* Directory & Cross-Links Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-3 shadow-xs">
                <h4 className="text-sm font-bold text-slate-950">Explore the Seitz Ecosystem</h4>
                <div className="flex flex-col gap-2">
                  <Link
                    href={sectionHref}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition"
                  >
                    All {sectionName} ({sectionHref})
                  </Link>
                  <Link
                    href={otherSectionHref}
                    className="w-full py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-900 font-bold text-xs uppercase tracking-wider transition"
                  >
                    Explore {otherSectionName} ({otherSectionHref})
                  </Link>
                  <Link
                    href="/testers#apply"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-md shadow-emerald-600/20"
                  >
                    Join Tester Community
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Same Section Peers */}
          <section className="pt-8 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  More Seitz {sectionName}
                </h3>
                <p className="text-xs text-slate-600">
                  Discover additional {isGame ? 'indie games and simulations' : 'Android & web applications'} in our portfolio
                </p>
              </div>
              <Link
                href={sectionHref}
                className="text-xs font-mono text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 font-semibold shrink-0"
              >
                <span>View All {sectionName} →</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sameSectionPeers.map((other) => (
                <Link
                  key={other.slug}
                  href={getProductDetailHref(other)}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-emerald-500/30 hover:shadow-md transition group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        {other.category}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          other.status === 'production'
                            ? 'text-emerald-800 bg-emerald-50 border-emerald-200'
                            : other.status === 'closed_testing'
                            ? 'text-sky-800 bg-sky-50 border-sky-200'
                            : 'text-amber-800 bg-amber-50 border-amber-200'
                        }`}
                      >
                        {other.status === 'production'
                          ? 'Production'
                          : other.status === 'closed_testing'
                          ? 'Closed Beta'
                          : 'Voting Open'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0">
                        <Image
                          src={other.media.icon}
                          alt={other.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                          {other.name}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-1">{other.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-700 font-semibold">
                    <span>View Showcase &amp; Specs</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Cross-Link Strip to Opposite Section (/apps <-> /games) */}
          <section className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-700 font-bold block">
                  Internal Cross-Link • {appsCatalog.length} Total Builds
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                  Also Check Out Our {otherSectionName}
                </h3>
              </div>
              <Link
                href={otherSectionHref}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-semibold transition self-start sm:self-auto"
              >
                <span>Open {otherSectionName} ({otherSectionHref})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherSectionPeers.map((peer) => (
                <Link
                  key={peer.slug}
                  href={getProductDetailHref(peer)}
                  className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 transition flex items-center gap-3 group"
                >
                  <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-slate-200 bg-white shrink-0">
                    <Image src={peer.media.icon} alt={peer.name} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-display font-bold text-sm text-slate-900 group-hover:text-sky-700 truncate">
                        {peer.shortName}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 shrink-0" />
                    </div>
                    <span className="text-[11px] text-slate-500 block truncate">
                      {peer.status === 'production'
                        ? 'Production'
                        : peer.status === 'closed_testing'
                        ? 'Closed Testing'
                        : 'In Development'}{' '}
                      • {peer.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Global Shared Footer */}
        <Footer />
      </div>
    </div>
  );
}
