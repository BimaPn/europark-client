import { IoTicket } from "react-icons/io5"

const Stats = () => {
  return (
    <div className="flexCenter gap-4">
      {[1,2,3,4].map(item => (
      <StatItem className="w-1/4"/>
      ))}
    </div>
  )
}



type Stat = {
  value: number | string,
  description: string,
  icon: React.ReactNode,
}
const StatItem = ({className}:{className?:string}) => {
  return (
    <div className={`bg-white flex flex-col px-3 py-3 rounded-lg ${className} relative`}>
      <div className="flex flex-col gap-[2px]">
        <span className="font-semibold text-2xl">213</span>
        <span className="text-[13px] text-slate-500">Tiket terjual hari ini</span>
      </div>
        <div className="absolute top-3 right-3 min-w-[32px] flexCenter aspect-square rounded-full bg-blue-100">
          <IoTicket className="text-[19px] text-blue-500" />
        </div>
    </div>
  )
}

export default Stats
