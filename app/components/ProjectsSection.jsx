"use client"
import { ArrowRight, Terminal, Box } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
    {
        id: 1,
        title: "AI Study Guide Generator",
        description: "RAG study tool that turns PDF course material into citation-backed study guides and quizzes, optimized for low-bandwidth networks and low-resource devices.",
        type: "rag",
        tags: ["Next.js", "Python", "Supabase", "pgvector", "Vercel"],
        githubURL: "https://github.com/DylanPant",
    },
    {
        id: 2,
        title: "Geometry Explorer",
        description: "3D geometry site where students rotate 7 solids, see live formulas, unfold shapes into 2D nets, and get Socratic LLM hints — without ever being given the answer.",
        type: "3d",
        tags: ["TypeScript", "React", "Three.js", "Zustand", "Vercel"],
        githubURL: "https://github.com/DylanPant",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">

                            {/* Visual Header — terminal card */}
                            <div className="h-48 overflow-hidden relative bg-secondary/50">
                                <div className="w-full h-full flex flex-col p-4 font-mono text-xs text-muted-foreground bg-slate-950/5 dark:bg-slate-900/50">

                                    {/* Traffic lights */}
                                    <div className="flex gap-1.5 mb-3 opacity-50">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                    </div>

                                    <div className="space-y-1 z-10 relative">
                                        {project.type === 'rag' && (
                                            <>
                                                <p className="text-purple-400 animate-pulse">$ python pipeline.py --input lecture.pdf</p>
                                                <p className="text-foreground/80">Chunking &amp; embedding → pgvector...</p>
                                                <p className="text-foreground/80">1,847 vectors indexed</p>
                                                <p className="text-green-400">✓ Citation-backed output ready</p>
                                            </>
                                        )}
                                        {project.type === '3d' && (
                                            <>
                                                <p className="text-blue-400">$ vite build --mode production</p>
                                                <p className="text-foreground/80">TypeScript: 0 errors</p>
                                                <p className="text-foreground/80">7 solids loaded · LLM tutor: active</p>
                                                <p className="text-green-400">✓ Build complete (142 KB)</p>
                                            </>
                                        )}
                                    </div>

                                    {project.type === 'rag' && <Terminal className="absolute -bottom-4 -right-4 w-24 h-24 text-purple-500/10 rotate-12" />}
                                    {project.type === '3d' && <Box className="absolute -bottom-4 -right-4 w-24 h-24 text-blue-500/10 rotate-12" />}
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center pt-4 border-t border-border/50 mt-auto">
                                    <a href={project.githubURL}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                        <FaGithub size={18} /> View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://github.com/dylanpant">
                        View More on GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}
