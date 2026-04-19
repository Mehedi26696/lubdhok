'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { type Event } from '@/data/events'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const startDate = new Date(event.date.split(' to ')[0])
  const day = !Number.isNaN(startDate.getDate()) ? startDate.getDate() : '--'
  const month = !Number.isNaN(startDate.getDate()) ? startDate.toLocaleString('default', { month: 'short' }) : 'Date'

  return (
    <motion.article whileHover={{ y: -3 }} className="surface-card flex h-full flex-col overflow-hidden">
      <div className="relative h-56 w-full border-b" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
        {event.images?.[0] ? (
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Calendar className="h-12 w-12" style={{ color: 'var(--muted)' }} />
          </div>
        )}
        <div className="absolute left-3 top-3 border px-3 py-2 text-center" style={{ borderColor: 'var(--line)', background: 'var(--surface)', borderRadius: 6 }}>
          <span className="block text-2xl font-black leading-none" style={{ color: 'var(--foreground)' }}>
            {day}
          </span>
          <span className="mono-label block">{month}</span>
        </div>
        <span className="stamp absolute right-3 top-3 capitalize" style={{ background: 'var(--surface)' }}>
          {event.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-4 line-clamp-2 text-2xl font-black" style={{ color: 'var(--foreground)' }}>
          {event.title}
        </h3>
        <div className="mb-5 space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" style={{ color: 'var(--accent)' }} />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" style={{ color: 'var(--accent)' }} />
            <span>{event.time}</span>
          </div>
        </div>
        <p className="section-copy mb-6 line-clamp-3 text-sm">{event.description}</p>
        <Link href={`/events/${event.id}`} className="btn-primary mt-auto">
          View Event
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  )
}
