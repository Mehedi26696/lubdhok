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
    },
    {
        id: '4',
        title: "𝟐𝐧𝐝 𝐑𝐮𝐧𝐧𝐞𝐫-𝐮𝐩 𝐚𝐭 𝐁𝐔𝐏 𝐂𝐚𝐩𝐭𝐮𝐫𝐞 𝐓𝐡𝐞 𝐅𝐥𝐚𝐠 𝟐𝟎𝟐𝟓",
        description: "𝐃𝐔_𝐁𝐥𝐚𝐜𝐤_𝐍𝐨𝐨𝐝𝐥𝐞𝐬, earned 2660 points and secured 𝟑𝐫𝐝 𝐩𝐥𝐚𝐜𝐞 at the 𝐁𝐔𝐏 𝐂𝐓𝐅 𝟐𝟎𝟐𝟓 powered by Knight Squad.",
        date: '2025-10-10',
        awardedBy: 'Bangladesh University of Professionals',
        link: 'https://www.linkedin.com/posts/md-abu-bakar-siddique-59b881237_bupctf-knightsquad-capturetheflag-activity-7377368273832673280-dqQ5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEQit6YBYxNqku484MeM9Wg9fdumwv23N8M',
        coverImage: 'achievements/BUP.png'
    },
    {
        id: '5',
        title: "𝟏𝐬𝐭 𝐑𝐮𝐧𝐧𝐞𝐫-𝐔𝐩 | 𝐃𝐈𝐔 𝐂𝐲𝐛𝐞𝐫𝐂𝐨𝐧 – 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐂𝐚𝐩𝐭𝐮𝐫𝐞 𝐓𝐡𝐞 𝐅𝐥𝐚𝐠 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧 𝟐𝟎𝟐𝟓",
        description: "𝐃𝐔_𝐁𝐥𝐚𝐜𝐤_𝐍𝐨𝐨𝐝𝐥𝐞𝐬 achieved the 🥈𝟏𝐬𝐭 𝐑𝐮𝐧𝐧𝐞𝐫-𝐔𝐩 position at the National Capture The Flag Competition 2025, organized by the Cyber Security Club, Daffodil International University under DIU_CYBERCON.",
        date: '2025-11-10',
        awardedBy: 'Daffodil International University',
        link: 'https://www.linkedin.com/posts/md-abu-bakar-siddique-59b881237_ctf-cybersecurity-ethicalhacking-activity-7390052587158360069-QUjx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEQit6YBYxNqku484MeM9Wg9fdumwv23N8M',
        coverImage: 'achievements/DIU.png'
    },
    {
        id: '6',
        title: "1st Runner-Up | Echologyx Hackathon 2025",
        description: "Team Dev_Mavericks secured the 🥈1st Runner-Up position at Echologyx Hackathon 2025 organized by Echologyx.",
        date: '2025-11-08',
        awardedBy: 'Echologyx',
        link: 'https://www.facebook.com/sumaiya.rahman.296910/posts/pfbid0PLwhwoeEEopvePWxZJzckKeDXF4TPL4ZnBkToD33kMrgpXcNZ1xkTJ1X3yvFY5SMl',
        coverImage: 'achievements/ecologyx.jpg'
    },
    {
        id: '7',
        title: "𝟏𝐬𝐭 𝐑𝐮𝐧𝐧𝐞𝐫-𝐔𝐩 | 𝐂𝐢𝐩𝐡𝐞𝐫𝐒𝐩𝐫𝐢𝐧𝐭 CTF - 𝐂𝐈𝐑𝐂𝐔𝐈𝐓 𝐂𝐋𝐀𝐒𝐇 𝟏.𝟎",
        description: "𝐃𝐔_𝐁𝐥𝐚𝐜𝐤_𝐍𝐨𝐨𝐝𝐥𝐞𝐬 secured the 🥈𝟏𝐬𝐭 𝐑𝐮𝐧𝐧𝐞𝐫-𝐔𝐩 position in the CipherSprint CTF 2025, powered by Knight Squad and organized by the BUP Robotics Club",
        date: '2025-11-20',
        awardedBy: 'Bangladesh University of Professionals',
        link: 'https://www.linkedin.com/posts/md-abu-bakar-siddique-59b881237_ciphersprint-capturetheflag-ctf-activity-7396587491169837056-kGNz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEQit6YBYxNqku484MeM9Wg9fdumwv23N8M',
        coverImage: 'achievements/BUP2.png'
    },
    {
        id: '8',
        title: "Champion | 𝐂𝐢𝐩𝐡𝐞𝐫𝐒𝐩𝐫𝐢𝐧𝐭 CTF - 𝐂𝐈𝐑𝐂𝐔𝐈𝐓 𝐂𝐋𝐀𝐒𝐇 𝟏.𝟎",
        description: "𝐒𝐥𝐞𝐞𝐩𝐲 𝐏𝐚𝐧𝐝𝐚𝐬, secured 1𝐬𝐭 𝐩𝐥𝐚𝐜𝐞 𝐚𝐭 𝐂𝐢𝐩𝐡𝐞𝐫𝐒𝐩𝐫𝐢𝐧𝐭– powered by Knight Squad and organized by the BUP Robotics Club",
        date: '2025-11-20',
        awardedBy: 'Bangladesh University of Professionals',
        link: 'https://www.linkedin.com/posts/rushan-jamil-453a20330_ciphersprint-buproboticsclub-knightsquad-activity-7396555137864945664-43ve?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEQit6YBYxNqku484MeM9Wg9fdumwv23N8M',
        coverImage: 'achievements/BUP3.png'
    },
    {
        id: '9',
        title: "4th Winner | 𝐀𝐥-𝐊𝐡𝐰𝐚𝐫𝐢𝐳𝐦𝐢 𝐂𝐓𝐅",
        description: "𝐃𝐔_𝐁𝐥𝐚𝐜𝐤_𝐍𝐨𝐨𝐝𝐥𝐞𝐬 secured the 4th position at the Al-Khwarizmi CTF, organized by Bangladesh Islami Chhatra Shibir Central Science Department.",
        date: '2026-01-29',
        awardedBy: 'Bangladesh Islami Chhatra Shibir Central Science Department',
        link: 'https://www.linkedin.com/posts/md-abu-bakar-siddique-59b881237_ctf-capturetheflag-cybersecurity-activity-7434965825544978432-KJRQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEQit6YBYxNqku484MeM9Wg9fdumwv23N8M',
        coverImage: 'achievements/alkhwarizmi.png'

    }
];
