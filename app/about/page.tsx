import InfoGraphics from '@/components/about/InfoGraphics'
import GetStarted from '@/components/home/GetStarted'
import HowItWorks from '@/components/home/HowItWorks'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'

const About = () => {
  return (
    <div>
      <div>
        <InfoGraphics />
      </div>

      <div className='bg-[#F2FFF5] py-20'>
        <h1 className='text-[48px] leading-[50px] font-bold text-center h-[10vh] flex items-center justify-center'>
          Why Choose Us?
        </h1>
        <WhyChooseUs />
      </div>

      <div className='py-20'>
        <h1 className='text-[48px] leading-[50px] font-bold text-center h-[10vh] flex items-center justify-center'>
          How it Works?
        </h1>

        <HowItWorks />
      </div>

      {/* <div className=''>
        <h1 className='text-[48px] leading-[50px] font-bold text-center h-[10vh] flex items-center justify-center'>
          Oue Customers Love Us!
        </h1>

        <Stats />
      </div> */}

      <div className=''>
        <h1 className='text-[48px] leading-[50px] font-bold text-center h-[10vh] flex items-center justify-center'>
          Testimonials
        </h1>
        <Testimonials />
      </div>

      <div>
        <GetStarted />
      </div>
    </div>
  )
}

export default About
