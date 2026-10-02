import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../lib/site"
import { Section, buttonStyles } from "./Section"

export const ContactSection = () => (
    <Section id="contact" title="Contact" className="bg-muted">
        <p className="max-w-2xl text-muted-foreground">
            I&apos;m always interested in new projects and career opportunities, especially Software Engineering
            internships for Summer 2027. The fastest way to reach me is email.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className={buttonStyles.primary}>
                <Mail size={16} aria-hidden="true" /> {EMAIL}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                <FaLinkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                <FaGithub size={16} aria-hidden="true" /> GitHub
            </a>
        </div>
    </Section>
)
