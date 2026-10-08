import {
  BookOpen,
  Code,
  FileQuestion,
  FileText,
  GraduationCap,
  Layers,
  NotebookPen,
} from 'lucide-react'
import { type StudyMaterial } from '@/data/studyMaterials'
import CardArrow from './CardArrow'

const materialTypeConfig = {
  lecture: { icon: GraduationCap, label: 'Lecture' },
  slide: { icon: Layers, label: 'Slides' },
  note: { icon: NotebookPen, label: 'Notes' },
  assignment: { icon: FileText, label: 'Assignment' },
  code: { icon: Code, label: 'Code' },
  books: { icon: BookOpen, label: 'Book' },
  question: { icon: FileQuestion, label: 'Questions' },
  other: { icon: FileText, label: 'Resource' },
}

export default function MaterialCard({
  material,
}: {
  material: StudyMaterial
}) {
  const { icon: Icon, label } =
    materialTypeConfig[material.type] || materialTypeConfig.other
  const date = new Date(material.uploadDate)
  const formattedDate = Number.isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      })
  const available = Boolean(material.viewUrl && material.viewUrl !== '#')
  const content = (
    <>
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="card-icon h-10 w-10 rounded-[10px]">
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </span>
        <span className="card-tag">{label}</span>
      </div>
      <h4 className="text-[15px] font-semibold leading-6 tracking-[-.015em]">
        {material.title}
      </h4>
      <div className="mt-auto flex min-h-9 items-center justify-between gap-3 pt-3">
        <span className="text-[11px] muted-text">
          {available
            ? formattedDate && (
                <time dateTime={material.uploadDate}>{formattedDate}</time>
              )
            : 'Link coming soon'}
        </span>
        {available && <CardArrow />}
      </div>
    </>
  )
  const className = `surface-card ${available ? 'card-interactive group' : ''} flex h-full flex-col p-5`
  return available ? (
    <a
      href={material.viewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Open ${material.title} in a new tab`}
    >
      {content}
    </a>
  ) : (
    <article className={className}>{content}</article>
  )
}
