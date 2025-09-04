export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'upcoming' | 'past' | 'ongoing'
  category: 'academic' | 'social' | 'technical' | 'cultural'
  images: string[]
  organizer: string
  attendees?: number
  highlights?: string[]
  videos?: string[]
  registrationLink?: string
}

export const events: Event[] = [
     {
        id: '1',
        title: 'CSEDU Indooor Games 2023',
        description:
            'Intra-batch indoor games competition including chess, carrom, and table tennis. Compete for the championship and showcase your skills.',
        date: '2023-08-24 to 2023-08-26',
        time: '10:00 AM - 5:00 PM',
        location: 'Computer Science and Engineering Department',
        type: 'past',
        category: 'social',
        images: [
             '/events/indoor20231.jpg',
        ],
        organizer: 'CSEDU Students Club',
        highlights: [
            'Exciting matches and friendly competition',
            'Prizes for winners and participants'
        ]
    },
    {   
        id: '2',
        title: 'CSEDU Freshers Week 2023',
        description:
            'A week-long celebration to welcome the new batch of Computer Science and Engineering students with various activities, workshops, and cultural programs.',
        date: '2023-09-21 to 2023-09-27',
        time: '10:00 AM - 5:00 PM',
        location: 'Computer Science and Engineering Department',
        type: 'past',
        category: 'social',
        images: [
            '/events/freshers20231.jpg',
            '/events/freshers20232.jpg',
            '/events/freshers20233.jpg'
        ],
        organizer: '28th Batch',
        highlights: [
            'Ice-breaking activities',
            'Fun games and team-building exercises',
            'Treasure hunt'
        ]
    },
   
    {
        id: '3',
        title: 'Freshers Reception and Farewell 2023',
        description:
            'A grand event to welcome the new batch and bid farewell to the graduating students with cultural performances, speeches, and awards.',
        date: '2024-02-07',
        time: '5:00 PM - 10:00 PM',
        location: 'TSC Auditorium, University of Dhaka',
        type: 'past',
        category: 'social',
        images: [
            '/events/reception20231.jpg',
            '/events/reception20232.jpg',
            '/events/reception20233.jpg',
            '/events/reception20234.jpg',
            '/events/reception20235.jpg'
        ],
        organizer: '28th Batch',
        highlights: [
            'Cultural performances',
            'Speeches from faculty and alumni',
            'Awards for outstanding students',
            'Band performances'
        ],
        videos: [
            'https://youtube.com/shorts/lpeLw342SGA?si=kOjIqf71uoNGM0DY',
            'https://youtu.be/2q0_KJ199PI?si=4wq7TVO5Uszw2h3J',
            'https://youtu.be/fcHJ3OnYA4w?si=uGofmzvpayrPx0IX'

        ]
    },
    {
        id: '4',
        title: 'Food Festival 2024',
        description:
            'A grand food festival featuring traditional Bangladeshi cuisine, international dishes, and homemade specialties from batch members.',
        date: '2024-02-19',
        time: '12:00 PM - 5:00 PM',
        location: 'Science Complex, University of Dhaka',
        type: 'past',
        category: 'cultural',
        images: [
            '/events/food20241.jpg',
            '/events/food20242.jpg'
        ],
        organizer: 'CSEDU Students Club,Genetic Engineering and Biotechnology Department',
        highlights: [
            'Diverse food stalls from different departments',
            'Best food stall gets prize money'
        ]
    },
    {
        id: '5',
        title: 'CSEDU Annual Tour 2024 - Fortis Downtown Resort',
        description:
            'A one-day educational cum recreational tour to Fortis Downtown Resort with team-building activities, sightseeing, and bonding sessions.',
        date: '2024-03-04',
        time: '8:00 AM Departure',
        location: 'Fortis Downtown Resort',
        type: 'past',
        category: 'social',
        images: [
            '/events/tour20241.jpg',
            '/events/tour20242.jpg'
        ],
        organizer: '27th Batch',
        highlights: [
            'Team-building activities',
            'Sightseeing and exploration',
            'Bonding sessions and fun games',
            'Fun games and team-building exercises',
            'Tug of war'
        ]
    },
    {
        id: '6',
        title: 'CSEDU IFTAR 2024',
        description:
            'A special Iftar gathering for the CSEDU community to break the fast together with delicious food and prayer.',
        date: '2024-03-23',
        time: '5:30 PM - 7:00 PM',
        location: 'Computer Science and Engineering Department',
        type: 'past',
        category: 'cultural',
        images: [
            '/events/Iftar20241.jpg',
            '/events/Iftar20242.jpg'
        ],
        organizer: 'CSEDU Students Club',
        highlights: [ 
            'Prayer and reflection time',
            'Community bonding activities'
        ]
    },
    {
        id: '7',
        title: 'CSEDUIC Presents Battle of the Brains 2024',
        description:
            'A thrilling coding competition between the 29th and 28th batch, featuring algorithmic problem solving, teamwork, and exciting prizes. Teams from both batches compete to showcase their programming skills and claim the title of best coders.',
        date: '2024-10-24',
        time: '2:00 PM - 6:00 PM',
        location: 'Computer Science and Engineering Department',
        type: 'past',
        category: 'technical',
        images: [
            '/events/battle20241.jpg',
            '/events/battle20242.jpg',
            '/events/battle20243.jpg'
        ],
        organizer: 'CSEDU IC Club',
        highlights: [
            'Intense head-to-head coding rounds',
            'Live scoreboard and commentary',
            'Special prizes for top performers'
        ]
    },
    
    {
        id: '8',
        title: 'CSEDU Freshers Week 2024',
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
        highlights: [
            'Ice-breaking activities',
            'Fun games and team-building exercises',
            'Treasure hunt'
        ]
    },
    {
        id: '9',
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
        highlights: [
            'Exciting matches and friendly competition',
            'Prizes for winners and participants'
        ]
    },

    {
        id: '10',
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
            '/events/tour5.jpg',
        ],
        organizer: '28th Batch',
        highlights: [
            'Team-building activities',
            'Sightseeing and exploration',
            'Bonding sessions and fun games',
            'Cultural performances',
            'Raffle draw and prizes'
        ]
    },
     {
        id: '11',
        title: 'CSEDU IFTAR 2025',
        description:
            'Annual Iftar gathering for the CSEDU community featuring delicious food and prayer.',
        date: '2025-03-15',
        time: '5:30 PM - 7:00 PM',
        location: 'Computer Science and Engineering Department',
        type: 'past',
        category: 'cultural',
        images: [
            '/events/Iftar20251.jpg',
            '/events/Iftar20252.jpg'
        ],
        organizer: 'CSEDU Students Club',
        highlights: [
            'Prayer and reflection time',
            'Community bonding activities'
        ]
    },

    {
        id:'12',
        title: 'CSEDU Annual Cultural Programme and Prize Giving Ceremony 2025', 
        description:
            'Annual cultural event showcasing talents from all batches with performances, awards, and recognition of outstanding contributions.',
        date: '2025-04-13',
        time: '10:00 AM - 10:00 PM',
        location: 'TSC Auditorium, University of Dhaka',
        type: 'past',
        category: 'cultural',
        images: [
            '/events/cultural.jpg',
            '/events/cultural0.jpg',
            '/events/cultural2.jpg',
            '/events/cultural3.jpg',
            '/events/cul.jpg',
            '/events/cultural4.jpg',
            '/events/cultural5.jpg'
        ],
        organizer: '29th Batch',
        highlights: [
            'Cultural performances from all batches',
            'Prize distribution for outstanding achievements',
            'Special guests and alumni participation',
            'Band performances'
        ],
        videos: [
             'https://youtu.be/ux6jposL5no?si=7oOKskmhMUJdbzql',
             'https://youtu.be/0w1fkCWPvAA?si=R5_9tw7GfbFqMOP1',
             'https://youtu.be/zUNnP5gWJ-I?si=RkhS7OCs8OFt1H6T',
             'https://youtu.be/pcJmPPiZEOQ?si=k2FI6I6G-0v1Hyh_',
             'https://youtu.be/OzH2HnG7ILU?si=_7ZjXV3lS8nnzwL3',
             'https://youtu.be/seg-meWqk-M?si=FlxhO4ACmSu21eoA'
        ]

    },
  
    {
        id: '13',
        title: 'Bhojon Utshab 1432',
        description:
            'Grand food festival featuring traditional Bangladeshi cuisine, international dishes, and homemade specialties from batch members.',
        date: '2025-04-30',
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
        highlights: [
            'Diverse food stalls from different departments',
            'Best food stall gets prize money'  
            ]
    },
    {
        id: '14',
        title: 'CSEDU Freshers Week 2025',
        description:
            'A week-long series of events and activities to welcome new students to the CSE Department.',
        date: '2025-08-30 to 2025-09-04',
        time: '10:00 AM - 5:00 PM',
        location: 'CSE Department',
        type: 'past',
        category: 'social',
        images: [
            '/events/fresh2025.jpg',
            '/events/fresh20251.jpg',
            '/events/fresh20252.jpg'
        ],
        organizer: '30th Batch',
        highlights: [
            'Ice-breaking activities',
            'Fun games and team-building exercises',
            'Treasure hunt'
        ]
    },
    {
        id: '15',
        title: 'CSEDUIC Presents Battle of Brains 2025',
        description:
            'Annual coding competition  between 29th Batch and 30th Batch.',
        date: '2025-09-20',
        time: '9:00 AM - 5:00 PM',
        location: 'CSE Department',
        type: 'upcoming',
        category: 'technical',
        images: [
            '/events/brains2025.jpg'
        ],
        organizer: 'CSEDUIC Club',
        registrationLink: 'https://forms.gle/ZanjSwVVCDaa4NN2A',
    }

]

// Helper functions for categorizing events
export const getUpcomingEvents = () => events.filter(event => event.type === 'upcoming')
export const getPastEvents = () => events.filter(event => event.type === 'past')
export const getOngoingEvents = () => events.filter(event => event.type === 'ongoing')
export const getEventsByCategory = (category: Event['category']) => events.filter(event => event.category === category)
export const getEventById = (id: string) => events.find(event => event.id === id)
