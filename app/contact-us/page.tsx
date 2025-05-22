'use client'

import Form from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { checkEmail } from '@/server-actions/utils'
import { FormErrorType } from '@/types/dataTypes'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { IoMdMail } from 'react-icons/io'

const ContactUs = () => {
  const [formData, setFormData] = useState<{
    email: string
    message: string
    name: string
    phone: string
  }>({
    email: '',
    message: '',
    name: '',
    phone: '',
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
    <div className='h-[85vh] w-[80vw] mx-auto flex items-center justify-center'>
      <div className='relative w-1/2 h-[85vh]'>
        <Image src={'/contactUs.jpg'} alt='' className='object-contain' fill />
      </div>

      <div className='h-fit w-1/2 border-gray-500/30 px-10 py-5 space-y-10 shadow-lg rounded-lg border'>
        <h2 className='text-center font-semibold text-2xl'>
          Get in touch with us
        </h2>

        <Form onSubmit={handleFormSubmit} className='mx-auto'>
          <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
            <Input
              type='text'
              name='name'
              label='Name'
              placeholder='Enter your name'
              formData={formData}
              setFormData={setFormData}
              showError={showError}
            />

            <Input
              type='text'
              name='phone'
              label='Phone'
              placeholder='Enter your phone'
              formData={formData}
              setFormData={setFormData}
              showError={showError}
            />
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
          </div>

          <button className='bg-sky-500 text-white py-3 rounded-md hover:bg-sky-600 duration-150 cursor-pointer flex justify-center items-center space-x-2 font-semibold'>
            <span>Send message</span>
            <BsFillSendFill />
          </button>
        </Form>

        <div className='space-y-5'>
          <div>
            {/* <h2>Need Assistance?</h2> */}

            <p className='text-lg font-semibold text-center'>
              Our team is just a message away
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <IoMdMail />
              <span>Email: </span>
              <a href='mailto:support@wondertax.in' className='hover:underline'>
                support@wondertax.in
              </a>
            </div>

            {/* <div className='flex items-center space-x-2'>
              <FaPhoneAlt />
              <span>Phone: </span>
              <a href='mailto:support@wondertax.in' className='hover:underline'>
                support@wondertax.in
              </a>
            </div> */}

            <div className='flex items-center space-x-2'>
              <FiClock />
              <span>Hours: </span>
              <span>Mon - Sat, 10am - 7pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
