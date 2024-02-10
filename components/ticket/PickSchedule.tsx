"use client"
import { useContext, useEffect, useState } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import axios from "axios"

type ScheduleOption = Schedule & {disabled:boolean}

const PickSchedule = ({className}:{className?: string}) => {
  const { ticketInformationData,
  setTicketInformationData } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const [schedules, setSchedules] = useState<ScheduleOption[]  | null>(null)

  useEffect(() => {
    if(!ticketInformationData.visit_date) return
    setSchedules(null)
    console.log(ticketInformationData.visit_date)
    axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/schedules/get`,
    {params: {
      visit_date : ticketInformationData.visit_date
    }})
    .then((res) => {
      setSchedules(res.data.schedules)
      })
    .catch((err) => {
      console.log(err.response.data)
      })
  },[ticketInformationData.visit_date])

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
       {schedules && schedules.map((item, index) => (
            <button 
            key={item.id}
            onClick={(e) => onChange(e, item)}
            disabled={item.disabled}
            className={`basis-1/3 py-2 px-2 ${ticketInformationData?.schedule?.id == item.id ? "bg-blue-600 text-white" : "bg-blue-100 text-black"} 
            text-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed`}>{item.schedule}</button>
       ))}
      </div>
      {!schedules && <p>loading .....</p>}
    </div>
  )
}

export default PickSchedule
