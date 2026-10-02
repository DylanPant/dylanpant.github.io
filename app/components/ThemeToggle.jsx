"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// Both icons are rendered and swapped with CSS, so server and client markup match
// and there is no flash before hydration.
export const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
        >
            <Sun className="h-4 w-4 dark:hidden" aria-hidden="true" />
            <Moon className="hidden h-4 w-4 dark:block" aria-hidden="true" />
        </button>
    )
}
