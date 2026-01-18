import { motion } from 'framer-motion';
import { Flag, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Teams', href: '#teams' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Checkered Finish Line Pattern */}
      <div className="h-4 flex">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 ${
              (Math.floor(i / 2) + i) % 2 === 0 ? 'bg-foreground' : 'bg-background'
            }`} 
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Flag className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-2xl">
                LAKSHYA <span className="text-primary">2026</span>
              </span>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              The flagship annual fest of Poornima University. Racing towards glory!
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-muted-foreground hover:text-primary transition-colors racing-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-muted-foreground text-sm">
                  Poornima University, IS-2027, Ramchandrapura, Sitapura Industrial Area, Jaipur, Rajasthan 303905
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+911234567890" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:lakshya@poornima.edu.in" className="font-body text-muted-foreground hover:text-primary transition-colors">
                  lakshya@poornima.edu.in
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Register CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-lg mb-6 uppercase tracking-wider">Ready to Race?</h3>
            <p className="font-body text-muted-foreground mb-6">
              Join your team and compete in the ultimate championship!
            </p>
            <a href="#register" className="btn-racing inline-block">
              REGISTER NOW
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 Lakshya - Poornima University. All rights reserved.
          </p>
          <p className="font-display text-xs text-muted-foreground tracking-widest">
            🏁 FINISH LINE 🏁
          </p>
        </div>
      </div>
    </footer>
  );
}
