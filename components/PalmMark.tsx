'use client'

import { useLayoutEffect, useRef, useState } from 'react'

export default function PalmMark() {
  const markRef = useRef<SVGSVGElement>(null)
  const [drawn, setDrawn] = useState(false)
  const [hovered, setHovered] = useState(false)

  useLayoutEffect(() => {
    const el = markRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDrawn(true)
      return
    }
    const paths = el.querySelectorAll<SVGPathElement>('path')
    paths.forEach((path) => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
    })
    requestAnimationFrame(() => {
      paths.forEach((path, i) => {
        path.style.transition = `stroke-dashoffset ${500 + i * 80}ms ease ${i * 60}ms`
        path.style.strokeDashoffset = '0'
      })
    })
    const timer = setTimeout(() => setDrawn(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <svg
      ref={markRef}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--green)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: 'transform 300ms ease',
        transform: hovered ? 'translateY(-1px)' : 'none',
      }}
    >
      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
      <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
      <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
      <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
    </svg>
  )
}
