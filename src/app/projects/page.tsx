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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-12" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-violet-600 transition-colors duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-gray-500 md:ml-2 font-medium">Academic Projects</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-20 text-center relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
            <div className="absolute top-16 right-1/4 w-80 h-80 bg-gradient-to-bl from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-violet-200/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            {/* Icon */}
            <div className="w-28 h-28 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="text-5xl text-white">🚀</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Academic Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover our comprehensive collection of academic projects showcasing innovative solutions, 
              cutting-edge technologies, and practical implementations across multiple semesters.
            </p>
            
            {/* Enhanced Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-violet-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-100/50 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-50/60 to-transparent rounded-full transform -translate-x-6 translate-y-6"></div>
                <div className="relative">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <div className="text-5xl font-bold text-gray-800 mb-3">{totalProjects}</div>
                  <div className="text-gray-600 font-semibold text-xl mb-2">Total Projects</div>
                  <div className="text-sm text-violet-600 font-medium">Ready to Explore</div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-purple-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-50/60 to-transparent rounded-full transform -translate-x-6 translate-y-6"></div>
                <div className="relative">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📚</div>
                  <div className="text-5xl font-bold text-gray-800 mb-3">{totalCourses}</div>
                  <div className="text-gray-600 font-semibold text-xl mb-2">Active Courses</div>
                  <div className="text-sm text-purple-600 font-medium">With Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Semester-wise Course Cards */}
        {projectSemesters.map((semester, semesterIndex) => (
          <div key={semester.id} className="mb-28">
            <div className="text-center mb-20 relative">
              {/* Enhanced Semester Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className={`absolute top-0 ${semesterIndex % 2 === 0 ? 'left-1/4' : 'right-1/4'} w-80 h-80 bg-gradient-to-br from-violet-100/30 to-purple-100/30 rounded-full blur-3xl`}></div>
                <div className={`absolute -top-10 ${semesterIndex % 2 === 0 ? 'right-1/3' : 'left-1/3'} w-64 h-64 bg-gradient-to-bl from-indigo-100/20 to-blue-100/20 rounded-full blur-2xl`}></div>
              </div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500">
                  <span className="text-3xl text-white">📖</span>
                </div>
                
                <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  {semester.name}
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed mb-10">
                  {semester.description}
                </p>
                
                {/* Enhanced Semester Statistics */}
                <div className="flex justify-center mt-10 space-x-12">
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-violet-200/50">
                    <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      {semester.courses.filter(c => c.projects.length > 0).length}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">Courses Available</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-200/50">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                      {semester.courses.reduce((acc, course) => acc + course.projects.length, 0)}
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">Projects Ready</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {semester.courses
                .filter(course => course.projects.length > 0)
                .map((course, courseIndex) => (
                    <div 
                      key={course.id}
                      className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-[1.05] transition-all duration-700 group relative overflow-hidden transform hover:-translate-y-2"
                      style={{ animationDelay: `${courseIndex * 0.15}s` }}
                    >
                      {/* Enhanced Card Background Pattern */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-violet-50/80 via-purple-50/60 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-50/60 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-700"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-50/20 to-purple-50/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      <div className="relative z-10">
                        {/* Enhanced Course Header */}
                        <div className="text-center mb-8">
                          <div className="w-28 h-28 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl">
                            <span className="text-5xl text-white">💻</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-violet-700 transition-colors duration-300">
                            {course.name}
                          </h3>
                          <div className="flex items-center justify-center flex-wrap gap-3 mb-4">
                            <span className="bg-gradient-to-r from-violet-100 to-violet-200 text-violet-800 px-4 py-2 rounded-2xl text-sm font-bold border border-violet-300/50 shadow-md">
                              {course.code}
                            </span>
                            <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-4 py-2 rounded-2xl text-sm font-bold border border-purple-300/50 shadow-md">
                              {course.credits} Credits
                            </span>
                          </div>
                        </div>

                        {/* Enhanced Project Statistics */}
                        <div className="mb-8 bg-gradient-to-r from-violet-50/80 via-purple-50/60 to-indigo-50/80 rounded-3xl p-6 border border-violet-100/50 group-hover:from-violet-100/80 group-hover:via-purple-100/60 group-hover:to-indigo-100/80 transition-all duration-500">
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-4">
                              <div className="text-6xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                {course.projects.length}
                              </div>
                              <div className="ml-4 text-3xl group-hover:animate-bounce">🚀</div>
                            </div>
                            <div className="text-gray-800 font-bold text-lg mb-2">
                              {course.projects.length === 1 ? 'Project Available' : 'Projects Available'}
                            </div>
                            <div className="text-sm text-violet-600 font-medium px-3 py-1 bg-violet-100/50 rounded-full">
                              Ready to Explore
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Technologies Preview */}
                        <div className="mb-8">
                          <h4 className="text-base font-bold text-gray-800 mb-4 flex items-center">
                            <span className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                            Tech Stack Preview
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Array.from(new Set(course.projects.flatMap(p => p.technologies)))
                              .slice(0, 4)
                              .map((tech, index) => (
                              <span 
                                key={index}
                                className="px-3 py-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 rounded-xl text-sm font-bold border border-violet-200/50 hover:scale-110 hover:from-violet-200 hover:to-purple-200 transition-all duration-300 shadow-sm"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                {tech}
                              </span>
                            ))}
                            {Array.from(new Set(course.projects.flatMap(p => p.technologies))).length > 4 && (
                              <span className="px-3 py-2 text-sm text-gray-600 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-semibold border border-gray-300/50 shadow-sm">
                                +{Array.from(new Set(course.projects.flatMap(p => p.technologies))).length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Enhanced View Details Button */}
                        <Link
                          href={`/projects/course/${course.id}`}
                          className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-4 px-8 rounded-3xl font-bold text-lg text-center block hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 group-hover:scale-105 relative overflow-hidden"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                          <span className="relative flex items-center justify-center">
                            <span className="mr-2">✨</span>
                            <span>Explore Projects</span>
                            <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Enhanced Empty State */}
        {projectSemesters.every(semester => 
          semester.courses.every(course => course.projects.length === 0)
        ) && (
          <div className="text-center py-32 relative">
            {/* Background decoration for empty state */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl animate-pulse">
                <span className="text-9xl">🚀</span>
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Exciting Projects Coming Soon
              </h3>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
                We&apos;re crafting innovative academic projects that will showcase cutting-edge technologies 
                and breakthrough solutions across multiple semesters.
              </p>
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="mr-2">🔔</span>
                Stay Tuned for Updates
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
