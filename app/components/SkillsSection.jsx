"use client"
import { useState } from "react"
import { cn } from "../lib/utils"
import { FaReact, FaPython, FaJava, FaDocker, FaFigma } from "react-icons/fa"
import { FaGolang, FaScrewdriverWrench } from "react-icons/fa6"
import { SiJavascript, SiPostman, SiSqlite, SiTailwindcss } from "react-icons/si"
import { VscAzure } from "react-icons/vsc";

const skills = [    

    // Languages
    {name: "Python", category:"languages", icon: <FaPython className="text-yellow-500" />},
    {name: "Go", category:"languages", icon: <FaGolang className="text-cyan-500" category="languages"/>},
    {name: "Java", category:"languages", icon: <FaJava className="text-red-500" />},
    {name: "JavaScript", category:"languages", icon: <SiJavascript className="text-yellow-500" />},
    {name: "SQLite", category:"languages", icon: <SiSqlite className="text-cyan-500" />},

    // Frameworks
    {name: "React", category:"frameworks", icon: <FaReact className="text-blue-400" />},
    {name: "Tailwind", category:"frameworks", icon: <SiTailwindcss className="text-cyan-400" />},
    {name: "CrewAI", category:"frameworks", icon: <FaScrewdriverWrench className="text-red-400" />},

    // Tools
    {name: "Docker", category:"tools", icon: <FaDocker className="text-blue-500" />},
    {name: "Figma", category:"tools", icon: <FaFigma className="text-violet-500" />},
    {name: "Azure AI Foundry", category:"tools", icon: <VscAzure className="text-indigo-500" />},
    {name: "Postman API", category:"tools", icon: <SiPostman className="text-orange-500" />},
    
];


const categories = ["all", "languages", "frameworks", "tools"]


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    // Filter based on if category is "all" or a select category
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return <section id="skills" 
    className="py-24 px-4 relative bg-secondary/30">

        {/* My Skills text */}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span></h2>

            {/* Category Buttons */}
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

            {/* Individual Skill Pills */}
            <div className="grid grid-cols-2  md:grid-cols-4 gap-6">
                
                {filteredSkills.map((skill, key) => (
                    <div key={key} 
                    className="flex flex-col items-center p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                        <div className="text-4xl mb-2"> {skill.icon} </div>

                        <span className="font-medium"> {skill.name} </span>
                    </div>
                ))}

            </div>

        </div>

    </section>
}