import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Instrument_Serif, Libre_Franklin } from 'next/font/google'
import { routing } from '@/i18n/routing'
import JsonLd from '@/components/JsonLd'
import '@/app/globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://getkarl.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s — Karl',
    default: 'Karl — Your AI Marketing Director',
  },
  description:
    'Karl manages your reviews, listings, local SEO, AI receptionist, social media, and Google Ads. More customers. Zero effort. From €299/month.',
  openGraph: {
    siteName: 'Karl',
    type: 'website',
    images: [
      {
        url: `/api/og?title=Your+AI+Marketing+Director`,
        width: 1200,
        height: 630,
        alt: 'Karl — Your AI Marketing Director',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`/api/og?title=Your+AI+Marketing+Director`],
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://getkarl.com'
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  return (
    <html
      lang={locale}
      className={`${instrumentSerif.variable} ${libreFranklin.variable}`}
    >
      <head>
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
        <link rel="canonical" href={siteUrl} />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': `${siteUrl}/#organization`,
                name: 'Karl',
                url: siteUrl,
                logo: `${siteUrl}/api/og`,
                description:
                  'AI marketing director for European SMBs. Manages reviews, listings, local SEO, AI receptionist, social media, and Google Ads.',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Stockholm',
                  addressCountry: 'SE',
                },
                areaServed: ['DE', 'GB', 'NL', 'SE'],
              },
              {
                '@type': 'SoftwareApplication',
                '@id': `${siteUrl}/#software`,
                name: 'Karl',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                url: siteUrl,
                description:
                  'All-in-one AI marketing director for local businesses. Reviews, listings, SEO, AI receptionist, social media, and Google Ads in one monthly plan.',
                offers: {
                  '@type': 'AggregateOffer',
                  priceCurrency: 'EUR',
                  lowPrice: 299,
                  highPrice: 799,
                  offerCount: 3,
                },
                provider: { '@id': `${siteUrl}/#organization` },
              },
            ],
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <NextIntlClientProvider messages={messages}>
          <div id="main-content">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
