import RecentVisitors from '@/components/dashboard/RecentVisitors'
import StatItem from '@/components/dashboard/StatItem'
import TicketAnalytic from '@/components/dashboard/TicketAnalytic'

const page = () => {
  return (
    <section>
      <div className="flexCenter gap-4">
        {[1,2,3,4].map(item => (
        <StatItem className="w-1/4"/>
        ))}
      </div>
      <div className='flex gap-4 mt-4'>
        <TicketAnalytic className="basis-[62%]" />
        <RecentVisitors className='basis-[38%]' />
      </div>
    </section>  
  )
}

export default page
