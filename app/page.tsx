"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Hero from "@/components/landing/Hero"
import Welcome from "@/components/landing/Welcome"
import Collections from "@/components/landing/Collections"
import Artists from "@/components/landing/Artists"
import Footer from "@/components/Footer"
const Home = () => {
  return (
    <>
      <header className="boxWidth absolute top-0 left-0 right-0 px-9 py-3 z-[2000] text-white">
        <nav className="flexBetween">
          <span className="text-2xl font-bold">
          EuroPark
          </span>
          <ul className="flexCenter gap-6 items-center">
            <li>Home</li>
            <li>Koleksi</li>
            <li>Jadwal</li>
          </ul>
        </nav>
      </header>
      
      <main className="overflow-hidden">
      <Hero />  
      <Welcome />
      <Collections />
      <Artists />
      </main>
      <Footer />
    </>
  )
}

export default Home
