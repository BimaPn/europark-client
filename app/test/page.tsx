"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const Page = () => {
  const [expanded, setExpanded] = useState(false)
  return (
   <section className='flex justify-center min-h-screen'>
    <div className="basis-1/2">
      <div 
      onClick={() => setExpanded(!expanded)}
      className='w-fit h-full aspect-[3/3.5] flex flex-col overflow-hidden bg-black relative'>
        <Image src={`/images/monalisa.jpg`} alt="haha" fill className="object-cover" /> 
        <motion.div className={`absolute w-full h-1/2`}
        initial={{ top: "0px" }}
        animate={{ top: expanded ? "-600px" : "0px",transition:{duration:1} }}
        >
          <Image src={`/images/cut1.jpg`} alt="haha" fill className="object-cover"/>
        </motion.div>      
        <motion.div className={`absolute w-full h-1/2`}
        initial={{ bottom: "0px" }}
        animate={{ bottom: expanded ? "-600px" : "0px",transition:{duration:1}  }}
        >
          <Image src={`/images/cut2.jpg`} alt="haha" fill className="object-cover"/>
        </motion.div>      
      </div>
    </div>

    <div className="basis-1/2">
    <span>anjay banget</span>
    </div>

    </section>
  )
}



export default Page
