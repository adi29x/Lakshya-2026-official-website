export interface Event {
  id: string;
  name: string;
  category: 'Sports' | 'EduFun' | 'E-Sports' | 'Cultural';
  participants: string;
  description: string;
  rules: string[];
}

export const events: Event[] = [
  // Sports Events
  { id: '1', name: 'Cricket Championship', category: 'Sports', participants: '11 per team', description: 'T20 format knockout tournament', rules: ['11 players per team', '20 overs per innings', 'Standard ICC rules apply', 'No DRS available'] },
  { id: '2', name: 'Football League', category: 'Sports', participants: '11 per team', description: 'Inter-team football competition', rules: ['Two 30-minute halves', 'Standard FIFA rules', 'Rolling substitutions allowed', 'Yellow/Red card system'] },
  { id: '3', name: 'Basketball 3v3', category: 'Sports', participants: '3 per team', description: 'Fast-paced half-court basketball', rules: ['10-minute games', 'Win by 2 or first to 21', 'FIBA 3x3 rules apply'] },
  { id: '4', name: 'Badminton Singles', category: 'Sports', participants: '1', description: 'Individual badminton tournament', rules: ['Best of 3 games to 21 points', 'BWF rules apply', 'Participants must bring own rackets'] },
  { id: '5', name: 'Table Tennis', category: 'Sports', participants: '1-2', description: 'Singles and doubles TT competition', rules: ['Best of 5 games to 11 points', 'ITTF rules apply', 'Equipment provided'] },
  { id: '6', name: 'Athletics Meet', category: 'Sports', participants: '1', description: '100m, 200m, relay races', rules: ['Track spikes mandatory', 'False start = disqualification', 'Top 3 from heats qualify'] },
  { id: '7', name: 'Volleyball', category: 'Sports', participants: '6 per team', description: 'Indoor volleyball tournament', rules: ['Best of 3 sets to 25 points', 'Rally scoring', 'Standard FIVB rules'] },
  { id: '8', name: 'Chess Tournament', category: 'Sports', participants: '1', description: 'Classical chess competition', rules: ['15+10 time control', 'Touch-move rule', 'FIDE rules apply'] },
  
  // EduFun Events
  { id: '9', name: 'Quiz Championship', category: 'EduFun', participants: '3 per team', description: 'Multi-round general knowledge quiz', rules: ['Written prelims', 'Buzzer rounds in finals', 'No electronic devices', 'Tie-breaker questions'] },
  { id: '10', name: 'Debate Competition', category: 'EduFun', participants: '2 per team', description: 'Parliamentary style debating', rules: ['7 minutes per speaker', 'Topics given 30 min prior', 'Points for style and substance'] },
  { id: '11', name: 'Case Study', category: 'EduFun', participants: '4 per team', description: 'Business case analysis and presentation', rules: ['4-hour analysis time', '15-min presentation', '5-min Q&A', 'Real-world cases'] },
  { id: '12', name: 'Technical Paper Presentation', category: 'EduFun', participants: '2 per team', description: 'Research paper presentation', rules: ['10-min presentation', 'PPT mandatory', 'Soft copy submission required', 'Plagiarism check done'] },
  { id: '13', name: 'Hackathon', category: 'EduFun', participants: '4 per team', description: '24-hour coding marathon', rules: ['Bring your own laptop', 'Any tech stack allowed', 'Internet access provided', 'Judging on innovation'] },
  { id: '14', name: 'Science Exhibition', category: 'EduFun', participants: '3 per team', description: 'Working model showcase', rules: ['Original projects only', 'Safety guidelines must be followed', 'Judges will visit each stall'] },
  
  // E-Sports Events
  { id: '15', name: 'BGMI Tournament', category: 'E-Sports', participants: '4 per squad', description: 'Battle royale competition', rules: ['TPP Erangel/Miramar', 'Device check mandatory', 'No emulators', 'Squad format only'] },
  { id: '16', name: 'Valorant Championship', category: 'E-Sports', participants: '5 per team', description: '5v5 tactical shooter', rules: ['PC provided on-site', 'Bo3 format', 'Standard Riot ruleset', 'No coaching during rounds'] },
  { id: '17', name: 'FIFA 24', category: 'E-Sports', participants: '1', description: '1v1 FIFA competition', rules: ['6-minute halves', 'Random team selection', 'Rage quit = forfeit', 'Controller provided'] },
  { id: '18', name: 'Free Fire Max', category: 'E-Sports', participants: '4 per squad', description: 'Mobile battle royale', rules: ['Clash Squad and BR modes', 'Own device mandatory', 'Kill points + placement'] },
  
  // Cultural Events
  { id: '19', name: 'Solo Dance', category: 'Cultural', participants: '1', description: 'Individual dance performance', rules: ['4-minute max duration', 'Any dance form', 'Bring own music (USB)', 'Props allowed'] },
  { id: '20', name: 'Group Dance', category: 'Cultural', participants: '8-15', description: 'Group choreography competition', rules: ['8-minute max duration', 'Theme optional', 'Costume changes allowed', '50% marks for synchronization'] },
  { id: '21', name: 'Battle of Bands', category: 'Cultural', participants: '4-8', description: 'Live band performance', rules: ['15-minute set', 'Original + covers allowed', 'Instruments provided', 'Soundcheck allotted'] },
  { id: '22', name: 'Fashion Show', category: 'Cultural', participants: '12-20', description: 'Themed runway walk', rules: ['Theme announcement 1 week prior', '10-minute showcase', 'Music to be submitted early', 'No vulgarity'] },
  { id: '23', name: 'Nukkad Natak', category: 'Cultural', participants: '10-15', description: 'Street play competition', rules: ['No mics or stage', '15-minute max', 'Social message mandatory', 'Props allowed'] },
  { id: '24', name: 'Stand-up Comedy', category: 'Cultural', participants: '1', description: 'Solo comedy performance', rules: ['7-minute set', 'Original content only', 'No vulgarity/hate speech', 'English or Hindi'] },
  { id: '25', name: 'Singing Solo', category: 'Cultural', participants: '1', description: 'Individual singing performance', rules: ['One song, 4 min max', 'Karaoke track allowed', 'Any language', 'Judged on pitch and expression'] },
];

export const eventCategories = ['Sports', 'EduFun', 'E-Sports', 'Cultural'] as const;
