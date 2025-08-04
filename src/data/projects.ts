// Types for academic projects
export interface AcademicProject {
  id: string;
  title: string;
  description: string;
  course: string;
  courseCode: string;
  technologies: string[];
  duration: string;
  teamSize: number;
  teamMembers: string[];
  images: string[];
  demoUrl?: string;
  sourceCodeUrl?: string;
  documentationUrl?: string;
  features: string[];
  challenges: string[];
  outcomes: string[];
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
        name: "Fundamentals of Programming",
        code: "CSE-1201",
        credits: 3.0,
        projects: [
          {
            id: "cse1201-project1",
            title: "Student Management System",
            description: "A console-based student management system built in C programming language to manage student records, grades, and attendance.",
            course: "Fundamentals of Programming",
            courseCode: "CSE-1201",
            technologies: ["C Programming", "File I/O", "Data Structures"],
            duration: "4 weeks",
            teamSize: 2,
            teamMembers: ["Rahul Sharma", "Priya Patel"],
            images: ["/projects/sem2/batch.jpg"],
            sourceCodeUrl: "https://github.com/lubdhok/student-management-c",
            features: [
              "Add, edit, delete student records",
              "Grade calculation and GPA computation",
              "Attendance tracking system",
              "File-based data persistence",
              "Search and filter functionality"
            ],
            challenges: [
              "Implementing efficient file operations",
              "Data validation and error handling",
              "Memory management in C"
            ],
            outcomes: [
              "Mastered basic C programming concepts",
              "Learned file handling and data persistence",
              "Understood modular programming approach"
            ]
          },
          {
            id: "cse1201-project2",
            title: "Library Management System",
            description: "A comprehensive library management system with book inventory, member management, and borrowing/returning functionality.",
            course: "Fundamentals of Programming",
            courseCode: "CSE-1201",
            technologies: ["C Programming", "Structures", "Arrays"],
            duration: "5 weeks",
            teamSize: 3,
            teamMembers: ["Arjun Singh", "Vikash Kumar", "Anjali Verma"],
            images: ["/projects/library-management-1.jpg"],
            sourceCodeUrl: "https://github.com/lubdhok/library-management-c",
            features: [
              "Book inventory management",
              "Member registration and management",
              "Book issuing and returning system",
              "Fine calculation for overdue books",
              "Search books by title, author, or ISBN"
            ],
            challenges: [
              "Complex data relationships",
              "Date calculations for due dates",
              "User input validation"
            ],
            outcomes: [
              "Enhanced understanding of structures and arrays",
              "Improved problem-solving skills",
              "Learned project planning and team collaboration"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "semester-3",
    name: "Semester III",
    description: "Data Structures and OOP Projects",
    courses: [
      {
        id: "cse2101",
        name: "Data Structures and Algorithms",
        code: "CSE-2101",
        credits: 3.0,
        projects: [
          {
            id: "cse2101-project1",
            title: "Graph Algorithms Visualizer",
            description: "An interactive web application to visualize various graph algorithms including DFS, BFS, Dijkstra's algorithm, and minimum spanning tree algorithms.",
            course: "Data Structures and Algorithms",
            courseCode: "CSE-2101",
            technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Graph Theory"],
            duration: "6 weeks",
            teamSize: 2,
            teamMembers: ["Sneha Gupta", "Priya Patel"],
            images: ["/projects/graph-visualizer-1.jpg", "/projects/graph-visualizer-2.jpg"],
            demoUrl: "https://lubdhok-graph-visualizer.netlify.app",
            sourceCodeUrl: "https://github.com/lubdhok/graph-algorithms-visualizer",
            features: [
              "Interactive graph creation and editing",
              "Step-by-step algorithm visualization",
              "Multiple graph algorithms support",
              "Adjustable animation speed",
              "Export and import graph data"
            ],
            challenges: [
              "Complex animation synchronization",
              "Efficient graph rendering on canvas",
              "User interface design for graph editing"
            ],
            outcomes: [
              "Deep understanding of graph algorithms",
              "Enhanced JavaScript and web development skills",
              "Improved UI/UX design capabilities"
            ]
          }
        ]
      },
      {
        id: "cse2103",
        name: "Object Oriented Programming",
        code: "CSE-2103",
        credits: 3.0,
        projects: [
          {
            id: "cse2103-project1",
            title: "E-Commerce Management System",
            description: "A complete e-commerce platform built using Java with features for product management, user authentication, shopping cart, and order processing.",
            course: "Object Oriented Programming",
            courseCode: "CSE-2103",
            technologies: ["Java", "Swing GUI", "File I/O", "OOP Principles"],
            duration: "7 weeks",
            teamSize: 4,
            teamMembers: ["Rahul Sharma", "Arjun Singh", "Vikash Kumar", "Anjali Verma"],
            images: ["/projects/ecommerce-java-1.jpg", "/projects/ecommerce-java-2.jpg"],
            sourceCodeUrl: "https://github.com/lubdhok/ecommerce-java",
            documentationUrl: "https://lubdhok.github.io/ecommerce-java-docs",
            features: [
              "User registration and authentication",
              "Product catalog with categories",
              "Shopping cart functionality",
              "Order management system",
              "Admin panel for inventory management",
              "Invoice generation"
            ],
            challenges: [
              "Implementing complex OOP design patterns",
              "GUI design and event handling",
              "Data persistence without database"
            ],
            outcomes: [
              "Mastered OOP concepts and design patterns",
              "Learned Java Swing for GUI development",
              "Understood software architecture principles"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "semester-4",
    name: "Semester IV",
    description: "Database and Algorithm Design Projects",
    courses: [
      {
        id: "cse2201",
        name: "Database Management Systems - I",
        code: "CSE-2201",
        credits: 3.0,
        projects: [
          {
            id: "cse2201-project1",
            title: "University Management System",
            description: "A comprehensive database system for university management including student enrollment, course management, faculty administration, and academic records.",
            course: "Database Management Systems - I",
            courseCode: "CSE-2201",
            technologies: ["MySQL", "PHP", "HTML/CSS", "JavaScript", "Bootstrap"],
            duration: "8 weeks",
            teamSize: 3,
            teamMembers: ["Sneha Gupta", "Priya Patel", "Anjali Verma"],
            images: ["/projects/university-db-1.jpg", "/projects/university-db-2.jpg"],
            demoUrl: "https://lubdhok-university-system.herokuapp.com",
            sourceCodeUrl: "https://github.com/lubdhok/university-management-db",
            features: [
              "Student enrollment and profile management",
              "Course registration and scheduling",
              "Faculty management and assignment",
              "Grade recording and transcript generation",
              "Fee management and payment tracking",
              "Academic calendar and notifications"
            ],
            challenges: [
              "Complex database schema design",
              "Implementing referential integrity",
              "Query optimization for large datasets",
              "User role-based access control"
            ],
            outcomes: [
              "Advanced SQL query writing skills",
              "Database design and normalization",
              "Web application development with PHP",
              "Understanding of DBMS concepts"
            ]
          }
        ]
      },
      {
        id: "cse2202",
        name: "Design and Analysis of Algorithms - I",
        code: "CSE-2202",
        credits: 3.0,
        projects: [
          {
            id: "cse2202-project1",
            title: "Pathfinding Algorithm Comparison",
            description: "A comprehensive analysis and visualization of different pathfinding algorithms including A*, Dijkstra, and BFS on various grid maps and graphs.",
            course: "Design and Analysis of Algorithms - I",
            courseCode: "CSE-2202",
            technologies: ["Python", "Pygame", "NetworkX", "Matplotlib", "NumPy"],
            duration: "6 weeks",
            teamSize: 2,
            teamMembers: ["Rahul Sharma", "Vikash Kumar"],
            images: ["/projects/pathfinding-1.jpg", "/projects/pathfinding-2.jpg"],
            demoUrl: "https://lubdhok-pathfinding.streamlit.app",
            sourceCodeUrl: "https://github.com/lubdhok/pathfinding-algorithms",
            documentationUrl: "https://lubdhok.github.io/pathfinding-analysis",
            features: [
              "Multiple pathfinding algorithm implementations",
              "Interactive grid-based visualization",
              "Performance comparison and analysis",
              "Different terrain types and obstacles",
              "Algorithm complexity analysis",
              "Export results and statistics"
            ],
            challenges: [
              "Optimizing algorithm performance",
              "Real-time visualization without lag",
              "Accurate time and space complexity measurement",
              "Handling large grid sizes efficiently"
            ],
            outcomes: [
              "Deep understanding of graph algorithms",
              "Algorithm analysis and optimization skills",
              "Python programming and visualization",
              "Research and documentation abilities"
            ]
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
