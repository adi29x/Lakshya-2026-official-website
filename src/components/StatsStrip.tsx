import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Trophy, Calendar, Target } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ icon, value, suffix, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          current += stepValue;
          if (current >= value) {
            setCount(value);
            clearInterval(interval);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 px-6 py-4 relative"
    >
      <div className="text-primary mb-2">{icon}</div>
      <div className="font-display font-black text-4xl md:text-5xl">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-body text-muted-foreground text-sm uppercase tracking-widest">{label}</div>
      
      {/* Divider Line (hidden on last item) */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
    </motion.div>
  );
}

export function StatsStrip() {
  const stats = [
    { icon: <Target className="w-8 h-8" />, value: 16, suffix: '', label: 'Teams' },
    { icon: <Calendar className="w-8 h-8" />, value: 100, suffix: '+', label: 'Events' },
    { icon: <Users className="w-8 h-8" />, value: 12000, suffix: '+', label: 'Participants' },
    { icon: <Trophy className="w-8 h-8" />, value: 1, suffix: '', label: 'Champion' },
  ];

  return (
    <section id="stats" className="relative py-8 telemetry-bar">
      {/* Scan Line Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: ['0%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
      </div>

      {/* Track Markings */}
      <div className="absolute inset-x-0 top-0 h-1 flex">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-primary/20' : 'bg-transparent'}`} />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 flex">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-primary/20' : 'bg-transparent'}`} />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
}
