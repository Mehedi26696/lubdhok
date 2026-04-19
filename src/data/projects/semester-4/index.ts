import type { ProjectSemester } from '../types'
import { courseData as cse2216 } from './cse2216/data'
import { courseData as cse2221 } from './cse2221/data'
export const semester4: ProjectSemester = {
  id: "semester-4",
  name: "Semester IV",
  description: "Database and  App Development Projects",
  courses: [cse2216, cse2221],
}
