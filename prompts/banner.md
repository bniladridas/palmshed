---
title: Banner Prompt
---

# Banner Prompt

LinkedIn banner, 1584 × 396 px (export at 2x). Concept from `docs/profile/banner-spec.md`: dark canvas with a subtle engineering grid and Palmshed branding.

## Prompt

> Ultra-wide minimal banner. Dark background (#111110). A very faint grid just barely visible across the full width. In the center-right, the Palmshed mark: a small geometric shed with a palm leaf on its roofline, in muted green (#3fb950). Short tagline in Inter or IBM Plex Sans on the left, in light grey (#e6e6e3): "Software that outlasts its authors." Thin muted-green rule along the bottom edge. Huge amounts of empty space. Flat vector, no gradients, no other colors.

## Negative prompt

> photorealistic, 3D render, glossy, busy, cluttered, more than one accent color, gradients, drop shadows, emoji, text artifacts, watermark, centered text block.

## Alternate taglines

- "Maintainable systems. Developer tools. Open source."
- "Software that outlasts its authors."

## Post-process

- Safe zone: keep all text and the mark within the center 75%. The profile photo overlays the bottom-left corner.
- Confirm the accent green is exactly `#3fb950` and the grid stays barely visible (about 5% opacity).
- If the model adds a second color or a busy texture, reject and rerun with the negative prompt.
