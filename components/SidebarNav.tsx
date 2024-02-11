"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const SidebarNav = ({isDark=false}:{isDark?:boolean}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible"
  },[isOpen])

  const checkColor = () => {
    if(isDark) return "white"
    return isOpen ? "white" : "black"
  }

  const lineLeftTransition = {
    rotate: isOpen ? "44deg" : "0deg",
    backgroundColor: checkColor(),
    transition : {
      duration: .3,
      damping: 1
    }
  }
  const lineRightTransition = {
    rotate: isOpen ? "-44deg" : "0deg",
    backgroundColor: checkColor(),
    transition : {
      duration: .3,
      damping: 1
    }
  }

  return (
    <div className="w-[25px] aspect-square relative z-[2000]">
      <button onClick={() => setIsOpen(prev => !prev)} className='absolute top-0 left-0 z-[2000] w-[23px] aspect-[4/3.3] flex flex-col justify-between'>
        <motion.div
        animate={lineLeftTransition} 
        className='bg-black min-w-full h-[3px] rounded-full origin-top-left'/>
        <motion.div animate={{ opacity: isOpen ? "0" : "1"  }} className={`${isDark ? "bg-white" : "bg-black"} w-full h-[3px] rounded-full`}/>
        <motion.div animate={lineRightTransition}
        className='bg-black min-w-full h-[3px] rounded-full origin-bottom-left'/>
      </button>
      <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
          initial={{ translateX: "100%" }} 
          animate={{ translateX: "0%", transition:{duration:.4, damping:1} }} 
          exit={{ translateX: "100%", transition:{duration:.4, damping:1}  }} 
          className="w-[75vw] h-screen fixed top-0 right-0 z-[1600] bg-black">
          </motion.div>
          <motion.div 
          initial={{ opacity: "0" }} 
          animate={{ opacity: ".5", transition:{duration:.4 } }} 
          exit={{ opacity: "0" }}
          onClick={() => setIsOpen(false)} className="fixed inset-0 z-[1000] bg-black" />
          </>
      )}
      </AnimatePresence>
    </div>
  )
}

const NavList = () => {
  return (
    <div>
      <ul>
      
      </ul>
    </div>
  )
}

export default SidebarNav
