'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { events } from '@/data/events'

// Image Carousel Component
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
    <div className="relative h-56 w-full overflow-hidden group">
      <Image
        src={images[currentImageIndex]}
        alt={`${eventTitle} - Image ${currentImageIndex + 1}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Subtle dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10"></div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 text-white p-2 rounded-full hover:bg-slate-800/80 hover:border-orange-400/50 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 text-white p-2 rounded-full hover:bg-slate-800/80 hover:border-orange-400/50 transition-all duration-200 opacity-0 group-hover:opacity-100"
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
                  index === currentImageIndex 
                    ? 'bg-orange-400 scale-110 shadow-lg shadow-orange-400/50' 
                    : 'bg-white/60 hover:bg-white/80 hover:scale-105'
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-orange-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-orange-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-400/6 rounded-full blur-2xl"></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute top-32 left-1/2 w-2 h-2 bg-orange-400/20 rounded-full"></div>
        <div className="absolute top-48 right-1/4 w-1 h-1 bg-amber-400/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-yellow-400/20 rounded-full"></div>
        
        {/* Flowing lines */}
        <div className="absolute top-20 left-1/2 w-px h-32 bg-gradient-to-b from-orange-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-amber-500/20 to-transparent"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Join us in celebrating our journey through memorable events, competitions, and gatherings that strengthen our batch community
          </p>
          
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{events.length}</div>
              <div className="text-sm text-slate-400">Total Events</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {events.filter(e => e.type === 'upcoming').length}
              </div>
              <div className="text-sm text-slate-400">Upcoming</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {new Set(events.map(e => e.category)).size}
              </div>
              <div className="text-sm text-slate-400">Categories</div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...events].reverse().map((event, index) => (
            <div 
              key={event.id} 
              className="group bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-600/50 hover:border-orange-400/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden opacity-0 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}
            >
              <div className="relative">
                <ImageCarousel images={event.images} eventTitle={event.title} />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'upcoming' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' 
                      : 'bg-slate-600/40 text-slate-300 border border-slate-500/30'
                  }`}>
                    {event.type === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-400/30 rounded-full text-xs font-medium capitalize">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
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
                    <svg className="w-4 h-4 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                
                <Link 
                  href={`/events/${event.id}`}
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    event.type === 'upcoming'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <span>View Details</span>
                  <svg className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-20">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-orange-400/30">
                <svg className="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No Events Available
            </h3>
            <p className="text-slate-400 text-lg max-w-md mx-auto">
              Check back soon for upcoming events and memorable moments from our batch community!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
