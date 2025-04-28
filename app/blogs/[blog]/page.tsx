'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const Blog = () => {
  const params = useParams()

  return <div>{params.blog}</div>
}

export default Blog
