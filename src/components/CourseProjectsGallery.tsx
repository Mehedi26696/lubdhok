'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { type AcademicProject } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import { matchesQuery } from '@/lib/search'

interface CourseProjectsGalleryProps {
  projects: AcademicProject[]
  courseCode: string
  courseName: string
}

export default function CourseProjectsGallery({
  projects,
  courseCode,
  courseName,
}: CourseProjectsGalleryProps) {
  const [query, setQuery] = useState('')
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])
  const technologies = useMemo(
    () =>
      Array.from(
        new Set(projects.flatMap((project) => project.technologies))
      ).sort(),
    [projects]
  )
  const filtered = projects.filter(
    (project) =>
      matchesQuery(
        [
          project.title,
          project.description,
          ...project.technologies,
          ...project.teamMembers.map((member) => member.name),
        ],
        query
      ) &&
      (!selectedTechs.length ||
        selectedTechs.some((technology) =>
          project.technologies.includes(technology)
        ))
  )
  const reset = () => {
    setQuery('')
    setSelectedTechs([])
  }

  return (
    <div>
      <div
        className="mb-8 rounded-lg border bg-[var(--surface)] p-4 sm:p-5"
        style={{ borderColor: 'var(--line)' }}
      >
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 muted-text" />
          <input
            type="search"
            aria-label={`Search ${courseCode} projects`}
            placeholder="Search projects, technologies, or team members…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="form-field pl-10"
          />
        </div>
        <div
          className="mt-4 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by technology"
        >
          {technologies.map((technology) => (
            <button
              key={technology}
              type="button"
              className="filter-chip"
              aria-pressed={selectedTechs.includes(technology)}
              onClick={() =>
                setSelectedTechs((current) =>
                  current.includes(technology)
                    ? current.filter((item) => item !== technology)
                    : [...current, technology]
                )
              }
            >
              {technology}
            </button>
          ))}
        </div>
        {selectedTechs.length > 1 && (
          <p className="mt-3 text-xs muted-text">
            Showing projects that use any selected technology.
          </p>
        )}
      </div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mono-label mb-1">{courseName}</p>
          <h2 className="text-xl font-medium tracking-tight">
            Project gallery
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <p role="status" className="text-xs muted-text">
            {filtered.length} of {projects.length} projects
          </p>
          {(query || selectedTechs.length > 0) && (
            <button type="button" onClick={reset} className="text-link text-xs">
              Clear filters
            </button>
          )}
        </div>
      </div>
      <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {!filtered.length && (
        <div className="py-16 text-center">
          <h3 className="text-xl font-medium">
            No projects match your filters
          </h3>
          <p className="section-copy mt-2">
            Try a broader search or remove a technology.
          </p>
          <button type="button" onClick={reset} className="btn-outline mt-5">
            Reset filters
          </button>
        </div>
      )}
    </div>
  )
}
