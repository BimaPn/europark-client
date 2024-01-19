"use client"
import ActiveBadge from "@/components/ui/ActiveBadge"
import ButtonDelete from "@/components/ui/ButtonDelete"
import ButtonDetail from "@/components/ui/ButtonDetail"
import ExpiredBadge from "@/components/ui/ExpiredBadge"
import RoundedImage from "@/components/ui/RoundedImage"
import { Table, Tbody, Td, TdActions, Th, Thead, Tr } from "@/components/ui/Table"
import { FaEye, FaTrash } from "react-icons/fa"

const TicketData = () => {
  const tickets = [
  {
    avatar: "/images/avatar.jpg",
    name: "Ahmad Wahyudi",
    email: "ahmad@gmail.com",
    totalVisitors: 10,
    date: "June 12, 2024",
    status: true,
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Nanang Subianto",
    email: "akuanjaycoy@gmail.com",
    totalVisitors: 3,
    date: "June 12, 2024",
    status: true,
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Dodi Gangster",
    email: "dodi@gmail.com",
    totalVisitors: 7,
    date: "June 12, 2024",
    status: true,
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Susi Geulis",
    email: "susimf@gmail.com",
    totalVisitors: 10,
    date: "June 10, 2024",
    status: false,
  },
  ]
  return (
    <Table>
      <Thead>
        <Tr>
          <Th className="w-1/4 text-start">Nama</Th>
          <Th className="text-start">Email</Th>
          <Th>Total Pengunjung</Th>
          <Th>Tanggal Pembelian</Th>
          <Th>Status</Th>
          <Th>Aksi</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tickets.map((item,index) => (
          <Tr>
            <Td className="flex items-center gap-2">
              <RoundedImage src={item.avatar} alt={item.avatar} className='!min-w-[38px] !w-[38px]' />
              <span className='line-clamp-1'>{item.name}</span>
            </Td>
            <Td>{item.email}</Td>
            <Td className="text-center">{item.totalVisitors}</Td>
            <Td className="text-center">{item.date}</Td>
            <Td>
            {item.status ? (
            <ActiveBadge />
            ) : (
            <ExpiredBadge />
            )}
            </Td>
            <TdActions>
              <ButtonDetail callback={() => console.log("jir")} />
              <ButtonDelete callback={() => console.log("jir")} />
            </TdActions>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TicketData
