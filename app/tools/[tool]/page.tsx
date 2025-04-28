'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const Tool = () => {
  const params = useParams()

  return <div>{params.tool}</div>
}

export default Tool
