'use client'

import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import Success from '@/components/Success'
import Form from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { handleUserRegister } from '@/server-actions/userAuth'
import { FormEvent, HTMLInputTypeAttribute, useState } from 'react'

const FORM_INPUTS: {
  label: string
  name: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  required?: boolean
}[] = [
  {
    label: 'Name',
    name: 'username',
    placeholder: 'John Doe',
    required: true,
  },
  {
    label: 'Mobile number',
    name: 'phone',
    placeholder: '10 Digit mobile number',
  },
  {
    label: 'Email address',
    name: 'email',
    type: 'email',
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
    phone: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  })

  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const response = await handleUserRegister(formData)

      if (response?.success) {
        setShowSuccess(true)
        setFormData({
          username: undefined,
          phone: undefined,
          email: undefined,
          password: undefined,
          confirmPassword: undefined,
        })
      } else {
        return alert(response?.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const redirectUser = () => {}

  return (
    <div className='p-5 space-y-5'>
      <AssistantHeaderSm
        title='Welcome to Wondertax'
        description='Please share your details so that you can make an account and save your progress.'
      />

      <Form onSubmit={handleOnSubmit} submitButton={false}>
        {FORM_INPUTS.map((item) => (
          <Input
            key={item.name}
            label={item.label}
            name={item.name}
            type={item.type}
            placeholder={item.placeholder}
            formData={formData}
            setFormData={setFormData}
            required={item.required}
          />
        ))}

        <span className='font-semibold text-xs'>
          By proceeding you accept our site's{' '}
          <span className='text-[#53BB5F]'>Terms and conditions</span>
        </span>

        <div className='flex items-center justify-center space-x-2 px-5'>
          <button
            className='font-semibold text-sm bg-[#53BB5F] px-6 py-3 text-white rounded-md w-1/2'
            type='submit'
          >
            Register
          </button>
        </div>
      </Form>

      {showSuccess && (
        <Success
          redirectUrl='/mobile/login/user-login'
          setShowSuccess={setShowSuccess}
        />
      )}
    </div>
  )
}

export default CreateUser
