import { ArrowUp, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../lib/site"

const iconLink = "inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"

export const Footer = () => (
    <footer className="border-t border-border px-4 py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Dylan Pant</p>
            <div className="flex items-center gap-1">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
                    <FaGithub size={18} aria-hidden="true" />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
                    <FaLinkedin size={18} aria-hidden="true" />
                </a>
                <a href={`mailto:${EMAIL}`} aria-label="Email" className={iconLink}>
                    <Mail size={18} aria-hidden="true" />
                </a>
                <a href="#top" aria-label="Back to top" className={iconLink}>
                    <ArrowUp size={18} aria-hidden="true" />
                </a>
            </div>
        </div>
    </footer>
)
