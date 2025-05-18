import React from 'react'
import Step1 from './Step1'
import Step2 from './Step2'

const ITRUserInfo = ({
  step,
  setStep,
}: {
  step: 0 | 1 | 2
  setStep: React.Dispatch<React.SetStateAction<0 | 1 | 2>>
}) => {
  return (
    <div>
      <div>
        {step === 0 && <Step1 handleContinue={() => setStep(1)} />}

        {step === 1 && <Step2 handleContinue={() => setStep(2)} />}
      </div>
    </div>
  )
}

export default ITRUserInfo
