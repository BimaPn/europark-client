"use client"
import { ReportDateProvider, reportContext } from "@/components/provider/TicketReportDateProvider"
import { useContext } from "react"

const page = () => {
  const {date} = useContext(reportContext) as ReportDateProvider  
  const reportUrl = () => {
    let baseUrl = `${process.env.NEXT_PUBLIC_DATABASE_URL}/tickets/report`
    if(date.year) {
      baseUrl += `?year=${date.year}`
    }
    if(date.month) {
      baseUrl += `&month=${date.month}`
    }
    if(date.day) {
      baseUrl += `&day=${date.day}`
    }
    return baseUrl
  }
  return (
    <div className='h-screen'>
      <iframe width="100%" height="100%" src={reportUrl()} />
    </div>
  )
}

export default page
