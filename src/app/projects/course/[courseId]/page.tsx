import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projectSemesters, type AcademicProject, type ProjectCourse, type ProjectSemester, type TeamMember } from '@/data/projects'

interface CourseProjectPageProps {
  params: Promise<{
    courseId: string
  }>
}

export default async function CourseProjectPage({ params }: CourseProjectPageProps) {
  const { courseId } = await params

  // Find the course and semester
  let course: ProjectCourse | null = null
  let semester: ProjectSemester | null = null

  for (const sem of projectSemesters) {
    const foundCourse = sem.courses.find(c => c.id === courseId)
    if (foundCourse) {
      course = foundCourse
      semester = sem
      break
    }
  }

  if (!course || !semester || course.projects.length === 0) {
    notFound()
  }

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
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/projects" className="ml-1 text-gray-600 hover:text-violet-600 transition-colors duration-300 md:ml-2 font-medium">
                  Academic Projects
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-gray-500 md:ml-2 font-medium">{course.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Enhanced Course Header */}
        <div className="mb-20 text-center relative">
          {/* Enhanced Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
            <div className="absolute top-16 right-1/4 w-80 h-80 bg-gradient-to-bl from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-violet-200/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="text-6xl text-white">📚</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              {course.name}
            </h1>
            
            <div className="flex items-center justify-center flex-wrap gap-4 mb-10">
              <span className="bg-white/80 backdrop-blur-sm text-violet-700 px-6 py-3 rounded-2xl font-bold border border-violet-200/50 shadow-lg">
                {course.code}
              </span>
              <span className="bg-white/80 backdrop-blur-sm text-purple-700 px-6 py-3 rounded-2xl font-bold border border-purple-200/50 shadow-lg">
                {course.credits} Credits
              </span>
              <span className="bg-white/80 backdrop-blur-sm text-indigo-700 px-6 py-3 rounded-2xl font-bold border border-indigo-200/50 shadow-lg">
                {semester.name}
              </span>
            </div>
            
            {/* Enhanced Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-violet-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-100/50 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{course.projects.length}</div>
                  <div className="text-gray-600 font-semibold text-lg">Total Projects</div>
     
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-purple-200/50 hover:shadow-3xl hover:scale-105 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{Array.from(new Set(course.projects.flatMap((p: AcademicProject) => p.technologies))).length}</div>
                  <div className="text-gray-600 font-semibold text-lg">Technologies</div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="mb-20">
          <div className="text-center mb-16 relative">
            {/* Section background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-violet-100/30 to-purple-100/30 rounded-full blur-2xl"></div>
            </div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-2xl text-white">💎</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Course Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Discover innovative solutions and cutting-edge implementations developed as part of this comprehensive course curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {course.projects.map((project: AcademicProject, index: number) => (
              <div 
                key={project.id}
                className="bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-[1.02] transition-all duration-700 group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card Background Pattern */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-violet-50/80 via-purple-50/60 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-50/60 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-110 transition-transform duration-700"></div>
                
                {/* Enhanced Project Cover Image with overlay info */}
                {project.coverImage && (
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded-full text-xs font-bold">
                            {project.courseCode}
                          </span>
                          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-bold">
                            {project.teamMembers.length} Members
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 relative z-10">
                  {/* Enhanced Project Description */}
                  <div className="mb-8">
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced Team Members Section */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-violet-500 rounded-full mr-3"></span>
                      Team Members
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.teamMembers.map((member: TeamMember, i: number) => (
                        <div key={i} className="flex items-center justify-between bg-gradient-to-r from-violet-50/80 to-purple-50/80 rounded-2xl p-4 border border-violet-100/50 hover:from-violet-100/80 hover:to-purple-100/80 transition-all duration-300 group/member">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover/member:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold text-lg">
                                {member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-800 font-bold text-lg">{member.name}</span>
                              <div className="text-sm text-violet-600 font-medium">Team Contributor</div>
                            </div>
                          </div>
                          <a
                            href={`https://github.com/${member.githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                            title={`View ${member.name}'s GitHub Profile`}
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Technologies Section */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 rounded-xl font-bold border border-violet-200/50 hover:from-violet-200 hover:to-purple-200 hover:scale-105 transition-all duration-300 shadow-sm text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-200/50">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 justify-center text-sm"
                      >
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.sourceCodeUrl && (
                      <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 justify-center text-sm"
                      >
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Source Code
                      </a>
                    )}
                    {project.documentationUrl && (
                      <a
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 justify-center text-sm"
                      >
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Docs
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
