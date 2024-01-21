"use client"
import ActiveBadge from "@/components/ui/ActiveBadge"
import ButtonDelete from "@/components/ui/ButtonDelete"
import ButtonDetail from "@/components/ui/ButtonDetail"
import ExpiredBadge from "@/components/ui/ExpiredBadge"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import { FaEye, FaTrash } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import ReactPaginate from 'react-paginate'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

const TicketData = () => {
  const tickets = [
  {
    avatar: "/images/avatar.jpg",
    name: "Ahmad Wahyudi",
    email: "ahmad@gmail.com",
    totalVisitors: "12.00 PM - 22.00 PM",
    date: "June 12, 2024",
    status: true,
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Nanang Subianto",
    email: "akuanjaycoy@gmail.com",
    totalVisitors: "12.00 PM - 22.00 PM",
    date: "June 12, 2024",
    status: true,
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Dodi Gangster",
    email: "dodi@gmail.com",
    totalVisitors: "12.00 PM - 22.00 PM",
    date: "June 12, 2024",
    status: true,
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Susi Geulis",
    email: "susimf@gmail.com",
    totalVisitors: "12.00 PM - 22.00 PM",
    date: "June 10, 2024",
    status: false,
  },
  ]
  return (
  <>
    <div className="px-1 flexBetween mb-2 border text-center">
      <span className="font-medium text-xl border">Daftar Tiket</span>
      <div className="w-52 flex px-1 py-1 bg-blue-100/90 text-slate-500 rounded-lg">
        <div className="w-8 aspect-square flexCenter">
          <IoSearch />
        </div>
        <input type="text" className="w-full bg-transparent placeholder:text-slate-500" placeholder="Cari tiket" />
      </div>
    </div>
    <Table>
      <Thead>
        <Tr>
          <Th className="w-1/4 text-start">Nama</Th>
          <Th className="text-start">Email</Th>
          <Th>Jadwal</Th>
          <Th>Tanggal Pembelian</Th>
          <Th>Status</Th>
          <Th> </Th>
        </Tr>
      </Thead>
      <Tbody>
        {tickets.map((item,index) => (
          <Tr className="border-b">
            <Td> 
              <span className='line-clamp-1'>{item.name}</span>
            </Td>
            <Td>{item.email}</Td>
            <Td className="text-center">{item.totalVisitors}</Td>
            <Td>
            {item.status ? (
            <ActiveBadge />
            ) : (
            <ExpiredBadge />
            )}
            </Td>
            <Td className="text-center">{item.date}</Td>
            <TdActions>
              <ButtonDetail callback={() => console.log("jir")} />
            </TdActions>
          </Tr>
        ))}
      </Tbody>
    </Table>
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
      activeClassName="bg-blue-600 text-white rounded-lg"
      />
    </div>
  </>

  )
}

export default TicketData
