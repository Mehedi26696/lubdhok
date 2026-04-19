'use client'

import { useCallback, useMemo, useState } from 'react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { BookOpen, Box, Code, FileText, HelpCircle, Info, Search, Video } from 'lucide-react'
import { semesters, StudyMaterial } from '@/data/studyMaterials'
import MaterialCard from '@/components/MaterialCard'

export default function SemesterPage() {
  const params = useParams()
  const id = params?.id as string
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const semester = semesters.find((item) => item.id === id)

  if (!semester) {
    notFound()
  }

  const theorySubjects = semester.subjects.filter((subject) => subject.type === 'theory' && subject.name !== 'Question Banks')
  const labSubjects = semester.subjects.filter((subject) => subject.type === 'lab')
  const questionSubjects = semester.subjects.filter((subject) => subject.name === 'Question Banks')

  const materialTypes = [
    { id: 'slide', label: 'Slides', icon: Box },
    { id: 'note', label: 'Notes', icon: FileText },
    { id: 'assignment', label: 'Assignments', icon: FileText },
    { id: 'lecture', label: 'Lectures', icon: Video },
    { id: 'code', label: 'Code', icon: Code },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'question', label: 'Questions', icon: HelpCircle },
  ]

  const filterMaterials = useCallback(
    (materials: StudyMaterial[]) =>
      materials.filter((material) => {
        const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesType = !selectedType || material.type === selectedType
        return matchesSearch && matchesType
      }),
    [searchQuery, selectedType]
  )

  const filteredTheorySubjects = useMemo(() => {
    return theorySubjects
      .map((subject) => ({ ...subject, materials: filterMaterials(subject.materials) }))
      .filter((subject) => subject.materials.length > 0 || (searchQuery === '' && !selectedType))
  }, [theorySubjects, searchQuery, selectedType, filterMaterials])

  const filteredLabSubjects = useMemo(() => {
    return labSubjects
      .map((subject) => ({ ...subject, materials: filterMaterials(subject.materials) }))
      .filter((subject) => subject.materials.length > 0 || (searchQuery === '' && !selectedType))
  }, [labSubjects, searchQuery, selectedType, filterMaterials])

  const filteredQuestionSubjects = useMemo(() => {
    return questionSubjects
      .map((subject) => ({ ...subject, materials: filterMaterials(subject.materials) }))
      .filter((subject) => subject.materials.length > 0 || (searchQuery === '' && !selectedType))
  }, [questionSubjects, searchQuery, selectedType, filterMaterials])

  const organizeMaterials = (materials: StudyMaterial[]) => ({
    slides: materials.filter((material) => material.type === 'slide'),
    notes: materials.filter((material) => material.type === 'note'),
    assignments: materials.filter((material) => material.type === 'assignment'),
    lectures: materials.filter((material) => material.type === 'lecture'),
    code: materials.filter((material) => material.type === 'code'),
    books: materials.filter((material) => material.type === 'books'),
    questions: materials.filter((material) => material.type === 'question'),
  })

  return (
    <div className="page-shell">
      <div className="page-content">
        <nav className="mb-10 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="font-bold" style={{ color: 'var(--muted)' }}>Home</Link>
          <span className="mx-2" style={{ color: 'var(--line-strong)' }}>/</span>
          <Link href="/semesters" className="font-bold" style={{ color: 'var(--muted)' }}>Resources</Link>
          <span className="mx-2" style={{ color: 'var(--line-strong)' }}>/</span>
          <span className="font-bold" style={{ color: 'var(--foreground)' }}>{semester.name}</span>
        </nav>

        <header className="mb-12">
          <div className="eyebrow mb-5">
            <BookOpen className="h-4 w-4" />
            Semester Archive
          </div>
          <h1 className="section-title">{semester.name}</h1>
          <p className="section-copy mt-5 max-w-3xl">{semester.description}</p>
        </header>

        <div className="sticky top-24 z-30 mb-16 rounded-lg border p-4 shadow-[var(--shadow-soft)]" style={{ borderColor: 'var(--line)', background: 'var(--nav-bg)', backdropFilter: 'blur(18px)' }}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: 'var(--muted)' }} />
              <input
                type="text"
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="form-field pl-12"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {materialTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                    className={selectedType === type.id ? 'btn-primary min-h-0 px-3 py-2 text-sm' : 'btn-outline min-h-0 px-3 py-2 text-sm'}
                  >
                    <Icon className="h-4 w-4" />
                    {type.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {filteredTheorySubjects.length > 0 && (
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen className="h-6 w-6" style={{ color: 'var(--accent)' }} />
              <h2 className="text-3xl font-black" style={{ color: 'var(--foreground)' }}>Theory Courses</h2>
            </div>

            <div className="space-y-8">
              {filteredTheorySubjects.map((subject) => {
                const organized = organizeMaterials(subject.materials)
                return (
                  <motion.article layout key={subject.id} className="surface-card p-6">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <span className="stamp mb-3">{subject.code}</span>
                        <h3 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>{subject.name}</h3>
                      </div>
                      <div className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                        <Info className="h-4 w-4" />
                        <span>{subject.credits} credits / {subject.materials.length} items</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {Object.entries(organized).map(([type, items]) =>
                        items.length > 0 ? (
                          <div key={type} className="space-y-3">
                            <h4 className="mono-label">{type}</h4>
                            {items.map((item) => (
                              <motion.div layout key={item.id}>
                                <MaterialCard material={item} />
                              </motion.div>
                            ))}
                          </div>
                        ) : null
                      )}
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </section>
        )}

        {filteredLabSubjects.length > 0 && (
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <Code className="h-6 w-6" style={{ color: 'var(--accent-secondary)' }} />
              <h2 className="text-3xl font-black" style={{ color: 'var(--foreground)' }}>Lab Courses</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {filteredLabSubjects.map((subject) => (
                <motion.article layout key={subject.id} className="surface-card p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <span className="stamp mb-3">{subject.code}</span>
                      <h3 className="text-xl font-black" style={{ color: 'var(--foreground)' }}>{subject.name}</h3>
                    </div>
                    <span className="mono-label">{subject.credits} credit</span>
                  </div>
                  <div className="space-y-3">
                    {subject.materials.map((item) => (
                      <motion.div layout key={item.id}>
                        <MaterialCard material={item} />
                      </motion.div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {filteredQuestionSubjects.length > 0 && (
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-3">
              <HelpCircle className="h-6 w-6" style={{ color: 'var(--accent)' }} />
              <h2 className="text-3xl font-black" style={{ color: 'var(--foreground)' }}>Question Banks</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {filteredQuestionSubjects.map((subject) => (
                <motion.article layout key={subject.id} className="surface-card p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <span className="stamp mb-3">{subject.code}</span>
                      <h3 className="text-xl font-black" style={{ color: 'var(--foreground)' }}>{subject.name}</h3>
                    </div>
                    <span className="mono-label">{subject.materials.length} items</span>
                  </div>
                  <div className="space-y-3">
                    {subject.materials.map((item) => (
                      <motion.div layout key={item.id}>
                        <MaterialCard material={item} />
                      </motion.div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {filteredTheorySubjects.length === 0 && filteredLabSubjects.length === 0 && filteredQuestionSubjects.length === 0 && (
          <div className="surface-card py-24 text-center">
            <h3 className="mb-2 text-2xl font-black" style={{ color: 'var(--foreground)' }}>No materials found</h3>
            <p className="section-copy">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
