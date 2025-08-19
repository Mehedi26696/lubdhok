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

  const getCategoryColorDark = (category: string) => {
    const colors = {
      academic: 'bg-blue-500/20 text-blue-300 border border-blue-400/30',
      social: 'bg-green-500/20 text-green-300 border border-green-400/30',
      technical: 'bg-purple-500/20 text-purple-300 border border-purple-400/30',
      cultural: 'bg-pink-500/20 text-pink-300 border border-pink-400/30'
    }
    return colors[category as keyof typeof colors] || 'bg-slate-500/20 text-slate-300 border border-slate-400/30'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs with event-themed colors */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-orange-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-orange-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-400/6 rounded-full blur-2xl"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-12 opacity-0 animate-fade-in-up">
          <Link 
            href="/events"
            className="inline-flex items-center px-4 py-2 bg-slate-800/60 backdrop-blur-md border border-slate-600/50 text-orange-200 hover:text-white hover:border-orange-400/50 hover:bg-slate-700/70 font-medium transition-all duration-300 rounded-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Events
          </Link>
        </div>

        {/* Event Header */}
        <div className="mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold capitalize ${getCategoryColorDark(event.category)}`}>
              {event.category}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase ${
              event.type === 'upcoming' 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' 
                : 'bg-slate-600/40 text-slate-300 border border-slate-500/30'
            }`}>
              {event.type === 'upcoming' ? 'Upcoming' : 'Completed'}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent leading-tight">
            {event.title}
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-8"></div>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
            {event.description}
          </p>
        </div>

        {/* Event Images */}
        <div className="mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.images.map((image, index) => (
              <div 
                key={index} 
                className="relative h-64 overflow-hidden rounded-xl group bg-slate-800/60 backdrop-blur-md border border-slate-600/50 hover:border-orange-400/50 transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`${event.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details Card */}
        <div className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-600/50 p-8 shadow-2xl mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <svg className="w-6 h-6 mr-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Event Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-400/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="w-12 h-12 bg-amber-500/20 border border-amber-400/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-400/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-400/30 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="w-12 h-12 bg-violet-500/20 border border-violet-400/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-600/50 p-8 shadow-2xl mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-slate-700/40 rounded-lg border border-slate-600/30">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Event Videos (if available) */}
        {event.videos && event.videos.length > 0 && (
          <div className="bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-600/50 p-8 shadow-2xl mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.45s', animationFillMode: 'forwards'}}>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l-5.553 3.276A1 1 0 018 12.382V7.618a1 1 0 011.447-.894L15 10z" />
              </svg>
              Event Videos
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {event.videos.map((url, idx) => {
                // Extract YouTube video ID
                const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);
                const videoId = match ? match[1] : null;
                return videoId ? (
                  <div key={idx} className="aspect-video w-full rounded-lg overflow-hidden shadow">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube video ${idx + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
          {event.type === 'upcoming' && event.registrationLink && (
            <a 
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Register for Event
            </a>
          )}
          
          {event.type === 'upcoming' && !event.registrationLink && (
            <button 
              disabled
              className="bg-slate-600 text-slate-400 font-bold py-4 px-8 rounded-xl cursor-not-allowed text-center inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Registration Closed
            </button>
          )}
          
          <Link 
            href="/events"
            className="border-2 border-orange-500/50 text-orange-300 hover:text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-orange-500/20 hover:border-orange-400 transition-all duration-300 shadow-lg transform hover:-translate-y-1 backdrop-blur-sm"
          >
            View All Events
          </Link>
        </div>
      </div>
    </div>
  )
}
