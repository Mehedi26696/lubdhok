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
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-400/6 rounded-full blur-2xl"></div>
        
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-teal-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Breadcrumb */}
        <nav className="flex mb-12" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300">
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

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Academic</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6">
            Academic Projects
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of academic projects showcasing innovative solutions, 
            cutting-edge technologies, and practical implementations across multiple semesters.
          </p>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{totalProjects}</div>
              <div className="text-sm text-slate-400 font-medium">Total Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{totalCourses}</div>
              <div className="text-sm text-slate-400 font-medium">Active Courses</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{projectSemesters.length}</div>
              <div className="text-sm text-slate-400 font-medium">Semesters</div>
            </div>
          </div>
        </div>

        {/* Semester-wise Course Cards */}
        {projectSemesters.map((semester, semesterIndex) => (
          <div key={semester.id} className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>{semester.name}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-4">
                {semester.name}
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                {semester.description}
              </p>
              
              {/* Semester Statistics */}
              <div className="flex justify-center gap-6">
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                  <div className="text-xl font-bold text-white">
                    {semester.courses.filter(c => c.projects.length > 0).length}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Courses</div>
                </div>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                  <div className="text-xl font-bold text-white">
                    {semester.courses.reduce((acc, course) => acc + course.projects.length, 0)}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Projects</div>
                </div>
              </div>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {semester.courses
                .filter(course => course.projects.length > 0)
                .map((course, courseIndex) => (
                    <div 
                      key={course.id}
                      className="group bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden opacity-0 animate-fade-in-up"
                      style={{animationDelay: `${courseIndex * 100}ms`, animationFillMode: 'forwards'}}
                    >
                      <div className="p-6">
                        {/* Course Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                              {course.name}
                            </h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30">
                                {course.code}
                              </span>
                              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30">
                                {course.credits} Credits
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30">
                            <span className="text-xl">💻</span>
                          </div>
                        </div>

                        {/* Project Count */}
                        <div className="bg-slate-700/50 rounded-lg p-4 mb-4 border border-slate-600/50">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-white mb-1">{course.projects.length}</div>
                              <div className="text-sm text-slate-400">
                                {course.projects.length === 1 ? 'Project Available' : 'Projects Available'}
                              </div>
                            </div>
                            <div className="text-2xl">🚀</div>
                          </div>
                        </div>

                        {/* Technologies Preview */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Array.from(new Set(course.projects.flatMap(p => p.technologies)))
                              .slice(0, 3)
                              .map((tech, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium border border-slate-600/50 hover:bg-slate-600/50 hover:text-cyan-300 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                            {Array.from(new Set(course.projects.flatMap(p => p.technologies))).length > 3 && (
                              <span className="px-2 py-1 text-xs text-slate-500 bg-slate-700/30 rounded font-medium border border-slate-600/30">
                                +{Array.from(new Set(course.projects.flatMap(p => p.technologies))).length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* View Details Button */}
                        <Link
                          href={`/projects/course/${course.id}`}
                          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                        >
                          <span className="flex items-center justify-center">
                            <span>Explore Projects</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        ))}

        {/* Empty State */}
        {projectSemesters.every(semester => 
          semester.courses.every(course => course.projects.length === 0)
        ) && (
          <div className="text-center py-32">
            <div className="w-32 h-32 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-700/50">
              <span className="text-6xl">🚀</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Exciting Projects Coming Soon
            </h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              We&apos;re crafting innovative academic projects that will showcase cutting-edge technologies 
              and breakthrough solutions across multiple semesters.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
              <span className="mr-2">🔔</span>
              Stay Tuned for Updates
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
