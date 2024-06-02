"use client"
import ApiClient from '@/app/api/axios/ApiClient';
import {  
  Chart as ChartJS,
  CategoryScale,  
  LinearScale,
  BarElement, 
  Tooltip,
} from 'chart.js';
import type { ChartData } from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Skeleton from '../skeleton/Skeleton';
import TicketReportModal from '../TicketReportModal';
ChartJS.register(   CategoryScale,   LinearScale,   BarElement,   Tooltip);

export const options ={
    aspectRatio: 2.75/1
};

const TicketAnalytic = ({className}:{className?:string}) => {
  const [data, setData] = useState<ChartData<"bar">>()
  useEffect(() => {

    ApiClient().get(`/api/statistics/last-half-year-tickets/get`)
    .then((res) => {
      const result = res.data.result
      setData({
        "labels": result.map((data:any) => data.month),
        datasets: [{
          label: 'Ticket selling',
          data: result.map((data:any) => data.value),
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        }]
      })
    })
  },[])

  return (
    <div className={`bg-white rounded-lg px-4 pt-[68px] pb-4 relative ${className}`}>
      <div className='w-full px-4 pt-4 absolute top-0 left-0 flexBetween'>
        <span className='font-semibold text-slate-600 text-sm ss:text-base'>Tickets Selling</span>
        <TicketReportModal />
      </div>
      {!data && <Skeleton className='w-full aspect-[2.75/1] !rounded-xl' />}
      {data && (
        <Bar
        options={options}
        data={data} className='w-full aspect-video'  /> 
      )}

    </div>
  )
}

export default TicketAnalytic
