import type { Semester } from '../types'
import { subjectData as cse3101 } from './cse3101/data'
import { subjectData as cse3102 } from './cse3102/data'
import { subjectData as cse3103 } from './cse3103/data'
import { subjectData as cse3104 } from './cse3104/data'
import { subjectData as cse3105 } from './cse3105/data'
import { subjectData as cse3111 } from './cse3111/data'
import { subjectData as cse3112 } from './cse3112/data'
import { subjectData as cse3113 } from './cse3113/data'
import { subjectData as cse3116 } from './cse3116/data'
import { subjectData as questions5 } from './questions-5/data'
export const semester5: Semester = {
  id: "semester-5",
  name: "Semester V",
  description: "Fifth Semester - (19.5 Credits)",
  subjects: [cse3101, cse3102, cse3103, cse3104, cse3105, cse3111, cse3112, cse3113, cse3116, questions5],
}
