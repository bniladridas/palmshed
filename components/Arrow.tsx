interface ArrowProps {
  direction?: 'right' | 'left'
  size?: number
  className?: string
}

export default function Arrow({ direction = 'right', size = 14, className }: ArrowProps) {
  const rotate = direction === 'left' ? 180 : 0
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 200ms ease', flexShrink: 0 }}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}
