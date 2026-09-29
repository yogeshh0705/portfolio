# Portfolio

Personal portfolio built with Next.js (App Router) + Tailwind CSS, statically exported and deployed to GitHub Pages.

## Structure

- `data/portfolio.ts` — all content (bio, experience, education, skills, projects, research). Edit this file to update the site; components render from it.
- `components/` — page sections (Hero, About, Experience, Research, Projects, Skills, Contact).
- `app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).

## Local development

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content still needed

The site currently has placeholder copy marked with `TODO` in `data/portfolio.ts`:

- Resume details (experience, education, skills, projects)
- VTOL drone research write-up (`research` object)
- Contact info (email, LinkedIn)
- `public/resume.pdf` and a profile/project images

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static export and publishes it to GitHub Pages at:

`https://yogeshh0705.github.io/portfolio/`

Enable Pages once under repo **Settings → Pages → Source: GitHub Actions**.
