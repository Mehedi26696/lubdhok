'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Search, Filter, Users, MapPin, ChevronRight, LayoutGrid, Clock } from 'lucide-react'
import { events } from '@/data/events'
import EventCard from '@/components/EventCard'

type EventFilter = 'all' | 'upcoming' | 'ongoing' | 'past'

export default function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>('all')
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter)

  const upcomingCount = events.filter(e => e.type === 'upcoming').length
  const ongoingCount = events.filter(e => e.type === 'ongoing').length
  const pastCount = events.filter(e => e.type === 'past').length
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
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-100 to-amber-100 bg-clip-text text-transparent mb-6">
            Our Events
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
            Join us in celebrating our journey through memorable events, competitions, and gatherings that strengthen our batch community
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">{events.length}</div>
              <div className="text-xs sm:text-sm text-slate-400">Total Events</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400">{upcomingCount}</div>
              <div className="text-xs sm:text-sm text-slate-400">Upcoming</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400">{ongoingCount}</div>
              <div className="text-xs sm:text-sm text-slate-400">Ongoing</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-400">{pastCount}</div>
              <div className="text-xs sm:text-sm text-slate-400">Past</div>
            </div>
          </div>
        </div>

        {/* Event Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {[
            { key: 'all' as EventFilter, label: 'All Events', count: events.length },
            { key: 'upcoming' as EventFilter, label: 'Upcoming', count: upcomingCount },
            { key: 'ongoing' as EventFilter, label: 'Ongoing', count: ongoingCount },
            { key: 'past' as EventFilter, label: 'Past', count: pastCount }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 border ${
                filter === key
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-orange-400 shadow-lg'
                  : 'bg-slate-800/60 text-slate-300 border-slate-600/50 hover:border-orange-400/50 hover:text-orange-300'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0"
        >
          <AnimatePresence mode="popLayout">
            {[...filteredEvents].reverse().map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
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
