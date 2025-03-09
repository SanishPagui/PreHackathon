'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className='fixed w-full p-4 xl:p-7 bg-slate-200 flex flex-col xl:flex-row xl:justify-between xl:px-8 lg:px-14 items-center'>
      <div className='flex w-full xl:w-auto justify-between items-center'>
        <Link href={'/'}><h1 className='text-black text-3xl xl:text-4xl lg:text-5xl font-bold'>MINDLANCER</h1></Link>
        <button 
          className='xl:hidden text-black p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div className={`text-black w-full xl:w-auto xl:px-4 lg:px-8 ${isMenuOpen ? 'block' : 'hidden'} xl:block mt-4 xl:mt-0`}>
        <ul className='flex flex-col xl:flex-row w-full lg:space-x-10 xl:space-x-20'>
          <Link href={'/'}><li className='text-xl lg:text-2xl py-2 xl:py-0'>Find Talent</li></Link>
          <Link href={'/'}><li className='text-xl lg:text-2xl py-2 xl:py-0'>Find Work</li></Link>
          <Link href={'/'}><li className='text-xl lg:text-2xl py-2 xl:py-0'>How It Works</li></Link>
          <Link href={'/'}><li className='text-xl lg:text-2xl py-2 xl:py-0'>Pricing</li>``</Link>
        </ul>
      </div>
      <div className={`mt-4 xl:mt-0 space-y-2 xl:space-y-0 lg:space-x-8 xl:space-x-14 w-full xl:w-auto flex flex-col xl:flex-row ${isMenuOpen ? 'block' : 'hidden'} xl:block`}>
        <Link href={'/'}><button className='text-white rounded px-4 py-2 bg-cyan-500 w-full xl:w-auto cursor-pointer'>Login</button></Link>
        <Link href="/forms/Signup">
          <button className='text-black px-4 py-2 w-full xl:w-auto cursor-pointer'>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar