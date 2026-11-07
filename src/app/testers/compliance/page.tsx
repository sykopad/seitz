import type { Metadata } from 'next';
import { TesterNavbar } from '@/components/testers/TesterNavbar';
import { ComplianceReport } from '@/components/testers/ComplianceReport';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Google Play Compliance Guide & Questionnaire | Seitz Testing Lab',
  description:
    'Answers and audit responses for the 3 mandatory Google Play Console production access application sections after completing 14 days of closed testing with 12+ testers.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f4f6] relative selection:bg-emerald-400 selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <TesterNavbar />

        <main className="flex-1 py-6">
          <ComplianceReport />
        </main>

        <Footer />
      </div>
    </div>
  );
}
