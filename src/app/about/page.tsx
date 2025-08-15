import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const stats = [
    { label: 'Batch Members', value: '60', icon: '👥' },
    { label: 'Academic Year', value: '2nd', icon: '📚' },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Lubdhok-29
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            We are 60 Computer Science students at Dhaka University, currently in our 2nd year. 
            Together we learn, grow, and support each other through our academic journey.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-5xl">
            <Image
              src="/batch.jpg"
              alt="Lubdhok Batch - Dhaka University CS Students"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 via-purple-900/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Computer Science, Dhaka University</h2>
                <p className="text-lg md:text-xl text-violet-100">2nd Year Students - Lubdhok-29</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="text-5xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Goal</h2>
            <p className="text-xl leading-relaxed text-violet-100">
              To create a supportive learning environment where all 60 of us can excel in our Computer Science studies, 
              help each other with coursework, and build friendships that will last beyond university.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="text-5xl mb-6">🔮</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed text-blue-100">
              To graduate as skilled Computer Science professionals who maintain strong connections with each other 
              and contribute positively to the tech industry while staying connected as the Lubdhok family.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              What We Value
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The simple principles that guide us as Computer Science students at Dhaka University
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Our Journey So Far
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From new students to second-year Computer Science majors
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50 hover:shadow-2xl transition-all duration-500">
                    <div className="text-2xl font-bold text-violet-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Want to Connect?</h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Whether you&apos;re a fellow student, from other batches, or want to know more about our batch, 
            feel free to reach out to us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <Link 
              href="/events"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              See Our Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
