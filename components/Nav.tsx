'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import KarlLogo from '@/components/KarlLogo'
import { C, sn } from '@/lib/design'

const industries = [
  { href: '/health-care' as const, label: 'Healthcare', desc: 'Clinics, dentists & practices' },
  { href: '/professional-services' as const, label: 'Professional services', desc: 'Lawyers, accountants & advisors' },
  { href: '/home-services' as const, label: 'Home services', desc: 'Builders, plumbers & tradespeople' },
  { href: '/automotive' as const, label: 'Automotive', desc: 'Garages, dealers & workshops' },
]

export default function Nav() {
  const t = useTranslations('Nav')
  const [menuOpen, setMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? '#'

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: 920,
          zIndex: 100,
          background: 'rgba(250,250,248,0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(196,195,190,0.45)',
          borderRadius: 100,
          boxShadow: '0 2px 20px rgba(26,28,26,0.07), 0 0 0 0.5px rgba(196,195,190,0.2)',
          padding: '0 6px 0 20px',
        }}
        aria-label="Main navigation"
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 52,
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Karl — home" style={{ flexShrink: 0 }}>
            <KarlLogo fontSize={17} color={C.ink} markColor={C.f} />
          </Link>

          {/* Desktop links */}
          <div
            className="nav-desktop"
            style={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            {/* Industries dropdown trigger */}
            <div ref={dropdownRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                aria-expanded={industriesOpen}
                aria-haspopup="menu"
                className="nav-pill-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  fontFamily: sn,
                  fontSize: 13,
                  color: C.mid,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  borderRadius: 100,
                }}
              >
                {t('industries')}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden="true"
                  style={{
                    transition: 'transform 0.18s ease',
                    transform: industriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    marginTop: 1,
                  }}
                >
                  <path d="M2 3.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {industriesOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(250,250,248,0.97)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(196,195,190,0.5)',
                    borderRadius: 18,
                    boxShadow: '0 8px 40px rgba(26,28,26,0.11)',
                    padding: 6,
                    minWidth: 252,
                    zIndex: 200,
                  }}
                  role="menu"
                >
                  {industries.map((ind) => (
                    <Link
                      key={ind.href}
                      href={ind.href}
                      onClick={() => setIndustriesOpen(false)}
                      role="menuitem"
                      className="nav-dropdown-item"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: '10px 14px',
                        borderRadius: 12,
                        textDecoration: 'none',
                      }}
                    >
                      <span style={{ fontFamily: sn, fontSize: 13, fontWeight: 500, color: C.ink }}>{ind.label}</span>
                      <span style={{ fontFamily: sn, fontSize: 12, color: C.mid }}>{ind.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="nav-pill-btn" style={{ fontFamily: sn, fontSize: 13, color: C.mid, textDecoration: 'none', padding: '6px 12px', borderRadius: 100, display: 'inline-block' }}>
              {t('pricing')}
            </Link>

            <a href={appUrl} className="nav-pill-btn" style={{ fontFamily: sn, fontSize: 13, color: C.mid, textDecoration: 'none', padding: '6px 12px', borderRadius: 100, display: 'inline-block' }}>
              {t('logIn')}
            </a>

            <Link
              href="/report"
              style={{
                fontFamily: sn,
                fontSize: 13,
                fontWeight: 500,
                padding: '9px 18px',
                borderRadius: 100,
                background: C.f,
                color: '#fff',
                textDecoration: 'none',
                display: 'inline-block',
                marginLeft: 4,
                letterSpacing: '-0.01em',
              }}
            >
              {t('seeYourReport')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="nav-hamburger"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              color: C.ink,
              marginRight: 8,
            }}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Spacer so page content doesn't sit under the fixed nav */}
      <div style={{ height: 84 }} aria-hidden="true" />

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 80,
            left: 16,
            right: 16,
            zIndex: 99,
            background: 'rgba(250,250,248,0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(196,195,190,0.5)',
            borderRadius: 20,
            boxShadow: '0 8px 40px rgba(26,28,26,0.11)',
            padding: 8,
          }}
        >
          <p style={{ fontFamily: sn, fontSize: 11, fontWeight: 500, color: C.mt, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '8px 14px 4px', margin: 0 }}>
            {t('industries')}
          </p>
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              onClick={() => setMenuOpen(false)}
              className="nav-mobile-item"
              style={{
                display: 'block',
                fontFamily: sn,
                fontSize: 15,
                color: C.ink,
                textDecoration: 'none',
                padding: '10px 14px',
                borderRadius: 12,
              }}
            >
              {ind.label}
            </Link>
          ))}
          <div style={{ height: 1, background: C.wg, margin: '6px 14px' }} />
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="nav-mobile-item" style={{ display: 'block', fontFamily: sn, fontSize: 15, color: C.ink, textDecoration: 'none', padding: '10px 14px', borderRadius: 12 }}>
            {t('pricing')}
          </Link>
          <a href={appUrl} className="nav-mobile-item" style={{ display: 'block', fontFamily: sn, fontSize: 15, color: C.mid, textDecoration: 'none', padding: '10px 14px', borderRadius: 12 }}>
            {t('logIn')}
          </a>
          <div style={{ padding: '6px 0 2px' }}>
            <Link
              href="/report"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: sn,
                fontSize: 15,
                fontWeight: 500,
                color: '#fff',
                textDecoration: 'none',
                padding: '13px 14px',
                borderRadius: 12,
                background: C.f,
                textAlign: 'center',
              }}
            >
              {t('seeYourReport')}
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        .nav-pill-btn:hover { background: rgba(196,195,190,0.18) !important; color: #1A1C1A !important; }
        .nav-dropdown-item:hover { background: rgba(196,195,190,0.18) !important; }
        .nav-mobile-item:hover { background: rgba(196,195,190,0.18) !important; }
      `}</style>
    </>
  )
}
