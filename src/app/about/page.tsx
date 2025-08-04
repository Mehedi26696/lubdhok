import Image from 'next/image'

export default function AboutPage() {
  const stats = [
    { label: 'Batch Members', value: '50+', icon: '👥' },
    { label: 'Departments', value: '6', icon: '🏫' },
    { label: 'Active Projects', value: '12+', icon: '🚀' },
    { label: 'Years Together', value: '4', icon: '📅' },
  ]

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for academic and professional excellence in everything we do.',
      icon: '🎯'
    },
    {
      title: 'Collaboration',
      description: 'Together we achieve more through teamwork and mutual support.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and innovative thinking to solve complex problems.',
      icon: '💡'
    },
    {
      title: 'Growth',
      description: 'Continuous learning and personal development are at our core.',
      icon: '📈'
    }
  ]

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistent high performance with batch average of 8.2 CGPA',
      year: '2020-2024'
    },
    {
      title: 'Inter-College Hackathon Champions',
      description: 'First place in Regional Tech Innovation Challenge',
      year: '2023'
    },
    {
      title: 'Research Publications',
      description: '15+ research papers published in international journals',
      year: '2022-2024'
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with 10+ leading technology companies',
      year: '2023-2024'
    },
    {
      title: 'Community Impact',
      description: 'Successfully organized 25+ technical and cultural events',
      year: '2021-2024'
    },
    {
      title: 'Placement Success',
      description: '95% placement rate with top-tier companies',
      year: '2024'
    }
  ]

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Lubdhok Batch 2024 was formed with ambitious students from diverse engineering backgrounds.'
    },
    {
      year: '2021',
      title: 'Building Foundations',
      description: 'Established study groups, organized first cultural fest, and launched peer learning initiatives.'
    },
    {
      year: '2022',
      title: 'Growing Together',
      description: 'First major hackathon participation, started community projects, and strengthened academic collaboration.'
    },
    {
      year: '2023',
      title: 'Making Impact',
      description: 'Won multiple competitions, published research papers, and launched innovative projects.'
    },
    {
      year: '2024',
      title: 'Ready to Soar',
      description: 'Final year excellence, placement successes, and preparing for the next chapter of our journey.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            About Lubdhok Batch 2024
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            We are more than just a batch - we&apos;re a community of passionate engineers, innovators, and leaders 
            committed to excellence, collaboration, and making a positive impact in the world.
          </p>
          
          {/* Hero Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-5xl">
            <Image
              src="/batch.jpg"
              alt="Lubdhok Batch 2024"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 via-purple-900/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Excellence Since 2020</h2>
                <p className="text-lg md:text-xl text-violet-100">Building the future, one innovation at a time</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed text-violet-100">
              To foster a collaborative learning environment where engineering students can excel academically, 
              develop innovative solutions, and build lasting professional relationships that drive technological advancement 
              and social impact.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
            <div className="text-5xl mb-6">🔮</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl leading-relaxed text-blue-100">
              To be recognized as a leading batch of engineering professionals who contribute meaningfully to society 
              through innovation, ethical leadership, and continuous learning, while maintaining strong bonds that 
              last a lifetime.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and define our character as a community
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
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From freshmen to industry-ready engineers - celebrating our growth and milestones
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

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating the milestones and accomplishments that define our excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-bold py-2 px-4 rounded-full">
                    {achievement.year}
                  </span>
                  <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who guide and coordinate our batch activities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rahul Sharma', role: 'Batch Representative', initials: 'RS', color: 'from-blue-500 to-purple-600' },
              { name: 'Priya Patel', role: 'Academic Coordinator', initials: 'PP', color: 'from-pink-500 to-red-500' },
              { name: 'Sneha Gupta', role: 'Event Manager', initials: 'SG', color: 'from-green-500 to-teal-500' }
            ].map((leader, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative w-32 h-32 mx-auto mb-6 bg-gradient-to-br ${leader.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-4xl font-bold text-white">{leader.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-violet-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Want to Connect?</h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Whether you&apos;re a fellow student, industry professional, or academic researcher, 
            we&apos;d love to hear from you and explore collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <a 
              href="/members"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
