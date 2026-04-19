'use client'

import { semesters } from '@/data/studyMaterials'
import { projectSemesters } from '@/data/projects'
import { motion } from 'framer-motion'
import { Award, BookOpen, Code, FileText, Layout } from 'lucide-react'

export default function StatsSection() {
  const creditsCompleted = semesters.reduce(
    (acc, semester) =>
      acc + semester.subjects.reduce((subAcc, subject) => subAcc + subject.credits, 0),
    0
  )

  const totalMaterials = semesters.reduce(
    (acc, semester) => acc + semester.subjects.reduce((subAcc, subject) => subAcc + subject.materials.length, 0),
    0
  )

  const theorySubjects = semesters.reduce(
    (acc, semester) => acc + semester.subjects.filter((subject) => subject.type === 'theory').length,
    0
  )
  const labSubjects = semesters.reduce(
    (acc, semester) => acc + semester.subjects.filter((subject) => subject.type === 'lab').length,
    0
  )

  const totalProjects = projectSemesters.reduce(
    (acc, semester) => acc + semester.courses.reduce((courseAcc, course) => courseAcc + course.projects.length, 0),
    0
  )

  const stats = [
    { code: '01', label: 'Credits Logged', value: creditsCompleted.toFixed(1), note: 'Completed course load', icon: Award },
    { code: '02', label: 'Study Files', value: totalMaterials, note: 'Notes, slides, labs', icon: FileText },
    { code: '03', label: 'Project Builds', value: totalProjects, note: 'Coursework records', icon: Code },
    { code: '04', label: 'Courses Covered', value: theorySubjects + labSubjects, note: `${theorySubjects} theory / ${labSubjects} lab`, icon: BookOpen },
  ]

  return (
    <section id="statistics" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-5"
            >
              <Layout className="h-4 w-4" />
              Archive Totals
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="section-title"
            >
              Numbers that keep the archive honest.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="surface-card p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="mono-label">Course Split</span>
              <span className="text-4xl font-black leading-none" style={{ color: 'var(--accent)' }}>
                {theorySubjects + labSubjects}
              </span>
            </div>
            <div className="space-y-3">
              {[
                ['Theory', theorySubjects],
                ['Lab', labSubjects],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 border-t pt-3" style={{ borderColor: 'var(--line)' }}>
                  <span className="mono-label">{label}</span>
                  <span className="text-sm font-black" style={{ color: 'var(--foreground)' }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="surface-card grid min-h-[230px] grid-rows-[auto_1fr_auto] overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 border-b px-5 py-4" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
                <span className="mono-label">{stat.code}</span>
                <stat.icon className="h-6 w-6" style={{ color: 'var(--accent)' }} />
              </div>

              <div className="flex items-center px-5 py-6">
                <div className="text-5xl font-black leading-none" style={{ color: 'var(--foreground)' }}>
                  {stat.value}
                </div>
              </div>

              <div className="border-t px-5 py-4" style={{ borderColor: 'var(--line)' }}>
                <div className="mono-label mb-2">{stat.label}</div>
                <div className="text-sm font-bold" style={{ color: 'var(--muted)' }}>
                  {stat.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
