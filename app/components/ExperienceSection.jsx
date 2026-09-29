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

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Experience
                </h2>

                <div className="space-y-10 max-w-3xl mx-auto">
                    {experiences.map((exp, i) => (
                        <div key={i} className="pl-5 border-l-2 border-primary/30">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <div className="flex flex-wrap items-baseline gap-x-2">
                                    <span className="font-semibold text-foreground">{exp.company}</span>
                                    <span className="text-muted-foreground text-sm">· {exp.role}</span>
                                </div>
                                <span className="text-xs text-muted-foreground shrink-0 font-medium tabular-nums">{exp.date}</span>
                            </div>
                            {exp.context && (
                                <p className="text-xs text-muted-foreground mb-3">{exp.context}</p>
                            )}
                            <ul className="space-y-1.5">
                                {exp.bullets.map((bullet, j) => (
                                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                                        <span className="text-primary mt-[3px] shrink-0">▸</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
