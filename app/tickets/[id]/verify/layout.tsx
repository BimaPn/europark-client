import type { Metadata } from 'next'
import AdminNavbar from '@/components/AdminNavbar'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Verify Ticket',
  description: 'Page for verify Ticket',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  if(!session?.user) {
    redirect("/")
  }else {
    return (
      <section className="boxWidth flex flex-col h-screen min-h-screen relative">
        <AdminNavbar className="sticky top-0 right-0 left-0 z-[1000]"  />
        <main className="w-[584px] flex flex-col px-4 mx-auto h-full">
          {children}
        </main>
      </section>
    )
  }
}
