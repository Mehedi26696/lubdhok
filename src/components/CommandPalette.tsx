'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Code2,
  FileText,
  Search,
  Trophy,
  X,
} from 'lucide-react'
import { semesters } from '@/data/studyMaterials'
import { projectSemesters } from '@/data/projects'
import { events } from '@/data/events'
import { achievements } from '@/data/achievements'
import { matchesQuery, normalizeSearch } from '@/lib/search'

type SearchResult = {
  id: string
  title: string
  detail: string
  type: 'semester' | 'course' | 'resource' | 'project' | 'event' | 'achievement'
  url: string
  external?: boolean
}
const icons = {
  semester: BookOpen,
  course: BookOpen,
  resource: FileText,
  project: Code2,
  event: CalendarDays,
  achievement: Trophy,
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dialogRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const router = useRouter()
  const open = useCallback(() => {
    setQuery('')
    setSelectedIndex(0)
    setIsOpen(true)
  }, [])
  const close = useCallback(() => setIsOpen(false), [])

  const items = useMemo(() => {
    const results: SearchResult[] = []
    for (const semester of semesters) {
      results.push({
        id: semester.id,
        title: semester.name,
        detail: semester.description,
        type: 'semester',
        url: `/semester/${semester.id}`,
      })
      for (const subject of semester.subjects) {
        const url = `/semester/${semester.id}?subject=${encodeURIComponent(subject.id)}#${subject.id}`
        results.push({
          id: `${semester.id}-${subject.id}`,
          title: subject.name,
          detail: `${subject.code} · ${semester.name}`,
          type: 'course',
          url,
        })
        for (const material of subject.materials) {
          const external = Boolean(material.viewUrl && material.viewUrl !== '#')
          results.push({
            id: `${semester.id}-${subject.id}-${material.id}`,
            title: material.title,
            detail: `${subject.code} · ${subject.name} · ${material.description}`,
            type: 'resource',
            url: external ? material.viewUrl! : url,
            external,
          })
        }
      }
    }
    for (const semester of projectSemesters)
      for (const course of semester.courses)
        for (const project of course.projects) {
          results.push({
            id: project.id,
            title: project.title,
            detail: `${course.code} · ${course.name} · ${project.technologies.join(' ')}`,
            type: 'project',
            url: `/projects/course/${course.id}`,
          })
        }
    for (const event of events)
      results.push({
        id: event.id,
        title: event.title,
        detail: event.location,
        type: 'event',
        url: `/events/${event.id}`,
      })
    for (const achievement of achievements)
      results.push({
        id: achievement.id,
        title: achievement.title,
        detail: achievement.description,
        type: 'achievement',
        url: '/achievements',
      })
    return results
  }, [])

  const normalizedQuery = query.trim().toLowerCase()
  const results = useMemo(() => {
    if (!normalizedQuery) return []
    return items
      .filter((item) =>
        matchesQuery([item.title, item.detail, item.type], normalizedQuery)
      )
      .sort(
        (a, b) =>
          Number(
            normalizeSearch(b.title).startsWith(
              normalizeSearch(normalizedQuery)
            )
          ) -
          Number(
            normalizeSearch(a.title).startsWith(
              normalizeSearch(normalizedQuery)
            )
          )
      )
      .slice(0, 10)
  }, [items, normalizedQuery])
  const activeIndex = Math.min(selectedIndex, Math.max(results.length - 1, 0))

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        if (isOpen) close()
        else open()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('lubdhok:open-search', open)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('lubdhok:open-search', open)
    }
  }, [close, open, isOpen])

  useEffect(() => {
    if (!isOpen) return
    previousFocus.current = document.activeElement as HTMLElement
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
      }
      if (event.key === 'Tab') {
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]):not([tabindex="-1"]), input:not([disabled]), a[href], [tabindex="0"]'
          ) || []
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = oldOverflow
      document.removeEventListener('keydown', onKeyDown)
      previousFocus.current?.focus({ preventScroll: true })
    }
  }, [close, isOpen])

  useEffect(() => {
    if (isOpen)
      document
        .getElementById(`search-result-${activeIndex}`)
        ?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, isOpen])

  const navigate = (result: SearchResult) => {
    if (result.external)
      window.open(result.url, '_blank', 'noopener,noreferrer')
    else router.push(result.url)
    close()
  }

  if (!isOpen) return null
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 px-4 pt-[10vh] backdrop-blur-sm sm:pt-[15vh]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-title"
        className="raw-panel flex max-h-[80dvh] w-full max-w-xl flex-col overflow-hidden shadow-[var(--shadow)]"
      >
        <h2 id="search-title" className="sr-only">
          Search the Lubdhok archive
        </h2>
        <div
          className="flex items-center gap-3 border-b p-4"
          style={{ borderColor: 'var(--line)' }}
        >
          <Search className="h-5 w-5 shrink-0 muted-text" />
          <input
            ref={inputRef}
            role="combobox"
            aria-label="Search materials, courses, projects, and events"
            aria-autocomplete="list"
            aria-expanded={results.length > 0}
            aria-controls="search-results"
            aria-activedescendant={
              results.length ? `search-result-${activeIndex}` : undefined
            }
            placeholder="Search the archive…"
            className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={(event) => {
              if (!results.length) return
              if (event.key === 'ArrowDown') {
                event.preventDefault()
                setSelectedIndex((activeIndex + 1) % results.length)
              }
              if (event.key === 'ArrowUp') {
                event.preventDefault()
                setSelectedIndex(
                  (activeIndex - 1 + results.length) % results.length
                )
              }
              if (event.key === 'Enter') {
                event.preventDefault()
                navigate(results[activeIndex])
              }
            }}
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close search"
            className="icon-button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="min-h-0 overflow-y-auto p-2">
          <div id="search-results" role="listbox" aria-label="Search results">
            {results.map((result, index) => {
              const Icon = icons[result.type]
              return (
                <button
                  id={`search-result-${index}`}
                  key={`${result.type}-${result.id}`}
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  tabIndex={-1}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => navigate(result)}
                  className="flex w-full items-center gap-3 rounded-md p-3 text-left"
                  style={{
                    background:
                      index === activeIndex
                        ? 'var(--surface-muted)'
                        : undefined,
                  }}
                >
                  <Icon className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">
                      {result.title}
                    </span>
                    <span className="mt-1 block truncate text-xs muted-text">
                      {result.detail}
                    </span>
                  </span>
                  <span className="hidden text-[10px] capitalize muted-text sm:inline">
                    {result.type}
                  </span>
                  {result.external && (
                    <ArrowUpRight className="h-3.5 w-3.5 muted-text" />
                  )}
                </button>
              )
            })}
          </div>
          {normalizedQuery && !results.length && (
            <div className="px-4 py-12 text-center">
              <p className="font-medium">No matches for “{query.trim()}”</p>
              <p className="mt-2 text-sm muted-text">
                Try a course code, a title, or fewer words.
              </p>
            </div>
          )}
          {!normalizedQuery && (
            <div className="p-3">
              <p className="mono-label mb-3">Go straight to</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    title: 'Study materials',
                    url: '/semesters',
                    icon: BookOpen,
                  },
                  { title: 'Course projects', url: '/projects', icon: Code2 },
                  { title: 'Batch events', url: '/events', icon: CalendarDays },
                  { title: 'Achievements', url: '/achievements', icon: Trophy },
                ].map((item) => (
                  <button
                    key={item.url}
                    type="button"
                    onClick={() => {
                      router.push(item.url)
                      close()
                    }}
                    className="flex items-center gap-2 rounded-md bg-[var(--background)] p-4 text-left text-sm"
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                    {item.title}
                  </button>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 muted-text">
                Search across notes, course codes, projects, and batch memories.
              </p>
            </div>
          )}
        </div>
        <div
          className="flex shrink-0 justify-between border-t px-4 py-3 text-[10px] muted-text"
          style={{ borderColor: 'var(--line)' }}
        >
          <span>
            <kbd>↑ ↓</kbd> to navigate <span className="mx-2">·</span>{' '}
            <kbd>Enter</kbd> to open
          </span>
          <span>
            <kbd>Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  )
}
