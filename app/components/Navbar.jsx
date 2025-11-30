"use client"
import { cn } from "../lib/utils"
import { Medal, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

const navItems = [
    {name: "Home", href: "#hero"}, 
    {name: "About", href: "#about"}, 
    {name: "Skills", href: "#skills"}, 
    {name: "Projects", href: "#projects"}, 
    {name: "Contact", href: "#contact"}, 
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10) // greater than Nav size
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return ( 
    <nav className={cn(
        "fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )} 
    >
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                
                <span className="relative px-3 z-10">
                    {" "}
                    <span className="text-glow text-foreground">Dylan&apos;s</span> Portfolio
                </span>
            </a>

            {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                {item.name}</a>
                    ))}
                </div>

                {/* Presidential Scholar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-medium cursor-help"
                title="2024 US Presidential Scholar">
                    <Medal size={14} />
                    <span className="hidden lg:inline">Presidential Scholar</span>
                </div>

            {/* mobile nav -- vertical */}
            <button onClick={() => setIsMenuOpened((prev) => (!prev))}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>{isMenuOpen 
            ? <X size={24}/>
            : <Menu size={24}/>}
            </button>

            <div className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", 
            "transition-all duration-300 md:hidden",
            isMenuOpen 
                ? "opacity-100 pointer-events-auto" 
                : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <Link
                        key={key} 
                        href={item.href}
                        scroll={true}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpened(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Mobile - Presidential Scholar badge */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium">
                        <Medal size={16} />
                        <span>2024 US Presidential Scholar</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
}