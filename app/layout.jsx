import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { SITE_URL, asset } from "./lib/site"

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-space-grotesk",
})

const title = "Dylan Pant | Software Engineer"
const description =
    "Dylan Pant, Computer Science at the University of Washington (Class of 2028). 2024 U.S. Presidential Scholar. Seeking Software Engineering internships for Summer 2027. Experience at Microsoft and UW School of Medicine."
const ogImage = { url: asset("/og.png"), width: 1200, height: 630, alt: "Dylan Pant, Software Engineer" }

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: title,
        template: "%s | Dylan Pant",
    },
    description,
    authors: [{ name: "Dylan Pant" }],
    openGraph: {
        type: "website",
        url: asset("/"),
        siteName: "Dylan Pant",
        title,
        description,
        images: [ogImage],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage.url],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="font-sans antialiased">
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
