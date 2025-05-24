import PlanCard from '@/components/PlanCard'
import { PlanType } from '@/types/dataTypes'

const PLANS_ARR: PlanType[] = [
  {
    title: 'Notice Basic',
    features: [
      'Online Consultation ',
      '30 Minutes Session',
      'Consultation Report ',
      'Secure Data Encryption ',
    ],
    sellingPrice: 2000,
    originalPrice: 2000,
  },
  {
    title: 'F&O Audit Case',
    features: [
      'CA Assisted Filing',
      'F&O Trading Audit Business Return',
      'Audit Report - Form 3CB/3CD',
      'Balance Sheet',
      'Profit & Loss Account',
      'ITR Acknowledgement - Pdf Copy',
      'Refund Follow-up',
      'Secure Data Encryption',
    ],
    sellingPrice: 25000,
    originalPrice: 25000,
  },
  {
    title: 'GST TAN Combo',
    features: [
      'CA Consultation ',
      'TAN Registration ',
      'GST Registration',
      'Document Validation ',
      'Application Filing ',
      'Follow-up with department',
      'TAN / GST Certificate and Number',
      'Secure Data Encryption ',
    ],
    sellingPrice: 5500,
    originalPrice: 5500,
  },
]

const RecommendedPlan = () => {
  return (
    <div className='py-10'>
      <div>
        <h1 className='text-center font-semibold text-2xl'>
          Recommended Plans for You
        </h1>

        <p className='text-center font-medium text-lg'>
          Based on your profile, we've selected the best plans for you
        </p>
      </div>

      <div className='px-20 py-10 grid grid-cols-3'>
        {PLANS_ARR.map((item) => (
          <PlanCard key={item.title} plan={item} tag='' />
        ))}
      </div>
    </div>
  )
}

export default RecommendedPlan
