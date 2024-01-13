"use client"

import { useState } from "react"

const PickTicketQuantity = ({className}:{className?: string}) => {
  const types = [
  {
    type: "Anak-anak",
    description: "Dibawah 12 tahun.",
    price: 115000
  },
  {
    type: "Pelajar",
    description: "Memiliki kartu pelajar.",
    price: 150000
  },
  {
    type: "Dewasa",
    price: 250000
  },
  {
    type: "Lansia",
    description: "Diatas 65 tahun.",
    price: 200000
  },
  ]
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className='font-semibold'>3. Jumlah Ticket</span>
      <div className="flex flex-col">
        {types.map((item) => (
          <PricingItem 
          key={item.type}
          type={item.type}
          description={item.description} 
          price={item.price} />
        ))}

      </div>
    </div>
  )
}

const PricingItem = ({type, description, price}:{type:string, description?:string, price:number}) => {
  const [number, setNumber] = useState<number>(0)

  return (
    <div className="flexBetween h-[68px] border-b">
      <div className="w-1/3 flex flex-col">
        <span className="font-medium">{type}</span> 
        {description && (
          <span className="text-xs text-gray-600">{description}</span> 
        )}
      </div>
      <div className="w-1/3 text-center">
        <span>{'Rp. ' + price}</span> 
      </div>
      <div className="w-1/3 flex justify-end">
        <QuantityInput
        value={number}
        onChange={(value) => setNumber((prev) => prev + value)} 
        />
      </div>
    </div>
  )
}

const QuantityInput = ({value, onChange}:{value:number, onChange:(value:number)=>void}) => {
  const addQuantity = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onChange(1)
  }
  const removeQuantity = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(value <= 0) return
    onChange(-1)
  }
  return (
    <div className="w-fit flex">
      <button
      onClick={removeQuantity}
      className="border-2 border-slate-400 p-2 aspect-square flexCenter rounded" 
      >-</button>
      <input
      type="number"
      value={value}
      className="block w-8 text-center"
      />
      <button onClick={addQuantity}
      className="border-2 border-slate-400 p-2 aspect-square flexCenter rounded" 
      >+</button>
    </div>
  )
}

export default PickTicketQuantity
