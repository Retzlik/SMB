import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import KarlLogo from '@/components/KarlLogo'
import { C, sn, se } from '@/lib/design'

export default async function Footer() {
  const t = await getTranslations('Footer')

  const productLinks = [
    { key: 'links.pricing', href: '/pricing' as const },
    { key: 'links.seeYourReport', href: '/report' as const },
  ]
  const industryLinks = [
    { key: 'links.healthcare', href: '/health-care' as const },
    { key: 'links.professionalServices', href: '/professional-services' as const },
    { key: 'links.homeServices', href: '/home-services' as const },
    { key: 'links.automotive', href: '/automotive' as const },
  ]
  const companyLinks = [
    { key: 'links.about', href: '/' as const },
    { key: 'links.privacy', href: '/' as const },
    { key: 'links.terms', href: '/' as const },
  ]

  const linkStyle = {
    fontFamily: sn,
    fontSize: 12,
    color: '#8A8A85',
    textDecoration: 'none',
    display: 'block',
    marginBottom: 8,
  }

  const colHeadStyle = {
    fontFamily: sn,
    fontSize: 9,
    fontWeight: 500 as const,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    color: C.mid,
    marginBottom: 12,
  }

  return (
    <footer style={{ background: C.ink, padding: '44px 24px' }}>
      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 32,
        }}
      >
        <div>
          <div style={{ marginBottom: 10 }}>
            <KarlLogo fontSize={16} color={C.st} />
          </div>
          <p
            style={{
              fontFamily: sn,
              fontSize: 11,
              color: C.mid,
              lineHeight: 1.6,
              maxWidth: 180,
            }}
          >
            {t('tagline')}
            <br />
            {t('company')}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          <div>
            <div style={colHeadStyle}>{t('product')}</div>
            {productLinks.map(({ key, href }) => (
              <Link key={key} href={href} style={linkStyle}>
                {t(key)}
              </Link>
            ))}
          </div>
          <div>
            <div style={colHeadStyle}>{t('industries')}</div>
            {industryLinks.map(({ key, href }) => (
              <Link key={key} href={href} style={linkStyle}>
                {t(key)}
              </Link>
            ))}
          </div>
          <div>
            <div style={colHeadStyle}>{t('company_col')}</div>
            {companyLinks.map(({ key, href }) => (
              <Link key={key} href={href} style={linkStyle}>
                {t(key)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1080,
          margin: '24px auto 0',
          paddingTop: 16,
          borderTop: '1px solid #2C2C2A',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span style={{ fontFamily: sn, fontSize: 10, color: C.mid }}>
          {t('copyright')}
        </span>
        <div style={{ display: 'flex', gap: 16 }}>
          {(['en', 'de', 'se'] as const).map((locale, i) => (
            <span
              key={locale}
              style={{
                fontFamily: sn,
                fontSize: 10,
                color: i === 0 ? '#ccc' : '#555',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {locale}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
