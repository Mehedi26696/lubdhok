import Link from 'next/link'
import { semesters } from '@/data/studyMaterials'
import SemesterCard from '@/components/SemesterCard'
import StatsSection from '@/components/StatsSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section with Cover Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Your Batch Photo */}
        <div className="absolute inset-0">
          <Image
            src="/batch.jpg"
            alt="Lubdhok Batch 2024"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/80 via-purple-900/70 to-indigo-900/80 z-10"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-20 h-20 bg-purple-300/20 rounded-full blur-lg animate-bounce"></div>
        </div>
        
        <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight">
            
                <span className="block text-yellow-300 drop-shadow-2xl text-7xl md:text-9xl animate-fade-in-up animation-delay-300">LUBDHOK</span>
                
              </h1>
            </div>
            <p className="text-2xl md:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-900">
              Building the future together through knowledge, friendship, and excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-1200">
              <Link
                href="#about"
                className="group bg-white text-violet-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-violet-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Explore Our Journey
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/semesters"
                className="group border-3 border-white text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-violet-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
              >
                Study Materials
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-violet-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Lubdhok Batch 2024
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a dynamic group of aspiring engineers passionate about learning, growing, and supporting each other 
              throughout our academic journey. The Lubdhok Batch represents diversity, innovation, and excellence in engineering education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a collaborative learning environment where every student thrives, shares knowledge, 
                  and builds lasting friendships while pursuing academic excellence.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become leaders and innovators in our respective fields, contributing positively to society 
                  while maintaining the bonds and values we've built together.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">Batch Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-white">
                      <span className="text-2xl mr-4">🎓</span>
                      <span className="text-lg">Engineering Students Class of 2024</span>
                    </div>
                    <div className="flex items-center text-white">
                      <span className="text-2xl mr-4">📚</span>
                      <span className="text-lg">Computer Science & Engineering Focus</span>
                    </div>
                    <div className="flex items-center text-white">
                      <span className="text-2xl mr-4">🏆</span>
                      <span className="text-lg">Academic Excellence & Innovation</span>
                    </div>
                    <div className="flex items-center text-white">
                      <span className="text-2xl mr-4">🤝</span>
                      <span className="text-lg">Strong Community & Resource Sharing</span>
                    </div>
                    <div className="flex items-center text-white">
                      <span className="text-2xl mr-4">💡</span>
                      <span className="text-lg">Collaborative Learning Environment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Study Materials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Study Materials
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Access organized study materials for each semester. Find lectures, slides, notes, and assignments 
              shared by your fellow batch mates in a beautifully organized interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {semesters.slice(0, 3).map((semester, index) => (
              <div key={semester.id} 
                   className="animate-fade-in-up"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <SemesterCard semester={semester} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/semesters"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold text-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative">
                View All Semesters
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </span>
              <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-violet-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Explore More
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover all the different sections of our batch website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/members" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-violet-200/50 hover:scale-105 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl text-white">�</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Batch Members</h3>
                <p className="text-gray-600 leading-relaxed">
                  Meet all the amazing people in our batch and get to know everyone better
                </p>
              </div>
            </Link>

            <Link href="/events" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200/50 hover:scale-105 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl text-white">🎉</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Events & Activities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay updated with all batch events, activities, and memorable moments
                </p>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-200/50 hover:scale-105 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl text-white">�</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Projects</h3>
                <p className="text-gray-600 leading-relaxed">
                  Showcase of amazing projects created by our talented batch members
                </p>
              </div>
            </Link>

            <Link href="/announcements" className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200/50 hover:scale-105 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl text-white">�</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Announcements</h3>
                <p className="text-gray-600 leading-relaxed">
                  Important updates, news, and announcements for the batch
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
