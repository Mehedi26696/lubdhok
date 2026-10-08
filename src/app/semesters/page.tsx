'use client'

import { useState } from 'react'
import { BookOpen, Search, X } from 'lucide-react'
import { semesters } from '@/data/studyMaterials'
import SemesterCard from '@/components/SemesterCard'
import { matchesQuery } from '@/lib/search'

export default function SemestersPage() {
  const [query, setQuery] = useState('')
  const filtered = semesters.filter((semester) =>
    matchesQuery(
      [
        semester.name,
        semester.description,
        ...semester.subjects.flatMap((subject) => [subject.name, subject.code]),
      ],
      query
    )
  )
  const subjectCount = semesters.reduce(
    (sum, semester) =>
      sum +
      semester.subjects.filter((subject) => !subject.code.startsWith('QB-'))
        .length,
    0
  )
  const materialCount = semesters.reduce(
    (sum, semester) =>
      sum +
      semester.subjects.reduce(
        (total, subject) => total + subject.materials.length,
        0
      ),
    0
  )

  return (
    <div className="page-shell">
      <div className="page-content">
        <header className="mb-10">
          <p className="eyebrow mb-4">
            <BookOpen className="h-4 w-4" /> The academic archive
          </p>
          <h1 className="section-title">Study materials</h1>
          <p className="section-copy mt-4 max-w-xl">
            Everything we have shared, organized by semester. Choose a semester
            or find the course you need.
          </p>
          <p className="mt-5 text-xs muted-text">
            {semesters.length} semesters <span className="mx-2">/</span>{' '}
            {subjectCount} courses <span className="mx-2">/</span>{' '}
            {materialCount} resources
          </p>
        </header>
        <div
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y py-4"
          style={{ borderColor: 'var(--line)' }}
        >
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 muted-text" />
            <input
              type="search"
              aria-label="Find a semester or course"
              placeholder="Search a semester, course, or code…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="form-field pl-10 pr-11"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery('')}
                className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <span role="status" className="text-xs muted-text">
            {filtered.length} of {semesters.length} semesters
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((semester) => (
            <SemesterCard key={semester.id} semester={semester} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <BookOpen className="mx-auto mb-4 h-7 w-7 muted-text" />
            <h2 className="text-xl font-medium">No matching semesters</h2>
            <p className="section-copy mt-2">
              Try a course name or a code like CSE3201.
            </p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="btn-outline mt-5"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
