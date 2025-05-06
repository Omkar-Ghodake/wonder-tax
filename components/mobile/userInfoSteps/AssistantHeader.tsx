import Image from 'next/image'

const AssistantHeader = ({
  intro,
  about,
  description,
}: {
  intro: string
  about: string
  description: string
}) => {
  return (
    <div className='space-y-5'>
      <div className='flex items-center space-x-5'>
        <Image src={'/mobile/user_male.png'} alt='' height={80} width={80} />
        <Image src={'/mobile/user_female.png'} alt='' height={80} width={80} />
      </div>

      <div className='text-sm'>
        <p>
          <strong>{intro}</strong> <br /> {about}
        </p>
        <br />
        <p>{description}</p>
      </div>
    </div>
  )
}

export default AssistantHeader
