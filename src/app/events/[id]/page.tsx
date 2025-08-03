"use client"

import Image from 'next/image'
import Link from 'next/link'
import { getEventById, type Event } from '@/data/events'
import { notFound } from 'next/navigation'

interface EventDetailsPageProps {
  params: {
    id: string
  }
}

export default function EventDetailsPage({ params }: EventDetailsPageProps) {
  const event = getEventById(params.id)

  if (!event) {
    notFound()
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-500',
      social: 'bg-green-500',
      technical: 'bg-purple-500',
      cultural: 'bg-pink-500'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  const getCategoryBorderColor = (category: string) => {
    const colors = {
      academic: 'border-blue-200',
      social: 'border-green-200',
      technical: 'border-purple-200',
      cultural: 'border-pink-200'
    }
    return colors[category as keyof typeof colors] || 'border-gray-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/events"
            className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </Link>
        </div>

        {/* Event Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`${getCategoryColor(event.category)} text-white text-sm font-semibold px-4 py-2 rounded-full capitalize`}>
              {event.category}
            </span>
            <span className={`${
              event.type === 'upcoming' 
                ? 'bg-violet-600 text-white' 
                : 'bg-gray-600 text-white'
            } text-sm font-bold px-4 py-2 rounded-full uppercase`}>
              {event.type === 'upcoming' ? 'Upcoming' : 'Completed'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            {event.title}
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {event.description}
          </p>
        </div>

        {/* Event Images */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.images.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-2xl group">
                <Image
                  src={image}
                  alt={`${event.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Event Details Card */}
        <div className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border ${getCategoryBorderColor(event.category)} mb-12`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Date</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Time</h3>
                <p className="text-gray-600">{event.time}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </div>

            {/* Organizer */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Organizer</h3>
                <p className="text-gray-600">{event.organizer}</p>
              </div>
            </div>

            {/* Attendees (if available) */}
            {event.attendees && (
              <div className="flex items-center space-x-4 md:col-span-2">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Attendees</h3>
                  <p className="text-gray-600">{event.attendees} people attended</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Event Highlights (if available) */}
        {event.highlights && event.highlights.length > 0 && (
          <div className={`bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border ${getCategoryBorderColor(event.category)} mb-12`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {event.type === 'upcoming' && (
            <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold py-4 px-8 rounded-xl hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Register for Event
            </button>
          )}
          
          <Link 
            href="/events"
            className="border-2 border-violet-500 text-violet-500 px-8 py-4 rounded-xl font-bold text-center hover:bg-violet-500 hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            View All Events
          </Link>
        </div>
      </div>
    </div>
  )
}
