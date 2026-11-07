import { Navbar } from '@/components/home/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { ServicesPricing } from '@/components/home/ServicesPricing';
import { VerificationMatrix } from '@/components/home/VerificationMatrix';
import { CaseStudiesSection } from '@/components/home/CaseStudiesSection';
import { TestingLabBanner } from '@/components/home/TestingLabBanner';
import { WorkProcess } from '@/components/home/WorkProcess';
import { ContactSection } from '@/components/home/ContactSection';
import { Footer } from '@/components/shared/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f4f6] relative selection:bg-sky-400 selection:text-black">
      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" />

      {/* Primary Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Section 1: Navigation Header */}
        <Navbar />

        <main className="flex-1">
          {/* Section 2: Hero Section */}
          <HeroSection />

          {/* Section 3: Engineering Philosophy */}
          <PhilosophySection />

          {/* Section 4: Capabilities & Interactive Pricing Tiers */}
          <ServicesPricing />

          {/* Section 5: Verification Matrix */}
          <VerificationMatrix />

          {/* Section 6: Proven Case Studies */}
          <CaseStudiesSection />

          {/* Section 7: Testing Lab Community Callout */}
          <TestingLabBanner />

          {/* Section 8: Work Process & Engagement Model */}
          <WorkProcess />

          {/* Section 9: Direct Client Project Intake */}
          <ContactSection />
        </main>

        {/* Global Shared Footer */}
        <Footer />
      </div>
    </div>
  );
}
