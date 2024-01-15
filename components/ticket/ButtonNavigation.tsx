"use client"
import { useContext } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import ButtonCheckout from "./ButtonCheckout"

const ButtonNavigation = () => {
  const { currentPage, setCurrentPage, disableSubmit } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const pageChange = (condition: boolean) => {
    if(condition) {
      setCurrentPage((prev: number) => prev+1);
    }
    if(!condition && currentPage != 1){
      setCurrentPage((prev: number) => prev-1);
    }
  }
  return (
    <div className="w-[584px] bg-white mx-auto">
      {currentPage >= 3 ? (
        <ButtonCheckout disabled={disableSubmit} />
      ) : (
        <ButtonNextPrev
        page={currentPage}
        disabled={disableSubmit}
        callback={(condition) => pageChange(condition)} 
        />
      )}
    </div>
  )
}

const ButtonNextPrev = ({callback, page, disabled}:
{callback:(condition:boolean)=>void, page: number, disabled:boolean}) => {
  const buttonClick = (e:React.MouseEvent<HTMLButtonElement>, condition:boolean) => {
    e.preventDefault()
    callback(condition)
  }
  return (
    <div className="flex justify-end items-center gap-3 text-end py-4 px-4">

      <button
      onClick={(e) => buttonClick(e, false)}
      className={`border-2 border-gray-300 px-4 py-[6.5px] rounded-full ${page <= 1 && "opacity-50 cursor-not-allowed"}`}
      >Kembali</button>
      <button 
      disabled={disabled}
      onClick={(e) => buttonClick(e, true)}
      className="px-4 py-2 bg-blue-500 text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >Lanjutkan</button>

    </div>
  )
}


export default ButtonNavigation
