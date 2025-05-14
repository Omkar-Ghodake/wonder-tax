import MobileNavbar from '@/components/mobile/navbar/MobileNavbar'
import ToastSm from '@/components/mobile/notifications/ToastSm'
import MobileHomeStepsProvider from '@/context/MobileHomeStepsProvider'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MobileHomeStepsProvider>
        {/* <ToastSm /> */}

        <div className='h-[10vh] md:h-[15vh] w-full sticky top-0 left-0 z-40'>
          <MobileNavbar />
        </div>

        {children}
      </MobileHomeStepsProvider>
    </>
  )
}

export default Layout
