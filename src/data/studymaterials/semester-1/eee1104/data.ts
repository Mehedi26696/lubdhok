import type { Subject } from '../../types'
export const subjectData: Subject = {
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
						viewUrl:
							"https://drive.google.com/drive/folders/1p1ttCbW0iCGgzEn9jzL00Bc9Q74Ph6wr?usp=sharing",
					},
					{
						id: "eee1104-ref1",
						title: "Chemistry By Raymond Chang",
						description: "Standard chemistry textbook",
						type: "books",
						subject: "Chemistry",
						uploadDate: "2024-01-18",
						viewUrl:
							"https://drive.google.com/drive/folders/1z6zqq2gRwAa33_2dAbu9i6mkmpWUiDOA?usp=sharing",
					},
				],
			}
