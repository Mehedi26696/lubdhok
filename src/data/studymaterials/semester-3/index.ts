import type { Semester } from '../types'
import { subjectData as cse2101 } from './cse2101/data'
import { subjectData as cse2103 } from './cse2103/data'
import { subjectData as eee2103 } from './eee2103/data'
import { subjectData as ged2104 } from './ged2104/data'
import { subjectData as math2105 } from './math2105/data'
import { subjectData as cse2111 } from './cse2111/data'
import { subjectData as cse2113 } from './cse2113/data'
import { subjectData as eee2113 } from './eee2113/data'
import { subjectData as questions3 } from './questions-3/data'
export const semester3: Semester = {
  id: "semester-3",
  name: "Semester III",
  description: "Third Semester - (17.75 Credits)",
  subjects: [cse2101, cse2103, eee2103, ged2104, math2105, cse2111, cse2113, eee2113, questions3],
}
