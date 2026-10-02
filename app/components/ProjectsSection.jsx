import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { GITHUB_URL } from "../lib/site"
import { Section } from "./Section"

// Fields: id, title, problem (one line), built (2-3 bullets), tags,
// optional codeURL / liveURL (only add links that are publicly reachable),
// optional image: { src, alt }. Image src must include the base path, e.g. asset("/projects/x.png").
const projects = [
    {
        id: "study-guide-generator",
        title: "Study Guide Generator",
        problem: "Students need study material they can trust, on any connection, from their own course PDFs.",
        built: [
            "RAG pipeline: Python ingestion chunks and embeds PDFs into Postgres + pgvector; Claude generates study guides, quizzes and Q&A.",
            "Grounding enforced in code: every item must cite a retrieved passage, uncited items are dropped, and each citation opens the source page with the passage highlighted.",
            "Built for low bandwidth: server-rendered pages of about 5 KB gzipped that work with JavaScript disabled, plus rate limiting and an LLM-judged eval harness.",
        ],
        tags: ["Next.js", "Python", "Supabase", "pgvector", "Claude API", "Vercel"],
        // Repo is private (github.com/DylanPant/study-guide-generator returns 404). Add codeURL once public.
        liveURL: "https://study-guide-generator-ten.vercel.app",
    },
    {
        id: "geometry-explorer",
        title: "Geometry Explorer",
        problem: "Surface area and volume are hard for middle schoolers to picture from flat textbook diagrams.",
        built: [
            "Interactive 3D viewer for seven solids (cube to sphere) that students can rotate and inspect.",
            "Dimension controls with live formula and value updates.",
            "Animated unfolding of each solid into its 2D net to connect surface area to a flat pattern.",
        ],
        tags: ["TypeScript", "React", "Three.js (R3F)", "Zustand", "Tailwind", "Vite"],
        // Repo is private (github.com/DylanPant/geometry-explorer returns 404) and no live demo URL was found.
    },
    // {
    //     id: "fuel-and-lift",
    //     title: "Fuel & Lift",
    //     problem: "",
    //     built: [],
    //     tags: ["Expo", "React Native", "TypeScript", "Supabase"],
    //     codeURL: "",
    //     liveURL: "",
    // },
]

const linkStyle =
    "inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"

export const ProjectsSection = () => (
    <Section id="projects" title="Projects" className="bg-muted">
        <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
                <article key={project.id} className="flex flex-col rounded-lg border border-border bg-card p-6">
                    {project.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={project.image.src}
                            alt={project.image.alt}
                            className="mb-5 aspect-video w-full rounded-md border border-border object-cover"
                        />
                    )}
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.problem}</p>

                    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-muted-foreground">
                        {project.built.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                        {project.tags.map((tag) => (
                            <li key={tag} className="rounded border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                                {tag}
                            </li>
                        ))}
                    </ul>

                    {(project.codeURL || project.liveURL) && (
                        <div className="mt-auto flex gap-5 pt-5">
                            {project.codeURL && (
                                <a href={project.codeURL} target="_blank" rel="noopener noreferrer" className={linkStyle}
                                   aria-label={`${project.title} source code on GitHub`}>
                                    <FaGithub size={16} aria-hidden="true" /> Code
                                </a>
                            )}
                            {project.liveURL && (
                                <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className={linkStyle}
                                   aria-label={`${project.title} live demo`}>
                                    Live demo <ArrowUpRight size={16} aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    )}
                </article>
            ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
            More on{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
                GitHub
            </a>
            .
        </p>
    </Section>
)
