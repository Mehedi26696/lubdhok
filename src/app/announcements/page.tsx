import Image from 'next/image'

interface Announcement {
  id: string
  title: string
  content: string
  category: 'academic' | 'events' | 'opportunities' | 'general' | 'urgent' | 'achievements'
  priority: 'high' | 'medium' | 'low'
  date: string
  author: string
  tags: string[]
  pinned: boolean
  image?: string
  attachments?: string[]
  relatedLinks?: { title: string; url: string }[]
}

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Semester 7 Final Exam Schedule Released',
    content: 'The final examination schedule for Semester 7 has been released. Please check your respective department notice boards and email for detailed timetables. Exam preparation study groups are being organized starting next week.',
    category: 'academic',
    priority: 'high',
    date: '2024-01-15',
    author: 'Academic Committee',
    tags: ['exams', 'semester-7', 'schedule', 'important'],
    pinned: true,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop',
    relatedLinks: [
      { title: 'Download Exam Schedule', url: '#' },
      { title: 'Study Group Registration', url: '#' }
    ]
  },
  {
    id: '2',
    title: 'Technical Workshop: AI & Machine Learning - Registration Open',
    content: 'Exciting opportunity to learn AI and ML fundamentals! Our upcoming technical workshop will cover practical applications, hands-on projects, and industry insights. Limited seats available - register now!',
    category: 'events',
    priority: 'high',
    date: '2024-01-12',
    author: 'Rahul Sharma',
    tags: ['workshop', 'ai', 'machine-learning', 'registration'],
    pinned: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    relatedLinks: [
      { title: 'Register Now', url: '#' },
      { title: 'Workshop Details', url: '#' }
    ]
  },
  {
    id: '3',
    title: 'Internship Opportunities - Tech Companies',
    content: 'Great news! We have received internship opportunities from leading tech companies. Positions available for web development, mobile app development, and data science roles. Application deadlines vary.',
    category: 'opportunities',
    priority: 'high',
    date: '2024-01-10',
    author: 'Placement Committee',
    tags: ['internship', 'tech-companies', 'opportunities', 'applications'],
    pinned: false,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
    attachments: ['Internship_Guidelines.pdf', 'Application_Form.pdf'],
    relatedLinks: [
      { title: 'View All Opportunities', url: '#' },
      { title: 'Application Guidelines', url: '#' }
    ]
  },
  {
    id: '4',
    title: 'Batch Annual Meet 2024 - Save the Date!',
    content: 'Mark your calendars! Our grand annual batch meet is scheduled for March 20, 2024. Cultural programs, awards ceremony, networking sessions, and much more. Stay tuned for registration details.',
    category: 'events',
    priority: 'medium',
    date: '2024-01-08',
    author: 'Sneha Gupta',
    tags: ['annual-meet', 'cultural', 'networking', 'awards'],
    pinned: false,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop',
    relatedLinks: [
      { title: 'Event Details', url: '#' }
    ]
  },
  {
    id: '5',
    title: 'Study Materials Updated - Semester 7',
    content: 'New study materials, lecture notes, and assignment solutions have been uploaded for all Semester 7 subjects. Access them through our study materials portal. Special thanks to contributors!',
    category: 'academic',
    priority: 'medium',
    date: '2024-01-05',
    author: 'Priya Patel',
    tags: ['study-materials', 'semester-7', 'notes', 'assignments'],
    pinned: false,
    relatedLinks: [
      { title: 'Access Study Materials', url: '/study-materials' }
    ]
  },
  {
    id: '6',
    title: 'Congratulations - Hackathon Winners!',
    content: 'Proud to announce that our batch secured top 3 positions in the Inter-College Hackathon! Team "Innovation Squad" won 1st place with their sustainable tech solution. Celebration party this weekend!',
    category: 'achievements',
    priority: 'medium',
    date: '2024-01-03',
    author: 'Arjun Singh',
    tags: ['hackathon', 'winners', 'achievements', 'celebration'],
    pinned: false,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    relatedLinks: [
      { title: 'View Project Details', url: '#' }
    ]
  },
  {
    id: '7',
    title: 'Library Extended Hours During Exams',
    content: 'Good news for all students! The library will have extended operating hours during the examination period. Open until 11 PM on weekdays and 9 PM on weekends. Additional study spaces have been arranged.',
    category: 'general',
    priority: 'low',
    date: '2024-01-01',
    author: 'Library Committee',
    tags: ['library', 'extended-hours', 'exams', 'study-spaces'],
    pinned: false
  },
  {
    id: '8',
    title: 'Research Paper Publication - Congratulations!',
    content: 'Fantastic achievement! Our batch members Priya Patel and Vikash Kumar have published their research paper on "Sustainable Energy Solutions" in an international journal. Proud moment for all of us!',
    category: 'achievements',
    priority: 'medium',
    date: '2023-12-28',
    author: 'Research Committee',
    tags: ['research', 'publication', 'achievements', 'sustainability'],
    pinned: false,
    relatedLinks: [
      { title: 'Read Paper Abstract', url: '#' }
    ]
  }
]

export default function AnnouncementsPage() {
  const pinnedAnnouncements = announcements.filter(announcement => announcement.pinned)
  const regularAnnouncements = announcements.filter(announcement => !announcement.pinned)

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-500',
      events: 'bg-green-500',
      opportunities: 'bg-purple-500',
      general: 'bg-gray-500',
      urgent: 'bg-red-500',
      achievements: 'bg-yellow-500'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  const getCategoryBorder = (category: string) => {
    const colors = {
      academic: 'border-blue-200',
      events: 'border-green-200',
      opportunities: 'border-purple-200',
      general: 'border-gray-200',
      urgent: 'border-red-200',
      achievements: 'border-yellow-200'
    }
    return colors[category as keyof typeof colors] || 'border-gray-200'
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return (
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
          </svg>
        )
      case 'medium':
        return (
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        )
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Announcements
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest news, opportunities, and important information for the Lubdhok Batch 2024.
          </p>
        </div>

        {/* Announcement Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-200/50">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-700 font-medium">Academic</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200/50">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-700 font-medium">Events</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-200/50">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700 font-medium">Opportunities</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-yellow-200/50">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-yellow-700 font-medium">Achievements</span>
          </div>
        </div>

        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                📌 Pinned Announcements
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Important announcements that require immediate attention
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pinnedAnnouncements.map((announcement, index) => (
                <div 
                  key={announcement.id}
                  className={`group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-amber-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 relative`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Pinned Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    PINNED
                  </div>

                  {/* Image */}
                  {announcement.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={announcement.image}
                        alt={announcement.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className={`${getCategoryColor(announcement.category)} text-white text-sm font-semibold px-3 py-1 rounded-full capitalize`}>
                          {announcement.category}
                        </span>
                        {getPriorityIcon(announcement.priority)}
                      </div>
                      <span className="text-sm text-gray-600">{formatDate(announcement.date)}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-violet-600 transition-colors duration-300">
                      {announcement.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {announcement.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {announcement.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-xs px-3 py-1 rounded-full border border-violet-200/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-gray-700 font-medium">{announcement.author}</span>
                      </div>
                    </div>

                    {/* Related Links */}
                    {announcement.relatedLinks && announcement.relatedLinks.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {announcement.relatedLinks.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link.url}
                            className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-bold py-2 px-4 rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                          >
                            {link.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Recent Announcements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest updates and news from our batch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularAnnouncements.map((announcement, index) => (
              <div 
                key={announcement.id}
                className={`group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border ${getCategoryBorder(announcement.category)} hover:shadow-2xl hover:scale-[1.02] transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                {announcement.image && (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={announcement.image}
                      alt={announcement.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className={`${getCategoryColor(announcement.category)} text-white text-xs font-semibold px-2 py-1 rounded-full capitalize`}>
                        {announcement.category}
                      </span>
                      {getPriorityIcon(announcement.priority)}
                    </div>
                    <span className="text-xs text-gray-600">{formatDate(announcement.date)}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-violet-600 transition-colors duration-300">
                    {announcement.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {announcement.content}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {announcement.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-xs px-2 py-1 rounded-full border border-violet-200/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">{announcement.author}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {announcement.relatedLinks && announcement.relatedLinks.length > 0 ? (
                    <a 
                      href={announcement.relatedLinks[0].url}
                      className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-bold py-2 px-4 rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 text-center block"
                    >
                      Learn More
                    </a>
                  ) : (
                    <button className="w-full bg-gray-100 text-gray-600 text-sm font-bold py-2 px-4 rounded-lg cursor-default">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Stay Updated!</h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Never miss important announcements. Subscribe to get notifications directly to your email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
