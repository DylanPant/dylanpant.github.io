"use client"
import { Briefcase, Code } from "lucide-react"
import { GiSpaceNeedle } from "react-icons/gi"
export const AboutSection = () => {

    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">

            {/* About Me text */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    {/* a little about me */}
                    <h3 className="text-2xl font-semibold">Passionate web developer blah blah blah</h3>

                    <p className="text-muted-foreground"> I&apos;m a Dean&apos;s Scholar at the University of Washington, where I combine rigorous CS fundamentals with a passion for civic leadership. My journey started in policy as a Senate Page, where I learned that real change happens when systems work for people.</p>

                    <p className="text-muted-foreground">Currently, I&apos;m bridging that gap as a Mentor for the Changemakers in Computing program and building AI-driven solutions, like the adoption framework I co-developed at Microsoft, to make technology more accessible and effective for everyone.</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>

                        <a href="" className="px-6 py-3 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                {/* column container */}
                <div className="grid grid-cols-1 gap-6">

                    {/* --- horizontal item --- */}
                    <div className="gradient-border p-6 card-hover">

                        {/* What kind of coding I do */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> AI &amp; Full-Stack </h4>
                                <p className="text-muted-foreground">Building intelligent agents with CrewAI and robust APIs with Go & Docker.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">

                        {/* Location */}
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GiSpaceNeedle className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Based in the PNW </h4>
                                <p className="text-muted-foreground"> Currently a CS major at the University of Washington.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">

                        {/* Work Experience */}
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Innovation at Scale </h4>
                                <p className="text-muted-foreground">Driving AI adoption strategies for enterprise teams at Microsoft CE&S.</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
}