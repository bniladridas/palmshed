# Palmshed · Engineering Portfolio

**A version-controlled content library and static site for public engineering work.**

Long-form articles, architecture notes, LinkedIn posts, portfolio cards, profile copy, design assets, and image prompts, all in one reusable source of truth. Everything here is production content, not placeholders.

## Abstract

This repository contains both the **content** and the **site** that renders it. Content lives in `docs/` as Markdown with YAML front matter, version-controlled alongside the code. At build time, the files are read, parsed, and statically generated into pages. Editing the site is editing Markdown files in a pull request.

The result is a durable, low-maintenance portfolio that documents engineering work without competing with it.

## Repository Structure

```
engineering-portfolio/
├── app/                   Next.js site (App Router, React 19, TypeScript)
│   ├── page.tsx           Home
│   ├── articles/          Article index and detail
│   ├── architecture/      Architecture notes
│   ├── posts/             LinkedIn posts
│   ├── featured/          Portfolio cards
│   ├── open-source/       Open source page
│   ├── about/             Profile rendered from docs/profile/
│   ├── now/               Now page
│   ├── changelog/         Changelog (rendered from CHANGELOG.md)
│   ├── search/            Client-side search
│   ├── colophon/          How this site is built
│   ├── feed.xml/          RSS/Atom feed
│   └── sitemap.ts         XML sitemap
├── components/            Header, Footer, ContentCard, Markdown, TOC, etc.
├── lib/                   Content reading, search, types, utilities
├── docs/
│   ├── articles/          11 long-form engineering articles
│   ├── architecture/      8 architecture notes
│   ├── linkedin/          21 LinkedIn posts
│   ├── featured/          11 portfolio cards
│   ├── profile/           Complete profile (9 sections)
│   └── now.md             Now page content
├── assets/
│   ├── diagrams/          SVG diagrams for articles
│   ├── logos/             Palmshed brand marks
│   ├── icons/             Reusable SVG icons
│   └── cards/             SVG card templates
├── design-system/         Colors, typography, spacing, components
├── prompts/               Image generation prompt library
├── templates/             Templates for new content
└── scripts/               Build, validate, stats, OG generation
```

## Design Principles

The interface follows a quiet, monochrome-first aesthetic. Dark canvas as default. One green accent (`#3fb950`), the single living element in an otherwise still interface. The experience should feel like *someone carefully made this for me*, not *a company is trying to impress me*.

**Typography:** Inter for body, IBM Plex Sans for display, IBM Plex Mono for code. All self-hosted via `next/font`. No third-party requests, no layout shift.

**Color:** `#111110` canvas, `#e6e6e3` text, `#8a8a87` secondary, `#262623` borders. Light mode available as an override.

**Spacing:** 4px base scale. Generous whitespace. Elements breathe.

**Motion:** Stroke-draw entrance for the palm mark. Scroll-reveal for content. Interactions are fast, predictable, and almost invisible.

## Running Locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into out/
npm run typecheck  # TypeScript check
npm run validate   # content structure and front matter
npm run stats      # content inventory and word counts
```

## Content Workflow

1. Copy `templates/article.md` into `docs/articles/`.
2. Fill in front matter (title, slug, date, tags, intro, references).
3. Write the article body in Markdown.
4. Add diagrams: drop an SVG into `assets/diagrams/`, reference as `![caption](/diagrams/name.svg)`.
5. Run `npm run build`. The site regenerates automatically.

## Deployment

Deployed to GitHub Pages via GitHub Actions on every push to `main`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Prefixes all links and assets (required for project-path deployment) |
| `NEXT_PUBLIC_SITE_URL` | Origin for canonical URLs, sitemap, RSS, and Open Graph |

For a custom domain: add a `CNAME` file, point DNS at GitHub Pages, and clear the two env vars. The codebase defaults to domain-root URLs.

## Content Inventory

| Type | Count | Format |
|---|---|---|
| Articles | 11 | Long-form, with diagrams and references |
| Architecture notes | 8 | Short, focused design decisions |
| LinkedIn posts | 21 | Ready to publish |
| Portfolio cards | 11 | Featured work |
| Profile sections | 9 | Complete engineering profile |

## Voice

Short sentences. Concrete and specific. No filler. First person, but humble. Claims are demonstrated, not asserted. Engineering honesty over marketing polish.

## Status

Everything is production content. The site is live, the content is real, and the references point at actual repositories.

See `CHANGELOG.md` for the complete record of changes.

## License

This is a personal engineering portfolio. The content and design are part of the work they document.
