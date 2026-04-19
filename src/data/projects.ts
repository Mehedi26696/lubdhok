import { projectSemesters } from './projects/index'
import type { AcademicProject } from './projects/types'

export type { TeamMember, AcademicProject, ProjectSemester, ProjectCourse } from './projects/types'
export { projectSemesters }

export const getProjectsBySemester = (semesterId: string) =>
  projectSemesters.find((semester) => semester.id === semesterId)

export const getAllProjects = (): AcademicProject[] => {
  return projectSemesters.flatMap((semester) =>
    semester.courses.flatMap((course) => course.projects)
  )
}

export const getProjectById = (projectId: string): AcademicProject | undefined => {
  return getAllProjects().find((project) => project.id === projectId)
}

export const getProjectsByCourse = (courseId: string): AcademicProject[] => {
  return projectSemesters.flatMap((semester) =>
    semester.courses
      .filter((course) => course.id === courseId)
      .flatMap((course) => course.projects)
  )
}
