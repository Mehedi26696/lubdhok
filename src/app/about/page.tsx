import Image from 'next/image'
import Link from 'next/link'

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
      title: 'First Year Journey',
      description: 'Started our Computer Science journey at Dhaka University, getting to know each other and adapting to university life.'
    },
    {
      year: '2024',
      title: 'Growing as Lubdhok',
      description: 'Now in our second year, we have formed a strong batch identity with better understanding of our field and stronger friendships.'
    },
    {
      year: 'Future',
      title: 'Looking Ahead',
      description: 'Continuing our studies, supporting each other, and preparing for our future careers in Computer Science.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Lubdhok-CSEDU-29
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            We are 60 Computer Science students at Dhaka University, currently in our 3rd year. 
            Together we learn, grow, and support each other through our academic journey.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-5xl border border-slate-700/50">
            <Image
              src="/batch.jpg"
              alt="Lubdhok Batch - Dhaka University CS Students"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-cyan-900/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Computer Science, Dhaka University</h2>
                <p className="text-lg md:text-xl text-cyan-200">3rd Year Students - Lubdhok-CSEDU-29</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-slate-700/50 hover:shadow-2xl hover:scale-105 hover:bg-slate-700/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

       

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What We Value
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The simple principles that guide us as Computer Science students at Dhaka University
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-slate-700/50 hover:shadow-2xl hover:scale-105 hover:bg-slate-700/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Journey So Far
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From new students to third-year Computer Science majors
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-700/50 hover:shadow-2xl hover:bg-slate-700/50 transition-all duration-500">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-slate-800 shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>
 
 
      </div>
    </div>
  )
}
