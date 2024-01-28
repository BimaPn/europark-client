"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import { parentVariant, slideLeftVariant, slideRightVariant, slideUpVariant, viewport } from "@/constants/framerOptions";

const Welcome = () => {

  return (
    <motion.section className="boxWidth min-h-screen flexCenter gap-16 my-32 flex-col">
      <motion.div
      variants={parentVariant} 
      initial="hidden"
      whileInView={`visible`}
      viewport={viewport} 
      className="flex justify-between gap-10">
        <motion.div variants={slideRightVariant} className="basis-[60%] h-fit">
          <span className="font-bold text-[42px] leading-[52px]">Selamat Datang Di Museum Seni Terbaik di Indonesia</span>
        </motion.div>
        <motion.div variants={slideLeftVariant}  className="basis-[40%] leading-[28px] h-fit">
          <span className="text-justify text-lg block leading-9">Europark adalah museum pertama di Indonesia yang memiliki seni lukisan legendaris dan terbaik di dunia. Kami juga dsad sadasdbh dsadsahdbshjd dsadsadbs</span>
        </motion.div>
      </motion.div>

      <motion.div 
      variants={parentVariant}
      initial="hidden"
      whileInView={`visible`}
      viewport={viewport} 
      className="w-full flexCenter gap-5">
        <motion.div 
        variants={slideUpVariant}
        className="bg-[url('/images/about/1.jpg')] background-cover basis-[31.5%] shadow aspect-square"/>
        <motion.div 

        variants={slideUpVariant}
        className="bg-[url('/images/about/2.jpg')] bg-no-repeat bg-cover bg-center basis-1/3 shadow aspect-square"/>
        <motion.div 
        variants={slideUpVariant}
        className="bg-[url('/images/about/3.jpg')] backgroud-cover basis-[31.5%] aspect-square shadow"/>
      </motion.div>

    </motion.section>
  )
}

const ImagesPreview = () => {
  return (
    <div>hha</div>
  )
}

export default Welcome
