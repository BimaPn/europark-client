"use client"

import { useContext } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"

const PickSchedule = ({className}:{className?: string}) => {
  const { ticketInformationData, setTicketInformationData } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const schedules = [
  {
    id: 1,
    schedule: "09.00 AM - 12.00 PM"
  },
  {
    id: 2,
    schedule: "12.00 PM - 15.00 PM"
  },
  {
    id: 3,
    schedule: "18.00 PM - 21.00 PM"
  },
  ]
  const onChange = (e:React.MouseEvent<HTMLButtonElement>, schedule: Schedule) => {
    e.preventDefault()
    setTicketInformationData((prev:TicketInformationForm) => {
    return {...prev, schedule}
  })
  }
  return (
    <div className={`flex flex-col gap-[24px] ${className}`}>
      <span className='font-medium'>2. Pilih Jadwal Kunjungan</span>
    <div className="flex items-center gap-3 text-sm">
     {schedules.map((item, index) => (
          <button 
          key={item.id}
          onClick={(e) => onChange(e, item)}
          className={`basis-1/3 py-2 px-2 ${ticketInformationData?.schedule?.id == item.id ? "bg-blue-600 text-white" : "bg-blue-200 text-black"} 
          text-center rounded-full`}>{item.schedule}</button>
     ))}
    </div>
    </div>
  )
}

export default PickSchedule
