import type { ProjectCourse } from '../../types'
export const courseData: ProjectCourse = {
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
              { name: "Saad Bin Ashad", githubUsername: "saadcsedu-29" },
              { name: "Ariful Islam", githubUsername: "arif-5223" }
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
          },
          {
            id: "cse2216-project12",
            title:  "Tutor Finder App",
            description: "A platform that connects students with tutors for personalized learning experiences.",
            course: "Application Development Lab",
            courseCode: "CSE-2216",
            technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
            teamSize: 2,
            teamMembers: [
              { name: "Md. Ashif Mahmud Kayes", githubUsername: "Ashif-Kayes" },
              { name: "Mst. Tabassum Kabir", githubUsername: "Tabassum-kabir" }
            ],
            coverImage: "/projects/sem4/tutor.png",
            sourceCodeUrl: "https://github.com/Ashif-Kayes/App-project"
          }
        ]
      }
