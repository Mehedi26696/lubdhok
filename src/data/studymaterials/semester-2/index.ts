import type { Semester } from '../types'
import { subjectData as cse1201 } from './cse1201/data'
import { subjectData as eee1202 } from './eee1202/data'
import { subjectData as phy1203 } from './phy1203/data'
import { subjectData as math1204 } from './math1204/data'
import { subjectData as cse1211 } from './cse1211/data'
import { subjectData as eee1212 } from './eee1212/data'
import { subjectData as phy1213 } from './phy1213/data'
import { subjectData as eng1215 } from './eng1215/data'
import { subjectData as questions2 } from './questions-2/data'
export const semester2: Semester = {
  id: "semester-2",
  name: "Semester II",
  description: "Second Semester - (19.50 Credits)",
  subjects: [cse1201, eee1202, phy1203, math1204, cse1211, eee1212, phy1213, eng1215, questions2],
}
