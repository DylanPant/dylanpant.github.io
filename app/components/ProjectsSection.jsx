"use client"
import { ArrowRight, Terminal, Server, Bot } from "lucide-react"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"

const projects = [
    {
        id: 1,
        title: "Multi-Agent Crew",
        description: "Orchestrated local AI agents using CrewAI and Ollama to automate complex workflows like resume reviews and essay editing.",
        image: "BACKEND_ONLY", 
        type: "ai",
        tags: ["Python", "CrewAI", "Ollama", "Jupyter"],
        githubURL: "https://github.com/DylanPant", // Update with real link
    },
    {
        id: 2,
        title: "Go Mini-API",
        description: "High-performance REST API built with Go. Features SQLite persistence, Docker containerization, and Postman testing.",
        image: "BACKEND_ONLY",
        type: "backend",
        tags: ["Go", "SQLite", "Docker", "REST API"],
        githubURL: "https://github.com/DylanPant",
    },
    {
        id: 3,
        title: "Terminal Connect-Four",
        description: "Interactive CLI game developed in Java. Features customizable rules, two-player logic, and robust input validation.",
        image: "BACKEND_ONLY", // Or add a screenshot of the terminal if you have one!
        type: "cli",
        tags: ["Java", "OOP", "CLI"],
        githubURL: "https://github.com/DylanPant",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                            
                            {/* --- VISUAL HEADER --- */}
                            <div className="h-48 overflow-hidden relative bg-secondary/50">
                                {project.image && project.image !== "BACKEND_ONLY" ? (
                                    <Image 
                                        src={project.image} 
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    // Custom "No Image" Views based on Project Type
                                    <div className="w-full h-full flex flex-col p-4 font-mono text-xs text-muted-foreground bg-slate-950/5 dark:bg-slate-900/50">
                                        
                                        {/* Traffic Lights */}
                                        <div className="flex gap-1.5 mb-3 opacity-50">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                        </div>
                                        
                                        {/* Dynamic Terminal Content */}
                                        <div className="space-y-1 z-10 relative">
                                            {project.type === 'ai' && (
                                                <>
                                                    <p className="text-purple-400 animate-pulse">$ crewai run agents</p>
                                                    <p className="text-foreground/80">[Researcher] Analyzing resume...</p>
                                                    <p className="text-foreground/80">[Writer] Drafting feedback...</p>
                                                    <p className="text-green-400">✓ Task Completed (2.4s)</p>
                                                </>
                                            )}
                                            {project.type === 'backend' && (
                                                <>
                                                    <p className="text-blue-400">$ go run main.go</p>
                                                    <p className="text-foreground/80">Starting server on :8080</p>
                                                    <p className="text-foreground/80">Connecting to SQLite...</p>
                                                    <p className="text-green-400">✓ DB Connection Established</p>
                                                </>
                                            )}
                                            {project.type === 'cli' && (
                                                <>
                                                    <p className="text-yellow-500">$ java ConnectFour</p>
                                                    <p className="text-foreground/80">Player 1 (Red) turn:</p>
                                                    <p className="text-foreground/80">| . . . . . . . |</p>
                                                    <p className="text-foreground/80">| . . R . . . . |</p>
                                                    <p className="text-foreground/80">| . . Y R . . . |</p>
                                                </>
                                            )}
                                        </div>

                                        {/* Watermark Icon */}
                                        {project.type === 'ai' && <Bot className="absolute -bottom-4 -right-4 w-24 h-24 text-purple-500/10 rotate-12" />}
                                        {project.type === 'backend' && <Server className="absolute -bottom-4 -right-4 w-24 h-24 text-blue-500/10 rotate-12" />}
                                        {project.type === 'cli' && <Terminal className="absolute -bottom-4 -right-4 w-24 h-24 text-yellow-500/10 rotate-12" />}
                                    </div>
                                )}
                            </div>

                            {/* --- CONTENT BODY --- */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center pt-4 border-t border-border/50 mt-auto">
                                    <a href={project.githubURL} 
                                       target="_blank"
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
                    href="https://github.com/dylanpant">
                        View More on GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}