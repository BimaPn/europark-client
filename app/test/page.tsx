"use client"
import { useEffect, useState } from 'react'
import { motion,AnimatePresence } from "framer-motion"
import Image from 'next/image'

const Page = () => {
  const [kanjut, setKanjut] = useState(false)
  return (
    <section className='h-[2000px] flex items-center py-12 flex-col'>
    <div className='w-full flexCenter gap-5 border'>
    <div className='basis-1/4'>
      <ArtistCard  />
    </div>

    <div className='basis-1/4'>
      <ArtistCard  />
    </div>

    <div className='basis-1/4'>
      <ArtistCard  />
    </div>

    <div className='basis-1/4'>
      <ArtistCard  />
    </div>
    </div>

    <div className='my-64'>
    <span>najay bamarbhabfaeef</span>
    </div>
    </section>
  )
}

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
    if(!isOpen) {
      setIsOpen(!isOpen)
      delayContent()
    }else {
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
    className={`bg-blue-300 flex items-center overflow-hidden ${className}
    ${isOpen ? "w-screen h-screen fixed top-0 left-0 !z-[1000]":"relative"} ${position ? "z-[1000]":"z-[50]"}
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
    className="absolute inset-0 flex justify-end text-white">
      <div className='w-[65%] h-full flex flex-col justify-between'>
        <motion.div
        transition={{ duration: .4, staggerChildren: .3}}
        initial={{ y: -80,opacity:0 }}
        animate={{ y:0,opacity:1 }}
        exit={{ y:-80 }}
        className='flex justify-end gap-3 min-h-[37%] flex-col'>
          <span className='text-[44px] font-bold'>Leonardo Da Vinci</span>
          <span className='text-xl font-medium'>(1440 - 1660)</span>
        </motion.div>

        <motion.div
        transition={{ duration: .6 }}
        initial={{ x:500 }}
        animate={{ x:0 }}
        exit={{ x:500 }}
        className='w-full min-h-[50%] flex items-center gap-5 overflow-x-auto'>
          {[1,2,3,4,5,6].map((item) => (
            <ContentCard key={item} className='min-w-[20%]' />
          ))}
        </motion.div>

      </div>   
    </motion.div>
  )
}

const ContentCard = ({className}:{className?:string}) => {
  return (
    <div className={`aspect-[3/4] relative  ${className}`}>
      < Image 
      src={`/images/example4.jpg`} 
      alt={"example"}
      fill
      style={{objectFit:"cover"}}
      />
    </div> 
  )
}

export default Page
