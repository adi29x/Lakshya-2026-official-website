import { motion } from 'framer-motion';
import { Flag, Zap, Users, Trophy } from 'lucide-react';

export function AboutSection() {
  const features = [
    { icon: <Flag className="w-6 h-6" />, title: 'F1 Spirit', desc: 'Race-inspired competition format' },
    { icon: <Zap className="w-6 h-6" />, title: 'Speed & Precision', desc: 'Fast-paced thrilling events' },
    { icon: <Users className="w-6 h-6" />, title: 'Teamwork', desc: '16 teams battle for glory' },
    { icon: <Trophy className="w-6 h-6" />, title: 'Championship', desc: 'Ultimate bragging rights' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 speed-lines opacity-30" />
      
      {/* Track Map Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M50,200 Q50,50 200,50 Q350,50 350,200 Q350,350 200,350 Q50,350 50,200 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-4xl md:text-5xl mb-8">
              ABOUT <span className="text-primary">LAKSHYA</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              <span className="text-foreground font-semibold">Lakshya 2026</span> is the flagship annual fest of{' '}
              <span className="text-accent">Poornima University</span>, designed on the spirit of Formula 1 racing — 
              where speed, precision, teamwork, and strategy define champions.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Students compete as F1-style teams across sports, cultural, e-sports, and edufun events 
              to claim ultimate glory. Every team fights for points, every event is a Grand Prix, 
              and at the end — only one team stands on the podium as the <span className="text-primary font-semibold">Champion</span>.
            </p>

            {/* Pit Lane Style Divider */}
            <div className="pit-divider my-12" />

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-1">{feature.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Racing Card Stack */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Back Cards */}
              <div className="absolute inset-4 bg-card border border-border rounded-2xl transform rotate-6" />
              <div className="absolute inset-2 bg-card border border-border rounded-2xl transform -rotate-3" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-card via-card to-secondary border border-primary/20 rounded-2xl p-8 shadow-[0_0_60px_hsl(3,95%,45%/0.1)]">
                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-primary rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-primary rounded-br-2xl" />
                
                {/* Content */}
                <div className="text-center py-8">
                  <div className="font-display text-8xl font-black text-primary/20 mb-4">2026</div>
                  <h3 className="font-display text-2xl font-bold tracking-wider mb-4">THE RACE IS ON</h3>
                  <p className="font-body text-muted-foreground mb-8">
                    16 Teams. 100+ Events. 3 Days. 1 Champion.
                  </p>
                  
                  {/* Trophy Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block"
                  >
                    <Trophy className="w-16 h-16 text-primary mx-auto" />
                  </motion.div>
                </div>
                
                {/* Bottom Racing Stripe */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-primary rounded-b-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
