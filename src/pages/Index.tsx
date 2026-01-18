import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { AboutSection } from "@/components/AboutSection";
import { TeamsSection } from "@/components/TeamsSection";
import { EventsSection } from "@/components/EventsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay">
      <Navbar />
      <main>
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <TeamsSection />
        <EventsSection />
        <ScheduleSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
