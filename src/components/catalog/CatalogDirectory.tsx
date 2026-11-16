'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Smartphone,
  Gamepad2,
  ArrowRight,
  ArrowUpRight,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import {
  AppCatalogItem,
  AppKind,
  AppStatus,
  getProductDetailHref,
} from '@/data/apps-catalog';
import { GooglePlayIcon } from '@/components/icons/GooglePlayIcon';
import { AppVoteButton } from '@/components/apps/AppVoteButton';

interface CatalogDirectoryProps {
  mode: AppKind;
  items: AppCatalogItem[];
  crossLinkItems: AppCatalogItem[];
  totalAppsCount: number;
  totalGamesCount: number;
}

const STATUS_FILTERS: Array<{ id: 'all' | AppStatus; label: string }> = [
  { id: 'all', label: 'All Releases' },
  { id: 'production', label: 'Production (Live)' },
  { id: 'closed_testing', label: 'Closed Testing' },
  { id: 'in_development', label: 'In Development' },
];

export function CatalogDirectory({
  mode,
  items,
  crossLinkItems,
  totalAppsCount,
  totalGamesCount,
}: CatalogDirectoryProps) {
  const [statusFilter, setStatusFilter] = useState<'all' | AppStatus>('all');

  const isGames = mode === 'game';
  const otherSectionHref = isGames ? '/apps' : '/games';
  const otherSectionLabel = isGames ? 'Applications' : 'Games';
  const otherSectionCount = isGames ? totalAppsCount : totalGamesCount;

  const productionCount = items.filter((item) => item.status === 'production').length;
  const closedTestingCount = items.filter((item) => item.status === 'closed_testing').length;
  const inDevCount = items.filter((item) => item.status === 'in_development').length;

  const visibleFilters = STATUS_FILTERS.filter((filter) => {
    if (filter.id === 'all') return true;
    return items.some((item) => item.status === filter.id);
  });

  const filteredItems = items.filter((item) =>
    statusFilter === 'all' ? true : item.status === statusFilter
  );

  // Sort: Production first, then Closed Testing, then In Development
  const statusRank: Record<AppStatus, number> = {
    production: 0,
    closed_testing: 1,
    in_development: 2,
  };
  const sortedItems = [...filteredItems].sort(
    (a, b) => statusRank[a.status] - statusRank[b.status]
  );

  const getStatusBadge = (status: AppStatus) => {
    switch (status) {
      case 'production':
        return {
          label: 'Production • Live',
          classes: 'bg-emerald-50 text-emerald-800 border-emerald-300',
          dot: 'bg-emerald-500',
        };
      case 'closed_testing':
        return {
          label: 'Closed Testing',
          classes: 'bg-sky-50 text-sky-800 border-sky-300',
          dot: 'bg-sky-500 animate-pulse',
        };
      case 'in_development':
        return {
          label: 'In Development',
          classes: 'bg-amber-50 text-amber-800 border-amber-300',
          dot: 'bg-amber-500',
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* Top Cross-Section Navigation Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-2xs self-start">
          <Link
            href="/apps"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition ${
              !isGames
                ? 'bg-white text-sky-800 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-sky-600" />
            <span>Applications</span>
            <span className="px-1.5 py-0.2 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold">
              {totalAppsCount}
            </span>
          </Link>

          <Link
            href="/games"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition ${
              isGames
                ? 'bg-white text-violet-800 shadow-xs border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5 text-violet-600" />
            <span>Games</span>
            <span className="px-1.5 py-0.2 rounded-full bg-violet-100 text-violet-800 text-[10px] font-bold">
              {totalGamesCount}
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <Link
            href="/testers"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold transition"
          >
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>Testing Lab (/testers)</span>
          </Link>
          <Link
            href={otherSectionHref}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-950 font-semibold transition"
          >
            <span>Switch to {otherSectionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Section Hero Banner */}
      <section className="studio-panel rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 bg-white relative overflow-hidden">
        <div
          className={`absolute -top-12 right-0 w-96 h-96 rounded-full blur-[130px] pointer-events-none ${
            isGames ? 'bg-violet-500/10' : 'bg-sky-500/10'
          }`}
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono uppercase tracking-wider font-semibold ${
                isGames
                  ? 'bg-violet-50 border-violet-200 text-violet-800'
                  : 'bg-sky-50 border-sky-200 text-sky-800'
              }`}
            >
              {isGames ? (
                <Gamepad2 className="w-3.5 h-3.5 text-violet-600" />
              ) : (
                <Smartphone className="w-3.5 h-3.5 text-sky-600" />
              )}
              <span>
                {isGames ? 'Seitz Interactive Games Studio' : 'Seitz Android & Web Applications'}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-[1.08]">
              {isGames
                ? 'South African Indie Games & Strategy Worlds.'
                : 'Production Utilities, Civic Tech & AI Platforms.'}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {isGames
                ? 'Explore our live Google Play production games—Mzansi Midnight and Would You Rather—alongside upcoming strategy, trivia, and RPG builds open for community prioritization.'
                : 'Explore our Android applications currently in Google Play Closed Testing—including OmniRemote, Debate League, and Clean and Clean—plus upcoming AI software in development.'}
            </p>
          </div>

          {/* Telemetry Summary Cards */}
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center min-w-[92px]">
              <div className="font-display text-2xl font-bold text-emerald-700 font-mono">
                {productionCount}
              </div>
              <div className="text-[11px] font-mono text-emerald-900 font-semibold">Production</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 text-center min-w-[92px]">
              <div className="font-display text-2xl font-bold text-sky-700 font-mono">
                {closedTestingCount}
              </div>
              <div className="text-[11px] font-mono text-sky-900 font-semibold">Closed Beta</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-center min-w-[92px]">
              <div className="font-display text-2xl font-bold text-amber-700 font-mono">
                {inDevCount}
              </div>
              <div className="text-[11px] font-mono text-amber-900 font-semibold">Pipeline</div>
            </div>
          </div>
        </div>

        {/* Status Filter Pills */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            {visibleFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setStatusFilter(filter.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition cursor-pointer ${
                  statusFilter === filter.id
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <Link
            href={otherSectionHref}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-slate-950 font-semibold transition"
          >
            <span>
              Looking for {otherSectionLabel}? View {otherSectionCount} {otherSectionLabel} ({otherSectionHref})
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedItems.map((item) => {
          const badge = getStatusBadge(item.status);
          const detailHref = getProductDetailHref(item);
          const isProduction = item.status === 'production';
          const isClosedTesting = item.status === 'closed_testing';

          return (
            <div
              key={item.slug}
              className={`studio-card rounded-2xl p-6 bg-white border flex flex-col justify-between transition group ${
                isProduction
                  ? 'border-emerald-300/90 hover:border-emerald-500/60'
                  : isClosedTesting
                  ? 'border-sky-200 hover:border-sky-400'
                  : 'border-slate-200 hover:border-amber-300'
              }`}
            >
              <div className="space-y-4">
                {/* Top Status & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${badge.classes}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                    {badge.label}
                  </span>

                  <span className="text-[11px] font-mono text-slate-500 truncate">
                    {item.category}
                  </span>
                </div>

                {/* Feature Graphic Preview (if present) */}
                {item.media.featureGraphic && (
                  <Link
                    href={detailHref}
                    className="block relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100"
                  >
                    <Image
                      src={item.media.featureGraphic}
                      alt={`${item.name} banner`}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </Link>
                )}

                {/* Identity Header */}
                <div className="flex items-start gap-4">
                  <div className="relative w-15 h-15 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0 shadow-2xs">
                    <Image
                      src={item.media.icon}
                      alt={`${item.name} icon`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-xl font-bold text-slate-950 group-hover:text-sky-700 transition">
                      <Link href={detailHref} className="hover:underline">
                        {item.name}
                      </Link>
                    </h2>
                    {item.googlePlayPackage && (
                      <span className="text-[11px] font-mono text-sky-700 block mt-0.5 truncate font-medium">
                        {item.googlePlayPackage}
                      </span>
                    )}
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1">{item.tagline}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                {/* Status-Specific Telemetry */}
                {isProduction && (
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Release Stage
                      </span>
                      <span className="text-emerald-900 font-bold">Google Play Production</span>
                    </div>
                    <div className="flex items-center justify-between font-mono text-[11px] text-slate-600">
                      <span>Closed Beta Graduated:</span>
                      <span className="font-semibold text-slate-800">15 / 15 Devices Verified</span>
                    </div>
                  </div>
                )}

                {isClosedTesting && (
                  <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-slate-600 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-sky-600" />
                        Tester Cohort:
                      </span>
                      <span className="text-sky-800 font-bold">
                        {item.currentTesters} / {item.targetTesters} ({item.openSlots} open)
                      </span>
                    </div>

                    <div className="grid grid-cols-15 gap-1">
                      {Array.from({ length: item.targetTesters }).map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-sm ${
                            idx < item.currentTesters ? 'bg-sky-500' : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-600" />
                        14-Day Window
                      </span>
                      <span className="text-emerald-700 font-semibold truncate max-w-[165px]">
                        {item.reward}
                      </span>
                    </div>
                  </div>
                )}

                {item.status === 'in_development' && (
                  <div className="pt-1">
                    <AppVoteButton
                      slug={item.slug}
                      appName={item.name}
                      initialVotes={item.communityVotes}
                      voteThreshold={item.voteThreshold}
                      compact={true}
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                {item.playStoreUrl && (
                  <a
                    href={item.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition shadow-xs ${
                      isProduction
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white'
                        : 'bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200'
                    }`}
                  >
                    <GooglePlayIcon
                      className={`w-3.5 h-3.5 ${isProduction ? 'text-white' : 'text-sky-600'}`}
                    />
                    <span>
                      {isProduction ? 'Get on Google Play' : 'Google Play Closed Track'}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {isClosedTesting && (
                  <Link
                    href="/testers#apply"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition shadow-xs"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Join 14-Day Closed Beta</span>
                  </Link>
                )}

                <Link
                  href={detailHref}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs text-center flex items-center justify-center gap-1.5 transition border border-slate-200 font-semibold"
                >
                  <span>Architecture &amp; Showcase</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Internal Cross-Linking Section: Apps <-> Games */}
      <section className="studio-panel rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Seitz Ecosystem Cross-Link</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {isGames
                ? 'Explore Seitz Applications & Utilities'
                : 'Explore Seitz Indie Games & Simulations'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              {isGames
                ? 'Looking for smart home hardware tools, parliamentary debate software, or civic GIS platforms? Jump over to our Applications directory.'
                : 'Looking for South African noir RPGs, multiplayer party dilemmas, or asymmetric strategy games? Visit our Games hub.'}
            </p>
          </div>

          <Link
            href={otherSectionHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs uppercase tracking-wider transition shrink-0 shadow-sm"
          >
            {isGames ? (
              <Smartphone className="w-4 h-4 text-sky-400" />
            ) : (
              <Gamepad2 className="w-4 h-4 text-violet-400" />
            )}
            <span>
              Explore All {otherSectionLabel} ({otherSectionHref})
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {crossLinkItems.slice(0, 4).map((peer) => {
            const peerHref = getProductDetailHref(peer);
            const peerBadge = getStatusBadge(peer.status);

            return (
              <Link
                key={peer.slug}
                href={peerHref}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 transition group flex flex-col justify-between gap-3 shadow-2xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${peerBadge.classes}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${peerBadge.dot}`} />
                      {peer.status === 'production'
                        ? 'Production'
                        : peer.status === 'closed_testing'
                        ? 'Closed Beta'
                        : 'Voting'}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition" />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-slate-200 bg-white shrink-0">
                      <Image
                        src={peer.media.icon}
                        alt={peer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-sky-700 transition truncate">
                        {peer.shortName}
                      </h3>
                      <p className="text-[11px] text-slate-500 truncate">{peer.category}</p>
                    </div>
                  </div>
                </div>

                {peer.googlePlayPackage && (
                  <span className="text-[10px] font-mono text-sky-700 truncate">
                    {peer.googlePlayPackage}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom Testing Lab & Services Strip */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Want early access to closed testing builds or shipping your own Android app to Google Play?
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono">
            <Link
              href="/testers"
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold transition"
            >
              Join Testing Lab →
            </Link>
            <Link
              href="/services/google-play-testing"
              className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-semibold transition"
            >
              12-Tester Service ($299) →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
