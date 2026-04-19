import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Check, Clock, ExternalLink, ImageIcon, Info, MapPin, User, Users, Video } from 'lucide-react'
import { getEventById } from '@/data/events'

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

  const formatDate = (dateString: string) => {
    if (dateString.includes(' to ')) {
      const [startDateStr, endDateStr] = dateString.split(' to ')
      const startDate = new Date(startDateStr)
      const endDate = new Date(endDateStr)

      if (!Number.isNaN(startDate.getTime()) && !Number.isNaN(endDate.getTime())) {
        const start = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        const end = endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        return `${start} to ${end}`
      }
    }
    const singleDate = new Date(dateString)
    if (!Number.isNaN(singleDate.getTime())) {
      return singleDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    }
    return dateString
  }

  return (
    <div className="page-shell">
      <div className="page-content narrow-content">
        <div className="mb-10">
          <Link href="/events" className="btn-outline">
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </div>

        <header className="mb-12">
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="stamp capitalize">{event.category}</span>
            <span className="stamp capitalize">{event.type === 'past' ? 'Completed' : event.type}</span>
          </div>
          <h1 className="section-title">{event.title}</h1>
          <p className="section-copy mt-5 max-w-4xl">{event.description}</p>
        </header>

        {event.images.length > 0 && (
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <ImageIcon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
              <h2 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>Event Gallery</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {event.images.map((image, index) => (
                <div key={`${image}-${index}`} className="image-frame relative aspect-video overflow-hidden">
                  <Image
                    src={image}
                    alt={`${event.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="surface-card mb-12 p-6 sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <Info className="h-5 w-5" style={{ color: 'var(--accent)' }} />
            <h2 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>Event Details</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { label: 'Date', value: formatDate(event.date), icon: Calendar },
              { label: 'Time', value: event.time, icon: Clock },
              { label: 'Location', value: event.location, icon: MapPin },
              { label: 'Organizer', value: event.organizer, icon: User },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', borderRadius: 6 }}>
                    <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                  </span>
                  <div>
                    <h3 className="font-black" style={{ color: 'var(--foreground)' }}>{item.label}</h3>
                    <p style={{ color: 'var(--muted)' }}>{item.value}</p>
                  </div>
                </div>
              )
            })}

            {event.attendees && (
              <div className="flex gap-4 md:col-span-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', borderRadius: 6 }}>
                  <Users className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                </span>
                <div>
                  <h3 className="font-black" style={{ color: 'var(--foreground)' }}>Attendees</h3>
                  <p style={{ color: 'var(--muted)' }}>{event.attendees} people attended</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {event.highlights && event.highlights.length > 0 && (
          <section className="surface-card mb-12 p-6 sm:p-8">
            <h2 className="mb-6 text-2xl font-black" style={{ color: 'var(--foreground)' }}>Event Highlights</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {event.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 border p-4" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', borderRadius: 6 }}>
                  <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--accent-secondary)' }} />
                  <p style={{ color: 'var(--muted)' }}>{highlight}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {event.videos && event.videos.length > 0 && (
          <section className="surface-card mb-12 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Video className="h-5 w-5" style={{ color: 'var(--accent)' }} />
              <h2 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>Event Videos</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {event.videos.map((url, index) => {
                const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/)
                const videoId = match ? match[1] : null
                return videoId ? (
                  <div key={`${url}-${index}`} className="image-frame aspect-video w-full overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                ) : null
              })}
            </div>
          </section>
        )}

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          {(event.type === 'upcoming' || event.type === 'ongoing') && event.registrationLink && (
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink className="h-4 w-4" />
              {event.type === 'upcoming' ? 'Register for Event' : 'Join Event'}
            </a>
          )}
          <Link href="/events" className="btn-outline">
            View All Events
          </Link>
        </div>
      </div>
    </div>
  )
}
