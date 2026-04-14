import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'de', 'nl', 'se'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/pricing': {
      en: '/pricing',
      de: '/preise',
      nl: '/prijzen',
      se: '/priser',
    },
    '/health-care': {
      en: '/health-care',
      de: '/gesundheitswesen',
      nl: '/gezondheidszorg',
      se: '/halso-och-sjukvard',
    },
    '/professional-services': {
      en: '/professional-services',
      de: '/freie-berufe',
      nl: '/zakelijke-dienstverlening',
      se: '/professionella-tjanster',
    },
    '/home-services': {
      en: '/home-services',
      de: '/handwerk-und-bau',
      nl: '/vakmannen',
      se: '/hantverkare',
    },
    '/automotive': {
      en: '/automotive',
      de: '/automotive',
      nl: '/automotive',
      se: '/automotive',
    },
    '/report': {
      en: '/report',
      de: '/bericht',
      nl: '/rapport',
      se: '/rapport',
    },
  },
})

export type Locale = (typeof routing.locales)[number]
