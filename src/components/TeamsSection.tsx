import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, Crown } from 'lucide-react';
import { teams, Team } from '@/data/teams';

interface TeamCardProps {
  team: Team;
  onClick: () => void;
  index: number;
}

function TeamCard({ team, onClick, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="racing-card group cursor-pointer"
    >
      {/* Team Color Bar */}
      <div 
        className="h-2 w-full" 
        style={{ backgroundColor: team.color }}
      />
      
      <div className="p-6">
        {/* Team Logo Placeholder */}
        <div 
          className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center text-2xl font-display font-black"
          style={{ backgroundColor: `${team.color}20`, color: team.color }}
        >
          {team.name.charAt(0)}
        </div>
        
        {/* Team Name */}
        <h3 className="font-display font-bold text-xl tracking-wider mb-2 group-hover:text-primary transition-colors">
          {team.name}
        </h3>
        
        {/* Leader Name */}
        <p className="font-body text-sm text-muted-foreground">
          Leader: {team.leaders.find(l => l.role === 'Leader')?.name}
        </p>
        
        {/* View Details Indicator */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <span className="font-display text-xs text-primary uppercase tracking-wider">View Team</span>
          <motion.div
            className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

interface TeamModalProps {
  team: Team;
  onClose: () => void;
}

function TeamModal({ team, onClose }: TeamModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card border border-border rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
      >
        {/* Header with Team Color */}
        <div 
          className="p-6 relative"
          style={{ background: `linear-gradient(135deg, ${team.color}40 0%, ${team.color}10 100%)` }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div 
            className="w-20 h-20 rounded-xl mb-4 flex items-center justify-center text-3xl font-display font-black"
            style={{ backgroundColor: team.color, color: '#fff' }}
          >
            {team.name.charAt(0)}
          </div>
          
          <h2 className="font-display font-bold text-3xl tracking-wider">
            TEAM {team.name}
          </h2>
        </div>
        
        {/* Team Leadership */}
        <div className="p-6">
          <h3 className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Team Leadership
          </h3>
          
          <div className="space-y-4">
            {team.leaders.map((leader, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${team.color}30` }}
                >
                  {leader.role === 'Leader' ? (
                    <Crown className="w-5 h-5" style={{ color: team.color }} />
                  ) : (
                    <User className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-body font-semibold">{leader.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      Year {leader.year}
                    </span>
                  </div>
                  <span className="text-sm text-primary font-medium">{leader.role}</span>
                </div>
                
                <a
                  href={`tel:${leader.phone}`}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="w-4 h-4 text-primary" />
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div 
          className="h-2 w-full"
          style={{ backgroundColor: team.color }}
        />
      </motion.div>
    </motion.div>
  );
}

export function TeamsSection() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  return (
    <section id="teams" className="py-24 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 checkered opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl mb-4 inline-block">
            THE <span className="text-primary">GRID</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
            16 teams. 16 constructors. One championship. Click on any team to view their leadership and details.
          </p>
        </motion.div>

        {/* Teams Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {teams.map((team, index) => (
            <TeamCard
              key={team.id}
              team={team}
              index={index}
              onClick={() => setSelectedTeam(team)}
            />
          ))}
        </div>
      </div>

      {/* Team Modal */}
      <AnimatePresence>
        {selectedTeam && (
          <TeamModal team={selectedTeam} onClose={() => setSelectedTeam(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
