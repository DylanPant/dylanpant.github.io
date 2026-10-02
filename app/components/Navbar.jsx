"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { NAV_ITEMS, RESUME_AVAILABLE, RESUME_URL } from "../lib/site"
import { ThemeToggle } from "./ThemeToggle"

const NavLinks = ({ className, onNavigate }) => (
    <ul className={className}>
        {NAV_ITEMS.map((item) => (
            <li key={item.href}>
                <a
                    href={item.href}
                    onClick={onNavigate}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                    {item.name}
                </a>
            </li>
        ))}
        {RESUME_AVAILABLE && (
            <li>
                <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onNavigate}
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-muted transition-colors"
                >
                    Resume
                </a>
            </li>
        )}
    </ul>
)

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const close = () => setIsMenuOpen(false)

    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
            <nav aria-label="Main" className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
                <a href="#top" className="font-heading text-base font-bold tracking-tight text-foreground">
                    Dylan Pant
                </a>

                <div className="flex items-center gap-2">
                    <NavLinks className="hidden items-center gap-1 md:flex" />
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted md:hidden"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
                    </button>
                </div>
            </nav>

            <div id="mobile-menu" className={cn("border-t border-border px-4 py-2 md:hidden", !isMenuOpen && "hidden")}>
                <NavLinks className="flex flex-col" onNavigate={close} />
            </div>
        </header>
    )
}
