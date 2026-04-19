import type { Semester } from '../types'
import { subjectData as cse1101 } from './cse1101/data'
import { subjectData as cse1102 } from './cse1102/data'
import { subjectData as eee1101 } from './eee1101/data'
import { subjectData as eee1104 } from './eee1104/data'
import { subjectData as math1105 } from './math1105/data'
import { subjectData as questions1 } from './questions-1/data'
import { subjectData as cse1111 } from './cse1111/data'
import { subjectData as eee1113 } from './eee1113/data'
import { subjectData as che1114 } from './che1114/data'
export const semester1: Semester = {
  id: "semester-1",
  name: "Semester I",
  description: "First Semester - (18.50 Credits)",
  subjects: [cse1101, cse1102, eee1101, eee1104, math1105, questions1, cse1111, eee1113, che1114],
}
