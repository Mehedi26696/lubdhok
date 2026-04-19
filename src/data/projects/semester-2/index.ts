import type { ProjectSemester } from '../types'
import { courseData as cse1201 } from './cse1201/data'
export const semester2: ProjectSemester = {
  id: "semester-2",
  name: "Semester II",
  description: "Programming Fundamentals Projects",
  courses: [cse1201],
}
