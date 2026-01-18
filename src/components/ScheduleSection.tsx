import { useState } from 'react';
import { motion } from 'framer-motion';
import { schedule, DaySchedule, ScheduleItem } from '@/data/schedule';
import { Clock, MapPin, Dumbbell, Gamepad2, Music, Lightbulb, Flag } from 'lucide-react';

function getCategoryIcon(category: ScheduleItem['category']) {
  switch (category) {
    case 'Sports': return <Dumbbell className="w-4 h-4" />;
    case 'E-Sports': return <Gamepad2 className="w-4 h-4" />;
    case 'Cultural': return <Music className="w-4 h-4" />;
    case 'EduFun': return <Lightbulb className="w-4 h-4" />;
    case 'Ceremony': return <Flag className="w-4 h-4" />;
  }
}

function getCategoryColor(category: ScheduleItem['category']) {
  switch (category) {
    case 'Sports': return 'border-green-500 bg-green-500/10 text-green-400';
    case 'E-Sports': return 'border-purple-500 bg-purple-500/10 text-purple-400';
    case 'Cultural': return 'border-pink-500 bg-pink-500/10 text-pink-400';
    case 'EduFun': return 'border-blue-500 bg-blue-500/10 text-blue-400';
    case 'Ceremony': return 'border-primary bg-primary/10 text-primary';
  }
}

function TimelineItem({ item, index }: { item: ScheduleItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      
      {/* Timeline Dot */}
      <div className={`absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${getCategoryColor(item.category)}`}>
        <div className="absolute inset-1 rounded-full bg-current" />
      </div>
      
      {/* Content Card */}
      <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          {/* Time */}
          <div className="flex items-center gap-1 text-accent text-sm font-display font-bold">
            <Clock className="w-4 h-4" />
            {item.time}
          </div>
          
          {/* Category Badge */}
          <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full border ${getCategoryColor(item.category)}`}>
            {getCategoryIcon(item.category)}
            {item.category}
          </span>
        </div>
        
        {/* Event Name */}
        <h4 className="font-display font-bold text-lg mb-1">{item.event}</h4>
        
        {/* Venue */}
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          {item.venue}
        </div>
      </div>
    </motion.div>
  );
}

function DayTab({ day, isActive, onClick }: { day: DaySchedule; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-4 font-display text-sm uppercase tracking-wider transition-all ${
        isActive
          ? 'text-primary'
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      <div className="text-center">
        <div className="font-bold text-lg">{day.day}</div>
        <div className="text-xs opacity-70">{day.date}</div>
      </div>
      
      {/* Active Indicator */}
      {isActive && (
        <motion.div
          layoutId="activeDay"
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
        />
      )}
    </button>
  );
}

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 speed-lines opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-4xl md:text-5xl mb-4 inline-block">
            RACE <span className="text-primary">SCHEDULE</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
            3 days of non-stop action. From opening ceremony to the final showdown.
          </p>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex justify-center border-b border-border mb-12">
          {schedule.map((day, idx) => (
            <DayTab
              key={day.day}
              day={day}
              isActive={activeDay === idx}
              onClick={() => setActiveDay(idx)}
            />
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          {schedule[activeDay].items.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
