'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const Service = () => {
  const params = useParams()

  return <div>{params.service}kjb</div>
}

export default Service
