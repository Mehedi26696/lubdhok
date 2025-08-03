import Link from 'next/link'
import Image from 'next/image'
import { semesters } from '@/data/studyMaterials'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
        
        {/* University Badge */}
        <div className="absolute top-8 left-8 z-20">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-white text-sm font-medium">University of Dhaka</span>
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Cover Image */}
            <div className="mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-3xl backdrop-blur-sm border border-white/20"></div>
                <div className="absolute inset-2 rounded-2xl overflow-hidden">
                  <Image
                    src="/batch.jpg"
                    alt="LUBDHOK Batch 29"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10"></div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-400/30 to-indigo-400/30 rounded-3xl blur-lg"></div>
              </div>
            </div>
            
            {/* Main Title with Batch Number */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
                <span className="text-violet-300 font-medium tracking-widest text-sm uppercase">29th Batch</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tight">
                <span className="block bg-gradient-to-r from-white via-violet-200 to-indigo-200 bg-clip-text text-transparent">
                  LUBDHOK
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-indigo-400 mx-auto rounded-full"></div>
            </div>
            
            {/* Subtitle with Department */}
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Computer Science and Engineering
              </p>
              <p className="text-lg md:text-xl font-light text-violet-300 max-w-3xl mx-auto">
                University of Dhaka
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              A community of passionate engineers building tomorrow&apos;s technology. 
              Where innovation meets collaboration, and friendships shape futures.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                href="/semesters"
                className="group relative px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">Explore Resources</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                  Explore Resources
                </span>
              </Link>
              
              <Link
                href="#discover"
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Discover More
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full p-1">
              <div className="w-1 h-3 bg-current rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Discover Section */}
      <section id="discover" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
              <span className="text-violet-600 font-medium tracking-widest text-sm uppercase">Our Journey</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Building Tomorrow Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting the future through collaboration, innovation, and shared knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 p-8 hover:shadow-2xl transition-all duration-500 border border-violet-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pushing boundaries and exploring new technologies to create meaningful solutions for tomorrow&apos;s challenges.
                </p>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-8 hover:shadow-2xl transition-all duration-500 border border-indigo-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building strong connections and fostering teamwork to achieve collective success and growth.
                </p>
              </div>
            </div>
            
            {/* Values Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 p-8 hover:shadow-2xl transition-all duration-500 border border-teal-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Striving for the highest standards in everything we do, from academics to personal development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
 
      
      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
              <span className="text-violet-600 font-medium tracking-widest text-sm uppercase">Community Hub</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Explore Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover different aspects of our batch life and connect with fellow engineers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/events" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200/50 hover:scale-105 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Events & Activities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay updated with all batch events, activities, and memorable moments
                </p>
                <div className="mt-6 inline-flex items-center text-green-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Explore Events
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            
            <Link href="/projects" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200/50 hover:scale-105 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Projects</h3>
                <p className="text-gray-600 leading-relaxed">
                  Showcase of amazing projects created by our talented batch members
                </p>
                <div className="mt-6 inline-flex items-center text-purple-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
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
      
      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the LUBDHOK Community
          </h2>
          <p className="text-xl text-violet-200 mb-8 max-w-2xl mx-auto">
            Connect with fellow engineers, access resources, and be part of our journey
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-violet-900 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}