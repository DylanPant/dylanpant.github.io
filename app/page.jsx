import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { SkillsSection } from "./components/SkillsSection"
import { AboutSection } from "./components/AboutSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"

export default function Home() {
    return (
        <>
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
                Skip to content
            </a>
            <Navbar />
            <main id="main" tabIndex={-1} className="focus:outline-none">
                <HeroSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
