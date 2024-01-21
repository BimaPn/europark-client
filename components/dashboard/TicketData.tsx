"use client"
import ActiveBadge from "@/components/ui/ActiveBadge"
import ExpiredBadge from "@/components/ui/ExpiredBadge"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import { FaEye, FaTrash } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import ReactPaginate from 'react-paginate'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { useContext, useEffect, useState } from "react"
import ApiClient from "@/app/api/axios/ApiClient"
import LinkTickeDetail from "../ui/LinkTicketDetail"

type Ticket = {
  id: string,
  name:string,
  email:string,
  schedule:string,
  expired:boolean
  visit_date:string,

}
const TicketData = () => {
  const [tickets, setTickets] = useState<Ticket[] | null>(null)

  useEffect(() => {
    ApiClient().get(`/api/tickets/get`)
    .then((res) => {
      setTickets(res.data.result)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  },[])

  const renderTickets = () => {
    return tickets!.map((item,index) => (
      <Tr key={index} className="border-b">
        <Td> 
          <span className='line-clamp-1'>{item.name}</span>
        </Td>
        <Td>{item.email}</Td>
        <Td className="text-center">{item.schedule}</Td>
        <Td>
        {item.expired ? (
        <ExpiredBadge />
        ) : (
        <ActiveBadge />
        )}
        </Td>
        <Td className="text-center">{item.visit_date}</Td>
        <TdActions>
          <LinkTickeDetail ticketId={item.id} />
        </TdActions>
      </Tr>
    ))
  }
  return (
  <>
    <div className="px-1 flexBetween mb-[10px]">
      <span className="font-medium text-xl">Daftar Tiket</span>
      <div className="w-52 flex px-1 py-1 bg-blue-100/90 text-slate-500 rounded-lg">
        <div className="w-8 aspect-square flexCenter">
          <IoSearch />
        </div>
        <input type="text" className="w-full bg-transparent placeholder:text-slate-500 text-xs" placeholder="Cari tiket" />
      </div>
    </div>
    <Table>
      <Thead>
        <Tr>
          <Th className="w-1/4 text-start">Nama</Th>
          <Th className="text-start">Email</Th>
          <Th >Jadwal</Th>
          <Th>Status</Th>
          <Th>Tanggal Pembelian</Th>
          <Th> </Th>
        </Tr>
      </Thead>
      <Tbody>
      {tickets && renderTickets()}
      </Tbody>
    </Table>
    {!tickets && <p>loading</p>}
    <div className="absolute bottom-0 right-0 px-4 py-4">
      <ReactPaginate
      pageCount={20}
      pageRangeDisplayed={1}
      marginPagesDisplayed={2}
      previousLabel={
        <div className="w-8 aspect-square flexCenter">
          <IoIosArrowBack />
        </div>
      }
      nextLabel={
        <div className="w-8 aspect-square flexCenter">
          <IoIosArrowForward />
        </div>
      }
      className="flex items-center gap-1" 
      pageClassName="w-8 aspect-square h-fit flexCenter"
      activeClassName="bg-blue-500 text-white rounded-lg"
      />
    </div>
  </>
  )
}

export default TicketData
