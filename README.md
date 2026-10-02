# Dylan Pant: Portfolio

Personal portfolio site for Dylan Pant (Computer Science, University of Washington, Class of 2028).
It is a single static page built to be scanned quickly: who I am, what I'm looking for, experience,
projects, skills, and how to reach me.

Live at **https://dylanpant.github.io**.

## Stack

- [Next.js 16](https://nextjs.org) App Router with static export (`output: "export"`)
- React 19, Tailwind CSS v4 (theme tokens in `app/globals.css`)
- `next-themes` for light/dark mode (class-based, no flash on load)
- `next/font` (Inter for body text, Space Grotesk for headings)
- `lucide-react` and `react-icons` for icons

## Project layout

```
app/
  layout.jsx         metadata (SEO, Open Graph, Twitter), fonts, theme provider
  page.jsx           section order
  icon.svg           favicon
  lib/site.js        links, nav items and the RESUME_AVAILABLE flag
  components/        one file per section, plus Navbar, ThemeToggle, Section
lib/utils.ts         cn() class-name helper
public/og.png        1200x630 social preview image
```

Content (experience, projects, skills) lives in plain arrays at the top of each section component.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static site in out/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static export and publishes
`out/` to GitHub Pages. Because this repo is `dylanpant.github.io`, the site is served from the domain
root. For any other repo name, the workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo>` automatically.

## Adding the resume

1. Save the PDF as `public/Dylan_Pant_Resume.pdf`.
2. In `app/lib/site.js`, set `RESUME_AVAILABLE = true`.

The Resume button in the hero and the Resume link in the navbar appear only when that flag is true.
