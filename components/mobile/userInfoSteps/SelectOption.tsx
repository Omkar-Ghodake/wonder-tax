'use client'

import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const SelectOption = ({
  options,
  multiple = false,
  setOptions,
}: {
  options: string[]
  multiple?: boolean
  setOptions: React.Dispatch<React.SetStateAction<any[]>>
}) => {
  const [selected, setSelected] = useState<number[]>([])

  const handleClick = (idx: number) => {
    if (!multiple) {
      setSelected([idx])
      setOptions([idx])
    } else {
      if (selected.includes(idx)) {
        const filteredArr = selected.filter((item) => item !== idx)
        setSelected(filteredArr)
        setOptions(filteredArr)
      } else {
        setSelected([...selected, idx])
        setOptions([...selected, idx])
      }
    }
  }

  return (
    <div className='w-full space-y-4'>
      {options.map((item, idx) => (
        <div
          key={item}
          className={`border w-full flex justify-between items-center px-4 h-14 rounded-sm text-sm ${
            selected.includes(idx)
              ? 'border-[#4DE0A8] bg-[#F3F7FF]'
              : 'border-[#696969] bg-[#F3F3F3]'
          } duration-150`}
          onClick={() => handleClick(idx)}
        >
          <span className='w-11/12'>{item}</span>
          {selected.includes(idx) && (
            <FaCheckCircle className='text-2xl w-1/12 text-[#53BB5F]' />
          )}
        </div>
      ))}
    </div>
  )
}

export default SelectOption
