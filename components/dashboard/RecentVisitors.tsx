"use client"

import Image from 'next/image'
import RoundedImage from '../ui/RoundedImage'
import Link from 'next/link'
import { Table, Tbody, Td, Th, Thead, Tr } from '../ui/Table'

const RecentVisitors = ({className}:{className?:string}) => {
  const visitors = [
  {
    avatar: "/images/avatar.jpg",
    name: "Tatang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Tatang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Tatang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Tatang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Tatang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Tatang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  ]
  return (
    <div className={`bg-white rounded-lg h-fit px-4 py-4 ${className}`}>
      <div className='mb-[6px]'>
        <span className='font-semibold '>Recent Visitors</span>
      </div>

      <Table>
        <Thead>
          <Tr>
            <Th className='w-1/2 text-start'>Nama</Th>
            <Th>Total</Th>
            <Th>Tanggal</Th>
          </Tr>
        </Thead>
        <Tbody>
            {visitors.map((item, index) => (
            <Tr key={index}>
              <Td className='flex items-center gap-2'>
                <RoundedImage src={item.avatar} alt={item.name} className='!min-w-[38px] !w-[38px]' />
                <span className='line-clamp-1'>{item.name}</span>
              </Td>
              <Td className='text-center'>{item.visitors}</Td>
              <Td className='text-center'>{item.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

const VisitorItem = () => {

}

export default RecentVisitors
