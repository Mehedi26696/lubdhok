import type { ProjectCourse } from '../../types'
export const courseData: ProjectCourse = {
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
            teamSize: 3 ,
            teamMembers: [
               { name: "Mehedi Hasan", githubUsername: "hasanmehediii" },
               { name: "Labonya Pal", githubUsername: "labonyapal" },
               { name: "Jubair Ahammad Akter", githubUsername: "Jubair-Adib" }
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
          },
          {
            id: "cse1211-project8",
            title: "Green Anaconda",
            description: "Green Anaconda is a classic snake game implemented in C using SDL.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures", "SDL"],
            teamSize: 1 ,
            teamMembers: [
              { name: "Md. Ashif Mahmud Kayes", githubUsername: "Ashif-Kayes" }
            ],
            coverImage: "/projects/sem2/anaconda.png",
            sourceCodeUrl: "https://github.com/Ashif-Kayes/Green_Anaconda"
          },
          {
            id: "cse1211-project9",
            title: "Packman",
            description: "Packman is a classic arcade game implemented in C using SDL.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C Programming", "File I/O", "Data Structures", "SDL"],
            teamSize: 1 ,
            teamMembers: [
               { name: "Istiak Ahammed Rhyme", githubUsername: "IstiakAR" }
            ],
            coverImage: "/projects/sem2/black.jpg",
            sourceCodeUrl: "https://github.com/IstiakAR/pacman_sdl2"
          },
          {
            id: "cse1211-project10",
            title: "Tetris - Raylib",
            description: "This tetris game was customly built with raylib framework base on C++ with custom functions and actions.",
            course: "Fundamentals of Programming Lab",
            courseCode: "CSE-1211",
            technologies: ["C++", "File I/O", "Data Structures", "Raylib"],
            teamSize: 1 ,
            teamMembers: [
               { name: "Dibbajothy Sarker", githubUsername: "Dibbajothy" }
            ],
            coverImage: "/projects/sem2/tetris2.PNG",
            sourceCodeUrl: "https://github.com/Dibbajothy/Tetris-Raylib"

          }
        ]
      }
