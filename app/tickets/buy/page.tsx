import TicketPurchaseProvider from "@/components/provider/TicketPurchaseProvider"
import ButtonNavigation from "@/components/ticket/ButtonNavigation"
import StartPage from "@/components/ticket/StartPage"

const page = () => {
  return (
    <TicketPurchaseProvider>
      <section className="boxWidth relative">
        <nav className='w-full px-8 py-[10px] sticky top-0 right-0 left-0 bg-white z-[1000]'>
          <span className='text-2xl font-semibold'>Europark</span>
        </nav>
        <main className="w-[584px] px-4 mt-2 mx-auto h-full">
          <StartPage />
        </main>
        <footer className="sticky bottom-0 right-0 left-0">
          <ButtonNavigation />
        </footer>
      </section>
    </TicketPurchaseProvider>
  )
}

export default page
