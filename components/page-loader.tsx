'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const DIGITS = Array.from({ length: 10 }, (_, i) => i)

export function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-loading', '')

    let current = 0
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 3) + 1
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setCount(100)
        setTimeout(() => setReady(true), 300)
        return
      }
      setCount(current)
    }, 80)

    return () => clearInterval(interval)
  }, [])

  function handleClick() {
    if (!ready) return
    setLoading(false)
  }

  return (
    <AnimatePresence onExitComplete={() => document.documentElement.removeAttribute('data-loading')}>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={handleClick}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-end gap-1 font-mono text-6xl font-bold tabular-nums"
            >
              <span className="text-gradient">
                {String(count).padStart(2, '0')}
              </span>
              <span className="mb-1 text-3xl text-primary">%</span>
            </motion.div>

            {/* Scrolling random digits */}
            <div className="flex gap-1 overflow-hidden font-mono text-xs text-muted-foreground/40 select-none">
              {DIGITS.map((_, col) => (
                <motion.span
                  key={col}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.3 + col * 0.07,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {(count + col * 7) % 10}
                </motion.span>
              ))}
            </div>

            {/* Progress bar */}
            <div className="h-0.5 w-40 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: '0%' }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            {/* Click prompt */}
            <AnimatePresence>
              {ready && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="font-mono text-sm text-muted-foreground"
                >
                  click to continue
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
