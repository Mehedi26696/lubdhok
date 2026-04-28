import type { Semester } from '../types'
import { subjectData as cse3201 } from './cse3201/data'
import { subjectData as cse3202 } from './cse3202/data'
import { subjectData as cse3203 } from './cse3203/data'
import { subjectData as cse3204 } from './cse3204/data'
import { subjectData as cse3211 } from './cse3211/data'
import { subjectData as cse3212 } from './cse3212/data'
import { subjectData as cse3216 } from './cse3216/data'
import { subjectData as eng3217 } from './eng3217/data'
import { subjectData as stat3205 } from './stat3205/data'

export const semester6: Semester = {
  id: 'semester-6',
  name: 'Semester VI',
  description: 'Sixth Semester - (19.5 Credits)',
  subjects: [cse3201, cse3202, cse3203, cse3204, cse3211, cse3212, cse3216, eng3217, stat3205],
}
