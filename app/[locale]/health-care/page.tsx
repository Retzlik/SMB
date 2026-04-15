import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReportInput from '@/components/ReportInput'
import DayTimeline from '@/components/DayTimeline'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import { Link } from '@/i18n/navigation'
import { capabilities } from '@/lib/data/capabilities'
import { C, se, sn } from '@/lib/design'

type Props = { params: Promise<{ locale: string }> }

const PRIORITY_CAPS = ['Reviews', 'AI Receptionist', 'Local SEO', 'Listings', 'Social media']

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('healthCare.title'),
    description: t('healthCare.description'),
    alternates: { canonical: '/health-care' },
    openGraph: { images: [{ url: `/api/og?title=Karl+for+Healthcare&sub=Fill+your+schedule.+Manage+your+reputation.+Answer+every+enquiry.`, width: 1200, height: 630 }] },
  }
}

export default async function HealthCarePage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'HealthCarePage' })
  const pt = await getTranslations({ locale, namespace: 'HomePage.pricing' })

  const priorityCaps = capabilities.filter((c) => PRIORITY_CAPS.includes(c.label))

  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px 64px', background: C.pp }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <FadeIn>
            <div
              style={{
                fontFamily: sn,
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.brd,
                marginBottom: 16,
              }}
            >
              Healthcare practices
            </div>
            <h1
              style={{
                fontFamily: se,
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 400,
                color: C.ink,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
              }}
            >
              {t('headline')}
              <br />
              <em style={{ color: C.f }}>{t('headlineItalic')}</em>
            </h1>
            <p
              style={{
                fontFamily: sn,
                fontSize: 17,
                color: C.mid,
                lineHeight: 1.65,
                marginTop: 20,
                maxWidth: 580,
              }}
            >
              {t('subhead')}
            </p>
            <div style={{ marginTop: 28 }}>
              <ReportInput />
            </div>
            <p style={{ fontFamily: sn, fontSize: 13, color: C.brd, marginTop: 16 }}>
              From €299/month · No contracts · GDPR-native
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sub-verticals */}
      <div
        style={{
          borderTop: `1px solid ${C.wg}`,
          borderBottom: `1px solid ${C.wg}`,
          background: C.st,
          padding: '16px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontFamily: sn, fontSize: 11, color: C.mid, fontWeight: 500 }}>
            {t('subverticalsLabel')}:
          </span>
          {[t('subverticals.0'), t('subverticals.1'), t('subverticals.2'), t('subverticals.3')].map(
            (sv) => (
              <span
                key={sv}
                style={{
                  fontFamily: sn,
                  fontSize: 12,
                  color: C.ink,
                }}
              >
                {sv}
              </span>
            )
          )}
        </div>
      </div>

      {/* Why it matters — healthcare-specific */}
      <section style={{ padding: 'clamp(48px, 6vw, 72px) 24px', background: C.pp }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 400,
                color: C.ink,
                letterSpacing: '-0.02em',
                maxWidth: 560,
              }}
            >
              Your patients check reviews before they ever call you.
            </h2>
            <p
              style={{
                fontFamily: sn,
                fontSize: 14,
                color: C.mid,
                marginTop: 12,
                lineHeight: 1.65,
                maxWidth: 560,
              }}
            >
              89% of patients check online reviews before choosing a healthcare provider. A single
              unanswered review costs you more than the price of Karl for a month. He monitors
              Jameda, Google, Trustpilot, and 20+ other platforms — and responds to every review in
              your tone, in your language, within hours.
            </p>
          </FadeIn>

          {/* Key capabilities for healthcare */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 12,
            }}
          >
            {priorityCaps.map((cap, i) => (
              <FadeIn key={cap.label} delay={0.06 * i}>
                <div
                  style={{
                    background: C.st,
                    borderRadius: 8,
                    padding: 24,
                    border: `1px solid ${C.wg}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: sn,
                      fontSize: 9,
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: C.f,
                      marginBottom: 8,
                    }}
                  >
                    Karl's {cap.role}
                  </div>
                  <h3
                    style={{
                      fontFamily: se,
                      fontSize: 17,
                      fontWeight: 400,
                      color: C.ink,
                      lineHeight: 1.3,
                      margin: '0 0 12px',
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: sn,
                      fontSize: 12,
                      color: C.mid,
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {cap.items[0]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* A day with Karl — healthcare framing */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 72px) 24px',
          background: C.st,
          borderTop: `1px solid ${C.wg}`,
          borderBottom: `1px solid ${C.wg}`,
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 40 }}>
            <div
              style={{
                fontFamily: sn,
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.brd,
                marginBottom: 10,
              }}
            >
              A day with Karl
            </div>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(20px, 3vw, 26px)',
                fontWeight: 400,
                color: C.ink,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {t('dayHeadline')}
            </h2>
            <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, marginTop: 8, lineHeight: 1.65 }}>
              {t('daySubhead')}
            </p>
          </FadeIn>
          <DayTimeline />
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: 'clamp(48px, 6vw, 72px) 24px', background: C.pp }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 8 }}>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 400,
                color: C.ink,
                letterSpacing: '-0.02em',
              }}
            >
              {pt('headline')}
            </h2>
            <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, marginTop: 6 }}>
              One implant covers Karl's fee for a year.
            </p>
          </FadeIn>
          <PricingSection
            recommended={pt('recommended')}
            perMonth={pt('perMonth')}
            noContracts={pt('noContracts')}
          />
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
