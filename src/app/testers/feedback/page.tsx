import type { Metadata } from 'next';
import { TesterNavbar } from '@/components/testers/TesterNavbar';
import { FeedbackForm } from '@/components/testers/FeedbackForm';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: '3-Minute Beta Check-In | Seitz Testing Lab',
  description:
    'Complete your 3-minute closed beta check-in to confirm 14-day continuous participation and lock in your permanent lifetime Google Play promo code.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f4f6] relative selection:bg-emerald-400 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <TesterNavbar />

        <main className="flex-1 py-6">
          <FeedbackForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}
