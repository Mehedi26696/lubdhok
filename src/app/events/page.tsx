'use client'

import { useState } from 'react'
import { CalendarDays, Search } from 'lucide-react'
import { events } from '@/data/events'
import EventCard from '@/components/EventCard'
import { matchesQuery } from '@/lib/search'

type EventFilter = 'all' | 'upcoming' | 'ongoing' | 'past'

export default function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>('all')
  const [query, setQuery] = useState('')
  const filteredEvents = events
    .filter(
      (event) =>
        (filter === 'all' || event.type === filter) &&
        matchesQuery(
          [event.title, event.description, event.location, event.category],
          query
        )
    )
    .sort((a, b) => b.date.localeCompare(a.date))
  const filters: { key: EventFilter; label: string; count: number }[] = [
    { key: 'all', label: 'All events', count: events.length },
    ...(['upcoming', 'ongoing', 'past'] as const).map((key) => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      count: events.filter((event) => event.type === key).length,
    })),
  ]

  return (
    <div className="page-shell">
      <div className="page-content">
        <header className="mb-10">
          <p className="eyebrow mb-4">
            <CalendarDays className="h-4 w-4" /> Beyond the classroom
          </p>
          <h1 className="section-title">Events & memories</h1>
          <p className="section-copy mt-4 max-w-xl">
            The days we came together. Browse our contests, celebrations, tours,
            and everything in between.
          </p>
        </header>
        <div
          className="mb-7 flex flex-col justify-between gap-4 border-y py-4 lg:flex-row"
          style={{ borderColor: 'var(--line)' }}
        >
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter events"
          >
            {filters.map((item) => (
              <button
                key={item.key}
                type="button"
                className="filter-chip"
                aria-pressed={filter === item.key}
                onClick={() => setFilter(item.key)}
              >
                {item.label}
                <span className="text-[10px]">{item.count}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 muted-text" />
            <input
              type="search"
              aria-label="Search events"
              placeholder="Find an event…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="form-field pl-10"
            />
          </div>
        </div>
        <p role="status" className="mb-6 text-xs muted-text">
          {filteredEvents.length}{' '}
          {filteredEvents.length === 1 ? 'event' : 'events'}{' '}
          <span className="mx-1">·</span> Most recent first
        </p>
        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {!filteredEvents.length && (
          <div className="py-16 text-center">
            <CalendarDays className="mx-auto mb-4 h-7 w-7 muted-text" />
            <h2 className="text-xl font-medium">
              {query
                ? 'No matching events'
                : `No ${filter === 'all' ? '' : filter + ' '}events yet`}
            </h2>
            <p className="section-copy mt-2">
              Explore the archive to see what our batch has been up to.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter('all')
                setQuery('')
              }}
              className="btn-outline mt-5"
            >
              Show all events
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
