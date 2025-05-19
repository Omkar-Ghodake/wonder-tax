'use client'

import { FormEvent, FormEventHandler, ReactNode, useRef } from 'react'

const Form = ({
  children,
  onSubmit,
  submitButton = true,
  submitButtonText = 'Submit',
  registrationSuccessful,
}: {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  submitButton?: boolean
  submitButtonText?: string
  registrationSuccessful?: boolean
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
      className='flex flex-col space-y-5'
    >
      {children}
      {submitButton && <button type='submit'>Submit</button>}
    </form>
  )
}

export default Form
