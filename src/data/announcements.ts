export interface Announcement {
  id: string;
  title: string;
  message: string;
  date: string;  
  author?: string;
  link?: string;
}

export const announcements: Announcement[] = [
   
  {
    id: '1',
    title: 'DBMS Project Submission',
    message: 'All students have to present their DBMS projects on Saturday,23rd August.',
    date: '2025-07-23'
  },
  {
    id: '2',
    title: 'Class Start Date',
    message: '4th Semester classes start on Sunday, 24th August.',
    date: '2025-08-15'
  }
];
