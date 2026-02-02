'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, LayoutGrid } from 'lucide-react'
import { projectSemesters } from '@/data/projects'

export default function ProjectsPage() {
  const [courseSearch, setCourseSearch] = useState('')

  const totalProjectsCount = projectSemesters.reduce((acc, semester) => 
    acc + semester.courses.reduce((courseAcc, course) => courseAcc + course.projects.length, 0), 0
  );

  const totalCoursesCount = projectSemesters.reduce((acc, semester) => 
    acc + semester.courses.filter(course => course.projects.length > 0).length, 0
  );

  const filteredSemesters = useMemo(() => {
    if (!courseSearch) return projectSemesters
    
    return projectSemesters.map(semester => ({
      ...semester,
      courses: semester.courses.filter(course => 
        course.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
        course.code.toLowerCase().includes(courseSearch.toLowerCase())
      )
    })).filter(semester => semester.courses.length > 0)
  }, [courseSearch])

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex mb-12" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-slate-600">/</span>
              <span className="text-slate-200 font-medium text-sm">Projects</span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold tracking-widest uppercase"
          >
            Academic Showcase
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent mb-6 tracking-tight"
          >
            Knowledge in Motion
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Explore the technical evolution of our batch through projects developed across eight semesters of academic pursuit.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm shadow-xl">
              <span className="text-2xl font-black text-white mr-2">{totalProjectsCount}</span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Milestones</span>
            </div>
            <div className="px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm shadow-xl">
              <span className="text-2xl font-black text-white mr-2">{totalCoursesCount}</span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Disciplines</span>
            </div>
          </div>

          {/* Navigator */}
          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 transition-colors group-focus-within:text-violet-500" />
            <input
              type="text"
              placeholder="Find a specific course..."
              value={courseSearch}
              onChange={(e) => setCourseSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-900/40 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-white placeholder:text-slate-600 transition-all shadow-2xl"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-24">
          {filteredSemesters.map((semester) => (
            <div key={semester.id}>
              <div className="flex items-center gap-4 mb-10 border-b border-slate-800/50 pb-6">
                <div className="w-10 h-10 bg-violet-600/20 rounded-xl flex items-center justify-center text-lg ring-1 ring-violet-500/30">
                  📚
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{semester.name}</h2>
                  <p className="text-slate-500 text-xs mt-0.5 font-medium">{semester.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {semester.courses
                  .filter(course => course.projects.length > 0)
                  .map((course, idx) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-violet-500/30 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="bg-slate-800/80 p-3 rounded-2xl group-hover:bg-violet-600/20 transition-colors shadow-inner">
                          <LayoutGrid className="text-violet-400" size={20} />
                        </div>
                        <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          {course.code}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                        {course.projects.length} academic {course.projects.length === 1 ? 'project' : 'projects'} to explore.
                      </p>

                      <Link
                        href={`/projects/course/${course.id}`}
                        className="mt-auto inline-flex items-center justify-center w-full px-6 py-3.5 bg-slate-800 hover:bg-violet-600 text-white text-sm font-bold rounded-xl transition-all group-hover:shadow-lg group-hover:shadow-violet-600/20"
                      >
                        Explore Works
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}

          {filteredSemesters.length === 0 && (
            <div className="text-center py-40 bg-slate-900/20 rounded-[3rem] border border-dashed border-slate-800">
               <div className="text-6xl mb-6 opacity-50">🏜️</div>
               <h3 className="text-3xl font-bold text-white mb-2">No Courses Found</h3>
               <p className="text-slate-500 max-w-md mx-auto">We couldn&apos;t find any courses matching your search. Try a broader term.</p>
               <button 
                 onClick={() => setCourseSearch('')}
                 className="mt-8 text-violet-400 font-medium hover:text-violet-300 transition-colors"
                >
                 Clear search filters
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
