"use client"
import ActiveBadge from "@/components/ui/ActiveBadge"
import ExpiredBadge from "@/components/ui/ExpiredBadge"
import TicketDataSkeleton from "@/components/skeleton/TicketDataSkeleton"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import { FaEye, FaTrash } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import ReactPaginate from 'react-paginate'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { useContext, useEffect, useState } from "react"
import ApiClient from "@/app/api/axios/ApiClient"
import LinkTickeDetail from "../ui/LinkTicketDetail"
import { FiSearch } from "react-icons/fi"
import ChangeTicketPrice from "../ticket/ChangeTicketPrice"
import TicketScan from "../TicketScan"
import Search from "../ui/Search"
import NotFound from "../NotFound"

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
  
  const searchTicket = (query:string) => {
    setTickets(null)
    ApiClient().get(`/api/tickets/search?name=${query}`)
    .then((res) => {
      setTickets(res.data.tickets)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  const renderTickets = () => {
    return tickets!.map((item,index) => (
      <Tr key={index} className="border-b">
        <Td> 
          <span className='line-clamp-1'>{item.name}</span>
        </Td>
        <Td>{item.email}</Td>
        <Td>{item.schedule}</Td>
        <Td>
        {item.expired ? (
        <ExpiredBadge />
        ) : (
        <ActiveBadge />
        )}
        </Td>
        <Td>{item.visit_date}</Td>
        <TdActions>
          <LinkTickeDetail ticketId={item.id} />
        </TdActions>
      </Tr>
    ))
  }
  return (
  <>
    <div className="flexBetween !items-start">
      <div className="w-fit px-1 flex flex-col mb-[10px] gap-3">
        <span className="font-medium text-xl">Daftar Tiket</span>
        <Search onSearch={searchTicket} placeholder="Cari tiket"/>
      </div>

      <div className="flexCenter gap-3">
        <TicketScan />
        <ChangeTicketPrice />
      </div>
    </div>

    <Table>
      <Thead>
        <Tr>
          <Th className="w-1/4 text-start">Nama</Th>
          <Th className="text-start">Email</Th>
          <Th className="text-start">Jadwal</Th>
          <Th className="text-start">Status</Th>
          <Th className="text-start">Tanggal Pembelian</Th>
          <Th> </Th>
        </Tr>
      </Thead>
      <Tbody>
      {!tickets && <TicketDataSkeleton count={5} />}
      {tickets && renderTickets()}
      </Tbody>
    </Table>
    {(tickets && tickets.length <= 0) && (
      <div className="py-12">
        <NotFound />
      </div>
    )}
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
