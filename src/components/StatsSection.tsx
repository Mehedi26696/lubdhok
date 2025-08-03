import { semesters } from '@/data/studyMaterials'

export default function StatsSection() {
  const totalSemesters = semesters.length
  const totalSubjects = semesters.reduce((acc, semester) => acc + semester.subjects.length, 0)
  const totalMaterials = semesters.reduce((acc, semester) => 
    acc + semester.subjects.reduce((subAcc, subject) => subAcc + subject.materials.length, 0), 0
  )

  const theorySubjects = semesters.reduce((acc, semester) => 
    acc + semester.subjects.filter(subject => subject.type === 'theory').length, 0
  )
  const labSubjects = semesters.reduce((acc, semester) => 
    acc + semester.subjects.filter(subject => subject.type === 'lab').length, 0
  )

  const materialsByType = semesters.reduce((acc, semester) => {
    semester.subjects.forEach(subject => {
      subject.materials.forEach(material => {
        acc[material.type] = (acc[material.type] || 0) + 1
      })
    })
    return acc
  }, {} as Record<string, number>)

  const stats = [
    {
      label: 'Semesters',
      value: totalSemesters,
      icon: '📅',
      gradient: 'from-violet-500 to-purple-600',
      bgGradient: 'from-violet-50 to-purple-50'
    },
    {
      label: 'Theory Courses',
      value: theorySubjects,
      icon: '📚',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      label: 'Lab Courses',
      value: labSubjects,
      icon: '�',
      gradient: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50'
    },
    {
      label: 'Study Materials',
      value: totalMaterials,
      icon: '�',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Platform Statistics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive academic resources collected and organized for the Lubdhok batch community
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-105 overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/30 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
              
              {/* Icon with gradient background */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <span className="text-3xl filter drop-shadow-sm">{stat.icon}</span>
              </div>

              {/* Value */}
              <div className="text-4xl font-extrabold text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-gray-700">
                {stat.label}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Additional stats breakdown */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-violet-200/50">
            <div className="text-2xl font-bold text-violet-600 mb-1">{materialsByType.slide || 0}</div>
            <div className="text-sm text-gray-600">Slides</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-200/50">
            <div className="text-2xl font-bold text-purple-600 mb-1">{materialsByType.note || 0}</div>
            <div className="text-sm text-gray-600">Notes</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-200/50">
            <div className="text-2xl font-bold text-orange-600 mb-1">{materialsByType.assignment || 0}</div>
            <div className="text-sm text-gray-600">Assignments</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-200/50">
            <div className="text-2xl font-bold text-teal-600 mb-1">{materialsByType.books || 0}</div>
            <div className="text-sm text-gray-600">Books</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
