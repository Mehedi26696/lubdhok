import { notFound } from 'next/navigation'
import Link from 'next/link'
import { semesters } from '@/data/studyMaterials'
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

  const theorySubjects = semester.subjects.filter(subject => subject.type === 'theory')
  const labSubjects = semester.subjects.filter(subject => subject.type === 'lab')
  const totalMaterials = semester.subjects.reduce((acc, subject) => acc + subject.materials.length, 0)

  // Function to organize materials by type for theory courses
  const organizeTheoryMaterials = (materials: any[]) => {
    return {
      slides: materials.filter(m => m.type === 'slide'),
      notes: materials.filter(m => m.type === 'note'),  
      assignments: materials.filter(m => m.type === 'assignment'),
      lectures: materials.filter(m => m.type === 'lecture'),
      books: materials.filter(m => m.type === 'books')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-12" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-violet-600 transition-colors duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/semesters" className="ml-1 text-gray-600 hover:text-violet-600 transition-colors duration-300 md:ml-2">
                  Semesters
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-gray-500 md:ml-2 font-medium">{semester.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Semester Header */}
        <div className="mb-16 text-center relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-bl from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Semester {semester.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              {semester.description}
            </p>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-violet-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{semester.subjects.length}</div>
                <div className="text-gray-600 font-medium">Total Subjects</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📖</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{totalMaterials}</div>
                <div className="text-gray-600 font-medium">Study Materials</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{theorySubjects.length}T + {labSubjects.length}L</div>
                <div className="text-gray-600 font-medium">Course Types</div>
              </div>
            </div>
          </div>
        </div>

        {/* Theory Courses */}
        {theorySubjects.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Theory Courses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive theoretical knowledge through organized study materials
              </p>
            </div>

            <div className="space-y-20">
              {theorySubjects.map((subject, index) => {
                const organizedMaterials = organizeTheoryMaterials(subject.materials)
                
                return (
                  <div key={subject.id} className="group">
                    {/* Subject Header */}
                    <div className="text-center mb-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-100/30 to-transparent h-px top-1/2"></div>
                      <div className="relative inline-block bg-gradient-to-r from-slate-50 to-white px-8 py-4 rounded-2xl shadow-lg border border-violet-200/50">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                          {subject.name}
                        </h3>
                        <p className="text-violet-600 font-semibold">
                          {subject.code} • {subject.credits} Credits • {subject.materials.length} Materials
                        </p>
                      </div>
                    </div>

                    {/* Material Type Sections */}
                    <div className="space-y-16">
                      {/* Slides Section */}
                      {organizedMaterials.slides.length > 0 && (
                        <div className="relative">
                          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-full opacity-30"></div>
                          <div className="pl-8">
                            <div className="flex items-center mb-8">
                              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform hover:scale-110 transition-all duration-300">
                                <span className="text-3xl text-white">📊</span>
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-1">Presentation Slides</h4>
                                <p className="text-gray-600">Visual learning materials and presentations</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                              {organizedMaterials.slides.map((material, idx) => (
                                <div key={material.id} 
                                     className="animate-fade-in-up"
                                     style={{ animationDelay: `${idx * 0.1}s` }}>
                                  <MaterialCard material={material} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Notes Section */}
                      {organizedMaterials.notes.length > 0 && (
                        <div className="relative">
                          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-purple-400 to-purple-600 rounded-full opacity-30"></div>
                          <div className="pl-8">
                            <div className="flex items-center mb-8">
                              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform hover:scale-110 transition-all duration-300">
                                <span className="text-3xl text-white">📝</span>
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-1">Study Notes</h4>
                                <p className="text-gray-600">Comprehensive notes and summaries</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                              {organizedMaterials.notes.map((material, idx) => (
                                <div key={material.id} 
                                     className="animate-fade-in-up"
                                     style={{ animationDelay: `${idx * 0.1}s` }}>
                                  <MaterialCard material={material} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Assignments Section */}
                      {organizedMaterials.assignments.length > 0 && (
                        <div className="relative">
                          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full opacity-30"></div>
                          <div className="pl-8">
                            <div className="flex items-center mb-8">
                              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform hover:scale-110 transition-all duration-300">
                                <span className="text-3xl text-white">📋</span>
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-1">Assignments</h4>
                                <p className="text-gray-600">Practice problems and coursework</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                              {organizedMaterials.assignments.map((material, idx) => (
                                <div key={material.id} 
                                     className="animate-fade-in-up"
                                     style={{ animationDelay: `${idx * 0.1}s` }}>
                                  <MaterialCard material={material} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Lectures Section */}
                      {organizedMaterials.lectures.length > 0 && (
                        <div className="relative">
                          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-30"></div>
                          <div className="pl-8">
                            <div className="flex items-center mb-8">
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform hover:scale-110 transition-all duration-300">
                                <span className="text-3xl text-white">🎓</span>
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-1">Lecture Materials</h4>
                                <p className="text-gray-600">Recorded lectures and audio materials</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                              {organizedMaterials.lectures.map((material, idx) => (
                                <div key={material.id} 
                                     className="animate-fade-in-up"
                                     style={{ animationDelay: `${idx * 0.1}s` }}>
                                  <MaterialCard material={material} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Books Section */}
                      {organizedMaterials.books.length > 0 && (
                        <div className="relative">
                          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-teal-400 to-teal-600 rounded-full opacity-30"></div>
                          <div className="pl-8">
                            <div className="flex items-center mb-8">
                              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg mr-6 transform hover:scale-110 transition-all duration-300">
                                <span className="text-3xl text-white">📚</span>
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-1">Reference Books</h4>
                                <p className="text-gray-600">Textbooks and reference materials</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                              {organizedMaterials.books.map((material, idx) => (
                                <div key={material.id} 
                                     className="animate-fade-in-up"
                                     style={{ animationDelay: `${idx * 0.1}s` }}>
                                  <MaterialCard material={material} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Empty State for Theory Course */}
                      {subject.materials.length === 0 && (
                        <div className="text-center py-16">
                          <div className="w-32 h-32 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                            <span className="text-6xl">📭</span>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-4">No Materials Yet</h4>
                          <p className="text-gray-600 text-lg max-w-md mx-auto">
                            Study materials for this subject will be uploaded soon. Check back later!
                          </p>
                        </div>
                      )}
                    </div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Laboratory Courses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hands-on practical experience and laboratory experiments
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {labSubjects.map((subject, index) => (
                <div key={subject.id} 
                     className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-200/30 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg mr-6 group-hover:scale-110 transition-all duration-300">
                        <span className="text-3xl text-white">🔬</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">
                          {subject.name}
                        </h3>
                        <p className="text-teal-600 font-semibold">
                          {subject.code} • {subject.credits} Credit • Lab Course
                        </p>
                      </div>
                    </div>

                    {subject.materials.length > 0 ? (
                      <div className="space-y-6">
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
                        <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <span className="text-4xl">📋</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Lab Materials Coming Soon</h4>
                        <p className="text-gray-600">
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

        {/* Empty State for Entire Semester */}
        {semester.subjects.length === 0 && (
          <div className="text-center py-24">
            <div className="w-40 h-40 bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl">
              <span className="text-8xl">📚</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Semester Content Coming Soon
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're working hard to organize and upload all the study materials for this semester. 
              Check back soon for comprehensive resources including lectures, slides, notes, and assignments.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
