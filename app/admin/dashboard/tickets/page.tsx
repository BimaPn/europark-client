import TicketData from "@/components/dashboard/TicketData"
import { PageTitle } from "@/layouts/DashboardLayout"

const page = () => {
  return (
  <>
    <PageTitle title="Tiket" />
    <section className="bg-white rounded-lg px-4 py-4">
      <TicketData />  
    </section>
  </>

  )
}


export default page
