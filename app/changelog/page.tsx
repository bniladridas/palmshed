import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import Markdown from '@/components/Markdown'

export const metadata = { title: 'Changelog · Palmshed' }

export default function ChangelogPage() {
  const content = readFileSync(join(process.cwd(), 'CHANGELOG.md'), 'utf8')

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      <p className="eyebrow">Reference</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 38, letterSpacing: '-0.02em', margin: 'var(--space-2) 0 var(--space-3)' }}>
        Changelog
      </h1>
      <p style={{ color: 'var(--ink-secondary)', fontSize: 17, lineHeight: 1.6, maxWidth: '52ch' }}>
        A record of every meaningful change to this site, from first commit to now. Built in public.
      </p>
      <div style={{ marginTop: 'var(--space-6)' }}>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}
