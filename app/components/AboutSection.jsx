"use client"

export const AboutSection = () => {

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-2xl text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    About Me
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                        I&apos;m a Dean&apos;s Scholar at UW studying CS, with a background that runs from the floor of the Washington State Senate to AI internships at Microsoft. I care about building technology that works for people — not just for those who already have access to it.
                    </p>

                    <p>
                        That conviction shapes the work I take on: AI agents that cut through complexity, backend systems built to last, and mentorship that brings more people into computing.
                    </p>
                </div>

                <div className="mt-10">
                    <a href="#contact" className="cosmic-button">Get In Touch</a>
                </div>
            </div>
        </section>
    )
}
