import Link from 'next/link'
import { Semester } from '@/data/studyMaterials'

interface SemesterCardProps {
  semester: Semester
}

export default function SemesterCard({ semester }: SemesterCardProps) {
  const totalMaterials = semester.subjects.reduce((acc, subject) => acc + subject.materials.length, 0)
  const totalSubjects = semester.subjects.length
  const theorySubjects = semester.subjects.filter(subject => subject.type === 'theory').length
  const labSubjects = semester.subjects.filter(subject => subject.type === 'lab').length

  return (
    <div className="group relative bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-2xl shadow-lg border border-violet-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {semester.name}
          </h3>
          <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {totalSubjects} subjects
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          {semester.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-violet-200/30">
            <div className="flex items-center text-violet-600 mb-1">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-semibold text-xs">Materials</span>
            </div>
            <p className="text-xl font-bold text-gray-800">{totalMaterials}</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-violet-200/30">
            <div className="flex items-center text-purple-600 mb-1">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="font-semibold text-xs">Courses</span>
            </div>
            <p className="text-xl font-bold text-gray-800">{theorySubjects}T + {labSubjects}L</p>
          </div>
        </div>        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-gray-700">Course List</h4>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {totalSubjects} total
            </span>
          </div>
          
          {/* Theory Courses */}
          {theorySubjects > 0 && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2 py-1 rounded-md mr-2">
                  Theory ({theorySubjects})
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {semester.subjects
                  .filter(subject => subject.type === 'theory')
                  .map((subject) => (
                    <span 
                      key={subject.id}
                      className="text-xs px-2.5 py-1 rounded-md font-medium bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border border-violet-200/50 hover:scale-105 transition-transform duration-200"
                      title={subject.name}
                    >
                      {subject.code}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* Lab Courses */}
          {labSubjects > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-md mr-2">
                  Lab ({labSubjects})
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {semester.subjects
                  .filter(subject => subject.type === 'lab')
                  .map((subject) => (
                    <span 
                      key={subject.id}
                      className="text-xs px-2.5 py-1 rounded-md font-medium bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border border-teal-200/50 hover:scale-105 transition-transform duration-200"
                      title={subject.name}
                    >
                      {subject.code}
                    </span>
                  ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={`/semester/${semester.id}`}
            className="group/btn relative inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative">View Materials</span>
            <svg className="relative ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
