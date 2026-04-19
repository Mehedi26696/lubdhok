'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, Clock, Code, FileText, Search, X } from 'lucide-react'
import { semesters } from '@/data/studyMaterials'
import { projectSemesters } from '@/data/projects'

type SearchResult = {
  id: string
  title: string
  description?: string
  type: 'semester' | 'subject' | 'material' | 'project'
  url: string
  category?: string
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  const allItems = useMemo(() => {
    const items: SearchResult[] = []

    semesters.forEach((semester) => {
      items.push({
        id: semester.id,
        title: semester.name,
        description: semester.description,
        type: 'semester',
        url: `/semester/${semester.id}`,
      })

      semester.subjects.forEach((subject) => {
        items.push({
          id: subject.id,
          title: subject.name,
          description: `${subject.code} / ${subject.credits} Credits`,
          type: 'subject',
          url: `/semester/${semester.id}?subject=${subject.id}`,
          category: semester.name,
        })

        subject.materials.forEach((material) => {
          items.push({
            id: material.id,
            title: material.title,
            description: material.description,
            type: 'material',
            url: material.viewUrl || '#',
            category: subject.name,
          })
        })
      })
    })

    projectSemesters.forEach((semester) => {
      semester.courses.forEach((course) => {
        course.projects.forEach((project) => {
          items.push({
            id: project.id,
            title: project.title,
            description: project.description,
            type: 'project',
            url: `/projects/course/${course.id}`,
            category: course.name,
          })
        })
      })
    })

    return items
  }, [])

  const filteredResults = useMemo(() => {
    if (!query) return []
    const lowerQuery = query.toLowerCase()
    return allItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description?.toLowerCase().includes(lowerQuery) ||
          item.category?.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 8)
  }, [query, allItems])

  const toggle = useCallback(() => setIsOpen((open) => !open), [])
  const updateQuery = (nextQuery: string) => {
    setQuery(nextQuery)
    setSelectedIndex(0)
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggle()
      }
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggle])

  const handleSelect = (result: SearchResult) => {
    if (result.type === 'material' && result.url.startsWith('http')) {
      window.open(result.url, '_blank')
    } else {
      router.push(result.url)
    }
    setIsOpen(false)
    updateQuery('')
  }

  const onKeyDown = (event: ReactKeyboardEvent) => {
    if (filteredResults.length === 0) return
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectedIndex((index) => (index + 1) % filteredResults.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectedIndex((index) => (index - 1 + filteredResults.length) % filteredResults.length)
    } else if (event.key === 'Enter' && filteredResults[selectedIndex]) {
      handleSelect(filteredResults[selectedIndex])
    }
  }

  const iconForType = (type: SearchResult['type']) => {
    if (type === 'semester') return Clock
    if (type === 'subject') return BookOpen
    if (type === 'material') return FileText
    return Code
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh] sm:px-6">
          <motion.button
            type="button"
            aria-label="Close search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/45"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -12 }}
            className="raw-panel relative w-full max-w-2xl overflow-hidden"
          >
            <div className="flex items-center gap-4 border-b p-4 sm:p-5" style={{ borderColor: 'var(--line)' }}>
              <Search className="h-5 w-5 shrink-0" style={{ color: 'var(--muted)' }} />
              <input
                autoFocus
                placeholder="Search materials, projects, courses..."
                className="w-full bg-transparent text-xl font-black outline-none placeholder:font-bold"
                style={{ color: 'var(--foreground)' }}
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                onKeyDown={onKeyDown}
              />
              {query && (
                <button type="button" onClick={() => updateQuery('')} className="icon-button h-9 w-9">
                  <X className="h-4 w-4" />
                </button>
              )}
              <button type="button" onClick={() => setIsOpen(false)} className="icon-button h-9 w-9">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-3">
              {filteredResults.length > 0 ? (
                <div className="space-y-2">
                  {filteredResults.map((result, index) => {
                    const Icon = iconForType(result.type)
                    const selected = index === selectedIndex
                    return (
                      <button
                        key={`${result.type}-${result.id}-${index}`}
                        type="button"
                        onClick={() => handleSelect(result)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className="flex w-full items-center gap-4 border p-4 text-left transition-colors"
                        style={{
                          borderColor: selected ? 'var(--accent)' : 'var(--line)',
                          background: selected ? 'color-mix(in srgb, var(--accent) 10%, var(--surface))' : 'var(--surface)',
                          borderRadius: 8,
                        }}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', borderRadius: 6 }}>
                          <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-base font-black" style={{ color: 'var(--foreground)' }}>
                            {result.title}
                          </span>
                          <span className="block truncate text-sm" style={{ color: 'var(--muted)' }}>
                            {result.category ? `${result.category} / ` : ''}
                            {result.description}
                          </span>
                        </span>
                        <span className="stamp shrink-0">{result.type}</span>
                      </button>
                    )
                  })}
                </div>
              ) : query ? (
                <div className="py-16 text-center">
                  <p className="text-xl font-black" style={{ color: 'var(--foreground)' }}>No results found</p>
                  <p className="section-copy mx-auto mt-2 max-w-sm text-sm">Try a course code, project title, subject name, or material type.</p>
                </div>
              ) : (
                <div className="p-5">
                  <h3 className="mono-label mb-4">Quick Links</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      { label: 'Semesters', icon: Clock, url: '/semesters' },
                      { label: 'Subjects', icon: BookOpen, url: '/semesters' },
                      { label: 'Course Projects', icon: Code, url: '/projects' },
                      { label: 'Study Materials', icon: FileText, url: '/semesters' },
                    ].map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          router.push(item.url)
                          setIsOpen(false)
                        }}
                        className="surface-card flex items-center gap-3 p-4 text-left"
                      >
                        <item.icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                        <span className="font-black" style={{ color: 'var(--foreground)' }}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center gap-4 border-t pt-5" style={{ borderColor: 'var(--line)' }}>
                    <span className="mono-label">Enter to select</span>
                    <span className="mono-label">Esc to close</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
