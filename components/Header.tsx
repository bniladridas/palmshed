import Link from 'next/link'
import HeaderSearch from './HeaderSearch'
import ThemeToggle from './ThemeToggle'
import { withBase } from '@/lib/site'

const nav = [
  { href: '/articles', label: 'Articles' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/open-source', label: 'Open Source' },
  { href: '/now', label: 'Now' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid var(--line)' }}>
      <div
        className="container header"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-3) var(--space-4)',
          paddingTop: 'var(--space-4)',
          paddingBottom: 'var(--space-4)',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--black)' }}>
          <img src={withBase('/favicon.svg')} alt="" width="28" height="28" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18 }}>Palmshed</span>
        </Link>
        <nav aria-label="Primary" className="header-nav" style={{ display: 'flex', gap: 'var(--space-5)' }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: 'var(--ink-secondary)', fontSize: 15, fontWeight: 500 }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <HeaderSearch />
      </div>
    </header>
  )
}
