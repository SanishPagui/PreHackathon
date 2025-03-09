'use client'

import React from 'react'
import Link from 'next/link'
import { Search, Bell, MessageSquare, HelpCircle } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content wrapper */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 bg-white border-r border-gray-200 min-h-screen">
          {/* Sidebar Navigation */}
          <nav className="py-6 px-4">
            <div className="mb-6">
              <div className="bg-gray-100 rounded p-2 mb-4">
                <Link href="/dashboard" className="flex items-center text-gray-700 font-medium">
                  <span>Dashboard</span>
                </Link>
              </div>
              
              <ul className="space-y-4">
                <li>
                  <Link href="/profile" className="flex items-center text-gray-500 hover:text-gray-700">
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="flex items-center text-gray-500 hover:text-gray-700">
                    <span>Find Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/proposals" className="flex items-center text-gray-500 hover:text-gray-700">
                    <span>My Proposals</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="flex items-center text-gray-500 hover:text-gray-700">
                    <span>Active Projects</span>
                  </Link>
                </li>
                <li>
                  <Link href="/messages" className="flex items-center text-gray-500 hover:text-gray-700">
                    <span>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link href="/payments" className="flex items-center text-gray-500 hover:text-gray-700">
                    <span>Payments</span>
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="flex items-center text-gray-500 hover:text-gray-700">
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome back, John!</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 text-sm mb-3">Active Projects</h3>
              <p className="text-blue-600 text-3xl font-bold">3</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 text-sm mb-3">Pending Proposals</h3>
              <p className="text-gray-600 text-3xl font-bold">7</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 text-sm mb-3">Earned This Month</h3>
              <p className="text-green-600 text-3xl font-bold">$3,750</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-gray-500 text-sm mb-3">Profile Views</h3>
              <p className="text-gray-600 text-3xl font-bold">42</p>
            </div>
          </div>
          
          {/* Active Projects */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Active Projects</h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800">E-commerce Platform Development</h3>
                <p className="text-gray-500 text-sm my-1">Client: TechSolutions Inc.</p>
                <div className="flex mt-2 mb-1">
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mr-2">React.js</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Node.js</span>
                </div>
                <div className="flex justify-end">
                  <div className="text-right">
                    <p className="text-green-600 font-semibold">$4,500</p>
                    <p className="text-gray-500 text-xs">Due in 14 days</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800">Mobile App Redesign</h3>
                <p className="text-gray-500 text-sm my-1">Client: HealthTrack</p>
                <div className="flex mt-2 mb-1">
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mr-2">Flutter</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Firebase</span>
                </div>
                <div className="flex justify-end">
                  <div className="text-right">
                    <p className="text-green-600 font-semibold">$2,800</p>
                    <p className="text-gray-500 text-xs">Due in 7 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recommended Jobs */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recommended Jobs</h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex shadow-sm">
                <div className="w-1 bg-blue-600"></div>
                <div className="flex-1 p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Senior Full Stack Developer</h3>
                  <p className="text-gray-500 text-sm my-1">DataSys Corporation</p>
                  <div className="flex mt-2 mb-1">
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mr-2">Python</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Vue.js</span>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right">
                      <p className="text-green-600 font-semibold">$50-60/hr</p>
                      <p className="text-gray-500 text-xs">Posted 2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex shadow-sm">
                <div className="w-1 bg-blue-600"></div>
                <div className="flex-1 p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Backend Developer (Django)</h3>
                  <p className="text-gray-500 text-sm my-1">EduTech Startup</p>
                  <div className="flex mt-2 mb-1">
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mr-2">Django</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right">
                      <p className="text-green-600 font-semibold">$5,000</p>
                      <p className="text-gray-500 text-xs">Posted 1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard