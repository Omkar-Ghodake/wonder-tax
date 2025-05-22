import GetStarted from '@/components/home/GetStarted'
import HowItWorks from '@/components/home/HowItWorks'
import KeyServices from '@/components/home/KeyServices'
import Landing from '@/components/home/Landing'
import Testimonials from '@/components/home/Testimonials'
import WhyChooseUs from '@/components/home/WhyChooseUs'

export default function Home() {
  return (
    <>
      <div className='hidden md:block'>
        <div>
          <Landing />
        </div>

        <div className='space-y-10 xl:space-y-0'>
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

        {/* <div>
          <KeyServices />
        </div> */}

        {/* <div>
          <h1 className='text-[28px] leading-[40px] font-medium text-center h-[20vh] flex items-end justify-center'>
            Solid background
          </h1>

          <Stats />
        </div> */}

        <div>
          <h1 className='text-[28px] leading-[40px] font-medium text-center h-[20vh] flex items-end justify-center mb-10'>
            Our customers love us
          </h1>

          <Testimonials />
        </div>

        <div>
          <GetStarted />
        </div>
      </div>
    </>
  )
}
