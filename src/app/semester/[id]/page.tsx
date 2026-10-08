'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import {
  notFound,
  useParams,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { ArrowLeft, BookOpen, Code2, HelpCircle, Search } from 'lucide-react'
import { semesters, type Subject } from '@/data/studyMaterials'
import MaterialCard from '@/components/MaterialCard'
import { matchesQuery } from '@/lib/search'

const materialTypes = [
  ['slide', 'Slides'],
  ['note', 'Notes'],
  ['assignment', 'Assignments'],
  ['lecture', 'Lectures'],
  ['code', 'Code'],
  ['books', 'Books'],
  ['question', 'Questions'],
  ['other', 'Other'],
]

function SemesterContent() {
  const { id } = useParams<{ id: string }>()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const semester = semesters.find((item) => item.id === id)
  if (!semester) notFound()
  const requestedSubject = searchParams.get('subject') || ''
  const subjectFilter = semester.subjects.some(
    (subject) => subject.id === requestedSubject
  )
    ? requestedSubject
    : ''
  const query = searchQuery.trim().toLowerCase()
  const isFiltering = Boolean(query || selectedType || subjectFilter)
  const availableTypes = new Set<string>(
    semester.subjects.flatMap((subject) =>
      subject.materials.map((material) => material.type)
    )
  )
  const subjects = semester.subjects
    .filter((subject) => !subjectFilter || subject.id === subjectFilter)
    .map((subject) => ({
      ...subject,
      materials: subject.materials.filter(
        (material) =>
          (!selectedType || material.type === selectedType) &&
          matchesQuery(
            [material.title, material.description, subject.name, subject.code],
            query
          )
      ),
    }))
    .filter(
      (subject) => subject.materials.length > 0 || (!query && !selectedType)
    )
  const groups = [
    {
      label: 'Theory courses',
      icon: BookOpen,
      subjects: subjects.filter(
        (subject) =>
          subject.type === 'theory' &&
          !subject.code.startsWith('QB-') &&
          subject.name !== 'Question Banks'
      ),
    },
    {
      label: 'Lab courses',
      icon: Code2,
      subjects: subjects.filter(
        (subject) =>
          subject.type === 'lab' &&
          !subject.code.startsWith('QB-') &&
          subject.name !== 'Question Banks'
      ),
    },
    {
      label: 'Question banks',
      icon: HelpCircle,
      subjects: subjects.filter(
        (subject) =>
          subject.code.startsWith('QB-') || subject.name === 'Question Banks'
      ),
    },
  ]
  const resultCount = subjects.reduce(
    (total, subject) => total + subject.materials.length,
    0
  )
  const selectSubject = (subjectId: string) =>
    router.replace(
      subjectId
        ? `/semester/${id}?subject=${encodeURIComponent(subjectId)}`
        : `/semester/${id}`,
      { scroll: false }
    )
  const reset = () => {
    setSearchQuery('')
    setSelectedType('')
    selectSubject('')
  }
  const renderSubject = (subject: Subject) => (
    <article
      key={subject.id}
      id={subject.id}
      className="scroll-mt-28 border-t pt-6"
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="mono-label text-[var(--accent)]">
            {subject.code}
          </span>
          <h3 className="mt-1.5 text-xl font-medium tracking-tight">
            {subject.name}
          </h3>
        </div>
        <span className="text-xs muted-text">
          {subject.credits} credits <span className="mx-1">·</span>{' '}
          {subject.materials.length} resources
        </span>
      </div>
      {subject.materials.length ? (
        <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          {subject.materials.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-[var(--surface-muted)] p-4 text-sm muted-text">
          Resources for this course will appear here when added.
        </p>
      )}
    </article>
  )

  return (
    <div className="page-shell">
      <div className="page-content">
        <Link href="/semesters" className="text-link mb-7">
          <ArrowLeft className="h-4 w-4" /> All semesters
        </Link>
        <header className="mb-9">
          <p className="eyebrow mb-4">Study materials</p>
          <h1 className="section-title">{semester.name}</h1>
          <p className="section-copy mt-3">{semester.description}</p>
        </header>
        <div
          className="mb-10 rounded-lg border bg-[var(--surface)] p-4 sm:p-5"
          style={{ borderColor: 'var(--line)' }}
        >
          <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 muted-text" />
              <input
                type="search"
                aria-label="Search materials in this semester"
                placeholder="Search resources or course codes…"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="form-field pl-10"
              />
            </div>
            <select
              aria-label="Filter by course"
              value={subjectFilter}
              onChange={(event) => selectSubject(event.target.value)}
              className="form-field"
            >
              <option value="">All courses</option>
              {semester.subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.code} — {subject.name}
                </option>
              ))}
            </select>
          </div>
          <div
            className="mt-4 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by resource type"
          >
            <button
              type="button"
              className="filter-chip"
              aria-pressed={!selectedType}
              onClick={() => setSelectedType('')}
            >
              All resources
            </button>
            {materialTypes
              .filter(([type]) => availableTypes.has(type))
              .map(([type, label]) => (
                <button
                  key={type}
                  type="button"
                  className="filter-chip"
                  aria-pressed={selectedType === type}
                  onClick={() => setSelectedType(type)}
                >
                  {label}
                </button>
              ))}
          </div>
        </div>
        <div className="mb-8 flex items-center justify-between gap-3 text-xs">
          <span role="status" className="muted-text">
            {resultCount} resources in {subjects.length} courses
          </span>
          {isFiltering && (
            <button type="button" onClick={reset} className="text-link text-xs">
              Clear all filters
            </button>
          )}
        </div>
        {groups
          .filter((group) => group.subjects.length > 0)
          .map((group) => (
            <section key={group.label} className="mb-12">
              <h2 className="mb-6 flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                <group.icon className="h-4 w-4" />
                {group.label}
              </h2>
              <div className="space-y-8">
                {group.subjects.map(renderSubject)}
              </div>
            </section>
          ))}
        {subjects.length === 0 && (
          <div className="py-16 text-center">
            <Search className="mx-auto mb-4 h-7 w-7 muted-text" />
            <h2 className="text-xl font-medium">No matching resources</h2>
            <p className="section-copy mt-2">
              Try another course, a different resource type, or a shorter
              search.
            </p>
            <button type="button" onClick={reset} className="btn-outline mt-5">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SemesterPage() {
  return (
    <Suspense
      fallback={
        <div className="page-content">
          <p role="status" className="section-copy">
            Loading study materials…
          </p>
        </div>
      }
    >
      <SemesterContent />
    </Suspense>
  )
}
