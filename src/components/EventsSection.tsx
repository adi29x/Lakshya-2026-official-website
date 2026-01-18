import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { events, eventCategories, Event } from '@/data/events';
import { Users, ChevronRight, X, FileText, Download } from 'lucide-react';

function EventCard({ event, index }: { event: Event; index: number }) {
  const [showRules, setShowRules] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sports': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'EduFun': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'E-Sports': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Cultural': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
        viewport={{ once: true }}
        className="racing-card p-5 group"
      >
        <div className="flex items-start justify-between mb-3">
          <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-xs">{event.participants}</span>
          </div>
        </div>
        
        <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {event.name}
        </h3>
        
        <p className="font-body text-sm text-muted-foreground mb-4">
          {event.description}
        </p>
        
        <button
          onClick={() => setShowRules(true)}
          className="flex items-center gap-2 text-sm font-display text-primary hover:text-accent transition-colors"
        >
          <FileText className="w-4 h-4" />
          View Rules
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Rules Modal */}
      <AnimatePresence>
        {showRules && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRules(false)}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl max-w-md w-full overflow-hidden"
            >
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                  <h3 className="font-display font-bold text-xl mt-2">{event.name}</h3>
                </div>
                <button
                  onClick={() => setShowRules(false)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Rules & Guidelines
                </h4>
                <ul className="space-y-3">
                  {event.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 py-3 flex items-center justify-center gap-2 bg-secondary hover:bg-muted transition-colors rounded-lg font-display text-sm">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function EventsSection() {
  const [activeCategory, setActiveCategory] = useState<typeof eventCategories[number]>('Sports');

  const filteredEvents = events.filter(e => e.category === activeCategory);

  return (
    <section id="events" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-4xl md:text-5xl mb-4 inline-block">
            EVENTS & <span className="text-primary">RULES</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
            100+ events across 4 categories. Each event is a race to the podium.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {eventCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-display text-sm uppercase tracking-wider rounded-lg transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(3,95%,45%/0.4)]'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
