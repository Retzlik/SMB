export interface Vertical {
  category: string
  slug: string
  headline: string
  headlineItalic: string
  subverticals: string
  href: string
}

export const verticals: Vertical[] = [
  {
    category: 'Healthcare',
    slug: 'health-care',
    headline: 'You treat patients.',
    headlineItalic: 'Karl fills your schedule.',
    subverticals: 'Dental · Physiotherapy · Veterinary · Pet services',
    href: '/health-care',
  },
  {
    category: 'Professional services',
    slug: 'professional-services',
    headline: 'You advise clients.',
    headlineItalic: 'Karl finds new ones.',
    subverticals: 'Accountants · Law firms · Estate agents',
    href: '/professional-services',
  },
  {
    category: 'Home and trade',
    slug: 'home-services',
    headline: 'You fix the pipes.',
    headlineItalic: 'Karl fills your calendar.',
    subverticals: 'Plumbers · Electricians · Builders · Cleaners',
    href: '/home-services',
  },
  {
    category: 'Automotive',
    slug: 'automotive',
    headline: 'You teach them to drive.',
    headlineItalic: 'Karl brings them to your door.',
    subverticals: 'Garages · Dealerships · Driving schools',
    href: '/automotive',
  },
]
