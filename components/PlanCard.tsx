'use client'

import { PlanType } from '@/types/dataTypes'

import React from 'react'

const PlanCard = ({ plan, tag }: { plan: PlanType; tag: string }) => {
  return (
    <div>
      <div className='tag'>Recommended</div>

      <div>
        <h2 className='title'>{plan.title}</h2>

        <div className='price'>
          <span className='selling-price'>{plan.sellingPrice}</span>

          {plan.originalPrice && (
            <span className='original-price'>{plan.originalPrice}</span>
          )}
        </div>

        <div className='ideal-for'>Lorem ipsum dolor sit amet.</div>

        <div className='features'>
          {
            // plan.features.map((item))
          }
        </div>
      </div>

      <div className='buy-now'></div>
    </div>
  )
}

export default PlanCard
