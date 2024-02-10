import Link from "next/link"
import { HiMiniBuildingLibrary } from "react-icons/hi2"

const TicketNavbar = ({className}:{className?:string}) => {
  return (
    <nav className={`w-full flexBetween px-8 py-[12px] bg-white ${className}`}>
      <div className="font-semibold flexCenter gap-1 text-blue-700">
        <HiMiniBuildingLibrary className="text-[26px] -mt-[3px]"/>
        <span className="text-xl">EuroPark</span>
      </div>
      <Link href={`/`} className="text-blue-600">Beranda</Link>
    </nav>
  )
}

export default TicketNavbar
