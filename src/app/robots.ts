import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/admin/', '/api/test/'],
      },
    ],
    sitemap: 'https://seitz.co.za/sitemap.xml',
  };
}
