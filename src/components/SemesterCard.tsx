import Link from 'next/link'
import { Semester } from '@/data/studyMaterials'

interface SemesterCardProps {
  semester: Semester
}

export default function SemesterCard({ semester }: SemesterCardProps) {
  // Filter out question banks from subject counts
  const regularSubjects = semester.subjects.filter(subject => 
    subject.name !== 'Question Banks' && !subject.code.startsWith('QB-')
  )
  
  const totalMaterials = semester.subjects.reduce((acc, subject) => acc + subject.materials.length, 0)
  const totalSubjects = regularSubjects.length
  const theorySubjects = regularSubjects.filter(subject => subject.type === 'theory').length
  const labSubjects = regularSubjects.filter(subject => subject.type === 'lab').length

  return (
    <div className="group relative bg-slate-800/90 rounded-xl shadow-lg border border-slate-600/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden h-full flex flex-col hover:border-violet-500/60">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5 opacity-60 group-hover:opacity-80 transition-opacity duration-200"></div>
      
      {/* Simple corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-violet-400/10 rounded-full -translate-y-8 translate-x-8"></div>
      
      <div className="relative p-4 sm:p-5 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
            {semester.name}
          </h3>
          <span className="bg-violet-600 text-white text-xs font-medium px-2 sm:px-2.5 py-1 rounded-md shadow-sm ml-2 sm:ml-3 flex-shrink-0">
            {totalSubjects} courses
          </span>
        </div>
        
        <p className="text-slate-300 mb-4 text-sm leading-relaxed line-height-loose">
          {semester.description}
        </p>

        <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div className="bg-slate-700/70 rounded-lg p-2 sm:p-3 flex-1 border border-slate-600/30">
            <div className="flex items-center text-violet-400 mb-1.5">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-medium text-xs">Materials</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-white">{totalMaterials}</p>
          </div>
          
          <div className="bg-slate-700/70 rounded-lg p-2 sm:p-3 flex-1 border border-slate-600/30">
            <div className="flex items-center text-emerald-400 mb-1.5">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium text-xs">Types</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-white">{theorySubjects}T + {labSubjects}L</p>
          </div>
        </div>

        <div className="mb-4 sm:mb-5">
          
          {/* Theory Courses */}
          {theorySubjects > 0 && (
            <div className="mb-3">
              <div className="flex items-center mb-2">
                <span className="text-xs font-medium text-violet-300 bg-violet-600/20 px-2 py-0.5 rounded mr-2">
                  Theory
                </span>
                <span className="text-xs text-slate-400">({theorySubjects} courses)</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {regularSubjects
                  .filter(subject => subject.type === 'theory')
                  .slice(0, 6)
                  .map((subject) => (
                    <span 
                      key={subject.id}
                      className="text-xs px-2 py-1 rounded font-medium bg-violet-600/25 text-violet-200 border border-violet-500/30 hover:bg-violet-600/35 transition-colors duration-150"
                      title={subject.name}
                    >
                      {subject.code}
                    </span>
                  ))}
                {regularSubjects.filter(subject => subject.type === 'theory').length > 6 && (
                  <span className="text-xs px-2 py-1 rounded font-medium bg-slate-600/40 text-slate-400">
                    +{regularSubjects.filter(subject => subject.type === 'theory').length - 6} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Lab Courses */}
          {labSubjects > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <span className="text-xs font-medium text-emerald-300 bg-emerald-600/20 px-2 py-0.5 rounded mr-2">
                  Lab
                </span>
                <span className="text-xs text-slate-400">({labSubjects} courses)</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {regularSubjects
                  .filter(subject => subject.type === 'lab')
                  .slice(0, 4)
                  .map((subject) => (
                    <span 
                      key={subject.id}
                      className="text-xs px-2 py-1 rounded font-medium bg-emerald-600/25 text-emerald-200 border border-emerald-500/30 hover:bg-emerald-600/35 transition-colors duration-150"
                      title={subject.name}
                    >
                      {subject.code}
                    </span>
                  ))}
                {regularSubjects.filter(subject => subject.type === 'lab').length > 4 && (
                  <span className="text-xs px-2 py-1 rounded font-medium bg-slate-600/40 text-slate-400">
                    +{regularSubjects.filter(subject => subject.type === 'lab').length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <Link
            href={`/semester/${semester.id}`}
            className="group/btn inline-flex items-center w-full justify-center px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <span>View Materials</span>
            <svg className="ml-1.5 w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
