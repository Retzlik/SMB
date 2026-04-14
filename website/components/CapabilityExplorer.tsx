'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { capabilities } from '@/lib/data/capabilities'
import ScreenshotZone from '@/components/ScreenshotZone'
import { C, se, sn } from '@/lib/design'

export default function CapabilityExplorer() {
  const [active, setActive] = useState(0)
  const t = useTranslations('HomePage.capabilityExplorer')
  const cap = capabilities[active]

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Karl's team capabilities"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          marginBottom: 28,
        }}
      >
        {capabilities.map((c, i) => (
          <button
            key={c.label}
            role="tab"
            aria-selected={active === i}
            aria-controls={`capability-panel-${i}`}
            onClick={() => setActive(i)}
            style={{
              fontFamily: sn,
              fontSize: 13,
              fontWeight: active === i ? 500 : 400,
              padding: '9px 16px',
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              background: active === i ? C.f : 'transparent',
              color: active === i ? C.st : C.mid,
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        id={`capability-panel-${active}`}
        role="tabpanel"
        style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}
      >
        <div style={{ flex: '1 1 380px' }}>
          <div
            style={{
              fontFamily: sn,
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: C.f,
              marginBottom: 6,
            }}
          >
            {t('karlsLabel')} {cap.role}
          </div>
          <h3
            style={{
              fontFamily: se,
              fontSize: 21,
              fontWeight: 400,
              color: C.ink,
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {cap.title}
          </h3>
          <ul
            style={{
              marginTop: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              listStyle: 'none',
              padding: 0,
            }}
          >
            {cap.items.map((item, i) => (
              <li
                key={i}
                style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: C.f,
                    marginTop: 7,
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: sn,
                    fontSize: 13,
                    color: C.ink,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: '1 1 360px', maxWidth: 480 }}>
          <ScreenshotZone
            label={cap.screenshot}
            alt={cap.screenshotAlt}
            height={280}
          />
        </div>
      </div>
    </div>
  )
}
