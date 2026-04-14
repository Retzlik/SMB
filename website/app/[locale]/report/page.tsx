import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ReportForm from '@/components/ReportForm'
import FadeIn from '@/components/FadeIn'
import { C, se, sn } from '@/lib/design'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('report.title'),
    description: t('report.description'),
    alternates: { canonical: '/report' },
    robots: { index: false }, // Lead-gen page — no SEO needed
  }
}

export default async function ReportPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ReportPage' })

  const whatYouGet = [
    t('whatYouGet.items.0'),
    t('whatYouGet.items.1'),
    t('whatYouGet.items.2'),
    t('whatYouGet.items.3'),
    t('whatYouGet.items.4'),
  ]

  return (
    <>
      <Nav />

      <main style={{ background: C.pp, minHeight: '100vh' }}>
        <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px 80px' }}>
          <div
            style={{
              maxWidth: 1080,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: 64,
              alignItems: 'start',
            }}
            className="report-grid"
          >
            {/* Left: headline + what you'll get */}
            <FadeIn>
              <h1
                style={{
                  fontFamily: se,
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  fontWeight: 400,
                  color: C.ink,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: 16,
                }}
              >
                {t('headline')}
              </h1>
              <p
                style={{
                  fontFamily: sn,
                  fontSize: 16,
                  color: C.mid,
                  lineHeight: 1.65,
                  marginBottom: 40,
                }}
              >
                {t('subhead')}
              </p>

              {/* What you'll get */}
              <div
                style={{
                  background: C.st,
                  borderRadius: 8,
                  padding: 28,
                  border: `1px solid ${C.wg}`,
                }}
              >
                <h2
                  style={{
                    fontFamily: sn,
                    fontSize: 12,
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: C.mid,
                    marginBottom: 16,
                  }}
                >
                  {t('whatYouGet.headline')}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {whatYouGet.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start',
                        marginBottom: i < whatYouGet.length - 1 ? 12 : 0,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ color: C.f, fontSize: 12, marginTop: 1, flexShrink: 0 }}
                      >
                        ✓
                      </span>
                      <span
                        style={{ fontFamily: sn, fontSize: 13, color: C.ink, lineHeight: 1.5 }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontFamily: sn,
                    fontSize: 12,
                    color: C.mid,
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: `1px solid ${C.wg}`,
                    lineHeight: 1.5,
                  }}
                >
                  {t('timing')}
                </p>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.12}>
              <div
                style={{
                  background: C.pp,
                  borderRadius: 8,
                  padding: 32,
                  border: `1px solid ${C.wg}`,
                }}
              >
                <ReportForm />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .report-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  )
}
