import { cn } from "@/lib/utils"

// Plain, high-contrast button styles shared by every call to action.
export const buttonStyles = {
    primary:
        "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity",
    secondary:
        "inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors",
}

export const Section = ({ id, title, className, children }) => (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("scroll-mt-20 px-4 py-16 md:py-20", className)}>
        <div className="mx-auto max-w-4xl">
            <h2 id={`${id}-heading`} className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
                {title}
            </h2>
            {children}
        </div>
    </section>
)
