'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Code,
  Sparkles,
  Users,
} from 'lucide-react'
import { semesters, type Semester } from '@/data/studyMaterials'
import { events, type Event } from '@/data/events'
import { getAllProjects, type AcademicProject } from '@/data/projects'

type DiscoveryItem =
  | { type: 'semester'; data: Semester }
  | { type: 'project'; data: AcademicProject }
  | { type: 'event'; data: Event }

type EntryPoint = {
  code: string
  label: string
  title: string
  description: string
  href: string
  icon: typeof BookOpen
  meta: string
  items: string[]
}

function DiscoveryCard({ item }: { item: DiscoveryItem }) {
  const card =
    item.type === 'semester'
      ? {
          kind: 'Material Shelf',
          title: item.data.name,
          image: null,
          href: `/semester/${item.data.id}`,
          external: false,
          details: [
            ['Subjects', String(item.data.subjects.length)],
            [
              'Files',
              String(item.data.subjects.reduce((total, subject) => total + subject.materials.length, 0)),
            ],
          ],
        }
      : item.type === 'project'
        ? {
            kind: item.data.courseCode,
            title: item.data.title,
            image: item.data.coverImage || null,
            href: item.data.sourceCodeUrl || '/projects',
            external: Boolean(item.data.sourceCodeUrl),
            details: [
              ['Course', item.data.courseCode],
              ['Team', `${item.data.teamSize} ${item.data.teamSize === 1 ? 'member' : 'members'}`],
            ],
          }
        : {
            kind: 'Event',
            title: item.data.title,
            image: item.data.images[0] || null,
            href: `/events/${item.data.id}`,
            external: false,
            details: [
              ['Date', item.data.date],
              ['Place', item.data.location],
            ],
          }

  if (!card.image) {
    return (
      <Link
        href={card.href}
        target={card.external ? '_blank' : undefined}
        rel={card.external ? 'noreferrer' : undefined}
        className="surface-card group grid h-full grid-rows-[auto_1fr_auto] overflow-hidden"
        aria-label={card.title}
      >
        <div className="flex items-center justify-between gap-4 border-b px-4 py-3" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
          <span className="mono-label">{card.kind}</span>
          <ArrowUpRight className="h-4 w-4" style={{ color: 'var(--accent)' }} />
        </div>
        <div className="p-4">
          <h3 className="mb-5 line-clamp-3 text-2xl font-black leading-tight" style={{ color: 'var(--foreground)' }}>
            {card.title}
          </h3>
          <div className="space-y-2">
            {card.details.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[4.5rem_1fr] gap-3 border-t pt-2 text-sm" style={{ borderColor: 'var(--line)' }}>
                <span className="mono-label">{label}</span>
                <span className="truncate font-bold" style={{ color: 'var(--foreground)' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t px-4 py-3" style={{ borderColor: 'var(--line)' }}>
          <span className="mono-label">Open Record</span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={card.href}
      target={card.external ? '_blank' : undefined}
      rel={card.external ? 'noreferrer' : undefined}
      className="surface-card group relative block h-full overflow-hidden"
      aria-label={card.title}
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="288px"
      />
      <div className="absolute inset-x-0 bottom-0 border-t p-4" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--surface) 88%, transparent)' }}>
        <h3 className="line-clamp-2 text-xl font-black leading-tight" style={{ color: 'var(--foreground)' }}>
          {card.title}
        </h3>
      </div>
    </Link>
  )
}

function EntryPointCard({ entry, index }: { entry: EntryPoint; index: number }) {
  const Icon = entry.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="surface-card group grid min-h-[330px] grid-rows-[auto_1fr_auto] overflow-hidden"
    >
      <div className="flex items-center justify-between gap-4 border-b px-5 py-4" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
        <div className="flex items-center gap-3">
          <span className="mono-label flex h-9 w-9 items-center justify-center border" style={{ borderColor: 'var(--line-strong)', background: 'var(--surface)', color: 'var(--foreground)', borderRadius: 6 }}>
            {entry.code}
          </span>
          <span className="mono-label">{entry.label}</span>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center border" style={{ borderColor: 'var(--line)', background: 'var(--surface)', borderRadius: 6 }}>
          <Icon className="h-6 w-6" style={{ color: 'var(--accent)' }} />
        </span>
      </div>

      <div className="p-5">
        <h3 className="mb-4 text-3xl font-black leading-none" style={{ color: 'var(--foreground)' }}>
          {entry.title}
        </h3>
        <p className="section-copy mb-6 text-sm">{entry.description}</p>

        <div className="space-y-2">
          {entry.items.map((item) => (
            <div key={item} className="flex items-center gap-3 border px-3 py-2 text-sm font-bold" style={{ borderColor: 'var(--line)', background: 'var(--surface)', color: 'var(--foreground)', borderRadius: 6 }}>
              <span className="h-2 w-2 shrink-0" style={{ background: 'var(--accent)' }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t px-5 py-4" style={{ borderColor: 'var(--line)' }}>
        <span className="mono-label">{entry.meta}</span>
        <Link href={entry.href} className="btn-outline min-h-0 px-3 py-2 text-sm" aria-label={`Open ${entry.title}`}>
          Open
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  )
}

export default function HomePage() {
  const allProjects = getAllProjects()

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date.split(' to ')[0])
    const dateB = new Date(b.date.split(' to ')[0])
    return dateB.getTime() - dateA.getTime()
  })
  const recentEvents = sortedEvents.slice(0, 8)

  const allStudyMaterials = semesters
    .flatMap((semester) =>
      semester.subjects.flatMap((subject) =>
        subject.materials.map((material) => ({ ...material, semesterName: semester.name, semesterId: semester.id }))
      )
    )
    .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())

  const recentMaterialsBySemester = allStudyMaterials
    .slice(0, 12)
    .reduce((acc, material) => {
      const semester = semesters.find((item) => item.name === material.semesterName)
      if (semester && !acc.find((item) => item.id === semester.id)) {
        acc.push(semester)
      }
      return acc
    }, [] as Semester[])
    .slice(0, 4)

  const materialCount = semesters.reduce(
    (acc, semester) => acc + semester.subjects.reduce((total, subject) => total + subject.materials.length, 0),
    0
  )
  const subjectCount = semesters.reduce(
    (acc, semester) => acc + semester.subjects.filter((subject) => !subject.code.startsWith('QB-')).length,
    0
  )

  const entryPoints: EntryPoint[] = [
    {
      code: '01',
      label: 'Academic Shelf',
      title: 'Study Materials',
      description: 'Semester-wise resources grouped for fast lookup before class, lab, or exam week.',
      href: '/semesters',
      icon: BookOpen,
      meta: `${materialCount} files`,
      items: ['Notes and slides', 'Lab code', 'Question banks'],
    },
    {
      code: '02',
      label: 'Workshop Ledger',
      title: 'Project Archive',
      description: 'A clean record of coursework builds with source links, stacks, teams, and course context.',
      href: '/projects',
      icon: Code,
      meta: `${allProjects.length} builds`,
      items: ['Source links', 'Tech stacks', 'Team records'],
    },
    {
      code: '03',
      label: 'Batch Timeline',
      title: 'Events & Moments',
      description: 'Department memories, programs, contests, tours, and batch moments arranged by time.',
      href: '/events',
      icon: Calendar,
      meta: `${events.length} entries`,
      items: ['Chronology', 'Locations', 'Highlights'],
    },
  ]

  const rollingItems: DiscoveryItem[] = [
    ...recentEvents.map((event) => ({ type: 'event' as const, data: event })),
    ...recentMaterialsBySemester.map((semester) => ({ type: 'semester' as const, data: semester })),
    ...allProjects.slice(-6).reverse().map((project) => ({ type: 'project' as const, data: project })),
  ]

  return (
    <div className="page-shell">
      <section className="relative min-h-[94vh] overflow-hidden border-b" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute inset-x-0 top-20 h-px" style={{ background: 'var(--line)' }} />
        <div className="absolute bottom-12 left-0 right-0 h-px" style={{ background: 'var(--line)' }} />
        <div className="absolute left-6 top-28 hidden h-[calc(100%-10rem)] w-px lg:block" style={{ background: 'var(--line)' }} />
        <div className="absolute right-6 top-28 hidden h-[calc(100%-10rem)] w-px lg:block" style={{ background: 'var(--line)' }} />

        <div className="relative z-10 mx-auto flex min-h-[94vh] w-full max-w-[92rem] flex-col justify-end px-4 pb-7 pt-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full pb-7"
          >
            <div className="raw-panel overflow-hidden">
              <div className="flex flex-col gap-3 border-b px-5 py-4 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: 'var(--line)' }}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">CSEDU / 29th Batch</span>
                </div>
                
              </div>

              <div className="p-6 sm:p-8 lg:p-12">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
                  <div>
                    <h1 className="text-[clamp(4.25rem,13vw,11rem)] font-black leading-[0.78]" style={{ color: 'var(--foreground)' }}>
                      LUBDHOK
                    </h1>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {[
                        { href: '/semesters', label: 'Open Materials', icon: BookOpen, primary: true },
                        { href: '/projects', label: 'Browse Projects', icon: Code },
                        { href: '/events', label: 'View Events', icon: Calendar },
                      ].map((item) => {
                        const Icon = item.icon
                        return (
                          <Link key={item.href} href={item.href} className={item.primary ? 'btn-primary justify-between' : 'btn-outline justify-between'}>
                            <span className="inline-flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              {item.label}
                            </span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  <div className="border p-5" style={{ borderColor: 'var(--line)', background: 'var(--surface)', borderRadius: 8 }}>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <div className="text-7xl font-black leading-none" style={{ color: 'var(--accent)' }}>29th</div>
                        <div className="mono-label mt-2">Batch</div>
                      </div>
                      <Users className="h-8 w-8" style={{ color: 'var(--accent-secondary)' }} />
                    </div>

                    <div className="space-y-3">
                      {[
                        ['Dept', 'Department of Computer Science and Engineering'],
                        ['Home', 'University of Dhaka'],
                      ].map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[4rem_1fr] gap-3 border-t pt-3" style={{ borderColor: 'var(--line)' }}>
                          <span className="mono-label">{label}</span>
                          <span className="text-sm font-black" style={{ color: 'var(--foreground)' }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Semesters', value: semesters.length, icon: BookOpen },
              { label: 'Subjects', value: subjectCount, icon: Clock },
              { label: 'Projects', value: allProjects.length, icon: Code },
              { label: 'Events', value: events.length, icon: Calendar },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="surface-card flex items-center justify-between gap-4 p-4">
                  <div>
                    <div className="text-3xl font-black" style={{ color: 'var(--foreground)' }}>{stat.value}</div>
                    <div className="mono-label">{stat.label}</div>
                  </div>
                  <Icon className="h-6 w-6" style={{ color: 'var(--accent)' }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_22rem] lg:items-end">
            <div>
              <div className="eyebrow mb-5">
                <Sparkles className="h-4 w-4" />
                Archive Index
              </div>
               
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {entryPoints.map((entry, index) => (
              <EntryPointCard key={entry.title} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="discover" className="border-y py-24" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div>
              <div className="eyebrow mb-5">
                <Users className="h-4 w-4" />
                Live Ledger
              </div>
              <h2 className="section-title">Recent records</h2>
            </div>
          </div>

          <div className="relative overflow-hidden border" style={{ borderColor: 'var(--line)', background: 'var(--surface)', borderRadius: 8 }}>
            

            <div className="moving-shelf relative py-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16" style={{ background: 'linear-gradient(90deg, var(--surface), transparent)' }} />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16" style={{ background: 'linear-gradient(270deg, var(--surface), transparent)' }} />
              <div
                className="moving-shelf-track flex gap-4 px-5"
                style={{
                  width: 'fit-content',
                  animationDuration: `${Math.max(44, rollingItems.length * 4)}s`,
                }}
              >
                {rollingItems.map((item, index) => (
                  <div key={`roll-1-${item.type}-${index}`} className="moving-shelf-card h-[300px] w-72 shrink-0">
                    <DiscoveryCard item={item} />
                  </div>
                ))}
                {rollingItems.map((item, index) => (
                  <div key={`roll-2-${item.type}-${index}`} className="moving-shelf-card h-[300px] w-72 shrink-0">
                    <DiscoveryCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
