import { notFound } from 'next/navigation'
import Link from 'next/link'
import { semesters, StudyMaterial } from '@/data/studyMaterials'
import MaterialCard from '@/components/MaterialCard'

interface SemesterPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function SemesterPage({ params }: SemesterPageProps) {
  const { id } = await params
  const semester = semesters.find(s => s.id === id)

  if (!semester) {
    notFound()
  }

  const theorySubjects = semester.subjects.filter(subject => subject.type === 'theory' && subject.name !== 'Question Banks')
  const labSubjects = semester.subjects.filter(subject => subject.type === 'lab')
  const questionSubjects = semester.subjects.filter(subject => subject.name === 'Question Banks')
  const actualSubjects = semester.subjects.filter(subject => subject.name !== 'Question Banks')
  const totalMaterials = actualSubjects.reduce((acc, subject) => acc + subject.materials.length, 0)

  // Function to organize materials by type for theory courses
  const organizeTheoryMaterials = (materials: StudyMaterial[]) => {
    return {
      slides: materials.filter(m => m.type === 'slide'),
      notes: materials.filter(m => m.type === 'note'),  
      assignments: materials.filter(m => m.type === 'assignment'),
      lectures: materials.filter(m => m.type === 'lecture'),
      code: materials.filter(m => m.type === 'code'),
      books: materials.filter(m => m.type === 'books')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-400/6 rounded-full blur-2xl"></div>
        
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-violet-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-indigo-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,198,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <nav className="flex mb-12" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="flex items-center text-slate-400 hover:text-violet-400 transition-colors duration-200">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/semesters" className="ml-1 text-slate-400 hover:text-violet-400 transition-colors duration-200 md:ml-2">
                  Semesters
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-slate-300 md:ml-2 font-medium">{semester.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Semester Header */}
        <div className="mb-16 text-center relative">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-400/30 text-violet-300 rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Semester Materials</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">
            {semester.name}
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {semester.description}
          </p>
          
          {/* Statistics Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <div className="text-2xl font-bold text-white">{actualSubjects.length}</div>
              <div className="text-sm text-slate-400 font-medium">Subjects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <div className="text-2xl font-bold text-white">{totalMaterials}</div>
              <div className="text-sm text-slate-400 font-medium">Materials</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <div className="text-2xl font-bold text-white">{theorySubjects.length}T + {labSubjects.length}L</div>
              <div className="text-sm text-slate-400 font-medium">Courses</div>
            </div>
          </div>
        </div>

        {/* Theory Courses */}
        {theorySubjects.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
                Theory Courses
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Comprehensive theoretical knowledge through organized study materials
              </p>
            </div>

            <div className="space-y-16">
              {theorySubjects.map((subject) => {
                const organizedMaterials = organizeTheoryMaterials(subject.materials)
                
                return (
                  <div key={subject.id} className="group">
                    {/* Subject Header */}
                    <div className="text-center mb-8 relative">
                      <div className="relative inline-block bg-slate-800/60 backdrop-blur-sm px-8 py-4 rounded-xl border border-slate-700/50">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {subject.name}
                        </h3>
                        <p className="text-violet-400 font-medium">
                          {subject.code} • {subject.credits} Credits • {subject.materials.length} Materials
                        </p>
                      </div>
                    </div>

                    {/* Material Type Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {/* Slides Section */}
                      {organizedMaterials.slides.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-lg text-white">📊</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">Slides</h4>
                              
                            </div>
                          </div>
                          <div className="space-y-3">
                            {organizedMaterials.slides.map((material) => (
                              <div key={material.id}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Notes Section */}
                      {organizedMaterials.notes.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-lg text-white">📝</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">Notes</h4>
                               
                            </div>
                          </div>
                          <div className="space-y-3">
                            {organizedMaterials.notes.map((material) => (
                              <div key={material.id}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Assignments Section */}
                      {organizedMaterials.assignments.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-lg text-white">📋</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">Assignments</h4>
                               
                            </div>
                          </div>
                          <div className="space-y-3">
                            {organizedMaterials.assignments.map((material) => (
                              <div key={material.id}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Lectures Section */}
                      {organizedMaterials.lectures.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-lg text-white">🎓</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">Lectures</h4>
                               
                            </div>
                          </div>
                          <div className="space-y-3">
                            {organizedMaterials.lectures.map((material) => (
                              <div key={material.id}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Code Section */}
                      {organizedMaterials.code.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-lg text-white">💻</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">Source Code</h4>
                              
                            </div>
                          </div>
                          <div className="space-y-3">
                            {organizedMaterials.code.map((material) => (
                              <div key={material.id}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Books Section */}
                      {organizedMaterials.books.length > 0 && (
                        <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-lg text-white">📚</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white">Books</h4>
                               
                            </div>
                          </div>
                          <div className="space-y-3">
                            {organizedMaterials.books.map((material) => (
                              <div key={material.id}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Empty State for Theory Course */}
                    {subject.materials.length === 0 && (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 bg-slate-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 border border-slate-700/50">
                          <span className="text-4xl">📭</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">No Materials Yet</h4>
                        <p className="text-slate-400 max-w-md mx-auto">
                          Study materials for this subject will be uploaded soon.
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Lab Courses */}
        {labSubjects.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Lab Courses
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Hands-on practical experience and laboratory experiments
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {labSubjects.map((subject) => (
                <div key={subject.id} 
                     className="group bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-2xl text-white">🔬</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {subject.name}
                        </h3>
                        <p className="text-teal-400 font-medium">
                          {subject.code} • {subject.credits} Credit • Lab Course
                        </p>
                      </div>
                    </div>

                    {subject.materials.length > 0 ? (
                      <div className="space-y-4">
                        {subject.materials.map((material) => (
                          <div key={material.id}>
                            <MaterialCard material={material} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-slate-700/60 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl">📋</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Lab Materials Coming Soon</h4>
                        <p className="text-slate-400 text-sm">
                          Practical experiments and lab manuals will be available shortly.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Questions Section */}
        {questionSubjects.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent">
                Question Banks
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Previous year questions, sample papers, and practice problems for exam preparation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {questionSubjects.map((questionSubject) => 
                questionSubject.materials.map((material) => (
                  <div key={material.id}>
                    <MaterialCard material={material} />
                  </div>
                ))
              )}
            </div>

            {/* Empty State for Questions */}
            {questionSubjects.every(subject => subject.materials.length === 0) && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-slate-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 border border-slate-700/50">
                  <span className="text-4xl">❓</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Question Banks Coming Soon</h4>
                <p className="text-slate-400 max-w-md mx-auto">
                  Previous year questions and practice problems will be uploaded soon.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Empty State for Entire Semester */}
        {actualSubjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-slate-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-8 border border-slate-700/50">
              <span className="text-6xl">📚</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Semester Content Coming Soon
            </h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We&apos;re working hard to organize and upload all the study materials for this semester. 
              Check back soon for comprehensive resources.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
