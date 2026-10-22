import { PortfolioCanvas } from "@/components/three/portfolio-canvas";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { CertificatesSection } from "@/components/sections/certificates";
import { ExperienceSection } from "@/components/sections/experience";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[#1A6EF7] selection:text-white">
      {/* Persistent 3D Scroll-Driven Canvas Layer (Layer 0) */}
      <PortfolioCanvas />

      {/* Navigation Layer (Layer 40) */}
      <Navbar />

      {/* Semantic Content Layer (Layer 10) */}
      <main className="relative z-10 flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer Layer (Layer 10) */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
