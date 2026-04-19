import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, FolderKanban } from 'lucide-react'
import { projectSemesters, type ProjectCourse, type ProjectSemester } from '@/data/projects'
import CourseProjectsGallery from '@/components/CourseProjectsGallery'

interface CourseProjectPageProps {
  params: Promise<{
    courseId: string
  }>
}

export default async function CourseProjectPage({ params }: CourseProjectPageProps) {
  const { courseId } = await params

  let course: ProjectCourse | null = null
  let semester: ProjectSemester | null = null

  for (const sem of projectSemesters) {
    const foundCourse = sem.courses.find((item) => item.id === courseId)
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
    <div className="page-shell">
      <div className="page-content">
        <nav className="mb-10 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="font-bold" style={{ color: 'var(--muted)' }}>Home</Link>
          <span className="mx-2" style={{ color: 'var(--line-strong)' }}>/</span>
          <Link href="/projects" className="font-bold" style={{ color: 'var(--muted)' }}>Projects</Link>
          <span className="mx-2" style={{ color: 'var(--line-strong)' }}>/</span>
          <span className="font-bold" style={{ color: 'var(--foreground)' }}>{course.code}</span>
        </nav>

        <header className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="stamp">{course.code}</span>
              <span className="mono-label">{semester.name}</span>
            </div>
            <h1 className="section-title">{course.name}</h1>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="surface-card px-8 py-5 text-center">
              <div className="text-4xl font-black" style={{ color: 'var(--foreground)' }}>{course.projects.length}</div>
              <div className="mono-label">Projects</div>
            </div>
            <div className="surface-card px-8 py-5 text-center">
              <div className="text-4xl font-black" style={{ color: 'var(--foreground)' }}>{course.credits}</div>
              <div className="mono-label">Credits</div>
            </div>
          </div>
        </header>

        <CourseProjectsGallery projects={course.projects} courseCode={course.code} courseName={course.name} />

        <div className="mt-20 border-t pt-10 text-center" style={{ borderColor: 'var(--line)' }}>
          <Link href="/projects" className="btn-outline">
            <ArrowLeft className="h-4 w-4" />
            Return to Project Archive
            <FolderKanban className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
