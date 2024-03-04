import TicketReportDateProvider from '@/components/provider/TicketReportDateProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'welcome',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
  <TicketReportDateProvider>
  {children}
  </TicketReportDateProvider>
  </>
  )
}
