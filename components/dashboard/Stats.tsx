"use client"
import { IoTicket } from "react-icons/io5"
import { HiUsers } from "react-icons/hi2"
import { MdCollectionsBookmark } from "react-icons/md"
import { PiCurrencyDollarBold } from "react-icons/pi"
import { useContext, useEffect, useState } from "react"
import ApiClient from "@/app/api/axios/ApiClient"
import { integerToRupiah } from "@/helper/convert"
import StatSkeleton from "../skeleton/StatSkeleton"
import { AlertMessageProvider, alertMessageContext } from "../AlertMessage"

type Stat = {
  total: number | string,
  label: string,
  icon: React.ReactNode,
}

const Stats = () => {
  const icons = [
  <HiUsers key={1} className="text-[19px]" />,
  <IoTicket key={2} className="text-[18px]" />,
  <PiCurrencyDollarBold key={3} className="text-[19px]" />,
  <MdCollectionsBookmark key={4} className="text-[18px]" />
  ]
  const [data, setData] = useState<Stat[] | null>(null)
  const { setAlert } = useContext(alertMessageContext) as AlertMessageProvider
  useEffect(() => {
    ApiClient().get(`/api/statistics/main-data/get`)
    .then((res) => {
      const result = res.data
      const yearIncome = {
        label: result.yearIncome.label,
        total: `Rp. ${integerToRupiah(result.yearIncome.total)}`
      }
      setData([
        result.visitorsToday,
        result.thisMonthTicketSold,
        yearIncome,
        result.collectionsTotal
      ])
    })
    .catch((err) => {
      console.log(err.response.data)
      setAlert({
        success:false,
        message: "Terjadi Kesalahan."
      })
    })
  },[])
  
  return (
    <div className="w-full grid grid-cols-1 ss:grid-cols-2 md:grid-cols-4 gap-3 ss:gap-4">
      {!data && (
        <StatSkeleton  count={4}/>
      )}
      {data && data.map((item,i) => (
        <StatItem
        key={i}
        total={item.total}
        label={item.label}
        icon={icons[i]}
        />
      ))}
    </div>
  )
}

const StatItem = ({total, label, icon, className}:Stat & {className?:string}) => {
  return (
    <div className={`bg-white flex flex-col px-3 py-3 rounded-lg ${className} relative`}>
      <div className="flex flex-col gap-[2px]">
        <span className="font-semibold text-2xl">{total}</span>
        <span className="text-[13px] text-slate-500">{label}</span>
      </div>
      <div
      className="absolute top-3 right-3 min-w-[32px] flexCenter 
      aspect-square rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>
    </div>
  )
}


export default Stats
