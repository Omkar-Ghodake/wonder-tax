import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/layouts/navbar/Navbar'
import Footer from '@/layouts/footer/Footer'
import ScreenProvider from '@/context/ScreenProvider'
import ScreenRedirect from '@/components/ScreenRedirect'
import MobileNavbar from '@/components/mobile/navbar/MobileNavbar'
import SessionProvider from '@/context/SessionProvider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const raleway = Raleway({
  variable: '--font-raleway',
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
      <body className={`bg-background ${inter.className} ${inter.variable}`}>
        <SessionProvider>
          <ScreenProvider>
            <div className='md:h-[15vh] w-full sticky top-0 left-0 z-40'>
              <Navbar />
            </div>

            <div>{children}</div>

            <ScreenRedirect />

            <div>
              <Footer />
            </div>
          </ScreenProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
