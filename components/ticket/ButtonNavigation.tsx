"use client"
import { useContext } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import ButtonCheckout from "./ButtonCheckout"
import axios from "axios"
import { useRouter } from "next/navigation"

const ButtonNavigation = () => {
  const { currentPage, setCurrentPage} = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const pageChange = (condition: boolean) => {
    if(condition) {
      setCurrentPage((prev: number) => prev+1);
    }
    if(!condition && currentPage != 1){
      setCurrentPage((prev: number) => prev-1);
    }
  }
  return (currentPage < 3) && (
    <div className="w-full ss:w-[546px] bg-white mx-auto">
      <ButtonNextPrev
      page={currentPage}
      callback={(condition) => pageChange(condition)} 
      />
    </div>
  )
}

const ButtonNextPrev = ({callback, page}: {callback:(condition:boolean)=>void, page: number}) => {

  const { ticketInformationData, ticketQuantity, setTicketInformationData, setTicketQuantity,
  setDisableSubmit, disableSubmit, setIsDone } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const router = useRouter()

  const buttonClick = (e:React.MouseEvent<HTMLButtonElement>, condition:boolean) => {
    e.preventDefault()
    if(page === 1 && condition) {
      sessionRequest()
    }else {
      callback(condition)
    }

  }
  const sessionRequest = async () => {
    const requestData= {
      visit_date: ticketInformationData.visit_date as Date,
      schedule_id: ticketInformationData.schedule?.id as number,
      quantities: ticketQuantity
    }
    setDisableSubmit(true)
    axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/session/create`,
    requestData,
    {withCredentials:true})
    .then((res) => {
      const result = res.data.result
      if(result) {
        res.data.result 
        setTicketInformationData({
          visit_date: new Date(result["visit_date"]) as Date,
          schedule: result["schedule"],
        })
        setTicketQuantity(result["quantities"])
        callback(true)
      }
    })
    .catch((err) => {
      setIsDone(true)
      router.push(`/tickets/buy/error`)
    })
  }
  return (
    <div className="flex justify-center ss:justify-end items-center gap-3 text-end py-4 px-3 ss:px-4">
      <button
      onClick={(e) => buttonClick(e, false)}
      className={`w-1/2 ss:w-fit border-2 border-gray-300 px-4 py-[6.5px] rounded-full ${page <= 1 && "opacity-50 cursor-not-allowed"}`}
      >Kembali</button>
      <button 
      disabled={disableSubmit}
      onClick={(e) => buttonClick(e, true)}
      className="w-1/2 ss:w-fit px-4 py-2 bg-blue-500 text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >Lanjutkan</button>
    </div>
  )
}


export default ButtonNavigation
