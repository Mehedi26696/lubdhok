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
        <div className="mb-16 text-center relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-bl from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Academic Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore our semester-wise academic projects showcasing practical implementation of programming concepts, 
              algorithms, and software engineering principles across different courses.
            </p>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-violet-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{totalProjects}</div>
                <div className="text-gray-600 font-medium">Total Projects</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{totalCourses}</div>
                <div className="text-gray-600 font-medium">Active Courses</div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{projectSemesters.length}</div>
                <div className="text-gray-600 font-medium">Semesters</div>
              </div>
            </div>
          </div>
        </div>

        {/* Semester-wise Course Cards */}
        {projectSemesters.map((semester) => (
          <div key={semester.id} className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {semester.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {semester.description}
              </p>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {semester.courses
                .filter(course => course.projects.length > 0)
                .map((course) => (
                    <div 
                      key={course.id}
                      className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group"
                    >
                      {/* Course Header */}
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                          <span className="text-3xl text-white">�</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {course.name}
                        </h3>
                        <p className="text-violet-600 font-semibold text-sm">
                          {course.code} • {course.credits} Credits
                        </p>
                      </div>

                      {/* Project Statistics */}
                      <div className="mb-6">
                        <div className="text-center mb-4">
                          <div className="text-4xl font-bold text-gray-800 mb-1">
                            {course.projects.length}
                          </div>
                          <div className="text-gray-600 text-sm font-medium">
                            Total Projects
                          </div>
                        </div>
                      </div>

                      {/* Technologies Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {Array.from(new Set(course.projects.flatMap(p => p.technologies)))
                            .slice(0, 4)
                            .map((tech, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium border border-violet-200/50"
                            >
                              {tech}
                            </span>
                          ))}
                          {Array.from(new Set(course.projects.flatMap(p => p.technologies))).length > 4 && (
                            <span className="px-2 py-1 text-xs text-gray-500">
                              +{Array.from(new Set(course.projects.flatMap(p => p.technologies))).length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <Link
                        href={`/projects/course/${course.id}`}
                        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
            </div>
          </div>
        ))}

        {/* Empty State */}
        {projectSemesters.every(semester => 
          semester.courses.every(course => course.projects.length === 0)
        ) && (
          <div className="text-center py-24">
            <div className="w-40 h-40 bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl">
              <span className="text-8xl">🚀</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Projects Coming Soon
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We&apos;re working on exciting academic projects across different semesters. 
              Check back soon to explore our innovative solutions and implementations.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
