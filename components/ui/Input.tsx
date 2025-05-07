import React, { FormEvent, HTMLInputTypeAttribute, useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

const Input = ({
  name,
  label,
  placeholder,
  type = 'text',
  formData,
  setFormData,
  required = false,
}: {
  name: string
  label: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  formData: any
  setFormData: any
  required?: boolean
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  return (
    <div className='flex flex-col font-medium text-sm space-y-2'>
      <label htmlFor={name}>{label}</label>
      <div className='relative w-full'>
        <input
          name={name}
          placeholder={placeholder}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          onChange={onChange}
          className='border border-[#959595] px-2 py-4 rounded-md w-full outline-primary/40'
          required={required}
        />

        {type === 'password' && (
          <span
            className='absolute right-2 top-1/2 -translate-y-1/2 text-lg p-1 duration-150'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VscEyeClosed /> : <VscEye />}
          </span>
        )}
      </div>
    </div>
  )
}

export default Input
