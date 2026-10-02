import { Award } from "lucide-react"
import { Section } from "./Section"

export const AboutSection = () => (
    <Section id="about" title="About" className="bg-muted">
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

        <div className="mt-8 flex max-w-2xl gap-4 rounded-lg border border-border bg-card p-5">
            <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
                <h3 className="font-semibold">2024 U.S. Presidential Scholar</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Named by the U.S. Department of Education as one of the nation&apos;s most distinguished graduating
                    high school seniors, recognized for academics, leadership, and community service.
                </p>
            </div>
        </div>
    </Section>
)
