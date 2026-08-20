# Changelog

A record of every meaningful change to the Palmshed engineering portfolio, from first commit to now.

---

## 2026-08-20: Design system, dark canvas

### Interface

- Flipped the theme: dark canvas (`#111110`) is now the default. Light mode is an override.
- Quiet monochrome palette: `#e6e6e3` text, `#8a8a87` secondary, `#262623` borders.
- Green accent stays: `#3fb950` (dark) / `#1f883d` (light), the one living element.
- Removed all section dividers (borderTop), whitespace separates now.
- Removed header border, cleaner, more open top.
- Card hover: subtle shadow only, no translateY bounce.
- Button hover: no micro-animation, just opacity change.
- Copy buttons: no emoji, surface-muted background, transparent border.

### Typography

- Consistent 38px heading scale across all pages (was 44px).
- `-0.02em` letter-spacing on all display headings.
- Eyebrows: `11px` with `1.5px` tracking (was `12px/3px`).
- Badges: `11px`, secondary ink color instead of black.
- Prose body: `17px/1.65` with `-0.01em` tracking.
- Blockquote: italic, thinner 2px green left border.

### Logo

- Animated SVG palm mark: stroke-draw entrance over 500-700ms.
- Wordmark fades in 200ms after the mark begins.
- Hover: subtle 1px upward drift (leaf responding to air).
- Click: physical compression via `:active`.
- Idle: completely still. Respects `prefers-reduced-motion`.

### Assets

- Updated all SVG assets to `#3fb950` green.
- OG image generated on dark canvas.
- Horizontal logo SVG updated for dark theme.

---

## 2026-08-14

- Bumped `@types/node` from 26.1.2 to 26.2.0.

---

## 2026-08-07: Launch day

### Content library

- 11 long-form articles with diagrams and references to real repositories (`kit`, `auth`).
- 8 architecture notes, 21 LinkedIn posts, 11 portfolio cards, full engineering profile.
- Naming follows org-vs-product convention: **Palmshed** is the organization; **kit** is the CLI tool.

### Site

- Next.js 16 App Router, fully static export.
- Deployed to GitHub Pages via GitHub Actions on every push to `main`.
- Configurable `basePath` (`NEXT_PUBLIC_BASE_PATH`) for project-path deployment.
- Client-side search over a build-time index.
- RSS feed, XML sitemap, JSON-LD structured data, build-time OG image.
- Generated `404.html`, accessible and responsive layout.

### Polish

- Redrawn all 11 article diagrams to editorial scale: 600px canvas, 15-16px labels, muted palette.
- Diagram captions explain why each figure matters, not just what it shows.
- Added copy-to-clipboard controls for LinkedIn-ready content.
- Added subtle scroll-reveal motion, card lift, button feedback.
- Replaced em dashes with calmer punctuation throughout content.
- Fixed Lighthouse accessibility failures; scoped audit assertions.
- Made search inputs follow the theme.
- Fixed hydration mismatch on article pages; suppressed theme flash.
- Theme toggle: system / light / dark modes with flash-free initialization.
- Daily rebuild scheduled for automatic publish-date rollover.
