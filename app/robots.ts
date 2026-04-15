import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://getkarl.com'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow report pages (noindex) and API routes
        disallow: ['/api/', '/report', '/de/bericht', '/nl/rapport', '/se/rapport'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
