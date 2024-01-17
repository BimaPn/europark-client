import TicketPurchaseProvider from '@/components/provider/TicketPurchaseProvider'
import axios from 'axios'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Ticket',
  description: 'Page for buy Ticket',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TicketPurchaseProvider>
      {children}
    </TicketPurchaseProvider>
  )
}
