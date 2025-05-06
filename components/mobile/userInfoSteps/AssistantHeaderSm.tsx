import Image from 'next/image'
import React from 'react'

const AssistantHeaderSm = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <>
      <div className='flex flex-col text-sm space-y-5 text-center'>
        <div className='flex items-center space-x-5'>
          <Image src={'/mobile/user_male.png'} alt='' height={45} width={45} />
          <Image
            src={'/mobile/user_female.png'}
            alt=''
            height={45}
            width={45}
          />
        </div>

        <div className=''>
          {title.split('.').map((str) => (
            <span key={str}>
              <strong>{str}</strong> <br />
            </span>
          ))}
        </div>

        <p className=''>{description}</p>
      </div>

      {/* <div className='space-y-5'>
        <div className='flex items-center space-x-5'>
          <Image src={'/mobile/user_male.png'} alt='' height={80} width={80} />
          <Image
            src={'/mobile/user_female.png'}
            alt=''
            height={80}
            width={80}
          />
        </div>

        <div className='text-sm'>
          <p><strong>{intro}</strong> <br /> {about}</p>
          <br />
          <p>{description}</p>
        </div>
      </div> */}
    </>
  )
}

export default AssistantHeaderSm
