import TicketPurchaseProvider from "@/components/provider/TicketPurchaseProvider"
import ButtonNavigation from "@/components/ticket/ButtonNavigation"
import StartPage from "@/components/ticket/StartPage"

const page = () => {
  return (
    <TicketPurchaseProvider>
      <nav className='boxWidth px-4 py-2'>
        <span className='text-2xl font-semibold'>Europark</span>
      </nav>
      <main>
        <StartPage />
      </main>
      <footer>
        <ButtonNavigation />
      </footer>
    </TicketPurchaseProvider>
  )
}

export default page
