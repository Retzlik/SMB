# KARL — Complete Website Build Specification

**Version:** 1.0
**Date:** April 14, 2026
**Author:** Alex (Product), Claude (Architecture)
**Builder:** Rocky
**Reference design:** `karl_homepage.jsx` (React component, uploaded separately)

---

## 1. What this document is

This is the single source of truth for building the Karl website. Rocky should read this entire document before writing any code. Every page, every component, every technical decision is specified here. Where this document is silent, Rocky has architectural authority to decide. Where this document is explicit, follow it exactly.

Karl is an AI marketing director for European local businesses. He brings his own team of specialist agents (review specialist, receptionist, SEO analyst, content creator, campaign manager, ads manager, listings coordinator, web specialist) and runs the customer's entire digital presence. The customer only talks to Karl. The team works behind the scenes.

The website exists to:
1. Explain what Karl does (the CMO + team narrative)
2. Convert visitors into report requests (the primary CTA)
3. Rank for SEO keywords in DE and UK markets
4. Support outbound sales (prospects land on vertical pages after cold calls)

---

## 2. Brand identity — locked decisions

These are final. Do not deviate.

| Decision | Value |
|----------|-------|
| Brand name | Karl |
| Named after | Charlemagne (Karl der Große) — unified European commerce |
| Gender | Male (he/him) |
| Role | AI marketing director / CMO |
| Team | 8 specialist agents with generic role titles (not named characters) |
| Archetype | Substance disruptor, tone champion |
| Brand tension | "Brilliant at your craft. Invisible online." |
| Brand promise | More customers, zero effort |
| Tagline | "You run the business. Karl grows it." |
| Vertical framework | "You treat patients. Karl fills your schedule." / "You advise clients. Karl finds new ones." / "You fix the pipes. Karl fills your calendar." / "You teach them to drive. Karl brings them to your door." |
| Personality | Competent, direct, warm, proactive, European. NOT clever, aggressive, familiar, passive, or American. |
| Pricing | €299 / €499 / €799 per month. No contracts. No onboarding fees. Cancel anytime. |
| Tier framing | Starter = Karl + 3 specialists. Growth = Karl + 5 specialists. Leader = Karl + the full team. |
| Markets | Germany + UK primary. Netherlands + Nordics expansion. Sweden via outbound only. |
| Verticals (12) | Dental, Physio, Vet, Pet services, Accountants, Law firms, Estate agents, Plumbers/Electricians, Builders, Cleaning, Garages, Driving schools |
| Vertical categories (4) | Healthcare, Professional Services, Home & Trade, Automotive |
| Company | Authoricy AB, Stockholm, Sweden |

### Copy rules — enforce everywhere

- Zero exclamation marks anywhere on the site
- Zero uses of the word "platform"
- Zero competitor-shaming (always frame as opportunity and growth, not fear and loss)
- Zero made-up numbers, fake testimonials, or invented data
- Zero defensive disclaimers ("this is real, not a projection")
- Every claim is either a product capability fact or an honest process description
- Numbers-first, no jargon, first person from Karl when he speaks
- Karl is "he" — never "it" or "they"

---

## 3. Visual identity system

### Colour palette

| Name | Hex | Usage |
|------|-----|-------|
| Forest | #2A4636 | The ONLY colour. Used where Karl speaks: CTA buttons, active states, accent text, the logo mark. |
| Ink | #1A1C1A | Primary text colour. Footer background. |
| Mid | #787874 | Secondary text, descriptions, meta content. |
| Border | #C4C3BE | Borders, dividers, timestamp text, placeholder text. |
| Warm gray | #E6E5E1 | Cards, section backgrounds, chat bubbles (user side). |
| Stone | #F4F4F1 | Primary surface colour. Trust bar, alternating sections. |
| Paper | #FAFAF8 | Lightest background. Page background. |
| Muted teal | #9BA69E | Text on forest green backgrounds. |

**Critical rule:** Forest green is the ONLY colour. There is no accent colour. No gold, no brass, no terracotta. Forest green appears only where Karl acts: buttons, active tabs, link text, the logo mark, chat message backgrounds (Karl's side), capability tags. Everything else is the grayscale palette above.

### Typography

| Role | Font | Weight | Size range |
|------|------|--------|------------|
| Headlines (h1–h3) | Instrument Serif | 400 (regular) | 52px (hero) → 18px (card) |
| Body text | Libre Franklin | 400 (regular) | 17px (hero sub) → 11px (small) |
| UI labels / buttons | Libre Franklin | 500 (medium) | 14px → 9px |
| Timestamps / code | Courier New, Consolas | 400 | 12px → 9px |

**Load from Google Fonts:**
```
https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Libre+Franklin:wght@400;500&display=swap
```

### Border radius

4px everywhere. Sharp, architectural. No pills (except intentional UI elements like badges). No large radius cards. 4px on buttons, 4px on input fields, 4px on cards. The only exception is the chat bubble component on the homepage (14px radius for conversational feel) and screenshot placeholder zones (8px).

### Spacing system

Use a consistent 4px base grid. Common values: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 100. Section padding is typically 64px–100px vertical, 24px horizontal. Max content width: 1080px centred.

---

## 4. Logo specification

### The mark: 6G split-gesture K

The Karl logo is a geometric K drawn as four separate strokes with a deliberate gap in the stem. The gap transforms it from a letter into a designed symbol. It represents the intentional, architectural nature of the brand.

**SVG paths (canonical, viewBox 0 0 40 48):**
```svg
<svg viewBox="0 0 40 48">
  <path d="M8 4 L8 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
  <path d="M8 26 L8 44" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
  <path d="M14 20 L32 4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
  <path d="M8 26 L32 44" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
</svg>
```

**Strokes:**
- Stem top: (8,4) to (8,18) — vertical, rounded cap
- Stem bottom: (8,26) to (8,44) — vertical, rounded cap
- Upper arm: (14,20) to (32,4) — diagonal, starts offset from stem (the gap), rounded cap
- Lower arm: (8,26) to (32,44) — diagonal, connects at the stem junction, rounded cap

**Gap:** The stem breaks between y=18 and y=26 (8px gap). The upper arm originates from x=14 (6px right of the stem), not from the stem itself. This creates the "split gesture" — the intentional break that makes the mark feel designed.

**Stroke weight:** 3px in the canonical 40×48 viewBox. Scale proportionally.

**Stroke caps:** Round (stroke-linecap="round") on all four strokes.

### The wordmark: K + arl

The logo mark IS the K in "Karl." It is followed directly by "arl" in Instrument Serif, aligned at the baseline so the whole thing reads as one word. There is no separate "icon + wordmark" lockup — they are one unit.

**Implementation:** The mark SVG and "arl" text sit in an inline-flex container with `align-items: flex-end` (baseline alignment). The gap between them is essentially zero or slightly negative so the mark's bottom stroke aligns with the serif text baseline.

**Colour variants:**
- On paper/stone backgrounds: mark in forest #2A4636, "arl" in ink #1A1C1A
- On ink/dark backgrounds: both mark and "arl" in stone #F4F4F1
- On forest green backgrounds: both in stone #F4F4F1
- Monochrome: all in the same colour

**Size variants:**
- Nav: mark ~20px wide, "arl" at 18px font-size
- Footer: mark ~16px wide, "arl" at 16px font-size
- Hero/large: mark ~40px wide, "arl" at 36px font-size
- Favicon: mark only, no "arl", at 32×32px

**Exclusion zone:** Maintain at least 1× mark-width of clear space around the wordmark on all sides.

Export the mark as standalone SVG files at: 16px, 32px, 64px, 128px, 256px, 512px. Also export as PNG at 2× for retina.

---

## 5. Technical architecture

### Framework

- **Next.js** (App Router) on **Vercel**
- Fully server-side rendered (SSR) for SEO
- All pages must be statically generated where possible (SSG with ISR for blog)
- TypeScript throughout

### SEO requirements

- Every page must render complete HTML on first response (no client-side-only content)
- Proper `<head>` metadata on every page: title, description, og:title, og:description, og:image, canonical URL, hreflang tags for all language variants
- Structured data (JSON-LD) on every page: Organization, WebSite, BreadcrumbList. Product schema on pricing. FAQ schema on FAQ sections. Article schema on blog posts. LocalBusiness schema on the homepage.
- Sitemap.xml auto-generated from all pages and blog posts
- Robots.txt allowing all crawlers
- Clean URL structure (no trailing slashes, lowercase, hyphens only)
- Image optimization: next/image with WebP/AVIF, lazy loading, proper alt text
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Internal linking between related pages (capability pages link to relevant verticals, verticals link to relevant capabilities)
- Breadcrumb navigation on all pages below the homepage

### Multi-language infrastructure

**Architecture:** Subdirectory-based localisation. NOT subdomains.

| Market | Path prefix | Language |
|--------|-------------|----------|
| English (default) | / | en |
| Germany | /de/ | de |
| Netherlands | /nl/ | nl (Phase 5) |
| Sweden | /se/ | sv (Phase 5, minimal) |

**Implementation requirements:**
- Use Next.js internationalised routing with the App Router's `[locale]` dynamic segment
- Every page has a locale parameter and renders the correct language
- All static text lives in translation files (JSON), NOT hardcoded in components
- Translation file structure: `messages/en.json`, `messages/de.json`, etc.
- The language switcher in the footer changes the locale prefix while preserving the current path: `/pricing` ↔ `/de/preise`
- Hreflang tags on every page pointing to all available language variants of that page
- Default locale (en) does NOT have a prefix — it's `/pricing`, not `/en/pricing`
- German pages are NOT translations — they are cultural adaptations. Different review platforms (Jameda vs Trustpilot), different pricing psychology (Sie vs Du still TBD — default to Sie for initial build), different legal language (DSGVO vs GDPR), different directory names (Gelbe Seiten vs Yellow Pages)
- German URL slugs must be German: `/de/preise` not `/de/pricing`, `/de/gesundheitswesen` not `/de/health-care`

**URL mapping (EN ↔ DE):**

| English | German |
|---------|--------|
| / | /de/ |
| /pricing | /de/preise |
| /health-care | /de/gesundheitswesen |
| /professional-services | /de/freie-berufe |
| /home-services | /de/handwerk |
| /automotive | /de/automobil |
| /report | /de/bericht |
| /how-it-works | /de/so-funktioniert-es |
| /about | /de/ueber-uns |
| /contact | /de/kontakt |
| /capabilities/reviews | /de/leistungen/bewertungen |
| /capabilities/listings | /de/leistungen/brancheneintraege |
| /capabilities/local-seo | /de/leistungen/lokales-seo |
| /capabilities/ai-receptionist | /de/leistungen/ki-rezeptionist |
| /capabilities/social-media | /de/leistungen/social-media |
| /capabilities/google-ads | /de/leistungen/google-ads |
| /capabilities/campaigns | /de/leistungen/kampagnen |
| /capabilities/website | /de/leistungen/webseite |
| /blog | /de/blog |
| /blog/[slug] | /de/blog/[slug] |
| /health-care/dental | /de/gesundheitswesen/zahnarzt |
| /health-care/physiotherapy | /de/gesundheitswesen/physiotherapie |
| (etc.) | (etc.) |

### CMS / Content management

- Blog: Markdown files in the repository (MDX) or a headless CMS (Sanity, Contentful, or Notion as CMS). Rocky decides. Blog posts must support: title, description, author, date, featured image, categories/tags, body content with headings/images/code, SEO metadata.
- Static pages: React components with content from translation files. No CMS needed for core pages.

### Analytics and tracking

- Plausible Analytics or Fathom (GDPR-compliant, no cookie banner needed)
- No Google Analytics (requires cookie consent in EU)
- Event tracking on: CTA clicks, report form submissions, pricing tier clicks, language switches, blog reads
- UTM parameter support for outbound sales attribution

### Hosting and deployment

- Vercel (free tier is fine initially, upgrade as needed)
- Custom domain: TBD (getkarl.com, karl.marketing, meetkarl.com — to be acquired)
- SSL certificate: automatic via Vercel
- CDN: automatic via Vercel Edge Network

---

## 6. Complete page inventory

### Overview

| Phase | Pages | Count |
|-------|-------|-------|
| Phase 1: Launch | Homepage, Pricing (with à la carte), 4 category LPs, Report page | 7 |
| Phase 2: Foundation | How it works, 8 capability pages, About, Contact | 12 |
| Phase 3: Depth | 12 sub-vertical pages | 12 |
| Phase 4: Localisation | German versions of all Phase 1 + 2 pages | ~19 |
| Phase 5: Growth | Blog infrastructure + first 8 articles, NL/SE minimal sites | 8+ |
| **Total at full build** | | **~58 pages + blog** |

---

## 7. Page specifications

### 7.1 Homepage (/)

**Design reference:** `karl_homepage.jsx` — this IS the spec. Build it exactly as specified in the React component. The JSX file defines the exact layout, copy, typography, spacing, and interaction patterns.

**Sections (in order):**
1. **Nav** — Sticky, blurs on scroll. Logo wordmark (K mark + "arl"). Links: "What Karl does", "Industries", "Pricing". Text link: "Log in". CTA button: "See your report".
2. **Hero** — Split layout. Left: headline ("You run the business. Karl grows it."), subhead (CMO + team description), embedded input field CTA ("Enter your business name or website" + "See your report →"), trust line. Right: chat simulation showing Karl talking to a business owner with team references.
3. **Trust bar** — "Built in Stockholm · GDPR-native · Works across Europe" + integration platform logos.
4. **A day with Karl** — Scrollable timeline (max-height 380px, custom scrollbar) showing 9 specific actions Karl's team performed for a dental practice on a Tuesday. Each entry references the specialist role. Bottom fade mask hints at scroll. CTA button below.
5. **Your dashboard** — Screenshot zone for Vendasta Business App executive overview. "Check in whenever you want."
6. **Capability explorer** — 8 interactive tabs (Reviews, Listings, Local SEO, AI Receptionist, Social media, Google Ads, Campaigns, Website). Each tab shows: the specialist role label (e.g. "KARL'S REVIEW SPECIALIST"), a headline, 5 bullet points, and a screenshot zone. Section header: "Karl's team — Eight specialists. One director. Zero effort from you."
7. **Verticals** — 4 category cards with vertical tagline variants. Link to category landing pages.
8. **Pricing** — 3-tier preview with team framing. Growth tier highlighted as "Recommended". Each tier shows: price, team composition, key features. CTA buttons on each. "No contracts · No onboarding fees · Cancel anytime" below.
9. **Setup timeline** — "What happens when you sign up." Three periods (Day 1, Week 1, Ongoing) with team-specific actions.
10. **Final CTA** — Forest green background. Headline + subhead + embedded input field CTA (dark variant).
11. **Footer** — Ink background. Logo wordmark in white. Product / Industries / Company link columns. Language switcher (EN / DE / SE). Copyright.

### 7.2 Pricing (/pricing)

**This is a critical page. Model it on Broadly's pricing page structure (broadly.com/pricing/) but with Karl's brand and pricing.**

**Section 1: Header**
- Headline: "Transparent pricing."
- Subhead: "Every plan includes Karl as your marketing director. Higher tiers give him a bigger team."

**Section 2: Three-tier comparison (same as homepage but expanded)**

| | Starter €299/mo | Growth €499/mo (Recommended) | Leader €799/mo |
|--|--|--|--|
| Team | Karl + 3 specialists | Karl + 5 specialists | Karl + the full team |
| Composition | Review specialist, Listings coordinator, Content creator | + Receptionist (SMS), Campaign manager | + Voice receptionist, Ads manager, SEO analyst |

**Full feature comparison table** (expandable, like Broadly's "+Show plan features"):

Categories to include in the comparison table:
- **Karl's team members** — which specialist agents are included in each tier
- **Conversations** — web chat, social DM replies, SMS, missed call textback, AI voice receptionist
- **Local SEO & listings** — directory sync, keyword tracking grid, citation building, GBP optimisation
- **Reputation management** — review monitoring, AI review responses, review solicitation, review streaming to website
- **Social media** — which platforms, AI content creation, scheduling, engagement tracking
- **Campaigns** — email campaigns, SMS campaigns, WhatsApp campaigns, segmentation
- **Reporting** — weekly summary emails, monthly detailed reports, dashboard access

Use checkmarks (✓) and dashes (—) like Broadly does. Each feature row should have a brief explanation.

**Section 3: À la carte pricing**

This is critical — Alex specifically requested this. Below the three bundled tiers, show individual capabilities that can be purchased separately. Model this exactly on how Broadly structures theirs.

**Headline:** "All capabilities are also available individually — start with what you need and scale up anytime."

**À la carte cards:**

| Capability | Tiers | Pricing |
|------------|-------|---------|
| **AI Receptionist** | Chat only (web, social, WhatsApp) / Chat + SMS + missed call textback / Chat + SMS + AI Voice (phone calls) | €99 / €129 / €179 per month |
| **Reputation management** | Monitor + templates (Google, Facebook) / AI responses on all platforms / + automated review solicitation | €69 / €119 / €149 per month |
| **Local SEO & listings** | Directory sync (40+ sites) + 10 keyword grid / + citation building + 25 keywords / + managed SEO + content | €79 / €129 / €199 per month |
| **Social media** | Facebook + Google posting / All platforms + AI content / + engagement tracking + campaigns | €59 / €99 / €139 per month |
| **Google Ads** | Campaign setup + management + reporting | €149 per month (+ ad spend) |
| **Email & SMS campaigns** | Email + SMS + WhatsApp campaigns + segmentation | €79 per month |
| **Website** | 3–5 page mobile-first site, hosted, SEO-optimised, annual refresh | €99 per month |

**NOTE:** These prices are indicative. Alex should validate against actual Vendasta reseller costs before launch. The structure and UX pattern is what matters for the build — prices can be updated in the translation files.

Each à la carte card should show:
- Capability name
- Brief description (1 line)
- 2–3 tier options with pricing
- "Start with [capability]" CTA

**Section 4: FAQ**
- "What's included in the onboarding?" → "There is no onboarding fee. Karl starts working on Day 1."
- "Can I cancel anytime?" → "Yes. No contracts. No lock-in. Cancel any time."
- "Can I upgrade or downgrade?" → "Yes. Switch plans at any time. Changes take effect immediately."
- "What happens to my data if I cancel?" → "Your data is exported and provided to you. We delete everything within 30 days. GDPR-compliant."
- "Do I need to provide content or assets?" → "No. Karl's team creates and manages everything. You approve when you want to."
- "How quickly does Karl start working?" → "Day 1: receptionist live, listings submitted, GBP review begun. Week 1: first social posts, first review requests."
- "What if I only need one thing?" → "You can buy any capability individually. Start with what you need and add more when you're ready."
- "Is there a discount for annual billing?" → Address this based on Alex's decision. If yes, show the annual price. If no, state clearly.

**Section 5: Final CTA**
- "See how your business looks online" → embedded input field

### 7.3 Category landing pages (4 pages)

These are the pages outbound sales prospects will land on. They must be conversion-optimised for a business owner who just had a cold call and was told to visit the website.

**URL pattern:** /health-care, /professional-services, /home-services, /automotive

**Each page follows the same template but with genuinely different content** (NOT the Broadly approach of swapping industry names in identical copy):

**Section 1: Hero**
- Vertical tagline: "You treat patients. Karl fills your schedule."
- Subhead: 2–3 sentences specific to this vertical category's pain points
- Embedded input CTA

**Section 2: A day with Karl (vertical-specific version)**
- Same scrollable timeline format as homepage but with actions specific to the vertical
- Healthcare: dental practice version (already written in the homepage component)
- Professional services: Steuerberater / accountant version
- Home & trade: plumber version
- Automotive: driving school version

**Section 3: Capabilities relevant to this vertical**
- Show the 4–5 most relevant capabilities for this vertical (not all 8)
- Each with vertical-specific framing
- Screenshot zones

**Section 4: Sub-vertical links**
- Cards linking to the 3 sub-vertical pages within this category
- Example for Healthcare: "Dental practices", "Physiotherapy", "Veterinary & pet services"

**Section 5: Pricing preview**
- Same 3-tier preview as homepage
- CTA buttons

**Section 6: Final CTA**
- Vertical-specific CTA text

### 7.4 Sub-vertical pages (12 pages)

**URL pattern:** /health-care/dental, /professional-services/accountants, etc.

These go deeper than category pages. They use the specific language and pain points of one type of business.

**Section 1: Hero**
- Specific headline: "Marketing for dental practices" / "Marketing für Zahnarztpraxen"
- 3–4 sentences about the specific challenges this business type faces online
- Embedded input CTA

**Section 2: What Karl does for [this business type]**
- 5–6 specific capabilities framed for this vertical
- Example for dental: "Karl's review specialist monitors Jameda, Google, and Trustpilot — the three platforms your patients actually check before booking."

**Section 3: Day with Karl (vertical-specific)**
- A 5–6 item mini-timeline specific to this business type

**Section 4: Pricing preview + CTA**

**Sub-vertical pages and their URL slugs:**

| Category | Sub-vertical | EN slug | DE slug |
|----------|-------------|---------|---------|
| Healthcare | Dental practices | /health-care/dental | /de/gesundheitswesen/zahnarzt |
| Healthcare | Physiotherapy | /health-care/physiotherapy | /de/gesundheitswesen/physiotherapie |
| Healthcare | Veterinary & pet services | /health-care/veterinary | /de/gesundheitswesen/tierarzt |
| Professional | Accountants | /professional-services/accountants | /de/freie-berufe/steuerberater |
| Professional | Law firms | /professional-services/law-firms | /de/freie-berufe/rechtsanwaelte |
| Professional | Estate agents | /professional-services/estate-agents | /de/freie-berufe/immobilienmakler |
| Home & Trade | Plumbers & electricians | /home-services/plumbers-electricians | /de/handwerk/sanitaer-elektro |
| Home & Trade | Builders | /home-services/builders | /de/handwerk/bauunternehmen |
| Home & Trade | Cleaning | /home-services/cleaning | /de/handwerk/reinigung |
| Automotive | Garages | /automotive/garages | /de/automobil/werkstatt |
| Automotive | Driving schools | /automotive/driving-schools | /de/automobil/fahrschule |
| Healthcare | Pet services | /health-care/pet-services | /de/gesundheitswesen/tierdienstleistungen |

### 7.5 Capability pages (8 pages)

**URL pattern:** /capabilities/reviews, /capabilities/listings, etc.

These serve two purposes:
1. Deep-dive explanation of what Karl's team does in this area
2. The landing page for à la carte buyers who want just this capability

**Each capability page follows the same template:**

**Section 1: Hero**
- Specialist role label: "KARL'S REVIEW SPECIALIST"
- Headline: capability-specific (e.g. "Every review answered. New ones every week.")
- 2–3 sentence description
- CTA: "See how your reviews look" / "See how your listings look" / etc.

**Section 2: What this specialist does**
- Expanded version of the capability explorer content from the homepage
- 8–10 specific actions, grouped into 2–3 sub-sections
- Dashboard screenshots for each sub-section

**Section 3: Platforms and integrations**
- Which specific platforms/directories/channels this capability covers
- Platform logos where available

**Section 4: À la carte pricing for this capability**
- Show the 2–3 tier options for buying this capability individually
- "Or get this included in a full plan" → link to /pricing

**Section 5: FAQ specific to this capability**
- 4–5 questions specific to this capability
- Example for Reviews: "Which review sites does Karl monitor?" / "Can I approve responses before they're published?" / "How does Karl request reviews from customers?"

**Section 6: Related capabilities**
- Links to 2–3 other capability pages that complement this one
- Example from Reviews: "See also: Listings, Local SEO"

**The 8 capability pages:**

| Capability | Slug | Specialist role | Headline |
|------------|------|----------------|----------|
| Reviews | /capabilities/reviews | Review specialist | Every review answered. New ones every week. |
| Listings | /capabilities/listings | Listings coordinator | Your name, address, and hours — correct everywhere. |
| Local SEO | /capabilities/local-seo | SEO analyst | Rank where your customers search. |
| AI Receptionist | /capabilities/ai-receptionist | Receptionist | Never miss a call. Even at midnight. |
| Social media | /capabilities/social-media | Content creator | Posts that bring customers, not just likes. |
| Google Ads | /capabilities/google-ads | Ads manager | The right customers, at the right cost. |
| Campaigns | /capabilities/campaigns | Campaign manager | Bring past customers back. |
| Website | /capabilities/website | Web specialist | A website built for local search. |

### 7.6 Report page (/report)

This is where ALL CTAs across the entire site lead. The embedded input fields ("Enter your business name or website" + "See your report →") and all "See how your business looks online" buttons lead here.

**Section 1: Header**
- Headline: "See how your business looks online."
- Subhead: "Enter your business details below. Karl will scan your reviews, listings, social media, and website — and show you exactly what he'd do for you."

**Section 2: Form**
- Fields: Business name (required), Website URL (optional), Email (required), Phone (optional), Country (dropdown: Germany, United Kingdom, Netherlands, Sweden, Other)
- GDPR consent checkbox: "I agree to receive my business report and occasional updates from Karl. I can unsubscribe at any time." + Link to privacy policy.
- Submit button: "See your report →"

**Section 3: What you'll get**
- Brief explanation of the Vendasta Snapshot Report contents:
  - Your online reviews across Google, Facebook, and 20+ sites
  - Your business listings on 40+ directories — which are correct, which are wrong
  - Your social media presence and posting frequency
  - Your website performance and local SEO signals
  - A comparison with your local competitors
- "We'll send your report within 24 hours. That's it."

**Technical:** This form submits to the Vendasta Snapshot Report API (or equivalent webhook). Rocky should implement this as a serverless function that triggers the white-labelled Vendasta report generation. The exact API integration depends on the Vendasta configuration — Alex will provide API credentials and endpoint details.

### 7.7 How Karl works (/how-it-works)

**Section 1: Header**
- Headline: "Three steps. Then Karl takes over."

**Section 2: The three steps**

Step 1: "See your report"
- Karl scans your business online — reviews, listings, social media, website, competitors
- You get a clear picture of where you stand and where you can grow
- Screenshot: the Vendasta Snapshot Report

Step 2: "Choose your plan"
- Karl recommends the right plan for your business based on your report
- You pick Starter, Growth, or Leader — or start with a single capability
- "No contracts. Cancel anytime."

Step 3: "Karl starts working"
- Day 1: Receptionist live. Listings submitted. GBP review begun.
- Week 1: First social posts. First review requests. SEO grid set up.
- Ongoing: Monthly report from Karl. Text him anytime. Everything runs continuously.

**Section 3: Dashboard walkthrough**
- 3–4 screenshots showing different parts of the Vendasta Business App
- Brief description of what the business owner sees in each

**Section 4: CTA**

### 7.8 About (/about)

- Headline: "Built in Stockholm. For European businesses."
- The story: why Karl exists (brilliant craftspeople who are invisible online, no affordable solution in Europe, existing tools are American and fragmented)
- Company: Authoricy AB, Stockholm, Sweden
- GDPR and data: "Karl is GDPR-native. Your data stays in Europe. No tracking cookies. No data selling."
- No "our mission" or "our values" corporate language. Just honest context.

### 7.9 Contact (/contact)

- Phone number (European — likely Swedish +46 or German +49)
- Email: hello@[domain]
- WhatsApp: link to WhatsApp business chat
- Simple contact form: name, email, message, submit
- Office address: Authoricy AB, Stockholm, Sweden
- No map embed needed initially

### 7.10 Blog (/blog and /blog/[slug])

**Blog index page (/blog):**
- Grid of article cards: featured image, title, date, category tag, excerpt
- Category filter (optional, implement if time allows)
- Pagination or infinite scroll
- SEO: proper article list structured data

**Blog post page (/blog/[slug]):**
- Article title (h1, Instrument Serif)
- Date, author, category tag, estimated read time
- Body content: full MDX support (headings, paragraphs, images, code blocks, blockquotes, lists, tables)
- Table of contents (auto-generated from headings, sticky sidebar on desktop)
- "Related articles" section at bottom (2–3 articles)
- CTA at bottom: "See how your business looks online" → /report
- Social sharing: copy link button (no social media share buttons)
- SEO: Article schema, og:image, proper canonical URL

**Initial blog articles (content will be provided separately):**

| Article | Target market | Target keyword | KD |
|---------|--------------|----------------|-----|
| Marketing for dental practices | UK | dental marketing | TBD |
| Marketing for accountants | UK | accountant marketing | TBD |
| Marketing for estate agents | UK | estate agent marketing | 0 |
| Marketing for electricians | UK | marketing for electricians | TBD |
| SEO für Zahnarztpraxen | DE | SEO Zahnarzt | TBD |
| Marketing für Steuerberater | DE | Steuerberater Marketing | TBD |
| Marketing für Handwerker | DE | Marketing für Handwerker | TBD |
| Werbung für Fahrschulen | DE | Fahrschule Werbung | TBD |

### 7.11 Legal pages

- **Privacy policy** (/privacy) — GDPR-compliant. Covers: what data we collect, how we use it, data retention, data deletion, third-party processors (Vendasta, Plausible), contact for data requests.
- **Terms of service** (/terms) — Standard SaaS terms. Monthly subscription, cancellation policy, liability limitations.
- **Imprint / Impressum** (/imprint) — Required by German law. Company details, VAT number, responsible person, contact details.
- **Cookie policy** — If we use Plausible/Fathom (no cookies), this can be minimal: "We don't use cookies."

---

## 8. Component library

### Shared components to build

| Component | Usage | Notes |
|-----------|-------|-------|
| `KarlLogo` | Nav, footer, favicon | The 6G split-gesture K mark + "arl" text. Props: fontSize, color, markColor |
| `KarlMark` | Favicon, app icon, standalone uses | Just the SVG mark without "arl". Props: size, color |
| `ReportInput` | Hero, final CTA, category pages | Embedded input field + button. Props: dark (boolean for dark variant) |
| `Nav` | All pages | Sticky, blur on scroll, logo, links, CTA. Active state for current page. Mobile hamburger menu. |
| `Footer` | All pages | Ink background, logo, link columns, language switcher, copyright |
| `ScreenshotZone` | Multiple pages | Placeholder for Vendasta dashboard screenshots. Props: label, alt, height. Replace with actual images when available. |
| `SectionHeader` | Most pages | Eyebrow label (uppercase, small, border colour) + Instrument Serif headline + optional subhead |
| `PricingTiers` | Homepage, pricing page, category pages | 3-tier comparison. Reusable with different levels of detail. |
| `DayTimeline` | Homepage, category pages, sub-vertical pages | Scrollable timeline with custom scrollbar, fade masks. Takes an array of timeline entries. |
| `CapabilityExplorer` | Homepage | 8-tab interactive component with role labels and screenshot zones |
| `VerticalCards` | Homepage, category pages | 4 category cards with tagline variants |
| `FAQAccordion` | Pricing, capability pages | Expandable FAQ items |
| `CTASection` | Most pages | Forest green background with headline + ReportInput (dark variant) |
| `ChatSimulation` | Homepage | The chat bubble UI showing Karl talking to a business owner |
| `Breadcrumbs` | All pages below homepage | Auto-generated from URL path |

### Mobile responsiveness

Every component must work on mobile (320px minimum width). Key responsive behaviours:
- Nav: hamburger menu on mobile
- Hero: stack vertically (text above, chat below)
- Pricing tiers: stack vertically on mobile, horizontal scroll on tablet
- Capability explorer: tabs become a dropdown or horizontal scroll on mobile
- Footer: stack columns vertically
- Two-column layouts (capability page content + screenshot): stack vertically

---

## 9. CTA flow

Every CTA on the site follows one of two patterns:

**Pattern 1: Embedded input field**
- Used in: Hero section, final CTA section
- Input: "Enter your business name or website"
- Button: "See your report →"
- Behaviour: on submit, redirect to /report with the input value pre-filled in the form

**Pattern 2: Button CTA**
- Used in: after Day with Karl, pricing tier cards, capability pages, blog posts
- Text: "See how your business looks online"
- Behaviour: link to /report

**Pattern 3: Nav CTA**
- Text: "See your report"
- Behaviour: link to /report

No other CTA patterns exist. No "Book a demo", no "Get started for free", no "Contact sales". Every interaction leads to the report.

**Login link:** Text link in the nav ("Log in") linking to the white-labelled Vendasta Business App URL (to be configured).

---

## 10. Assets required

### Screenshots (from Vendasta Business App)

These replace the ScreenshotZone placeholders throughout the site. Use a demo account with German dental practice data ("Zahnarztpraxis Dr. Schäfer, Berlin") for consistency.

| Screenshot | Where it goes | What to capture |
|------------|--------------|-----------------|
| Executive overview | Homepage "Your dashboard" section | Full Business App overview dashboard |
| Review management | Capability explorer "Reviews" tab | Review list showing Google + Jameda reviews with AI responses |
| Listing sync | Capability explorer "Listings" tab | Citation dashboard showing sync status across 40+ sites |
| Local SEO grid | Capability explorer "Local SEO" tab | Keyword ranking grid showing geographic coverage |
| Unified inbox | Capability explorer "AI Receptionist" tab | Inbox showing WhatsApp, Facebook, web chat conversations |
| Social scheduler | Capability explorer "Social media" tab | Calendar view with scheduled posts across platforms |
| Ads dashboard | Capability explorer "Google Ads" tab | Campaign performance metrics |
| Campaign builder | Capability explorer "Campaigns" tab | Email/SMS campaign editor or results |
| Website preview | Capability explorer "Website" tab | Sample dental practice site preview |
| Snapshot report | Report page, How it works | The Vendasta Snapshot Report output |

### Brand assets to produce

- Logo SVG files (mark only, wordmark, all colour variants)
- Logo PNG files (2×, all sizes: 16, 32, 64, 128, 256, 512)
- Favicon: 32×32 PNG of the K mark, plus favicon.ico
- Apple touch icon: 180×180
- OG image: 1200×630 default sharing image (forest green background, Karl wordmark in white, tagline)
- Vertical-specific OG images (4 — one per category)

---

## 11. Build phases and priorities

### Phase 1: Launch (before first outbound call)
Build these 7 pages first:
1. Homepage (/)
2. Pricing with à la carte (/pricing)
3. Healthcare LP (/health-care)
4. Professional Services LP (/professional-services)
5. Home & Trade LP (/home-services)
6. Automotive LP (/automotive)
7. Report page (/report)

Plus: Nav, Footer, all shared components, mobile responsiveness, basic SEO metadata, favicon/OG images.

### Phase 2: Foundation (within 30 days of launch)
8. How Karl works (/how-it-works)
9–16. Eight capability pages (/capabilities/*)
17. About (/about)
18. Contact (/contact)
19. Privacy policy (/privacy)
20. Terms of service (/terms)
21. Imprint (/imprint)

### Phase 3: Depth (within 60 days)
22–33. Twelve sub-vertical pages

### Phase 4: Localisation (within 90 days)
34–52. German versions of all Phase 1 + 2 pages
Language switcher functional in nav/footer.

### Phase 5: Growth (ongoing)
53. Blog infrastructure (index + post template)
54–61. First 8 blog articles
62+. NL and SE minimal sites (when market expansion begins)

---

## 12. Quality requirements

### Performance
- Lighthouse score: 90+ on Performance, Accessibility, Best Practices, SEO
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

### Accessibility
- WCAG 2.1 AA compliance minimum
- All images have descriptive alt text
- All interactive elements are keyboard-navigable
- Sufficient colour contrast (forest green #2A4636 on white passes AAA)
- Skip-to-content link
- Proper heading hierarchy (one h1 per page)
- Focus indicators on all interactive elements

### Browser support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 12+)

### Code quality
- TypeScript strict mode
- ESLint + Prettier configured
- No console.log in production
- Component props fully typed
- All text from translation files (no hardcoded strings in components)

---

## 13. What this document does NOT cover

- **Vendasta backend configuration** — white-labelling, product packaging, EU phone numbers, SEPA billing. Alex handles this separately.
- **Content writing** — the actual copy for German pages, blog articles, sub-vertical pages, and capability pages will be provided separately. This spec defines the structure and templates; content fills them.
- **Vendasta Snapshot Report API** — the exact integration method for the report form. Alex will provide API credentials and documentation.
- **Domain acquisition** — the final domain name is TBD.
- **Outbound sales tooling** — CRM, cold calling infrastructure, prospect lists. Separate from the website.

---

## 14. Reference files

| File | Purpose |
|------|---------|
| `karl_homepage.jsx` | The homepage design spec — layout, copy, components, interactions. Build this exactly. |
| `KARL_VS_BROADLY_GAP_ANALYSIS.md` | Competitive context. How Broadly structures their site and where Karl differs. |
| `KARL_STRATEGIC_PLAN.md` | Full brand and business strategy. Background context for Rocky. |
| `KARL_SCREENSHOT_PLAN.md` | Which Vendasta screenshots to capture and where they go. |

---

*Build spec prepared for Authoricy AB. April 2026.*
*Builder: Rocky (full architectural authority on implementation decisions not specified here).*
*Product: Alex (approves all content and design before deployment).*
