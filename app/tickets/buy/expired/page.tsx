import ErrorIcon from "@/components/icons/ErrorIcon"
import Link from "next/link"

const page = () => {
  return (
    <section className="flexBetween flex-col items-center h-full">
      <div className="flex flex-col items-center">
        <ErrorIcon width={230}/>
        <span className="font-medium text-xl">Sesi Pembelian Berakhir</span>
        <div className="mt-6">
          <span className="block w-[80%] text-center mx-auto leading-[28px]">
          Sesi pembelian tiket telah kadaluarsa. Coba untuk isi kembali form pembelian tiket 
          </span> 
        </div>
      </div>
      <div className="w-full py-4 px-4 flex gap-6 text-center">
      <Link href={`/`} className="basis-1/2 px-4 py-2 border-2 border-gray-300 rounded-full">Beranda</Link>
      <Link href={`/tickets/buy`} className="basis-1/2 px-4 py-2 bg-blue-500 text-white font-medium rounded-full">
      Beli ticket 
      </Link>
      </div>
    </section>
  )
}

export default page
