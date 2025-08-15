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
    <div className="group relative bg-slate-800/80 rounded-xl shadow-lg border border-slate-700/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden h-full flex flex-col">
      {/* Simple hover overlay */}
      <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      
      <div className="relative p-5 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-white leading-tight">
            {semester.name}
          </h3>
          <span className="bg-violet-600 text-white text-xs font-medium px-2.5 py-1 rounded-md ml-2 flex-shrink-0">
            {totalSubjects} subjects
          </span>
        </div>
        
        <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-2">
          {semester.description}
        </p>

        {/* Simple stats */}
        <div className="flex gap-4 mb-4">
          <div className="flex items-center text-slate-400 text-sm">
            <svg className="w-4 h-4 mr-1.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>{totalMaterials} Materials</span>
          </div>
          
          <div className="flex items-center text-slate-400 text-sm">
            <svg className="w-4 h-4 mr-1.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>{theorySubjects} Theory, {labSubjects} Lab</span>
          </div>
        </div>        
        
        {/* Course codes - simplified */}
        <div className="mb-4">
          <h4 className="text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Courses</h4>
          
          <div className="space-y-2">
            {/* Theory Courses */}
            {theorySubjects > 0 && (
              <div>
                <div className="flex flex-wrap gap-1">
                  {regularSubjects
                    .filter(subject => subject.type === 'theory')
                    .map((subject) => (
                      <span 
                        key={subject.id}
                        className="text-xs px-2 py-1 rounded bg-slate-700/60 text-slate-300 hover:bg-violet-600/20 hover:text-violet-300 transition-colors duration-150"
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
                <div className="flex flex-wrap gap-1">
                  {regularSubjects
                    .filter(subject => subject.type === 'lab')
                    .map((subject) => (
                      <span 
                        key={subject.id}
                        className="text-xs px-2 py-1 rounded bg-slate-700/60 text-slate-300 hover:bg-teal-600/20 hover:text-teal-300 transition-colors duration-150"
                        title={subject.name}
                      >
                        {subject.code}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto">
          <Link
            href={`/semester/${semester.id}`}
            className="inline-flex items-center w-full justify-center px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            View Materials
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
