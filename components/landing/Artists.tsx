"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const Artists = () => {
  const [anjay, setAnjay] = useState(false)
  useEffect(() => {
console.log(anjay)
  },[anjay])
  return (
    <section className="boxWidth min-h-screen my-32 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <span className="font-bold text-[38px]">Lukisan dari Seniman Terbaik</span>
        <span>Temukan lukisan-lukisan dari seniman terbaik didunia</span>
      </div>

      <div className="w-full flex gap-6">
        <div onClick={() => setAnjay(prev => !prev)} 
        className={`rounded-lg bg-black transition-all z-[2000] !duration-1000 ${anjay ? "fixed scale-100 inset-0":"relative w-1/3  h-96 scale-50"}`}>
        <Image src={`/images/example7.jpg`} alt="example" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

const Card = () => {
  return (
    <div>

    </div>
  )
}

export default Artists
