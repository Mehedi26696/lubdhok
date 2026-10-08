import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Images, MapPin } from 'lucide-react'
import { type Event } from '@/data/events'
import CardArrow from './CardArrow'

export default function EventCard({ event }: { event: Event }) {
  const startDate = event.date.split(' to ')[0]
  const date = new Date(startDate)
  const formatted = Number.isNaN(date.getTime())
    ? startDate
    : date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      })

  return (
    <Link
      href={`/events/${event.id}`}
      className="surface-card card-interactive group flex h-full flex-col p-2"
    >
      <div className="card-media aspect-[1.6]">
        {event.images[0] ? (
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <CalendarDays className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 muted-text" />
        )}
        <span className="absolute left-3 top-3 rounded-md border border-white/70 bg-[#ffffff]/95 px-2.5 py-1.5 text-[11px] font-medium capitalize text-[#285c45] shadow-sm">
          {event.category}
        </span>
        {event.images.length > 1 && (
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-[#ffffff]/95 px-2 py-1.5 text-[10px] font-medium text-[#242b27]">
            <Images className="h-3 w-3" />
            {event.images.length} photos
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 pb-3 sm:p-5 sm:pb-4">
        <div className="mb-3 flex items-center justify-between gap-2 text-[11px] muted-text">
          <time
            dateTime={startDate}
            className="inline-flex items-center gap-1.5"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            {formatted}
          </time>
          {event.type !== 'past' && (
            <span className="font-medium capitalize text-[var(--accent)]">
              {event.type}
            </span>
          )}
        </div>
        <h3 className="card-title mb-5 line-clamp-2">{event.title}</h3>
        <div className="card-footer">
          <span className="flex min-w-0 items-center gap-2 text-xs muted-text">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{event.location}</span>
          </span>
          <CardArrow />
        </div>
      </div>
    </Link>
  )
}
