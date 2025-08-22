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
    id: '0',
    title: 'About Lubdhok',
    message: 'Lubdhok is the official batch name for Dhaka University, CSE Department 29th Batch. Here we share study materials, organize events, and collaborate on projects throughout our academic journey.',
    date: '2025-01-01',
    author: 'Batch Admin'
  },
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
  },
  {
    id: '3',
    title: 'Battles of Brains 2025',
    message: 'The battles of brains competition will be held on 30th August.',
    date: '2025-08-19',
    link: 'https://www.facebook.com/share/1D9SQFaq1C/',
  },
  {
    id: '4',
    title: 'Class Routine',
    message: 'This is the class routine for the upcoming semester.',
    date: '2025-08-19',
    link: 'https://drive.google.com/file/d/1gN4DMHexEYp4zVEYXB0_0gUNK_4UPwwF/view?usp=sharing',
  },
  {
    id: '5',
    title: 'CSEDU Freshers Week 2025',
    message:  'CSEDU Freshers Week 2025 is here!',
    date: '2025-08-20',
    link: 'https://www.facebook.com/share/1Aq6ihsqce/',
  }
];
