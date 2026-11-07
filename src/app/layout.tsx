import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seitz.co.za';

export const viewport: Viewport = {
  themeColor: '#090a0f',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seitz | Application Architect & Full-Stack Engineer",
    template: "%s | Seitz",
  },
  description: "Production-grade web and mobile engineering, Google Play verified Android applications, and scalable Apify automation pipelines. Home of the Seitz Testing Lab.",
  applicationName: "Seitz Platform",
  keywords: [
    "Seitz",
    "Muhammed Faiz Seitz",
    "Application Architect",
    "Full-Stack Engineer",
    "Android App Development",
    "Google Play Closed Testing",
    "Apify Cloud Actors",
    "Web Automation",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "South Africa",
    "Durban",
    "Upwork",
    "Fiverr Pro"
  ],
  authors: [{ name: "Muhammed Faiz Seitz", url: "mailto:byseitz.agency@gmail.com" }],
  creator: "Muhammed Faiz Seitz",
  publisher: "Seitz",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    title: "Seitz | Application Architect & Full-Stack Engineer",
    description: "Production-grade web & mobile systems from concept to production. Specialized in Next.js, Android store releases, and Apify data pipelines.",
    siteName: "Seitz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seitz | Application Architect & Full-Stack Engineer",
    description: "Production-grade web & mobile systems, Android Google Play testing cohorts, and Apify actors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://seitz.co.za/#person',
        name: 'Muhammed Faiz Seitz',
        alternateName: 'Seitz',
        url: 'https://seitz.co.za',
        jobTitle: 'Application Architect & Full-Stack Engineer',
        email: 'byseitz.agency@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Durban',
          addressRegion: 'KwaZulu-Natal',
          addressCountry: 'ZA',
        },
        sameAs: [
          'https://github.com/seitzmf',
          'https://www.linkedin.com/in/muhammed-faiz-seitz/',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://seitz.co.za/#service',
        name: 'Seitz Platform & Testing Lab',
        url: 'https://seitz.co.za',
        email: 'byseitz.agency@gmail.com',
        description:
          'Turnkey web & mobile application engineering, Apify data scraping pipelines, and Google Play 12-tester closed testing verification.',
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Durban',
          addressCountry: 'ZA',
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased bg-[#090a0f] text-[#f3f4f6] min-h-screen selection:bg-sky-400 selection:text-black"
      >
        {children}
      </body>
    </html>
  );
}
