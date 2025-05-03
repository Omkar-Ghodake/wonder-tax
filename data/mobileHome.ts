import Step1 from '@/components/mobile/userInfoSteps/Step1'
import Step12 from '@/components/mobile/userInfoSteps/Step12'
import Step2 from '@/components/mobile/userInfoSteps/Step2'
import Step3 from '@/components/mobile/userInfoSteps/Step3'
import { createElement, ReactElement } from 'react'

export const USER_INFO_STEPS: { [key: string]: ReactElement } = {
  step1: createElement(Step1),
  step2: createElement(Step2),
  step3: createElement(Step3),
  step12: createElement(Step12),
}
