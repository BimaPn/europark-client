import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import './css/skeleton.css'
import { ChakraProvider } from '@/components/provider/ChakraProvider'
import AuthProvider from '@/components/provider/AuthProvider'
import ProgressBarProvider from '@/components/provider/ProgressBarProvider'

const poppins = Poppins({ subsets:["latin-ext"],weight:["400","500", "600", "700"]})

export const metadata: Metadata = {
  title: 'welcome',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ProgressBarProvider>
          <ChakraProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ChakraProvider>
        </ProgressBarProvider>
      </body>
    </html>
  )
}
