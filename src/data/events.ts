export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'upcoming' | 'past'
  category: 'academic' | 'social' | 'technical' | 'cultural'
  images: string[]
  organizer: string
  attendees?: number
  highlights?: string[]
}

export const events: Event[] = [
    {
        id: '1',
        title: 'Freshers Week 2024',
        description:
            'Welcome celebration for new batch members with orientation, ice-breaking activities, cultural programs, and introduction to university life.',
        date: '2024-10-27 to 2024-11-02',
        time: '9:00 AM - 6:00 PM',
        location: 'Computer Science and Engineering Department',
        type: 'past',
        category: 'social',
        images: [
            '/events/freshers1.jpg',
            '/events/freshers1a.jpg',
            '/events/freshers2.jpg',
            '/events/freshers3.jpg',
            '/events/freshers4.jpg',
            '/events/freshers5.jpg',
            '/events/freshers6.jpg',
            '/events/freshers7.jpg',
            '/events/freshers8.jpg',
        ],
        organizer: '29th Batch',
    },
    {
        id: '2',
        title: 'Annual Tour 2025 - Manikganj Dera Resort & Spa',
        description:
            'One-day educational cum recreational tour to Manikganj Dera Resort with team-building activities, sightseeing, and bonding sessions.',
        date: '2024-12-28',
        time: '8:00 AM Departure',
        location: 'Manikganj Dera Resort & Spa',
        type: 'past',
        category: 'social',
        images: [
            '/events/tour1.jpg',
            '/events/tour2.jpg',
            '/events/tour3.jpg',
            '/events/tour4.jpg',
        ],
        organizer: '28th Batch',
    },
    {
        id: '3',
        title: 'TT Fest 2024',
        description:
            'Intra-batch Table Tennis tournament with singles and doubles categories. Show your skills and compete for the championship.',
        date: '2024-12-09',
        time: '10:00 AM - 5:00 PM',
        location: 'Computer Science and Engineering Department',
        type: 'past',
        category: 'social',
        images: [
            '/events/ttfest1.jpg',
            '/events/ttfest2.jpg',
            '/events/ttfest3.jpg',
            '/events/ttfest4.jpg',
        ],
        organizer: '29th Batch',
    },
    {
        id: '4',
        title: 'Bhojon Utshab 1432',
        description:
            'Grand food festival featuring traditional Bangladeshi cuisine, international dishes, and homemade specialties from batch members.',
        date: '2024-04-30',
        time: '12:00 PM - 5:00 PM',
        location: 'Department of Genetic Engineering and Biotechnology',
        type: 'past',
        category: 'cultural',
        images: [
            '/events/food1.jpg',
            '/events/food2.jpg',
            '/events/food3.jpg',
            '/events/food4.jpg',
            '/events/food5.jpg'
        ],
        organizer: 'CSEDU Students Club, RMEDU Students Club, Genetic Engineering and Biotechnology Department',
    },
    {
        id:'5',
        title: 'CSEDU Annual Cultural Programme and Prize Giving Ceremony 2025', 
        description:
            'Annual cultural event showcasing talents from all batches with performances, awards, and recognition of outstanding contributions.',
        date: '2025-04-13',
        time: '10:00 AM - 10:00 PM',
        location: 'TSC Auditorium, University of Dhaka',
        type: 'past',
        category: 'cultural',
        images: [
            '/events/cultural1.jpg',
            '/events/cultural2.jpg',
            '/events/cultural3.jpg',
            '/events/cultural4.jpg',
            '/events/cultural5.jpg'
        ],
        organizer: '29th Batch',
    }
]

// Helper functions for categorizing events
export const getUpcomingEvents = () => events.filter(event => event.type === 'upcoming')
export const getPastEvents = () => events.filter(event => event.type === 'past')
export const getEventsByCategory = (category: Event['category']) => events.filter(event => event.category === category)
export const getEventById = (id: string) => events.find(event => event.id === id)
