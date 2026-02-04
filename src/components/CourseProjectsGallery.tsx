'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Filter } from 'lucide-react'
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
    projects.forEach((p) => p.technologies.forEach((t) => techs.add(t)))
    return Array.from(techs).sort()
  }, [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesTech = selectedTechs.length === 0 || 
                          selectedTechs.some(tech => project.technologies.includes(tech))
      
      return matchesSearch && matchesTech
    })
  }, [projects, searchQuery, selectedTechs])

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    )
  }

  return (
    <div className="space-y-12">
      {/* Search & Filter Section */}
      <div className="bg-slate-800/40 border border-slate-700/60 p-8 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          <div className="relative flex-1 group w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 transition-colors group-focus-within:text-violet-500" />
            <input
              type="text"
              placeholder={`Search within ${courseCode}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-white placeholder:text-slate-600 transition-all font-medium"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mr-2">
               <Filter size={12} className="text-violet-500" />
               Quick Tags
            </div>
            {courseTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
                  selectedTechs.includes(tech)
                    ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/20 translate-y-[-2px]'
                    : 'bg-slate-800/40 border-slate-700/50 text-slate-500 hover:text-slate-200 hover:border-slate-600'
                }`}
              >
                {tech}
              </button>
            ))}
            {selectedTechs.length > 0 && (
              <button 
                onClick={() => setSelectedTechs([])}
                className="ml-2 p-2 text-slate-500 hover:text-red-400 transition-colors bg-slate-800/50 rounded-lg border border-slate-700/50"
                title="Clear selected tags"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-2">
         <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-white tracking-tight">Project Gallery</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-transparent rounded-full" />
         </div>
         <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            {filteredProjects.length} matching results
         </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-32 bg-slate-800/20 rounded-[3rem] border border-dashed border-slate-700/60"
        >
           <div className="text-5xl mb-6 grayscale opacity-50">🔍</div>
           <h3 className="text-2xl font-bold text-white mb-2">No projects match your criteria</h3>
           <p className="text-slate-500 max-w-sm mx-auto text-sm">Try adjusting your search query or removing some technology filters.</p>
           <button 
             onClick={() => { setSearchQuery(''); setSelectedTechs([]); }}
             className="mt-8 px-6 py-3 bg-violet-600/10 border border-violet-500/20 text-violet-400 font-bold rounded-xl hover:bg-violet-600/20 transition-all"
           >
             Reset all filters
           </button>
        </motion.div>
      )}
    </div>
  )
}
