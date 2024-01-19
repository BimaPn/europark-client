import { IoTicket } from "react-icons/io5"
import { HiUsers } from "react-icons/hi2"
import { MdCollectionsBookmark } from "react-icons/md"
import { PiCurrencyDollarBold } from "react-icons/pi"

const Stats = () => {
  const stats = [
  {
    value: 123,
    description: "Jumlah pengunjung hari ini",
    icon : <HiUsers className="text-[19px]" />
  },
  {
    value: 876,
    description: "Jumlah tiket terjual",
    icon : <IoTicket className="text-[18px]" />
  },
  {
    value: `Rp. 1000K`,
    description: "Penghasilan tahun ini",
    icon : <PiCurrencyDollarBold className="text-[19px]" />
  },
  {
    value: 382,
    description: "Total koleksi museum",
    icon : <MdCollectionsBookmark className="text-[18px]" />
  },
  ]
  return (
    <div className="flexCenter gap-4">
      {stats.map((item, i) => (
      <StatItem
      key={i}
      value={item.value}
      description={item.description}
      icon={item.icon}
      className="w-1/4"/>
      ))}
    </div>
  )
}
type Stat = {
  value: number | string,
  description: string,
  icon: React.ReactNode,
}
const StatItem = ({value, description, icon, className}:Stat & {className?:string}) => {
  return (
    <div className={`bg-white flex flex-col px-3 py-3 rounded-lg ${className} relative`}>
      <div className="flex flex-col gap-[2px]">
        <span className="font-semibold text-2xl">{value}</span>
        <span className="text-[13px] text-slate-500">{description}</span>
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
