import ReportInput from '@/components/ReportInput'
import { C, se, sn } from '@/lib/design'

interface CTASectionProps {
  headline?: string
  headlineItalic?: string
  subhead?: string
}

export default function CTASection({
  headline = 'You run the business.',
  headlineItalic = 'Karl grows it.',
  subhead = 'See how your business looks online — your reviews, listings, social media, and website — with a clear picture of what Karl and his team would do for you.',
}: CTASectionProps) {
  return (
    <section
      style={{ background: C.f, padding: '80px 24px' }}
      aria-label="Get started"
    >
      <div
        style={{
          maxWidth: 520,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: se,
            fontSize: 'clamp(32px, 5vw, 40px)',
            fontWeight: 400,
            color: C.st,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {headline}
          <br />
          <em style={{ opacity: 0.65 }}>{headlineItalic}</em>
        </h2>
        <p
          style={{
            fontFamily: sn,
            fontSize: 15,
            color: C.mt,
            margin: '18px 0 28px',
            lineHeight: 1.6,
          }}
        >
          {subhead}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReportInput dark />
        </div>
      </div>
    </section>
  )
}
