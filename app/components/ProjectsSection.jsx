"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"

// add images to public/projects
const projects = [
    {
        id:1,
        title: "Project 1",
        description: "a very cool project using XYZ",
        image: "/project/",
        tags: ["React", "TailwindCSS", "Supabase"],
        githubURL: "#",
    },
    {
        id:2,
        title: "Project 2",
        description: "a very cool project using XYZ",
        image: "/project/",
        tags: ["React", "TailwindCSS", "Supabase"],
        githubURL: "#",
    },
    {
        id:3,
        title: "Project 3",
        description: "a very cool project using XYZ",
        image: "/project/",
        tags: ["React", "TailwindCSS", "Supabase"],
        githubURL: "#",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects! Each one was chosen because I was curious about a certain technology or concept.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                                <div className="h-28 overflow-hidden relative">
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={`${project.id}-${tag}`} className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        

                        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>

                        <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.githubURL}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                target="_blank"><FaGithub size={20}/></a>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Github Link */}
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/dylanpant">Check Out My GitHub <ArrowRight size={16}/></a>
            </div>
        </div>
    </section>
}