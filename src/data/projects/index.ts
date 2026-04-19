import type { ProjectSemester } from './types'
import { semester2 } from './semester-2'
import { semester3 } from './semester-3'
import { semester4 } from './semester-4'
import { semester5 } from './semester-5'
export type { TeamMember, AcademicProject, ProjectSemester, ProjectCourse } from './types'
export const projectSemesters: ProjectSemester[] = [semester2, semester3, semester4, semester5]
export { semester2, semester3, semester4, semester5 }
