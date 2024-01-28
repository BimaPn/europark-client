"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Hero from "@/components/landing/Hero"
import Welcome from "@/components/landing/Welcome"
import Collections from "@/components/landing/Collections"
import Artists from "@/components/landing/Artists"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
const Home = () => {
  return (
    <>
      <Navbar />
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
