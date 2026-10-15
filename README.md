# Ayush Bajpai — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Motion, and Lucide icons.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Edit content

All copy, links, projects, experience, and skills live in one file:

```
src/content/site.ts
```

Layout components never hold content, so updating the site means editing that file only.

Items marked `TODO` in that file still need real URLs:

- `siteConfig.url` – the deployed domain (used for Open Graph metadata)
- `siteConfig.social.github`, `linkedin`, `leetcode`, `geeksforgeeks`
- `projects[].links` – GitHub repo links for the Blog Platform and Apartment Management System

Projects without a link simply hide the links row.

## Structure

```
src/app/              layout, page, global styles, icon.svg, opengraph-image
src/content/site.ts   all editable content
src/components/       Navbar, Footer
src/components/ui/    Button, Container, SectionHeading, Tag, Reveal, BrandIcons, Year
src/components/sections/  Hero, HeroVisual, About, Experience, Projects, ProjectCard, ProjectVisual, Skills, Contact
```

Design tokens (colours, fonts, radii) are defined in `src/app/globals.css` under `:root` and `@theme`.
