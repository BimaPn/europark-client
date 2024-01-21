import TicketData from "@/components/dashboard/TicketData"
import { PageTitle } from "@/layouts/DashboardLayout"

const page = () => {
  return (
  <>
    <PageTitle title="Tiket" />
    <section className="bg-white min-h-[89.5vh] rounded-lg px-4 py-4 overflow-y-scroll relative">
      <TicketData />  
    </section>
  </>

  )
}


export default page
