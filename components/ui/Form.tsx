'use client'

import { FormEvent, FormEventHandler, ReactNode, useRef } from 'react'

const Form = ({
  children,
  onSubmit,
  submitButton = true,
  submitButtonText = 'Submit',
}: {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  submitButton?: boolean
  submitButtonText?: string
}) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    formRef.current && formRef.current.reset()
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
