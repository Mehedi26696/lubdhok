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
      {/* Enhanced Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-violet-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-400/6 rounded-full blur-2xl"></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute top-32 left-1/2 w-2 h-2 bg-violet-400/20 rounded-full"></div>
        <div className="absolute top-48 right-1/4 w-1 h-1 bg-purple-400/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-indigo-400/20 rounded-full"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,69,219,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex mb-12" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="flex items-center text-slate-400 hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/semesters" className="ml-1 text-slate-400 hover:text-white transition-colors duration-300 md:ml-2">
                  Study Materials
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
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
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
            {semester.name}
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            {semester.description}
          </p>
          
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-violet-400/50 transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📚</div>
              <div className="text-2xl font-bold text-white mb-1">{actualSubjects.length}</div>
              <div className="text-slate-400 font-medium text-sm">Total Subjects</div>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📖</div>
              <div className="text-2xl font-bold text-white mb-1">{totalMaterials}</div>
              <div className="text-slate-400 font-medium text-sm">Study Materials</div>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <div className="text-2xl font-bold text-white mb-1">{theorySubjects.length}T + {labSubjects.length}L</div>
              <div className="text-slate-400 font-medium text-sm">Course Types</div>
            </div>
          </div>
        </div>

        {/* Theory Courses */}
        {theorySubjects.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">
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
                    <div className="text-center mb-12 relative">
                      <div className="inline-block bg-slate-800/60 backdrop-blur-md px-8 py-4 rounded-xl border border-slate-600/50 shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {subject.name}
                        </h3>
                        <p className="text-violet-400 font-semibold">
                          {subject.code} • {subject.credits} Credits • {subject.materials.length} Materials
                        </p>
                      </div>
                    </div>

                    {/* Material Type Sections */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
                      {/* Slides Section */}
                      {organizedMaterials.slides.length > 0 && (
                        <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-300">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md mr-4">
                              <span className="text-xl text-white">📊</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white">Slides</h4>
                              <p className="text-sm text-slate-400">Presentations ({organizedMaterials.slides.length})</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            {organizedMaterials.slides.map((material, idx) => (
                              <div key={material.id} 
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: `${idx * 0.1}s` }}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Notes Section */}
                      {organizedMaterials.notes.length > 0 && (
                        <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md mr-4">
                              <span className="text-xl text-white">📝</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white">Notes</h4>
                              <p className="text-sm text-slate-400">Study Materials ({organizedMaterials.notes.length})</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            {organizedMaterials.notes.map((material, idx) => (
                              <div key={material.id} 
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: `${idx * 0.1}s` }}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Assignments Section */}
                      {organizedMaterials.assignments.length > 0 && (
                        <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-orange-400/50 transition-all duration-300">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md mr-4">
                              <span className="text-xl text-white">📋</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white">Assignments</h4>
                              <p className="text-sm text-slate-400">Practice Work ({organizedMaterials.assignments.length})</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            {organizedMaterials.assignments.map((material, idx) => (
                              <div key={material.id} 
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: `${idx * 0.1}s` }}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Lectures Section */}
                      {organizedMaterials.lectures.length > 0 && (
                        <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md mr-4">
                              <span className="text-xl text-white">🎓</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white">Lectures</h4>
                              <p className="text-sm text-slate-400">Video Content ({organizedMaterials.lectures.length})</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            {organizedMaterials.lectures.map((material, idx) => (
                              <div key={material.id} 
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: `${idx * 0.1}s` }}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Code Section */}
                      {organizedMaterials.code.length > 0 && (
                        <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-md mr-4">
                              <span className="text-xl text-white">💻</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white">Source Code</h4>
                              <p className="text-sm text-slate-400">Programming Files ({organizedMaterials.code.length})</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            {organizedMaterials.code.map((material, idx) => (
                              <div key={material.id} 
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: `${idx * 0.1}s` }}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Books Section */}
                      {organizedMaterials.books.length > 0 && (
                        <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-slate-600/50 hover:border-teal-400/50 transition-all duration-300">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md mr-4">
                              <span className="text-xl text-white">📚</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white">Books</h4>
                              <p className="text-sm text-slate-400">References ({organizedMaterials.books.length})</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            {organizedMaterials.books.map((material, idx) => (
                              <div key={material.id} 
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: `${idx * 0.1}s` }}>
                                <MaterialCard material={material} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Empty State for Theory Course */}
                    {subject.materials.length === 0 && (
                      <div className="text-center py-16">
                        <div className="w-32 h-32 bg-slate-800/60 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-slate-600/50">
                          <span className="text-6xl">📭</span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">No Materials Yet</h4>
                        <p className="text-slate-400 text-lg max-w-md mx-auto">
                          Study materials for this subject will be uploaded soon. Check back later!
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Lab Courses
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Hands-on practical experience and laboratory experiments
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {labSubjects.map((subject, index) => (
                <div key={subject.id} 
                     className="group bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-slate-600/50 hover:border-emerald-400/50 hover:-translate-y-1 transition-all duration-300"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  
                  {/* Simple corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-400/10 rounded-full -translate-y-8 translate-x-8"></div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg mr-6 group-hover:scale-110 transition-all duration-300">
                        <span className="text-2xl text-white">🔬</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {subject.name}
                        </h3>
                        <p className="text-emerald-400 font-semibold">
                          {subject.code} • {subject.credits} Credit • Lab Course
                        </p>
                      </div>
                    </div>

                    {subject.materials.length > 0 ? (
                      <div className="space-y-4">
                        {subject.materials.map((material, idx) => (
                          <div key={material.id} 
                               className="transform hover:translate-x-2 transition-all duration-300"
                               style={{ animationDelay: `${idx * 0.1}s` }}>
                            <MaterialCard material={material} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-20 h-20 bg-slate-700/60 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-6 border border-slate-600/50">
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                Question Banks
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Previous year questions, sample papers, and practice problems for exam preparation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {questionSubjects.map((questionSubject) => 
                questionSubject.materials.map((material, index) => (
                  <div key={material.id} 
                       className="transform hover:scale-[1.02] transition-all duration-300"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                    <MaterialCard material={material} />
                  </div>
                ))
              )}
            </div>

            {/* Empty State for Questions */}
            {questionSubjects.every(subject => subject.materials.length === 0) && (
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-slate-800/60 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg border border-slate-600/50">
                  <span className="text-6xl">❓</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Question Banks Coming Soon</h4>
                <p className="text-slate-400 text-lg max-w-md mx-auto">
                  Previous year questions and practice problems will be uploaded soon. Check back later!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Empty State for Entire Semester */}
        {actualSubjects.length === 0 && (
          <div className="text-center py-24">
            <div className="w-40 h-40 bg-slate-800/60 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-12 shadow-2xl border border-slate-600/50">
              <span className="text-8xl">📚</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Semester Content Coming Soon
            </h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We&apos;re working hard to organize and upload all the study materials for this semester. 
              Check back soon for comprehensive resources including lectures, slides, notes, and assignments.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
