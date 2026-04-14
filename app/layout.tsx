// Root layout — minimal shell. Actual HTML structure lives in app/[locale]/layout.tsx.
// Required by Next.js App Router but [locale] layout provides all HTML.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
