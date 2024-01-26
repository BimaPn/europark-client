"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { IoTicketOutline } from "react-icons/io5"

const windowPosition = window.pageYOffset

const LandingNavbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(windowPosition);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const screenHeight = window.innerHeight
    const isScrollingUp = prevScrollPos > currentScrollPos
    const isAtScreenBottom = currentScrollPos + screenHeight >= document.body.offsetHeight

    setNavbarVisible((isScrollingUp || isAtScreenBottom) && currentScrollPos > screenHeight)
    setPrevScrollPos(currentScrollPos)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[prevScrollPos])

  return (
      <header className={`boxWidth ${isNavbarVisible ? "fixed px-1 py-2":"absolute px-2 py-1"} top-0 left-0 right-0 z-[2000] text-white`}>
        <nav 
        className={`${isNavbarVisible && "bg-dark rounded-xl"} flexBetween  p-[12px]`}>
          <span className="text-2xl font-bold">
          EuroPark
          </span>
          <div className="flex items-center gap-5">
            <ul className="flexCenter gap-6 items-center font-medium">
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
