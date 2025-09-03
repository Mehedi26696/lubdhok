import React from 'react'
import Link from 'next/link'
import { semesters } from '@/data/studyMaterials'
import { events } from '@/data/events'
import { getAllProjects } from '@/data/projects'

export default function HomePage() {
  // Get sample data for rolling animation - prioritize latest content
  const allProjects = getAllProjects()
  
  // Sort events by date (latest first)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date.split(' to ')[0]) // Handle date ranges
    const dateB = new Date(b.date.split(' to ')[0])
    return dateB.getTime() - dateA.getTime()
  })
  const recentEvents = sortedEvents.slice(0, 8)
  
  // Get all study materials from all semesters and sort by upload date (latest first)
  const allStudyMaterials = semesters.flatMap(semester => 
    semester.subjects.flatMap(subject => 
      subject.materials.map(material => ({ ...material, semesterName: semester.name }))
    )
  ).sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
  
  // Create semester objects from recent materials
  const recentMaterialsBySemester = allStudyMaterials.slice(0, 12).reduce((acc, material) => {
    const semester = semesters.find(s => s.name === material.semesterName)
    if (semester && !acc.find(s => s.id === semester.id)) {
      acc.push(semester)
    }
    return acc
  }, [] as typeof semesters).slice(0, 4)
  
  // Create rolling items combining all types - prioritizing recent content
  const rollingItems = [
    // Recent events first
    ...recentEvents.map(event => ({
      id: event.id,
      type: 'event' as const,
      data: event
    })),
    // Recent study materials (by semester)
    ...recentMaterialsBySemester.map(semester => ({
      id: semester.id,
      type: 'semester' as const,
      data: semester
    })),
    // Projects (assume recent projects are at the end of the array)
    ...allProjects.slice(-6).reverse().map(project => ({
      id: project.id,
      type: 'project' as const,
      data: project
    }))
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Clear zone for transparent header */}
      <div className="absolute inset-x-0 top-0 h-20 bg-transparent z-40"></div>
      
      {/* Enhanced Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs - positioned well below header */}
        <div className="absolute top-32 -right-40 w-96 h-96 bg-emerald-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-teal-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs - positioned below header */}
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-emerald-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-teal-400/6 rounded-full blur-2xl"></div>
        
        {/* Subtle geometric patterns - all below header */}
        <div className="absolute top-48 left-1/2 w-2 h-2 bg-emerald-400/20 rounded-full"></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-teal-400/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-violet-400/20 rounded-full"></div>
        
        {/* Flowing lines - starting well below header */}
        <div className="absolute top-32 left-1/2 w-px h-32 bg-gradient-to-b from-emerald-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-teal-500/20 to-transparent"></div>
        
        {/* Radial gradient overlay - positioned below header */}
        <div className="absolute inset-x-0 top-32 bottom-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.08),transparent_50%)]"></div>
        <div className="absolute inset-x-0 top-32 bottom-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.06),transparent_50%)]"></div>
        
        {/* Extended background that flows to footer */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-slate-900 via-slate-800/50 to-transparent"></div>
      </div>

      {/* Hero Section - Clean & Simple */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with darker brightness */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/batch.jpg)',
            filter: 'brightness(0.6) contrast(1.1) saturate(1.1)'
          }}
        ></div>

        

        

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-10">
            {/* Clean Main Title */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-px bg-white/60"></div>
                <span className="text-white font-medium text-sm uppercase tracking-wider">Computer Science & Engineering</span>
                <div className="w-16 h-px bg-white/60"></div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
                <span className="text-white drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">LUBDHOK</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto shadow-lg"></div>
            </div>

            {/* Clean Subtitle */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">
                29th Batch • CSEDU 
              </h2>
             
            </div>

          </div>
        </div>
      </section>

      {/* Animated News Rolling Section */}
      <section id="discover" className="relative py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
          
          {/* Flowing accent lines */}
          <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-emerald-400/30 to-transparent"></div>
          <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-violet-400/30 to-transparent"></div>
          
          {/* Scattered dots */}
          <div className="absolute top-32 right-1/3 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-violet-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Latest Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6">
              Latest Updates
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4 mb-4">
              Discover our most recent projects, events, and study materials.
            </p>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto px-4">
              Hover over the carousel to pause and explore in detail
            </p>
          </div>

          {/* Rolling Animation Container */}
          <div className="relative h-80 sm:h-96 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/30 shadow-2xl mx-2 sm:mx-0 group">
            {/* Animation status indicators */}
            <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
              <div className="bg-slate-700/80 backdrop-blur-sm text-slate-300 text-xs px-3 py-1.5 rounded-full border border-slate-600/50 flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
              <div className="bg-slate-700/80 backdrop-blur-sm text-slate-300 text-xs px-3 py-1.5 rounded-full border border-slate-600/50 flex items-center space-x-2">
                <svg className="w-3 h-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Auto</span>
              </div>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-slate-700/80 backdrop-blur-sm text-slate-300 text-xs px-3 py-1.5 rounded-full border border-slate-600/50 flex items-center space-x-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Paused</span>
              </div>
            </div>
            
            {/* Animated rolling cards */}
            <div className="absolute inset-0 flex items-center">
              <div className="flex space-x-4 sm:space-x-6 animate-scroll-infinite">
                {/* First set of items */}
                {rollingItems.map((item, index) => (
                  <div key={`first-${item.id}-${index}`} className="flex-shrink-0 w-72 sm:w-80 h-64 sm:h-72 rolling-card">
                    {item.type === 'semester' && (
                      <div className="group/card relative bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-xl shadow-xl border border-violet-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col hover:scale-105 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                              {item.data.name}
                            </h3>
                            <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <span>Latest</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                            {item.data.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-violet-200/30">
                              <div className="flex items-center text-violet-600 mb-1">
                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span className="font-semibold text-xs">Materials</span>
                              </div>
                              <p className="text-lg font-bold text-gray-800">
                                {item.data.subjects.reduce((acc, subject) => acc + subject.materials.length, 0)}
                              </p>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-violet-200/30">
                              <div className="flex items-center text-purple-600 mb-1">
                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <span className="font-semibold text-xs">Credits</span>
                              </div>
                              <p className="text-lg font-bold text-gray-800">
                                {item.data.subjects.reduce((acc, subject) => acc + subject.credits, 0)}
                              </p>
                            </div>
                          </div>

                          <div className="mt-auto pt-4">
                            <Link
                              href={`/semester/${item.data.id}`}
                              className="group/btn relative inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                            >
                              <span className="relative">View Materials</span>
                              <svg className="relative ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.type === 'project' && (
                      <div className="group relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-xl shadow-lg border border-emerald-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent line-clamp-1">
                              {item.data.title}
                            </h3>
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                              {item.data.teamSize} members
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                            {item.data.description}
                          </p>

                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1.5">
                              {item.data.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="text-xs px-2.5 py-1 rounded-md font-medium bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border border-emerald-200/50"
                                >
                                  {tech}
                                </span>
                              ))}
                              {item.data.technologies.length > 3 && (
                                <span className="text-xs px-2.5 py-1 rounded-md font-medium bg-gray-100 text-gray-600">
                                  +{item.data.technologies.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mt-auto pt-4">
                            <Link
                              href={item.data.sourceCodeUrl || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn relative inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                            >
                              <span className="relative">View Project</span>
                              <svg className="relative ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.type === 'event' && (
                      <div className="group relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-xl shadow-lg border border-orange-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent line-clamp-1">
                              {item.data.title}
                            </h3>
                            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg capitalize">
                              {item.data.category}
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                            {item.data.description}
                          </p>

                          <div className="grid grid-cols-1 gap-2 mb-4">
                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-orange-200/30">
                              <div className="flex items-center text-orange-600 mb-1">
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6l-2 2h4l-2-2zm-4-6h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                </svg>
                                <span className="font-semibold text-xs">Date</span>
                              </div>
                              <p className="text-xs font-bold text-gray-800 line-clamp-1">
                                {item.data.date}
                              </p>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-orange-200/30">
                              <div className="flex items-center text-amber-600 mb-1">
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="font-semibold text-xs">Location</span>
                              </div>
                              <p className="text-xs font-bold text-gray-800 line-clamp-1">
                                {item.data.location}
                              </p>
                            </div>
                          </div>

                          <div className="mt-auto pt-4">
                            <Link
                              href={`/events/${item.data.id}`}
                              className="group/btn relative inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white text-sm font-semibold rounded-lg hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                            >
                              <span className="relative">View Event</span>
                              <svg className="relative ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Duplicate set of items for seamless loop */}
                {rollingItems.map((item, index) => (
                  <div key={`second-${item.id}-${index}`} className="flex-shrink-0 w-72 sm:w-80 h-64 sm:h-72 rolling-card">
                    {item.type === 'semester' && (
                      <div className="group relative bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-xl shadow-lg border border-violet-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                              {item.data.name}
                            </h3>
                            <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                              {item.data.subjects.filter(s => !s.code.startsWith('QB-')).length} subjects
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                            {item.data.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-violet-200/30">
                              <div className="flex items-center text-violet-600 mb-1">
                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span className="font-semibold text-xs">Materials</span>
                              </div>
                              <p className="text-lg font-bold text-gray-800">
                                {item.data.subjects.reduce((acc, subject) => acc + subject.materials.length, 0)}
                              </p>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-violet-200/30">
                              <div className="flex items-center text-purple-600 mb-1">
                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <span className="font-semibold text-xs">Credits</span>
                              </div>
                              <p className="text-lg font-bold text-gray-800">
                                {item.data.subjects.reduce((acc, subject) => acc + subject.credits, 0)}
                              </p>
                            </div>
                          </div>

                          <div className="mt-auto pt-4">
                            <Link
                              href={`/semester/${item.data.id}`}
                              className="group/btn relative inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                            >
                              <span className="relative">View Materials</span>
                              <svg className="relative ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.type === 'project' && (
                      <div className="group relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-xl shadow-lg border border-emerald-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent line-clamp-1">
                              {item.data.title}
                            </h3>
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                              {item.data.teamSize} members
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                            {item.data.description}
                          </p>

                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1.5">
                              {item.data.technologies.slice(0, 3).map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="text-xs px-2.5 py-1 rounded-md font-medium bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border border-emerald-200/50"
                                >
                                  {tech}
                                </span>
                              ))}
                              {item.data.technologies.length > 3 && (
                                <span className="text-xs px-2.5 py-1 rounded-md font-medium bg-gray-100 text-gray-600">
                                  +{item.data.technologies.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mt-auto pt-4">
                            <Link
                              href={item.data.sourceCodeUrl || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn relative inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                            >
                              <span className="relative">View Project</span>
                              <svg className="relative ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.type === 'event' && (
                      <div className="group relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-xl shadow-lg border border-orange-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent line-clamp-1">
                              {item.data.title}
                            </h3>
                            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg capitalize">
                              {item.data.category}
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                            {item.data.description}
                          </p>

                          <div className="grid grid-cols-1 gap-2 mb-4">
                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-orange-200/30">
                              <div className="flex items-center text-orange-600 mb-1">
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6l-2 2h4l-2-2zm-4-6h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                </svg>
                                <span className="font-semibold text-xs">Date</span>
                              </div>
                              <p className="text-xs font-bold text-gray-800 line-clamp-1">
                                {item.data.date}
                              </p>
                            </div>
                            
                            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-orange-200/30">
                              <div className="flex items-center text-amber-600 mb-1">
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="font-semibold text-xs">Location</span>
                              </div>
                              <p className="text-xs font-bold text-gray-800 line-clamp-1">
                                {item.data.location}
                              </p>
                            </div>
                          </div>

                          <div className="mt-auto pt-4">
                            <Link
                              href={`/events/${item.data.id}`}
                              className="group/btn relative inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white text-sm font-semibold rounded-lg hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                            >
                              <span className="relative">View Event</span>
                              <svg className="relative ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient masks for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-800/50 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-800/50 to-transparent pointer-events-none"></div>
            
            {/* Progress indicator */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-slate-700/30">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-progress-bar"></div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 px-4">
            <Link href="/semesters" className="px-4 sm:px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 shadow-lg hover:shadow-xl text-center">
               Study Materials
            </Link>
            <Link href="/events" className="px-4 sm:px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl text-center">
              View Events
            </Link>
            <Link href="/projects" className="px-4 sm:px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-700 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-violet-800 transition-all duration-200 shadow-lg hover:shadow-xl text-center">
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

