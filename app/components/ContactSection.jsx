"use client"
import { Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {

    return <section id="contact" 
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always interested in new project and career opportunities! Feel free to reach out.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
                <a href="mailto:Dylan.s.pant@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-opacity">
                    <Mail size={20} /> Dylan.s.pant@gmail.com
                </a>
                
                <a href="https://linkedin.com/in/dylanpant" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full hover:bg-secondary transition-colors">
                    <Linkedin size={20} /> LinkedIn
                </a>
</div>

        </div>
        
    </section>
}