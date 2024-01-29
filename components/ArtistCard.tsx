"use client"
import Image from "next/image"
import { motion,AnimatePresence } from "framer-motion"
import { useState } from "react"

const ArtistCard = ({className}:{className?:string}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShowCotent, setIsShowContent] = useState(false)
  const [position, setPosition] = useState(false)

  const checkScreen = () => {
    if(!isOpen) return "260%"
    const screenRatio = window.innerWidth / window.innerHeight
    const isLessRatio = screenRatio < 16/10
    if(isLessRatio) return `${window.innerHeight * 2.6}px`
    else return "100%"
  }
  const delayChange = () => {
    if(!isOpen && !isShowCotent) {
      setIsOpen(!isOpen)
      delayContent()
    }
    if(isOpen && isShowCotent) {
      setIsShowContent(!isShowCotent)
      delayParent() 
    }
  }
  const delayParent = () => {
    const timeout = setTimeout(() => {
      setIsOpen(!isOpen)
    },600)
    return () => clearTimeout(timeout)
  }
  const delayContent = () => {
    const timeout = setTimeout(() => {
      setIsShowContent(!isShowCotent)
    },600)
    return () => clearTimeout(timeout)
  }
  const changePosition = () => {
    setPosition(isOpen ? true : false)
  }
  return (
    <motion.div
    layout
    className={`flexCenter overflow-hidden ${className}
    ${isOpen ? "w-screen h-screen fixed top-0 left-0 !z-[1000] rounded-none":"relative rounded-lg"} ${position ? "z-[1000]":"z-[50]"}
    `}
    transition={{ duration: .6}}
    onClick={delayChange}
    >
      <motion.img src="/images/artist1.jpg" layout alt='example'
      className={`aspect-[16/10]`}
      animate={{ filter:`brightness(${isOpen ? "65%":"100%"})` }}
      transition={{ duration: .6}}
      onAnimationComplete={changePosition}
      style={{ minWidth: checkScreen() }}
      />
      <AnimatePresence>
        {isShowCotent && (
          <ArtistCardContent /> 
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ArtistCardContent = () => {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute inset-0 flex items-end text-white">
      <div className='w-full h-[52%] flexCenter gap-8'>
        <motion.div
        transition={{ duration: .4, staggerChildren: .3}}
        initial={{ y: -80,opacity:0 }}
        animate={{ y:0,opacity:1 }}
        exit={{ y:-80 }}
        className='basis-1/2 flex pl-8 justify-end gap-3 flex-col'>
          <span className='text-[44px] font-bold'>Leonardo Da Vinci</span>
          <span className='text-xl font-medium'>(1440 - 1660)</span>
        </motion.div>

        <motion.div
        transition={{ duration: .6 }}
        initial={{ x:500 }}
        animate={{ x:0 }}
        exit={{ x:500 }}
        className='basis-1/2 flex items-center gap-5 overflow-x-auto'>
          {[1,2,3,4,5,6].map((item) => (
            <ContentCard key={item} className='min-w-[25%]' />
          ))}
        </motion.div>

      </div>   
    </motion.div>
  )
}

const ContentCard = ({className}:{className?:string}) => {
  return (
    <div className={`aspect-[3/4.5] relative ${className}`}>
      < Image 
      src={`/images/example4.jpg`} 
      alt={"example"}
      fill
      style={{objectFit:"cover"}}
      className='rounded-lg'
      />
    </div> 
  )
}

export default ArtistCard