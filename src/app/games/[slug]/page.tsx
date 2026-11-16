import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllGames, getAppBySlug } from '@/data/apps-catalog';
import { ProductDetailView } from '@/components/catalog/ProductDetailView';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllGames().map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getAppBySlug(slug);

  if (!game || game.kind !== 'game') {
    return {
      title: 'Game Not Found | Seitz.co.za',
    };
  }

  const statusLabel =
    game.status === 'production'
      ? 'Live on Google Play'
      : game.status === 'closed_testing'
      ? 'Closed Beta Testing'
      : 'Community Voting';

  return {
    title: `${game.name} | ${statusLabel} | Seitz Games`,
    description: game.summary,
    openGraph: {
      title: `${game.name} - ${game.tagline}`,
      description: game.summary,
      url: `https://seitz.co.za/games/${game.slug}`,
      images: game.media.featureGraphic
        ? [{ url: game.media.featureGraphic }]
        : [{ url: game.media.icon }],
    },
  };
}

export default async function GameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getAppBySlug(slug);

  if (!game || game.kind !== 'game') {
    notFound();
  }

  return <ProductDetailView app={game} sectionContext="game" />;
}
