---
title: Color
slug: colors
---

# Color

## Palette

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--black` | `#e6e6e3` | `#0d0d0d` | Primary text, headings |
| `--ink-secondary` | `#8a8a87` | `#6b6b6b` | Secondary text, captions |
| `--white` | `#111110` | `#ffffff` | Background (cards, banner, profile) |
| `--surface-muted` | `#1a1a18` | `#f4f4f2` | Subtle panel backgrounds, code blocks |
| `--green` | `#3fb950` | `#1f883d` | Accent. Single accent, used sparingly |
| `--green-muted` | `#14301f` | `#e6f2ea` | Accent tints, badges, links on hover backgrounds |
| `--line` | `#262623` | `#e4e4e1` | Hairline borders, dividers |

## Rules

- **Dark canvas is the default.** The interface lives on a near-black surface. Light mode is an override, not the base.
- **One accent.** Green is the only accent color. If two colors are competing, one is wrong.
- **Green means action or life.** Links, focus states, the Palmshed mark, "open source" chips. Not decoration.
- **Neutrals carry structure.** Everything that isn't text or action is dark grey or black.
- **Quiet hierarchy.** One thing should be obvious at a time. No competing cards, badges, CTAs.
- **Accessibility:** body text at `#e6e6e3` on `#111110` exceeds WCAG AAA. Green on dark is the accent, not body text.

## References

- GitHub green `#1f883d` was the seed for the accent.
- Cards: see `design-system/cards.md`.
