import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seitz.co.za';

export const viewport: Viewport = {
  themeColor: '#f8fafc',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seitz | Application Architect & Full-Stack Systems Studio",
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
    title: "Seitz | Application Architect & Full-Stack Systems Studio",
    description: "Production-grade web & mobile systems from concept to production. Specialized in Next.js, Android store releases, and Apify data pipelines.",
    siteName: "Seitz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seitz | Application Architect & Full-Stack Systems Studio",
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
    <html
      lang="en"
      className={`scroll-smooth ${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#f8fafc] text-slate-900 font-sans min-h-screen selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
