'use client'

import { useRef, useEffect, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function FadeIn({
  children,
  delay = 0,
  style,
  className,
  as: Tag = 'div',
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const Comp = Tag as React.ElementType
  return (
    <Comp
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transition: `opacity 0.5s ${delay}s, transform 0.5s ${delay}s`,
        ...style,
      }}
    >
      {children}
    </Comp>
  )
}
