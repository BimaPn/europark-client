"use client"
import { useContext, useEffect, useState } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import axios from "axios"

const PickSchedule = ({className}:{className?: string}) => {
  const { ticketInformationData,
  setTicketInformationData } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const [schedules, setSchedules] = useState<Schedule[]>([])

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/schedules/get`)
    .then((res) => {
      setSchedules(res.data.result)
      })
    .catch((err) => {
      console.log(err.response.data)
      })
  },[])

  const onChange = (e:React.MouseEvent<HTMLButtonElement>, schedule: Schedule) => {
    e.preventDefault()
    setTicketInformationData((prev:TicketInformationForm) => {
    return {...prev, schedule}
  })
  }
  return (
    <div className={`flex flex-col gap-[20px] ${className}`}>
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
