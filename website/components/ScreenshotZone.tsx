import { C, sn } from '@/lib/design'

interface ScreenshotZoneProps {
  label: string
  alt?: string
  height?: number
}

export default function ScreenshotZone({ label, alt, height = 320 }: ScreenshotZoneProps) {
  return (
    <div
      role="img"
      aria-label={alt ?? label}
      style={{
        background: C.st,
        borderRadius: 8,
        border: `1px solid ${C.wg}`,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: C.wg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="1" y="3" width="14" height="10" rx="1.5" stroke={C.brd} strokeWidth="1.2" />
          <circle cx="5.5" cy="7" r="1.5" stroke={C.brd} strokeWidth="1" />
          <path
            d="M1 11l3.5-3 2.5 2 3-3.5L14 11"
            stroke={C.brd}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span
        style={{
          fontFamily: sn,
          fontSize: 10,
          color: C.brd,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontWeight: 500,
          textAlign: 'center',
          padding: '0 16px',
        }}
      >
        {label}
      </span>
      {alt && (
        <span
          style={{
            fontFamily: sn,
            fontSize: 10,
            color: C.brd,
            opacity: 0.6,
            textAlign: 'center',
            padding: '0 16px',
          }}
        >
          {alt}
        </span>
      )}
    </div>
  )
}
