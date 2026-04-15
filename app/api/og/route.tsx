import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? 'Your AI Marketing Director'
  const sub =
    searchParams.get('sub') ??
    'Reviews · Listings · Local SEO · AI Receptionist · Social · Google Ads'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F4F4F1',
          padding: '64px 72px',
        }}
      >
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="28" height="34" viewBox="0 0 40 48" fill="none">
            <path d="M8 4 L8 18" stroke="#2A4636" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M8 26 L8 44" stroke="#2A4636" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M14 20 L32 4" stroke="#2A4636" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M8 26 L32 44" stroke="#2A4636" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 24,
              color: '#1A1C1A',
              letterSpacing: '-0.5px',
            }}
          >
            arl
          </span>
        </div>

        {/* Title block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 64,
              fontWeight: 400,
              color: '#1A1C1A',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 22,
              color: '#787874',
              fontWeight: 400,
              letterSpacing: '-0.2px',
            }}
          >
            {sub}
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 15,
              color: '#C4C3BE',
              letterSpacing: '0.02em',
            }}
          >
            getkarl.com
          </span>
          <span
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 15,
              color: '#2A4636',
              fontWeight: 600,
              background: 'rgba(42,70,54,0.08)',
              padding: '6px 14px',
              borderRadius: 100,
            }}
          >
            From €299/month
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
