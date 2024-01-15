import DatePicker from '../DatePicker'
import PickSchedule from './PickSchedule'
import PickTicketQuantity from './PickTicketQuantity'


const TicketInformationForm = () => {
  return (
    <section>
      <DatePicker className='mb-4'/>
      <PickSchedule className='mb-10' />
      <PickTicketQuantity className='mb-7'/>
    </section>
  )
}

export default TicketInformationForm
