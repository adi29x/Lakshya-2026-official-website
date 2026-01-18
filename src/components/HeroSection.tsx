import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </motion.div>

      {/* Racing Light Animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ delay: i * 0.15, duration: 0.5, repeat: 0 }}
            className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(3,95%,45%)]"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-4"
            initial={{ filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="text-glow">LAKSHYA</span>
            <span className="block text-primary text-glow">2026</span>
          </motion.h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-body text-xl md:text-2xl text-muted-foreground mb-2 tracking-wide"
        >
          Annual Fest of Poornima University
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-display text-lg md:text-xl text-accent tracking-widest uppercase mb-12"
        >
          Driven by Passion. Powered by Speed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#teams" className="btn-racing animate-pulse-glow">
            EXPLORE TEAMS
          </a>
          <a href="#events" className="btn-outline-racing">
            VIEW EVENTS
          </a>
        </motion.div>

        {/* Speed Lines Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute left-0 right-0 bottom-32 pointer-events-none"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="font-display text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="w-5 h-5" />
      </motion.a>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
}
