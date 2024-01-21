import TicketPurchaseProvider from "@/components/provider/TicketPurchaseProvider"
import ButtonNavigation from "@/components/ticket/ButtonNavigation"
import StartPage from "@/components/ticket/StartPage"
import Link from "next/link"
import { HiMiniBuildingLibrary } from "react-icons/hi2"

const page = () => {
  return (
    <>
      <StartPage />
      <div className="sticky bottom-0 right-0 left-0 z-[1000]">
        <ButtonNavigation />
      </div>
    </>
  )
}



export default page
