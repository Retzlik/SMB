import { C, se } from '@/lib/design'

interface KarlLogoProps {
  fontSize?: number
  color?: string
  markColor?: string
}

export default function KarlLogo({
  fontSize = 18,
  color = C.ink,
  markColor,
}: KarlLogoProps) {
  const mc = markColor ?? color
  const markH = fontSize * 1.15
  const markW = markH / 1.2
  const gap = fontSize * -0.04

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        gap,
        lineHeight: 1,
      }}
      aria-label="Karl"
    >
      <svg
        width={markW}
        height={markH}
        viewBox="0 0 40 48"
        aria-hidden="true"
        style={{ display: 'block', flexShrink: 0, marginBottom: fontSize * 0.02 }}
      >
        <path d="M8 4 L8 18" fill="none" stroke={mc} strokeWidth="3" strokeLinecap="round" />
        <path d="M8 26 L8 44" fill="none" stroke={mc} strokeWidth="3" strokeLinecap="round" />
        <path d="M14 20 L32 4" fill="none" stroke={mc} strokeWidth="3" strokeLinecap="round" />
        <path d="M8 26 L32 44" fill="none" stroke={mc} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span
        style={{
          fontFamily: se,
          fontSize,
          color,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        arl
      </span>
    </span>
  )
}
