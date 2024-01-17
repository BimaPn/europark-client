import TicketPurchaseProvider from "@/components/provider/TicketPurchaseProvider"
import ButtonNavigation from "@/components/ticket/ButtonNavigation"
import StartPage from "@/components/ticket/StartPage"
import Link from "next/link"
import { HiMiniBuildingLibrary } from "react-icons/hi2"

const page = () => {
  return (
    <section className="boxWidth flex flex-col h-screen min-h-screen relative">
      <Navbar className="sticky top-0 right-0 left-0 z-[1000]" />
      <main className="w-[584px] flex flex-col px-4 mx-auto h-full">
        <StartPage />
        <div className="sticky bottom-0 right-0 left-0 z-[1000]">
          <ButtonNavigation />
        </div>
      </main>
    </section>
  )
}

const Navbar = ({className}:{className?:string}) => {
  return (
    <nav className={`w-full flexBetween px-8 py-[10px] bg-white ${className}`}>
      <div className="font-semibold flexCenter gap-1 text-blue-700">
        <HiMiniBuildingLibrary className="text-[26px] -mt-[3px]"/>
        <span className="text-xl">EuroPark</span>
      </div>
      <Link href={`/`} className="text-blue-600">Beranda</Link>
    </nav>
  )
}

export default page
