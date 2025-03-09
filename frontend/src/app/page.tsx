
import Hero from '@/components/layout/Hero'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='h-full w-full'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default page