import Link from "next/link"
import { HiMiniArrowLongRight } from "react-icons/hi2"
import { motion } from "framer-motion"
import { parentVariant, slideUpVariant, viewport } from "@/constants/framerOptions"

const Collections = () => {
  const group1 = [
    {
      image: "/images/example4.jpg",
      aspect: "aspect-[3/4]"
    },
    {
      image: "/images/example7.jpg",
      aspect: "aspect-[4/3.8]"
    },
    {
      image:"/images/example2.jpg",
      aspect: "aspect-[3.5/3]"
    }
  ]
  const group2 = [
    {
      image: "/images/monalisa.jpg",
      aspect: "aspect-[3/4.2]"
    },
    {
      image: "/images/login.jpg",
      aspect: "aspect-[4/3]"
    },
    {
      image:"/images/example3.jpg",
      aspect: "aspect-[3/4.3]"
    }
  ]
  const group3 = [
    {
      image: "/images/example5.jpg",
      aspect: "aspect-[4/3]"
    },
    {
      image: "/images/example6.jpg",
      aspect: "aspect-[3/4.3]"
    },
    {
      image:"/images/example.jpg",
      aspect: "aspect-[3/4.2]"
    }
  ]

  return (
    <section className="boxWidth min-h-screen my-32 relative">
      <div className="sm:w-[35%] sm:absolute -top-3 left-8">
        <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={viewport} 
        className="flex flex-col gap-2 pr-4">
          <motion.span variants={slideUpVariant} className="text-[38px] font-bold">Koleksi Seni Museum</motion.span>
        
          <motion.span variants={slideUpVariant} className="text-leading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi soluta, quis molestias deqfaefes fefsefes</motion.span>
          <motion.div variants={slideUpVariant} className="flex justify-end">
            <Link href={`/collections`} className="flexCenter gap-1 font-medium">
            Lebih banyak <HiMiniArrowLongRight className="text-xl -mb-[2px]" /></Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full flex justify-end gap-7">
        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7 sm:mt-48">
          {group1.map((item) => (
            <motion.div
            variants={slideUpVariant}
            initial="hidden"
            whileInView={"visible"}
            viewport={viewport} 
            className={`${item.aspect}`}
            style={
            {
              background:`url(${item.image})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center"
            }
            } />
          ))}
        </div>

        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7">
          {group2.map((item) => (
            <motion.div
            variants={slideUpVariant}
            initial="hidden"
            whileInView={"visible"}
            viewport={viewport} 
            className={`${item.aspect}`}
            style={
            {
              background:`url(${item.image})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center"
            }
            } />
          ))}
        </div>
        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7">
          {group3.map((item) => (
            <motion.div
            variants={slideUpVariant}
            initial="hidden"
            whileInView={"visible"}
            viewport={viewport} 
            className={`${item.aspect}`}
            style={
            {
              background:`url(${item.image})`,
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center"
            }
            } />
          ))}
        </div>
      </div>
    </section>    
  )
}

export default Collections
