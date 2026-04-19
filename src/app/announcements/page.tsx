import { Megaphone } from 'lucide-react'
import { announcements } from '@/data/announcements'

export default function AnnouncementsPage() {
  return (
    <div className="page-shell">
      <div className="page-content narrow-content">
        <header className="mb-12 text-center">
          <div className="eyebrow mb-5">
            <Megaphone className="h-4 w-4" />
            Batch Notice Board
          </div>
          <h1 className="section-title">Announcements</h1>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Updates, notices, and useful links for the Lubdhok batch.
          </p>
        </header>

        <div className="space-y-4">
          {announcements.length === 0 && (
            <div className="surface-card py-16 text-center">
              <p className="section-copy">No announcements yet.</p>
            </div>
          )}
          {[...announcements].reverse().map((announcement) => (
            <article key={announcement.id} className="surface-card border-l-4 p-5" style={{ borderLeftColor: 'var(--accent)' }}>
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-black" style={{ color: 'var(--foreground)' }}>{announcement.title}</h3>
                <time className="stamp shrink-0">{new Date(announcement.date).toLocaleDateString()}</time>
              </div>
              <p className="section-copy text-base">{announcement.message}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {announcement.author && <span className="mono-label">By {announcement.author}</span>}
                {announcement.link && (
                  <a href={announcement.link} target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: 'var(--accent)' }}>
                    More info
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
