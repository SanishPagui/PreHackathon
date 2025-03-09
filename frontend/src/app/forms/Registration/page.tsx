'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    password: '',
    industry: '',
    agreeToTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Real Estate',
    'Marketing',
    'Consulting',
    'Other'
  ]

  const [showIndustries, setShowIndustries] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white font-bold py-1 px-4 rounded">
              MINDLANCER
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/find-talent" className="text-gray-700 hover:text-blue-600">
              Find Talent
            </Link>
            <Link href="/find-work" className="text-gray-700 hover:text-blue-600">
              Find Work
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600">
              How It Works
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 py-2 px-4">
              Login
            </Link>
            <Link href="/signup" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8 mt-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Business Account</h1>
          
          {/* Social Sign-up */}
          <button className="w-full border border-gray-300 rounded py-3 flex items-center justify-center mb-6 hover:bg-gray-50">
            <span className="text-gray-700">Sign up with LinkedIn</span>
          </button>
          
          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-gray-200 w-full"></div>
            <div className="bg-white px-4 text-sm text-gray-500 absolute">or use email</div>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              {/* Industry Dropdown */}
              <div className="relative">
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <div 
                  className="w-full px-4 py-3 border border-gray-300 rounded flex justify-between items-center cursor-pointer"
                  onClick={() => setShowIndustries(!showIndustries)}
                >
                  <span className={formData.industry ? 'text-gray-700' : 'text-gray-500'}>
                    {formData.industry || 'Select your industry'}
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
                
                {showIndustries && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                    {industries.map((industry) => (
                      <div 
                        key={industry}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setFormData({...formData, industry});
                          setShowIndustries(false);
                        }}
                      >
                        {industry}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Agreement */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  required
                />
                <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                  I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700"
              >
                Create Account
              </button>
            </div>
          </form>
          
          {/* Login Link */}
          <div className="text-center mt-6">
            <span className="text-gray-600">Already have an account?</span>
            <Link href="/login" className="text-blue-600 hover:underline ml-1">
              Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignupPage