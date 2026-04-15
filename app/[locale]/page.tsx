import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReportInput from '@/components/ReportInput'
import Msg from '@/components/Msg'
import ScreenshotZone from '@/components/ScreenshotZone'
import DayTimeline from '@/components/DayTimeline'
import CapabilityExplorer from '@/components/CapabilityExplorer'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import KarlLogo from '@/components/KarlLogo'
import { Link } from '@/i18n/navigation'
import { verticals } from '@/lib/data/verticals'
import { C, se, sn, mono } from '@/lib/design'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('home.title'),
    description: t('home.description'),
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      url: '/',
      type: 'website',
    },
    alternates: { canonical: '/' },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'HomePage' })
  const pt = await getTranslations({ locale, namespace: 'HomePage.pricing' })
  const setup = await getTranslations({ locale, namespace: 'HomePage.setup' })

  const setupBlocks = [
    {
      label: setup('day1.label'),
      items: [setup('day1.items.0'), setup('day1.items.1'), setup('day1.items.2')],
    },
    {
      label: setup('week1.label'),
      items: [setup('week1.items.0'), setup('week1.items.1'), setup('week1.items.2')],
    },
    {
      label: setup('ongoing.label'),
      items: [setup('ongoing.items.0'), setup('ongoing.items.1'), setup('ongoing.items.2')],
    },
  ]

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section
        style={{ padding: 'clamp(64px, 8vw, 100px) 24px 80px', background: C.pp }}
        aria-label="Hero"
      >
        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            display: 'flex',
            gap: 48,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <FadeIn style={{ flex: '1 1 420px' }}>
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
              {t('hero.headline')}
              <br />
              <em style={{ color: C.f }}>{t('hero.headlineItalic')}</em>
            </h1>
            <p
              style={{
                fontFamily: sn,
                fontSize: 17,
                color: C.mid,
                lineHeight: 1.65,
                maxWidth: 460,
                marginTop: 20,
              }}
            >
              {t('hero.subhead')}
            </p>
            <div style={{ marginTop: 28 }}>
              <ReportInput />
            </div>
            <p
              style={{ fontFamily: sn, fontSize: 13, color: C.brd, marginTop: 16 }}
            >
              {t('hero.trustLine')}
            </p>
          </FadeIn>

          {/* Chat simulation */}
          <FadeIn delay={0.15} style={{ flex: '0 1 340px' }}>
            <div
              style={{
                background: C.st,
                borderRadius: 12,
                padding: 16,
                border: `1px solid ${C.wg}`,
              }}
              role="img"
              aria-label="Sample conversation with Karl showing how he handles business tasks"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 14,
                  paddingBottom: 10,
                  borderBottom: `1px solid ${C.wg}`,
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: C.f,
                    boxShadow: `0 0 0 3px rgba(42,70,54,0.12)`,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily: sn,
                    fontSize: 10,
                    fontWeight: 500,
                    color: C.f,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('chat.header')}
                </span>
                <span
                  style={{ fontFamily: sn, fontSize: 10, color: C.brd, marginLeft: 'auto' }}
                >
                  {t('chat.today')}
                </span>
              </div>
              <Msg from="you" time="09:23">{t('chat.msg1You')}</Msg>
              <Msg from="karl" time="09:24">{t('chat.msg1Karl')}</Msg>
              <Msg from="you" time="14:30">{t('chat.msg2You')}</Msg>
              <Msg from="karl" time="14:30">{t('chat.msg2Karl')}</Msg>
              <Msg from="you" time="14:31">{t('chat.msg3You')}</Msg>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PLATFORM STRIP ── */}
      <div
        style={{
          borderTop: `1px solid ${C.wg}`,
          borderBottom: `1px solid ${C.wg}`,
          background: C.st,
          padding: '14px 24px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontFamily: sn, fontSize: 11, color: C.mid, paddingRight: 20, whiteSpace: 'nowrap' }}>
            Keeps you visible on
          </span>
          {[
            'Google Business',
            'Apple Maps',
            'Trustpilot',
            'Facebook',
            'Instagram',
            'Yelp',
            'Jameda',
            'WhatsApp',
            'Google Ads',
            '40+ more',
          ].map((name, i, arr) => (
            <span key={name} style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: sn,
                  fontSize: 11,
                  fontWeight: 500,
                  color: C.brd,
                  whiteSpace: 'nowrap',
                  padding: '2px 0',
                }}
              >
                {name}
              </span>
              {i < arr.length - 1 && (
                <span style={{ color: C.wg, padding: '0 12px', fontSize: 14, lineHeight: 1 }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── A DAY WITH KARL ── */}
      <section
        style={{ padding: 'clamp(48px, 6vw, 80px) 24px', background: C.pp }}
        aria-label="A day with Karl"
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
              {t('dayWithKarl.eyebrow')}
            </div>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 400,
                color: C.ink,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {t('dayWithKarl.headline')}
            </h2>
            <p
              style={{
                fontFamily: sn,
                fontSize: 14,
                color: C.mid,
                marginTop: 8,
                lineHeight: 1.65,
              }}
            >
              {t('dayWithKarl.subhead')}
            </p>
          </FadeIn>
          <DayTimeline />
          <div style={{ marginTop: 32, paddingLeft: 48 }}>
            <Link
              href="/report"
              style={{
                display: 'inline-block',
                fontFamily: sn,
                fontSize: 14,
                fontWeight: 500,
                padding: '12px 24px',
                borderRadius: 4,
                background: C.f,
                color: C.st,
                textDecoration: 'none',
              }}
            >
              {t('dayWithKarl.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── YOUR DASHBOARD ── */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 64px) 24px',
          background: C.st,
          borderTop: `1px solid ${C.wg}`,
          borderBottom: `1px solid ${C.wg}`,
        }}
        aria-label="Dashboard"
      >
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(20px, 3vw, 24px)',
                fontWeight: 400,
                color: C.ink,
                letterSpacing: '-0.01em',
              }}
            >
              {t('dashboard.headline')}
            </h2>
            <p
              style={{
                fontFamily: sn,
                fontSize: 14,
                color: C.mid,
                lineHeight: 1.65,
                marginTop: 8,
                maxWidth: 480,
              }}
            >
              {t('dashboard.subhead')}
            </p>
            <a
              href={process.env.NEXT_PUBLIC_APP_URL ?? '#'}
              style={{
                fontFamily: sn,
                fontSize: 13,
                color: C.f,
                textDecoration: 'none',
                fontWeight: 500,
                display: 'inline-block',
                marginTop: 12,
              }}
            >
              {t('dashboard.loginLink')}
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ScreenshotZone
              label={t('dashboard.screenshotLabel')}
              alt={t('dashboard.screenshotAlt')}
              height={400}
            />
          </FadeIn>
        </div>
      </section>

      {/* ── CAPABILITY EXPLORER ── */}
      <section
        id="capabilities"
        style={{ padding: 'clamp(48px, 6vw, 80px) 24px', background: C.pp }}
        aria-label="Karl's team capabilities"
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn style={{ marginBottom: 32 }}>
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
              {t('capabilityExplorer.eyebrow')}
            </div>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 400,
                color: C.ink,
                letterSpacing: '-0.02em',
              }}
            >
              {t('capabilityExplorer.headline')}
            </h2>
            <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, marginTop: 6 }}>
              {t('capabilityExplorer.subhead')}
            </p>
          </FadeIn>
          <CapabilityExplorer />
        </div>
      </section>

      {/* ── VERTICALS ── */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 64px) 24px',
          background: C.st,
          borderTop: `1px solid ${C.wg}`,
          borderBottom: `1px solid ${C.wg}`,
        }}
        aria-label="Industries"
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(20px, 3vw, 24px)',
                fontWeight: 400,
                color: C.ink,
                letterSpacing: '-0.01em',
                marginBottom: 20,
              }}
            >
              {t('verticals.headline')}
            </h2>
          </FadeIn>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: 10,
            }}
          >
            {verticals.map((v, i) => (
              <FadeIn key={v.slug} delay={0.05 * i} style={{ height: '100%' }}>
                <Link
                  href={v.href as Parameters<typeof Link>[0]['href']}
                  style={{ display: 'block', textDecoration: 'none', height: '100%' }}
                >
                  <VerticalCard vertical={v} />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        style={{ padding: 'clamp(48px, 6vw, 80px) 24px', background: C.pp }}
        aria-label="Pricing"
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn>
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
              {pt('subhead')}
            </p>
          </FadeIn>
          <PricingSection
            recommended={pt('recommended')}
            perMonth={pt('perMonth')}
            noContracts={pt('noContracts')}
          />
        </div>
      </section>

      {/* ── SETUP TIMELINE ── */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 64px) 24px',
          background: C.st,
          borderTop: `1px solid ${C.wg}`,
          borderBottom: `1px solid ${C.wg}`,
        }}
        aria-label="What happens when you sign up"
      >
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: se,
                fontSize: 'clamp(20px, 3vw, 24px)',
                fontWeight: 400,
                color: C.ink,
                marginBottom: 28,
              }}
            >
              {setup('headline')}
            </h2>
          </FadeIn>
          {setupBlocks.map((block, bi) => (
            <FadeIn key={block.label} delay={0.08 * bi}>
              <div
                style={{
                  marginBottom: bi < 2 ? 24 : 0,
                  paddingBottom: bi < 2 ? 24 : 0,
                  borderBottom: bi < 2 ? `1px solid ${C.wg}` : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: sn,
                    fontSize: 10,
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: C.f,
                    marginBottom: 10,
                  }}
                >
                  {block.label}
                </div>
                {block.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                      marginBottom: 6,
                    }}
                  >
                    <span aria-hidden="true" style={{ color: C.f, fontSize: 12, marginTop: 1 }}>
                      ✓
                    </span>
                    <p
                      style={{
                        fontFamily: sn,
                        fontSize: 13,
                        color: C.ink,
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTASection
        headline={t('finalCta.headline')}
        headlineItalic={t('finalCta.headlineItalic')}
        subhead={t('finalCta.subhead')}
      />

      <Footer />
    </>
  )
}

// Inline subcomponent — vertical card with hover via CSS class (server-safe, no event handlers)
function VerticalCard({ vertical }: { vertical: (typeof verticals)[0] }) {
  return (
    <div
      className="vertical-card"
      style={{
        background: C.pp,
        borderRadius: 8,
        padding: 22,
        height: '100%',
      }}
    >
      <div
        style={{
          fontFamily: sn,
          fontSize: 9,
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: C.mid,
          marginBottom: 8,
        }}
      >
        {vertical.category}
      </div>
      <h3
        style={{
          fontFamily: se,
          fontSize: 18,
          fontWeight: 400,
          color: C.ink,
          margin: 0,
          lineHeight: 1.25,
        }}
      >
        {vertical.headline}
        <br />
        <em style={{ color: C.f }}>{vertical.headlineItalic}</em>
      </h3>
      <p style={{ fontFamily: sn, fontSize: 11, color: C.brd, marginTop: 8 }}>
        {vertical.subverticals}
      </p>
    </div>
  )
}
