// Types for academic projects
export interface TeamMember {
  name: string;
  githubUsername: string;
}

export interface AcademicProject {
  id: string;
  title: string;
  description: string;
  course: string;
  courseCode: string;
  technologies: string[];
  teamSize: number;
  teamMembers: TeamMember[];
  coverImage: string;
  demoUrl?: string;
  sourceCodeUrl?: string;
  documentationUrl?: string;
 
}

export interface ProjectSemester {
  id: string;
  name: string;
  description: string;
  courses: ProjectCourse[];
}

export interface ProjectCourse {
  id: string;
  name: string;
  code: string;
  credits: number;
  projects: AcademicProject[];
}

// Academic Projects Data
export const projectSemesters: ProjectSemester[] = [
  {
    id: "semester-2",
    name: "Semester II",
    description: "Programming Fundamentals Projects",
    courses: [
      {
        id: "cse1201",
        name: "Fundamentals of Programming Lab",
        code: "CSE-1211",
        credits: 3.0,
        projects: [
          {
            id: "cse1211-project1",
            title: "Puzzle-Paradigm-CSE-1211-Project",
            description: "Puzzle Paradigm is a thrilling game where players reconstruct a scrambled image within a set time limit by strategically rearranging its fragmented frames.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures","IGraphics"],
            teamSize: 3,
            teamMembers: [
              { name: "H.M. Mehedi Hasan", githubUsername: "Mehedi26696" },
              { name: "Md. Abu Bakar Siddique", githubUsername: "Abs-Futy7" },
              { name: "Ahil Islam Aurnob", githubUsername: "aheel03" },
            ],
            coverImage: "/projects/sem2/puzzle.PNG",
            sourceCodeUrl: "https://github.com/Mehedi26696/Puzzle-Paradigm-CSE-1211-Project"
          },
          {
            id: "cse1211-project2",
            title: "Starship Assault",
            description: "Starship Assault is an action-packed space shooter game where players pilot their starship through intense battles against enemy fleets.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures","SDL"],
            teamSize: 3,
            teamMembers: [
              { name: "Ahnaf Mahbub Khan", githubUsername: "TheManush" },
              { name: "Anika Sanzida Upoma", githubUsername: "bluerabbit31"},
              { name: "Abdullah-Ash-Sakafy", githubUsername: "Sakafy-34" },
            ],
            coverImage: "/projects/sem2/starship.jpg",
            sourceCodeUrl: "https://github.com/TheManush/starship-assault/tree/main"
          },
          {
            id: "cse1211-project3",
            title: "Brain-Code-Renovo-CSE-1211-Project",
            description: "Brain Code Renovo is a platform where each level consists of unique challenges and puzzles designed to enhance intelligence and problem-solving skills.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures","SDL"],
            teamSize: 3,
            teamMembers: [
              { name: "Aditto Raihan", githubUsername: "aditto007" },
              { name: "Sumaiya Rahman Soma", githubUsername: "srs4929" },
              { name: "Chowdhury Shafahid Rahman", githubUsername: "Shafahid" },
            ],
            coverImage: "/projects/sem2/brain.jpg",
            sourceCodeUrl: "https://github.com/aditto007/Brain-Code-Renovo-CSE-1211-Project"
          },
          {
            id: "cse1211-project4",
            title: "Tetris-Raylib",
            description: "Memory Matrix is an engaging game that challenges players to remember and replicate increasingly complex patterns.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures","Raylib"],
            teamSize: 1 ,
            teamMembers: [
              { name: "Dibbajothy Sarker", githubUsername: "Dibbajothy" }
            ],
            coverImage: "/projects/sem2/tetris.png",
            sourceCodeUrl: "https://github.com/Dibbajothy/Tetris-Raylib"
          },
          {
            id: "cse1211-project5",
            title: "Snake-Game-in-C-and-SDL",
            description: "Snake Game is a classic arcade game where players control a snake to eat food and grow while avoiding collisions.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures","SDL"],
            teamSize: 1 ,
            teamMembers: [
               { name: "Dipta Bhattacharjee", githubUsername: "dipta11"}
            ],
            coverImage: "/projects/sem2/snake.jpg",
            sourceCodeUrl: "https://github.com/dipta11/Snake-Game-in-C-and-SDL"
          },
          {
            id: "cse1211-project6",
            title: "Snake Game Project",
            description: "A classic snake game implemented in C using SDL.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures","SDL"],
            teamSize: 1 ,
            teamMembers: [
               { name: "Mehedi Hasan", githubUsername: "hasanmehediii" }
            ],
            coverImage: "/projects/sem2/snake.png",
            sourceCodeUrl: "https://github.com/hasanmehediii/CSE-1211-Project"
          },
          {
            id: "cse1211-project7",
            title: "Flappy Bird",
            description: "Flappy Bird is a side-scrolling mobile game featuring 2D graphics.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures","Cmake","Ninja"],
            teamSize: 3 ,
            teamMembers: [
                
              { name: "Ishrak Faisal", githubUsername: "ishrak100" },
              { name: "Jobaer Hossain Tamim", githubUsername: "JobaerTamim7"},
              { name: "Farhana Alam", githubUsername: "mastermind-fa" }
            ],
            coverImage: "/projects/sem2/flappy.png",
            sourceCodeUrl: "https://github.com/JobaerTamim7/Flappy_Bird_SDL2"
          }
          
        ]
      }
    ]
  },
  {
    id: "semester-3",
    name: "Semester III",
    description: "Object Oriented Programming Projects",
    courses: [
      {
        id: "cse2112",
        name: "Object Oriented Programming",
        code: "CSE-2112",
        credits: 1.5,
        projects: [
          {
            id: "cse2112-project1",
            title: "School Management System",
            description: "A comprehensive school management system built using Java with features for student enrollment, attendance tracking, and grade management.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "Swing GUI", "File I/O", "OOP Principles","MySQL"],
            teamSize: 2,
            teamMembers: [
               { name: "H.M. Mehedi Hasan", githubUsername: "Mehedi26696" },
               { name: "Md. Abu Bakar Siddique", githubUsername: "Abs-Futy7" },
               
            ],
            coverImage: "/projects/sem3/school.PNG",
            sourceCodeUrl: "https://github.com/Mehedi26696/2nd-Year-1st-Semester-Java-OOP-Projects",
          },
          {
            id: "cse2112-project2",
            title: "CSEDU Airline Management System",
            description: "A comprehensive airline management system built using Java with features for flight booking, passenger management, and ticketing.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "Swing GUI", "File I/O", "OOP Principles","MySQL"],
            teamSize: 4,
            teamMembers: [
               { name: "Ahnaf Mahbub Khan", githubUsername: "TheManush" },
               { name: "Abdullah-Ash-Sakafy", githubUsername: "Sakafy-34" },
               { name: "Md. Mahmudul Hassan", githubUsername:  "mahmudss" },
               { name: "Saad Bin Ashad", githubUsername: "saadcsedu-29" }
            ],
            coverImage: "/projects/sem3/flight.jpg",
            sourceCodeUrl: "https://github.com/TheManush/OOP-Project",
          },
          {
            id: "cse2112-project3",
            title: "Hospital-Management-System",
            description: "A hospital management system built using Java that allows for patient registration, appointment scheduling, and medical record management.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "Swing GUI", "File I/O", "OOP Principles","MySQL"],
            teamSize: 4,
            teamMembers: [
               { name: "Hasanat Ashrafy", githubUsername: "ashr77" },
               { name: "Labonya Pal", githubUsername: "labonyapal" },
               { name: "Jubair Ahammad Akter", githubUsername: "Jubair-Adib" },
               { name: "Farhan Bin Rabbani", githubUsername: "RobBunny" },
            ],
            coverImage: "/projects/sem3/hospital.png",
            sourceCodeUrl: "https://github.com/ashr77/Hospital-Management-System/tree/main",
          },
          {
            id: "cse2112-project4",
            title: "DU-Shuttle-Service-CSE-2112-OOP",
            description: "The DU Shuttle Service is an Object-Oriented Programming (OOP) based project designed to enhance campus transportation with smart ticketing, route details, and a seamless, cashless shuttle experience for Dhaka University students.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "Swing GUI", "File I/O", "OOP Principles","MySQL"],
            teamSize: 3,
            teamMembers: [
               { name: "Aditto Raihan", githubUsername: "aditto007" },
               { name: "Abul Hasan Anik", githubUsername: "abulhasananik2" },
               { name: "Jotish Biswas", githubUsername: "Jotish-Biswas" }
            ],
            coverImage: "/projects/sem3/shuttle.png",
            sourceCodeUrl: "https://github.com/aditto007/DU-Shuttle-Service-CSE-2112-OOP",
          },
          {
            id: "cse2112-project5",
            title: "Cafeteria Management, DU",
            description: "The Cafeteria Management, DU, is a Java-based application designed to streamline cafeteria operations at the Science Complex, University of Dhaka.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "JavaFX", "MySQL"],
            teamSize: 3,
            teamMembers: [
              { name: "Suraya Jannat Mim", githubUsername: "Mim1726" },
              { name: "Jubayer Ahmed Sojib", githubUsername: "Clear20-22" },
              { name: "Tamal Kanti Sarker", githubUsername: "tamalkantisarker" }
            ],
            coverImage: "/projects/sem3/cafeteria.png",
            sourceCodeUrl: "https://github.com/Clear20-22/Java-Project"

          },
          {
            id: "cse2112-project6",
            title: "Travel Management System",
            description: "A comprehensive travel management system that streamlines the booking and management of travel itineraries.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "Java Swing", "MySQL"],
            teamSize: 1,
            teamMembers: [
              { name: "Mahmudur Rahman Moin", githubUsername: "Moin529" }
            ],
            coverImage: "/projects/sem3/travel.jpg",
            sourceCodeUrl: "https://github.com/Moin529/CSE-2112-OOP-Project"
          },
          {
            id: "cse2112-project7",
            title: "Restaurant Management System",
            description: "A restaurant management system that allows users to manage orders, menu items, and customer information.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "Java Swing", "MySQL"],
            teamSize: 4,
            teamMembers: [
              { name: "Ishrak Faisal", githubUsername: "ishrak100" },
              { name: "Jobaer Hossain Tamim", githubUsername: "JobaerTamim7"},
              { name: "Farhana Alam", githubUsername: "mastermind-fa" },
              { name: "Sara Faria Sandra", githubUsername: "Sandra-Sara" }
            ],
            coverImage: "/projects/sem3/restuarant.png",
            sourceCodeUrl: "https://github.com/JobaerTamim7/Fixated-Restaurant"
          },
          {
            id: "cse2112-project8",
            title: "CSEDU Supermarket",
            description: "An online supermarket system that allows users to browse products, add them to their cart, and make purchases.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "JavaFX", "MySQL"],
            teamSize: 3,
            teamMembers: [
              { name: "Ahil Islam Aurnob", githubUsername: "aheel03" },
              { name: "S M Shamiun Ferdous", githubUsername: "shamiunferdous" },
              { name: "Anika Sanzida Upoma", githubUsername: "bluerabbit31" }
            ],
            coverImage: "/projects/sem3/supermarket.png",
            sourceCodeUrl: "https://github.com/Moin529/CSE-2112-OOP-Project"
          },
          {
            id: "cse2112-project9",
            title: "Movie Ticket Booker",
            description: "An online movie ticket booking system that allows users to browse movies, select showtimes, and purchase tickets.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "JavaFx", "MySQL"],
            teamSize: 2,
            teamMembers: [
              { name: "Mehedi Hasan", githubUsername: "hasanmehediii" },
              { name: "Ibna Afra Roza", githubUsername: "Roza-fail" }
            ],
            coverImage: "/projects/sem3/movie.png",
            sourceCodeUrl: "https://github.com/hasanmehediii/CSE-2112-Project"
          },
          {
            id: "cse2112-project10",
            title: "Car Rental System",
            description: "An online car rental system that allows users to browse available cars, book rentals, and manage reservations.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "JavaFX", "MySQL"],
            teamSize: 4,
            teamMembers: [
              { name: "Md. Shahria Hasan Jony", githubUsername: "SHJony121" },
              { name: "Md.Rushan Jamil", githubUsername: "Rushu41" },
              { name: "Sharfraz Khan Hridue", githubUsername: "blueblood897"},
              { name: "Md. Sadman Sakib", githubUsername: "Mdsadmansakib" }
            ],
            coverImage: "/projects/sem3/car.jpg",
            sourceCodeUrl: "https://github.com/Rushu41/2nd-Year-1st-Semester-Java-OOP-Project"
          },
          {
            id: "cse2112-project11",
            title: "Disaster Management System",
            description: "The Disaster Management System is an emergency response platform designed to assist citizens, administrators, and responders during critical situations.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2112",
            technologies: ["Java", "JavaFX", "MySQL"],
            teamSize: 2,
            teamMembers: [
               { name: "Sumaiya Rahman Soma", githubUsername: "srs4929" },
              { name: "Chowdhury Shafahid Rahman", githubUsername: "Shafahid" }
            ],
            coverImage: "/projects/sem3/resque.png",
            sourceCodeUrl: "https://github.com/srs4929/RESQURE-OOP-PROJECT-2-1-"
          }
          
        ]
      }
    ]
  },
  {
    id: "semester-4",
    name: "Semester IV",
    description: "Database and  App Development Projects",
    courses: [
      {
        id: "cse2216",
        name: "Application Development Lab",
        code: "CSE-2216",
        credits: 1.5,
        projects: [
          {
            id: "cse2216-project1",
            title: "VolunSphere",
            description: "A comprehensive volunteer management platform that connects volunteers with meaningful opportunities and helps organizations manage their volunteer programs effectively.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart","FastAPI", "Firebase", "Supabase", "REST APIs", "PostgreSQL","Redis","LLMs","FCM", "WebSockets"],
            teamSize: 4,
            teamMembers: [
              { name: "H.M. Mehedi Hasan", githubUsername: "Mehedi26696" },
              { name: "Md. Abu Bakar Siddique", githubUsername: "Abs-Futy7" },
              { name: "Ahil Islam Aurnob", githubUsername: "aheel03" },
              { name: "S M Shamiun Ferdous", githubUsername: "shamiunferdous" }
            ],
            coverImage: "/projects/sem4/Volun.jpg",
            sourceCodeUrl: "https://github.com/Mehedi26696/VolunSphere"

          },
          {
            id: "cse2216-project2",
            title: "TheraSeba - AI-Powered Mental Health Companion",
            description: "An AI-powered mental health companion app that provides personalized support and resources for mental well-being.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "FastAPI", "Firebase", "Supabase", "REST APIs", "PostgreSQL", "LLMs", "FCM"],
            teamSize: 4,
            teamMembers: [
              { name: "Md. Shahria Hasan Jony", githubUsername: "SHJony121" },
              { name: "Md.Rushan Jamil", githubUsername: "Rushu41" },
              { name: "Sharfraz Khan Hridue", githubUsername: "blueblood897"},
              { name: "Md. Sadman Sakib", githubUsername: "Mdsadmansakib" }
            ],
            coverImage: "/projects/sem4/sheba.jpg",
            sourceCodeUrl: "https://github.com/Rushu41/2nd-Year-2nd-Semester-Android-Flutter-App-Project"

          },

          {
            id: "cse2216-project3",
            title: "LangMastero – Language Learning App",
            description: "An innovative language learning app that leverages AI to provide personalized learning experiences.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "FastAPI", "MongoDB", "REST APIs"],
            teamSize: 4,
            teamMembers: [
              { name: "Mehedi Hasan", githubUsername: "hasanmehediii" },
              { name: "Ibna Afra Roza", githubUsername: "Roza-fail" },
              { name: "Abdullah Evne Masood", githubUsername: "AbdullahIbneMasoodRegan" },
              { name: "Nafisha Akhter", githubUsername: "nafisha3588" }
            ],
            coverImage: "/projects/sem4/lang.png",
            sourceCodeUrl: "https://github.com/hasanmehediii/CSE-2216-Project"
          },
          {
            id: "cse2216-project4",
            title: "Murir Tin",
            description: "Murir Tin is a smart local bus app designed to improve public transportation in Dhaka.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "FastAPI","Supabase","Mapbox","Rest APIs"],
            teamSize: 4,
            teamMembers: [
              { name: "Sumaiya Rahman Soma", githubUsername: "srs4929" },
              { name: "Chowdhury Shafahid Rahman", githubUsername: "Shafahid" },
              { name: "Ishrak Faisal", githubUsername: "ishrak100" },
              { name: "Jobaer Hossain Tamim", githubUsername: "JobaerTamim7" }
            ],
            coverImage: "/projects/sem4/murir.png",
            sourceCodeUrl: "https://github.com/srs4929/Murir_Tin_Frontend"
          },
          {
            id: "cse2216-project5",
            title: "Platr – Your Personal Recipe Companion",
            description: "Platr is a beautifully designed Flutter-based recipe application that helps users explore, create, and manage a wide variety of recipes.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "Firebase", "Firebase Storage","Firebase Firestore"],
            teamSize: 4,
            teamMembers: [
              { name: "Anika Sanzida Upoma", githubUsername: "bluerabbit31" },
              { name: "Suraya Jannat Mim", githubUsername: "Mim1726" },
              { name: "Ishrat Jahan Mim", githubUsername: "Ishrat001" },
              { name: "Tasmia Sultana Sumi", githubUsername: "HIDDENtas12345" }
            ],
            coverImage: "/projects/sem4/platr.png",
            sourceCodeUrl: "https://github.com/Mim1726/Android-Project-DU-CodeBots"
          },
          {
            id: "cse2216-project6",
            title: "TaxMate - Financial & Tax Services Platform",
            description: "A comprehensive mobile application connecting clients with financial service providers including Chartered Accountants, Bank Loan Officers, and Financial Planners.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "Firebase", "Supabase","FastAPI","REST APIs","FCM","NLP"],
            teamSize: 4,
            teamMembers: [
              { name: "Ahnaf Mahbub Khan", githubUsername: "TheManush" },
              { name: "Farhan Bin Rabbani", githubUsername: "RobBunny" },
              { name: "Abdullah-Ash-Sakafy", githubUsername: "Sakafy-34" },
              { name: "Md. Mahmudul Hassan", githubUsername: "mahmudss" }
            ],
            coverImage: "/projects/sem4/taxmate.png",
            sourceCodeUrl: "https://github.com/RobBunny/Taxmate_Project"
          },
          {
            id: "cse2216-project7",
            title: "Awaj-Corruption Controlling App",
            description: "Awaj is a mobile application that helps users report and track corruption-related issues.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "Firebase","Firebase Storage"],
            teamSize: 4,
            teamMembers: [
              { name: "Hasnat Ashrafy", githubUsername: "ashr77" },
              { name: "Labonya Pal", githubUsername: "labonyapal" },
              { name: "Abul Hasan Anik", githubUsername: "abulhasananik2" },
              { name: "Aditto Raihan", githubUsername: "aditto007" }
            ],
            coverImage: "/projects/sem4/awaj.png",
            sourceCodeUrl: "https://github.com/ashr77/Awaj-CSE-2216-"
          },
          {
            id: "cse2216-project8",
            title: "DrugScript",
            description: "DrugScript is a mobile application that helps users manage their medications and provides information about drug interactions.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "Firebase","Firebase Storage"],
            teamSize: 4,
            teamMembers: [
              { name: "Dibbajothy Sarker", githubUsername: "Dibbajothy" },
              { name: "Istiak Ahammed Rhyme", githubUsername: "IstiakAR" },
              { name: "Md. Akram Khan", githubUsername: "Md-Akram-Khan" },
              { name: "Jubayer Ahmed Sojib", githubUsername: "Clear20-22" }
            ],
            coverImage: "/projects/sem4/drugscript.png",
            sourceCodeUrl: "https://github.com/IstiakAR/DrugScript"
          },
          {
            id: "cse2216-project9",
            title: "Hall Management System",
            description: "An app for managing multiple hall's student, teachers and shopkeepers and their different functionalities.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", 'Firebase',"Firestore"],
            teamSize: 4,
            teamMembers: [
              { name: "Nadim Mahmud",githubUsername: "Nadim-2003"},
              { name: "Jotish Biswas", githubUsername: "Jotish-Biswas"},
              { name: "Dipta Bhattacharjee", githubUsername: "dipta11"},
              { name: "Tamal Kanti Sarker", githubUsername: "tamalkanti223"},
            ],
            coverImage: "/projects/sem4/hall.png",
            sourceCodeUrl: "https://github.com/Jotish-Biswas/Hall-Management-"
          },
          {
            id: "cse2216-project10",
            title: "ForkTune-Homemade Recipe App",
            description: "A recipe app for discovering and sharing homemade recipes.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "Firebase" ],
            teamSize: 3,
            teamMembers: [
              { name: "Srabon Aich", githubUsername: "srabonAich" },
              { name: "Rafiul Islam Sagor", githubUsername: "rafiulsagor55" },
              { name: "Saad Bin Ashad", githubUsername: "saadcsedu-29" } 
            ],
            coverImage: "/projects/sem4/forktune.png",
            sourceCodeUrl: "https://github.com/srabonAich/ForkTune"
          },
          {
            id: "cse2216-project11",
            title: "HelpMate",
            description: "A comprehensive home service provider platform that connects customers with skilled workers for various home services, featuring real-time booking, secure payments, and seamless communication.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "Firebase", "Firestore","FastAPI","RestAPI","WebSocket","PostgreSQL"],
            teamSize: 4,
            teamMembers: [
              { name: "Jubair Ahammad Akter", githubUsername: "Jubair-Adib" },
              { name: "Farhana Alam", githubUsername: "mastermind-fa" },
              { name: "Md Shakin Reza Kabbo", githubUsername: "shakinalamkabbo" },
              { name: "Nmr Masum", githubUsername: "nmrmasum" }
            ],
            coverImage: "/projects/sem4/helpmate.png",
            sourceCodeUrl: "https://github.com/mastermind-fa/TeamMechaBytes"
          }

        ]
      }
    ]
  }
];

// Helper functions
export const getProjectsBySemester = (semesterId: string) => 
  projectSemesters.find(semester => semester.id === semesterId);

export const getAllProjects = (): AcademicProject[] => {
  return projectSemesters.flatMap(semester => 
    semester.courses.flatMap(course => course.projects)
  );
};

export const getProjectById = (projectId: string): AcademicProject | undefined => {
  return getAllProjects().find(project => project.id === projectId);
};

export const getProjectsByCourse = (courseId: string): AcademicProject[] => {
  return projectSemesters.flatMap(semester => 
    semester.courses
      .filter(course => course.id === courseId)
      .flatMap(course => course.projects)
  );
};
