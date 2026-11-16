import type { Metadata } from 'next';
import { Navbar } from '@/components/home/Navbar';
import { Footer } from '@/components/shared/Footer';
import { CatalogDirectory } from '@/components/catalog/CatalogDirectory';
import { getAllApps, getAllGames } from '@/data/apps-catalog';

export const metadata: Metadata = {
  title: 'Games | South African Indie Games & Strategy Worlds | Seitz',
  description:
    'Play Seitz Google Play production titles Mzansi Midnight and Would You Rather, and explore upcoming South African strategy, trivia, and RPG games.',
  openGraph: {
    title: 'Games Directory | Seitz.co.za',
    description:
      'Discover Seitz indie games on Google Play Production and in development: Mzansi Midnight, Would You Rather, Decolonize, Payday, Mzansi Syndicate, and Toll Plaza.',
    url: 'https://seitz.co.za/games',
  },
};

export default function GamesDirectoryPage() {
  const apps = getAllApps();
  const games = getAllGames();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-violet-500 selection:text-white">
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <CatalogDirectory
            mode="game"
            items={games}
            crossLinkItems={apps}
            totalAppsCount={apps.length}
            totalGamesCount={games.length}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}
