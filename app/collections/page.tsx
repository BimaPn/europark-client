import Image from "next/image"
import { FiSearch } from "react-icons/fi"

const page = () => {
  return (
    <section className="boxWidth mt-3 pb-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="font-semibold text-[28px]">Koleksi Museum</span>
          <span>Cari kanjut di tengah jalan iya gabakal ada anjing.</span>
        </div>

        <div className="sm:w-[40%] flex items-center border-b-2 border-gray-500">
          <input type="text" className="w-full py-[10px] focus:outline-none placeholder:text-gray-400" placeholder="Cari koleksi..." />
          <div className="w-8 aspect-square flexCenter">
            <FiSearch className="text-[22px] text-gray-600" />
          </div>
        </div>  
      </div>

    <div className="grid grid-cols-5 gap-6 mt-9">
      {Array(7).fill(0).map((item, i) => (
        <div className="flex flex-col gap-2">
          <div className="w-full aspect-[3/4.5] relative">
            <Image src={`/images/example7.jpg`} alt="example" fill className="object-cover rounded-md" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Leonardo da Vinci</span>
            <span className="text-xs text-gray-700">1342 M</span>
          </div>

        </div>

      ))}
    </div>
    </section>  
  )
}

export default page
