import { NextRequest, NextResponse } from 'next/server'

interface ReportRequest {
  businessName: string
  website?: string
  email: string
  phone?: string
  country?: string
  gdpr: boolean
}

export async function POST(req: NextRequest) {
  let body: ReportRequest

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Validate required fields
  if (!body.businessName?.trim()) {
    return NextResponse.json({ error: 'businessName is required' }, { status: 400 })
  }
  if (!body.email?.trim()) {
    return NextResponse.json({ error: 'email is required' }, { status: 400 })
  }
  if (!body.gdpr) {
    return NextResponse.json({ error: 'GDPR consent is required' }, { status: 400 })
  }

  const payload = {
    businessName: body.businessName.trim(),
    website: body.website?.trim() ?? '',
    email: body.email.trim(),
    phone: body.phone?.trim() ?? '',
    country: body.country ?? '',
    submittedAt: new Date().toISOString(),
    source: req.headers.get('referer') ?? '',
  }

  // Send to webhook if configured (Zapier, Make, custom endpoint)
  const webhookUrl = process.env.REPORT_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      // Log but don't fail the request — the user still gets a success response
      console.error('[report/route] Webhook delivery failed:', err)
    }
  } else {
    // Development: log to console
    console.log('[report/route] New report request:', payload)
  }

  return NextResponse.json(
    { success: true, message: "We'll send your report within 24 hours." },
    { status: 200 }
  )
}
