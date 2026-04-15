import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://getkarl.com'

// Indexed pages with their per-locale paths (report is noindex — excluded)
const pages: { priority: number; locales: Record<string, string> }[] = [
  {
    priority: 1.0,
    locales: { en: '/', de: '/de', nl: '/nl', se: '/se' },
  },
  {
    priority: 0.9,
    locales: { en: '/pricing', de: '/de/preise', nl: '/nl/prijzen', se: '/se/priser' },
  },
  {
    priority: 0.8,
    locales: {
      en: '/health-care',
      de: '/de/gesundheitswesen',
      nl: '/nl/gezondheidszorg',
      se: '/se/halso-och-sjukvard',
    },
  },
  {
    priority: 0.8,
    locales: {
      en: '/professional-services',
      de: '/de/freie-berufe',
      nl: '/nl/zakelijke-dienstverlening',
      se: '/se/professionella-tjanster',
    },
  },
  {
    priority: 0.8,
    locales: {
      en: '/home-services',
      de: '/de/handwerk-und-bau',
      nl: '/nl/vakmannen',
      se: '/se/hantverkare',
    },
  },
  {
    priority: 0.8,
    locales: {
      en: '/automotive',
      de: '/de/automotive',
      nl: '/nl/automotive',
      se: '/se/automotive',
    },
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ priority, locales }) =>
    Object.entries(locales).map(([, path]) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(locales).map(([locale, p]) => [locale, `${siteUrl}${p}`])
        ),
      },
    }))
  )
}
