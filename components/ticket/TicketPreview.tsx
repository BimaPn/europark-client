"use client"
import { useContext, useState } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import { dateToString, numberToRupiah } from "@/helper/convert"

const TicketPreview = () => {
  const { ticketInformationData, ticketQuantity } = useContext(ticketPurchaseContext) as TicketPurchaseContext

  const totalPrice: ()=> number = () => {
    return ticketQuantity.reduce((accumulator, currentValue) => {
      let total = 0
      if(currentValue.quantity > 0) {
        total = (currentValue.price * currentValue.quantity)
      }
      return accumulator + total 
    }, 0);
  }
  return (
    <section>
      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-xl'>Ringkasan Pembelian</h1>
        <span className='text-sm'>Mohon periksa kembali pesanan sebelum menyelesaikan tahap pembelian.</span>

        <div className='flex flex-col gap-6 mt-5 text-sm text-gray-800'>
          <PreviewItem title='Tanggal Kunjungan'>
            <span>{dateToString(ticketInformationData.visit_date as Date)}</span> 
          </PreviewItem>
          <PreviewItem title='Jadwal Kunjungan'>
            <span>{ ticketInformationData.schedule?.schedule }</span> 
          </PreviewItem>
          <PreviewItem title='Jumlah dan Categori Tiket' className='!gap-3'>
          {ticketQuantity.map((item) => {
            const total = item.price * item.quantity
            return (item.quantity > 0) && (
            <div key={item.id} className='flexBetween -mt-1'>
              <div className='basis-1/3'>
                <span>{item.type}</span>
              </div>
              <div className='basis-1/3 text-center'>
                <span>{numberToRupiah(item.price)}  x {item.quantity}</span>
              </div>
              <div className='basis-1/3 text-end'>
                <span>{numberToRupiah(total)}</span>
              </div>
            </div>  
            )
            })}
          </PreviewItem>
          <PreviewItem title='Total'>
            <span className='font-medium text-black -mt-1 text-lg'>{numberToRupiah(totalPrice())}</span>
          </PreviewItem>
        </div>
      </div>

    </section>
  )
}

const PreviewItem = ({children, title, className}:{children:React.ReactNode, title:string, className?:string}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className='font-medium text-base text-black'>{title}</span>
      {children}
    </div>
  )
}
export default TicketPreview
