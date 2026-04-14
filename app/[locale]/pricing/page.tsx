import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PricingSection from '@/components/PricingSection'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import { alaCarteItems } from '@/lib/data/pricing'
import { C, se, sn } from '@/lib/design'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('pricing.title'),
    description: t('pricing.description'),
    alternates: { canonical: '/pricing' },
  }
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'PricingPage' })

  // Build FAQ items from translations
  const faqItems = Array.from({ length: 7 }, (_, i) => ({
    q: t(`faq.${i}.q`),
    a: t(`faq.${i}.a`),
  }))

  return (
    <>
      <Nav />

      {/* Header */}
      <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px 48px', background: C.pp }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn>
            <h1
              style={{
                fontFamily: se,
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 400,
                color: C.ink,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
              }}
            >
              {t('headline')}
            </h1>
            <p
              style={{
                fontFamily: sn,
                fontSize: 17,
                color: C.mid,
                marginTop: 12,
                lineHeight: 1.65,
              }}
            >
              {t('subhead')}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <PricingSection
              recommended={t('recommended')}
              perMonth={t('perMonth')}
              noContracts={t('noContracts')}
              ctaHref="/report"
            />
          </FadeIn>
        </div>
      </section>

      {/* À la carte */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 80px) 24px',
          background: C.st,
          borderTop: `1px solid ${C.wg}`,
          borderBottom: `1px solid ${C.wg}`,
        }}
        aria-label="À la carte add-ons"
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 400,
                color: C.ink,
                letterSpacing: '-0.02em',
              }}
            >
              {t('alaCarteHeadline')}
            </h2>
            <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, marginTop: 8 }}>
              {t('alaCarteSubhead')}
            </p>
          </FadeIn>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 12,
            }}
          >
            {alaCarteItems.map((item, i) => (
              <FadeIn key={item.name} delay={0.05 * i}>
                <div
                  style={{
                    background: C.pp,
                    borderRadius: 8,
                    padding: 24,
                    border: `1px solid ${C.wg}`,
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 12,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: sn,
                        fontSize: 14,
                        fontWeight: 500,
                        color: C.ink,
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </h3>
                    <div
                      style={{ display: 'flex', alignItems: 'baseline', gap: 2, flexShrink: 0 }}
                    >
                      <span
                        style={{ fontFamily: se, fontSize: 22, color: C.ink, marginLeft: 12 }}
                      >
                        €{item.price}
                      </span>
                      <span style={{ fontFamily: sn, fontSize: 11, color: C.mid }}>
                        {t('alaCartePerMonth')}
                      </span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px' }}>
                    {item.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          display: 'flex',
                          gap: 8,
                          alignItems: 'flex-start',
                          marginBottom: 5,
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ color: C.f, fontSize: 11, marginTop: 1 }}
                        >
                          ✓
                        </span>
                        <span
                          style={{ fontFamily: sn, fontSize: 12, color: C.ink, lineHeight: 1.45 }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {item.includedIn.map((slug) => (
                      <span
                        key={slug}
                        style={{
                          fontFamily: sn,
                          fontSize: 9,
                          fontWeight: 500,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: C.f,
                          background: 'rgba(42,70,54,0.07)',
                          padding: '2px 6px',
                          borderRadius: 3,
                        }}
                      >
                        {slug}
                      </span>
                    ))}
                    {item.includedIn.length > 0 && (
                      <span
                        style={{ fontFamily: sn, fontSize: 9, color: C.mid, alignSelf: 'center' }}
                      >
                        {t('includedIn')}
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ padding: 'clamp(48px, 6vw, 80px) 24px', background: C.pp }}
        aria-label="FAQ"
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FAQAccordion items={faqItems} headline={t('faqHeadline')} />
        </div>
      </section>

      <CTASection
        headline={t('finalCta.headline')}
        headlineItalic=""
        subhead={t('finalCta.subhead')}
      />

      <Footer />
    </>
  )
}
