import Markdown from '@/components/Markdown'

export const metadata = { title: 'Colophon · Palmshed' }

export default function ColophonPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      <p className="eyebrow">Colophon</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 38, letterSpacing: '-0.02em', margin: 'var(--space-2) 0 var(--space-3)' }}>
        How this site is built
      </h1>
      <p style={{ color: 'var(--ink-secondary)', fontSize: 17, lineHeight: 1.6, maxWidth: '52ch' }}>
        A static site that documents engineering work. The details below are part of the craft, so
        they get written down like everything else.
      </p>

      <div className="prose" style={{ marginTop: 'var(--space-6)', maxWidth: '66ch' }}>
        <Markdown>
          {`
## Framework

Next.js 16 with the App Router, React 19, and TypeScript. Every page is statically generated at
build time: the content is read from the repo and rendered to plain HTML, so there is no runtime
server and nothing to maintain after deploy.

## Typography

- **Inter** for body text.
- **IBM Plex Sans** for headings and display.
- **IBM Plex Mono** for code.

All fonts are self-hosted through \`next/font\`. No third-party requests, no layout shift.

## Color palette

- Dark canvas \`#111110\`, light text \`#e6e6e3\`, muted surface \`#1a1a18\`.
- Secondary ink \`#8a8a87\`, hairline borders \`#262623\`.
- A single green accent, \`#3fb950\` (dark) / \`#1f883d\` (light). If it's green, it's interactive.
- Dark is the default. Light mode is an override, not the base.

Layout uses a 4px spacing scale.

## Markdown pipeline

Content lives in \`docs/\` as Markdown with YAML front matter, version-controlled alongside the
code. At build time the files are read with gray-matter, rendered with react-markdown,
remark-gfm, and rehype-highlight, and statically generated into pages. Editing the site is
editing Markdown files in a pull request.

## Search

A build-time index is written to \`/search-index.json\` and searched entirely in the browser.
No server, no third-party service, no telemetry.

## RSS

An Atom feed at \`/feed.xml\`, generated at build time from the articles and posts. Readers get
new writing without depending on any platform.

## Diagrams

All diagrams are hand-authored inline SVG, drawn in the same style as the site as text files so
they can be reviewed and changed in a diff.

## Hosting

The build produces a static export, deployable to any static host. There is no application server
and no database.

## Why static

A static site is durable. It costs nothing to run, cannot break at runtime, and the content is
version-controlled like the software it documents. The point of this site is to let the work stay
the main event. A site that needs constant maintenance would compete with the work instead of
documenting it.
`}
        </Markdown>
      </div>
    </div>
  )
}
