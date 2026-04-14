'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { C, se, sn } from '@/lib/design'

interface FormState {
  businessName: string
  website: string
  email: string
  phone: string
  country: string
  gdpr: boolean
}

interface FormErrors {
  businessName?: string
  email?: string
  gdpr?: boolean
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const COUNTRIES = [
  { value: '', label: 'Select your country' },
  { value: 'de', label: 'Germany' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'nl', label: 'Netherlands' },
  { value: 'se', label: 'Sweden' },
  { value: 'other', label: 'Other' },
]

const inputStyle = (focused: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '12px 14px',
  fontFamily: sn,
  fontSize: 14,
  color: C.ink,
  background: C.pp,
  border: `1px solid ${focused ? C.f : C.brd}`,
  borderRadius: 4,
  outline: 'none',
  transition: 'border-color 0.15s',
})

function FormField({
  label,
  required,
  children,
  hint,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  hint?: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label
        style={{
          fontFamily: sn,
          fontSize: 13,
          fontWeight: 500,
          color: C.ink,
        }}
      >
        {label}
        {!required && (
          <span style={{ color: C.mid, fontWeight: 400, marginLeft: 4 }}>(optional)</span>
        )}
      </label>
      {children}
      {hint && (
        <span style={{ fontFamily: sn, fontSize: 11, color: C.mid }}>{hint}</span>
      )}
    </div>
  )
}

export default function ReportForm() {
  const t = useTranslations('ReportPage')
  const [form, setForm] = useState<FormState>({
    businessName: '',
    website: '',
    email: '',
    phone: '',
    country: '',
    gdpr: false,
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    if (!form.businessName.trim()) errs.businessName = 'Required'
    if (!form.email.trim()) errs.email = 'Required'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!form.gdpr) errs.gdpr = true
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    const errKeys = Object.keys(errs)
    if (errKeys.length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          background: C.st,
          borderRadius: 8,
          padding: 40,
          border: `1px solid ${C.wg}`,
          textAlign: 'center',
        }}
        role="alert"
        aria-live="polite"
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'rgba(42,70,54,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path
              d="M4 11l5 5 9-9"
              stroke={C.f}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2
          style={{
            fontFamily: se,
            fontSize: 24,
            fontWeight: 400,
            color: C.ink,
            marginBottom: 10,
          }}
        >
          {t('successHeadline')}
        </h2>
        <p style={{ fontFamily: sn, fontSize: 14, color: C.mid, lineHeight: 1.65 }}>
          {t('successSubhead')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <FormField label={t('formLabels.businessName')} required>
        <input
          type="text"
          value={form.businessName}
          onChange={(e) => setForm({ ...form, businessName: e.target.value })}
          onFocus={() => setFocusedField('businessName')}
          onBlur={() => setFocusedField(null)}
          placeholder={t('formLabels.businessNamePlaceholder')}
          required
          aria-required="true"
          aria-invalid={!!errors.businessName}
          style={inputStyle(focusedField === 'businessName')}
        />
        {errors.businessName && (
          <span role="alert" style={{ fontFamily: sn, fontSize: 11, color: '#C0392B' }}>
            {errors.businessName}
          </span>
        )}
      </FormField>

      <FormField label={t('formLabels.website')}>
        <input
          type="url"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          onFocus={() => setFocusedField('website')}
          onBlur={() => setFocusedField(null)}
          placeholder={t('formLabels.websitePlaceholder')}
          style={inputStyle(focusedField === 'website')}
        />
      </FormField>

      <FormField label={t('formLabels.email')} required>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          placeholder={t('formLabels.emailPlaceholder')}
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          style={inputStyle(focusedField === 'email')}
        />
        {errors.email && (
          <span role="alert" style={{ fontFamily: sn, fontSize: 11, color: '#C0392B' }}>
            {errors.email}
          </span>
        )}
      </FormField>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
        className="form-two-col"
      >
        <FormField label={t('formLabels.phone')}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            placeholder={t('formLabels.phonePlaceholder')}
            style={inputStyle(focusedField === 'phone')}
          />
        </FormField>

        <FormField label={t('formLabels.country')}>
          <select
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            onFocus={() => setFocusedField('country')}
            onBlur={() => setFocusedField(null)}
            style={{
              ...inputStyle(focusedField === 'country'),
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23787874' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              paddingRight: 36,
              cursor: 'pointer',
            }}
          >
            {COUNTRIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      {/* GDPR */}
      <label
        style={{
          display: 'flex',
          gap: 12,
          alignItems: 'flex-start',
          cursor: 'pointer',
        }}
      >
        <input
          type="checkbox"
          checked={form.gdpr}
          onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
          aria-required="true"
          style={{ marginTop: 2, accentColor: C.f, flexShrink: 0 }}
        />
        <span style={{ fontFamily: sn, fontSize: 13, color: C.mid, lineHeight: 1.5 }}>
          {t('gdprText')}
        </span>
      </label>
      {errors.gdpr && (
        <span role="alert" style={{ fontFamily: sn, fontSize: 11, color: '#C0392B', marginTop: -12 }}>
          Please accept to continue
        </span>
      )}

      {status === 'error' && (
        <p
          role="alert"
          style={{ fontFamily: sn, fontSize: 13, color: '#C0392B', lineHeight: 1.5 }}
        >
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          fontFamily: sn,
          fontSize: 15,
          fontWeight: 500,
          padding: '14px 32px',
          borderRadius: 4,
          border: 'none',
          background: status === 'loading' ? C.mid : C.f,
          color: C.st,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'background 0.15s',
          width: '100%',
        }}
      >
        {status === 'loading' ? 'Sending...' : t('submitButton')}
      </button>

      <style>{`
        @media (max-width: 480px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  )
}
