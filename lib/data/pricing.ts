export interface PricingTier {
  name: string
  price: string
  slug: 'starter' | 'growth' | 'leader'
  team: string
  teamDetail: string
  recommended: boolean
  features: string[]
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '299',
    slug: 'starter',
    team: 'Karl + 3 specialists',
    teamDetail: 'Review specialist · Listings coordinator · Content creator',
    recommended: false,
    features: [
      'AI chat receptionist — web, social, WhatsApp',
      'Review monitoring — Google and Facebook',
      'Directory sync — 40+ sites',
      'Local SEO grid — 10 keywords tracked',
      'Social posting — Facebook and Google',
    ],
  },
  {
    name: 'Growth',
    price: '499',
    slug: 'growth',
    team: 'Karl + 5 specialists',
    teamDetail: 'Everything in Starter + Receptionist (SMS) · Campaign manager',
    recommended: true,
    features: [
      'Everything in Starter, plus:',
      'AI chat + SMS + missed call text-back',
      'AI review responses — all platforms',
      'Full social media — all channels, AI content',
      'Email and SMS campaigns to past customers',
    ],
  },
  {
    name: 'Leader',
    price: '799',
    slug: 'leader',
    team: 'Karl + the full team',
    teamDetail: 'Everything in Growth + Voice receptionist · Ads manager · SEO analyst',
    recommended: false,
    features: [
      'Everything in Growth, plus:',
      'AI voice receptionist — answers calls 24/7',
      'Automated review solicitation after visits',
      'Google Ads — setup, management, reporting',
      'Managed SEO and content services',
    ],
  },
]

export interface AlaCarteItem {
  name: string
  price: string
  includedIn: ('starter' | 'growth' | 'leader')[]
  bullets: string[]
}

export const alaCarteItems: AlaCarteItem[] = [
  {
    name: 'AI Voice Receptionist',
    price: '149',
    includedIn: ['leader'],
    bullets: [
      'Answers calls 24/7 in your business name',
      '300 minutes/month included',
      'German and English at launch',
    ],
  },
  {
    name: 'AI Review Responses',
    price: '99',
    includedIn: ['growth', 'leader'],
    bullets: [
      'Responds to reviews on 20+ platforms',
      'Responses in your tone and language',
      'Monthly response summary included',
    ],
  },
  {
    name: 'Social Media Manager',
    price: '149',
    includedIn: ['starter', 'growth', 'leader'],
    bullets: [
      'Posts to Facebook, Instagram, LinkedIn, Google',
      'AI-generated content tailored to your business',
      'Approval workflow or auto-publish',
    ],
  },
  {
    name: 'Google Ads Management',
    price: '199',
    includedIn: ['leader'],
    bullets: [
      'Local Search campaigns in your area',
      'Weekly bid optimisation',
      'Plain-language monthly report',
    ],
  },
  {
    name: 'Email & SMS Campaigns',
    price: '99',
    includedIn: ['growth', 'leader'],
    bullets: [
      'Campaigns to past customers and leads',
      'Promotions, re-engagement, reminders',
      'AI-drafted copy, you approve',
    ],
  },
  {
    name: 'Local SEO & Listings',
    price: '149',
    includedIn: ['starter', 'growth', 'leader'],
    bullets: [
      'Directory sync across 40+ sites',
      'Google Business Profile optimisation',
      'Local keyword ranking grid',
    ],
  },
]
