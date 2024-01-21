import RecentVisitors from '@/components/dashboard/RecentVisitors'
import StatItem from '@/components/dashboard/StatItem'
import Stats from '@/components/dashboard/Stats'
import TicketAnalytic from '@/components/dashboard/TicketAnalytic'
import { PageTitle } from '@/layouts/DashboardLayout'

const page = () => {
  return (
    <>
      <PageTitle title="Dashboard" />
      <section>
        <Stats /> 
        <div className='flex gap-4 mt-4'>
          <TicketAnalytic className="basis-[62%]" />
          <RecentVisitors className='basis-[38%]' />
        </div>
      </section>  
    </>

  )
}

export default page
