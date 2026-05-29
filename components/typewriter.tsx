'use client'

import { useEffect, useState } from 'react'

type TypewriterProps = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1500,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseTime)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          )
        },
        deleting ? deletingSpeed : typingSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="text-foreground">
      {text}
      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-primary align-middle sm:h-6" />
    </span>
  )
}
