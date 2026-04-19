'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Filter, Search, X } from 'lucide-react'
import { type AcademicProject } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

interface CourseProjectsGalleryProps {
  projects: AcademicProject[]
  courseCode: string
  courseName: string
}

export default function CourseProjectsGallery({ projects, courseCode, courseName }: CourseProjectsGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])

  const courseTechnologies = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach((project) => project.technologies.forEach((tech) => techs.add(tech)))
    return Array.from(techs).sort()
  }, [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query))

      const matchesTech = selectedTechs.length === 0 || selectedTechs.some((tech) => project.technologies.includes(tech))
      return matchesSearch && matchesTech
    })
  }, [projects, searchQuery, selectedTechs])

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) => (prev.includes(tech) ? prev.filter((item) => item !== tech) : [...prev, tech]))
  }

  return (
    <div className="space-y-10">
      <div className="raw-panel p-5 md:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: 'var(--muted)' }} />
            <input
              type="text"
              placeholder={`Search ${courseCode} projects...`}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="form-field pl-12"
            />
          </div>

          <div className="flex flex-1 flex-wrap items-center gap-2">
            <span className="mono-label mr-1 inline-flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Tags
            </span>
            {courseTechnologies.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                className={selectedTechs.includes(tech) ? 'btn-primary min-h-0 px-3 py-2 text-xs' : 'btn-outline min-h-0 px-3 py-2 text-xs'}
              >
                {tech}
              </button>
            ))}
            {selectedTechs.length > 0 && (
              <button type="button" onClick={() => setSelectedTechs([])} className="icon-button h-9 w-9" title="Clear selected tags">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b pb-4 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: 'var(--line)' }}>
        <div>
          <p className="mono-label">{courseName}</p>
          <h2 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>
            Project Gallery
          </h2>
        </div>
        <p className="mono-label">{filteredProjects.length} matching results</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="surface-card py-20 text-center">
          <h3 className="mb-2 text-2xl font-black" style={{ color: 'var(--foreground)' }}>
            No projects match your filters
          </h3>
          <p className="section-copy mx-auto max-w-sm text-sm">Try a broader search or remove a technology tag.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setSelectedTechs([])
            }}
            className="btn-outline mt-6"
          >
            Reset Filters
          </button>
        </motion.div>
      )}
    </div>
  )
}
