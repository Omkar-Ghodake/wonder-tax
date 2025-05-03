import React from 'react'

const StepHeader = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className='flex flex-col items-center text-sm space-y-5 text-center'>
      <div className=''>
        {title.split('.').map((str) => (
          <span key={str}>
            <strong>{str}</strong> <br />
          </span>
        ))}
      </div>

      <p className=''>{description}</p>
    </div>
  )
}

export default StepHeader
