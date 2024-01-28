import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Koleksi Museum',
  description: 'Museum Collection',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='min-h-screen'>
      <nav className='boxWidth flexBetween p-[14px]'>
        <span className="text-2xl font-bold">
          EuroPark
        </span>
          <div className="flex items-center gap-5">
            <ul className="flexCenter gap-6 items-center font-semibold">
              <li className='hover:text-gray-600'>
                <Link href={`/`}>Beranda</Link>
              </li>
              <li className='hover:text-gray-600'>
                <Link href={`/collections`}>Koleksi</Link>
              </li>
              <li className='hover:text-gray-600'>
                <Link href={`/`}>Jadwal</Link>
              </li>
            </ul>
            <Link
            href={`/tickets/buy`}
            className="px-4 py-[6px] font-medium rounded-lg text-black bg-primary"
            >
            <span>Beli Tiket</span>
            </Link>
          </div>
      </nav>
      <main>
        {children}
      </main>
    </section>
  )
}