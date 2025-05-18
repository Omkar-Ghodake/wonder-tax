'use client'

import AssistantHeaderSm from '@/components/mobile/userInfoSteps/AssistantHeaderSm'
import Success from '@/components/Success'
import Form from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { getUserFromDb } from '@/server-actions/db'
import { handleUserRegister } from '@/server-actions/userAuth'
import {
  checkEmail,
  checkPassword,
  checkPhoneNumber,
  checkUsername,
} from '@/server-actions/utils'
import { FormEvent, HTMLInputTypeAttribute, useState } from 'react'

const FORM_INPUTS: {
  label: string
  name: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  required?: boolean
  info?: string
}[] = [
  {
    label: 'Name',
    name: 'username',
    placeholder: 'John Doe',
  },
  {
    label: 'Mobile number',
    name: 'phone',
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
    info: 'Minimum 8 characters, including uppercase and lowercase letters, numbers, and symbols.',
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

  const [showError, setShowError] = useState<{
    inputName: string | null
    errorMsg: string | null
  }>({
    inputName: null,
    errorMsg: null,
  })

  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      const isUsernameValid = await checkUsername(formData.username)
      if (!isUsernameValid.success) {
        return setShowError({
          inputName: 'username',
          errorMsg: isUsernameValid.message,
        })
      }

      const isPhoneValid = await checkPhoneNumber(formData.phone)
      if (!isPhoneValid.success) {
        return setShowError({
          inputName: 'phone',
          errorMsg: isPhoneValid.message,
        })
      }

      const isEmailValid = await checkEmail(formData.email)
      if (!isEmailValid.success) {
        return setShowError({
          inputName: 'email',
          errorMsg: isEmailValid.message,
        })
      }

      if (formData.email) {
        const doesUserExist = await getUserFromDb({ email: formData.email })

        if (doesUserExist)
          return setShowError({
            inputName: 'email',
            errorMsg: 'User with this email already exists.',
          })
      }

      if (formData.password !== formData.confirmPassword) {
        return setShowError({
          inputName: 'confirmPassword',
          errorMsg: 'Passwords do not match.',
        })
      }

      const isPasswordValid = await checkPassword(formData.password)
      if (!isPasswordValid.success) {
        return setShowError({
          inputName: 'password',
          errorMsg: isPasswordValid.message,
        })
      }

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
            showError={showError}
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
          text='Registration successful!'
          imgUrl='/mobile/registerSuccess.gif'
        />
      )}
    </div>
  )
}

export default CreateUser
