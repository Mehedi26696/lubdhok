import type { Subject } from '../../types'
export const subjectData: Subject = {
				id: "cse3102",
				name: "Software Engineering",
				code: "CSE-3102",
				credits: 3.0,
				type: "theory",
				materials: [
					{
						id: "cse3102-slides",
						title: "Software Engineering Lecture Slides",
						description: "Slides covering key concepts in Software Engineering",
						type: "slide",
						subject: "Software Engineering",
						uploadDate: "2025-09-03",
						viewUrl:
							"https://github.com/Mehedi26696/Software-Engineering/tree/main/Lecture%20Slides",
					},
					{
						id: "cse3102-notes",
						title: "Software Engineering Notes",
						description: "Comprehensive notes on Software Engineering",
						type: "note",
						subject: "Software Engineering",
						uploadDate: "2025-09-03",
						viewUrl:
							"https://github.com/Mehedi26696/Software-Engineering/tree/main/Notes",
					},
					{
						id: "cse3102-books",
						title: "Software Engineering Books",
						description: "Textbook on Software Engineering",
						type: "books",
						subject: "Software Engineering",
						uploadDate: "2025-09-03",
						viewUrl:
							"https://github.com/Mehedi26696/Software-Engineering/tree/main/Books",
					} 
				],
			}
