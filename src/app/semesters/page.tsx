import { semesters } from '@/data/studyMaterials'
import SemesterCard from '@/components/SemesterCard'

export default function SemestersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-400/6 rounded-full blur-2xl"></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-violet-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-indigo-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Flowing lines */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-violet-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,198,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.06),transparent_50%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-400/30 text-violet-300 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Academic Resources</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent mb-6">
            All Semesters
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive study materials organized by semester. Each collection contains subjects with 
            lectures, slides, notes, and assignments carefully curated by the Lubdhok batch.
          </p>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{semesters.length}</div>
              <div className="text-sm text-slate-400 font-medium">Semesters</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">
                {semesters.reduce((acc, sem) => acc + sem.subjects.filter(s => !s.code.startsWith('QB-')).length, 0)}
              </div>
              <div className="text-sm text-slate-400 font-medium">Subjects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">
                {semesters.reduce((acc, sem) => acc + sem.subjects.reduce((subAcc, sub) => subAcc + sub.materials.length, 0), 0)}
              </div>
              <div className="text-sm text-slate-400 font-medium">Materials</div>
            </div>
          </div>
        </div>

        {/* Semesters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {semesters.map((semester, index) => (
            <div 
              key={semester.id}
              className="opacity-0 animate-fade-in-up"
              style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
            >
              <SemesterCard semester={semester} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {semesters.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-violet-400/30">
              <svg className="w-12 h-12 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No Semesters Available
            </h3>
            <p className="text-slate-400 text-lg max-w-md mx-auto">
              Study materials will be added soon. Check back later for comprehensive academic resources!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
