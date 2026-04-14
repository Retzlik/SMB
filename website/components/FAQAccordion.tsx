'use client'

import { useState } from 'react'
import { C, se, sn } from '@/lib/design'

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  headline?: string
}

export default function FAQAccordion({ items, headline = 'Common questions.' }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {headline && (
        <h2
          style={{
            fontFamily: se,
            fontSize: 'clamp(22px, 3vw, 28px)',
            fontWeight: 400,
            color: C.ink,
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}
        >
          {headline}
        </h2>
      )}
      <div role="list">
        {items.map((item, i) => (
          <div
            key={i}
            role="listitem"
            style={{
              borderTop: `1px solid ${C.wg}`,
              paddingTop: 0,
            }}
          >
            <button
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '18px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: sn,
                  fontSize: 15,
                  fontWeight: 500,
                  color: C.ink,
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  transform: open === i ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                  color: C.mid,
                }}
              >
                <path
                  d="M3 6l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {open === i && (
              <div style={{ paddingBottom: 20 }}>
                <p
                  style={{
                    fontFamily: sn,
                    fontSize: 14,
                    color: C.mid,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${C.wg}` }} />
      </div>
    </div>
  )
}
