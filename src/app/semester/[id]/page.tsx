'use client'

import React, { useState, useMemo } from 'react'
import { notFound, useParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, BookOpen, FileText, Video, Code, Box, Info, HelpCircle } from 'lucide-react'
import { semesters, StudyMaterial } from '@/data/studyMaterials'
import MaterialCard from '@/components/MaterialCard'

export default function SemesterPage() {
  const params = useParams()
  const id = params?.id as string
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const semester = semesters.find(s => s.id === id)

  if (!semester) {
    notFound()
  }

  const theorySubjects = semester.subjects.filter(subject => subject.type === 'theory' && subject.name !== 'Question Banks')
  const labSubjects = semester.subjects.filter(subject => subject.type === 'lab')
  const questionSubjects = semester.subjects.filter(subject => subject.name === 'Question Banks')

  const materialTypes = [
    { id: 'slide', label: 'Slides', icon: <Box size={14} /> },
    { id: 'note', label: 'Notes', icon: <FileText size={14} /> },
    { id: 'assignment', label: 'Assignments', icon: <FileText size={14} /> },
    { id: 'lecture', label: 'Lectures', icon: <Video size={14} /> },
    { id: 'code', label: 'Code', icon: <Code size={14} /> },
    { id: 'books', label: 'Books', icon: <BookOpen size={14} /> },
    { id: 'question', label: 'Questions', icon: <HelpCircle size={14} /> },
  ]

  const filteredTheorySubjects = useMemo(() => {
    return theorySubjects.map(subject => ({
      ...subject,
      materials: subject.materials.filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = !selectedType || m.type === selectedType
        return matchesSearch && matchesType
      })
    })).filter(subject => subject.materials.length > 0 || (searchQuery === '' && !selectedType))
  }, [theorySubjects, searchQuery, selectedType])

  const filteredLabSubjects = useMemo(() => {
    return labSubjects.map(subject => ({
      ...subject,
      materials: subject.materials.filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = !selectedType || m.type === selectedType
        return matchesSearch && matchesType
      })
    })).filter(subject => subject.materials.length > 0 || (searchQuery === '' && !selectedType))
  }, [labSubjects, searchQuery, selectedType])

  const filteredQuestionSubjects = useMemo(() => {
    return questionSubjects.map(subject => ({
      ...subject,
      materials: subject.materials.filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = !selectedType || m.type === selectedType
        return matchesSearch && matchesType
      })
    })).filter(subject => subject.materials.length > 0 || (searchQuery === '' && !selectedType))
  }, [questionSubjects, searchQuery, selectedType])

  const organizeMaterials = (materials: StudyMaterial[]) => {
    return {
      slides: materials.filter(m => m.type === 'slide'),
      notes: materials.filter(m => m.type === 'note'),  
      assignments: materials.filter(m => m.type === 'assignment'),
      lectures: materials.filter(m => m.type === 'lecture'),
      code: materials.filter(m => m.type === 'code'),
      books: materials.filter(m => m.type === 'books'),
      questions: materials.filter(m => m.type === 'question'),
    }
  }

  return (
    <div className="min-h-screen bg-slate-800 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Breadcrumb */}
        <nav className="flex mb-12" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-slate-500 hover:text-white transition-colors">Home</Link></li>
            <li className="text-slate-700">/</li>
            <li><Link href="/semesters" className="text-slate-500 hover:text-white transition-colors">Resources</Link></li>
            <li className="text-slate-700">/</li>
            <li className="text-slate-200 font-medium">{semester.name}</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {semester.name}
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-3xl mb-12">
            {semester.description}
          </p>

          {/* Search & Filter Bar */}
          <div className="sticky top-20 z-40 bg-slate-800/80 backdrop-blur-xl border border-slate-700/60 p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text"
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 text-white placeholder:text-slate-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {materialTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                    selectedType === type.id 
                    ? 'bg-violet-600 border-violet-500 text-white' 
                    : 'bg-slate-800/50 border-slate-700/60 text-slate-300 hover:border-slate-600/70 hover:text-white'
                  }`}
                >
                  {type.icon}
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Theory Section */}
        {filteredTheorySubjects.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-violet-600/20 rounded-xl flex items-center justify-center text-violet-400">
                <BookOpen size={20} />
              </div>
              <h2 className="text-3xl font-bold text-white">Theory Courses</h2>
            </div>

            <div className="space-y-16">
              {filteredTheorySubjects.map((subject) => {
                const organized = organizeMaterials(subject.materials)
                return (
                  <motion.div 
                    layout
                    key={subject.id} 
                    className="bg-slate-800/30 border border-slate-700/60 rounded-3xl p-8 overflow-hidden group hover:border-violet-500/20 transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                      <div>
                        <span className="text-xs font-bold text-violet-500 uppercase tracking-widest bg-violet-500/10 px-3 py-1 rounded-full mb-3 inline-block">
                          {subject.code}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors uppercase">
                          {subject.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50">
                        <Info size={14} />
                        <span className="text-sm">{subject.credits} Credits • {subject.materials.length} Items</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.entries(organized).map(([type, items]) => (
                        items.length > 0 && (
                          <div key={type} className="space-y-4">
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 px-2">
                              <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                              {type}
                            </h4>
                            <div className="space-y-3">
                              {items.map(item => (
                                <motion.div layout key={item.id}>
                                  <MaterialCard material={item} />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {/* Labs Section */}
        {filteredLabSubjects.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400">
                <Code size={20} />
              </div>
              <h2 className="text-3xl font-bold text-white">Lab Courses</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredLabSubjects.map((subject) => (
                <motion.div 
                  layout
                  key={subject.id} 
                  className="bg-slate-800/30 border border-slate-700/60 rounded-3xl p-8 hover:border-emerald-500/20 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full mb-3 inline-block">
                        {subject.code}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors uppercase">
                        {subject.name}
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500">{subject.credits} Credit</span>
                  </div>

                  <div className="space-y-3">
                    {subject.materials.map(item => (
                      <motion.div layout key={item.id}>
                        <MaterialCard material={item} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Question Banks Section */}
        {filteredQuestionSubjects.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-rose-600/20 rounded-xl flex items-center justify-center text-rose-400">
                <HelpCircle size={20} />
              </div>
              <h2 className="text-3xl font-bold text-white">Question Banks</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredQuestionSubjects.map((subject) => (
                <motion.div
                  layout
                  key={subject.id}
                  className="bg-slate-800/30 border border-slate-700/60 rounded-3xl p-8 hover:border-rose-500/20 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full mb-3 inline-block">
                        {subject.code}
                      </span>
                      <h3 className="text-xl font-bold text-white uppercase">
                        {subject.name}
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500">{subject.materials.length} Items</span>
                  </div>

                  <div className="space-y-3">
                    {subject.materials.map(item => (
                      <motion.div layout key={item.id}>
                        <MaterialCard material={item} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* No Results Fallback */}
        {(filteredTheorySubjects.length === 0 && filteredLabSubjects.length === 0 && filteredQuestionSubjects.length === 0) && (
          <div className="text-center py-32 bg-slate-800/20 rounded-3xl border border-dashed border-slate-700/60">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No materials found</h3>
            <p className="text-slate-500">Try adjusting your search or filters to find what you&apos;re looking for.</p>
          </div>
        )}
      </div>
    </div>
  )
}
