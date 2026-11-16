import { MetadataRoute } from 'next';
import { appsCatalog, getAllGames } from '@/data/apps-catalog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://seitz.co.za';
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/apps`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/testers`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/testers/vote`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testers/leaderboard`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/google-play-testing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/testers/feedback`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/testers/compliance`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/anti-incentive`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/delete-account`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic app showcase pages
  const appRoutes: MetadataRoute.Sitemap = appsCatalog.map((app) => ({
    url: `${baseUrl}/apps/${app.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: app.status === 'production' ? 0.9 : app.status === 'closed_testing' ? 0.85 : 0.75,
  }));

  // Dynamic game showcase pages
  const gameRoutes: MetadataRoute.Sitemap = getAllGames().map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: game.status === 'production' ? 0.92 : 0.8,
  }));

  return [...staticRoutes, ...appRoutes, ...gameRoutes];
}
