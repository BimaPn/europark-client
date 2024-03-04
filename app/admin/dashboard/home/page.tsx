import Stats from '@/components/dashboard/Stats'
import TicketAnalytic from '@/components/dashboard/TicketAnalytic'
import TicketCategoryStatistic from '@/components/dashboard/TicketCategoryStatistic'
import { dateToTanggal } from '@/helper/convert'
import { PageTitle } from '@/layouts/DashboardLayout'

const Page = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
      <section>
        <div className='mb-3'>
          <span className='font-medium ss:text-base text-sm'>{dateToTanggal(new Date(),true)}</span>
        </div>
        <Stats /> 
        <div className='mt-3 ss:mt-4'>
          <TicketAnalytic className="w-full" />
        </div>
      </section>  
    </>

  )
}

export default Page
