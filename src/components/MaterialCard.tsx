'use client'

import { StudyMaterial } from '@/data/studyMaterials'

interface MaterialCardProps {
  material: StudyMaterial
}

const materialTypeConfig = {
  lecture: {
    icon: '🎓',
    bgColor: 'bg-slate-700/60',
    borderColor: 'border-slate-600/50',
    textColor: 'text-blue-400',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    label: 'Lecture'
  },
  slide: {
    icon: '📊',
    bgColor: 'bg-slate-700/60',
    borderColor: 'border-slate-600/50',
    textColor: 'text-emerald-400',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
    label: 'Slides'
  },
  note: {
    icon: '📝',
    bgColor: 'bg-slate-700/60',
    borderColor: 'border-slate-600/50',
    textColor: 'text-purple-400',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    label: 'Notes'
  },
  assignment: {
    icon: '📋',
    bgColor: 'bg-slate-700/60',
    borderColor: 'border-slate-600/50',
    textColor: 'text-orange-400',
    buttonColor: 'bg-orange-600 hover:bg-orange-700',
    label: 'Assignment'
  },
  code: {
    icon: '💻',
    bgColor: 'bg-slate-700/60',
    borderColor: 'border-slate-600/50',
    textColor: 'text-cyan-400',
    buttonColor: 'bg-cyan-600 hover:bg-cyan-700',
    label: 'Code'
  },
  books: {
    icon: '📚',
    bgColor: 'bg-slate-700/60',
    borderColor: 'border-slate-600/50',
    textColor: 'text-teal-400',
    buttonColor: 'bg-teal-600 hover:bg-teal-700',
    label: 'Books'
  },
  question: {
    icon: '❓',
    bgColor: 'bg-slate-700/60',
    borderColor: 'border-slate-600/50',
    textColor: 'text-red-400',
    buttonColor: 'bg-red-600 hover:bg-red-700',
    label: 'Questions'
  },
  other: {
    icon: '📄',
    bgColor: 'bg-slate-700/60',
    borderColor: 'border-slate-600/50',
    textColor: 'text-slate-400',
    buttonColor: 'bg-slate-600 hover:bg-slate-700',
    label: 'Other'
  }
}

export default function MaterialCard({ material }: MaterialCardProps) {
  const config = materialTypeConfig[material.type] || materialTypeConfig.other

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const handleAction = (url: string | undefined) => {
    if (url && url !== '#') {
      window.open(url, '_blank')
    } else {
      // For demo purposes, show an alert
      alert('This is a placeholder link. In a real implementation, this would link to the actual file.')
    }
  }

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-lg p-4 hover:bg-slate-700/80 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{config.icon}</span>
          <span className={`${config.textColor} text-xs font-medium px-2 py-1 rounded-md bg-slate-800/50`}>
            {config.label}
          </span>
        </div>
        <div className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-md">
          {formatDate(material.uploadDate)}
        </div>
      </div>

      <h3 className="font-semibold text-white mb-2 text-sm leading-tight line-clamp-2">
        {material.title}
      </h3>

      <p className="text-slate-300 mb-4 line-clamp-2 leading-relaxed text-xs">
        {material.description}
      </p>

      <div className="flex justify-center">
        {material.viewUrl && (
          <button
            onClick={() => handleAction(material.viewUrl)}
            className={`inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white ${config.buttonColor} rounded-md transition-all duration-200 hover:-translate-y-0.5`}
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View
          </button>
        )}
      </div>
    </div>
  )
}
