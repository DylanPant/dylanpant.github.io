"use client"
import { useState } from "react"
import { cn } from "../lib/utils"
import { FaReact, FaPython, FaJava, FaDocker, FaFigma } from "react-icons/fa"
import { FaGolang } from "react-icons/fa6"
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiThreedotjs, SiSupabase, SiFirebase, SiVercel, SiGrafana, SiCplusplus } from "react-icons/si"
import { VscAzure } from "react-icons/vsc"

const skills = [
    // Languages
    { name: "Python",      category: "languages",  icon: <FaPython    className="text-yellow-500" /> },
    { name: "TypeScript",  category: "languages",  icon: <SiTypescript className="text-blue-500" /> },
    { name: "JavaScript",  category: "languages",  icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Go",          category: "languages",  icon: <FaGolang    className="text-cyan-500" /> },
    { name: "Java",        category: "languages",  icon: <FaJava      className="text-red-500" /> },
    { name: "C / C++",     category: "languages",  icon: <SiCplusplus className="text-blue-400" /> },

    // Frameworks
    { name: "React",       category: "frameworks", icon: <FaReact     className="text-blue-400" /> },
    { name: "Next.js",     category: "frameworks", icon: <SiNextdotjs className="text-foreground" /> },
    { name: "Three.js",    category: "frameworks", icon: <SiThreedotjs className="text-foreground" /> },
    { name: "Tailwind",    category: "frameworks", icon: <SiTailwindcss className="text-cyan-400" /> },

    // Tools
    { name: "Docker",      category: "tools",      icon: <FaDocker    className="text-blue-500" /> },
    { name: "Supabase",    category: "tools",      icon: <SiSupabase  className="text-emerald-500" /> },
    { name: "Firebase",    category: "tools",      icon: <SiFirebase  className="text-amber-500" /> },
    { name: "Vercel",      category: "tools",      icon: <SiVercel    className="text-foreground" /> },
    { name: "Grafana",     category: "tools",      icon: <SiGrafana   className="text-orange-500" /> },
    { name: "Azure AI",    category: "tools",      icon: <VscAzure    className="text-indigo-500" /> },
    { name: "Figma",       category: "tools",      icon: <FaFigma     className="text-violet-500" /> },
]

const categories = ["all", "languages", "frameworks", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key}
                            className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
