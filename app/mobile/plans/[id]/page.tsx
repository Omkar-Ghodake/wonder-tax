'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const IndividualPlan = () => {
  const params = useParams()

  return <div>Plan - {params.id}</div>
}

export default IndividualPlan
