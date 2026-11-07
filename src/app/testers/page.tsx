import type { Metadata } from 'next';
import { TesterNavbar } from '@/components/testers/TesterNavbar';
import { TesterHero } from '@/components/testers/TesterHero';
import { HowItWorks } from '@/components/testers/HowItWorks';
import { TesterPerks } from '@/components/testers/TesterPerks';
import { ActiveCohorts } from '@/components/testers/ActiveCohorts';
import { CommunityVotingHub } from '@/components/testers/CommunityVotingHub';
import { TesterApplicationForm } from '@/components/testers/TesterApplicationForm';
import { TesterFAQ } from '@/components/testers/TesterFAQ';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'The Seitz Testing Lab | Free Lifetime Access to Android Apps',
  description:
    'Join the private testing community for Seitz.co.za. Test upcoming mobile utilities, digital tools, and indie games on Google Play in exchange for permanent lifetime promo codes and VIP perks.',
  openGraph: {
    title: 'The Seitz Testing Lab | Test Android Apps & Unlock Free Lifetime Access',
    description:
      'Participate in 14-day Google Play closed beta cohorts on real Android devices. Earn permanent promo codes instead of paying app store prices.',
    url: 'https://seitz.co.za/testers',
  },
};

export default function TestersPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-emerald-500/20 selection:text-emerald-950">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Primary Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <TesterNavbar />

        <main className="flex-1">
          {/* Hero Section */}
          <TesterHero />

          {/* The 4-Phase Testing Lifecycle */}
          <HowItWorks />

          {/* Perks & Rewards */}
          <TesterPerks />

          {/* Active Cohorts */}
          <ActiveCohorts />

          {/* Community Voting Pipeline */}
          <CommunityVotingHub />

          {/* Tester Application Intake Form */}
          <TesterApplicationForm />

          {/* Frequently Asked Questions */}
          <TesterFAQ />
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </div>
  );
}
