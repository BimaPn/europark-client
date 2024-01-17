"use client"
import axios from "axios"
import { useEffect } from "react"

const page = () => {
  const data = {
    visit_date : new Date(),
    schedule_id:1,
    quantities: [{
      id:1,
      quantity:2
    }]
  }
  useEffect(() => {
    // axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/session/create`,data,{withCredentials:true})
    axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/tickets/session/check`,{withCredentials:true})
    .then((res) => {
      console.log(res.data)
      })
    .catch((err) => {
      console.log(err.response.data)
      })
  },[])
  return (
    <div>page</div>
  )
}

export default page
