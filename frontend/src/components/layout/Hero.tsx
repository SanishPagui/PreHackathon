'use client'
import Head from 'next/head';
import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-50 pb-16 pt-44">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
              Find & Hire Expert
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight mb-6">
              Software Developers
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Connect with top-tier freelance developers for your projects. Hire quickly, collaborate seamlessly.
            </p>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Search skills, technologies, or job titles..."
                className="flex-grow px-4 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0 sm:mr-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-1">15,000+</h3>
              <p className="text-gray-600">Expert Developers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-1">8,500+</h3>
              <p className="text-gray-600">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-1">97%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-1">24/7</h3>
              <p className="text-gray-600">Support Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
          <div className="flex flex-wrap gap-4">
            {[
              'Full Stack',
              'Frontend',
              'Backend',
              'Mobile',
              'DevOps',
              'AI/ML'
            ].map((category) => (
              <button
                key={category}
                className="bg-gray-200 hover:bg-gray-300 transition px-6 py-2 rounded-full text-gray-700"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}