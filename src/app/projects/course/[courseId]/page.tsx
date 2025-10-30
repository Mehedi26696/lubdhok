
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projectSemesters, type AcademicProject, type ProjectCourse, type ProjectSemester, type TeamMember } from '@/data/projects'

// Single Image Component for Projects
function ProjectImage({ project }: { project: AcademicProject }) {
  if (!project.coverImage) {
    return (
      <div className="relative h-48 sm:h-52 w-full bg-slate-700/50 flex items-center justify-center">
        <div className="text-slate-400 text-center">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">No Image Available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-48 sm:h-52 w-full overflow-hidden group">
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Subtle dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20"></div>
    </div>
  )
}

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
      {/* Enhanced Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs with tech-themed colors */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-violet-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-400/6 rounded-full blur-2xl"></div>
        
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
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/projects" className="ml-1 text-slate-400 hover:text-violet-300 transition-colors duration-300 md:ml-2 font-medium">
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

        {/* Enhanced Course Header */}
        <div className="mb-20 text-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-400/30 text-violet-300 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Course Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            {course.name}
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          
          <div className="flex items-center justify-center flex-wrap gap-4 mb-10">
            <span className="bg-slate-800/60 backdrop-blur-md border border-violet-400/30 text-violet-300 px-6 py-3 rounded-xl font-semibold shadow-lg">
              {course.code}
            </span>
            <span className="bg-slate-800/60 backdrop-blur-md border border-purple-400/30 text-purple-300 px-6 py-3 rounded-xl font-semibold shadow-lg">
              {course.credits} Credits
            </span>
            <span className="bg-slate-800/60 backdrop-blur-md border border-indigo-400/30 text-indigo-300 px-6 py-3 rounded-xl font-semibold shadow-lg">
              {semester.name}
            </span>
          </div>
          
          {/* Enhanced Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-slate-600/50 hover:border-violet-400/50 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <div className="text-3xl font-bold text-white mb-2">{course.projects.length}</div>
              <div className="text-slate-300 font-semibold text-lg">Total Projects</div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-slate-600/50 hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <div className="text-3xl font-bold text-white mb-2">{Array.from(new Set(course.projects.flatMap((p: AcademicProject) => p.technologies))).length}</div>
              <div className="text-slate-300 font-semibold text-lg">Technologies</div>
            </div>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="mb-20">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl mb-6 shadow-xl">
              <span className="text-2xl text-white">💎</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">
              Course Projects
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover innovative solutions and cutting-edge implementations developed as part of this comprehensive course curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {course.projects.map((project: AcademicProject, index: number) => (
              <div 
                key={project.id}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-600/30 hover:border-violet-400/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + (index * 0.1)}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative overflow-hidden">
                  <ProjectImage project={project} />
                  
                  {/* Decorative gradient border */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Enhanced Project Title and Info */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border border-violet-400/40 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                        {project.courseCode}
                      </span>
                      <span className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-400/40 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                        {project.teamMembers.length} Members
                      </span>
                      <span className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-400/40 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
                        {project.technologies.length} Tech Stack
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Project Description */}
                  <div className="space-y-3">
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced Team Members Section */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mr-2 shadow-lg shadow-violet-400/50"></div>
                      Team Members
                    </h4>
                    <div className="space-y-3">
                      {project.teamMembers.map((member: TeamMember, i: number) => (
                        <div key={i} className="flex items-center justify-between bg-gradient-to-r from-slate-700/40 to-slate-800/40 rounded-xl p-3 border border-slate-600/30 hover:border-violet-400/50 hover:bg-gradient-to-r hover:from-slate-700/60 hover:to-slate-800/60 transition-all duration-300 group/member backdrop-blur-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover/member:scale-110 group-hover/member:shadow-xl group-hover/member:shadow-violet-500/30 transition-all duration-300">
                              <span className="text-white font-bold text-sm">
                                {member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                              </span>
                            </div>
                            <div>
                              <span className="text-white font-semibold text-sm">{member.name}</span>
                              <div className="text-xs text-violet-400 font-medium">Contributor</div>
                            </div>
                          </div>
                          <a
                            href={`https://github.com/${member.githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-1.5 bg-gradient-to-r from-slate-900/90 to-black/90 text-white rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 text-xs font-semibold shadow-lg hover:shadow-xl hover:scale-105 border border-slate-700 hover:border-violet-400/50 backdrop-blur-sm"
                            title={`View ${member.name}'s GitHub Profile`}
                          >
                            <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Technologies Section */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mr-2 shadow-lg shadow-purple-400/50"></div>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span 
                          key={techIndex}
                          className="group/tech px-3 py-1.5 bg-gradient-to-r from-slate-700/60 to-slate-800/60 text-slate-300 border border-slate-600/50 rounded-full text-xs font-semibold hover:bg-gradient-to-r hover:from-violet-500/30 hover:to-purple-500/30 hover:text-violet-200 hover:border-violet-400/60 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 backdrop-blur-sm cursor-default"
                        >
                          <span className="relative">
                            {tech}
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/0 to-purple-400/0 group-hover/tech:from-violet-400/20 group-hover/tech:to-purple-400/20 rounded-full transition-all duration-300"></div>
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-600/30">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 font-semibold shadow-lg hover:scale-105 flex-1 text-sm border border-violet-500/30 hover:border-violet-400/60 backdrop-blur-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl hover:from-slate-700 hover:to-slate-800 hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-300 font-semibold shadow-lg hover:scale-105 flex-1 text-sm border border-slate-700 hover:border-slate-600 backdrop-blur-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 font-semibold shadow-lg hover:scale-105 flex-1 text-sm border border-indigo-500/30 hover:border-indigo-400/60 backdrop-blur-sm"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Documentation
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
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
