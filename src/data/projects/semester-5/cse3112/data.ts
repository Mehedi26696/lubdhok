import type { ProjectCourse } from '../../types'
export const courseData: ProjectCourse = {
        id: "cse3112",
        name: "Software Engineering Lab",
        code: "CSE-3112",
        credits: 0.75,
        projects: [
          {
            id: "cse3112-project1",
            title: "TizKit — AI-Powered LaTeX Workspace",
            description: "TizKit is a professional full-stack LaTeX platform that turns visual design and AI vision into high-quality, publication-ready diagrams, tables, and documents.",
            course: "Software Engineering Lab",
            courseCode: "CSE-3112",
            technologies: ["Nextjs","Reactjs","FastAPI","PostgreSQL","Rest API","Gemini API","Groq API","Alembic","Tailwind CSS","React-Conva"],
            teamSize: 3,
            teamMembers: [
              { name: "H.M. Mehedi Hasan", githubUsername: "Mehedi26696" },
              { name: "Md. Abu Bakar Siddique", githubUsername: "Abs-Futy7" },
              { name: "Abantika Paul", githubUsername: "abantika-186" }
            ],
            coverImage: "/projects/sem5/tizkit.PNG",
            sourceCodeUrl: "https://github.com/Mehedi26696/Tizkit"
          },
          {
            id: "cse3112-project2",
            title: "CollabCanvas – MERN Collaborative Whiteboard",
            description: "CollabCanvas is a full-stack collaborative whiteboard platform inspired by Miro.",
            course: "Software Engineering Lab",
            courseCode: "CSE-3112",
            technologies: ["React","Node.js","Express.js","MongoDB","REST APIs"],
            teamSize: 5,
            teamMembers: [
              { name: "Farhana Alam", githubUsername: "mastermind-fa" },
              { name: "Jubair Ahammad Akter", githubUsername: "Jubair-Adib" },
              { name: "Atiya Fahmida", githubUsername: "noshinCriesHere" },
              { name: "Tamal Kanti Sarker", githubUsername: "tamalkanti223" },
              { name: "MD. SHAKIN ALAM KABBO", githubUsername: "shakinalamkabbo" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/mastermind-fa/SoftwareProject"
          },
          {
            id: "cse3112-project3",
            title: "Cognify - AI-Powered Learning Platform",
            description: "An intelligent learning platform that leverages AI to generate personalized educational content, interactive chats, and adaptive exams.",
            course: "Software Engineering Lab",
            courseCode: "CSE-3112",
            technologies: ["React", "FastAPI","Supabase","Gemini API"],
            teamSize: 5,
            teamMembers: [
              { name: "Jubayer Ahmed Sojib", githubUsername: "Clear20-22" },
              { name: "Md. Akram Khan", githubUsername: "Md-Akram-Khan" },
              { name: "Suraya Jannat Mim", githubUsername: "Mim1726" },
              { name: "Nmr Masum", githubUsername: "nmrmasum" },
              { name: "Arik Islam", githubUsername: "arikislam123"}
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/Clear20-22/Cognify-AI-Powered-Learning-Platform"
          },
          {
            id: "cse3112-project4",
            title: "Automation App",  
            description: "An automation application that streamlines repetitive tasks and enhances productivity through customizable workflows.",
            course: "Software Engineering Lab",
            courseCode: "CSE-3112",
            technologies: ["Node.js","Rust","Tauri CLI"],
            teamSize: 3,
            teamMembers: [
              { name: "Istiak Ahammed Rhyme", githubUsername: "IstiakAR" },
              { name: "Nadim Mahmud", githubUsername: "Nadim-2003" },
              { name: "Dipta Bhattacharjee", githubUsername: "dipta11" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/IstiakAR/Automation"
          },
          {
            id: "cse3112-project5",
            title: "KhaiKhai",
            description: "KhaiKhai is a smart meal planning platform designed for students and busy individuals to manage their daily food choices effectively.",
            course: "Software Engineering Lab",
            courseCode: "CSE-3112",
            technologies: ["Flutter","React","FastAPI","MongoDB","PostgreSQL"],
            teamSize: 5,
            teamMembers: [
              { name: "Mehedi Hasan", githubUsername: "hasanmehediii" },
              { name: "	Ibna Afra Roza", githubUsername: "Roza-fail" },
              { name: "Nafisha Akter", githubUsername: "nafisha3588" },
              { name: "Abdullah Iben Masood", githubUsername: "AbdullahIbneMasoodRegan" },
              { name: "Biplob Pal", githubUsername: "biplob-pal" }
            ],
            coverImage: "/projects/sem5/KhaiKhai.png",
            sourceCodeUrl: "https://github.com/hasanmehediii/CSE-3112-Project"
          },
          { 
            id: "cse3112-project6",
            title: "Doctor Baba - Mobile Health Companion Application",
            description: "Doctor Baba is a mobile health companion application developed to improve healthcare awareness and understanding among rural and low-literacy users in Bangladesh.",
            course: "Software Engineering Lab",
            courseCode: "CSE-3112",
            technologies: ["Flutter","FastAPI","Supabase","TTS","GEMINI API"],
            teamSize: 3,
            teamMembers: [
              { name: "Sumaiya Rahman Soma", githubUsername: "srs4929" },
              { name: "Chowdhury Shafahid Rahman", githubUsername: "Shafahid" },
              { name: "Saad Bin Ashad", githubUsername: "saadcsedu-29" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/srs4929/Doctor_Baba_Frontend"
          }
        ]
      }
