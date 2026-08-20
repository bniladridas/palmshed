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
        <nav style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
          <a
            href="https://github.com/bniladridas/palmshed"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
            </svg>
            Fork
          </a>
          <span style={{ color: 'var(--line)' }}>·</span>
          <a
            href="https://github.com/bniladridas/palmshed/fork"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}
          >
            1 fork
          </a>
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
