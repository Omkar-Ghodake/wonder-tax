'use client'

import UserIncomeResources from '@/components/services/UserIncomeResources'
import { useParams } from 'next/navigation'
import React from 'react'

const userIncomeResource = null

const SubService = () => {
  const params = useParams()

  if (!userIncomeResource) return <UserIncomeResources />

  return <div>{params.subService}</div>
}

export default SubService
