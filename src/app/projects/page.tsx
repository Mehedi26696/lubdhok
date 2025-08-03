import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: 'web-development' | 'mobile-app' | 'ai-ml' | 'iot' | 'research' | 'robotics'
  status: 'completed' | 'ongoing' | 'planned'
  technologies: string[]
  team: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  startDate: string
  endDate?: string
  achievements?: string[]
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Campus Management System',
    description: 'Comprehensive web application for managing campus resources, events, and student activities.',
    longDescription: 'A full-stack web application designed to streamline campus operations including student attendance, event management, resource booking, and academic scheduling. Features real-time notifications, role-based access control, and responsive design.',
    category: 'web-development',
    status: 'completed',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT'],
    team: ['Rahul Sharma', 'Priya Patel', 'Anjali Verma'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/lubdhok-batch/campus-management',
    liveUrl: 'https://campus-management-demo.vercel.app',
    startDate: '2023-08-01',
    endDate: '2023-12-15',
    achievements: ['Best Project Award 2023', 'Deployed in 3 colleges', '500+ active users']
  },
  {
    id: '2',
    title: 'AI-Powered Study Assistant',
    description: 'Machine learning application that helps students with personalized study recommendations and progress tracking.',
    longDescription: 'An intelligent study companion that analyzes learning patterns, provides personalized recommendations, generates quiz questions, and tracks academic progress. Uses natural language processing for content summarization and question generation.',
    category: 'ai-ml',
    status: 'ongoing',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'OpenAI API'],
    team: ['Arjun Singh', 'Vikash Kumar', 'Rahul Sharma'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/lubdhok-batch/ai-study-assistant',
    startDate: '2023-10-01',
    achievements: ['80% accuracy in recommendations', 'Featured in college newsletter']
  },
  {
    id: '3',
    title: 'Batch Connect Mobile App',
    description: 'Cross-platform mobile application connecting batch members with real-time messaging and event updates.',
    longDescription: 'A comprehensive mobile application built with React Native that keeps batch members connected. Features include real-time messaging, event notifications, study group formation, resource sharing, and alumni networking.',
    category: 'mobile-app',
    status: 'completed',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Node.js'],
    team: ['Sneha Gupta', 'Anjali Verma', 'Priya Patel'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/lubdhok-batch/batch-connect',
    startDate: '2023-06-01',
    endDate: '2023-11-30',
    achievements: ['200+ downloads', '4.8 star rating', 'Winner of Mobile App Competition']
  },
  {
    id: '4',
    title: 'IoT Environmental Monitoring',
    description: 'Smart sensor network for monitoring air quality, temperature, and humidity across campus locations.',
    longDescription: 'An Internet of Things project that deploys sensor networks across campus to monitor environmental conditions. Data is collected in real-time, analyzed for patterns, and presented through a web dashboard with alert systems for anomalies.',
    category: 'iot',
    status: 'ongoing',
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'MQTT', 'InfluxDB', 'Grafana'],
    team: ['Arjun Singh', 'Vikash Kumar'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/lubdhok-batch/iot-monitoring',
    startDate: '2023-09-01',
    achievements: ['15 sensor nodes deployed', 'Real-time data visualization']
  },
  {
    id: '5',
    title: 'Automated Library Management',
    description: 'Robotic system for book sorting, inventory management, and automated check-in/check-out processes.',
    longDescription: 'An innovative robotics project that automates library operations using computer vision for book recognition, robotic arms for sorting, and RFID technology for tracking. Integrates with existing library management software.',
    category: 'robotics',
    status: 'planned',
    technologies: ['ROS', 'OpenCV', 'Python', 'Arduino', 'RFID', 'Computer Vision'],
    team: ['Arjun Singh', 'Rahul Sharma', 'Vikash Kumar'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    startDate: '2024-02-01',
    achievements: []
  },
  {
    id: '6',
    title: 'Sustainable Energy Research',
    description: 'Research project on optimizing solar panel efficiency using machine learning and IoT sensors.',
    longDescription: 'A comprehensive research initiative exploring the optimization of solar panel performance through predictive analytics. Combines IoT sensors for real-time data collection with machine learning models to predict and improve energy output.',
    category: 'research',
    status: 'ongoing',
    technologies: ['Python', 'Scikit-learn', 'IoT Sensors', 'Data Analytics', 'Solar Technology'],
    team: ['Priya Patel', 'Sneha Gupta', 'Vikash Kumar'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    startDate: '2023-07-01',
    achievements: ['Published preliminary findings', 'Grant funding secured']
  }
]

export default function ProjectsPage() {
  const completedProjects = projects.filter(project => project.status === 'completed')
  const ongoingProjects = projects.filter(project => project.status === 'ongoing')
  const plannedProjects = projects.filter(project => project.status === 'planned')

  const getCategoryColor = (category: string) => {
    const colors = {
      'web-development': 'bg-blue-500',
      'mobile-app': 'bg-green-500',
      'ai-ml': 'bg-purple-500',
      'iot': 'bg-orange-500',
      'research': 'bg-red-500',
      'robotics': 'bg-indigo-500'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  const getCategoryBorder = (category: string) => {
    const colors = {
      'web-development': 'border-blue-200',
      'mobile-app': 'border-green-200',
      'ai-ml': 'border-purple-200',
      'iot': 'border-orange-200',
      'research': 'border-red-200',
      'robotics': 'border-indigo-200'
    }
    return colors[category as keyof typeof colors] || 'border-gray-200'
  }

  const getStatusColor = (status: string) => {
    const colors = {
      completed: 'bg-green-100 text-green-800 border-green-200',
      ongoing: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      planned: 'bg-blue-100 text-blue-800 border-blue-200'
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const formatCategoryName = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover the innovative projects developed by the Lubdhok Batch 2024. From web applications to AI research, 
            we're building solutions that matter.
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-violet-200/50">
            <div className="text-3xl font-bold text-violet-600 mb-2">{projects.length}</div>
            <div className="text-gray-600 font-medium">Total Projects</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-green-200/50">
            <div className="text-3xl font-bold text-green-600 mb-2">{completedProjects.length}</div>
            <div className="text-gray-600 font-medium">Completed</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-yellow-200/50">
            <div className="text-3xl font-bold text-yellow-600 mb-2">{ongoingProjects.length}</div>
            <div className="text-gray-600 font-medium">Ongoing</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-blue-200/50">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-600 font-medium">Categories</div>
          </div>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-200/50">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-700 font-medium">Web Development</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200/50">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-700 font-medium">Mobile App</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-200/50">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700 font-medium">AI & ML</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-orange-200/50">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-orange-700 font-medium">IoT</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-red-200/50">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-red-700 font-medium">Research</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-indigo-200/50">
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            <span className="text-indigo-700 font-medium">Robotics</span>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse portfolio of projects spanning multiple technologies and domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border ${getCategoryBorder(project.category)} hover:shadow-2xl hover:scale-[1.02] transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`${getCategoryColor(project.category)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {formatCategoryName(project.category)}
                    </span>
                    <span className={`${getStatusColor(project.status)} text-xs font-semibold px-3 py-1 rounded-full border capitalize`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-violet-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-xs px-2 py-1 rounded-full border border-violet-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Team</h4>
                    <div className="text-sm text-gray-600">
                      {project.team.join(', ')}
                    </div>
                  </div>

                  {/* Achievements */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Achievements</h4>
                      <div className="space-y-1">
                        {project.achievements.slice(0, 2).map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <svg className="w-3 h-3 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-700 hover:bg-gray-800 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                      >
                        Live Demo
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-bold py-2 px-4 rounded-lg opacity-50 cursor-not-allowed">
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Have a Project Idea?</h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Want to collaborate on a project or share your innovative idea with the batch? 
            Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Propose a Project
            </a>
            <a 
              href="mailto:projects@lubdhokbatch2024.com"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Join a Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
