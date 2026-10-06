# mateusarce.dev

Personal portfolio for **Mateus Arce**, Software Engineer · Full Stack, focused on backend systems, developer tools and automation.

**Live:** https://mateusarce.dev

## What this site includes

- Bilingual experience in Portuguese and English
- Professional experience, current stack and resume
- Public GitHub repositories loaded dynamically
- Rendered project READMEs inside the portfolio
- Featured projects with external links when available
- Dark/light theme
- Responsive layout and reduced-motion support
- SEO metadata, Open Graph, sitemap and robots configuration
- Vercel Analytics and Speed Insights behind the site's consent flow

## Featured projects

The portfolio currently highlights:

- [SQL Vault](https://github.com/mateusarcedev/sql-vault) — self-hosted SQL knowledge manager with versioning, AI integrations and a VS Code extension
- [Devlist](https://github.com/mateusarcedev/devlist) — open-source directory for discovering and saving developer tools
- [TCC](https://github.com/mateusarcedev/tcc) — computer vision + FastAPI + Arduino conveyor automation system
- [Prompt Manager](https://github.com/mateusarcedev/prompt-manager) — prompt library built with Vue, Pinia, Express and SQLite

SQL Vault also has a published [VS Code extension](https://marketplace.visualstudio.com/items?itemName=mateusarcedev.sqlvault).

## Stack

### Application

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Zustand
- Radix UI
- Anime.js

### Content and integrations

- GitHub REST API for public repositories
- React Markdown + remark/rehype for rendered project READMEs
- Vercel Analytics
- Vercel Speed Insights

## Run locally

Requirements:

- Node.js compatible with the current Next.js 16 setup
- pnpm

```bash
git clone https://github.com/mateusarcedev/mateusarce.dev.git
cd mateusarce.dev

pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

To validate a production build:

```bash
pnpm build
pnpm start
```

## Main routes

- `/` — portfolio home
- `/projects` — public GitHub repositories
- `/projects/[slug]` — project details with rendered README
- `/resume` — web resume

## Project metadata

Repository-specific presentation rules live in `data/repo-config.ts`, including:

- featured repositories
- course repositories
- homepage overrides
- external project links

The portfolio domain and canonical URLs use **mateusarce.dev** throughout the application.

## Contact

- Website: https://mateusarce.dev
- Email: contato@mateusarce.dev
- GitHub: https://github.com/mateusarcedev
- LinkedIn: https://linkedin.com/in/mateus-arce

## License

MIT © Mateus Silva Andrade Arce
