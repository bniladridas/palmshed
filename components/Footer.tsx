import { withBase } from '@/lib/site'

export default function Footer() {
  return (
    <footer style={{ marginTop: 'var(--space-8)' }}>
      <div
        className="container footer-row"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
          paddingTop: 'var(--space-6)',
          paddingBottom: 'var(--space-6)',
          color: 'var(--ink-secondary)',
          fontSize: 13,
        }}
      >
        <span>Software that outlasts its authors.</span>
        <nav style={{ display: 'flex', gap: 'var(--space-4)' }}>
          <a
            href={withBase('/changelog/')}
            style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}
          >
            Changelog
          </a>
          <a
            href={withBase('/colophon/')}
            style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}
          >
            Colophon
          </a>
        </nav>
      </div>
    </footer>
  )
}
