"use client"
import {  
  Chart as ChartJS,
  CategoryScale, 
  LinearScale,
  BarElement, 
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(   CategoryScale,   LinearScale,   BarElement,   Tooltip);

export const options ={
  responsive: true,
  maintainAspectRatio:false
  };
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','June','August'];
const values = [100,73,32,86,130,120,140,102,12]
export const data = {
  labels,
  datasets: [{
    label: 'Ticket selling',
    data: values,
    backgroundColor: 'rgba(59, 130, 246, 1)'
}]
}

const TicketAnalytic = ({className}:{className?:string}) => {

  return (
    <div className={`bg-white rounded-lg px-4 pt-[50px] pb-4 relative ${className}`}>
      <div className='absolute top-4 left-4 '>
        <span className='font-semibold'>Tickets Selling</span>
      </div>
      <Bar options={options} data={data} className='w-full aspect-video'  /> 
    </div>
  )
}

export default TicketAnalytic
