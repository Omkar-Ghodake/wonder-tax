'use client'

import InfoGraphics from '@/components/mobile/home/InfoGraphics'
import Plan from '@/components/mobile/Plan'
import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import { useParams } from 'next/navigation'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const REVIEWS: {
  rating: number
  review: string
  author: string
  location: string
}[] = [
  {
    rating: 5,
    review:
      'Incredible price, super fast service .Got my taxes filed in few minutes.',
    author: 'Priyank Kumar',
    location: 'Mumbai',
  },
  {
    rating: 5,
    review:
      'These guys provide help and assistance which was missing all these years. Kudos',
    author: 'Priyank Kumari',
    location: 'Delhi',
  },
]

const PLANS: {
  type: string
  subText: string
  price: string
  discount: string
  description: string[]
  id: string
  tag?: string
}[] = [
  {
    type: 'Basic',
    subText: 'Easy form-16 upload, covers all deductions, TDS & e-file online.',
    price: '999',
    discount: '2499',
    description: [
      'Expert assistance with your documents',
      'Solving any doubts',
      'Completely online zero paperwork',
    ],
    id: '/01',
    tag: 'Recommended',
  },
  {
    type: 'Classic',
    subText: 'Easy form-16 upload, covers all deductions, TDS & e-file online.',
    price: '2499',
    discount: '5000',
    description: [
      'Expert assistance with your documents',
      'Solving any doubts',
      'Completely online zero paperwork',
    ],
    id: '/02',
  },
  {
    type: 'Prime',
    subText: 'Easy form-16 upload, covers all deductions, TDS & e-file online.',
    price: '4499',
    discount: '7499',
    description: [
      'Expert assistance with your documents',
      'Solving any doubts',
      'Completely online zero paperwork',
    ],
    id: '/03',
  },
]

const SubService = () => {
  const params = useParams()

  return (
    <div className='p-5'>
      <div className='space-y-5'>
        <AssistantHeaderSm
          title='Salary Returns. The easiest way possible'
          description='Instant process with expert support'
        />

        {/* {params['sub-service']} */}

        <InfoGraphics />
      </div>

      <div className='space-y-5 mt-5 bg-[#F6F7FC] py-4'>
        <p className='text-sm text-center text-[#5C5D67]'>
          Thousands of Happy Customers
        </p>

        <div className='grid grid-cols-2 gap-5'>
          {REVIEWS.map((item) => (
            <div
              key={item.review}
              className='flex flex-col justify-between space-y-1'
            >
              <div className='space-y-2'>
                <div className='stars text-xs flex items-center space-x-1'>
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={`${idx < item.rating && 'text-amber-500'}`}
                      />
                    ))}
                </div>

                <p>{item.review}</p>
              </div>

              <div className='text-sm font-semibold flex flex-col'>
                <span>{item.author},</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='space-y-5 mt-5 py-4'>
        <p className='text-sm text-center text-[#5C5D67]'>
          Choose a plan to begin with
        </p>

        <div className='px-5 space-y-5'>
          {PLANS.map((plan) => (
            <Plan key={plan.id} planInfo={plan} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubService
