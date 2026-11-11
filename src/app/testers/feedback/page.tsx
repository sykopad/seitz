import type { Metadata } from 'next';
import { TesterNavbar } from '@/components/testers/TesterNavbar';
import { CategoryEvaluationForm } from '@/components/testers/CategoryEvaluationForm';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Category-Specific QA & Market Viability Evaluation | Seitz Testing Lab',
  description:
    'Execute real-device Android QA, stress-test category-specific heuristics, and submit crash telemetry to earn tester bounties and permanent lifetime software unlocks.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-emerald-500/20 selection:text-emerald-950">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <TesterNavbar />

        <main className="flex-1 py-6">
          <CategoryEvaluationForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}
