import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projectSemesters, type AcademicProject, type ProjectCourse, type ProjectSemester } from '@/data/projects'

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

        {/* Course Header */}
        <div className="mb-16 text-center relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-bl from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-4xl text-white">📚</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              {course.name}
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold border border-violet-200/50">
                {course.code}
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold border border-purple-200/50">
                {course.credits} Credits
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold border border-indigo-200/50">
                {semester.name}
              </span>
            </div>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-violet-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{course.projects.length}</div>
                <div className="text-gray-600 font-medium text-sm">Total Projects</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">👥</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{Math.max(...course.projects.map((p: AcademicProject) => p.teamSize))}</div>
                <div className="text-gray-600 font-medium text-sm">Max Team Size</div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">�</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{Array.from(new Set(course.projects.flatMap((p: AcademicProject) => p.technologies))).length}</div>
                <div className="text-gray-600 font-medium text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Course Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore all projects developed as part of this course
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.projects.map((project: AcademicProject, index: number) => (
              <div 
                key={project.id}
                className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Cover Image */}
                {project.images && project.images.length > 0 && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}

                <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-all duration-300">
                      <span className="text-2xl text-white">🔬</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-gray-500">{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Team Size */}
                <div className="mb-6">
                  <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">{project.teamSize}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Team Size</div>
                        <div className="text-sm text-gray-600">
                          {project.teamSize === 1 ? 'Individual Project' : `${project.teamSize} Members`}
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl">👥</div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Team Members</h4>
                  <div className="space-y-2">
                    {project.teamMembers.map((member: string, i: number) => (
                      <div key={i} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 border border-gray-200/50">
                        <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {member.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-gray-700 font-medium">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium border border-violet-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
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
                      className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
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
                      className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
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
