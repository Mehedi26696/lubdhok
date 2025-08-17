export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;  
  awardedBy?: string;
  link?: string;
  coverImage?: string;
}

export const achievements: Achievement[] = [
    {
        id: '1',
        title: "1st Runners-UP - DU CTF 2024",
        description: "DU_Black_Noodles won 2nd prize in DU CTF 2024 organized by CSE, University of Dhaka.",
        date: '2024-12-15',
        awardedBy: 'CSE, University of Dhaka',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7278103645320024064/',
        coverImage: 'achievements/du.jpeg'
    },
    {
        id: '2',
        title: "2nd Runners-UP - UAP Cyber Seige 2025",
        description: "DU_Black_Noodles won 3rd prize in UAP Cyber Seige 2025 organized by University of Asia Pacific.",
        date: '2025-04-15',
        awardedBy: 'University of Asia Pacific',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7325126660108767232/',
        coverImage: 'achievements/uap.jpeg'
    },
    {
        id: '3',
        title: "1st Runners-UP - PKI Hackathon 2025",
        description: "DU_Apricot won 2nd prize in Public Key Infrastructure Hackathon 2025 organized by Controller of Certifying Authority and ICT Division, Government of the Peoples Republic of Bangladesh.",
        date: '2025-05-22',
        awardedBy: 'CCA-Controller of Certifying Authorities',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7332061841239470080/',
        coverImage: 'achievements/pki.jpeg'
    }
];
