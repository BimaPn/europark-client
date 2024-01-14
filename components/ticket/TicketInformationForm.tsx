import DatePicker from '../DatePicker'
import PickSchedule from './PickSchedule'
import PickTicketQuantity from './PickTicketQuantity'

const TicketInformationForm = () => {
  return (
    <section>
      <div className='flex flex-col mb-6'>
        <span className='font-medium -mb-[6px]'>1. Pilih Tanggal Kunjungan</span>
        <DatePicker />
      </div>
      <PickSchedule className='mb-10' />
      <PickTicketQuantity className='mb-8'/> 
    </section>
  )
}

export default TicketInformationForm
