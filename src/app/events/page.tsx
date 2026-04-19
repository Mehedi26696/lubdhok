'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { events } from '@/data/events'
import EventCard from '@/components/EventCard'

type EventFilter = 'all' | 'upcoming' | 'ongoing' | 'past'

export default function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>('all')

  const filteredEvents = filter === 'all' ? events : events.filter((event) => event.type === filter)
  const upcomingCount = events.filter((event) => event.type === 'upcoming').length
  const ongoingCount = events.filter((event) => event.type === 'ongoing').length
  const pastCount = events.filter((event) => event.type === 'past').length

  const filters = [
    { key: 'all' as EventFilter, label: 'All Events', count: events.length },
    { key: 'upcoming' as EventFilter, label: 'Upcoming', count: upcomingCount },
    { key: 'ongoing' as EventFilter, label: 'Ongoing', count: ongoingCount },
    { key: 'past' as EventFilter, label: 'Past', count: pastCount },
  ]

  return (
    <div className="page-shell">
      <div className="page-content">
        <header className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <div className="eyebrow mb-5">
              <Calendar className="h-4 w-4" />
              Community Events
            </div>
            <h1 className="section-title">Our Events</h1>
          </div>
          <div>
            
            <div className="mt-5 grid grid-cols-4 gap-5">
              {filters.map(({ key, label, count }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={filter === key ? 'btn-primary min-h-0 px-3 py-2 text-sm' : 'btn-outline min-h-0 px-3 py-2 text-sm'}
                >
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{label.split(' ')[0]}</span>
                  <span>({count})</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {[...filteredEvents].reverse().map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredEvents.length === 0 && (
          <div className="surface-card py-20 text-center">
            <h3 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>No Events Available</h3>
            <p className="section-copy mx-auto mt-3 max-w-md">Try another filter or check back later.</p>
          </div>
        )}
      </div>
    </div>
  )
}
