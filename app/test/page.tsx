"use client"
import { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const Page = () => {
  const [kanjut, setKanjut] = useState(false)
  return (
    <section className='h-[2000px] flex items-center py-12 flex-col'>
      <ArtistCard />
    <div className='my-64'>
    <span>najay bamarbhabfaeef</span>
    </div>
    </section>
  )
}

const ArtistCard = () => {
  const [isOpen, setIsOpen] = useState(false)

  const checkScreen = () => {
    if(!isOpen) return "260%"
    const screenRatio = window.innerWidth / window.innerHeight
    const isLessRatio = screenRatio < 16/10
    if(isLessRatio) return `${window.innerHeight * 2.6}px`
    else return "100%"
  }
  return (
    <motion.div
    layout
    className={`bg-blue-300 flex items-center overflow-hidden ${isOpen ? "w-screen h-screen fixed top-0 left-0":"w-64 aspect-[10/16] relative"}
    `}
    onClick={() => setIsOpen(!isOpen)}
    >
      <motion.img src="/images/artist1.jpg" layout alt='example'
      className={`aspect-[16/10]`}
      style={{ minWidth: checkScreen() }}
      />
    </motion.div>
  )
}

export default Page
