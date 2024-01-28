"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { IoTicketOutline } from "react-icons/io5"
import { motion } from "framer-motion"

const windowPosition = window.pageYOffset

const LandingNavbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(windowPosition);
  const [isFillBackground, setIsFillBackground] = useState(false)
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const isScrollingUp = prevScrollPos > currentScrollPos

    setIsFillBackground(currentScrollPos > window.innerHeight)
    setNavbarVisible(isScrollingUp)
    setPrevScrollPos(currentScrollPos)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[prevScrollPos])

  return (
      <header 
      className={`boxWidth fixed ${isNavbarVisible ? "top-0" : "-top-20 delay-150"} left-0 right-0 transition-top z-[20000] text-white !px-6 py-2`}>
        <nav 
        className={`${isFillBackground ? "bg-dark/45": "bg-transparent"} transition-background flexBetween rounded-xl  p-[8px]`}>
          <span className="text-2xl font-bold ml-2">
          EuroPark
          </span>
          <div className="flex items-center gap-5">
            <ul className="flexCenter gap-6 items-center font-semibold">
              <li>Home</li>
              <li>Koleksi</li>
              <li>Jadwal</li>
            </ul>
            <Link
            href={`/tickets/buy`}
            className="px-4 py-[6px] font-medium rounded-lg text-black bg-primary"
            >
            <span>Beli Tiket</span>
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
