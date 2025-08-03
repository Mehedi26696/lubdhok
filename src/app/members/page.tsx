import Image from 'next/image'

interface Member {
  id: string
  name: string
  role: string
  department: string
  bio: string
  skills: string[]
  image: string
  social: {
    linkedin?: string
    github?: string
    email?: string
  }
}

const members: Member[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Batch Representative',
    department: 'Computer Science Engineering',
    bio: 'Passionate about web development and AI. Leading our batch towards excellence.',
    skills: ['JavaScript', 'React', 'Python', 'Leadership'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'rahul@example.com'
    }
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Academic Coordinator',
    department: 'Electronics Engineering',
    bio: 'Organizing study materials and academic activities for better learning experience.',
    skills: ['Circuit Design', 'MATLAB', 'Project Management', 'Communication'],
    image: 'https://images.unsplash.com/photo-1494790108755-2616b75b4fc2?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'priya@example.com'
    }
  },
  {
    id: '3',
    name: 'Arjun Singh',
    role: 'Technical Lead',
    department: 'Mechanical Engineering',
    bio: 'Passionate about robotics and automation. Love solving complex engineering problems.',
    skills: ['CAD Design', 'Robotics', 'Manufacturing', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'arjun@example.com'
    }
  },
  {
    id: '4',
    name: 'Sneha Gupta',
    role: 'Event Manager',
    department: 'Civil Engineering',
    bio: 'Organizing memorable events and building strong community bonds within our batch.',
    skills: ['Event Planning', 'Communication', 'Structural Design', 'Team Building'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'sneha@example.com'
    }
  },
  {
    id: '5',
    name: 'Vikash Kumar',
    role: 'Study Group Coordinator',
    department: 'Electrical Engineering',
    bio: 'Facilitating collaborative learning and peer-to-peer knowledge sharing.',
    skills: ['Power Systems', 'Renewable Energy', 'Teaching', 'Analysis'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'vikash@example.com'
    }
  },
  {
    id: '6',
    name: 'Anjali Verma',
    role: 'Creative Head',
    department: 'Information Technology',
    bio: 'Designing creative solutions and managing digital presence of our batch.',
    skills: ['UI/UX Design', 'Graphic Design', 'Web Development', 'Creativity'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'anjali@example.com'
    }
  }
]

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Meet Our Batch
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Get to know the amazing individuals who make up the Lubdhok Batch 2024. 
            Each person brings unique talents, perspectives, and energy to our community.
          </p>
        </div>

        {/* Batch Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-violet-200/50">
            <div className="text-3xl font-bold text-violet-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Total Members</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-200/50">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600 font-medium">Departments</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-green-200/50">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-gray-600 font-medium">Core Team</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-orange-200/50">
            <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
            <div className="text-gray-600 font-medium">Batch Year</div>
          </div>
        </div>

        {/* Core Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Core Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who lead and coordinate various activities for our batch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div 
                key={member.id} 
                className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2">
                    {member.role}
                  </div>
                  <p className="text-violet-600 font-medium">{member.department}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Skills & Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-xs px-3 py-1 rounded-full border border-violet-200/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors duration-300 hover:scale-110 transform"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-800 rounded-lg flex items-center justify-center text-white transition-colors duration-300 hover:scale-110 transform"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center text-white transition-colors duration-300 hover:scale-110 transform"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Want to Connect?</h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Are you part of the Lubdhok Batch 2024? Join our community and be featured here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <a 
              href="mailto:lubdhokbatch2024@example.com"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
