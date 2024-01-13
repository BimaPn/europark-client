"use client"

const PickSchedule = ({className}:{className?: string}) => {
  const schedules = [
  {
    id: 1,
    schedule: "09.00 AM - 12.00 PM"
  },
  {
    id: 2,
    schedule: "12.00 PM - 15.00 PM"
  },
  {
    id: 3,
    schedule: "18.00 PM - 21.00 PM"
  },
  ]
  return (
    <div className={`flex flex-col gap-[24px] ${className}`}>
      <span className='font-semibold'>2. Pilih Jadwal Kunjungan</span>
    <div className="flex items-center gap-3 text-sm">
     {schedules.map((item, index) => (
          <button 
          key={item.id}
          className='basis-1/3 bg-blue-500 opacity-70 py-2 px-2 text-center text-white rounded'>{item.schedule}</button>
     ))}
    </div>
    </div>
  )
}

export default PickSchedule
