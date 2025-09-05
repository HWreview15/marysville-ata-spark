import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import InstructorsSection from "@/components/sections/InstructorsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProgramsSection />
        <InstructorsSection />
        <ScheduleSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
