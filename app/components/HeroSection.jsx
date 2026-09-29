"use client"
import { ArrowDown, Medal } from "lucide-react";
import { FaLinkedin } from "react-icons/fa"
import { WalkingPeople } from './WalkingPeople';

export const HeroSection = () => {

    return (
    <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

            <WalkingPeople/>

            {/* Fades walking people into the next section */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent z-10 pointer-events-none"/>

            <div className="container max-w-4xl mx-auto text-center z-20 relative">
                <div className="space-y-4 max-w-3xl mx-auto">

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                        Dylan Pant
                    </h1>

                    <p className="text-sm text-muted-foreground tracking-wide">
                        University of Washington &middot; CS &middot; Class of 2028
                    </p>

                    <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-yellow-400 text-xs font-medium w-fit mx-auto">
                        <Medal size={12} />
                        2024 U.S. Presidential Scholar
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed pt-1">
                        From Senate Page to software engineer — I build technology that serves people.
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4 justify-center">
                        <a href="#experience" className="cosmic-button">
                            See My Work
                        </a>
                        <a href="https://linkedin.com/in/dylanpant"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="px-6 py-3 rounded-full border border-border text-foreground/80 hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2">
                            <FaLinkedin size={16} /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>);
}
