import Link from 'next/link'
import { getArticles, getCards } from '@/lib/content'
import { site, withBase, absUrl } from '@/lib/site'
import ContentCard from '@/components/ContentCard'
import Reveal from '@/components/Reveal'

export const metadata = {
  alternates: { canonical: absUrl('/') },
}

export default function Home() {
  const articles = getArticles()
  const cards = getCards()
  const latest = articles[0]

  const featuredArticles = cards
    .filter((c) => c.tag === 'article')
    .sort((a, b) => (a.slug < b.slug ? 1 : -1))
    .slice(0, 3)

  const buildCards = cards.filter((c) => ['project', 'projects', 'open-source'].includes(c.tag)).slice(0, 3)

  return (
    <>
      <section
        style={{
          padding: 'var(--space-8) 0 var(--space-7)',
        }}
      >
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-6)' }}>
              <div style={{ flex: '1 1 0%', minWidth: 0 }}>
                <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
                  Software Engineer · Open Source · Developer Tools
                </p>
                <h1
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(38px, 5.5vw, 68px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.025em',
                    margin: 0,
                    maxWidth: '18ch',
                    fontWeight: 600,
                  }}
                >
                  I build software that{' '}
                  <span style={{ color: 'var(--green)' }}>outlasts its authors.</span>
                </h1>
                <p
                  style={{
                    maxWidth: '52ch',
                    color: 'var(--ink-secondary)',
                    fontSize: 18,
                    lineHeight: 1.6,
                    marginTop: 'var(--space-5)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  The longer I build software, the less I believe writing code is the difficult part.
                  Keeping software understandable, maintainable, and adaptable is. That belief shows up in
                  everything I make: systems, tools, and open source.
                </p>
                <div className="action-row" style={{ display: 'flex', gap: 'var(--space-4)' }}>
                  <a href={withBase(`/articles/${latest.slug}/`)} className="button button--primary">
                    Latest article
                  </a>
                  <a href={withBase('/architecture/')} className="button button--secondary">
                    Architecture notes
                  </a>
                </div>
              </div>
              <svg
                className="hero-mark"
                width="260"
                height="260"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ink-secondary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0, opacity: 0.12, marginTop: 8 }}
              >
                <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
                <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
                <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
                <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">What I build</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.02em', margin: 'var(--space-2) 0 var(--space-5)' }}>
              Systems, tools, and open source
            </h2>
          </Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
              gap: 'var(--space-5)',
            }}
          >
            {buildCards.map((card, i) => (
              <Reveal key={card.slug} delay={Math.min(i, 3) * 80}>
                <ContentCard
                  eyebrow={card.tag.toUpperCase()}
                  title={card.title}
                  subtitle={card.subtitle}
                  href={card.link}
                  tag={card.tag}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <p className="eyebrow">Writing</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.02em', margin: 'var(--space-2) 0 0' }}>
                  Featured articles
                </h2>
              </div>
              <Link href="/articles" style={{ fontWeight: 500, fontSize: 15 }}>
                All articles →
              </Link>
            </div>
          </Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
              gap: 'var(--space-5)',
              marginTop: 'var(--space-5)',
            }}
          >
            {featuredArticles.map((card, i) => (
              <Reveal key={card.slug} delay={Math.min(i, 3) * 80}>
                <ContentCard
                  eyebrow={card.tag.toUpperCase()}
                  title={card.title}
                  subtitle={card.subtitle}
                  href={card.link}
                  tag={card.tag}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 var(--space-8)' }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Recent writing</p>
          </Reveal>
          <ul style={{ listStyle: 'none', margin: 'var(--space-4) 0 0', padding: 0 }}>
            {articles.slice(0, 5).map((article) => (
              <li
                key={article.slug}
                style={{ borderBottom: '1px solid var(--line)', padding: 'var(--space-3) 0' }}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 'var(--space-4)',
                    alignItems: 'baseline',
                    color: 'var(--black)',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ fontWeight: 500, fontSize: 15 }}>{article.title}</span>
                  <span style={{ color: 'var(--ink-secondary)', fontSize: 13, whiteSpace: 'nowrap' }}>
                    {article.tags[0] ?? ''}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div className="container" style={{ maxWidth: '60ch' }}>
          <Reveal>
            <p className="eyebrow">Open source</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.02em', margin: 'var(--space-2) 0 var(--space-3)' }}>
              Built and maintained in public
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: 18, lineHeight: 1.6 }}>
              Palmshed is developed in the open: the code, the design notes, and the mistakes.
              Building in public changed how I work, and the practice matters more than the code.
            </p>
            <div className="action-row" style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-5)' }}>
              <a href={withBase('/open-source/')} className="button button--primary">
                Open source
              </a>
              <a href={site.author.github} className="button button--secondary" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: 'var(--space-7) 0 var(--space-8)' }}>
        <div className="container" style={{ maxWidth: '60ch' }}>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: '-0.02em', margin: 'var(--space-2) 0 var(--space-3)' }}>
              Let&rsquo;s talk about software that lasts
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: 18, lineHeight: 1.6 }}>
              I write about maintainable systems and developer tools, and I&rsquo;m happy to talk
              about both: systems design, code review, or building in public.
            </p>
            <div className="action-row" style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-5)' }}>
              <a href="mailto:hello@palmshed.dev" className="button button--primary">
                Email me
              </a>
              <a href={site.author.github} className="button button--secondary" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
