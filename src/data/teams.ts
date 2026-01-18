export interface TeamLeader {
  name: string;
  year: string;
  phone: string;
  role: 'Leader' | 'Co-Leader';
}

export interface Team {
  id: string;
  name: string;
  color: string;
  colorClass: string;
  logo?: string;
  leaders: TeamLeader[];
}

export const teams: Team[] = [
  {
    id: 'haas',
    name: 'HAAS',
    color: '#B6BABD',
    colorClass: 'bg-team-haas',
    leaders: [
      { name: 'Mayank Punjabi', year: 'III', phone: '916611926', role: 'Leader' },
      { name: 'Kalpana Sharma', year: 'I', phone: '9660135227', role: 'Co-Leader' },
      { name: 'Naman Chaturvedi', year: 'I', phone: '7318291504', role: 'Co-Leader' },
    ],
  },
  {
    id: 'williams',
    name: 'WILLIAMS',
    color: '#005AFF',
    colorClass: 'bg-team-williams',
    leaders: [
      { name: 'Gourav Dhalwal', year: 'IV', phone: '7014978695', role: 'Leader' },
      { name: 'Raghav Purohit', year: 'I', phone: '7849909180', role: 'Co-Leader' },
      { name: 'Palak Jain', year: 'I', phone: '8949928104', role: 'Co-Leader' },
    ],
  },
  {
    id: 'sauber',
    name: 'SAUBER',
    color: '#52E252',
    colorClass: 'bg-team-sauber',
    leaders: [
      { name: 'Lalit Yadav', year: 'II', phone: '9306217413', role: 'Leader' },
      { name: 'Mitul Ojha', year: 'I', phone: '8209947304', role: 'Co-Leader' },
      { name: 'Monu Kumar', year: 'I', phone: '7004649228', role: 'Co-Leader' },
    ],
  },
  {
    id: 'ferrari',
    name: 'FERRARI',
    color: '#DC0000',
    colorClass: 'bg-team-ferrari',
    leaders: [
      { name: 'Mantra Paliwal', year: 'II', phone: '8005977115', role: 'Leader' },
      { name: 'Niharika Chaudhary', year: 'II', phone: '7627055713', role: 'Co-Leader' },
      { name: 'Kanishtha Madan', year: 'I', phone: '6375897403', role: 'Co-Leader' },
    ],
  },
  {
    id: 'brawn',
    name: 'BRAWN GP',
    color: '#D4AF37',
    colorClass: 'bg-team-brawn',
    leaders: [
      { name: 'Ronak Singhal', year: 'II', phone: '7014862823', role: 'Leader' },
      { name: 'Seshe Hang Subba', year: 'I', phone: '7056030373', role: 'Co-Leader' },
      { name: 'Anushah Khan', year: 'II', phone: '7340407507', role: 'Co-Leader' },
    ],
  },
  {
    id: 'benetton',
    name: 'BENETTON',
    color: '#00A550',
    colorClass: 'bg-team-benetton',
    leaders: [
      { name: 'Karan Singh', year: 'III', phone: '7627012292', role: 'Leader' },
      { name: 'Manish Agrawal', year: 'III', phone: '7056030373', role: 'Co-Leader' },
      { name: 'Yashwi Kumawat', year: 'I', phone: '7340407507', role: 'Co-Leader' },
    ],
  },
  {
    id: 'mercedes',
    name: 'MERCEDES',
    color: '#00D2BE',
    colorClass: 'bg-team-mercedes',
    leaders: [
      { name: 'Ashjan Mohd Khan', year: 'III', phone: '9368549209', role: 'Leader' },
      { name: 'Suryansh Thakur', year: 'I', phone: '7073378247', role: 'Co-Leader' },
      { name: 'Raghav Vahsishtha', year: 'II', phone: '8309848213', role: 'Co-Leader' },
    ],
  },
  {
    id: 'tyrrell',
    name: 'TYRRELL',
    color: '#003399',
    colorClass: 'bg-team-tyrrell',
    leaders: [
      { name: 'Laxmi Narayan Suthar', year: 'III', phone: '9672371518', role: 'Leader' },
      { name: 'Tharun Kumar', year: 'II', phone: '7505809946', role: 'Co-Leader' },
      { name: 'Lavanya Bhardwaj', year: 'II', phone: '9875830864', role: 'Co-Leader' },
    ],
  },
  {
    id: 'racingbulls',
    name: 'RACING BULLS',
    color: '#2B4562',
    colorClass: 'bg-team-racingbulls',
    leaders: [
      { name: 'Gaurav Pehlajani', year: 'III', phone: '8890359201', role: 'Leader' },
      { name: 'Haider Ali Noman', year: 'II', phone: '8306940375', role: 'Co-Leader' },
      { name: 'Aryan Choudhary', year: 'I', phone: '7229943942', role: 'Co-Leader' },
    ],
  },
  {
    id: 'renault',
    name: 'RENAULT',
    color: '#FFF500',
    colorClass: 'bg-team-renault',
    leaders: [
      { name: 'Tanveer Singh Chauhan', year: 'III', phone: '9414359542', role: 'Leader' },
      { name: 'Sonu Kumar Dagur', year: 'I', phone: '6350671393', role: 'Co-Leader' },
      { name: 'Garv Verma', year: 'II', phone: '9557560077', role: 'Co-Leader' },
    ],
  },
  {
    id: 'redbull',
    name: 'RED BULL',
    color: '#1E41FF',
    colorClass: 'bg-team-redbull',
    leaders: [
      { name: 'Raman Singh', year: 'III', phone: '7357808664', role: 'Leader' },
      { name: 'Aditya Raghav', year: 'III', phone: '8076196618', role: 'Co-Leader' },
      { name: 'Aditi Saxena', year: 'II', phone: '6350554939', role: 'Co-Leader' },
    ],
  },
  {
    id: 'lotus',
    name: 'LOTUS',
    color: '#FFB800',
    colorClass: 'bg-team-lotus',
    leaders: [
      { name: 'Mayank Aaswani', year: 'II', phone: '9079179916', role: 'Leader' },
      { name: 'Mohammad Arslan', year: 'II', phone: '7014430815', role: 'Co-Leader' },
      { name: 'Kashish', year: 'I', phone: '7742985576', role: 'Co-Leader' },
    ],
  },
  {
    id: 'astonmartin',
    name: 'ASTON MARTIN',
    color: '#006F62',
    colorClass: 'bg-team-astonmartin',
    leaders: [
      { name: 'Praveen Kumar', year: 'III', phone: '9870666900', role: 'Leader' },
      { name: 'Harshita Bhati', year: 'III', phone: '8209078446', role: 'Co-Leader' },
      { name: 'Chitranshu Varughese', year: 'II', phone: '7877644104', role: 'Co-Leader' },
    ],
  },
  {
    id: 'mclaren',
    name: 'McLAREN',
    color: '#FF8700',
    colorClass: 'bg-team-mclaren',
    leaders: [
      { name: 'Kushal Bhandari', year: 'III', phone: '7073237679', role: 'Leader' },
      { name: 'Mohit Singh', year: 'II', phone: '9166081898', role: 'Co-Leader' },
      { name: 'Uday', year: 'II', phone: '7357849100', role: 'Co-Leader' },
    ],
  },
  {
    id: 'alpine',
    name: 'ALPINE',
    color: '#FF69B4',
    colorClass: 'bg-team-alpine',
    leaders: [
      { name: 'Ajayraj Singh Rathore', year: 'II', phone: '6377529239', role: 'Leader' },
      { name: 'Prince Tak', year: 'II', phone: '7425879169', role: 'Co-Leader' },
      { name: 'Pankaj', year: 'II', phone: '7023827908', role: 'Co-Leader' },
    ],
  },
  {
    id: 'jordan',
    name: 'JORDAN',
    color: '#EEB111',
    colorClass: 'bg-team-jordan',
    leaders: [
      { name: 'Thrishanth Kumar S.', year: 'III', phone: '9591817148', role: 'Leader' },
      { name: 'Chandraveer Singh Rathore', year: 'II', phone: '8005877935', role: 'Co-Leader' },
      { name: 'Bhumika Bansal', year: 'I', phone: '9602475975', role: 'Co-Leader' },
    ],
  },
];
