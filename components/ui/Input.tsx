import React, {
  ChangeEvent,
  FormEvent,
  HTMLInputTypeAttribute,
  useState,
} from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

const Input = ({
  name,
  label,
  placeholder,
  type = 'text',
  formData,
  setFormData,
  required = false,
  info,
  showError,
  textarea = false,
}: {
  name: string
  label: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  formData: any
  setFormData: any
  required?: boolean
  info?: string
  showError?: any
  textarea?: boolean
}) => {
  if (type === 'email') {
    type = 'text'
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const onChange = (
    e: FormEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  return (
    <div className='flex flex-col font-medium text-sm'>
      <label className='mb-2' htmlFor={name}>
        {label}
      </label>
      <div className='relative w-full'>
        {textarea ? (
          <>
            <textarea
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              required={required}
              className={`border border-[#959595] px-2 py-4 rounded-md w-full outline-primary/40 resize-none min-h-[100px] ${
                showError?.errorMsg &&
                showError?.inputName === name &&
                'border-red-500 outline-red-500'
              }`}
            ></textarea>
          </>
        ) : (
          <>
            <input
              name={name}
              placeholder={placeholder}
              type={
                type === 'password'
                  ? showPassword
                    ? 'text'
                    : 'password'
                  : type
              }
              onChange={onChange}
              className={`border border-[#959595] px-2 py-4 rounded-md w-full outline-primary/40 ${
                showError?.errorMsg &&
                showError?.inputName === name &&
                'border-red-500 outline-red-500'
              }`}
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
          </>
        )}
      </div>

      {showError?.errorMsg && showError?.inputName === name && (
        <span className='mt-1 text-xs text-red-500'>{showError?.errorMsg}</span>
      )}

      {info && <span className='mt-1 text-xs'>{info}</span>}
    </div>
  )
}

export default Input
