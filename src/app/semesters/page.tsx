import { semesters } from '@/data/studyMaterials'
import SemesterCard from '@/components/SemesterCard'

export default function SemestersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All Semesters
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Browse study materials organized by semester. Each semester contains subjects with 
          lectures, slides, notes, and assignments shared by the Lubdhok batch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {semesters.map((semester) => (
          <SemesterCard key={semester.id} semester={semester} />
        ))}
      </div>

      {semesters.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Semesters Available
          </h3>
          <p className="text-gray-600">
            Study materials will be added soon. Check back later!
          </p>
        </div>
      )}
    </div>
  )
}
