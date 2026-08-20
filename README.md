# Palmshed

<br>

> A portfolio built like the work it documents:
> carefully, honestly, and in public.

<br>

---

<br>

This repository holds two things at once.

The **content** lives in `docs/` as Markdown with YAML front matter, version-controlled alongside the code. Articles, architecture notes, LinkedIn posts, portfolio cards, profile sections, design assets, image prompts. Everything here is production, not placeholder.

The **site** reads those files at build time, parses them, and generates static pages. Editing the site is editing Markdown in a pull request.

<br>

---

<br>

## The work

<br>

| | | |
|---|---|---|
| 11 | long-form articles | with diagrams and references |
| 8 | architecture notes | focused design decisions |
| 21 | LinkedIn posts | ready to publish |
| 11 | portfolio cards | featured work |
| 9 | profile sections | complete engineering profile |

<br>

---

<br>

## Structure

<br>

```
palmshed/
│
├── app/                    the site
│   ├── articles/           index and detail
│   ├── architecture/       notes
│   ├── posts/              LinkedIn
│   ├── featured/           cards
│   ├── open-source/        projects
│   ├── about/              profile
│   ├── now/                current focus
│   ├── changelog/          record of changes
│   ├── search/             client-side index
│   └── colophon/           how this was made
│
├── docs/                   the content
│   ├── articles/
│   ├── architecture/
│   ├── linkedin/
│   ├── featured/
│   └── profile/
│
├── assets/                 diagrams, logos, cards
├── design-system/          colors, type, spacing
├── prompts/                image generation
├── templates/              new content starters
└── scripts/                build, validate, stats
```

<br>

---

<br>

## Design

<br>

Quiet. Monochrome. One green accent, the single living thing in an otherwise still frame.

**Canvas** is `#111110`. Text is `#e6e6e3`. Secondary is `#8a8a87`. Borders are `#262623`. Light mode is an override, not the default.

**Type** is Inter for body, IBM Plex Sans for display, IBM Plex Mono for code. All self-hosted. No third-party requests. No layout shift.

**Spacing** follows a 4px scale. Elements breathe. Whitespace does the separating.

**Motion** is almost invisible. The palm mark draws itself on load. Content reveals on scroll. Interactions are fast, predictable, and quiet.

<br>

---

<br>

## Run

<br>

```
npm install
npm run dev          localhost:3000
npm run build        static export
npm run typecheck    typescript
npm run validate     content checks
npm run stats        word counts
```

<br>

---

<br>

## Write

<br>

1. Copy `templates/article.md` into `docs/articles/`.
2. Fill the front matter: title, slug, date, tags, intro, references.
3. Write the body in Markdown.
4. Diagrams go in `assets/diagrams/`. Reference as `![caption](/diagrams/name.svg)`.
5. `npm run build`. The site regenerates.

<br>

---

<br>

## Deploy

<br>

GitHub Pages. GitHub Actions. Every push to `main`.

| variable | purpose |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | link prefix for project-path hosting |
| `NEXT_PUBLIC_SITE_URL` | origin for canonical URLs, sitemap, RSS, Open Graph |

For a custom domain: add a `CNAME` file, point DNS, clear the two env vars.

<br>

---

<br>

## Voice

<br>

Short sentences. Concrete. No filler. First person, but humble. Claims are demonstrated, not asserted. Engineering honesty over marketing polish.

<br>

---

<br>

## Status

<br>

The site is live. The content is real. The references point at actual repositories. Everything here is production.

See `CHANGELOG.md` for the full record.

<br>

---

<br>

<br>

*Built by hand. Open source. Maintained in public.*
