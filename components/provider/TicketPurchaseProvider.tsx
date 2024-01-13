"use client"
import { createContext, useState } from "react"

export const ticketPurchaseContext = createContext<TicketPurchaseContext | null>(null);

const TicketPurchaseProvider = ({children}:{children:React.ReactNode}) => {
  const [ticketInformationData, setTicketInformationData] = useState<TicketInformationForm>({});
  const [ticketCheckoutData, setTicketCheckoutData] = useState<TicketCheckoutForm>({})
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <ticketPurchaseContext.Provider
    value={{ ticketInformationData, ticketCheckoutData, currentPage, setCurrentPage }}>
      {children}
    </ticketPurchaseContext.Provider>
  )
}

export default TicketPurchaseProvider
