import React from 'react'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { ImageResponse } from 'next/dist/compiled/@vercel/og/index.node.js'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://palmshed.dev'

const logo = React.createElement(
  'div',
  { style: { display: 'flex', alignItems: 'center', gap: 16 } },
  React.createElement(
    'svg',
    {
      width: 44,
      height: 44,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: '#3fb950',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    React.createElement('path', { d: 'M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4' }),
    React.createElement('path', { d: 'M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3' }),
    React.createElement('path', { d: 'M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35' }),
    React.createElement('path', { d: 'M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14' }),
  ),
  React.createElement(
    'span',
    { style: { fontSize: 40, fontWeight: 600, color: '#e6e6e3' } },
    'Palmshed',
  ),
)

const title = React.createElement(
  'div',
  { style: { display: 'flex', flexDirection: 'column' } },
  React.createElement(
    'div',
    {
      style: {
        fontSize: 24,
        color: '#3fb950',
        fontWeight: 600,
        letterSpacing: 4,
        textTransform: 'uppercase',
        marginBottom: 16,
      },
    },
    'Software Engineer · Open Source · Developer Tools',
  ),
  React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 72,
        fontWeight: 600,
        color: '#e6e6e3',
        lineHeight: 1.05,
      },
    },
    React.createElement('span', null, 'Software that outlasts'),
    React.createElement('span', null, 'its authors.'),
  ),
)

const footer = React.createElement(
  'div',
  { style: { display: 'flex', justifyContent: 'space-between', color: '#8a8a87', fontSize: 24 } },
  React.createElement('span', null, siteUrl.replace('https://', '')),
  React.createElement('span', null, 'Maintainable systems · developer tools · open source'),
)

const element = React.createElement(
  'div',
  {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 64,
      background: '#111110',
    },
  },
  logo,
  title,
  footer,
)

const image = await new ImageResponse(element, { width: 1200, height: 630 })
const buffer = Buffer.from(await image.arrayBuffer())
const dest = join(process.cwd(), 'public', 'og.png')
writeFileSync(dest, buffer)
console.log(`generated ${dest} (${buffer.length} bytes)`)
