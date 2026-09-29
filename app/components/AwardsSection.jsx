"use client"
import { Award, Star } from "lucide-react"
import { RiMedalLine } from "react-icons/ri"

export const AwardSection = () => {
    return (
        <div id="awards" className="w-full max-w-4xl mx-auto mt-12 mb-20 px-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/10 via-background to-background border border-yellow-500/20 p-8 md:p-12 text-center">
                
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="p-4 rounded-full bg-amber-100 dark:bg-yellow-900/30 text-amber-700 dark:text-yellow-400 mb-6 shadow-sm border border-amber-200 dark:border-transparent">
                        <RiMedalLine size={48} strokeWidth={0.5} />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-4">
                        2024 U.S. Presidential Scholar
                    </h3>
                    
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                        Recognized by <span className="font-semibold text-foreground">President Biden</span> and the <span className="font-semibold text-foreground">U.S. Department of Education</span> as one of the nation&apos;s most distinguished graduating high school seniors. Selected for contributions in academics, leadership, and community service.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-amber-800 dark:text-yellow-400">
                        <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-yellow-500/10 border border-amber-200 dark:border-yellow-500/20">
                            <Star size={14} className="fill-current" /> Academic Excellence
                        </span>
                        <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-yellow-500/10 border border-amber-200 dark:border-yellow-500/20">
                            <Award size={14} className="fill-current" /> Leadership
                        </span>
                        <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-yellow-500/10 border border-amber-200 dark:border-yellow-500/20">
                            <Star size={14} className="fill-current" /> Community Service
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}