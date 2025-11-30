import { ThemeToggle } from "../app/components/ThemeToggle";
import { StarBackground } from '../app/components/StarBackground';
import { Navbar } from "../app/components/Navbar"
import { HeroSection } from "../app/components/HeroSection";
import { AboutSection } from "../app/components/AboutSection"
import { SkillsSection } from "../app/components/SkillsSection";
import { ProjectsSection } from "../app/components/ProjectsSection";
import { ContactSection } from "../app/components/ContactSection";
import { Footer } from "../app/components/Footer";
import { AwardSection } from './components/AwardsSection';

export default function Home() {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Nav Bar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AwardSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
}