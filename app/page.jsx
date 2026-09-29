import { StarBackground } from '../app/components/StarBackground';
import { Navbar } from "../app/components/Navbar"
import { HeroSection } from "../app/components/HeroSection";
import { ExperienceSection } from "../app/components/ExperienceSection";
import { ProjectsSection } from "../app/components/ProjectsSection";
import { SkillsSection } from "../app/components/SkillsSection";
import { AboutSection } from "../app/components/AboutSection"
import { ContactSection } from "../app/components/ContactSection";
import { Footer } from "../app/components/Footer";

export default function Home() {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background Effects */}
        <StarBackground />

        {/* Nav Bar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
}
