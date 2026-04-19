'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Semester } from '@/data/studyMaterials'

interface SemesterCardProps {
  semester: Semester
}

export default function SemesterCard({ semester }: SemesterCardProps) {
  const regularSubjects = semester.subjects.filter(
    (subject) => subject.name !== 'Question Banks' && !subject.code.startsWith('QB-')
  )

  const totalMaterials = semester.subjects.reduce((acc, subject) => acc + subject.materials.length, 0)
  const totalSubjects = regularSubjects.length
  const theorySubjects = regularSubjects.filter((subject) => subject.type === 'theory').length
  const labSubjects = regularSubjects.filter((subject) => subject.type === 'lab').length

  return (
    <motion.article whileHover={{ y: -3 }} className="surface-card flex h-full flex-col p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <span className="stamp mb-4">{totalSubjects} Subjects</span>
          <h3 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>
            {semester.name}
          </h3>
        </div>
        <BookOpen className="h-6 w-6 shrink-0" style={{ color: 'var(--accent-secondary)' }} />
      </div>

      <p className="section-copy mb-7 line-clamp-2 text-sm">{semester.description}</p>

      <div className="mb-7 grid grid-cols-2 gap-3">
        <div className="border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', borderRadius: 6 }}>
          <span className="mono-label block">Materials</span>
          <span className="mt-1 block text-2xl font-black" style={{ color: 'var(--foreground)' }}>
            {totalMaterials}
          </span>
        </div>
        <div className="border p-3" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', borderRadius: 6 }}>
          <span className="mono-label block">Theory / Lab</span>
          <span className="mt-1 block text-2xl font-black" style={{ color: 'var(--foreground)' }}>
            {theorySubjects} / {labSubjects}
          </span>
        </div>
      </div>

      <div className="mb-7 flex flex-wrap gap-2">
        {regularSubjects.map((subject) => (
          <span key={subject.id} className="mono-label rounded border px-2 py-1" style={{ borderColor: 'var(--line)' }}>
            {subject.code}
          </span>
        ))}
      </div>

      <Link href={`/semester/${semester.id}`} className="btn-primary mt-auto">
        Access Materials
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  )
}
