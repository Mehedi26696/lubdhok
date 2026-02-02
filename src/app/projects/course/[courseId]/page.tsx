
import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projectSemesters, type ProjectCourse, type ProjectSemester } from '@/data/projects'
import CourseProjectsGallery from '@/components/CourseProjectsGallery'

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
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex mb-16" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <Link href="/" className="text-slate-500 hover:text-white transition-colors text-sm">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-slate-700">/</span>
              <Link href="/projects" className="text-slate-500 hover:text-white transition-colors text-sm">Projects</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-slate-700">/</span>
              <span className="text-slate-200 font-medium text-sm">{course.code}</span>
            </li>
          </ol>
        </nav>

        {/* Course Header Info */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                 <div className="px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-xl text-[10px] font-black text-violet-400 uppercase tracking-[0.2em]">
                    {course.code}
                 </div>
                 <div className="h-px w-8 bg-slate-800" />
                 <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                    {semester.name}
                 </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 uppercase italic leading-none">
                {course.name}
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                Showing {course.projects.length} academic {course.projects.length === 1 ? 'milestone' : 'milestones'} from our batch curriculum.
              </p>
            </div>

            <div className="flex gap-4 w-full md:w-auto">
               <div className="flex-1 md:flex-none px-10 py-6 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] text-center shadow-2xl backdrop-blur-sm">
                  <div className="text-4xl font-black text-white mb-1">{course.projects.length}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-60">Projects</div>
               </div>
               <div className="flex-1 md:flex-none px-10 py-6 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] text-center shadow-2xl backdrop-blur-sm">
                  <div className="text-4xl font-black text-white mb-1">{course.credits}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-60">Credits</div>
               </div>
            </div>
          </div>
        </div>

        {/* Search & Filtered Grid */}
        <CourseProjectsGallery 
           projects={course.projects} 
           courseCode={course.code}
           courseName={course.name}
        />

        {/* Footer Navigation */}
        <div className="mt-40 pt-16 border-t border-slate-900 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center px-12 py-5 bg-slate-900 border border-slate-800 text-slate-300 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-4 h-4 mr-3 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Navigator
          </Link>
        </div>
      </div>
    </div>
  )
}
