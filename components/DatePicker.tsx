"use client"
import { addMonths } from 'date-fns';
import { useEffect, useState } from 'react';
import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css'
// import 'react-day-picker/dist/style.css';
import '../app/css/custom-daypicker.css'

const DatePicker = () => {
  const [selected, setSelected] = useState<Date>();
  const disabledDates = [
    {
      after: addMonths(new Date(), 1)
    },
    {
      before: new Date()
    }
  ]
  useEffect(()=>{
    console.log(selected)
    },[selected])

  const classNames: ClassNames = {
    ...styles,
       head_cell  : "w-[100px]",
       table : "w-full",
  };
  return (
    <div className='flexCenter'>
      <DayPicker
      mode='single'
      classNames={classNames}
      disabled={disabledDates}
      selected={selected}
      onSelect={setSelected}
      />
    </div>
  )
}

export default DatePicker
