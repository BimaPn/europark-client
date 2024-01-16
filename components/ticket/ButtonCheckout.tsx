"use client"
import { useContext } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import { numberToRupiah } from "@/helper/convert"
import { totalPrice } from "@/helper"

const ButtonCheckout = ({disabled}:{disabled:boolean}) => {
  const { ticketQuantity, ticketInformationData,
  ticketCheckoutData } = useContext(ticketPurchaseContext) as TicketPurchaseContext

  const onSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("berhasil")
    console.log(ticketQuantity) 
    console.log(ticketInformationData) 
    console.log(ticketCheckoutData) 
  }
  return (
    <div className='flexBetween py-4 px-4'>
      <div className='flex gap-3'>
        <span>Total : </span>
        <span className='font-medium'>
        {numberToRupiah(totalPrice(ticketQuantity))}
        </span>
      </div>
      <button
      onClick={onSubmit}
      disabled={disabled}
      className='w-fit px-5 py-2 rounded-full text-white font-medium bg-blue-500 
      disabled:opacity-50 disabled:cursor-not-allowed'
      >
      Bayar Sekarang
      </button>
    </div>

  )
}

export default ButtonCheckout
