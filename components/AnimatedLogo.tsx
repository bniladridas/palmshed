'use client'

import { usePathname } from 'next/navigation'
import PalmMark from './PalmMark'

export default function AnimatedLogo() {
  const pathname = usePathname()
  return <PalmMark key={pathname} />
}
