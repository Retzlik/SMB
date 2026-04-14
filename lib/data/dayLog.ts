export interface DayLogEntry {
  t: string
  a: string
  tag: string
}

export const dayLog: DayLogEntry[] = [
  {
    t: '07:02',
    a: "Karl's review specialist responded to Anna M.'s 5-star review on Google — thanked her for mentioning how comfortable the new waiting room chairs are.",
    tag: 'Reviews',
  },
  {
    t: '08:15',
    a: "Karl's content creator published the Tuesday Instagram and Facebook post — a photo of the practice entrance with a caption about welcoming new patients.",
    tag: 'Social',
  },
  {
    t: '09:23',
    a: 'You texted Karl: "We\'re closing at 3pm on Fridays now." His listings coordinator updated the hours on Google Maps, Apple Maps, Yelp, Jameda, and 37 other directories.',
    tag: 'Listings',
  },
  {
    t: '09:47',
    a: "New patient called while you were in a session. Karl's receptionist answered, explained that you take private and public insurance, and booked them for Thursday at 2pm.",
    tag: 'Receptionist',
  },
  {
    t: '10:30',
    a: "Karl's review specialist sent review requests via SMS to four patients who visited yesterday.",
    tag: 'Reviews',
  },
  {
    t: '12:15',
    a: 'Your Google Ad for "Zahnarzt Schöneberg" received two clicks today — €3.40 total, within your set daily budget of €10.',
    tag: 'Ads',
  },
  {
    t: '14:08',
    a: 'WhatsApp message: "Do you do teeth whitening?" Karl\'s receptionist replied with your whitening options and pricing, and offered to book an appointment.',
    tag: 'Receptionist',
  },
  {
    t: '17:45',
    a: "Karl prepared your weekly summary — covers new reviews, messages handled, calls answered, ad spend, and this week's social posts.",
    tag: 'Report',
  },
  {
    t: '22:14',
    a: 'Facebook message: "Are you taking new patients?" Karl\'s receptionist replied: "Yes — would you like me to book you in this week?"',
    tag: 'Receptionist',
  },
]
