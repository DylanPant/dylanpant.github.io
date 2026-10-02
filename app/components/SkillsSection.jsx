import { Section } from "./Section"

const skillGroups = [
    { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Go", "Java", "C / C++"] },
    { label: "Frameworks", items: ["React", "Next.js", "Three.js", "Tailwind CSS"] },
    { label: "Tools & Platforms", items: ["Docker", "Supabase", "Postgres / pgvector", "Firebase", "Vercel", "Grafana", "Azure AI", "Figma"] },
]

export const SkillsSection = () => (
    <Section id="skills" title="Skills" className="bg-muted">
        <dl className="space-y-5">
            {skillGroups.map((group) => (
                <div key={group.label} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-foreground">{group.label}</dt>
                    <dd>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li key={item} className="rounded-md border border-border bg-card px-2.5 py-1 text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </dd>
                </div>
            ))}
        </dl>
    </Section>
)
