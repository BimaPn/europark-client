"use client"
import ApiClient from '@/app/api/axios/ApiClient';
import {  
  Chart as ChartJS,
  CategoryScale, 
  LinearScale,
  BarElement, 
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Skeleton from '../skeleton/Skeleton';
ChartJS.register(   CategoryScale,   LinearScale,   BarElement,   Tooltip);

export const options ={
  responsive: true,
  maintainAspectRatio:false
  };

const TicketAnalytic = ({className}:{className?:string}) => {
  const [data, setData] = useState()
  useEffect(() => {

    ApiClient().get(`/api/statistics/last-half-year-tickets/get`)
    .then((res) => {
      const result = res.data.result
      setData({
        labels: result.map((data:any) => data.month),
        datasets: [{
          label: 'Ticket selling',
          data: result.map((data:any) => data.value),
          backgroundColor: 'rgba(59, 130, 246, 1)'
        }]
      })
    })
  },[])

  return (
    <div className={`bg-white rounded-lg px-4 pt-[50px] pb-4 relative ${className}`}>
      <div className='absolute top-4 left-4 '>
        <span className='font-semibold'>Tickets Selling</span>
      </div>
      {!data && <Skeleton className='w-full aspect-video !rounded-xl' />}
      {data && (
        <Bar options={options} data={data} className='w-full aspect-video'  /> 
      )}

    </div>
  )
}

export default TicketAnalytic
