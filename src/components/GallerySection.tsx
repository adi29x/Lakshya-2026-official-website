import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder gallery images - in production these would be real photos
const galleryImages = [
  { id: 1, category: 'Opening Ceremony', placeholder: 'Opening ceremony with fireworks and team parade' },
  { id: 2, category: 'Events', placeholder: 'Cricket match in progress' },
  { id: 3, category: 'Crowd', placeholder: 'Enthusiastic crowd cheering' },
  { id: 4, category: 'Winners', placeholder: 'Team celebrating with trophy' },
  { id: 5, category: 'Cultural', placeholder: 'Dance performance on stage' },
  { id: 6, category: 'Events', placeholder: 'E-sports tournament setup' },
  { id: 7, category: 'Crowd', placeholder: 'Students enjoying the fest' },
  { id: 8, category: 'Winners', placeholder: 'Podium finish ceremony' },
];

const categories = ['All', 'Opening Ceremony', 'Events', 'Crowd', 'Winners', 'Cultural'];

function GalleryImage({ image, index, onClick }: { image: typeof galleryImages[0]; index: number; onClick: () => void }) {
  // Generate placeholder gradient based on index
  const gradients = [
    'from-primary/40 to-accent/40',
    'from-accent/40 to-primary/40',
    'from-primary/30 via-accent/20 to-primary/30',
    'from-accent/30 via-primary/20 to-accent/30',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
    >
      {/* Placeholder Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} bg-secondary`} />
      
      {/* Placeholder Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <p className="font-body text-sm text-center text-foreground/70">{image.placeholder}</p>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
      
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_30px_hsl(3,95%,45%/0.3)]" />
      
      {/* Category Badge */}
      <div className="absolute top-2 left-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-display">
        {image.category}
      </div>
      
      {/* Zoom Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const image = images[currentIndex];
  const gradients = [
    'from-primary/40 to-accent/40',
    'from-accent/40 to-primary/40',
    'from-primary/30 via-accent/20 to-primary/30',
    'from-accent/30 via-primary/20 to-accent/30',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 rounded-full bg-card hover:bg-muted transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>
      
      {/* Navigation Buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 p-3 rounded-full bg-card hover:bg-muted transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 p-3 rounded-full bg-card hover:bg-muted transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full mx-4 aspect-video rounded-xl overflow-hidden"
      >
        <div className={`w-full h-full bg-gradient-to-br ${gradients[currentIndex % gradients.length]} bg-secondary flex items-center justify-center`}>
          <div className="text-center p-8">
            <p className="font-body text-xl text-foreground/70 mb-4">{image.placeholder}</p>
            <span className="px-3 py-1 bg-background/50 rounded-full text-sm font-display">
              {image.category}
            </span>
          </div>
        </div>
      </motion.div>
      
      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative bg-secondary/30">
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
            PIT LANE <span className="text-primary">GALLERY</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
            Relive the moments from previous editions of Lakshya.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-display text-xs uppercase tracking-wider rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filteredImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((prev) => (prev! === 0 ? filteredImages.length - 1 : prev! - 1))}
            onNext={() => setLightboxIndex((prev) => (prev! === filteredImages.length - 1 ? 0 : prev! + 1))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
