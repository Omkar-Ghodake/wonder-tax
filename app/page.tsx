import GetStarted from '@/components/home/GetStarted'
import HowItWorks from '@/components/home/HowItWorks'
import KeyServices from '@/components/home/KeyServices'
import Landing from '@/components/home/Landing'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='hidden md:block'>
        <div>
          <Landing />
        </div>

        <div>
          <h1 className='text-[28px] leading-[40px] font-medium text-center h-[20vh] flex items-end justify-center'>
            Why Choose Wondertax
          </h1>

          <WhyChooseUs />
        </div>

        <div>
          <h1 className='text-[28px] leading-[40px] font-medium text-center h-[20vh] flex items-end justify-center'>
            How it Works?
          </h1>

          <HowItWorks />
        </div>

        <div>
          <KeyServices />
        </div>

        <div>
          <h1 className='text-[28px] leading-[40px] font-medium text-center h-[20vh] flex items-end justify-center'>
            Solid background
          </h1>

          <Stats />
        </div>

        <div>
          <Testimonials />
        </div>

        <div>
          <GetStarted />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div>
          <Image src={'/mobile/landing.png'} alt='' width={250} height={250} />
        </div>

        <div className='text-center'>
          <h2 className='font-bold text-[18px] leading-[130%]'>
            Income tax returns <br /> the easiest way possible
          </h2>

          <p className='text-[12px] text-[#5C5D67]'>
            Instant process with expert support
          </p>
        </div>

        <div></div>

        <div></div>
      </div>
    </>
  )
}
