"use client"
import ResponseMessageAdmin from "@/components/ticket/ResponseMessageAdmin"
import axios from "axios"
import { useEffect, useState } from "react"

const page = () => {
  const [message, setMessage] = useState<string>()
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/session/status/get`,{withCredentials:true})
    .then((res) => {
      console.log(res.data)
      if(res.data.message) {
        setMessage(res.data.message)
      }
    })
  },[])

  return message && (
    <ResponseMessageAdmin
    type="success"
    message="Berhasil di Verifikasi"
    subMessage={message} 
    />
  )
}

export default page