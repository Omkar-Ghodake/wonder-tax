'use client'

import React, { createElement, ReactElement, useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { MdOutlineHomeRepairService } from 'react-icons/md'

const INCOME_SRC_OPTIONS: { title: string; icon: ReactElement }[] = [
  {
    title: 'Salary or Pension income',
    icon: createElement(MdOutlineHomeRepairService),
  },
  {
    title: 'Business or professional income',
    icon: createElement(MdOutlineHomeRepairService),
  },
  {
    title: 'Income from house property (Rent / Housing loan)',
    icon: createElement(MdOutlineHomeRepairService),
  },
  {
    title: 'Income from capital gain (Stocks, FnO)',
    icon: createElement(MdOutlineHomeRepairService),
  },
  {
    title: 'Income from other sources (Bank interest / Dividend)',
    icon: createElement(MdOutlineHomeRepairService),
  },
  { title: 'Foreign Income', icon: createElement(MdOutlineHomeRepairService) },
]

const UserIncomeResources = () => {
  const [selections, setSelections] = useState<number[]>([])

  const handleItemClick = (idx: number) => {
    if (selections.includes(idx)) {
      setSelections(selections.filter((item) => item !== idx))
    } else {
      setSelections([...selections, idx])
    }
  }

  return (
    <div className='w-full min-h-[85vh] overflow-x-hidden flex flex-col items-center py-10 space-y-5 duration-150'>
      <div className='space-y-2 duration-150'>
        <h2 className='text-2xl font-semibold text-center'>
          Let's Find Your Perfect Tax Plan
        </h2>
        <p className='text-lg text-center'>
          Tell us about your income sources and we'll recommend the best plan
          for you
        </p>
      </div>

      <div className='w-[60%] space-y-5 shadow-lg p-5 border border-gray-500/10 rounded-lg duration-150'>
        {/* <h3 className='text-xl font-semibold'>Select Your Income Sources</h3> */}

        <div className='grid grid-cols-3 grid-rows-2 gap-5 duration-150'>
          {INCOME_SRC_OPTIONS.map((item, idx) => (
            <div
              key={item.title}
              className={`border-2 min-h-[30vh] rounded-lg p-5 flex flex-col justify-evenly items-center space-x-3 cursor-pointer duration-150 ${
                selections.includes(idx)
                  ? 'border-secondary'
                  : 'border-gray-500/20 hover:border-secondary hover:shadow-lg'
              }`}
              onClick={() => handleItemClick(idx)}
            >
              <span className='font-semibold text-2xl bg-gray-500/10 p-2 rounded-lg duration-150'>
                {selections.includes(idx) ? (
                  <FaCircleCheck className='text-secondary' />
                ) : (
                  item.icon
                )}
              </span>

              <span className='text-center'>{item.title}</span>

              {selections.includes(0) && idx === 0 && (
                <div
                  className='w-full text-sm duration-150 mt-4 space-y-2'
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    e.stopPropagation()
                  }
                >
                  <div className='input-group form-16-type'>
                    <span className='font-semibold'>Form 16</span>

                    <div className='mt-1 space-y-1'>
                      <div className='radio-group flex items-center space-x-2'>
                        <input
                          type='radio'
                          name='form16Type'
                          value={'single'}
                        />

                        <label htmlFor=''>Single Form 16</label>
                      </div>

                      <div className='radio-group flex items-center space-x-2'>
                        <input
                          type='radio'
                          name='form16Type'
                          value={'multiple'}
                        />

                        <label htmlFor=''>Multiple Form 16</label>
                      </div>
                    </div>
                  </div>

                  <div className='input-group salary-range'>
                    <span className='font-semibold'>Salary Range</span>

                    <select className='block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none px-2 py-3'>
                      <option value=''>Select Range</option>
                      <option value='upto12'>Upto 12 Lacs</option>
                      <option value='upto20'>Upto 20 Lacs</option>
                      <option value='upto50'>Upto 50 Lacs</option>
                      <option value='above50'>Above 50 Lacs</option>
                    </select>
                  </div>
                </div>
              )}

              {selections.includes(2) && idx === 2 && (
                <div
                  className='w-full text-sm duration-150 mt-4 space-y-2'
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    e.stopPropagation()
                  }
                >
                  <div className='input-group form-16-type'>
                    <span className='font-semibold'>Property Type</span>

                    <div className='mt-1 space-y-1'>
                      <div className='radio-group flex items-center space-x-2'>
                        <input
                          type='radio'
                          name='propertyType'
                          value={'single'}
                        />

                        <label htmlFor='single'>Single Property</label>
                      </div>

                      <div className='radio-group flex items-center space-x-2'>
                        <input
                          type='radio'
                          name='propertyType'
                          value={'multiple'}
                        />

                        <label htmlFor=''>Multiple Properties</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selections.includes(3) && idx === 3 && (
                <div
                  className='w-full text-sm duration-150 mt-4 space-y-2'
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    e.stopPropagation()
                  }
                >
                  <span className='font-semibold'>Capital Gain Type</span>

                  <div className='mt-1'>
                    {[
                      {
                        title: 'Stocks / Mutual Funds',
                        name: 'capitalGainType',
                        value: 'stocks_mutualFunds',
                      },
                      {
                        title: 'Intraday / F&O Transactions',
                        name: 'capitalGainType',
                        value: 'intraday_FOTxn',
                      },
                      {
                        title: 'House Property Sale',
                        name: 'capitalGainType',
                        value: 'housePropertySale',
                      },
                      {
                        title: 'ESOP / RSU / Foreign Stocks',
                        name: 'capitalGainType',
                        value: 'esop_rsu_foreignStocks',
                      },
                    ].map((item) => (
                      <div
                        className='space-x-2 space-y-1 flex items-center'
                        key={item.value}
                      >
                        <input
                          type='checkbox'
                          name={item.name}
                          value={item.value}
                          id=''
                        />
                        <label htmlFor={item.name}>{item.title}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* {selections.includes(3) && idx === 3 && (
                <div
                  className='w-full text-sm duration-150 mt-4 space-y-2'
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    e.stopPropagation()
                  }
                >
                  <span className='font-semibold'>Capital Gain Type</span>
                </div>
              )} */}
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <button className='bg-secondary text-white px-4 py-2 font-semibold rounded-md'>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserIncomeResources
