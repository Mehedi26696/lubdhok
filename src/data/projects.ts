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
        code: "CSE-1201",
        credits: 3.0,
        projects: [
          {
            id: "cse1201-project1",
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
            id: "cse1201-project2",
            title: "Starship Assault",
            description: "Starship Assault is an action-packed space shooter game where players pilot their starship through intense battles against enemy fleets.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures","SDL"],
            teamSize: 3,
            teamMembers: [
              { name: "Ahnaf Mahbub Khan", githubUsername: "TheManush" },
              { name: "Anika Sanzida Upoma", githubUsername: "bluerabbit31"},
              { name: "Farhan Bin Rabbani", githubUsername: "RobBunny" },
            ],
            coverImage: "/projects/sem2/starship.jpg",
            sourceCodeUrl: "https://github.com/TheManush/starship-assault/tree/main"
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
        id: "cse2103",
        name: "Object Oriented Programming",
        code: "CSE-2103",
        credits: 1.5,
        projects: [
          {
            id: "cse2103-project1",
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
            id: "cse2103-project2",
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
            id: "cse2103-project3",
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
        id: "cse2201",
        name: "Application Development Lab",
        code: "CSE-2201",
        credits: 1.5,
        projects: [
          {
            id: "cse2201-project1",
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
            id: "cse2201-project2",
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
            id: "cse2201-project3",
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
            id: "cse2201-project4",
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
            id: "cse2201-project5",
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
            id: "cse2201-project6",
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
