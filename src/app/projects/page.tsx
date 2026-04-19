'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FolderKanban, LayoutGrid, Search } from 'lucide-react'
import { projectSemesters } from '@/data/projects'

export default function ProjectsPage() {
  const [courseSearch, setCourseSearch] = useState('')

  const totalProjectsCount = projectSemesters.reduce(
    (acc, semester) => acc + semester.courses.reduce((courseAcc, course) => courseAcc + course.projects.length, 0),
    0
  )

  const totalCoursesCount = projectSemesters.reduce(
    (acc, semester) => acc + semester.courses.filter((course) => course.projects.length > 0).length,
    0
  )

  const filteredSemesters = useMemo(() => {
    if (!courseSearch) return projectSemesters
    const query = courseSearch.toLowerCase()

    return projectSemesters
      .map((semester) => ({
        ...semester,
        courses: semester.courses.filter(
          (course) => course.name.toLowerCase().includes(query) || course.code.toLowerCase().includes(query)
        ),
      }))
      .filter((semester) => semester.courses.length > 0)
  }, [courseSearch])

  return (
    <div className="page-shell">
      <div className="page-content">
        <nav className="mb-10 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="font-bold" style={{ color: 'var(--muted)' }}>Home</Link>
          <span className="mx-2" style={{ color: 'var(--line-strong)' }}>/</span>
          <span className="font-bold" style={{ color: 'var(--foreground)' }}>Projects</span>
        </nav>

        <header className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <div className="eyebrow mb-5">
              <FolderKanban className="h-4 w-4" />
              Academic Showcase
            </div>
            <h1 className="section-title">Project Archive</h1>
          </div>
          <div>
             
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="surface-card p-4">
                <span className="text-3xl font-black" style={{ color: 'var(--foreground)' }}>{totalProjectsCount}</span>
                <span className="mono-label ml-2">Projects</span>
              </div>
              <div className="surface-card p-4">
                <span className="text-3xl font-black" style={{ color: 'var(--foreground)' }}>{totalCoursesCount}</span>
                <span className="mono-label ml-2">Courses</span>
              </div>
            </div>
          </div>
        </header>

        <div className="raw-panel mb-16 p-4">
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: 'var(--muted)' }} />
            <input
              type="text"
              placeholder="Find a course..."
              value={courseSearch}
              onChange={(event) => setCourseSearch(event.target.value)}
              className="form-field pl-12"
            />
          </div>
        </div>

        <div className="space-y-20">
          {filteredSemesters.map((semester) => (
            <section key={semester.id}>
              <div className="mb-8 flex items-start gap-4 border-b pb-5" style={{ borderColor: 'var(--line)' }}>
                <div className="flex h-11 w-11 items-center justify-center border" style={{ borderColor: 'var(--line)', background: 'var(--surface)', borderRadius: 6 }}>
                  <LayoutGrid className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>{semester.name}</h2>
                  <p className="section-copy text-sm">{semester.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {semester.courses
                  .filter((course) => course.projects.length > 0)
                  .map((course, index) => (
                    <motion.article
                      key={course.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 }}
                      className="surface-card flex h-full flex-col p-6"
                    >
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <LayoutGrid className="h-6 w-6" style={{ color: 'var(--accent-secondary)' }} />
                        <span className="stamp">{course.code}</span>
                      </div>
                      <h3 className="mb-3 text-xl font-black" style={{ color: 'var(--foreground)' }}>
                        {course.name}
                      </h3>
                      <p className="section-copy mb-7 text-sm">
                        {course.projects.length} academic {course.projects.length === 1 ? 'project' : 'projects'} to explore.
                      </p>
                      <Link href={`/projects/course/${course.id}`} className="btn-primary mt-auto">
                        Explore Works
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.article>
                  ))}
              </div>
            </section>
          ))}

          {filteredSemesters.length === 0 && (
            <div className="surface-card py-24 text-center">
              <h3 className="mb-2 text-2xl font-black" style={{ color: 'var(--foreground)' }}>No Courses Found</h3>
              <p className="section-copy mx-auto max-w-md">Try a broader course name or code.</p>
              <button type="button" onClick={() => setCourseSearch('')} className="btn-outline mt-6">
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
