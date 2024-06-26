import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detail Koleksi',
  description: 'Collection Detail',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
