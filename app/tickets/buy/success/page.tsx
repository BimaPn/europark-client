import SuccessIcon from "@/components/icons/SuccessIcon"
import Link from "next/link"

const page = () => {
  return (
    <section className="flexBetween flex-col items-center h-full">
      <div className="flex flex-col items-center">
        <SuccessIcon width={230}/>
        <span className="font-medium text-xl">Tiket berhasil dibuat !</span>
        <div className="mt-6">
          <span className="w-[80%] block text-center mx-auto leading-[28px]">
          Ticket telah berhasil dibuat dan ticket telah dikirim ke email
           <span className="font-semibold ml-[6px]">bimaptr12@gmail.com</span></span>
        </div>
      </div>
      <div className="w-full py-4 px-4 flex gap-6 text-center">
      <Link href={`/`} className="basis-1/2 px-4 py-2 border-2 border-gray-300 rounded-full">Beranda</Link>
      <Link href={`/tickets/buy`} className="basis-1/2 px-4 py-2 bg-blue-500 text-white font-medium rounded-full">
      Beli ticket lagi 
      </Link>
      </div>
    </section>
  )
}

export default page
