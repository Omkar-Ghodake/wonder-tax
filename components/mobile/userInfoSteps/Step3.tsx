import { redirect } from 'next/navigation'
import { HTMLInputTypeAttribute } from 'react'
import AssistantHeaderSm from './AssistantHeaderSm'
import StepInput from './StepInput'

const INPUTS: {
  title: string
  description: string
  type: HTMLInputTypeAttribute
  name: string
}[] = [
  {
    title: 'What is your annual income from Salary?',
    description: 'Total amount you get in your bank account',
    type: 'text',
    name: 'annual_income',
  },
  {
    title: 'What are your gross Flexi Benefits?',
    description:
      'This is show in your salary slip under headings reimbursements, fuel, books etc',
    type: 'text',
    name: 'gross_flexi_benefits',
  },
  {
    title: 'What is your Income from Bank Interest?',
    description: 'This is interest from savings, deposits interest',
    type: 'text',
    name: 'bank_interest_income',
  },
  {
    title: 'What are you Total Exemptions?',
    description:
      'This is shown in you salary slip under headings HRA, LTA, Leave encashment',
    type: 'text',
    name: '',
  },
]

const Step3 = () => {
  const handleContinue = () => {
    // if (selectedIncomeSrc === null) return

    // setUserData({ ...userData, age: INCOME_SRC_OPTIONS[selectedIncomeSrc] })

    redirect('/mobile/userInfo/step12')
  }

  return (
    <div className='flex flex-col space-y-5'>
      <AssistantHeaderSm
        title="Let's get more info on your salary"
        description='Select all the income sources you have. This will help us decide which ITR will be most suitable for you.'
      />

      <div className='space-y-8'>
        {INPUTS.map((item) => (
          <StepInput
            key={item.name}
            name={item.name}
            type={item.type}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <button
        className='font-semibold text-sm bg-[#53BB5F] px-6 py-3 text-white rounded-md'
        onClick={handleContinue}
      >
        Continue
      </button>

      <span className='text-sm font-semibold'>
        You can also create an account to{' '}
        <span className='text-[#53BB5F]'>save progress</span>
      </span>
    </div>
  )
}

export default Step3
