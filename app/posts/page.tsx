import Link from 'next/link'
import { getPosts, formatDate } from '@/lib/content'
import Badge from '@/components/Badge'

export const metadata = {
  title: 'LinkedIn Posts · Palmshed',
  description: 'Short posts on engineering practice, ready to publish as-is.',
  alternates: { canonical: '/posts' },
}

export default function PostsPage() {
  const posts = getPosts()

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      <p className="eyebrow">Social</p>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 38, letterSpacing: '-0.02em', margin: 'var(--space-2) 0 var(--space-3)' }}>
        LinkedIn posts
      </h1>
      <p style={{ color: 'var(--ink-secondary)', fontSize: 17, lineHeight: 1.6, maxWidth: '52ch' }}>
        Short posts written to be published as-is. Cross-posted from the articles or standalone
        notes on engineering practice.
      </p>

      <ul style={{ listStyle: 'none', margin: 'var(--space-6) 0 0', padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.slug}
            style={{ border: '1px solid var(--line)', borderRadius: 10, padding: 'var(--space-5)', marginBottom: 'var(--space-4)' }}
          >
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
              <Badge tone="green">{post.topic}</Badge>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 19, letterSpacing: '-0.01em', margin: 0 }}>
              <Link href={`/posts/${post.slug}`} style={{ color: 'var(--black)', textDecoration: 'none' }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: 14, marginTop: 'var(--space-2)', lineHeight: 1.5 }}>
              {post.hook}
            </p>
            <p style={{ color: 'var(--ink-secondary)', fontSize: 13, margin: 'var(--space-2) 0 0' }}>
              {formatDate(post.date)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
