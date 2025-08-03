'use client'

import { StudyMaterial } from '@/data/studyMaterials'

interface MaterialCardProps {
  material: StudyMaterial
}

const materialTypeConfig = {
  lecture: {
    icon: '🎓',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
    borderColor: 'border-blue-200/50',
    textColor: 'text-blue-700',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    label: 'Lecture'
  },
  slide: {
    icon: '📊',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100/50',
    borderColor: 'border-green-200/50',
    textColor: 'text-green-700',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    label: 'Slides'
  },
  note: {
    icon: '📝',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
    borderColor: 'border-purple-200/50',
    textColor: 'text-purple-700',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    label: 'Notes'
  },
  assignment: {
    icon: '📋',
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100/50',
    borderColor: 'border-orange-200/50',
    textColor: 'text-orange-700',
    buttonColor: 'bg-orange-600 hover:bg-orange-700',
    label: 'Assignment'
  },
  code: {
    icon: '💻',
    bgColor: 'bg-gradient-to-br from-cyan-50 to-cyan-100/50',
    borderColor: 'border-cyan-200/50',
    textColor: 'text-cyan-700',
    buttonColor: 'bg-cyan-600 hover:bg-cyan-700',
    label: 'Code'
  },
  books: {
    icon: '📚',
    bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100/50',
    borderColor: 'border-teal-200/50',
    textColor: 'text-teal-700',
    buttonColor: 'bg-teal-600 hover:bg-teal-700',
    label: 'Books'
  },
  other: {
    icon: '📄',
    bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100/50',
    borderColor: 'border-gray-200/50',
    textColor: 'text-gray-700',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
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
    <div className={`${config.bgColor} ${config.borderColor} border rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <span className="text-3xl mr-3">{config.icon}</span>
          <span className={`${config.textColor} text-sm font-semibold px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm`}>
            {config.label}
          </span>
        </div>
        <div className="text-sm text-gray-500 bg-white/60 px-2 py-1 rounded-lg">
          {formatDate(material.uploadDate)}
        </div>
      </div>

      <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight line-clamp-2">
        {material.title}
      </h3>

      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
        {material.description}
      </p>

      <div className="flex justify-center">
        {material.viewUrl && (
          <button
            onClick={() => handleAction(material.viewUrl)}
            className={`group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white ${config.buttonColor} rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
          >
            <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Material
          </button>
        )}
      </div>
    </div>
  )
}
