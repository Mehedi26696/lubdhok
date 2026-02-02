import Image from 'next/image'

export default function AboutPage() {
  const stats = [
    { label: 'Batch Members', value: '60', icon: '👥' },
    { label: 'Academic Year', value: '3rd', icon: '📚' },
    { label: 'Department', value: 'CSE', icon: '💻' },
    { label: 'Years Together', value: '2', icon: '📅' },
  ]

  const values = [
    {
      title: 'Academic Excellence',
      description: 'We support each other to achieve better results in our Computer Science studies.',
      icon: '🎯'
    },
    {
      title: 'Collaboration',
      description: 'Working together on assignments, projects, and exam preparation.',
      icon: '🤝'
    },
    {
      title: 'Learning',
      description: 'Sharing knowledge and helping each other understand complex CS concepts.',
      icon: '💡'
    },
    {
      title: 'Friendship',
      description: 'Building lasting friendships that extend beyond our university years.',
      icon: '❤️'
    }
  ]

  const timeline = [
    {
      year: '2023',
      title: 'Semester 1: New Beginnings',
      description:
        'Embarked on our Computer Science journey at University of Dhaka, forming new friendships and adapting to campus life while laying the foundation in core CS subjects.',
    },
    {
      year: '2024',
      title: 'Semester 2: Collaborative Growth',
      description:
        'Worked together on group projects, strengthened our grasp of key topics, and fostered a supportive community spirit within the batch.',
    },
    {
      year: '2024',
      title: 'Semester 3: Advancing Forward',
      description:
        'Tackled more advanced coursework, shared knowledge, and encouraged one another through academic challenges, further solidifying our teamwork.',
    },
    {
      year: '2025',
      title: 'Semester 4: Reaching New Heights',
      description:
        'Completed our fourth semester, celebrated achievements, and prepared for the next steps in our academic and personal growth as a united batch.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs with education-themed colors */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-violet-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-blue-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-violet-400/6 rounded-full blur-2xl"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-20 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-violet-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <span>About Our Batch</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent leading-tight">
            Lubdhok-29
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 px-4">
            We are 60 Computer Science students at University of Dhaka, currently in our 3rd year. 
            Together we learn, grow, and support each other through our academic journey.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl mx-auto max-w-5xl border border-slate-600/50">
            <Image
              src="/batch.jpg"
              alt="Lubdhok Batch - University of Dhaka CS Students"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end">
              <div className="p-4 sm:p-6 md:p-8 text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Computer Science, University of Dhaka</h2>
                <p className="text-base sm:text-lg md:text-xl text-blue-200">3rd Year Students - Lubdhok-29</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 px-4 sm:px-0">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-800/60 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 text-center border border-slate-600/50 hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + (index * 0.1)}s`, animationFillMode: 'forwards' }}
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-slate-300 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

 

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent">
              What We Value
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mb-6"></div>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
              The simple principles that guide us as Computer Science students at University of Dhaka
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-slate-800/60 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center border border-slate-600/50 hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-300 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.7 + (index * 0.1)}s`, animationFillMode: 'forwards' }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent">
              Our Journey So Far
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mb-6"></div>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-4">
              From new students to second-year Computer Science majors
            </p>
          </div>

          <div className="relative px-4 sm:px-8">
            {/* Timeline Line - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-12 opacity-0 animate-fade-in-up ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                style={{ animationDelay: `${1.2 + (index * 0.2)}s`, animationFillMode: 'forwards' }}
              >
                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 md:pr-12 sm:text-right' : 'sm:pl-8 md:pl-12 sm:text-left'}`}>
                  <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group">
                    <div className="text-lg sm:text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">{item.year}</div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot - Only visible on larger screens */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full border-4 border-slate-800 shadow-lg z-10"></div>
                
                {/* Mobile timeline indicator */}
                <div className="sm:hidden w-3 h-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-4 flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>
 
      </div>
    </div>
  )
}
