"use client"
import Image from "next/image"
import ArtistCard from "../ArtistCard"
import { motion, useAnimation, useInView } from "framer-motion"
import { 
  cardSlideUpVariant,
  cardsParentVariant,
  cardsViewport,
  parentVariant,
  slideUpVariant,
  viewport
  } from "@/constants/framerOptions"
import { useEffect, useRef } from "react"

const Artists = () => {
  const control = useAnimation();
  const parent = useRef(null)
  const inView = useInView(parent,{margin: "0% 0% -70% 0%", once:false});
  const boxVariant = {
      visible: { opacity: 1,y: 0,transition: { delay:0.4,duration: 0.6 }},
      hidden: { opacity: 0,y:100 },
  }
  useEffect(() => {
     if(inView) {
       control.start("visible")
       document.body.style.backgroundColor = "#000000"
     }else{
       control.start("hidden")
       document.body.style.backgroundColor = "#000000"
     }
  },[inView, control]);

  return (
    <motion.section
    ref={parent}
    variants={cardsParentVariant}
    initial="hidden"
    animate={control}
    viewport={viewport} 
    className="boxWidth min-h-screen section flex flex-col gap-10 text-white">

      <div 
      className="min-h-[100px] overflow-hidden relative">
        <div className="flex flex-col gap-1 absolute top-0 left-0">
          <motion.span variants={slideUpVariant} className="font-bold text-[38px]">Lukisan dari Seniman Terbaik</motion.span>
          <motion.span variants={slideUpVariant}>Temukan lukisan-lukisan dari seniman terbaik didunia</motion.span>
        </div>

      </div>

      <motion.div
      variants={parentVariant} 
      viewport={cardsViewport}
      initial="hidden"
      whileInView={`visible`}
      className="grid grid-cols-4 gap-6 bg-black">
     
        <motion.div variants={cardSlideUpVariant} 
        className="cursor-pointer"
        whileHover={{ scale:1.05,transition:{duration:.4} }}>
          <ArtistCard />
        </motion.div >  
        <motion.div variants={cardSlideUpVariant} 
        className="cursor-pointer"
        whileHover={{ scale:1.05,transition:{duration:.4} }}>
          <ArtistCard />
        </motion.div>  
        <motion.div variants={cardSlideUpVariant} 
        className="cursor-pointer"
        whileHover={{ scale:1.05,transition:{duration:.4} }}>
          <ArtistCard />
        </motion.div>  
        <motion.div variants={cardSlideUpVariant}
        className="cursor-pointer"
        whileHover={{ scale:1.05,transition:{duration:.4} }}>
          <ArtistCard />
        </motion.div>  
      </motion.div>  
    </motion.section>
  )
}

const Card = () => {
  return (
    <div>

    </div>
  )
}

export default Artists
