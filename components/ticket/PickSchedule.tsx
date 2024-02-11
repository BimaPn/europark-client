"use client"
import { useContext, useEffect, useState } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import axios from "axios"
import Skeleton from "../skeleton/Skeleton"

type ScheduleOption = Schedule & {disabled:boolean, available:number}

const PickSchedule = ({className}:{className?: string}) => {
  const { ticketInformationData,
  setTicketInformationData, setMaxQuantity } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const [schedules, setSchedules] = useState<ScheduleOption[]  | null>(null)

  useEffect(() => {
    if(!ticketInformationData.visit_date) return
    setSchedules(null)
    setTicketInformationData({...ticketInformationData, schedule :null})
    axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/schedules/get`,
    {params: {
      visit_date : ticketInformationData.visit_date
    }})
    .then((res) => {
      setSchedules(res.data.schedules)
      console.log(res.data.schedules)
      })
    .catch((err) => {
      console.log(err.response.data)
      })
  },[ticketInformationData.visit_date])

  const onChange = (e:React.MouseEvent<HTMLButtonElement>, schedule: ScheduleOption) => {
    e.preventDefault()
    setTicketInformationData((prev:TicketInformationForm) => {
      return {...prev, schedule:{id:schedule.id, schedule: schedule.schedule}}
    })
    setMaxQuantity(schedule.available)
  }
  return (
    <div className={`flex flex-col gap-[20px] ${className}`}>
      <span className='font-medium'>2. Pilih Jadwal Kunjungan</span>
      <div className="flex flex-col ss:flex-row items-center gap-3 text-sm">
       {schedules && schedules.map((item, index) => (
            <button 
            key={item.id}
            onClick={(e) => onChange(e, item)}
            disabled={item.disabled}
            className={`w-full ss:basis-1/3 py-2 px-2 ${ticketInformationData?.schedule?.id == item.id ? "bg-blue-600 text-white" : "bg-blue-100 text-black"} 
            text-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed`}>{item.schedule}</button>
       ))}
      {!schedules && [1, 2, 3].map((item) => (
        <Skeleton key={item} className="basis-1/3 size-lg py-4 !rounded-full" />
      ))}
      </div>

    </div>
  )
}

export default PickSchedule
