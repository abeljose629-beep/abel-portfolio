'use client'

import { useEffect, useRef, useState } from 'react'
import {
  animate,
  useInView,
  useMotionValue,
} from 'framer-motion'

type CounterProps = {
  to: number
  suffix?: string
  duration?: number
}

export function Counter({ to, suffix = '', duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      setDisplay(Math.round(latest))
    })
    return unsubscribe
  }, [count])

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
      })
      return controls.stop
    }
  }, [inView, to, count, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
