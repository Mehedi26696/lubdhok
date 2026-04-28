import type { Subject } from '../../types'
export const subjectData: Subject = {
                id: "cse3201",
                name: "Operating Systems",
                code: "CSE-3201",
                credits: 3.0,
                type: "theory",
                materials: [
                    {
                        id: "cse3201-book",
                        title: "Operating Systems - Book",
                        description: "Recommended textbook for Operating Systems",
                        type: "books",
                        subject: "Operating Systems",
                        uploadDate: "2026-04-28",
                        viewUrl:
                            "https://github.com/Mehedi26696/Operating-Systems/blob/main/Book/Andrew-S.-Tanenbaum-Modern-Operating-Systems.pdf",
                    },
                    {
                        id: "cse3201-notes",
                        title: "Operating Systems - Notes",
                        description: "Comprehensive notes for Operating Systems",
                        type: "note",
                        subject: "Operating Systems",
                        uploadDate: "2026-04-28",
                        viewUrl:
                            "https://github.com/Mehedi26696/Operating-Systems/tree/main/Notes",
                    } 
                  
                ],
            }
