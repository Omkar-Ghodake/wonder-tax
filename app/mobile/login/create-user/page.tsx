'use client'

import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import Form from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { FormEvent, HTMLInputTypeAttribute, useState } from 'react'

const FORM_INPUTS: {
  label: string
  name: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
}[] = [
  {
    label: 'Name',
    name: 'username',
    placeholder: 'John Doe',
  },
  {
    label: 'Mobile number',
    name: 'mobileNumber',
    placeholder: '10 Digit mobile number',
  },
  {
    label: 'Email address',
    name: 'email',
    placeholder: 'Your email address',
  },
  {
    label: 'Set Password',
    name: 'password',
    placeholder: '********',
    type: 'password',
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    placeholder: '********',
    type: 'password',
  },
]

const CreateUser = () => {
  const [formData, setFormData] = useState({
    username: undefined,
    mobileNumber: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  })

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('formData:', formData)
  }

  return (
    <div className='p-5'>
      <AssistantHeaderSm
        title='Welcome to Wondertax'
        description='Please share your details so that you can make an account and save your progress.'
      />

      <Form onSubmit={handleOnSubmit}>
        {FORM_INPUTS.map((item) => (
          <Input
            key={item.name}
            label={item.label}
            name={item.name}
            type={item.type}
            placeholder={item.placeholder}
            formData={formData}
            setFormData={setFormData}
          />
        ))}

        <span className='font-semibold text-xs'>
          By proceeding you accept our site's{' '}
          <span className='text-[#53BB5F]'>Terms and conditions</span>
        </span>

        {/* <div className='flex items-center justify-center space-x-2 px-5'>
          <button
            className='font-semibold text-sm bg-[#AEAEAE] px-6 py-3 text-white rounded-md w-1/2'
            type='button'
            onClick={() => console.log('skipping...')}
          >
            Skip
          </button>

          <button
            className='font-semibold text-sm bg-[#53BB5F] px-6 py-3 text-white rounded-md w-1/2'
            type='submit'
          >
            Register
          </button>
        </div> */}
      </Form>
    </div>
  )
}

export default CreateUser
