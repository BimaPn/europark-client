import Link from "next/link"
import { IoTicketOutline } from "react-icons/io5"

const LandingNavbar = () => {
  return (
      <header 
      className={`boxWidth fixed top-0 left-0 right-0 z-[20] text-white px-6 py-[14px]`}>
        <nav className="flexBetween">
          <span className="text-2xl font-bold ml-2">
          EuroPark
          </span>
          <div className="flex items-center gap-5">
            <ul className="flexCenter gap-6 items-center font-semibold">
              <li>
              <Link href={`/`} className="hover:text-gray-400">Beranda</Link>
              </li>
              <li>
              <Link href={`/collections`}>Koleksi</Link>
              </li>
            </ul>
            <Link
            href={`/tickets/buy`}
            className="px-4 py-[6px] font-medium rounded-lg bg-primary hover:opacity-50"
            >
            <span className="!text-black">Beli Tiket</span>
            </Link>
          </div>

        </nav>
      </header>
  )
}

export default LandingNavbar

      // <motion.header 
      // initial={{ y:-50 }} 
      // animate={{ y:0 }}
      // className={`boxWidth ${isNavbarVisible ? "fixed px-1 py-2":"absolute px-2 py-1"} top-0 left-0 right-0 z-[20000] text-white`}>
      //   <nav 
      //   className={`${isNavbarVisible ? "bg-dark rounded-xl p-[8px]": "p-[12px]"} flexBetween  p-[12px]`}>
      //     <span className="text-2xl font-bold ml-2">
      //     EuroPark
      //     </span>
      //     <div className="flex items-center gap-5">
      //       <ul className="flexCenter gap-6 items-center font-semibold">
      //         <li>Home</li>
      //         <li>Koleksi</li>
      //         <li>Jadwal</li>
      //       </ul>
      //       <Link
      //       href={`/tickets/buy`}
      //       className="px-4 py-[6px] font-medium rounded-lg text-black bg-primary"
      //       >
      //       <span>Beli Tiket</span>
      //       </Link>
      //     </div>
      //
      //   </nav>
      // </motion.header>
