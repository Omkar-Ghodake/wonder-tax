import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const SelectOption = ({
  label,
  selected,
  onClick,
}: {
  label: string
  selected?: boolean
  onClick: () => void
}) => {
  return (
    <div
      className={`border w-full flex justify-between items-center px-4 h-14 rounded-sm text-sm ${
        selected
          ? 'border-[#4DE0A8] bg-[#F3F7FF]'
          : 'border-[#696969] bg-[#F3F3F3]'
      } duration-150`}
      onClick={onClick}
    >
      <span className='w-11/12'>{label}</span>
      {selected && <FaCheckCircle className='text-2xl w-1/12 text-[#53BB5F]' />}
    </div>
  )
}

export default SelectOption
