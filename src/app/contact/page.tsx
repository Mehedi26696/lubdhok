import Link from 'next/link'
import { ArrowUpRight, BookOpen, Github, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="page-content narrow-content">
        <header className="mb-10">
          <p className="eyebrow mb-4">Keep in touch</p>
          <h1 className="section-title">Make the archive better.</h1>
          <p className="section-copy mt-4 max-w-xl">
            Found a broken link, have a resource to share, or want to
            contribute? Help us keep this little corner of CSEDU useful.
          </p>
        </header>
        <div className="grid gap-5 md:grid-cols-2">
          <section className="surface-card flex flex-col p-6 sm:p-8">
            <span className="card-icon mb-6">
              <MessageSquare className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h2 className="card-title">Suggestions & contributions</h2>
            <a
              href="https://github.com/Mehedi26696/lubdhok/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-7"
            >
              Open an issue on GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </section>
          <section className="surface-card flex flex-col p-6 sm:p-8">
            <span className="card-icon mb-6">
              <Github className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h2 className="card-title">Meet the maintainer</h2>
            <a
              href="https://github.com/Mehedi26696"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-7"
            >
              View GitHub profile <ArrowUpRight className="h-4 w-4" />
            </a>
          </section>
        </div>
        <div
          className="mt-10 flex flex-col justify-between gap-5 border-t pt-6 sm:flex-row sm:items-center"
          style={{ borderColor: 'var(--line)' }}
        >
          <p className="text-sm leading-6 muted-text">
            Find us on campus.
            <br />
            <span className="text-[var(--foreground)]">
              Department of CSE, University of Dhaka.
            </span>
          </p>
          <Link href="/semesters" className="text-link">
            <BookOpen className="h-4 w-4" /> Back to study materials
          </Link>
        </div>
      </div>
    </div>
  )
}
