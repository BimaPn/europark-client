import DashboardLayout from '@/layouts/DashboardLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </>
  )
}

