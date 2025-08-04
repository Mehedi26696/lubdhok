import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/batch.jpg"
            alt="LUBDHOK Batch 29"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* University Badge */}
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-white/20 flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-gray-800 text-sm font-medium">University of Dhaka</span>
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Main Title with Batch Number */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-px bg-white/60"></div>
                <span className="text-white/90 font-medium tracking-wide text-sm uppercase">CSEDU-29th Batch</span>
                <div className="w-12 h-px bg-white/60"></div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-lg">
                LUBDHOK
              </h1>
            </div>
            
            {/* Subtitle with Department */}
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl font-medium text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Computer Science and Engineering
              </p>
              <p className="text-lg md:text-xl text-blue-200 font-medium max-w-3xl mx-auto drop-shadow-md">
                University of Dhaka
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              A community of passionate engineers building tomorrow&apos;s technology. 
              Where innovation meets collaboration, and friendships shape futures.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/semesters"
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Explore Resources
              </Link>
              
              <Link
                href="#discover"
                className="px-8 py-3 border border-white/50 text-white rounded-lg font-medium text-lg hover:border-white hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
              >
                Discover More
                <svg className="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
         
      </section>
      
      {/* Discover Section */}
      <section id="discover" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-blue-600"></div>
              <span className="text-blue-600 font-medium tracking-wide text-sm uppercase">Our Journey</span>
              <div className="w-12 h-px bg-blue-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Building Tomorrow Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting the future through collaboration, innovation, and shared knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Pushing boundaries and exploring new technologies to create meaningful solutions for tomorrow&apos;s challenges.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 616 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Building strong connections and fostering teamwork to achieve collective success and growth.
              </p>
            </div>
            
            {/* Values Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Striving for the highest standards in everything we do, from academics to personal development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-blue-600"></div>
              <span className="text-blue-600 font-medium tracking-wide text-sm uppercase">Community Hub</span>
              <div className="w-12 h-px bg-blue-600"></div>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Explore Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover different aspects of our batch life and connect with fellow engineers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/events" className="group">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Events & Activities</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Stay updated with all batch events, activities, and memorable moments
                </p>
                <div className="inline-flex items-center text-green-600 font-medium">
                  Explore Events
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            
            <Link href="/projects" className="group">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-200 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Projects</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Showcase of amazing projects created by our talented batch members
                </p>
                <div className="inline-flex items-center text-purple-600 font-medium">
                  View Projects
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
       
    </div>
  )
}
