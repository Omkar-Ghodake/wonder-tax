import React from 'react'

const Computations = ({
  title,
  data,
  footer,
}: {
  title: string
  data: { label: string; value: number }[]
  footer: { label: string; value: number }
}) => {
  const isNegative = (num: number) => num < 0

  return (
    <div className='text-sm'>
      <div className='title font-bold bg-[#DBEBFF] border border-[#D5D5D5] p-2'>
        {title}
      </div>

      <div className='body'>
        {data.map((obj) => (
          <div
            key={obj.label}
            className='border border-[#D5D5D5] flex justify-between items-center p-2'
          >
            <span className='w-9/12'>{obj.label}</span>
            <span
              className={`font-semibold w-3/12 text-end ${
                isNegative(obj.value) && 'text-[#EB2B48]'
              }`}
            >
              &#8377; {Math.abs(obj.value).toLocaleString('en-IN')}
            </span>
          </div>
        ))}
      </div>

      <div className='footer bg-[#E9ECF0] border border-[#D5D5D5]'>
        <div className='border border-[#D5D5D5] flex justify-between items-center p-2'>
          <span className=''>{footer.label}</span>
          <span className='font-semibold'>
            &#8377; {footer.value.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Computations
