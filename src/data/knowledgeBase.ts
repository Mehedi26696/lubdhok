import { announcements } from './announcements'
import { achievements } from './achievements'
import { events } from './events'
import { getAllProjects } from './projects'
import { semesters as studyMaterialSemesters } from './studyMaterials'

function addCategory<T>(arr: T[], category: string) {
  return arr.map(item => ({ ...item, category }))
}


// Flatten all study materials from all semesters and subjects
const allStudyMaterials = studyMaterialSemesters.flatMap(sem =>
  sem.subjects.flatMap(sub => sub.materials)
)

// Recursively collect all string values from an object (including arrays and nested fields)
function collectStrings(obj: unknown): string[] {
  if (typeof obj === 'string') return [obj]
  if (Array.isArray(obj)) return obj.flatMap(collectStrings)
  if (typeof obj === 'object' && obj !== null) return Object.values(obj).flatMap(collectStrings)
  return []
}

function addSearchText<T extends object>(arr: T[]): (T & { searchText: string })[] {
  return arr.map(item => ({
    ...item,
    searchText: collectStrings(item).join(' ').toLowerCase()
  }))
}


function addSource<T>(arr: T[], category: string, source: string) {
  return arr.map(item => ({ ...item, category, source }))
}

function addSummaryToEvents(events: unknown[]) {
  return events.map((event: any) => ({
    ...event,
    summary: `${event.title} on ${event.date} at ${event.location}. ${event.description}`.trim()
  }))
}

function addSummaryToProjects(projects: unknown[]) {
  return projects.map((project: any) => ({
    ...project,
    summary: `${project.title} (${project.courseCode}): ${project.description}`.trim()
  }))
}

function addSummaryToStudyMaterials(materials: unknown[]) {
  return materials.map((mat: any) => ({
    ...mat,
    summary: `${mat.title} (${mat.type}) for ${mat.subject}: ${mat.description}`.trim()
  }))
}

export const knowledgeBase = [
  ...addSearchText(addSource(announcements, 'announcement', 'announcements.ts')),
  ...addSearchText(addSource(achievements, 'achievement', 'achievements.ts')),
  ...addSearchText(addSource(addSummaryToEvents(events), 'event', 'events.ts')),
  ...addSearchText(addSource(addSummaryToProjects(getAllProjects()), 'project', 'projects.ts')),
  ...addSearchText(addSource(addSummaryToStudyMaterials(allStudyMaterials), 'studyMaterial', 'studyMaterials.ts')),
]



export function searchKnowledgeBase(query: string) {
  const q = query.toLowerCase()
  // Also try to match numbers in queries (e.g., "4th semester" or "semester 4")
  const altQs = [q]
  const semesterMatch = q.match(/(\d+)(st|nd|rd|th)? semester/)
  if (semesterMatch) {
    altQs.push(`semester ${semesterMatch[1]}`)
    altQs.push(`${semesterMatch[1]} semester`)
    altQs.push(`sem ${semesterMatch[1]}`)
    altQs.push(`semester-${semesterMatch[1]}`)
    altQs.push(`sem-${semesterMatch[1]}`)
  }
  return knowledgeBase.filter(item =>
    altQs.some(altQ => item.searchText.includes(altQ))
  )
}
