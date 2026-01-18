export interface ScheduleItem {
  id: string;
  time: string;
  event: string;
  venue: string;
  category: 'Sports' | 'EduFun' | 'E-Sports' | 'Cultural' | 'Ceremony';
}

export interface DaySchedule {
  day: string;
  date: string;
  items: ScheduleItem[];
}

export const schedule: DaySchedule[] = [
  {
    day: 'Day 1',
    date: 'February 15, 2026',
    items: [
      { id: '1', time: '08:00 AM', event: 'Registration & Team Pit Stop', venue: 'Main Arena', category: 'Ceremony' },
      { id: '2', time: '09:30 AM', event: 'Opening Ceremony - Lights Out!', venue: 'Grand Auditorium', category: 'Ceremony' },
      { id: '3', time: '11:00 AM', event: 'Cricket Qualifiers', venue: 'Sports Ground', category: 'Sports' },
      { id: '4', time: '11:00 AM', event: 'Quiz Prelims', venue: 'Seminar Hall A', category: 'EduFun' },
      { id: '5', time: '12:00 PM', event: 'BGMI Round 1', venue: 'E-Sports Arena', category: 'E-Sports' },
      { id: '6', time: '02:00 PM', event: 'Solo Dance Auditions', venue: 'Cultural Stage', category: 'Cultural' },
      { id: '7', time: '02:00 PM', event: 'Football League - Group Stage', venue: 'Football Ground', category: 'Sports' },
      { id: '8', time: '04:00 PM', event: 'Hackathon Kickoff', venue: 'Tech Lab', category: 'EduFun' },
      { id: '9', time: '05:00 PM', event: 'Valorant Round 1', venue: 'E-Sports Arena', category: 'E-Sports' },
      { id: '10', time: '07:00 PM', event: 'Cultural Night Preview', venue: 'Open Air Theatre', category: 'Cultural' },
    ],
  },
  {
    day: 'Day 2',
    date: 'February 16, 2026',
    items: [
      { id: '11', time: '08:00 AM', event: 'Athletics Meet', venue: 'Track & Field', category: 'Sports' },
      { id: '12', time: '09:00 AM', event: 'Debate Semi-Finals', venue: 'Seminar Hall B', category: 'EduFun' },
      { id: '13', time: '10:00 AM', event: 'Cricket Semi-Finals', venue: 'Sports Ground', category: 'Sports' },
      { id: '14', time: '10:00 AM', event: 'BGMI Semi-Finals', venue: 'E-Sports Arena', category: 'E-Sports' },
      { id: '15', time: '11:00 AM', event: 'Science Exhibition Judging', venue: 'Exhibition Hall', category: 'EduFun' },
      { id: '16', time: '12:00 PM', event: 'Table Tennis Finals', venue: 'Indoor Stadium', category: 'Sports' },
      { id: '17', time: '02:00 PM', event: 'Group Dance Prelims', venue: 'Cultural Stage', category: 'Cultural' },
      { id: '18', time: '02:00 PM', event: 'Football Semi-Finals', venue: 'Football Ground', category: 'Sports' },
      { id: '19', time: '04:00 PM', event: 'Hackathon Continues', venue: 'Tech Lab', category: 'EduFun' },
      { id: '20', time: '05:00 PM', event: 'Valorant Semi-Finals', venue: 'E-Sports Arena', category: 'E-Sports' },
      { id: '21', time: '07:00 PM', event: 'Battle of Bands', venue: 'Main Stage', category: 'Cultural' },
    ],
  },
  {
    day: 'Day 3',
    date: 'February 17, 2026',
    items: [
      { id: '22', time: '08:00 AM', event: 'Hackathon Finale & Judging', venue: 'Tech Lab', category: 'EduFun' },
      { id: '23', time: '09:00 AM', event: 'Quiz Grand Finale', venue: 'Grand Auditorium', category: 'EduFun' },
      { id: '24', time: '10:00 AM', event: 'Cricket Final', venue: 'Sports Ground', category: 'Sports' },
      { id: '25', time: '10:00 AM', event: 'BGMI Grand Finale', venue: 'E-Sports Arena', category: 'E-Sports' },
      { id: '26', time: '11:00 AM', event: 'Football Final', venue: 'Football Ground', category: 'Sports' },
      { id: '27', time: '12:00 PM', event: 'Stand-up Comedy Showdown', venue: 'Open Air Theatre', category: 'Cultural' },
      { id: '28', time: '02:00 PM', event: 'Solo Dance Finals', venue: 'Main Stage', category: 'Cultural' },
      { id: '29', time: '03:00 PM', event: 'Valorant Grand Finale', venue: 'E-Sports Arena', category: 'E-Sports' },
      { id: '30', time: '04:00 PM', event: 'Group Dance Finals', venue: 'Main Stage', category: 'Cultural' },
      { id: '31', time: '05:30 PM', event: 'Fashion Show', venue: 'Main Stage', category: 'Cultural' },
      { id: '32', time: '07:00 PM', event: 'Championship Ceremony - Podium Finish', venue: 'Grand Auditorium', category: 'Ceremony' },
      { id: '33', time: '08:30 PM', event: 'Star Night & DJ', venue: 'Main Stage', category: 'Cultural' },
    ],
  },
];
