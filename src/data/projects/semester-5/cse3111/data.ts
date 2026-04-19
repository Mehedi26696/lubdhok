import type { ProjectCourse } from '../../types'
export const courseData: ProjectCourse = {
        id: "cse3111",
        name: "Computer Networking Lab",
        code: "CSE-3111",
        credits: 1.5,
        projects: [
          {
            id: "cse3111-project1",
            title: "SyncroX",
            description: "A Unified Real-time Collaboration and Communication Platform",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "Socket Programming", "Docker", "Streamlit", "TCP Protocols", "UDP Protocols","Pandas","Matplotlib"],
            teamSize: 2,
            teamMembers: [
              { name: "H.M. Mehedi Hasan", githubUsername:  "Mehedi26696" },
              { name: "Md. Abu Bakar Siddique", githubUsername: "Abs-Futy7" }
            ],
            coverImage: "/projects/sem5/syncrox.png",
            sourceCodeUrl: "https://github.com/Abs-Futy7/SyncroX"
          },
          {
            id: "cse3111-project2",
            title: "PeerFlix",
            description: "P2P Streaming Platform",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "Socket Programming", "TCP Protocols","Streamlit"],
            teamSize: 2,
            teamMembers: [
              { name: "Chowdhury Shafahid Rahman", githubUsername: "Shafahid" },
              { name: "Abul Hasan Anik", githubUsername: "abulhasananik2" }
            ],
            coverImage: "/projects/sem5/peerflix.PNG",
            sourceCodeUrl: "https://github.com/Shafahid/PeerFlix"
          },
          {
            id: "cse3111-project3",
            title: "Whiteboard",
            description: "Collaborative Whiteboard and File Sharing Application",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Java","Gradle","JavaFX","Socket Programming","TCP Protocols"],
            teamSize: 2,
            teamMembers: [
              { name: "Farhana Alam", githubUsername: "mastermind-fa" },
              { name: "Ibna Afra Roza", githubUsername: "Roza-fail" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/mastermind-fa/Whiteboard"
          },
          {
            id: "cse3111-project4",
            title: "VPN",
            description: "A custom VPN (Virtual Private Network)",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "Socket Programming", "TCP Protocols","Cryptography","Flask"],
            teamSize: 2,
            teamMembers: [
              { name: "Ahnaf Mahbub Khan", githubUsername: "TheManush" },
              { name: "Abdullah Ash-Sakafy", githubUsername: "Sakafy-34" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/TheManush/Networking-Proj"
          },
          {
            id: "cse3111-project5",
            title: "Multi-Client Real-Time Communication System",
            description: "A video conferencing tool built with Python sockets to demonstrate real-time challenges like latency, packet loss, and congestion control.",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "Socket Programming", "TCP Protocols","OpenCV","PyAudio","PyQt5","Matplotlib"],
            teamSize: 2,
            teamMembers: [
              { name: "Shahriar Hasan Jony", githubUsername: "SHJony121" },
              { name: "Md. Sadman Sakib", githubUsername: "Mdsadmansakib" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/SHJony121/Networking"
          },
          {
            id: "cse3111-project6",
            title: "Live",
            description: "Live Audio Calling Application",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "Socket Programming", "HTTP","PyAudio","Tkinter"],
            teamSize: 2,
            teamMembers: [
              { name: "Jobaer Hossain Tamim", githubUsername: "JobaerTamim7" },
              { name: "Akash Bishwas", githubUsername: "akash-bishwas"  }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/JobaerTamim7/Live"
          },
          {
            id: "cse3111-project7",
            title: "NetVision",
            description: "Interactive Networking Visualizer",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "Socket Programming","Streamlit" ],
            teamSize: 2,
            teamMembers: [
              { name: "Sumaiya Rahman Soma", githubUsername: "srs4929" },
              { name: "Tasnova Shahrin", githubUsername: "tasnovashahrin"}
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/srs4929/NetVision-Networking-Project-3-1-"
          },
          {
            id: "cse3111-project8",
            title: "P2P File Sharing Application",
            description: "A modern, BitTorrent-like peer-to-peer file sharing application with a clean uTorrent-style GUI interface.",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "Socket Programming", "TCP Protocols","Tkinter"],
            teamSize: 2,
            teamMembers: [
              { name: "S M Shamiun Ferdous", githubUsername: "ShamiunFerdous" },
              { name: "Nadim Mahmud", githubUsername: "Nadim-2003"  }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/Nadim-2003/P2P-File-Sharing"
          },
          {
            id: "cse3111-project9",
            title: "NetClassroom",
            description: "A client-server based online classroom application",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Java","JavaFX","Socket Programming","TCP Protocols"],
            teamSize: 2,
            teamMembers: [
              { name: "Jubair Ahammad Akter" , githubUsername: "Jubair-Adib" },
              { name: "Aditto Raihan", githubUsername: "aditto007" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/Jubair-Adib/NetClassroom_Networking_Project"
          },
          {
            id: "cse3111-project10",
            title: "ChatChat",
            description: "A real-time chat application demonstrating client-server architecture and socket programming.",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "FastAPI", "Socket Programming", "ReactJS"],
            teamSize: 2,
            teamMembers: [
              { name: "Srabon Aich", githubUsername: "srabonAich" },
              { name: "Abantika Paul", githubUsername: "abantika-186" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/srabonAich/ChatChat2.0"
          },
          {
            id: "cse3111-project11",
            title: "LearnLive - TCP-Based Classroom Management System",
            description: "A desktop classroom management application built with Python TCP sockets, similar to Google Classroom, for managing classes, assignments, announcements, and materials.",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Python", "Socket Programming", "TCP Protocols","Tkinter"],
            teamSize: 2,
            teamMembers: [
              { name: "Ishrak Faisal", githubUsername: "ishrak100" },
              { name: "Dipta Bhattacharjee", githubUsername: "dipta11" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/ishrak100/LearnLive"
          },
          {
            id: "cse3111-project12",
            title: "VideoStreamingOnQUIC",
            description: "A custom transport layer protocol implementation over UDP, inspired by QUIC RFC 9000. Built to solve TCP's Head-of-Line blocking problem for high-performance video streaming.",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["C++", "Socket Programming", "UDP Protocols","Node.js"],
            teamSize: 2,
            teamMembers: [
              { name: "Dibbajothy Sarker", githubUsername: "Dibbajothy" },
              { name: "Shaila Jaman Priti", githubUsername: "ShailaJamanPriti" }
            ],
            coverImage: "/projects/sem5/Quick.png",
            sourceCodeUrl: "https://github.com/Dibbajothy/VideoStreamingOnQUIC"
          },
          {
            id: "cse3111-project13",
            title: "Smart Cache and Proxy Server",
            description: "A powerful, extensible, and smart proxy server with advanced caching capabilities and a web dashboard to monitor traffic. Originally a simple simulation for a Computer Networking Project, it has been enhanced with several advanced features.",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Redis", "Socket Programming", "TCP Protocols", "Flask"],
            teamSize: 2,
            teamMembers: [
              { name: "Mehedi Hasan", githubUsername: "hasanmehediii" },
              { name: "Biplob Pal", githubUsername: "biplob-pal" }
            ],
            coverImage: "/projects/sem5/CacheCaught.png",
            sourceCodeUrl: "https://github.com/hasanmehediii/CSE-3111-Project"
          },
          {
            id: "cse3111-project14",
            title: "Scribble",
            description: "Scribble V2 is a real-time multiplayer drawing and guessing game built using Java 17, JavaFX, and TCP sockets.Players join rooms, take turns drawing words, and compete by guessing correctly within a time limit.",
            course: "Computer Networking Lab",
            courseCode: "CSE-3111",
            technologies: ["Java", "Socket Programming","TCP Protocols","JavaFX"],
            teamSize: 2,
            teamMembers: [
              { name: "Suraya Jannat Mim", githubUsername: "Mim1726" },
              { name: "Jubayer Ahmed Sojib", githubUsername: "Clear20-22" }
            ],
            coverImage: "/projects/sem5/black.jpg",
            sourceCodeUrl: "https://github.com/Mim1726/scribble"
          }
        ]
      }
