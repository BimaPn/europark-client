import Link from "next/link"
import ErrorIcon from "../icons/ErrorIcon"

const TicketNotFound = () => {
  return (
    <section className="flexBetween flex-col items-center h-full">
      <div className="flex flex-col items-center">
        <ErrorIcon width={230} className="-mt-5"/>
        <span className="font-medium text-xl">Tiket Tidak Ditemukan</span>
        <div className="mt-6">
          <span className="block w-[80%] text-center mx-auto leading-[28px]">
            Mohon untuk periksa kembali ID Tiket yang akan di verifikasi
          </span> 
        </div>
      </div>
      <div className="w-full py-4 px-4 flexCenter">
      <Link 
      href={`/admin/dashboard/home`}
      className="w-full xs:basis-[75%] px-4 py-2 bg-blue-500 text-white font-medium rounded-full text-center">
      Dashboard
      </Link>
      </div>
    </section>
  )
}

export default TicketNotFound
