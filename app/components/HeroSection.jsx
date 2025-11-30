"use client"
import { ArrowDown } from "lucide-react";
import { WalkingPeople } from './WalkingPeople';

export const HeroSection = () => {

    return (
    <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

            <WalkingPeople/>

            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"/>
            
            <div className="container max-w-4xl mx-auto text-center z-10">
                {/* Can remove everything but space-y-6 */}
                <div className="space-y-6 p-8 rounded-xl 
                    bg-background/80 backdrop-blur-sm 
                    border border-border/50 shadow-xl
                    max-w-3xl mx-auto"> 
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
                        <span className="opacity-0.1 animate-fade-in">Hi, I&apos;m</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Dylan</span>
                        <span className="text-glow ml-2 opacity-0 animate-fade-in-delay-2"> Pant</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-100">
                        I like to make stuff online.
                    </p>

                    <div className="pt-4 opacity-100 animate-fade-in-delay-4">
                        <a href="#projects" 
                           className="cosmic-button ">
                            View My Work Below!
                        </a>
                    </div>

                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-30">
                <span className="text-sm text-muted-foreground mb-3">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>

            </div>

        </section>);
}