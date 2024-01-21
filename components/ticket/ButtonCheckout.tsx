"use client"
import { numberToRupiah } from "@/helper/convert"
import { totalPrice } from "@/helper"

const ButtonCheckout = ({disabled, ticketQuantity}:{disabled:boolean, ticketQuantity:TicketQuantity[]}) => {
  return (
    <div className='flexBetween py-4 px-4'>
      <div className='flex gap-3'>
        <span>Total : </span>
        <span className='font-medium'>
        {numberToRupiah(totalPrice(ticketQuantity))}
        </span>
      </div>
      <button
      type="submit"
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
