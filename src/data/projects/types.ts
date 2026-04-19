// Types for academic projects
export interface TeamMember {
  name: string;
  githubUsername: string;
}
export interface AcademicProject {
  id: string;
  title: string;
  description: string;
  course: string;
  courseCode: string;
  technologies: string[];
  teamSize: number;
  teamMembers: TeamMember[];
  coverImage: string;
  demoUrl?: string;
  sourceCodeUrl?: string;
  documentationUrl?: string;
}
export interface ProjectSemester {
  id: string;
  name: string;
  description: string;
  courses: ProjectCourse[];
}
export interface ProjectCourse {
  id: string;
  name: string;
  code: string;
  credits: number;
  projects: AcademicProject[];
}
