import type { Subject } from '../../types'
export const subjectData: Subject = {
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
						viewUrl:
							"https://drive.google.com/drive/folders/1NaJy3wyR9tqxX-1lKqwWWKhTiZAThgrB?usp=sharing",
					},
					{
						id: "phy1203-notes1",
						title: "Physics Notes",
						description: "Complete physics study notes",
						type: "note",
						subject: "Physics",
						uploadDate: "2024-02-19",
						viewUrl:
							"https://drive.google.com/drive/folders/19nZhBLLQRluK5mvSRMtvvhlB4W7fa-bU?usp=sharing",
					},
					{
						id: "phy1203-ref1",
						title: "University Physics by Young & Freedman",
						description: "Standard physics textbook",
						type: "books",
						subject: "Physics",
						uploadDate: "2024-02-12",
						viewUrl:
							"https://drive.google.com/drive/folders/1iHz1znWdH4OOmeJkUs8e0YNWuQQoXOfV?usp=sharing",
					},
				],
			}
