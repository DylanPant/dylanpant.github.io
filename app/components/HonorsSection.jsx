import { Award } from "lucide-react"
import { Section } from "./Section"

const HONORS = [
    {
        id: "presidential-scholar",
        title: "U.S. Presidential Scholar",
        year: "2024",
        issuer: "U.S. Department of Education · White House Commission on Presidential Scholars",
        description:
            "Named one of the nation's most distinguished graduating high school seniors, recognized for academics, leadership, and community service.",
    },
]

export const HonorsSection = () => (
    <Section id="honors" title="Honors" className="bg-muted">
        <ul className="space-y-4">
            {HONORS.map((honor) => (
                <li
                    key={honor.id}
                    className="flex gap-4 rounded-lg border border-border border-l-4 border-l-primary bg-card p-6"
                >
                    <Award className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="text-lg font-semibold">{honor.title}</h3>
                            <span className="text-sm text-muted-foreground">{honor.year}</span>
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">{honor.issuer}</p>
                        <p className="mt-3 max-w-2xl leading-relaxed text-foreground/90">{honor.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    </Section>
)
