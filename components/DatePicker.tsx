"use client"
import { addMonths } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css'
import '../app/css/custom-daypicker.css'
import { ticketPurchaseContext } from './provider/TicketPurchaseProvider';

const DatePicker = ({className}:{className?:string}) => {
  const [selected, setSelected] = useState<Date>();
  const { ticketInformationData,
  setTicketInformationData } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const disabledDates = [
    {
      after: addMonths(new Date(), 1)
    },
    {
      before: new Date()
    }
  ]

  useEffect(() => {
    if(ticketInformationData.visit_date) {
      setSelected(ticketInformationData.visit_date)
    }
  },[])
  useEffect(()=>{
      setTicketInformationData((prev: TicketInformationForm) => {
        return {...prev, visit_date: selected}
      })
  },[selected])

  const classNames: ClassNames = {
    ...styles,
       head_cell  : "w-[100px]",
       table : "w-full",
  };
  return (
    <div className={`${className}`}>
      <span className='font-medium items-start'>1. Pilih Tanggal Kunjungan</span>
      <div className='flexCenter -mt-2'>
        <DayPicker
        mode='single'
        classNames={classNames}
        disabled={disabledDates}
        selected={selected}
        onSelect={setSelected}
        />
      </div>

    </div>
  )
}

export default DatePicker
