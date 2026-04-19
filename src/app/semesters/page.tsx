import { BookOpen } from 'lucide-react'
import { semesters } from '@/data/studyMaterials'
import SemesterCard from '@/components/SemesterCard'

export default function SemestersPage() {
  const subjectCount = semesters.reduce((acc, semester) => acc + semester.subjects.filter((subject) => !subject.code.startsWith('QB-')).length, 0)
  const materialCount = semesters.reduce((acc, semester) => acc + semester.subjects.reduce((total, subject) => total + subject.materials.length, 0), 0)

  return (
    <div className="page-shell">
      <div className="page-content">
        <header className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <div className="eyebrow mb-5">
              <BookOpen className="h-4 w-4" />
              Academic Resources
            </div>
            <h1 className="section-title">Study Materials</h1>
          </div>
          <div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ['Semesters', semesters.length],
                ['Subjects', subjectCount],
                ['Materials', materialCount],
              ].map(([label, value]) => (
                <div key={label} className="surface-card p-4 text-center">
                  <div className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>{value}</div>
                  <div className="mono-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {semesters.map((semester, index) => (
            <div
              key={semester.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.06}s`, animationFillMode: 'forwards' }}
            >
              <SemesterCard semester={semester} />
            </div>
          ))}
        </div>

        {semesters.length === 0 && (
          <div className="surface-card py-20 text-center">
            <h3 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>No Study Materials Available</h3>
            <p className="section-copy mx-auto mt-3 max-w-md">Materials will appear here once they are added.</p>
          </div>
        )}
      </div>
    </div>
  )
}
