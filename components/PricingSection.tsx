import { Link } from '@/i18n/navigation'
import { pricingTiers } from '@/lib/data/pricing'
import { C, se, sn } from '@/lib/design'

interface PricingSectionProps {
  recommended?: string
  perMonth?: string
  noContracts?: string
  ctaHref?: '/report' | '/pricing'
  compact?: boolean
}

export default function PricingSection({
  recommended = 'Recommended',
  perMonth = '/month',
  noContracts = 'No contracts · No onboarding fees · Cancel anytime',
  ctaHref = '/report',
  compact = false,
}: PricingSectionProps) {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 12,
          marginTop: compact ? 0 : 32,
        }}
      >
        {pricingTiers.map((tier) => (
          <div
            key={tier.slug}
            style={{
              background: C.pp,
              borderRadius: 8,
              padding: 28,
              border: tier.recommended ? `2px solid ${C.f}` : `1px solid ${C.wg}`,
              position: 'relative',
            }}
          >
            {tier.recommended && (
              <div
                aria-label={recommended}
                style={{
                  position: 'absolute',
                  top: -1,
                  left: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                  fontFamily: sn,
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  background: C.f,
                  color: C.st,
                  padding: '3px 10px',
                  borderRadius: 3,
                  whiteSpace: 'nowrap',
                }}
              >
                {recommended}
              </div>
            )}

            <div
              style={{
                fontFamily: sn,
                fontSize: 11,
                fontWeight: 500,
                color: C.mid,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {tier.name}
            </div>

            <div
              style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginTop: 6 }}
            >
              <span style={{ fontFamily: se, fontSize: 36, color: C.ink }}>
                €{tier.price}
              </span>
              <span style={{ fontFamily: sn, fontSize: 13, color: C.mid }}>{perMonth}</span>
            </div>

            <p
              style={{
                fontFamily: sn,
                fontSize: 14,
                color: C.f,
                fontWeight: 500,
                margin: '6px 0 4px',
              }}
            >
              {tier.team}
            </p>
            <p
              style={{
                fontFamily: sn,
                fontSize: 11,
                color: C.brd,
                margin: '0 0 16px',
                lineHeight: 1.5,
              }}
            >
              {tier.teamDetail}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {tier.features.map((feat, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: sn,
                    fontSize: 13,
                    color: C.ink,
                    display: 'flex',
                    gap: 7,
                    alignItems: 'flex-start',
                    marginBottom: 7,
                  }}
                >
                  {!(i === 0 && feat.startsWith('Everything')) && (
                    <span aria-hidden="true" style={{ color: C.f, fontSize: 12, marginTop: 1 }}>
                      ✓
                    </span>
                  )}
                  <span style={{ lineHeight: 1.45 }}>{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              href={ctaHref}
              style={{
                fontFamily: sn,
                fontSize: 13,
                fontWeight: 500,
                padding: '10px 0',
                borderRadius: 4,
                border: tier.recommended ? 'none' : `1.5px solid ${C.f}`,
                background: tier.recommended ? C.f : 'transparent',
                color: tier.recommended ? C.st : C.f,
                cursor: 'pointer',
                marginTop: 14,
                width: '100%',
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              {tier.features[0].startsWith('Everything') ? 'Get started' : 'See how your business looks online'}
            </Link>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: sn,
          fontSize: 12,
          color: C.mid,
          textAlign: 'center',
          marginTop: 18,
        }}
      >
        {noContracts}
      </p>
    </>
  )
}
