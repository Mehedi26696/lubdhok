import Link from 'next/link'
import { semesters } from '@/data/studyMaterials'
import SemesterCard from '@/components/SemesterCard'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">Lubdhok Batch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your one-stop destination for study materials, lectures, slides, notes, and assignments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/semesters"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Browse All Semesters
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Semesters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Study Materials by Semester
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access organized study materials for each semester. Find lectures, slides, notes, and assignments 
            shared by your fellow batch mates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {semesters.map((semester) => (
            <SemesterCard key={semester.id} semester={semester} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/semesters"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Semesters
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You&apos;ll Find Here
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for academic success, organized and easily accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lecture Materials</h3>
              <p className="text-gray-600">
                Complete lecture recordings, transcripts, and supplementary materials
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Presentation Slides</h3>
              <p className="text-gray-600">
                PowerPoint presentations and visual aids from all lectures
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Notes</h3>
              <p className="text-gray-600">
                Comprehensive notes and summaries created by your peers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assignments</h3>
              <p className="text-gray-600">
                Assignment instructions, solutions, and reference materials
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
