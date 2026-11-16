import type { Metadata } from 'next';
import { Navbar } from '@/components/home/Navbar';
import { Footer } from '@/components/shared/Footer';
import { CatalogDirectory } from '@/components/catalog/CatalogDirectory';
import { getAllApps, getAllGames } from '@/data/apps-catalog';

export const metadata: Metadata = {
  title: 'Applications | Android & Web Software by Seitz',
  description:
    'Explore Seitz applications including OmniRemote, Debate League, Clean and Clean, and Mira AI—spanning Google Play Closed Testing tracks and upcoming AI platforms.',
  openGraph: {
    title: 'Applications Directory | Seitz.co.za',
    description:
      'Discover Seitz mobile and web applications: OmniRemote Universal Smart TV Remote, Debate League, Clean and Clean, and Mira AI.',
    url: 'https://seitz.co.za/apps',
  },
};

export default function AppsDirectoryPage() {
  const apps = getAllApps();
  const games = getAllGames();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-sky-500 selection:text-white">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <CatalogDirectory
            mode="app"
            items={apps}
            crossLinkItems={games}
            totalAppsCount={apps.length}
            totalGamesCount={games.length}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}
