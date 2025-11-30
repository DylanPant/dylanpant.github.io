"use client"
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils"

export const ThemeToggle = () => {
    const getInitialTheme = () => {
        if (typeof window === "undefined") return false
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") return true
        if (storedTheme === "light") return false
        return window.matchMedia("(prefers-color-scheme: dark)").matches
    }

    const [isDarkMode, setIsDarkMode] = useState(() => getInitialTheme())

    useEffect(() => {
        // Synchronize DOM (class) with React state; avoid calling setState here
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode]);

    const toggleTheme = async(event) => {
        const newThemeIsDark = !isDarkMode;

        // If a browser doesn't use View Transitions
        if(!document.startViewTransition) {
            setIsDarkMode(newThemeIsDark);

            if(newThemeIsDark) {
                document.documentElement.classList.add("dark")
                localStorage.setItem("theme", "dark")
            } else {
                document.documentElement.classList.remove("dark")
                localStorage.setItem("theme", "light")
            }

            return
        }

        // Get click coordinates for the circle
        const x = event.clientX;
        const y = event.clientY;

        // Find distance to furthest corner
        const endRadius = Math.hypot(
            Math.max(x, innerWidth-x),
            Math.max(y, innerHeight-y)
        )

        // Transition
        const transition = document.startViewTransition(() => {
            // Update DOM and state
            setIsDarkMode(newThemeIsDark)

            if(newThemeIsDark) {
                document.documentElement.classList.add("dark")
                localStorage.setItem("theme", "dark")
            } else {
                document.documentElement.classList.remove("dark")
                localStorage.setItem("theme", "light")
            }
        })

        // Animate circle clip
        await transition.ready

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
                // going dark -> animate NEW view
                // going light -> animate OLD view
                pseudoElement: newThemeIsDark 
                    ? "::view-transition-new(root)" 
                    : "::view-transition-old(root)",
            }
        )
    };

    return (
        <button onClick={toggleTheme} 
        className={cn("fixed max-sm:hidden top-5 right-5 z-50 pr rounded-full transition-colors duration-300", "focus:outline-hidden")}
        aria-label="Toggle Theme">
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
                <Moon className="h-5 w-5 text-blue-400" />
            )}
        </button>
    );
};