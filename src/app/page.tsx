import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Code2,
  FileText,
} from 'lucide-react'
import { semesters } from '@/data/studyMaterials'
import { events } from '@/data/events'
import { getAllProjects } from '@/data/projects'
import EventCard from '@/components/EventCard'
import CardArrow from '@/components/CardArrow'

export default function HomePage() {
  const projects = getAllProjects()
  const materialCount = semesters.reduce(
    (sum, semester) =>
      sum +
      semester.subjects.reduce(
        (total, subject) => total + subject.materials.length,
        0
      ),
    0
  )
  const recentMaterials = semesters
    .flatMap((semester) =>
      semester.subjects.flatMap((subject) =>
        subject.materials.map((material) => ({
          ...material,
          courseCode: subject.code,
          semesterId: semester.id,
          subjectId: subject.id,
        }))
      )
    )
    .sort((a, b) => b.uploadDate.localeCompare(a.uploadDate))
    .slice(0, 4)
  const recentEvents = [...events]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
  const latestSemester = semesters[semesters.length - 1]
  const entryPoints = [
    {
      href: '/semesters',
      label: 'Study materials',
      meta: `${materialCount} resources`,
      icon: BookOpen,
    },
    {
      href: '/projects',
      label: 'Made by our batch',
      meta: `${projects.length} projects`,
      icon: Code2,
    },
    {
      href: '/events',
      label: 'Life beyond class',
      meta: `${events.length} events`,
      icon: CalendarDays,
    },
  ]

  return (
    <div className="page-shell">
      <section className="content-width pb-10 pt-32 sm:pb-14 sm:pt-40">
        <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{' '}
              CSEDU · 29th batch
            </p>
            <h1
              className="text-[clamp(3.5rem,8vw,6.5rem)] leading-[1.05] tracking-[-.065em]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Lubdhok<span style={{ color: 'var(--accent)' }}>.</span>
            </h1>
            <p className="mt-5 text-xl font-medium tracking-tight sm:text-2xl">
              A batch. A shared journey.
            </p>
            <p className="section-copy mt-4 max-w-md">
              The notes we share, the things we build, and the moments we keep.
              A home for the 29th batch of CSE, University of Dhaka.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link href="/semesters" className="btn-primary">
                Find study materials <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="text-link">
                Meet Lubdhok <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[1.8] overflow-hidden rounded-lg bg-[var(--surface-muted)] lg:aspect-[1.65]">
              <Image
                src="/batch.jpg"
                alt="The Lubdhok 29th batch together on campus"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <span className="absolute bottom-4 left-4 rounded bg-[#f7f7f2] px-2.5 py-1.5 text-[10px] tracking-[.1em] text-[#285c45]">
                THE PEOPLE BEHIND LUBDHOK
              </span>
            </div>
            <figcaption className="mt-3 flex justify-between gap-3 text-[11px] muted-text">
              <span>A little chaos. A lot of good company.</span>
              <span>CSEDU / 29</span>
            </figcaption>
          </figure>
        </div>
        <div
          className="mt-12 grid grid-cols-2 gap-y-6 border-y py-6 sm:mt-16 sm:grid-cols-4"
          style={{ borderColor: 'var(--line)' }}
        >
          {[
            [semesters.length, 'semesters of learning'],
            [materialCount, 'shared resources'],
            [projects.length, 'student projects'],
            [events.length, 'batch memories'],
          ].map(([value, label]) => (
            <div key={label} className="flex items-baseline gap-3 pr-4">
              <span className="text-2xl font-medium tracking-tight">
                {value}
              </span>
              <span className="text-xs muted-text">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="content-width pb-14 sm:pb-20"
        aria-labelledby="explore-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-3">The batch archive</p>
            <h2 id="explore-heading">A good place to start.</h2>
          </div>
          <span className="mono-label hidden sm:block">
            Learn / Build / Remember
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {entryPoints.map((entry, index) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="surface-card card-interactive group flex flex-col p-6 sm:p-8"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="card-icon">
                  <entry.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="mono-label">0{index + 1}</span>
              </div>
              <h3 className="card-title mb-6">{entry.label}</h3>
              <div className="card-footer">
                <span className="text-xs muted-text">{entry.meta}</span>
                <CardArrow />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="border-y py-12 sm:py-16"
        style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
        aria-labelledby="resources-heading"
      >
        <div className="content-width grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-4">For your next class</p>
            <h2
              id="resources-heading"
              className="text-3xl font-medium leading-tight tracking-tight"
            >
              Less searching.
              <br />
              More studying.
            </h2>
            <p className="section-copy mt-4 max-w-sm">
              Find a lecture, revisit a lab, or prepare for an exam. Start with
              a semester and take it from there.
            </p>
            <Link href="/semesters" className="text-link mt-6">
              Browse all semesters <ArrowRight className="h-4 w-4" />
            </Link>
            {latestSemester && (
              <Link
                href={`/semester/${latestSemester.id}`}
                className="mt-8 flex items-center justify-between gap-3 rounded-lg border p-4"
                style={{
                  borderColor: 'var(--line)',
                  background: 'var(--background)',
                }}
              >
                <div>
                  <span className="mono-label">
                    Latest semester in the archive
                  </span>
                  <span className="mt-1 block text-sm font-medium">
                    {latestSemester.name}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[var(--accent)]" />
              </Link>
            )}
          </div>
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-medium">Recently added</h3>
              <span className="mono-label">Resources</span>
            </div>
            {recentMaterials.map((material) => (
              <Link
                key={`${material.semesterId}-${material.subjectId}-${material.id}`}
                href={`/semester/${material.semesterId}?subject=${material.subjectId}#${material.subjectId}`}
                className="group flex items-center gap-4 border-t py-5"
                style={{ borderColor: 'var(--line)' }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--background)]">
                  <FileText
                    className="h-4 w-4 text-[var(--accent)]"
                    strokeWidth={1.5}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium group-hover:text-[var(--accent)]">
                    {material.title}
                  </p>
                  <p className="mt-1 text-xs muted-text">
                    {material.courseCode} <span className="mx-1">·</span>{' '}
                    {material.type === 'slide'
                      ? 'Slides'
                      : material.type === 'books'
                        ? 'Book'
                        : material.type.charAt(0).toUpperCase() +
                          material.type.slice(1)}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 muted-text" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {recentEvents.length > 0 && (
        <section
          className="content-width py-14 sm:py-20"
          aria-labelledby="moments-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow mb-3">Outside the classroom</p>
              <h2 id="moments-heading">The moments that stay.</h2>
              <p>A few recent pages from our batch story.</p>
            </div>
            <Link href="/events" className="text-link">
              All events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {recentEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
