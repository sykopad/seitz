import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { appsCatalog, getAppBySlug } from '@/data/apps-catalog';
import { ProductDetailView } from '@/components/catalog/ProductDetailView';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return appsCatalog.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: 'App Not Found | Seitz.co.za',
    };
  }

  const statusLabel =
    app.status === 'production'
      ? 'Live on Google Play'
      : app.status === 'closed_testing'
      ? 'Closed Beta Testing'
      : 'Community Voting';

  return {
    title: `${app.name} | ${statusLabel} | Seitz`,
    description: app.summary,
    openGraph: {
      title: `${app.name} - ${app.tagline}`,
      description: app.summary,
      url: `https://seitz.co.za/apps/${app.slug}`,
      images: app.media.featureGraphic
        ? [{ url: app.media.featureGraphic }]
        : [{ url: app.media.icon }],
    },
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return <ProductDetailView app={app} sectionContext={app.kind} />;
}
