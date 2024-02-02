import Link from "next/link"
import { motion } from "framer-motion"
import Hero from "@/components/landing/Hero"
import Welcome from "@/components/landing/Welcome"
import Collections from "@/components/landing/Collections"
import Artists from "@/components/landing/Artists"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ScheduleAndPrice from "@/components/landing/ScheduleAndPrice"
import TicketSection from "@/components/landing/TicketSection"
import ButtonUp from "@/components/landing/ButtonUp"

const Home = () => {
  return (
    <>

      <ButtonUp />
      <main>
        <div className="relative h-screen overflow-hidden">
          <Navbar />
          <Hero />  
        </div>
        <div id="main" className="relative z-[50] bg-white pt-[152px]">
          <Welcome />
          <Collections />
          <Artists />
          <TicketSection />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home
