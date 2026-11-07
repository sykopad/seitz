import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { TesterNavbar } from '@/components/testers/TesterNavbar';
import { CommunityVotingHub } from '@/components/testers/CommunityVotingHub';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Community Prioritization Hub | Vote for the Next Testing Release | Seitz',
  description:
    'Vote on which in-development indie game or mobile utility should be completed and launched into the 14-day Google Play closed beta testing track next.',
};

export default function VotePage() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f4f6] relative selection:bg-emerald-400 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" />

      {/* Primary Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <TesterNavbar />

        <main className="flex-1 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <Link
              href="/testers"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-emerald-400 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Testing Lab Overview</span>
            </Link>
          </div>

          <CommunityVotingHub />
        </main>

        <Footer />
      </div>
    </div>
  );
}
