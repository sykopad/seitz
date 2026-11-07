'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ExternalLink, Flame, Gift } from 'lucide-react';
import { getVotingProjects } from '@/data/apps-catalog';
import { AppVoteButton } from '@/components/apps/AppVoteButton';

export function CommunityVotingHub() {
  const votingProjects = getVotingProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: votingProjects.length },
    {
      id: 'games',
      label: 'Games & Sims',
      count: votingProjects.filter(
        (p) =>
          p.category.toLowerCase().includes('game') || p.category.toLowerCase().includes('sim')
      ).length,
    },
    {
      id: 'ai',
      label: 'AI & Media',
      count: votingProjects.filter(
        (p) =>
          p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('media')
      ).length,
    },
    {
      id: 'edtech',
      label: 'EdTech & Forensics',
      count: votingProjects.filter(
        (p) =>
          p.category.toLowerCase().includes('edtech') ||
          p.category.toLowerCase().includes('forensics')
      ).length,
    },
  ];

  const filteredProjects = votingProjects.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'games')
      return p.category.toLowerCase().includes('game') || p.category.toLowerCase().includes('sim');
    if (selectedCategory === 'ai')
      return p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('media');
    if (selectedCategory === 'edtech')
      return (
        p.category.toLowerCase().includes('edtech') ||
        p.category.toLowerCase().includes('forensics')
      );
    return true;
  });

  // Sort by community votes descending
  const sortedProjects = [...filteredProjects].sort((a, b) => b.communityVotes - a.communityVotes);

  return (
    <section id="vote" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Community Prioritization Pipeline
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Vote for the Next Testing Release
        </h2>
        <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed">
          We have 7 software products and indie games currently in active development. When a project reaches{' '}
          <span className="text-amber-300 font-bold font-mono">50 community votes</span>, we package its Android build and launch an official 15-tester Closed Beta cohort.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.09] hover:text-white border border-white/10'
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {sortedProjects.map((project, index) => {
          const isTopTrending = index === 0 && selectedCategory === 'all';
          return (
            <div
              key={project.slug}
              className={`studio-card rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between group relative ${
                isTopTrending
                  ? 'border-amber-500/45 shadow-xl shadow-amber-500/10'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    {isTopTrending ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/35">
                        <Flame className="w-3 h-3 text-amber-400" />
                        #1 Most Requested
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400">
                        Rank // 0{index + 1}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">{project.category}</span>
                </div>

                {/* Identity Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/20 bg-black/60 shrink-0 shadow-md">
                    <Image
                      src={project.media.icon}
                      alt={`${project.name} icon`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition">
                      <Link href={`/apps/${project.slug}`} className="hover:underline">
                        {project.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-300/80 line-clamp-2 mt-1">{project.tagline}</p>
                  </div>
                </div>

                {/* Highlights Summary */}
                <p className="text-xs text-slate-300/80 leading-relaxed mb-4 line-clamp-3">
                  {project.summary}
                </p>

                {/* Launch Perk */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.07] text-[11px] text-slate-200 mb-5 flex items-start gap-2.5">
                  <Gift className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-mono uppercase tracking-wider text-[10px]">
                      Backer Reward on Launch:
                    </span>
                    <span className="font-semibold text-emerald-300">{project.reward}</span>
                  </div>
                </div>
              </div>

              {/* Vote Engine & CTA */}
              <div className="space-y-3 pt-3 border-t border-white/[0.08]">
                <AppVoteButton
                  slug={project.slug}
                  appName={project.name}
                  initialVotes={project.communityVotes}
                  voteThreshold={project.voteThreshold}
                  compact={true}
                />

                <Link
                  href={`/apps/${project.slug}`}
                  className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-300 hover:text-white font-mono text-xs text-center flex items-center justify-center gap-1.5 transition border border-white/10"
                >
                  <span>Explore Story & Tech Specs</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
