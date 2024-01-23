import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import './css/skeleton.css'
import { ChakraProvider } from '@/components/provider/ChakraProvider'
import AuthProvider from '@/components/provider/AuthProvider'

const poppins = Poppins({ subsets:["latin-ext"],weight:["400","500", "600", "700"],display:"swap" })

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
      <body >
        <ChakraProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
