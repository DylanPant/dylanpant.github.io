import { Section } from "./Section"

const experiences = [
    {
        company: "UW School of Medicine",
        role: "Web Developer",
        date: "Mar. 2026 – Present",
        context: "Seattle, WA",
        bullets: [
            "Developing the UWSOM Service-Learning site (Next.js, Firebase) connecting medical students with community partners, improving accessibility and SEO.",
        ],
    },
    {
        company: "Microsoft Outlook",
        role: "Explore Intern",
        date: "Jun. 2026 – Sept. 2026",
        context: "Experimental Calendar Agents & Growth Teams · Redmond, WA",
        bullets: [
            "Spearheaded an agentic AI calendar feature using Teams, chat, and email context to help users triage their day.",
            "Owned a consumer growth experiment from ideation to worldwide rollout, est. $30M in annual revenue.",
            "Closed telemetry gaps across the ad funnel; built Grafana dashboards for full-funnel A/B experiment visibility.",
        ],
    },
    {
        company: "UW Changemakers in Computing",
        role: "Mentor",
        date: "Apr. 2025 – Aug. 2025",
        context: "Seattle, WA",
        bullets: [
            "Mentored 40 high school students from underrepresented backgrounds through project-based workshops on AI ethics and accessible design, resume reviews, and college applications.",
        ],
    },
    {
        company: "Microsoft Global Customer Experience (GCX)",
        role: "Discovery Intern",
        date: "Jul. 2024 – Aug. 2024",
        context: "Redmond, WA",
        bullets: [
            "Co-developed an AI adoption framework and Copilot guide, improving workflow automation for 7 teams.",
        ],
    },
]

export const ExperienceSection = () => (
    <Section id="experience" title="Experience">
        <ol className="space-y-8">
            {experiences.map((exp) => (
                <li key={`${exp.company}-${exp.role}`} className="border-l-2 border-border pl-5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-base font-semibold">
                            {exp.role} <span className="font-normal text-muted-foreground">· {exp.company}</span>
                        </h3>
                        <p className="shrink-0 text-sm tabular-nums text-muted-foreground">{exp.date}</p>
                    </div>
                    {exp.context && <p className="mt-0.5 text-sm text-muted-foreground">{exp.context}</p>}
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/90 marker:text-muted-foreground">
                        {exp.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ol>
    </Section>
)
