'use client'

import { useRef } from 'react'
import { dayLog } from '@/lib/data/dayLog'
import { C, sn, mono } from '@/lib/design'

export default function DayTimeline() {
  const topFadeRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (topFadeRef.current) {
      topFadeRef.current.style.opacity = e.currentTarget.scrollTop > 10 ? '1' : '0'
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Top fade */}
      <div
        ref={topFadeRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 24,
          background: `linear-gradient(to bottom, ${C.pp}, transparent)`,
          zIndex: 2,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.2s',
        }}
      />
      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 40,
          background: `linear-gradient(to top, ${C.pp}, transparent)`,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div
        className="tl-scroll"
        onScroll={handleScroll}
        style={{
          maxHeight: 380,
          overflowY: 'auto',
          paddingLeft: 48,
          paddingRight: 8,
          paddingBottom: 24,
          position: 'relative',
        }}
      >
        {/* Vertical timeline line */}
        <div
          style={{
            position: 'absolute',
            left: 19,
            top: 8,
            bottom: 8,
            width: 1,
            background: C.wg,
          }}
        />

        {dayLog.map((item, i) => (
          <div
            key={i}
            style={{ position: 'relative', paddingBottom: i < dayLog.length - 1 ? 20 : 0 }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: 'absolute',
                left: -48 + 13,
                top: 5,
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: C.pp,
                border: `2px solid ${C.f}`,
                zIndex: 1,
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: C.brd }}>{item.t}</span>
                <p
                  style={{
                    fontFamily: sn,
                    fontSize: 13,
                    color: C.ink,
                    lineHeight: 1.55,
                    margin: '3px 0 0',
                  }}
                >
                  {item.a}
                </p>
              </div>
              <span
                style={{
                  fontFamily: sn,
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: C.f,
                  background: 'rgba(42,70,54,0.07)',
                  padding: '3px 8px',
                  borderRadius: 3,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  height: 'fit-content',
                }}
              >
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
