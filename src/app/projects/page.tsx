import Link from 'next/link'
import { projectSemesters } from '@/data/projects'

export default function ProjectsPage() {
  const totalProjects = projectSemesters.reduce((acc, semester) => 
    acc + semester.courses.reduce((courseAcc, course) => courseAcc + course.projects.length, 0), 0
  );

  const totalCourses = projectSemesters.reduce((acc, semester) => 
    acc + semester.courses.filter(course => course.projects.length > 0).length, 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs with tech-themed colors */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-violet-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-400/6 rounded-full blur-2xl"></div>
        
        {/* Flowing lines */}
        <div className="absolute top-20 left-1/2 w-px h-32 bg-gradient-to-b from-violet-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex mb-12 opacity-0 animate-fade-in-up" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="flex items-center text-slate-400 hover:text-violet-300 transition-colors duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-slate-300 md:ml-2 font-medium">Academic Projects</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-20 text-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-400/30 text-violet-300 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span>Academic</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Academic Projects
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover our comprehensive collection of academic projects showcasing innovative solutions, cutting-edge technologies, and practical implementations across multiple semesters.
          </p>
          
          {/* Enhanced Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-slate-600/50 hover:border-violet-400/50 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <div className="text-4xl font-bold text-white mb-2">{totalProjects}</div>
              <div className="text-slate-300 font-semibold text-lg mb-1">Total Projects</div>
              <div className="text-sm text-violet-400 font-medium">Ready to Explore</div>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-slate-600/50 hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
              <div className="text-4xl font-bold text-white mb-2">{totalCourses}</div>
              <div className="text-slate-300 font-semibold text-lg mb-1">Active Courses</div>
              <div className="text-sm text-purple-400 font-medium">With Projects</div>
            </div>
          </div>
        </div>

        {/* Semester-wise Course Cards */}
        {projectSemesters.map((semester, semesterIndex) => (
          <div key={semester.id} className="mb-28">
            <div className="text-center mb-20 opacity-0 animate-fade-in-up" style={{animationDelay: `${semesterIndex * 0.2}s`, animationFillMode: 'forwards'}}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl mb-6 shadow-xl">
                <span className="text-2xl text-white">📖</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">
                {semester.name}
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-6"></div>
              
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {semester.description}
              </p>

            </div>

            {/* Enhanced Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {semester.courses
                .filter(course => course.projects.length > 0)
                .map((course, courseIndex) => (
                    <div 
                      key={course.id}
                      className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-violet-400/50 hover:-translate-y-1 transition-all duration-300 group opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${(semesterIndex * 0.2) + (courseIndex * 0.1)}s`, animationFillMode: 'forwards' }}
                    >
                      {/* Enhanced Course Header */}
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <span className="text-2xl text-white">💻</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors duration-300">
                          {course.name}
                        </h3>
                        <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
                          <span className="bg-violet-500/20 text-violet-300 border border-violet-400/30 px-3 py-1 rounded-lg text-sm font-medium">
                            {course.code}
                          </span>
                          <span className="bg-purple-500/20 text-purple-300 border border-purple-400/30 px-3 py-1 rounded-lg text-sm font-medium">
                            {course.credits} Credits
                          </span>
                        </div>
                      </div>

                      {/* Enhanced Project Statistics */}
                      <div className="mb-6 bg-slate-700/40 rounded-lg p-4 border border-slate-600/30">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-3">
                            <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                              {course.projects.length}
                            </div>
                            <div className="ml-2 text-xl">🚀</div>
                          </div>
                          <div className="text-slate-300 font-medium text-sm mb-1">
                            {course.projects.length === 1 ? 'Project Available' : 'Projects Available'}
                          </div>
                          <div className="text-xs text-violet-400 font-medium px-2 py-1 bg-violet-500/10 rounded-full">
                            Ready to Explore
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Technologies Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mr-2"></span>
                          Tech Stack Preview
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {Array.from(new Set(course.projects.flatMap(p => p.technologies)))
                            .slice(0, 4)
                            .map((tech, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-slate-700/50 text-slate-300 border border-slate-600/50 rounded-md text-xs font-medium hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-400/50 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {Array.from(new Set(course.projects.flatMap(p => p.technologies))).length > 4 && (
                            <span className="px-2 py-1 text-xs text-slate-400 bg-slate-700/30 border border-slate-600/30 rounded-md font-medium">
                              +{Array.from(new Set(course.projects.flatMap(p => p.technologies))).length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Enhanced View Details Button */}
                      <Link
                        href={`/projects/course/${course.id}`}
                        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group-hover:scale-105 flex items-center justify-center"
                      >
                        <span className="mr-2">✨</span>
                        <span>Explore Projects</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  ))}
            </div>
          </div>
        ))}

        {/* Enhanced Empty State */}
        {projectSemesters.every(semester => 
          semester.courses.every(course => course.projects.length === 0)
        ) && (
          <div className="text-center py-32">
            <div className="w-32 h-32 bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <span className="text-6xl">🚀</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Exciting Projects Coming Soon
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We&apos;re crafting innovative academic projects that will showcase cutting-edge technologies and breakthrough solutions across multiple semesters.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="mr-2">🔔</span>
              Stay Tuned for Updates
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
