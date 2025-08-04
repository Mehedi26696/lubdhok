// Types for study materials
export interface StudyMaterial {
	id: string;
	title: string;
	description: string;
	type: "lecture" | "slide" | "note" | "assignment" | "other" | "books" | "code" | "question";
	viewUrl?: string;
	uploadDate: string;
	subject: string;
}

export interface Semester {
	id: string;
	name: string;
	description: string;
	subjects: Subject[];
}

export interface Subject {
	id: string;
	name: string;
	code: string;
	credits: number;
	type: "theory" | "lab";
	materials: StudyMaterial[];
}

// Sample data for demonstration
export const semesters: Semester[] = [
	{
		id: "semester-1",
		name: "Semester I",
		description: "First Semester - Foundation courses (18.50 Credits)",
		subjects: [
			// Theory Courses
			{
				id: "cse1101",
				name: "Fundamentals of Computers and Computing",
				code: "CSE-1101",
				credits: 2.0,
				type: "theory",
				materials: [
					{
						id: "cse1101-slide1",
						title: "Fundamentals of Computers and Computing",
						description: "All slides on fundamentals of computers and computing",
						type: "slide",
						subject: "Fundamentals of Computers and Computing Theory",
						uploadDate: "2024-01-15",
						viewUrl: "https://drive.google.com/drive/folders/1BHaxSVHQtYFgIrhskC6WvaqKpkY80wSc?usp=sharing",
					},
					{
						id: "cse1101-ref1",
						title: "Programming in ANSI C by Balagurusamy",
						description: "Reference book for computer fundamentals",
						type: "books",
						subject: "Fundamentals of Computers and Computing Theory",
						uploadDate: "2024-01-10",
						viewUrl: "https://drive.google.com/drive/folders/1-CREorTnEmbj7cz_NWGYgwIzfjAOMS5B?usp=sharing",
					},
				],
			},
			{
				id: "cse1102",
				name: "Discrete Mathematics",
				code: "CSE-1102",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse1102-slide1",
						title:  "Discrete Mathematics",
						description: "All slides on discrete mathematics",
						type: "slide",
						subject: "Discrete Mathematics",
						uploadDate: "2024-01-18",
						viewUrl: "https://drive.google.com/drive/folders/1wIvN8kjGSHozNYRoIBAqHnnG4YOsmiMq?usp=sharing",
					},
					{
						id: "cse1102-notes1",
						title: "Discrete Math Notes",
						description: "Complete notes on discrete mathematics",
						type: "note",
						subject: "Discrete Mathematics",
						uploadDate: "2024-01-22",
						viewUrl: "https://github.com/Mehedi26696/Discrete-Mathematics",
					},
					{
						id: "cse1102-ref1",
						title: "Discrete Mathematics by Kenneth Rosen",
						description: "Standard textbook for discrete mathematics",
						type: "books",
						subject: "Discrete Mathematics",
						uploadDate: "2024-01-12",
						viewUrl: "https://drive.google.com/drive/folders/1qQ1J0g4hFz_MJhTEIT-OjaaiI1p5Ekfd?usp=sharing",
					},
				],
			},
			{
				id: "eee1101",
				name: "Electrical Circuits",
				code: "EEE-1101",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "eee1101-slide1",
						title: "Electrical Circuits",
						description: "All Slides on electrical circuits",
						type: "slide",
						subject: "Electrical Circuits",
						uploadDate: "2024-01-20",
						viewUrl: "https://drive.google.com/drive/folders/13D3DqdRKQKj1u4vW_bdNutk0aFVUhL2r?usp=sharing",
					},
					{
						id: "eee1101-ref1",
						title: "Introductory Circuit Analysis by Boylestad",
						description: "Standard reference for electrical circuits",
						type: "books",
						subject: "Electrical Circuits",
						uploadDate: "2024-01-15",
						viewUrl: "https://drive.google.com/drive/folders/1ehHhD_ZrBUf9WLxZCK1DpFlGbd2NDF34?usp=sharing",
					},
				],
			},
			{
				id: "eee1104",
				name: "Chemistry",
				code: "EEE-1104",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "eee1104-slide1",
						title: "Chemistry",
						description: "All slides on chemistry",
						type: "slide",
						subject: "Chemistry",
						uploadDate: "2024-01-22",
						viewUrl: "https://drive.google.com/drive/folders/1p1ttCbW0iCGgzEn9jzL00Bc9Q74Ph6wr?usp=sharing",
					},
					 
					 
					{
						id: "eee1104-ref1",
						title: "Chemistry By Raymond Chang",
						description: "Standard chemistry textbook",
						type: "books",
						subject: "Chemistry",
						uploadDate: "2024-01-18",
						viewUrl: "https://drive.google.com/drive/folders/1z6zqq2gRwAa33_2dAbu9i6mkmpWUiDOA?usp=sharing",
					},
				],
			},
			{
				id: "math1105",
				name: "Differential and Integral Calculus",
				code: "MATH-1105",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "math1105-slide1",
						title: "Calculus",
						description: "All slides on calculus",
						type: "slide",
						subject: "Differential and Integral Calculus",
						uploadDate: "2024-01-25",
						viewUrl: "https://drive.google.com/drive/folders/1xS3JY3RvD7EPZdgFVBS92AbJzIkb0AQb?usp=sharing",
					},
					{
						id: "math1105-notes1",
						title: "Calculus Notes",
						description: "Complete calculus study notes",
						type: "note",
						subject: "Differential and Integral Calculus",
						uploadDate: "2024-01-30",
						viewUrl: "https://drive.google.com/drive/folders/14tA7uSgWdBBnanUaeCxuaF66LLR1x9br?usp=sharing",
					},
					{
						id: "math1105-assign1",
						title: "Calculus Assignments",
						description: "Calculus problem sets and assignments",
						type: "assignment",
						subject: "Differential and Integral Calculus",
						uploadDate: "2024-02-05",
						viewUrl: "https://drive.google.com/drive/folders/14zkekTvzIqzpKKMUy2ZvmlZxc9JF5Nz-?usp=sharing",
					},
					{
						id: "math1105-ref1",
						title: "Calculus by James Stewart",
						description: "Standard calculus textbook",
						type: "books",
						subject: "Differential and Integral Calculus",
						uploadDate: "2024-01-20",
						viewUrl: "https://drive.google.com/drive/folders/189Ujc8XQnjpLrCwdmwx20NznNw6Uhljl?usp=sharing",
					},
				],
			},
			// Question Banks
			{
				id: "questions-1",
				name: "Question Banks",
				code: "QB-1",
				credits: 0,
				type: "theory",
				materials: [
					{
						id: "Previous-Years-Questions",
						title: "Previous Years' Question Bank",
						description: "All previous years' exam questions",
						type: "question",
						subject: "Various",
						uploadDate: "2024-02-10",
						viewUrl: "https://drive.google.com/drive/folders/1XqJc4at9OPa3jvHnSRHaHx7thQ5wQjyZ?usp=sharing",
					},
					{
						id: "29th-Batch-Questions",
						title: "29th Batch Question Bank",
						description: "All exam questions from the 29th batch",
						type: "question",
						subject: "Various",
						uploadDate: "2024-02-12",
						viewUrl: "https://drive.google.com/drive/folders/1iveL6D_yfFrCNoxDgQD6Qem0YBgZww4y?usp=sharing",
					},
					 
				],
			},
			// Lab Courses
			{
				id: "cse1111",
				name: "Fundamentals of Computers and Computing Lab",
				code: "CSE-1111",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "cse1111-lab1",
						title: "Computing Lab Tasks",
						description: "Practical computing exercises and lab tasks",
						type: "other",
						subject: "Fundamentals of Computers and Computing Lab",
						uploadDate: "2024-02-01",
						viewUrl: "https://drive.google.com/drive/folders/1HBa-zqfLncJjgJljsV5VqbSbI7EO7kkA?usp=sharing",
					},
				],
			},
			{
				id: "eee1113",
				name: "Electrical Circuits Lab",
				code: "EEE-1113",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "eee1113-lab1",
						title: "Circuit Lab Tasks",
						description: "Hands-on circuit analysis lab experiments",
						type: "other",
						subject: "Electrical Circuits Lab",
						uploadDate: "2024-02-03",
						viewUrl: "https://drive.google.com/drive/folders/1KGH8gSPBD7Pq9oQkg71GeMsreJq-d1Ux?usp=sharing",
					},
				],
			},
			{
				id: "che1114",
				name: "Chemistry Lab",
				code: "CHE-1114",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "che1114-lab1",
						title: "Chemistry Lab Tasks",
						description: "Laboratory experiments in chemistry",
						type: "other",
						subject: "Chemistry Lab",
						uploadDate: "2024-02-05",
						viewUrl: "https://drive.google.com/drive/folders/1CdZUW7ZlE4YfR6bqVHXzyTtzxGhMI4pR?usp=sharing",
					},
				],
			},
		],
	},
	{
		id: "semester-2",
		name: "Semester II",
		description: "Second Semester - Foundation courses (19.50 Credits)",
		subjects: [
			// Theory Courses
			{
				id: "cse1201",
				name: "Fundamentals of Programming",
				code: "CSE-1201",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse1201-slide1",
						title: "Fundamentals of Programming",
						description: "All slides on programming fundamentals",
						type: "slide",
						subject: "Fundamentals of Programming",
						uploadDate: "2024-02-10",
						viewUrl: "https://drive.google.com/drive/folders/1NCLehf83xq9zugMuX2_JxpyYEccwMZ2A?usp=sharing",
					},
					 
					{
						id: "cse1201-ref1",
						title: "C The Complete Reference by Herbert Schildt",
						description: "Standard C programming reference",
						type: "books",
						subject: "Fundamentals of Programming",
						uploadDate: "2024-02-08",
						viewUrl: "https://drive.google.com/drive/folders/18PEEqhBObo5JW1nPKFE8bDc8b5FTZKuB?usp=sharing",
					},
				],
			},
			{
				id: "eee1202",
				name: "Digital Logic Design",
				code: "EEE-1202",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "eee1202-slide1",
						title: "Digital Logic Design",
						description: "All slides on digital logic design",
						type: "slide",
						subject: "Digital Logic Design",
						uploadDate: "2024-02-12",
						viewUrl: "https://drive.google.com/drive/folders/1tiMS5PP7DXQqUBrAuWTfq4tzUt67Do1Y?usp=sharing",
					},
					 
					{
						id: "eee1202-ref1",
						title: "Digital Design by Morris Mano",
						description: "Standard digital design textbook",
						type: "books",
						subject: "Digital Logic Design",
						uploadDate: "2024-02-10",
						viewUrl: "https://drive.google.com/drive/folders/1DE2D1YE1ecFr8QM7WfcLD7ao9lwxQUfS?usp=sharing",
					},
				],
			},
			{
				id: "phy1203",
				name: "Physics",
				code: "PHY-1203",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "phy1203-slide1",
						title: "Physics",
						description: "All slides on physics",
						type: "slide",
						subject: "Physics",
						uploadDate: "2024-02-14",
						viewUrl: "https://drive.google.com/drive/folders/1NaJy3wyR9tqxX-1lKqwWWKhTiZAThgrB?usp=sharing",
					},
					{
						id: "phy1203-notes1",
						title: "Physics Notes",
						description: "Complete physics study notes",
						type: "note",
						subject: "Physics",
						uploadDate: "2024-02-19",
						viewUrl: "https://drive.google.com/drive/folders/19nZhBLLQRluK5mvSRMtvvhlB4W7fa-bU?usp=sharing",
					},
					 
					{
						id: "phy1203-ref1",
						title: "University Physics by Young & Freedman",
						description: "Standard physics textbook",
						type: "books",
						subject: "Physics",
						uploadDate: "2024-02-12",
						viewUrl: "https://drive.google.com/drive/folders/1iHz1znWdH4OOmeJkUs8e0YNWuQQoXOfV?usp=sharing",
					},
				],
			},
			{
				id: "math1204",
				name: "Methods of Integration, Differential Equations, and Series",
				code: "MATH-1204",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "math1204-slide1",
						title: "Method of Integration, Differential Equations, and Series",
						description: "All slides on integration and differential equations and series",
						type: "slide",
						subject: "Methods of Integration, Differential Equations, and Series",
						uploadDate: "2024-02-16",
						viewUrl: "https://drive.google.com/drive/folders/1JGhhF1XQIYqN5HVokn32_tXv-DgePIrB?usp=sharing",
					},
					{
						id: "math1204-notes1",
						title: "Complete Notes on Integration and Differential Equations",
						description: "Complete notes on integration and differential equations",
						type: "note",
						subject: "Methods of Integration, Differential Equations, and Series",
						uploadDate: "2024-02-21",
						viewUrl: "https://drive.google.com/drive/folders/1Xg2BmZcNL9nsDbqRv4Wk2-P428IulSUr?usp=sharing",
					},
					 
					{
						id: "math1204-ref1",
						title: "Calculus by H. Anton",
						description: "Standard textbook on calculus",
						type: "books",
						subject: "Methods of Integration, Differential Equations, and Series",
						uploadDate: "2024-02-14",
						viewUrl: "https://drive.google.com/drive/folders/1dU10Wy4sLKJQOjgijX29SKtEv_MxaTD3?usp=sharing",
					},
				],
			},
			// Lab Courses
			{
				id: "cse1211",
				name: "Fundamentals of Programming Lab",
				code: "CSE-1211",
				credits: 3.0,
				type: "lab",
				materials: [
					{
						id: "cse1211-lab1",
						title: "Programming Lab Tasks",
						description: "Hands-on programming exercises and projects",
						type: "other",
						subject: "Fundamentals of Programming Lab",
						uploadDate: "2024-02-18",
						viewUrl: "https://drive.google.com/drive/folders/1RUrB_nQL-u1qZ28du5CxiHNZWAPeHfih?usp=sharing",
					},
				],
			},
			{
				id: "eee1212",
				name: "Digital Logic Design Lab",
				code: "EEE-1212",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "eee1212-lab1",
						title: "Digital Logic Lab Tasks",
						description: "Digital logic design lab experiments",
						type: "other",
						subject: "Digital Logic Design Lab",
						uploadDate: "2024-02-20",
						viewUrl: "https://drive.google.com/drive/folders/1-0RGGcyb9QwKEIA1Ma828zaL5gesCqXr?usp=sharing",
					},
				],
			},
			{
				id: "phy1213",
				name: "Physics Lab",
				code: "PHY-1213",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "phy1213-lab1",
						title: "Physics Lab Tasks",
						description: "Physics laboratory experiments",
						type: "other",
						subject: "Physics Lab",
						uploadDate: "2024-02-22",
						viewUrl: "https://drive.google.com/drive/folders/1JUkASuVSAZbBFUclGUZkmHJWAGMeIF1d?usp=sharing",
					},
				],
			},
			{
				id: "eng1215",
				name: "Developing English Language Skills Lab",
				code: "ENG-1215",
				credits: 1.5,
				type: "lab",
				materials: [
					 
				],
			},
			// Question Banks
			{
				id: "questions-2",
				name: "Question Banks",
				code: "QB-2",
				credits: 0,
				type: "theory",
				materials: [
					{
						id: "Previous-Years-Questions-2",
						title: "Previous Years' Question Bank",
						description: "All previous years' exam questions for Semester II",
						type: "question",
						subject: "Various",
						uploadDate: "2024-05-25",
						viewUrl: "https://drive.google.com/drive/folders/1DMZQeNvmhycFLb7-Q5oFCRv8XS3PyQKH?usp=sharing",
					},
					{
						id: "29th-Batch-Questions-2",
						title: "29th Batch Question Bank",
						description: "All exam questions from the 29th batch for Semester II",
						type: "question",
						subject: "Various",
						uploadDate: "2024-05-27",
						viewUrl: "https://drive.google.com/drive/folders/1degoYnf8luWi5Y71Oj5okqYCrUGUiwpH?usp=sharing",
					},
				],
			},
		],
	},
	{
		id: "semester-3",
		name: "Semester III",
		description: "Third Semester - Core subjects (17.75 Credits)",
		subjects: [
			// Theory Courses
			{
				id: "cse2101",
				name: "Data Structures and Algorithms",
				code: "CSE-2101",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse2101-slide1",
						title: "Data Structures And Algorithms",
						description: "All slides on data structures and algorithms",
						type: "slide",
						subject: "Data Structures and Algorithms",
						uploadDate: "2025-03-01",
						viewUrl: "https://github.com/Mehedi26696/DSA/tree/main/Lecture%20Slide",
					},
					{
						id: "cse2101-notes1",
						title: "DSA Notes",
						description: "Complete data structures and algorithms notes",
						type: "note",
						subject: "Data Structures and Algorithms",
						uploadDate: "2025-03-05",
						viewUrl: "https://github.com/Mehedi26696/DSA/blob/main/DSA%20%20Notes/DSA%20Hand%20Note.pdf",
					},
          {
            id: "cse2101-lecturecode1",
            title: "DSA Lecture Code",
            description: "All lecture code for data structures and algorithms",
            type: "code",
            subject: "Data Structures and Algorithms",
            uploadDate: "2025-03-10",
            viewUrl: "https://github.com/Mehedi26696/DSA/tree/main/Lecture%20Code",
          }
				],
			},
			{
				id: "cse2103",
				name: "Object Oriented Programming",
				code: "CSE-2103",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse2103-slide1",
						title: "OOP Oriented Programming",
						description: "All slides on object-oriented programming",
						type: "slide",
						subject: "Object Oriented Programming",
						uploadDate: "2025-03-03",
						viewUrl: "https://github.com/Mehedi26696/Object-Oriented-Programming-Java-/tree/main/Slides",
					},
					 
					{
						id: "cse2103-lecturecode1",
						title: "OOP Lecture Code",
						description: "All lecture code for object-oriented programming",
						type: "code",
						subject: "Object Oriented Programming",
						uploadDate: "2025-03-12",
						viewUrl: "https://github.com/Mehedi26696/Object-Oriented-Programming-Java-/tree/main/Lecture%20Code",
					},
          {
            id: "cse2103-ref1",
            title:  "Complete Reference Java by Herbert Schildt",
            description: "Standard OOP reference book",
            type: "books",
            subject: "Object Oriented Programming",
            uploadDate: "2025-03-01",
            viewUrl: "https://drive.google.com/drive/folders/12qdE1XAcPHA05Ng0gnnqFonJfrPE7Vuq?usp=sharing",
          }
					 
				],
			},
			{
				id: "eee2103",
				name: "Electronic Devices and Circuits",
				code: "EEE-2103",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "eee2103-slide1",
						title: "Electronic Devices and Circuits",
						description: "All slides on electronic devices and circuits",
						type: "slide",
						subject: "Electronic Devices and Circuits",
						uploadDate: "2025-03-05",
						viewUrl: "https://drive.google.com/drive/folders/1NGyPq8mkhEjEV-MnqwAycK0WRA2AC5ja?usp=sharing",
					},
					 
					{
						id: "eee2103-ref1",
						title: "Electronic Devices by Boylestad",
						description: "Standard electronic devices textbook",
						type: "books",
						subject: "Electronic Devices and Circuits",
						uploadDate: "2025-03-03",
						viewUrl: "https://drive.google.com/drive/folders/1Ukcn0A-ryve97840j_s2OfroRi7pRBJz?usp=sharing",
					},
				],
			},
			{
				id: "ged2104",
				name: "Bangladesh Studies",
				code: "GED-2104",
				credits: 2.0,
				type: "theory",
				materials: [
					{
						id: "ged2104-slide1",
						title: "Bangladesh History and Culture",
						description: "Study of Bangladesh history and culture",
						type: "slide",
						subject: "Bangladesh Studies",
						uploadDate: "2025-03-07",
						viewUrl: "https://drive.google.com/drive/folders/1MlM9w3GP_KfHBdADB99vK0MQmC0OK8az?usp=sharing",
					},
				 
				],
			},
			{
				id: "math2105",
				name: "Linear Algebra",
				code: "MATH-2105",
				credits: 3.0,
				type: "theory",
				materials: [
					 
					{
						id: "math2105-notes1",
						title: "Linear Algebra Notes",
						description: "Complete linear algebra study notes",
						type: "note",
						subject: "Linear Algebra",
						uploadDate: "2025-03-13",
						viewUrl: "https://github.com/Mehedi26696/Linear-Algebra/tree/main/Hand%20Note",
					},
				 
					{
						id: "math2105-ref1",
						title: "Elementary Linear Algebra by Anton",
						description: "Standard linear algebra textbook",
						type: "books",
						subject: "Linear Algebra",
						uploadDate: "2025-03-07",
						viewUrl: "https://drive.google.com/drive/folders/1osrYoZgkG-ClOnLaqZBAe6CpoJBAwKKM?usp=sharing",
					},
				],
			},
			// Lab Courses
			{
				id: "cse2111",
				name: "Data Structures and Algorithms Lab",
				code: "CSE-2111",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "cse2111-lab1",
						title: "DSA Lab Tasks",
						description: "Practical implementation of data structures",
						type: "other",
						subject: "Data Structures and Algorithms Lab",
						uploadDate: "2025-03-11",
						viewUrl:"https://github.com/Mehedi26696/DSA/tree/main/Lab",
					},
				],
			},
			{
				id: "cse2113",
				name: "Object Oriented Programming Lab",
				code: "CSE-2113",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "cse2113-lab1",
						title: "OOP Lab Tasks",
						description: "Object-oriented programming lab projects",
						type: "other",
						subject: "Object Oriented Programming Lab",
						uploadDate: "2025-03-13",
						viewUrl: "https://github.com/Mehedi26696/Object-Oriented-Programming-Java-/tree/main/Lab%20Assignments",
					},
				],
			},
			{
				id: "eee2113",
				name: "Electronic Devices and Circuits Lab",
				code: "EEE-2113",
				credits: 0.75,
				type: "lab",
				materials: [
					 
				],
			},
            
			// Question Banks
			{
				id: "questions-3",
				name: "Question Banks",
				code: "QB-3",
				credits: 0,
				type: "theory",
				materials: [
					{
						id: "Previous-Years-Questions-3",
						title: "Previous Years' Question Bank",
						description: "All previous years' exam questions for Semester III",
						type: "question",
						subject: "Various",
						uploadDate: "2025-01-25",
						viewUrl: "https://drive.google.com/drive/folders/1lotUdFUpmVrM0FYJUCXfqUt4OeuSpk_6?usp=sharing",
					},
					{
						id: "29th-Batch-Questions-3",
						title: "29th Batch Question Bank",
						description: "All exam questions from the 29th batch for Semester III",
						type: "question",
						subject: "Various",
						uploadDate: "2025-02-27",
						viewUrl: "https://drive.google.com/drive/folders/1iUmhUxDEam26C91Go8hLDXS2tZmRKbb6?usp=sharing",
					},
				],
			},
            
		],
	},
	{
		id: "semester-4",
		name: "Semester IV",
		description: "Fourth Semester - Advanced subjects (19.25 Credits)",
		subjects: [
			// Theory Courses
			{
				id: "cse2201",
				name: "Database Management Systems - I",
				code: "CSE-2201",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse2201-slide1",
						title: "Database Management Systems - I",
						description: "All slides on database management systems",
						type: "slide",
						subject: "Database Management Systems - I",
						uploadDate: "2025-08-01",
						viewUrl: "https://github.com/Mehedi26696/Database-Management-System-I/tree/main/Contents",
					},
					{
						id: "cse2201-ref1",
						title: "Database System Concepts by Silberschatz",
						description: "Standard database textbook",
						type: "books",
						subject: "Database Management Systems - I",
						uploadDate: "2025-08-01",
						viewUrl: "https://github.com/Mehedi26696/Database-Management-System-I/tree/main/Books",
					},
				],
			},
			{
				id: "cse2202",
				name: "Design and Analysis of Algorithms - I",
				code: "CSE-2202",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse2202-slide1",
						title: "Design and Analysis of Algorithms - I",
						description: "All slides on design and analysis of algorithms - I",
						type: "slide",
						subject: "Design and Analysis of Algorithms - I",
						uploadDate: "2025-08-03",
						viewUrl: "https://github.com/Mehedi26696/Design-and-Analysis-Algorithm/tree/main/Slides",
					},
					{
            id: "cse2202-lecturecode1",
            title: "Design and Analysis of Algorithms - I Lecture Code",
            description: "All lecture code for design and analysis of algorithms - I",
            type: "code",
            subject: "Design and Analysis of Algorithms - I",
            uploadDate: "2025-08-03",
            viewUrl: "https://github.com/Mehedi26696/Design-and-Analysis-Algorithm/tree/main/Algorithm%20Implementation",
          },
				],
			},
			{
				id: "cse2203",
				name: "Data and Telecommunication",
				code: "CSE-2203",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse2203-slide1",
						title: "Data and Telecommunication",
						description: "All slides on data and telecommunication",
						type: "slide",
						subject: "Data and Telecommunication",
						uploadDate: "2025-08-05",
						viewUrl: "https://drive.google.com/drive/folders/1d2UKMZgD-yXua5jDZc9560F3WrppnzEC?usp=sharing",
					},
          {
            id: "cse2203-assign1",
            title: "Data and Telecommunication Assignments",
            description: "Assignments on data and telecommunication concepts",
            type: "assignment",
            subject: "Data and Telecommunication",
            uploadDate: "2025-08-07",
            viewUrl: "https://drive.google.com/drive/folders/1cnLhBemgCL9f8_CtcC3MhjFaTg75YssV?usp=sharing"
          },
					{
						id: "cse2203-ref1",
						title: "Data Communications and Networking by Forouzan",
						description: "Standard networking textbook",
						type: "books",
						subject: "Data and Telecommunication",
						uploadDate: "2025-08-03",
						viewUrl: "https://drive.google.com/drive/folders/1LRTy6u2a8T1icW-re26uZ0pemz0wW9bm?usp=sharing",
					},
				],
			},
			{
				id: "cse2204",
				name: "Computer Architecture and Organization",
				code: "CSE-2204",
				credits: 2.0,
				type: "theory",
				materials: [
					{
						id: "cse2204-slide1",
						title: "Computer Architecture and Organization",
						description: "All slides on computer architecture and organization",
						type: "slide",
						subject: "Computer Architecture and Organization",
						uploadDate: "2025-08-07",
						viewUrl: "https://github.com/Mehedi26696/Computer-Architecture-And-Organization/tree/main/Slides",
					},
					{
            id: "cse2204-notes1",
            title: "Computer Architecture and Organization Notes",
            description: "All notes on computer architecture and organization",
            type: "note",
            subject: "Computer Architecture and Organization",
            uploadDate: "2025-08-07",
            viewUrl: "https://github.com/Mehedi26696/Computer-Architecture-And-Organization/tree/main/Notes",
          },
          {
            id: "cse2204-assign1",
            title: "Computer Architecture and Organization Assignments",
            description: "All assignments on computer architecture and organization",
            type: "assignment",
            subject: "Computer Architecture and Organization",
            uploadDate: "2025-08-07",
            viewUrl: "https://github.com/Mehedi26696/Computer-Architecture-And-Organization/tree/main/Assignments",
          },
					{
						id: "cse2204-ref1",
						title: "Computer Organization and Design by Patterson",
						description: "Standard computer architecture textbook",
						type: "books",
						subject: "Computer Architecture and Organization",
						uploadDate: "2025-08-07",
						viewUrl: "https://github.com/Mehedi26696/Computer-Architecture-And-Organization/tree/main/Books",
					},
				],
			},
			{
				id: "cse2205",
				name: "Introduction to Mechatronics",
				code: "CSE-2205",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse2205-slide1",
						title: "Introduction to Mechatronics",
						description: "All slides on introduction to mechatronics",
						type: "slide",
						subject: "Introduction to Mechatronics",
						uploadDate: "2025-08-07",
						viewUrl: "https://drive.google.com/drive/folders/15p3nrwDZGHJUFlHIchzhpiZhdo-bSTPM?usp=sharing",
					},
					{
						id: "cse2205-ref1",
						title: "Mechatronics by W. Bolton",
						description: "Standard mechatronics textbook",
						type: "books",
						subject: "Introduction to Mechatronics",
						uploadDate: "2025-08-07",
						viewUrl: "https://drive.google.com/drive/folders/1ILudBK8NzQGXu9B5CFte-M1med4DBkYr?usp=sharing",
					},
				],
			},
			// Lab Courses
			{
				id: "cse2211",
				name: "Database Management Systems - I Lab",
				code: "CSE-2211",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "cse2211-lab1",
						title: "DBMS Lab Tasks",
						description: "Database design and implementation lab tasks",
						type: "other",
						subject: "Database Management Systems - I Lab",
						uploadDate: "2024-04-11",
						viewUrl: "https://github.com/Mehedi26696/Database-Management-System-I/tree/main/Lab",
					},
				],
			},
			{
				id: "cse2213",
				name: "Design and Analysis of Algorithms - I Lab",
				code: "CSE-2213",
				credits: 1.5,
				type: "lab",
				materials: [
					{
						id: "cse2213-lab1",
						title: "Algorithm Lab Tasks",
						description: "Algorithm implementation and analysis lab tasks",
						type: "other",
						subject: "Design and Analysis of Algorithms - I Lab",
						uploadDate: "2025-08-05",
						viewUrl: "https://github.com/Mehedi26696/Design-and-Analysis-Algorithm/tree/main/Lab",
					},
				],
			},
			{
				id: "cse2214",
				name: "Data and Telecommunication Lab",
				code: "CSE-2214",
				credits: 0.75,
				type: "lab",
				materials: [
				],
			},
			{
				id: "cse2216",
				name: "Application Development Lab",
				code: "CSE-2216",
				credits: 1.5,
				type: "lab",
				materials: [
				 
				],
			},

			// Question Banks
			{
				id: "questions-4",
				name: "Question Banks",
				code: "QB-4",
				credits: 0,
				type: "theory",
				materials: [
					{
						id: "Previous-Years-Questions-4",
						title: "Previous Years' Question Bank",
						description: "All previous years' exam questions for Semester IV",
						type: "question",
						subject: "Various",
						uploadDate: "2025-07-25",
						viewUrl: "https://drive.google.com/drive/folders/1VZl3JvF4aZ2zpIN_e-OBdukGsVcbKrr8?usp=sharing",
					},
					{
						id: "29th-Batch-Questions-4",
						title: "29th Batch Question Bank",
						description: "All exam questions from the 29th batch for Semester IV",
						type: "question",
						subject: "Various",
						uploadDate: "2025-08-27",
						viewUrl: "https://drive.google.com/drive/folders/1gD3jyuk8xs3_BxlGgBV0Rk4N2RQd8FZT?usp=sharing",
					},
				],
			},
		],
	},
];
