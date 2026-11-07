'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ExternalLink,
  Flame,
  Gift,
  Plus,
  Users,
  Cpu,
  ChevronDown,
  Layers,
  Award,
} from 'lucide-react';
import { getVotingProjects } from '@/data/apps-catalog';
import { AppVoteButton } from '@/components/apps/AppVoteButton';
import {
  getCommunitySuggestions,
  CommunitySuggestionItem,
} from '@/data/community-suggestions';
import { SuggestAppModal } from '@/components/testers/SuggestAppModal';

export function CommunityVotingHub() {
  const votingProjects = getVotingProjects();
  const [communitySuggestions, setCommunitySuggestions] = useState<CommunitySuggestionItem[]>(
    () => getCommunitySuggestions()
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [originFilter, setOriginFilter] = useState<'all' | 'studio' | 'community'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedSpecId, setExpandedSpecId] = useState<string | null>(null);

  const handleSuggestionAdded = (newSuggestion: CommunitySuggestionItem) => {
    setCommunitySuggestions((prev) => [newSuggestion, ...prev]);
    setOriginFilter('community');
  };

  const toggleSpec = (id: string) => {
    setExpandedSpecId(expandedSpecId === id ? null : id);
  };

  // Combine both sets
  const studioItems = votingProjects.map((p) => ({
    type: 'studio' as const,
    id: p.slug,
    slug: p.slug,
    name: p.name,
    tagline: p.tagline,
    category: p.category,
    summary: p.summary,
    icon: p.media.icon,
    votes: p.communityVotes,
    threshold: p.voteThreshold,
    reward: p.reward,
    author: 'Seitz Studio',
    aiAnalysis: null,
  }));

  const communityItems = communitySuggestions.map((s) => ({
    type: 'community' as const,
    id: s.id,
    slug: s.slug,
    name: s.title,
    tagline: s.tagline,
    category: s.category,
    summary: s.aiAnalysis.tagline,
    icon: '/images/seitz-logo.png',
    votes: s.communityVotes,
    threshold: s.voteThreshold,
    reward: 'VIP Founding Tester Badge + Free Play Store Code',
    author: s.authorName,
    aiAnalysis: s.aiAnalysis,
  }));

  const allCombined = [...studioItems, ...communityItems];

  const filteredItems = allCombined.filter((item) => {
    // 1. Origin Filter
    if (originFilter === 'studio' && item.type !== 'studio') return false;
    if (originFilter === 'community' && item.type !== 'community') return false;

    // 2. Category Filter
    if (selectedCategory === 'all') return true;
    const cat = item.category.toLowerCase();
    if (selectedCategory === 'games') return cat.includes('game') || cat.includes('sim') || cat.includes('trivia');
    if (selectedCategory === 'ai') return cat.includes('ai') || cat.includes('media') || cat.includes('automation');
    if (selectedCategory === 'tools') return cat.includes('tool') || cat.includes('util') || cat.includes('hardware');
    if (selectedCategory === 'civic') return cat.includes('civic') || cat.includes('communit') || cat.includes('edtech');

    return true;
  });

  // Sort descending by votes
  const sortedItems = [...filteredItems].sort((a, b) => b.votes - a.votes);

  return (
    <section id="vote" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-800 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Community Prioritization &amp; AI Idea Pipeline</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight mb-4">
          Vote for the Next Testing Release
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Back an upcoming studio project or suggest your own app! When any project reaches{' '}
          <span className="text-amber-700 font-bold font-mono">50 community votes</span>, we package its build and launch an official 15-tester Closed Beta cohort.
        </p>

        {/* Suggest App Trigger Button */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 hover:from-amber-400 hover:to-emerald-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-md shadow-amber-500/20 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Suggest an App (OpenRouter AI Analyzed)</span>
          </button>
        </div>
      </div>

      {/* Origin Track Tabs (Studio vs Community) */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="p-1 rounded-2xl bg-slate-100 border border-slate-200/90 flex items-center gap-1 shadow-2xs">
          <button
            onClick={() => setOriginFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition cursor-pointer ${
              originFilter === 'all'
                ? 'bg-white text-slate-950 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            All Projects ({allCombined.length})
          </button>
          <button
            onClick={() => setOriginFilter('studio')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition cursor-pointer flex items-center gap-1.5 ${
              originFilter === 'studio'
                ? 'bg-white text-sky-800 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Studio Pipeline ({studioItems.length})</span>
          </button>
          <button
            onClick={() => setOriginFilter('community')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition cursor-pointer flex items-center gap-1.5 ${
              originFilter === 'community'
                ? 'bg-white text-emerald-800 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Community Ideas ({communityItems.length})</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: 'all', label: 'All Categories' },
          { id: 'games', label: 'Games & Casual' },
          { id: 'ai', label: 'AI & Automation' },
          { id: 'tools', label: 'Tools & Utilities' },
          { id: 'civic', label: 'Civic & Community' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {sortedItems.map((item, index) => {
          const isTopTrending = index === 0;
          const isCommunity = item.type === 'community';

          return (
            <div
              key={item.id}
              className={`studio-card rounded-2xl p-6 sm:p-7 bg-white border transition-all flex flex-col justify-between group relative shadow-xs ${
                isTopTrending
                  ? 'border-2 border-amber-400 shadow-md shadow-amber-500/10'
                  : isCommunity
                  ? 'border-emerald-200 hover:border-emerald-400 bg-emerald-50/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    {isTopTrending ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        <Flame className="w-3 h-3 text-amber-600" />
                        #1 Most Backed
                      </span>
                    ) : isCommunity ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        Community Idea • AI Spec
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">
                        Rank // 0{index + 1}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">{item.category}</span>
                </div>

                {/* Identity Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0 shadow-2xs flex items-center justify-center">
                    {isCommunity ? (
                      <div className="w-full h-full bg-gradient-to-tr from-emerald-500/20 to-sky-500/20 flex items-center justify-center text-emerald-700">
                        <Cpu className="w-6 h-6" />
                      </div>
                    ) : (
                      <Image
                        src={item.icon}
                        alt={`${item.name} icon`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-slate-950 group-hover:text-amber-700 transition truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1">{item.tagline}</p>
                    <span className="text-[10px] font-mono text-slate-400 block mt-1">
                      Submitted by: <strong className="text-slate-700">{item.author}</strong>
                    </span>
                  </div>
                </div>

                {/* Highlights / AI Specs */}
                {isCommunity && item.aiAnalysis ? (
                  <div className="space-y-3 mb-4">
                    {/* Expandable AI Breakdown Accordion */}
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleSpec(item.id)}
                        className="w-full p-3 text-left flex items-center justify-between text-xs font-mono font-bold text-emerald-900 cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                          <span>AI Architecture &amp; Mechanics</span>
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            expandedSpecId === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expandedSpecId === item.id && (
                        <div className="p-3 pt-0 text-xs space-y-2.5 border-t border-emerald-200/60 mt-1">
                          <div className="space-y-1">
                            {item.aiAnalysis.keyMechanics.map((m) => (
                              <div key={m.title} className="text-[11px] leading-snug">
                                <strong className="text-emerald-950">• {m.title}:</strong>{' '}
                                <span className="text-slate-600">{m.description}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2 border-t border-emerald-200/40 text-[10px] font-mono text-slate-600 space-y-0.5">
                            <div>
                              <strong>STACK:</strong> {item.aiAnalysis.techStack.frontend}
                            </div>
                            <div>
                              <strong>SPRINTS:</strong> {item.aiAnalysis.estimatedSprints}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                )}

                {/* Launch Perk */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 mb-5 flex items-start gap-2.5">
                  <Gift className="w-3.5 h-3.5 text-violet-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block font-mono uppercase tracking-wider text-[10px] font-semibold">
                      Backer Reward on Launch:
                    </span>
                    <span className="font-semibold text-emerald-800">{item.reward}</span>
                  </div>
                </div>
              </div>

              {/* Vote Engine & CTA */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <AppVoteButton
                  slug={item.slug}
                  appName={item.name}
                  initialVotes={item.votes}
                  voteThreshold={item.threshold}
                  compact={true}
                />

                {!isCommunity && (
                  <Link
                    href={`/apps/${item.slug}`}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 font-mono text-xs text-center flex items-center justify-center gap-1.5 transition border border-slate-200 font-medium"
                  >
                    <span>Explore Story &amp; Tech Specs</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Suggest App Modal */}
      <SuggestAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuggestionAdded={handleSuggestionAdded}
      />
    </section>
  );
}
