import ChosenPlan from '../home/ChosenPlan'
import Computations from '../home/Computations'
import AssistantHeaderSm from './AssistantHeaderSm'

const COMPUTATION_DATA: {
  title: string
  data: { label: string; value: number }[]
  footer: {
    label: string
    value: number
  }
}[] = [
  {
    title: 'Section 1 - Income Details',
    data: [
      {
        label: 'Gross Income from Salary',
        value: 96000,
      },
      {
        label: 'Income from Bank Interest',
        value: 9000,
      },
      {
        label: 'Any other Income /Taxable Super Annuation',
        value: 10000,
      },
      {
        label: 'Less - Exemptions on Gross Income',
        value: -48000,
      },
      {
        label: 'Less - Standard Deduction',
        value: -50000,
      },
      {
        label: 'Less - Profession Tax',
        value: -2400,
      },
    ],
    footer: {
      label: 'Net Income [A]',
      value: 878600,
    },
  },
  {
    title: 'Section 2 - Dummy Table Details',
    data: [
      {
        label: 'Gross Income from Salary',
        value: 96000,
      },
      {
        label: 'Income from Bank Interest',
        value: 9000,
      },
      {
        label: 'Any other Income /Taxable Super Annuation',
        value: 10000,
      },
      {
        label: 'Less - Exemptions on Gross Income',
        value: -48000,
      },
      {
        label: 'Less - Standard Deduction',
        value: -50000,
      },
      {
        label: 'Less - Profession Tax',
        value: -2400,
      },
    ],
    footer: {
      label: 'Net Income [A]',
      value: 878600,
    },
  },
]

const Step12 = () => {
  return (
    <div className='flex flex-col space-y-5'>
      <AssistantHeaderSm
        title='Thanks for all the details 👋. Your computations are ready'
        description='We have made calculations for you and also chosen the best plan for your needs.'
      />

      <div className='space-y-5'>
        {COMPUTATION_DATA.map((item) => (
          <Computations
            key={item.title}
            title={item.title}
            data={item.data}
            footer={item.footer}
          />
        ))}
      </div>

      <div>
        <ChosenPlan />
      </div>
    </div>
  )
}

export default Step12
