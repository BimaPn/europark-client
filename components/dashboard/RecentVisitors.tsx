"use client"

import Image from 'next/image'
import RoundedImage from '../ui/RoundedImage'
import Link from 'next/link'

const RecentVisitors = ({className}:{className?:string}) => {
  const visitors = [
  {
    avatar: "/images/avatar.jpg",
    name: "Dadang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Dadang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Dadang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Dadang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Dadang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  {
    avatar: "/images/avatar.jpg",
    name: "Dadang Sriwati",
    visitors: 10,
    date: "12 June, 2024"
  },
  ]
  return (
    <div className={`bg-white rounded-lg h-fit px-4 py-4 ${className}`}>
      <div className='mb-[6px]'>
        <span className='font-semibold '>Recent Visitors</span>
      </div>

      <table className='w-full border-spacing-2'>
        <thead>
          <tr className='text-xs text-slate-600'>
            <th className='w-1/2 text-start font-medium'>Nama</th>
            <th className='font-medium'>Total</th>
            <th className='font-medium'>Tanggal</th>
          </tr>
        </thead>
        <tbody className='text-sm'>
          {visitors.map((item, index) => (
            <tr>
              <td className='flex items-center gap-2 td-custom'>
                <RoundedImage src={item.avatar} alt={item.name} className='!min-w-[38px] !w-[38px]' />
                <span className='line-clamp-1'>{item.name}</span>
              </td>
              <td className='text-center td-custom'>{item.visitors}</td>
              <td className='text-center td-custom'>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  )
}

const VisitorItem = () => {

}

export default RecentVisitors
