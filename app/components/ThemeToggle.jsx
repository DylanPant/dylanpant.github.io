"use client"

import { Moon, Sun, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [showHint, setShowHint] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === "undefined") return false
        return localStorage.getItem("theme") === "dark"
    })

    // Sync document class and localStorage when theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [isDarkMode])

    // Hide the hint once the user scrolls
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setShowHint(false)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleTheme = async (event) => {
        setShowHint(false)
        const newThemeIsDark = !isDarkMode

        if (!document.startViewTransition) {
            setIsDarkMode(newThemeIsDark)
            return
        }

        const x = event?.clientX ?? innerWidth / 2
        const y = event?.clientY ?? innerHeight / 2
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        )

        const transition = document.startViewTransition(() => {
            setIsDarkMode(newThemeIsDark)
        })

        try {
            await transition.ready
        } catch {}

        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ]

        document.documentElement.animate(
            {
                clipPath: newThemeIsDark ? clipPath : [...clipPath].reverse(),
            },
            {
                duration: 500,
                easing: "ease-in-out",
                pseudoElement: newThemeIsDark
                    ? "::view-transition-new(root)"
                    : "::view-transition-old(root)",
            }
        )
    }

    return (
        <div className="flex items-center gap-3">
            <div className={cn(
                "hidden md:flex items-center gap-2 text-sm text-muted-foreground transition-opacity duration-500",
                showHint ? "opacity-100" : "opacity-0 pointer-events-none"
            )}>
                <span className="text-xs font-medium">Try me!</span>
                <ArrowRight className="h-4 w-4" />
            </div>

            <button
                onClick={toggleTheme}
                className={cn(
                    "p-2.5 rounded-full transition-all duration-300",
                    "bg-secondary/50 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-secondary",
                    "focus:outline-hidden"
                )}
                aria-label="Toggle Theme"
            >
                {isDarkMode ? (
                    <Moon className="h-4 w-4 text-blue-400" />
                ) : (
                    <Sun className="h-4 w-4 text-yellow-500" />
                )}
            </button>
        </div>
    )
}