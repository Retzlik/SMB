import type { AbstractIntlMessages } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale
  }

  // Load locale messages. If empty or missing, fall back to English.
  // This lets us keep the i18n infrastructure in place for future languages
  // without blocking the Phase 1 English-only build.
  let messages: AbstractIntlMessages
  try {
    const loaded = (await import(`../messages/${locale}.json`)).default as unknown as AbstractIntlMessages
    messages =
      Object.keys(loaded as Record<string, unknown>).length > 0
        ? loaded
        : ((await import('../messages/en.json')).default as unknown as AbstractIntlMessages)
  } catch {
    messages = (await import('../messages/en.json')).default as unknown as AbstractIntlMessages
  }

  return {
    locale,
    messages,
    // Suppress missing-message errors for locales without translated content yet
    onError(error: { code: string }) {
      if (error.code !== 'MISSING_MESSAGE') {
        throw error
      }
    },
    getMessageFallback({
      namespace,
      key,
    }: {
      namespace?: string
      key: string
    }) {
      return `${namespace}.${key}`
    },
  }
})
