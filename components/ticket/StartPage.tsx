"use client"
import { useContext, useEffect } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import ButtonNavigation from "./ButtonNavigation"
import TicketInformationForm from "./TicketInformationForm"
import TicketPreview from "./TicketPreview"
import TicketCheckout from "./TicketCheckout"
import axios from "axios"

const StartPage = () => {
  const { currentPage, setCurrentPage, setIsDone,
  setTicketInformationData, setTicketQuantity } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  useEffect(() => {
    setIsDone(false)
    axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/session/check`,{withCredentials:true})
    .then((res) => {
      const result = res.data.result
      if(result) {
        setTicketInformationData({
          visit_date: new Date(result.visit_date),
          schedule: result.schedule
        })
        setTicketQuantity(result.quantities)
        setCurrentPage(2)
      }
    })
  },[])
  return (
  <>
  {currentPage == 1 && <TicketInformationForm />}
  {currentPage == 2 && <TicketPreview />}
  {currentPage == 3 && <TicketCheckout />}
  </>
  )
}

export default StartPage
