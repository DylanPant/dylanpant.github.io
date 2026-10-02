import { Section } from "./Section"

export const AboutSection = () => (
    <Section id="about" title="About">
        <div className="max-w-2xl space-y-4 leading-relaxed text-foreground/90">
            <p>
                I&apos;m a Dean&apos;s Scholar at UW studying Computer Science, with a background that runs from the
                floor of the Washington State Senate to AI internships at Microsoft. I care about building technology
                that works for people, not just for those who already have access to it.
            </p>
            <p>
                That conviction shapes the work I take on: AI agents that cut through complexity, backend systems built
                to last, and mentorship that brings more people into computing.
            </p>
        </div>
    </Section>
)
