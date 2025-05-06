import React, { FormEvent, HTMLInputTypeAttribute } from 'react'

const Input = ({
  name,
  label,
  placeholder,
  type = 'text',
  formData,
  setFormData,
}: {
  name: string
  label: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  formData: any
  setFormData: any
}) => {
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  return (
    <div className='flex flex-col font-medium text-sm space-y-2'>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className='border border-[#959595] px-2 py-4 rounded-md'
      />
    </div>
  )
}

export default Input
