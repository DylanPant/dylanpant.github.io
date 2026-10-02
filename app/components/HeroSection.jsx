import { FileText, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_AVAILABLE, RESUME_URL } from "../lib/site"
import { buttonStyles } from "./Section"

export const HeroSection = () => (
    <section id="top" aria-labelledby="hero-heading" className="scroll-mt-20 px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-4xl motion-safe:animate-fade-in">
            <h1 id="hero-heading" className="text-4xl font-bold tracking-tight md:text-6xl">
                Dylan Pant
            </h1>
            <p className="mt-3 text-lg font-medium text-foreground md:text-xl">
                Computer Science @ University of Washington · Class of 2028
            </p>
            <p className="mt-2 text-base font-semibold text-primary md:text-lg">
                Seeking Software Engineering internships for Summer 2027
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                From Senate Page to software engineer: I build technology that serves people, most
                recently AI and growth features at Microsoft Outlook.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                {RESUME_AVAILABLE && (
                    <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
                        <FileText size={16} aria-hidden="true" /> Resume
                    </a>
                )}
                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={RESUME_AVAILABLE ? buttonStyles.secondary : buttonStyles.primary}
                >
                    <FaGithub size={16} aria-hidden="true" /> GitHub
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                    <FaLinkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
                <a href={`mailto:${EMAIL}`} className={buttonStyles.secondary}>
                    <Mail size={16} aria-hidden="true" /> Email
                </a>
            </div>
        </div>
    </section>
)
