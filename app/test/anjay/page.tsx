"use client"
import AdminNavbar from "@/components/AdminNavbar"
import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react"
import { Spinner } from '@chakra-ui/react'
import { useRouter } from "next/navigation"
import Image from "next/image"

const page = () => {
  const [isDone,setIsDone] = useState<boolean>(false)
  const [error,setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
  const scanner = new Html5QrcodeScanner('reader',{
    qrbox: {
      width: 380,
      height: 380
    },
    fps: 5,
  },false)

  const success = (result:string) => {
    const checkQr = result.includes(`${process.env.NEXT_PUBLIC_APP_NAME}/tickets`)
    if(!checkQr) {
      setError(result)
      return
    }
    router.push(result.toString())
    scanner.clear()
    setIsDone(true)
    setError(null)
  }
  const error = (err : any) => {
    console.log(err)
  }
  scanner.render(success, error)
  },[])
  return (
    <>
      <AdminNavbar />
      <section className="px-4 xs:p-0">
        <div className="flex flex-col items-center mb-4">
          <Image
          width={400}
          height={400}
          className="w-[150px] aspect-square"
          src={`/icons/ticket.png`} 
          alt={`ticket icon`}
          draggable={false} 
          />
          <span className="font-medium text-lg mt-4">Scan Tiket</span>
        </div>
        <div className="flexCenter flex-col">
          {error && <span className="text-red-500">Tiket tidak valid, mohon masukan tiket yang valid.</span>}
          {isDone ? (
            <div className="my-6 flexCenter flex-col gap-3">
              <Spinner size={`lg`} className="text-blue-500"/>
              <span>Anda sedang dialihkan ke halaman verifikasi tiket, tunggu sebentar...</span>
            </div>
          ) : (
            <div id="reader"></div>
          )}
        </div>  
      </section>
    </>
  )
}

export default page
