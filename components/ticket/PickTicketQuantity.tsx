"use client"

import { useContext, useEffect } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import { numberToRupiah } from "@/helper/convert"
import axios from "axios"

const PickTicketQuantity = ({className}:{className?:string}) => {
  const { ticketQuantity, setTicketQuantity, maxQuantity,
  setMaxQuantity } = useContext(ticketPurchaseContext) as TicketPurchaseContext

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/categories/get`)
    .then((res) => {
    if(ticketQuantity.length <= 0) {
      setTicketQuantity(res.data.result)
    }
      setMaxQuantity(res.data.maxQuantity)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[])
  
  return ticketQuantity && (
    <div className={`flex flex-col gap-[6px] ${className}`}>
      <div className="flex flex-col gap-1">
        <span className='font-medium'>3. Pilih categori dan jumlah tiket</span>
        <span className="text-sm">Maksimal jumlah pembelian adalah {maxQuantity} tiket.</span>
      </div>

        <div className="flex flex-col gap-1">
          {ticketQuantity.map((item) => (
            <QuantityItem 
            key={item.id}
            id={item.id}
            type={item.type}
            price={item.price}
            quantity={item.quantity ? item.quantity : 0}
            description={item.description}
            />
          ))}
        </div>
    </div>
  )
}
const QuantityItem = ({id, type, price, description, quantity}:TicketQuantity) => {
  return (
    <div className="flex border-b py-3">
      <div className="basis-1/3 flex flex-col gap-[2px] text-[13px] text-slate-800">
        <span className="font-medium text-base text-black">{type}</span>
        {description && (
          <span>{description}</span>
        )}
      </div>
      <div className="basis-1/3 flexCenter">
        <span className="text-sm">{numberToRupiah(price)}</span>
      </div>
      <div className="basis-1/3 flex justify-end">
       
        <QuantityInput id={id} value={quantity} /> 
      </div>
    </div>
  )
}

const QuantityInput = ({ id, value }:{id:number, value:number}) => {
  const { ticketQuantity,setTicketQuantity,
  maxQuantity, setMaxQuantity } = useContext(ticketPurchaseContext) as TicketPurchaseContext

  const changeQuantity = (value:number) => {
    const updated = ticketQuantity.map((item) => {
      if(item.id == id) {
        item.quantity += value
      }
      return item
    })
    setTicketQuantity(updated)
    setMaxQuantity((prev: number) => prev - value)
  }
  const increase = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(maxQuantity <= 0) return
    changeQuantity(1)
  }
  const decrease = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(value <= 0) return
    changeQuantity(-1)
  }
  return (
        <div className="w-fit flexCenter">
          <button
          onClick={decrease}
          className="w-7 aspect-square flexCenter bg-blue-200 text-xl rounded">-</button>
          <input type="number" className="w-9 text-center" value={value} readOnly />
          <button
          onClick={increase}
          className="w-7 aspect-square flexCenter bg-blue-200 text-lg rounded">+</button>
        </div>
  )
}

export default PickTicketQuantity
