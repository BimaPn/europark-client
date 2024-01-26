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
          <span className='font-medium'>{dateToTanggal(new Date(),true)}</span>
        </div>
        <Stats /> 
        <div className='flex gap-4 mt-4'>
          <TicketAnalytic className="basis-[67%]" />
          <TicketCategoryStatistic className='basis-[33%]' />
        </div>
      </section>  
    </>

  )
}

export default Page
