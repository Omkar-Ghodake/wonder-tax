'use client'

import { useLoadingProvider } from '@/context/LoadingProvider'
import { useEffect } from 'react'
import { CgSpinner } from 'react-icons/cg'

const Spinner = () => {
  const { loadingState } = useLoadingProvider()

  useEffect(() => {
    loadingState.loader === 'spinner' &&
      document?.body.classList.add('overflow-h-screen')
  }, [loadingState])
  return (
    loadingState.loader === 'spinner' && (
      <div className='w-screen h-screen bg-white fixed inset-0 z-50 flex justify-center items-center flex-col space-y-5'>
        <div className='text-7xl'>
          <CgSpinner className='animate-spin text-primary' />
        </div>

        {/* {loadingState.msg && <div className='text-2xl'>{loadingState.msg}</div>} */}
      </div>
    )
  )
}

export default Spinner
