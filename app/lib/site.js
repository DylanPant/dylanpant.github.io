// Single source of truth for links shown in the hero, navbar, contact and footer.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// Prefix a file in public/ with the Pages base path (empty for dylanpant.github.io).
export const asset = (path) => `${basePath}${path}`

// To publish your resume: drop the PDF at public/Dylan_Pant_Resume.pdf, then set this to true.
// The Resume buttons in the hero and navbar only render while this is true.
export const RESUME_AVAILABLE = false
export const RESUME_URL = asset("/Dylan_Pant_Resume.pdf")

export const SITE_URL = "https://dylanpant.github.io"
export const EMAIL = "dylan.s.pant@gmail.com"
export const GITHUB_URL = "https://github.com/DylanPant"
export const LINKEDIN_URL = "https://linkedin.com/in/dylanpant"

export const NAV_ITEMS = [
    { name: "Experience", href: "#experience" },
    { name: "Honors", href: "#honors" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
]
