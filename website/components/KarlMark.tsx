import { C } from '@/lib/design'

interface KarlMarkProps {
  size?: number
  color?: string
}

export default function KarlMark({ size = 20, color = C.f }: KarlMarkProps) {
  const h = size * 1.2
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 40 48"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <path d="M8 4 L8 18" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M8 26 L8 44" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M14 20 L32 4" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M8 26 L32 44" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
