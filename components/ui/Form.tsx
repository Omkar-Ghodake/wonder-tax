import { FormEventHandler, ReactNode } from 'react'

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
  return (
    <form onSubmit={onSubmit} className='flex flex-col space-y-5'>
      {children}
      {submitButton && <button type='submit'>Submit</button>}
    </form>
  )
}

export default Form
