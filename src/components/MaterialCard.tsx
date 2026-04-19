'use client'

import {
  BookOpen,
  Code,
  Eye,
  FileQuestion,
  FileText,
  GraduationCap,
  Layers,
  NotebookPen,
} from 'lucide-react'
import { StudyMaterial } from '@/data/studyMaterials'

interface MaterialCardProps {
  material: StudyMaterial
}

const materialTypeConfig = {
  lecture: { icon: GraduationCap, label: 'Lecture', color: 'var(--accent-secondary)' },
  slide: { icon: Layers, label: 'Slides', color: 'var(--accent-tertiary)' },
  note: { icon: NotebookPen, label: 'Notes', color: 'var(--accent)' },
  assignment: { icon: FileText, label: 'Assignment', color: 'var(--accent-tertiary)' },
  code: { icon: Code, label: 'Code', color: 'var(--accent-secondary)' },
  books: { icon: BookOpen, label: 'Books', color: 'var(--accent)' },
  question: { icon: FileQuestion, label: 'Questions', color: 'var(--accent)' },
  other: { icon: FileText, label: 'Other', color: 'var(--muted)' },
}

export default function MaterialCard({ material }: MaterialCardProps) {
  const config = materialTypeConfig[material.type] || materialTypeConfig.other
  const Icon = config.icon

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const handleAction = (url: string | undefined) => {
    if (url && url !== '#') {
      window.open(url, '_blank')
    } else {
      alert('This material link has not been added yet.')
    }
  }

  return (
    <article className="surface-card p-5 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', borderRadius: 6 }}>
            <Icon className="h-5 w-5" style={{ color: config.color }} />
          </span>
          <span className="stamp">{config.label}</span>
        </div>
        <time className="mono-label shrink-0">{formatDate(material.uploadDate)}</time>
      </div>

      <h3 className="mb-2 line-clamp-2 text-lg font-black" style={{ color: 'var(--foreground)' }}>
        {material.title}
      </h3>

      <p className="section-copy mb-5 line-clamp-3 text-sm">{material.description}</p>

      {material.viewUrl && (
        <button type="button" onClick={() => handleAction(material.viewUrl)} className="btn-outline w-full">
          <Eye className="h-4 w-4" />
          View Material
        </button>
      )}
    </article>
  )
}
