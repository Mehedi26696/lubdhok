'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, FileText, BookOpen, Code, Terminal, Clock, X, Hash } from 'lucide-react'
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

  // Consolidate all searchable items
  const allItems = useMemo(() => {
    const items: SearchResult[] = []

    // Add Semesters
    semesters.forEach(sem => {
      items.push({
        id: sem.id,
        title: sem.name,
        description: sem.description,
        type: 'semester',
        url: `/semester/${sem.id}`
      })

      // Add Subjects
      sem.subjects.forEach(sub => {
        items.push({
          id: sub.id,
          title: sub.name,
          description: `${sub.code} • ${sub.credits} Credits`,
          type: 'subject',
          url: `/semester/${sem.id}?subject=${sub.id}`,
          category: sem.name
        })

        // Add Materials
        sub.materials.forEach(mat => {
          items.push({
            id: mat.id,
            title: mat.title,
            description: mat.description,
            type: 'material',
            url: mat.viewUrl || '#',
            category: sub.name
          })
        })
      })
    })

    // Add Projects
    projectSemesters.forEach(sem => {
      sem.courses.forEach(course => {
        course.projects.forEach(project => {
          items.push({
            id: project.id,
            title: project.title,
            description: project.description,
            type: 'project',
            url: `/projects/course/${course.id}`,
            category: course.name
          })
        })
      })
    })

    return items
  }, [])

  const filteredResults = useMemo(() => {
    if (!query) return []
    const lowerQuery = query.toLowerCase()
    return allItems.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description?.toLowerCase().includes(lowerQuery) ||
      item.category?.toLowerCase().includes(lowerQuery)
    ).slice(0, 8)
  }, [query, allItems])

  const toggle = useCallback(() => setIsOpen(open => !open), [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggle()
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [toggle])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleSelect = (result: SearchResult) => {
    if (result.type === 'material' && result.url.startsWith('http')) {
      window.open(result.url, '_blank')
    } else {
      router.push(result.url)
    }
    setIsOpen(false)
    setQuery('')
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(i => (i + 1) % filteredResults.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(i => (i - 1 + filteredResults.length) % filteredResults.length)
    } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
      handleSelect(filteredResults[selectedIndex])
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-[#020617]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative flex items-center p-8 border-b border-white/5 group/input">
              {/* Specialized Input Glow */}
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-focus-within/input:border-violet-500/50 group-focus-within/input:bg-violet-500/10 transition-all duration-500 mr-5">
                <Search className="w-6 h-6 text-slate-400 group-focus-within/input:text-violet-400 group-focus-within/input:scale-110 transition-all duration-500" />
              </div>

              <div className="relative flex-1">
                <input
                  autoFocus
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent text-white border-none focus:ring-0 placeholder-slate-600 text-2xl font-bold tracking-tight py-2"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                />
                {query && (
                  <button 
                    onClick={() => setQuery('')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="relative z-10 flex items-center gap-3 ml-6">
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-black/40 border border-white/10 rounded-xl">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ESC</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl text-slate-500 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative max-h-[60vh] overflow-y-auto p-3 custom-scrollbar">
              {filteredResults.length > 0 ? (
                <div className="space-y-2 p-1">
                  {filteredResults.map((result, index) => (
                    <button
                      key={`${result.type}-${result.id}-${index}`}
                      onClick={() => handleSelect(result)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center p-4 rounded-2xl transition-all duration-300 text-left relative overflow-hidden group ${
                        index === selectedIndex ? 'scale-[1.01]' : 'hover:bg-white/5'
                      }`}
                    >
                      {/* Active Background */}
                      {index === selectedIndex && (
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-white/10 rounded-2xl"></div>
                      )}

                      <div className={`relative z-10 p-3 rounded-xl mr-5 transition-colors duration-300 ${
                        index === selectedIndex ? 'bg-white/10' : 'bg-white/5'
                      }`}>
                        {result.type === 'semester' && <Clock className="w-5 h-5 text-violet-400" />}
                        {result.type === 'subject' && <BookOpen className="w-5 h-5 text-blue-400" />}
                        {result.type === 'material' && <FileText className="w-5 h-5 text-emerald-400" />}
                        {result.type === 'project' && <Code className="w-5 h-5 text-orange-400" />}
                      </div>
                      
                      <div className="relative z-10 flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-bold block truncate tracking-tight text-lg ${
                            index === selectedIndex ? 'text-white' : 'text-slate-200'
                          }`}>
                            {result.title}
                          </span>
                          <span className={`text-[9px] uppercase tracking-[0.2em] font-black ml-4 px-2.5 py-1 rounded-lg border transition-colors ${
                            index === selectedIndex ? 'bg-white/10 border-white/20 text-white' : 'bg-white/5 border-white/5 text-slate-500'
                          }`}>
                            {result.type}
                          </span>
                        </div>
                        <div className="flex items-center">
                          {result.category && (
                            <>
                              <span className={`text-[10px] uppercase tracking-widest font-black ${index === selectedIndex ? 'text-violet-300' : 'text-slate-500'}`}>
                                {result.category}
                              </span>
                              <span className="mx-3 text-slate-800 font-bold">•</span>
                            </>
                          )}
                          <span className={`text-xs truncate font-medium ${
                            index === selectedIndex ? 'text-slate-300' : 'text-slate-500'
                          }`}>
                            {result.description}
                          </span>
                        </div>
                      </div>

                      {/* Selection Glow */}
                      {index === selectedIndex && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <Hash className="w-4 h-4 text-violet-500 opacity-50" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              ) : query ? (
                <div className="p-20 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 mb-6 shadow-2xl relative group">
                    <div className="absolute inset-0 bg-violet-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Search className="w-8 h-8 text-slate-600 relative z-10" />
                  </div>
                  <p className="text-white text-xl font-bold tracking-tight">No intelligence found</p>
                  <p className="text-slate-500 text-sm mt-2 max-w-[240px] mx-auto font-medium">Your query did not match any records in our collective vault.</p>
                </div>
              ) : (
                <div className="p-8">
                  <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 px-2 opacity-50">Quick Discovery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: 'Semesters', icon: Clock, color: 'text-violet-400', desc: 'Browse temporal records', url: '/semesters' },
                      { label: 'Subjects', icon: BookOpen, color: 'text-blue-400', desc: 'Direct academic lookup', url: '/semesters' },
                      { label: 'Course Projects', icon: Code, color: 'text-orange-400', desc: 'Review implementation logic', url: '/projects' },
                      { label: 'Study Materials', icon: FileText, color: 'text-emerald-400', desc: 'Access distributed nodes', url: '/semesters' },
                    ].map((item) => (
                      <button 
                        key={item.label}
                        onClick={() => {
                          router.push(item.url)
                          setIsOpen(false)
                        }}
                        className="flex items-start text-left p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 hover:bg-white/10 transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-black/40 mr-4 group-hover:scale-110 group-hover:bg-violet-600/10 transition-all">
                          <item.icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <div>
                          <div className="text-white text-sm font-bold tracking-tight mb-0.5">{item.label}</div>
                          <div className="text-[10px] text-slate-500 font-medium">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Footer Shortcuts */}
                  <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-8">
                    {[
                      { key: 'ENTER', action: 'to select' },
                      { key: '↑↓', action: 'to navigate' }
                    ].map((s) => (
                      <div key={s.key} className="flex items-center gap-3">
                        <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold text-slate-400">{s.key}</kbd>
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{s.action}</span>
                      </div>
                    ))}
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
