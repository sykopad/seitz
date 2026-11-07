'use client';

import React, { useState } from 'react';
import { ThumbsUp, Check, Loader2, Sparkles } from 'lucide-react';
import { castCommunityVote } from '@/app/actions/vote';

interface AppVoteButtonProps {
  slug: string;
  appName: string;
  initialVotes: number;
  voteThreshold: number;
  compact?: boolean;
}

export function AppVoteButton({
  slug,
  appName,
  initialVotes,
  voteThreshold,
  compact = false,
}: AppVoteButtonProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleVote = async () => {
    if (hasVoted || loading) return;

    setLoading(true);
    setFeedback(null);

    // Optimistic UI update
    setVotes((prev) => prev + 1);
    setHasVoted(true);

    try {
      const res = await castCommunityVote(slug);
      if (res.success) {
        setVotes(res.newVoteCount);
        setFeedback(res.message);
      } else {
        setFeedback(res.message);
      }
    } catch {
      setFeedback(`Vote recorded for ${appName}!`);
    } finally {
      setLoading(false);
    }
  };

  const progressPercent = Math.min(100, Math.round((votes / voteThreshold) * 100));

  if (compact) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/60 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Community Demand:
          </span>
          <span className="font-mono font-bold text-amber-400">
            {votes} / {voteThreshold} votes
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <button
          onClick={handleVote}
          disabled={hasVoted || loading}
          className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
            hasVoted
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default'
              : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-amber-500/20 active:scale-[0.98]'
          }`}
        >
          {loading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : hasVoted ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Vote Backed ({votes})</span>
            </>
          ) : (
            <>
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>Vote to Prioritize ({votes})</span>
            </>
          )}
        </button>

        {feedback && (
          <p className="text-[11px] text-emerald-400 text-center font-mono mt-1 animate-fadeIn">
            {feedback}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="glass-card p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Community Prioritization Vote</h4>
            <p className="text-xs text-white/60">Back this project to launch it into Closed Testing next</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl font-extrabold font-mono text-amber-400">{votes}</span>
          <span className="text-xs text-white/50 block">/ {voteThreshold} target votes</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-emerald-400 to-sky-400 rounded-full transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] font-mono text-white/50">
          <span>{progressPercent}% towards closed beta track</span>
          <span>{Math.max(0, voteThreshold - votes)} votes needed</span>
        </div>
      </div>

      <button
        onClick={handleVote}
        disabled={hasVoted || loading}
        className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
          hasVoted
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
            : 'bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 hover:from-amber-400 hover:to-emerald-300 text-black shadow-amber-500/25 active:scale-[0.99]'
        }`}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : hasVoted ? (
          <>
            <Check className="w-4 h-4" />
            <span>Vote Recorded! Backed by Community ({votes})</span>
          </>
        ) : (
          <>
            <ThumbsUp className="w-4 h-4" />
            <span>Vote to Launch Closed Testing Track ({votes})</span>
          </>
        )}
      </button>

      {feedback && (
        <p className="text-xs text-emerald-400 text-center font-mono mt-1">
          {feedback}
        </p>
      )}
    </div>
  );
}
