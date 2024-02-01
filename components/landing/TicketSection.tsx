"use client"
import { ticketSectionTitle } from "@/constants"
import { parentVariant, slideUpVariant, viewport } from "@/constants/framerOptions"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const TicketSection = () => {
  const slideUpWordsVariant = {
    visible: {y:0,opacity:1,transition:{duration:.4}},
    hidden: {y:100},
  }

  return (
    <motion.section className="flexCenter flex-col section text-white section gap-12">
      <motion.div
      variants={parentVariant} 
      initial="hidden"
      whileInView={`visible`}
      viewport={viewport} 
      className="w-[75%] flexCenter flex-col gap-5 overflow-hidden pb-6">
        <div 
        className="mx-auto flex flex-wrap justify-center gap-[10px] font-bold text-[46px] text-center leading-[42px]">
          {ticketSectionTitle.map((item,i) => (
            <motion.span
            variants={slideUpWordsVariant}
            className="block opacity-0" key={i}>{item}</motion.span>
          ))}
        </div>
        <motion.div variants={slideUpVariant} className="text-center"> 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo corporis veritatis excepturi iste doloribus laboriosam.
        </motion.div>
        <motion.div variants={slideUpVariant} className="mt-2">
            <Link
            href={`/tickets/buy`}
            className="px-5 py-2 font-medium rounded-lg bg-primary hover:opacity-50"
            >
            <span className="!text-black">Beli Tiket</span>
            </Link>
        </motion.div>
      </motion.div>
      
      <motion.div
      variants={parentVariant} 
      initial="hidden"
      whileInView={`visible`}
      viewport={viewport} 
      className="w-full relative flex gap-8 overflow-hidden scroll-horizontal-parent">
        <span className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[3px] bg-primary" />

        <div className="min-w-full flex gap-8 horizontal-scroll-animation">
          <div className="w-1/3 aspect-square relative">
            <Image src={`/images/example7.jpg`} fill alt="example" className="object-cover rounded-xl" />
          </div>
          <div className="w-1/3 aspect-square relative">
            <Image src={`/images/example7.jpg`} fill alt="example" className="object-cover rounded-xl" />
          </div>
          <div className="w-1/3 aspect-square relative">
            <Image src={`/images/example7.jpg`} fill alt="example" className="object-cover rounded-xl" />
          </div>
        </div>
         <div className="min-w-full flex gap-8 horizontal-scroll-animation">
          <div className="w-1/3 aspect-square relative">
            <Image src={`/images/example7.jpg`} fill alt="example" className="object-cover rounded-xl" />
          </div>
          <div className="w-1/3 aspect-square relative">
            <Image src={`/images/example7.jpg`} fill alt="example" className="object-cover rounded-xl" />
          </div>
          <div className="w-1/3 aspect-square relative">
            <Image src={`/images/example7.jpg`} fill alt="example" className="object-cover rounded-xl" />
          </div>
        </div>

      </motion.div>


    </motion.section>
  )
}

export default TicketSection