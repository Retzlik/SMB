'use client'

import { useState, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { C, sn } from '@/lib/design'

interface ReportInputProps {
  dark?: boolean
}

export default function ReportInput({ dark = false }: ReportInputProps) {
  const t = useTranslations('ReportInput')
  const router = useRouter()
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const bg = dark ? 'rgba(244,244,241,0.1)' : C.st
  const border = dark ? 'rgba(244,244,241,0.2)' : C.wg
  const text = dark ? C.st : C.ink
  const btnBg = dark ? C.st : C.f
  const btnColor = dark ? C.f : C.st

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const encoded = value.trim() ? `?business=${encodeURIComponent(value.trim())}` : ''
    router.push(`/report${encoded}` as Parameters<typeof router.push>[0])
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: 0,
        maxWidth: 460,
        borderRadius: 4,
        overflow: 'hidden',
        border: `1.5px solid ${border}`,
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t('placeholder')}
        aria-label={t('placeholder')}
        style={{
          flex: 1,
          padding: '14px 16px',
          fontFamily: sn,
          fontSize: 14,
          border: 'none',
          background: bg,
          color: text,
          outline: 'none',
          minWidth: 0,
        }}
      />
      <button
        type="submit"
        style={{
          fontFamily: sn,
          fontSize: 14,
          fontWeight: 500,
          padding: '14px 20px',
          border: 'none',
          background: btnBg,
          color: btnColor,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        {t('button')}
      </button>
    </form>
  )
}
