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
