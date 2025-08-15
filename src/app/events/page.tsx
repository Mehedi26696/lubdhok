'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { events } from '@/data/events'

// Enhanced Image Carousel Component
function ImageCarousel({ images, eventTitle }: { images: string[], eventTitle: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) return null

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-lg">
      <Image
        src={images[currentImageIndex]}
        alt={`${eventTitle} - Image ${currentImageIndex + 1}`}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function EventsPage() {
  const categoryColors = {
    cultural: { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-400/30' },
    academic: { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-400/30' },
    social: { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-400/30' },
    competition: { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-400/30' },
    workshop: { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-400/30' },
    other: { bg: 'bg-slate-500/20', text: 'text-slate-300', border: 'border-slate-400/30' }
  }

  const getEventStats = () => {
    const totalEvents = events.length
    const upcomingEvents = events.filter(e => e.type === 'upcoming').length
    const categories = [...new Set(events.map(e => e.category))].length
    return { totalEvents, upcomingEvents, categories }
  }

  const stats = getEventStats()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-400/6 rounded-full blur-2xl"></div>
        
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-orange-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-amber-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-yellow-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-300 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Community Events</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent mb-6">
            Our Events
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Celebrating our journey through memorable events, competitions, and gatherings that bring our community together
          </p>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{stats.totalEvents}</div>
              <div className="text-sm text-slate-400 font-medium">Total Events</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{stats.upcomingEvents}</div>
              <div className="text-sm text-slate-400 font-medium">Upcoming</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{stats.categories}</div>
              <div className="text-sm text-slate-400 font-medium">Categories</div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[...events].reverse().map((event, index) => {
            const categoryStyle = categoryColors[event.category as keyof typeof categoryColors] || categoryColors.other
            
            return (
              <div 
                key={event.id} 
                className="group bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden opacity-0 animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
              >
                <ImageCarousel images={event.images} eventTitle={event.title} />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      event.type === 'upcoming' 
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' 
                        : 'bg-slate-500/20 text-slate-300 border-slate-400/30'
                    }`}>
                      {event.type === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border capitalize ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-slate-400">
                      <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <svg className="w-4 h-4 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/events/${event.id}`}
                    className={`inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                      event.type === 'upcoming'
                        ? 'bg-orange-600 hover:bg-orange-700 text-white'
                        : 'bg-slate-600 hover:bg-slate-700 text-white'
                    }`}
                  >
                    View Details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-400/30">
              <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No Events Available
            </h3>
            <p className="text-slate-400 text-lg max-w-md mx-auto">
              Stay tuned for upcoming events and community gatherings!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
