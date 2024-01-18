import TicketPurchaseProvider from '@/components/provider/TicketPurchaseProvider'
import axios from 'axios'
import type { Metadata } from 'next'
import TicketNavbar from '../TicketNavbar'

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
      <section className="boxWidth flex flex-col h-screen min-h-screen relative">
        <TicketNavbar className="sticky top-0 right-0 left-0 z-[1000]"  />
        <main className="w-[584px] flex flex-col px-4 mx-auto h-full">
          {children}
        </main>
      </section>
    </TicketPurchaseProvider>
  )
}
