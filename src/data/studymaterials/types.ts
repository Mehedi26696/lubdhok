// Types for study materials
export interface StudyMaterial {
	id: string;
	title: string;
	description: string;
	type:
		| "lecture"
		| "slide"
		| "note"
		| "assignment"
		| "other"
		| "books"
		| "code"
		| "question";
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
