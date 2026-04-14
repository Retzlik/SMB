'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import KarlLogo from '@/components/KarlLogo'
import { C, sn } from '@/lib/design'

const navLinks = [
  { key: 'industries', href: '/health-care' as const },
  { key: 'pricing', href: '/pricing' as const },
] as const

export default function Nav() {
  const t = useTranslations('Nav')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? '#'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(250,250,248,0.97)' : C.pp,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `0.5px solid ${scrolled ? C.wg : 'transparent'}`,
        transition: 'background 0.3s, border-color 0.3s',
        padding: '0 24px',
      }}
      aria-label="Main navigation"
    >
      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 56,
        }}
      >
        <Link href="/" aria-label="Karl — home">
          <KarlLogo fontSize={18} color={C.ink} markColor={C.f} />
        </Link>

        {/* Desktop nav */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 24 }}
          aria-label="Desktop navigation"
        >
          <div
            className="nav-desktop"
            style={{ display: 'flex', alignItems: 'center', gap: 24 }}
          >
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                style={{
                  fontFamily: sn,
                  fontSize: 13,
                  color: C.mid,
                  textDecoration: 'none',
                }}
              >
                {t(key)}
              </Link>
            ))}
            <a
              href={appUrl}
              style={{
                fontFamily: sn,
                fontSize: 13,
                color: C.brd,
                textDecoration: 'none',
              }}
            >
              {t('logIn')}
            </a>
          </div>
          <Link
            href="/report"
            style={{
              fontFamily: sn,
              fontSize: 13,
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: 4,
              background: C.f,
              color: C.st,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            {t('seeYourReport')}
          </Link>

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
              padding: 4,
              color: C.ink,
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: `1px solid ${C.wg}`,
            padding: '16px 0 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: sn,
                fontSize: 15,
                color: C.ink,
                textDecoration: 'none',
                padding: '10px 0',
                display: 'block',
              }}
            >
              {t(key)}
            </Link>
          ))}
          <a
            href={appUrl}
            style={{
              fontFamily: sn,
              fontSize: 15,
              color: C.mid,
              textDecoration: 'none',
              padding: '10px 0',
              display: 'block',
            }}
          >
            {t('logIn')}
          </a>
          <Link
            href="/report"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: sn,
              fontSize: 15,
              fontWeight: 500,
              color: C.f,
              textDecoration: 'none',
              padding: '10px 0',
              display: 'block',
            }}
          >
            {t('seeYourReport')} →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
