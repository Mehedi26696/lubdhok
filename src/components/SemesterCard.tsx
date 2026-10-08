import Link from 'next/link'
import { BookOpen, FileText } from 'lucide-react'
import { type Semester } from '@/data/studyMaterials'
import CardArrow from './CardArrow'

export default function SemesterCard({ semester }: { semester: Semester }) {
  const subjects = semester.subjects.filter(
    (subject) =>
      !subject.code.startsWith('QB-') && subject.name !== 'Question Banks'
  )
  const count = semester.subjects.reduce(
    (sum, subject) => sum + subject.materials.length,
    0
  )
  const theoryCount = subjects.filter(
    (subject) => subject.type === 'theory'
  ).length
  const labCount = subjects.filter((subject) => subject.type === 'lab').length
  const preview = subjects.slice(0, 6)

  return (
    <Link
      href={`/semester/${semester.id}`}
      className="surface-card card-interactive group flex h-full flex-col p-6 sm:p-7"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="card-icon">
          <BookOpen className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="text-xs muted-text">{subjects.length} courses</span>
      </div>
      <h2 className="text-[1.65rem] font-semibold tracking-[-.035em]">
        {semester.name}
      </h2>
      <p className="mt-4 text-xs muted-text">
        {theoryCount} theory{' '}
        <span className="mx-1.5 text-[var(--line-strong)]">/</span> {labCount}{' '}
        lab
      </p>
      <div
        className="mb-6 mt-5 flex flex-wrap gap-1.5"
        aria-label="Course preview"
      >
        {preview.map((subject) => (
          <span key={subject.id} className="card-tag font-mono">
            {subject.code}
          </span>
        ))}
        {subjects.length > preview.length && (
          <span className="card-tag">
            +{subjects.length - preview.length} more
          </span>
        )}
      </div>
      <div className="card-footer">
        <span className="inline-flex items-center gap-2 text-xs muted-text">
          <FileText className="h-3.5 w-3.5" />
          <span>
            <strong className="font-semibold text-[var(--foreground)]">
              {count}
            </strong>{' '}
            resources
          </span>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-xs font-medium text-[var(--accent)]">
            Explore
          </span>
          <CardArrow />
        </span>
      </div>
    </Link>
  )
}
