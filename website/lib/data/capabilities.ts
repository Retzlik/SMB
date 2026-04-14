export interface Capability {
  label: string
  role: string
  title: string
  screenshot: string
  screenshotAlt: string
  items: string[]
}

export const capabilities: Capability[] = [
  {
    label: 'Reviews',
    role: 'Review specialist',
    title: 'Monitors, responds, and requests — across every platform.',
    screenshot: 'Review management dashboard',
    screenshotAlt: 'Replace with: Vendasta review management showing reviews with AI responses',
    items: [
      'Watches Google, Facebook, Trustpilot, TripAdvisor, Jameda, ProvenExpert, and 20+ sites for new reviews',
      'Drafts and publishes responses in your tone — you can review first or let Karl handle it',
      'Sends review requests to recent customers via SMS or email after each visit or job',
      'Flags negative reviews instantly so you can decide whether to respond personally',
      'Monthly trend report: how many reviews came in, your average rating, which platforms are growing',
    ],
  },
  {
    label: 'Listings',
    role: 'Listings coordinator',
    title: 'Your name, address, phone, and hours — correct on 40+ directories.',
    screenshot: 'Listing sync dashboard',
    screenshotAlt: 'Replace with: Vendasta citation dashboard showing sync status across 40+ sites',
    items: [
      'Submits and syncs to Google Maps, Apple Maps, Bing, Yelp, Gelbe Seiten, Jameda, Foursquare, and 30+ more',
      'Detects and corrects inconsistencies — wrong phone numbers, outdated hours, old addresses',
      'Locks your data so aggregators cannot overwrite it with stale information',
      'Finds and suppresses duplicate listings that dilute your visibility',
      'You text Karl a change, he updates it everywhere — typically within the hour',
    ],
  },
  {
    label: 'Local SEO',
    role: 'SEO analyst',
    title: 'Optimises your visibility in local Google search results.',
    screenshot: 'Local SEO grid tracker',
    screenshotAlt: 'Replace with: Vendasta local SEO grid showing keyword rankings by geographic area',
    items: [
      'Optimises your Google Business Profile — categories, services, descriptions, attributes, Q&A, photos',
      'Tracks your ranking for local keywords on a geographic grid — see where you rank, block by block',
      'Builds citations across hundreds of directories to strengthen local authority signals',
      'Can publish SEO-optimised blog content to your website to attract long-tail search traffic',
      'Monthly ranking report: which keywords moved, which need attention, what\'s planned next',
    ],
  },
  {
    label: 'AI Receptionist',
    role: 'Receptionist',
    title: 'Answers calls, texts, WhatsApp, web chat, and social DMs. Always.',
    screenshot: 'AI Receptionist inbox',
    screenshotAlt: 'Replace with: Vendasta unified inbox showing conversations across channels',
    items: [
      'AI voice agent answers phone calls — greets callers by your business name, answers questions, books appointments',
      'Replies to WhatsApp, Facebook Messenger, Instagram DMs, and website chat — 24 hours a day',
      'When you miss a call, automatically sends an SMS: "Sorry I missed you — how can I help?"',
      'Captures every enquiry: name, need, phone number, preferred time — forwarded to you immediately',
      'Currently supports German and English with more languages in development',
    ],
  },
  {
    label: 'Social media',
    role: 'Content creator',
    title: 'Creates, schedules, and publishes posts to your channels.',
    screenshot: 'Social media scheduler',
    screenshotAlt: 'Replace with: Vendasta social scheduler showing calendar with posts',
    items: [
      'Posts to Facebook, Instagram, LinkedIn, and Google Business Profile on a consistent schedule',
      'AI generates images and copy tailored to your business — not generic stock templates',
      'You can approve each post first, or set Karl to publish automatically on a schedule',
      'Tracks engagement on each post and adjusts content focus based on what resonates',
      'Nothing publishes without your permission — unless you choose auto-post',
    ],
  },
  {
    label: 'Google Ads',
    role: 'Ads manager',
    title: 'Sets up, manages, and optimises Google Search campaigns.',
    screenshot: 'Google Ads dashboard',
    screenshotAlt: 'Replace with: Vendasta advertising dashboard showing campaign performance',
    items: [
      'Creates Google Search campaigns targeting your services in your geographic area',
      'Writes ad copy, selects keywords, configures location targeting, sets daily budget from your input',
      'Monitors and adjusts bids weekly — pauses underperforming keywords, increases what converts',
      'Tracks clicks, calls, and form submissions — attributes leads to specific campaigns',
      'Monthly plain-language report: what you spent, what you got, what each lead cost',
    ],
  },
  {
    label: 'Campaigns',
    role: 'Campaign manager',
    title: 'Email and SMS campaigns to your existing customer list.',
    screenshot: 'Campaign builder',
    screenshotAlt: 'Replace with: Vendasta email/SMS campaign editor or performance report',
    items: [
      'Sends targeted campaigns via email, SMS, or WhatsApp to past customers and leads',
      'Use cases: seasonal promotions, re-engagement, appointment reminders, referral requests',
      'AI drafts the copy — you review and approve, or let Karl send on a schedule',
      'Segmentation by visit recency, service type, or custom tags you define',
      'Performance tracking: opens, clicks, replies, and bookings attributed to each campaign',
    ],
  },
  {
    label: 'Website',
    role: 'Web specialist',
    title: 'A mobile-first website built for local search.',
    screenshot: 'Website builder',
    screenshotAlt: 'Replace with: Vendasta website builder or preview of a sample site',
    items: [
      '3–5 page professional website — designed, built, hosted, and maintained',
      'Optimised for local SEO: fast loading, proper schema markup, mobile-first design',
      'Includes click-to-call, Google Maps embed, booking integration, and contact form',
      'Annual refresh included — your site never looks outdated',
      'Or Karl connects to your existing website and manages your other channels around it',
    ],
  },
]
