import type { Semester } from '../types'
import { subjectData as cse2201 } from './cse2201/data'
import { subjectData as cse2202 } from './cse2202/data'
import { subjectData as cse2203 } from './cse2203/data'
import { subjectData as cse2204 } from './cse2204/data'
import { subjectData as cse2205 } from './cse2205/data'
import { subjectData as cse2211 } from './cse2211/data'
import { subjectData as cse2213 } from './cse2213/data'
import { subjectData as cse2214 } from './cse2214/data'
import { subjectData as cse2216 } from './cse2216/data'
import { subjectData as questions4 } from './questions-4/data'
export const semester4: Semester = {
  id: "semester-4",
  name: "Semester IV",
  description: "Fourth Semester - (19.25 Credits)",
  subjects: [cse2201, cse2202, cse2203, cse2204, cse2205, cse2211, cse2213, cse2214, cse2216, questions4],
}
