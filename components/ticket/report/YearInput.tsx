"use client"
import ApiClient from '@/app/api/axios/ApiClient'
import Skeleton from '@/components/skeleton/Skeleton'
import TicketReportInputSkeleton from '@/components/skeleton/TicketReportInputSkeleton'
import { Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const YearInput = ({optionChange}:{optionChange:(val:string|number) => void}) => {
  const [years, setYears] = useState<string[]|number[]|null>(null)
  useEffect(() => {
    ApiClient().get(`/api/tickets/report/year-available`)
    .then((res) => {
      setYears(res.data.years)
      optionChange(res.data.years[0])
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[])
  return years ? (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium">Pilih Tahun</span>
      <Select 
      onChange={(e) => optionChange(e.target.value)}>
        {years.map((item, i) => (
          <option key={i} value={item}>{item}</option>
        ))}
      </Select>
    </div>
  ) : (
    <TicketReportInputSkeleton />
  )
}

export default YearInput
