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
      <Navbar />
      <ButtonUp />
      <main>
        <Hero />  
        <Welcome />
        <Collections />
        <Artists />
        <TicketSection />
      </main>
      <Footer />
    </>
  )
}

export default Home
