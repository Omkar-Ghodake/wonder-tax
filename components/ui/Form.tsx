'use client'

import { FormEvent, FormEventHandler, ReactNode, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Form = ({
  children,
  onSubmit,
  submitButton = false,
  submitButtonText = 'Submit',
  registrationSuccessful,
  className,
}: {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  submitButton?: boolean
  submitButtonText?: string
  registrationSuccessful?: boolean
  className?: string
}) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    registrationSuccessful && formRef.current && formRef.current.reset()
    onSubmit(event)
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      ref={formRef}
      className={twMerge('flex flex-col space-y-5', className)}
    >
      {children}
      {submitButton && <button type='submit'>Submit</button>}
    </form>
  )
}

export default Form
