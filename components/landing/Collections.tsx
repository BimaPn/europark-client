import Link from "next/link"
import { HiMiniArrowLongRight } from "react-icons/hi2"

const Collections = () => {
  return (
    <section className="boxWidth min-h-screen my-32 relative">
      <div className="sm:w-[35%] sm:absolute -top-3 left-8">
          <div className="flex flex-col gap-2 pr-4">
            <span className="text-[38px] font-bold">Koleksi Seni Museum</span>
            <span className="text-leading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi soluta, quis molestias deqfaefes fefsefes</span>
            <div className="flex justify-end -mt-3">
              <Link href={`/collections`} className="flexCenter gap-1 font-medium">
              Lebih banyak <HiMiniArrowLongRight className="text-xl -mb-[2px]" /></Link>
            </div>

          </div>
      </div>

      <div className="w-full flex justify-end gap-7">

        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7 sm:mt-48">
          <div className="aspect-[3/4] bg-[url('/images/example.jpg')] background-cover"/>
          <div className="aspect-[3/4] sm:aspect-[4/3.5] bg-[url('/images/example2.jpg')] background-cover"/>
          <div className="aspect-[3.5/3] bg-[url('/images/example7.jpg')] background-cover"/>
        </div>

        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7">
          <div className="aspect-[3/4.2] bg-[url('/images/monalisa.jpg')] background-cover"/>
          <div className="aspect-[4/3] bg-[url('/images/login.jpg')] background-cover"/>
          <div className="aspect-[3/4.3] bg-[url('/images/example3.jpg')] background-cover"/>
        </div>
        <div className="basis-[30%] grid grid-cols-1 h-fit gap-7">
          <div className="aspect-[4/3] bg-[url('/images/example5.jpg')] background-cover"/>
          <div className="aspect-[3/4.3] bg-[url('/images/example6.jpg')] background-cover"/>
          <div className="aspect-[3/4.2] bg-[url('/images/example4.jpg')] background-cover"/>
        </div>
      </div>
    </section>    
  )
}

export default Collections
