'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CursorGradient() {
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const springX = useSpring(x, { stiffness: 60, damping: 20 })
  const springY = useSpring(y, { stiffness: 60, damping: 20 })

  useEffect(() => {
    function onMove(e: MouseEvent) {
      x.set(e.clientX - 300)
      y.set(e.clientY - 300)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-[600px] w-[600px] rounded-full opacity-40 blur-[120px] md:block"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle, color-mix(in oklch, var(--primary) 60%, transparent) 0%, transparent 70%)',
      }}
    />
  )
}
