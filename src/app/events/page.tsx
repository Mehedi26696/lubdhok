import Image from 'next/image'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'upcoming' | 'past'
  category: 'academic' | 'social' | 'technical' | 'cultural'
  image: string
  organizer: string
  attendees?: number
  highlights?: string[]
}

const events: Event[] = [
  {
    id: '1',
    title: 'Technical Workshop: AI & Machine Learning',
    description: 'Comprehensive workshop covering fundamentals of AI and ML with hands-on projects and industry insights.',
    date: '2024-02-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Engineering Auditorium',
    type: 'upcoming',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    organizer: 'Rahul Sharma & Technical Team'
  },
  {
    id: '2',
    title: 'Batch Annual Meet 2024',
    description: 'Grand annual gathering of Lubdhok Batch with cultural programs, awards ceremony, and networking.',
    date: '2024-03-20',
    time: '6:00 PM - 11:00 PM',
    location: 'College Main Hall',
    type: 'upcoming',
    category: 'social',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
    organizer: 'Sneha Gupta & Event Team'
  },
  {
    id: '3',
    title: 'Study Group: Semester 7 Exam Prep',
    description: 'Intensive study sessions for semester 7 subjects with peer learning and doubt resolution.',
    date: '2024-01-25',
    time: '2:00 PM - 6:00 PM',
    location: 'Library Conference Room',
    type: 'upcoming',
    category: 'academic',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    organizer: 'Vikash Kumar & Study Team'
  },
  {
    id: '4',
    title: 'Cultural Night: Talent Showcase',
    description: 'Evening of music, dance, poetry, and performances celebrating the diverse talents of our batch.',
    date: '2024-04-12',
    time: '7:00 PM - 10:00 PM',
    location: 'Open Air Theatre',
    type: 'upcoming',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    organizer: 'Anjali Verma & Cultural Team'
  },
  {
    id: '5',
    title: 'Hackathon: Innovation Challenge',
    description: '24-hour coding marathon where teams solved real-world problems with innovative technology solutions.',
    date: '2023-12-10',
    time: '9:00 AM - 9:00 AM (+1)',
    location: 'Computer Science Lab',
    type: 'past',
    category: 'technical',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    organizer: 'Arjun Singh & Tech Team',
    attendees: 45,
    highlights: ['15 teams participated', '5 winning projects', 'Industry mentor sessions']
  },
  {
    id: '6',
    title: 'Winter Fest 2023',
    description: 'Three-day winter celebration with games, food stalls, competitions, and memorable moments.',
    date: '2023-12-28',
    time: 'All Day Event',
    location: 'College Campus',
    type: 'past',
    category: 'social',
    image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=600&fit=crop',
    organizer: 'Batch Committee',
    attendees: 78,
    highlights: ['Photo booth sessions', 'Live music performances', 'Food festival']
  }
]

export default function EventsPage() {
  const upcomingEvents = events.filter(event => event.type === 'upcoming')
  const pastEvents = events.filter(event => event.type === 'past')

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-500',
      social: 'bg-green-500',
      technical: 'bg-purple-500',
      cultural: 'bg-pink-500'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  const getCategoryBorder = (category: string) => {
    const colors = {
      academic: 'border-blue-200',
      social: 'border-green-200',
      technical: 'border-purple-200',
      cultural: 'border-pink-200'
    }
    return colors[category as keyof typeof colors] || 'border-gray-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Batch Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Stay updated with all the exciting events, workshops, and gatherings organized by and for the Lubdhok Batch 2024.
          </p>
        </div>

        {/* Event Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-200/50">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-700 font-medium">Academic</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200/50">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-700 font-medium">Social</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-200/50">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700 font-medium">Technical</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-pink-200/50">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-pink-700 font-medium">Cultural</span>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these exciting upcoming events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border ${getCategoryBorder(event.category)} hover:shadow-2xl hover:scale-[1.02] transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(event.category)} text-white text-sm font-semibold px-3 py-1 rounded-full capitalize`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-violet-600 font-bold text-sm">UPCOMING</span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-violet-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{event.time}</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">{event.location}</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="font-medium">{event.organizer}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                    Register / Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Past Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating the memorable moments and successful events we've organized
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border ${getCategoryBorder(event.category)} hover:shadow-2xl hover:scale-[1.02] transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Event Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(event.category)} text-white text-sm font-semibold px-3 py-1 rounded-full capitalize`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-600/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white font-bold text-sm">COMPLETED</span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>

                    {event.attendees && (
                      <div className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-medium">{event.attendees} Attendees</span>
                      </div>
                    )}

                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="font-medium">{event.organizer}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {event.highlights && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">Event Highlights</h4>
                      <div className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Have an Event Idea?</h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Want to organize an event for our batch? We'd love to hear your ideas and help bring them to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Propose an Event
            </a>
            <a 
              href="mailto:events@lubdhokbatch2024.com"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Contact Event Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
