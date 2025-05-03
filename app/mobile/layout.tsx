import MobileNavbar from '@/components/mobile/navbar/MobileNavbar'
import MobileHomeStepsProvider from '@/context/MobileHomeStepsProvider'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MobileHomeStepsProvider>
        <div className='h-[10vh] md:h-[15vh] w-full sticky top-0 left-0 z-40'>
          <MobileNavbar />
        </div>

        {children}
      </MobileHomeStepsProvider>
    </>
  )
}

export default Layout
