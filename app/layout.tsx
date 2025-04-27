import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/layouts/navbar/Navbar'
import Footer from '@/layouts/footer/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Wonder Tax',
  description: 'Tax services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`bg-background`}>
        <div className='h-[15vh] w-full bg-white'>
          <Navbar />
        </div>

        <div>{children}</div>

        <div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
