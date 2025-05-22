'use client'

import Form from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { checkEmail } from '@/server-actions/utils'
import { FormErrorType } from '@/types/dataTypes'
import React, { FormEvent, useState } from 'react'
import { BsFillSendFill } from 'react-icons/bs'

const ContactUs = () => {
  const [formData, setFormData] = useState<{ email: string; message: string }>({
    email: '',
    message: '',
  })

  const [showError, setShowError] = useState<FormErrorType>({
    inputName: null,
    errorMsg: null,
  })

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const isEmailValid = await checkEmail(formData.email)
    if (!isEmailValid.success) {
      // setLoadingState({ loader: null, msg: null })
      return setShowError({
        inputName: 'email',
        errorMsg: isEmailValid.message,
      })
    }

    if (formData.message.length < 10) {
      return setShowError({
        inputName: 'message',
        errorMsg: 'Message is too short',
      })
    }
  }

  return (
    <div className='h-[75vh] w-[80vw] mx-auto flex items-center justify-center'>
      <div className='h-10/12 w-1/2 shadow-lg rounded-lg border border-gray-500/30 p-5 space-y-10'>
        <h2 className='text-center font-semibold text-2xl'>
          Get in touch with us
        </h2>

        <Form onSubmit={handleFormSubmit} className='w-1/2 mx-auto'>
          <Input
            type='email'
            name='email'
            label='Email'
            placeholder='Enter your email'
            formData={formData}
            setFormData={setFormData}
            showError={showError}
          />

          <Input
            type='text'
            name='message'
            label='Message'
            placeholder='Enter your message'
            formData={formData}
            setFormData={setFormData}
            showError={showError}
            textarea
          />

          <button className='bg-sky-500 text-white py-3 rounded-md hover:bg-sky-600 duration-150 cursor-pointer flex justify-center items-center space-x-2 font-semibold'>
            <span>Send message</span>
            <BsFillSendFill />
          </button>
        </Form>
      </div>
    </div>
  )
}

export default ContactUs
