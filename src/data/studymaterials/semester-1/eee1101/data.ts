import type { Subject } from '../../types'
export const subjectData: Subject = {
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
						viewUrl:
							"https://drive.google.com/drive/folders/13D3DqdRKQKj1u4vW_bdNutk0aFVUhL2r?usp=sharing",
					},
					{
						id: "eee1101-ref1",
						title: "Introductory Circuit Analysis by Boylestad",
						description: "Standard reference for electrical circuits",
						type: "books",
						subject: "Electrical Circuits",
						uploadDate: "2024-01-15",
						viewUrl:
							"https://drive.google.com/drive/folders/1ehHhD_ZrBUf9WLxZCK1DpFlGbd2NDF34?usp=sharing",
					},
				],
			}
