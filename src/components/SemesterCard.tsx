'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Semester } from '@/data/studyMaterials'

interface SemesterCardProps {
  semester: Semester
}

export default function SemesterCard({ semester }: SemesterCardProps) {
  // Filter out question banks from subject counts
  const regularSubjects = semester.subjects.filter(subject => 
    subject.name !== 'Question Banks' && !subject.code.startsWith('QB-')
  )
  
  const totalMaterials = semester.subjects.reduce((acc, subject) => acc + subject.materials.length, 0)
  const totalSubjects = regularSubjects.length
  const theorySubjects = regularSubjects.filter(subject => subject.type === 'theory').length
  const labSubjects = regularSubjects.filter(subject => subject.type === 'lab').length

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative h-full"
    >
      <div className="h-full bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-800 hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col shadow-2xl hover:shadow-violet-500/10">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-violet-600/10 transition-colors" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors leading-tight">
              {semester.name}
            </h3>
            <span className="px-3 py-1 bg-violet-600/20 border border-violet-500/30 text-violet-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
              {totalSubjects} Subjects
            </span>
          </div>

          <p className="text-slate-400 text-sm mb-8 line-clamp-2">
            {semester.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-3 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Materials</span>
              <span className="text-lg font-bold text-white">{totalMaterials}</span>
            </div>
            <div className="p-3 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1">Theory/Lab</span>
              <span className="text-lg font-bold text-white">{theorySubjects}T / {labSubjects}L</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {regularSubjects.slice(0, 4).map(subject => (
                <span key={subject.id} className="text-[10px] font-semibold text-slate-500 bg-slate-800 px-2 py-1 rounded-md border border-slate-700">
                  {subject.code}
                </span>
              ))}
              {totalSubjects > 4 && (
                <span className="text-[10px] font-semibold text-slate-600 px-2 py-1">
                  +{totalSubjects - 4} more
                </span>
              )}
            </div>

            <Link href={`/semester/${semester.id}`} className="block w-full text-center py-3 bg-violet-600/10 border border-violet-500/20 text-violet-400 font-bold text-sm rounded-xl hover:bg-violet-600 hover:text-white transition-all">
              Access Materials
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
