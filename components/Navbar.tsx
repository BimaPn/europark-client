import { navigations } from "@/constants/list"
import Link from "next/link"
import { IoTicketOutline } from "react-icons/io5"
import SidebarNav from "./SidebarNav"

const Navbar = ({className, isDark = false}:{className?:string, isDark?:boolean}) => {
  return (
      <header 
      className={`boxWidth px-6 py-[14px] ${className}`}>
        <nav className="flexBetween">
          <span className="text-2xl font-bold ml-2">
          EuroPark
          </span>
          <div className="hidden ss:flex items-center gap-5">
            <ul className="flexCenter gap-4 sm:gap-6 items-center font-semibold">
              {navigations.map((item, i) => (
                <li key={i} className='hover:text-gray-600'>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <Link
            href={`/tickets/buy`}
            className="px-3 py-[6px] font-medium rounded-lg bg-primary hover:opacity-50"
            >
            <span className="!text-black">Beli Tiket</span>
            </Link>
          </div>
          <div className={`ss:hidden block`}>
            <SidebarNav isDark={isDark} />
          </div>
        </nav>
      </header>
  )
}

export default Navbar

