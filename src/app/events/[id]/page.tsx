import Image from 'next/image'
import Link from 'next/link'
import { getEventById } from '@/data/events'
import { notFound } from 'next/navigation'

interface EventDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EventDetailsPage({ params }: EventDetailsPageProps) {
  const { id } = await params
  const event = getEventById(id)

  if (!event) {
    notFound()
  }

  const getCategoryStyle = (category: string) => {
    const styles = {
      academic: { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-400/30', icon: 'bg-blue-600' },
      social: { bg: 'bg-emerald-500/20', text: 'text-emerald-300', border: 'border-emerald-400/30', icon: 'bg-emerald-600' },
      technical: { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-400/30', icon: 'bg-purple-600' },
      cultural: { bg: 'bg-pink-500/20', text: 'text-pink-300', border: 'border-pink-400/30', icon: 'bg-pink-600' },
      competition: { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-400/30', icon: 'bg-orange-600' },
      workshop: { bg: 'bg-cyan-500/20', text: 'text-cyan-300', border: 'border-cyan-400/30', icon: 'bg-cyan-600' }
    }
    return styles[category as keyof typeof styles] || { bg: 'bg-slate-500/20', text: 'text-slate-300', border: 'border-slate-400/30', icon: 'bg-slate-600' }
  }

  const categoryStyle = getCategoryStyle(event.category)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-400/6 rounded-full blur-2xl"></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="flex items-center text-slate-400 hover:text-orange-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/events" className="ml-1 text-slate-400 hover:text-orange-400 transition-colors duration-200 md:ml-2">
                  Events
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-slate-300 md:ml-2 font-medium">{event.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Event Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-medium border capitalize ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
              {event.category}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-medium border ${
              event.type === 'upcoming' 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' 
                : 'bg-slate-500/20 text-slate-300 border-slate-400/30'
            }`}>
              {event.type === 'upcoming' ? 'Upcoming' : 'Completed'}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent leading-tight">
            {event.title}
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
            {event.description}
          </p>
        </div>

        {/* Event Images */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Event Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.images.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-xl group">
                <Image
                  src={image}
                  alt={`${event.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details Card */}
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Event Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white">Date</h3>
                <p className="text-slate-300">{event.date}</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white">Time</h3>
                <p className="text-slate-300">{event.time}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-slate-300">{event.location}</p>
              </div>
            </div>

            {/* Organizer */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 ${categoryStyle.icon} rounded-lg flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white">Organizer</h3>
                <p className="text-slate-300">{event.organizer}</p>
              </div>
            </div>

            {/* Attendees (if available) */}
            {event.attendees && (
              <div className="flex items-center space-x-4 md:col-span-2">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Attendees</h3>
                  <p className="text-slate-300">{event.attendees} people attended</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Event Highlights (if available) */}
        {event.highlights && event.highlights.length > 0 && (
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {event.type === 'upcoming' && (
            <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-200 shadow-lg">
              Register for Event
            </button>
          )}
          
          <Link 
            href="/events"
            className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold text-center hover:bg-slate-700 hover:text-white transition-all duration-200"
          >
            View All Events
          </Link>
        </div>
      </div>
    </div>
  )
}
