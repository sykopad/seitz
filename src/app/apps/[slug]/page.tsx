import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Smartphone,
  Clock,
  Gift,
  Users,
  ShieldCheck,
  Sparkles,
  Layers,
  Code2,
  Database as DbIcon,
  Flame,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { appsCatalog, getAppBySlug } from '@/data/apps-catalog';
import { AppMediaGallery } from '@/components/apps/AppMediaGallery';
import { AppVoteButton } from '@/components/apps/AppVoteButton';
import { Footer } from '@/components/shared/Footer';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return appsCatalog.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: 'App Not Found | Seitz.co.za',
    };
  }

  return {
    title: `${app.name} | ${app.status === 'closed_testing' ? 'Closed Beta Testing' : 'Community Voting'} | Seitz`,
    description: app.summary,
    openGraph: {
      title: `${app.name} - ${app.tagline}`,
      description: app.summary,
      url: `https://seitz.co.za/apps/${app.slug}`,
      images: app.media.featureGraphic
        ? [{ url: app.media.featureGraphic }]
        : [{ url: app.media.icon }],
    },
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const isClosedTesting = app.status === 'closed_testing';
  const otherApps = appsCatalog.filter((item) => item.slug !== app.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f4f6] relative selection:bg-emerald-400 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Mini-Navbar */}
        <header className="border-b border-white/10 bg-black/60 backdrop-blur-xl sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link
              href="/testers"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-emerald-400 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Testing Lab</span>
            </Link>

            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                  isClosedTesting
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isClosedTesting ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                  }`}
                />
                {isClosedTesting ? 'Closed Beta Track' : 'In Development / Voting'}
              </span>

              <Link
                href="/"
                className="hidden sm:inline-block text-xs font-mono text-white/50 hover:text-white transition"
              >
                seitz.co.za
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
          {/* Breadcrumb */}
          <nav className="text-xs font-mono text-white/50 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/testers" className="hover:text-white transition">Testing Lab</Link>
            <span>/</span>
            <span className="text-emerald-400 font-bold">{app.name}</span>
          </nav>

          {/* Hero Header Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="flex items-start gap-6">
                {/* App Icon */}
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 shrink-0">
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
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                      {app.category}
                    </span>
                    {app.googlePlayPackage && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {app.googlePlayPackage}
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    {app.name}
                  </h1>

                  <p className="text-base sm:text-lg text-emerald-400 font-medium">
                    {app.tagline}
                  </p>
                </div>
              </div>

              {/* Status & Tester Metrics Box */}
              <div className="w-full md:w-auto shrink-0 flex flex-col gap-3 min-w-[280px]">
                {isClosedTesting ? (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white/60 flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-emerald-400" />
                        Tester Capacity:
                      </span>
                      <span className="text-emerald-400 font-bold">
                        {app.currentTesters} / {app.targetTesters} Enrolled
                      </span>
                    </div>

                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
                        style={{
                          width: `${Math.round((app.currentTesters / app.targetTesters) * 100)}%`,
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-white/50 pt-1">
                      <span>{app.openSlots} buffer spots remaining</span>
                      <span className="text-emerald-300">14-Day Closed Track</span>
                    </div>

                    <Link
                      href="/testers#apply"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-black font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Reserve Closed Beta Slot</span>
                    </Link>
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-white/10 text-xs">
              <div>
                <span className="text-white/40 block mb-1 font-mono uppercase tracking-wider">
                  Target Retention
                </span>
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  14 Days Continuous
                </span>
              </div>

              <div>
                <span className="text-white/40 block mb-1 font-mono uppercase tracking-wider">
                  Tester Reward
                </span>
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-violet-400" />
                  {app.reward}
                </span>
              </div>

              <div>
                <span className="text-white/40 block mb-1 font-mono uppercase tracking-wider">
                  Estimated Value
                </span>
                <span className="text-emerald-400 font-semibold font-mono">
                  {app.rewardValue || 'VIP Access'}
                </span>
              </div>

              <div>
                <span className="text-white/40 block mb-1 font-mono uppercase tracking-wider">
                  Store Compliance
                </span>
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  Google Play Closed Track
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
              {/* Overview & Narrative */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                  <Flame className="w-4 h-4" />
                  <span>Project Vision & Story</span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">About {app.name}</h2>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {app.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="space-y-2 pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-white/50">
                    Key Innovations & Features
                  </h3>
                  <div className="space-y-2">
                    {app.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Mechanics Breakdown (from GEMINI.md) */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Core Mechanics & Architecture Breakdown</span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Gameplay & System Pillars
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {app.keyMechanics.map((mech, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-emerald-500/20 transition"
                    >
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-mono">
                          {idx + 1}
                        </span>
                        {mech.title}
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {mech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Tech Stack, Perks, and Tester Guidelines */}
            <div className="space-y-8">
              {/* Tech Stack Specs */}
              <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-wider">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Specifications</span>
                </div>
                <h3 className="text-lg font-bold text-white">System Architecture</h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/40 block font-mono">Frontend / UI:</span>
                    <span className="text-white font-medium">{app.techStack.frontend}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/40 block font-mono">Backend Engine:</span>
                    <span className="text-white font-medium">{app.techStack.backend}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/40 block font-mono">Database & State:</span>
                    <span className="text-white font-medium">{app.techStack.database}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-white/40 block font-mono">Specialized Technologies:</span>
                    <span className="text-emerald-400 font-mono">{app.techStack.specialized}</span>
                  </div>
                </div>
              </div>

              {/* Tester Reward & Anti-Incentive Compliance */}
              <div className="glass-card rounded-2xl p-6 border border-emerald-500/20 bg-emerald-500/[0.03] space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                  <Gift className="w-4 h-4" />
                  <span>Tester Perks & Anti-Incentive Disclosure</span>
                </div>
                <h3 className="text-lg font-bold text-white">Guaranteed Tester Reward</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Testers who keep {app.name} installed on their registered Android device for the mandatory 14-day continuous closed-testing window receive:
                </p>

                <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 text-emerald-300 font-bold text-sm">
                  {app.reward} ({app.rewardValue || 'Permanent Promo Code'})
                </div>

                <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 text-[11px] text-white/50 leading-relaxed space-y-1">
                  <span className="font-semibold text-white/80 block">Google Play Policy Compliance:</span>
                  <span>
                    Per Google Play developer policy, rewards are provided strictly for functional testing and private bug reporting. Leaving a public 5-star review is never required or conditioned upon claiming rewards.
                  </span>
                </div>
              </div>

              {/* Apply / Back Action CTA */}
              <div className="glass-card rounded-2xl p-6 border border-white/10 text-center space-y-4">
                <h4 className="text-sm font-bold text-white">Ready to test or explore?</h4>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/testers"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition"
                  >
                    View All Active Cohorts
                  </Link>
                  <Link
                    href="/testers#apply"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 text-black font-bold text-xs uppercase tracking-wider transition"
                  >
                    Join Tester Community
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Other Apps Carousel */}
          <section className="pt-8 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Explore Other Applications</h3>
                <p className="text-xs text-white/60">More indie software and experimental games in the Seitz ecosystem</p>
              </div>
              <Link
                href="/testers"
                className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>View All ({appsCatalog.length})</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherApps.map((other) => (
                <Link
                  key={other.slug}
                  href={`/apps/${other.slug}`}
                  className="glass-card rounded-2xl p-5 border border-white/10 hover:border-emerald-500/30 transition group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50">
                        {other.category}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          other.status === 'closed_testing'
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : 'text-amber-400 bg-amber-500/10'
                        }`}
                      >
                        {other.status === 'closed_testing' ? 'Closed Beta' : 'Voting Open'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-black shrink-0">
                        <Image
                          src={other.media.icon}
                          alt={other.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition">
                          {other.name}
                        </h4>
                        <p className="text-xs text-white/60 line-clamp-1">{other.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span>View Showcase & Specs</span>
                    <span>→</span>
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
