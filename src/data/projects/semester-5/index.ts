import type { ProjectSemester } from '../types'
import { courseData as cse3111 } from './cse3111/data'
import { courseData as cse3112 } from './cse3112/data'
export const semester5: ProjectSemester = {
  id: "semester-5",
  name: "Semester V",
  description: "Software Engineering and Networking Projects",
  courses: [cse3111, cse3112],
}
