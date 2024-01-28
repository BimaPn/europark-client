"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { IoTicketOutline } from "react-icons/io5"

const windowPosition = window.pageYOffset

const Navbar = ({isLanding=false}:{isLanding?:boolean}) => {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(windowPosition);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const screenHeight = window.innerHeight
    const isScrollingUp = prevScrollPos > currentScrollPos
    const isAtScreenBottom = currentScrollPos + screenHeight >= document.body.offsetHeight
    const isOverlayScreen = isLanding ? (currentScrollPos > screenHeight) : true

    setNavbarVisible((isScrollingUp || isAtScreenBottom) && isOverlayScreen)
    setPrevScrollPos(currentScrollPos)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[prevScrollPos])

  return (
      <header className={`boxWidth ${isNavbarVisible ? "fixed":"absolute"} top-0 left-0 right-0 z-[20000]
      ${(!isNavbarVisible && isLanding) ? "px-2 py-1" : "px-1 py-2"} text-white`}>
        <nav 
        className={`${(!isNavbarVisible && isLanding) ? "p-[12px]": "bg-dark rounded-xl p-[8px]"} flexBetween`}>
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

export default Navbar
