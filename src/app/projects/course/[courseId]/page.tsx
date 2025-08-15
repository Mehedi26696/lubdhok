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
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/projects" className="ml-1 text-slate-400 hover:text-cyan-400 transition-colors duration-300 md:ml-2 font-medium">
                  Academic Projects
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-slate-300 md:ml-2 font-medium">{course.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Course Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>{semester.name}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6">
            {course.name}
          </h1>
          
          <div className="flex items-center justify-center flex-wrap gap-4 mb-10">
            <span className="bg-cyan-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-xl font-semibold border border-cyan-400/30">
              {course.code}
            </span>
            <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-xl font-semibold border border-blue-400/30">
              {course.credits} Credits
            </span>
            <span className="bg-teal-500/20 backdrop-blur-sm text-teal-300 px-4 py-2 rounded-xl font-semibold border border-teal-400/30">
              {semester.name}
            </span>
          </div>
          
          {/* Statistics Cards */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{course.projects.length}</div>
              <div className="text-sm text-slate-400 font-medium">Total Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{Array.from(new Set(course.projects.flatMap((p: AcademicProject) => p.technologies))).length}</div>
              <div className="text-sm text-slate-400 font-medium">Technologies</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
              <div className="text-2xl font-bold text-white">{Array.from(new Set(course.projects.flatMap((p: AcademicProject) => p.teamMembers.map((m: TeamMember) => m.name)))).length}</div>
              <div className="text-sm text-slate-400 font-medium">Contributors</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Course Projects</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-4">
              Course Projects
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Discover innovative solutions and cutting-edge implementations developed as part of this comprehensive course curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {course.projects.map((project: AcademicProject, index: number) => (
              <div 
                key={project.id}
                className="group bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden opacity-0 animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
              >
                {/* Project Cover Image */}
                {project.coverImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-lg text-xs font-medium border border-cyan-400/30">
                          {project.courseCode}
                        </span>
                        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg text-xs font-medium border border-blue-400/30">
                          {project.teamMembers.length} Members
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Project Description */}
                  <div className="mb-6">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Team Members Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      Team Members
                    </h4>
                    <div className="space-y-2">
                      {project.teamMembers.map((member: TeamMember, i: number) => (
                        <div key={i} className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3 border border-slate-600/50 hover:bg-slate-600/50 transition-all duration-200 group/member">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover/member:scale-105 transition-transform duration-200">
                              <span className="text-white font-bold text-xs">
                                {member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                              </span>
                            </div>
                            <div>
                              <span className="text-white font-medium text-sm">{member.name}</span>
                              <div className="text-xs text-cyan-400">Contributor</div>
                            </div>
                          </div>
                          <a
                            href={`https://github.com/${member.githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-2 py-1 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 text-xs font-medium shadow-sm hover:shadow-md transform hover:scale-105"
                            title={`View ${member.name}'s GitHub Profile`}
                          >
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1.5 bg-slate-700/60 text-cyan-300 rounded-lg font-medium border border-slate-600/50 hover:bg-slate-600/60 hover:border-cyan-400/50 hover:scale-105 transition-all duration-200 shadow-sm text-xs hover:text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 justify-center text-xs"
                      >
                        <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                    {project.sourceCodeUrl && (
                      <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 justify-center text-xs"
                      >
                        <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.documentationUrl && (
                      <a
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 justify-center text-xs"
                      >
                        <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
