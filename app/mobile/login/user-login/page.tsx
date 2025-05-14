'use client'

import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import Form from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { useSessionProvider } from '@/context/SessionProvider'
import {
  handleCredentialsSignIn,
  handleGoogleSignIn,
} from '@/server-actions/userAuth'
import { useRouter } from 'next/navigation'
import { FormEvent, HTMLInputTypeAttribute, useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

const FORM_INPUTS: {
  label: string
  name: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  required?: boolean
}[] = [
  {
    label: 'Email address',
    name: 'email',
    placeholder: 'Your email address',
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: '********',
    type: 'password',
  },
]

const page = () => {
  const [formData, setFormData] = useState<{
    email?: string
    password?: string
  }>({ email: undefined, password: undefined })

  const { userSession, setUserSession } = useSessionProvider()
  const router = useRouter()

  const handleOnSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault()
      const res = await handleCredentialsSignIn(formData)

      if (res?.success) {
        setUserSession(res?.data)
      } else {
        return alert(res?.message)
      }
      router.push('/mobile')
    } catch (error) {
      console.error(error)
    }
  }

  return userSession ? (
    <div className='h-[80vh] flex justify-center items-center'>
      <h1 className='text-2xl font-semibold text-center'>Signing In...</h1>
    </div>
  ) : (
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
            Login
          </button>
        </div>
      </Form>

      <div className='space-y-3 py-2'>
        <div className='flex justify-center items-center space-x-2'>
          <div className='bg-black h-[1px] w-[30%]'></div>
          <div className='text-center w-[40%]'>or Sign In with</div>
          <div className='bg-black h-[1px] w-[30%]'></div>
        </div>

        <div className='flex items-center justify-center w-full'>
          <FcGoogle
            className='text-6xl active:bg-black/10 border border-black/20 p-2 rounded-full duration-150'
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
    </div>
  )
}

export default page
