import Link from 'next/link'
import HeaderSearch from './HeaderSearch'
import ThemeToggle from './ThemeToggle'
import AnimatedLogo from './AnimatedLogo'
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
    <header>
      <div
        className="container header"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-3) var(--space-4)',
          paddingTop: 'var(--space-5)',
          paddingBottom: 'var(--space-5)',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--black)', textDecoration: 'none' }}>
          <AnimatedLogo />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 17,
            letterSpacing: '-0.01em',
            animation: 'fade-in 400ms ease 200ms both',
          }}>Palmshed</span>
        </Link>
        <nav aria-label="Primary" className="header-nav" style={{ display: 'flex', gap: 'var(--space-5)' }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: 'var(--ink-secondary)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}
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
