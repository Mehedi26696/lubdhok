'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Code2, Search } from 'lucide-react'
import { projectSemesters } from '@/data/projects'
import { matchesQuery } from '@/lib/search'
import CardArrow from '@/components/CardArrow'

export default function ProjectsPage() {
  const [query, setQuery] = useState('')
  const semesters = projectSemesters
    .map((semester) => ({
      ...semester,
      courses: semester.courses.filter(
        (course) =>
          course.projects.length > 0 &&
          matchesQuery(
            [
              course.name,
              course.code,
              ...course.projects.map((project) => project.title),
            ],
            query
          )
      ),
    }))
    .filter((semester) => semester.courses.length > 0)
  const courses = projectSemesters
    .flatMap((semester) => semester.courses)
    .filter((course) => course.projects.length > 0)
  const projectCount = courses.reduce(
    (sum, course) => sum + course.projects.length,
    0
  )

  return (
    <div className="page-shell">
      <div className="page-content">
        <header className="mb-10">
          <p className="eyebrow mb-4">
            <Code2 className="h-4 w-4" /> Built at CSEDU
          </p>
          <h1 className="section-title">The project archive</h1>
          <p className="section-copy mt-4 max-w-xl">
            Ideas turned into working code. Browse student projects by course,
            meet the teams, and explore the source.
          </p>
          <p className="mt-5 text-xs muted-text">
            {projectCount} projects <span className="mx-2">/</span>{' '}
            {courses.length} courses
          </p>
        </header>
        <div
          className="mb-10 flex flex-wrap items-center justify-between gap-3 border-y py-4"
          style={{ borderColor: 'var(--line)' }}
        >
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 muted-text" />
            <input
              type="search"
              aria-label="Search courses and projects"
              placeholder="Search a course, code, or project…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="form-field pl-10"
            />
          </div>
          <span role="status" className="text-xs muted-text">
            {semesters.reduce(
              (sum, semester) => sum + semester.courses.length,
              0
            )}{' '}
            courses
          </span>
        </div>
        <div className="space-y-12">
          {semesters.map((semester) => (
            <section key={semester.id}>
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-medium tracking-tight">
                  {semester.name}
                </h2>
                <p className="text-xs muted-text">{semester.description}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {semester.courses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/projects/course/${course.id}`}
                    className="surface-card card-interactive group flex flex-col p-6 sm:p-7"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="card-icon">
                        <Code2 className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="card-tag font-mono">{course.code}</span>
                    </div>
                    <h3 className="card-title mb-6">{course.name}</h3>
                    <div className="card-footer text-xs">
                      <span className="muted-text">
                        {course.projects.length} projects
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="font-medium text-[var(--accent)]">
                          Explore
                        </span>
                        <CardArrow />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
        {!semesters.length && (
          <div className="py-16 text-center">
            <Search className="mx-auto mb-4 h-7 w-7 muted-text" />
            <h2 className="text-xl font-medium">
              No matching courses or projects
            </h2>
            <p className="section-copy mt-2">
              Try a shorter title or a course code.
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
