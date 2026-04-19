import type { Semester } from './types'
import { semester1 } from './semester-1'
import { semester2 } from './semester-2'
import { semester3 } from './semester-3'
import { semester4 } from './semester-4'
import { semester5 } from './semester-5'
export type { StudyMaterial, Semester, Subject } from './types'
export const semesters: Semester[] = [semester1, semester2, semester3, semester4, semester5]
export { semester1, semester2, semester3, semester4, semester5 }
