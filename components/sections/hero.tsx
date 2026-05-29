'use client'

import { motion } from 'framer-motion'
import {
  ArrowDown,
  Download,
  FileCode2,
  Mail,
  MapPin,
} from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/motion/magnetic'
import { Particles } from '@/components/particles'
import { Typewriter } from '@/components/typewriter'
import { profile } from '@/lib/data'

const floatingTech = [
  { label: 'HTML', top: '12%', left: '6%', delay: 0 },
  { label: 'Python', top: '70%', left: '4%', delay: 0.6 },
  { label: 'PUG', top: '20%', right: '8%', delay: 0.3 },
  { label: 'Javascript', top: '74%', right: '6%', delay: 0.9 },
]

const nameLetters = profile.name.split('')

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-16"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.4]" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background"
        aria-hidden
      />
      <Particles count={28} />

      {floatingTech.map((tech) => (
        <motion.div
          key={tech.label}
          className="glass absolute hidden rounded-xl border border-border/50 px-3 py-1.5 font-mono text-xs text-primary lg:block"
          style={{
            top: tech.top,
            left: tech.left,
            right: tech.right,
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5,
            delay: tech.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          {tech.label}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-tr from-primary to-accent opacity-60 blur-2xl" />
          <div className="relative size-32 overflow-hidden rounded-full border-2 border-primary/40 sm:size-36">
            <Image
              src="/profile.png"
              alt="Portrait of Abel Jose"
              fill
              priority
              sizes="144px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-1.5 text-sm text-muted-foreground"
        >
          <MapPin className="size-3.5 text-primary" />
          {profile.location}
          <span className="mx-1 size-1 rounded-full bg-primary" />
          Available for work
        </motion.div>

        <h1 className="flex flex-wrap justify-center text-balance text-5xl font-bold tracking-tight sm:text-7xl">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.7 + i * 0.04,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={letter === ' ' ? 'w-4 sm:w-6' : 'text-gradient'}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-4 flex items-center gap-2 font-mono text-lg text-muted-foreground sm:text-2xl"
        >
          <FileCode2 className="size-5 text-primary" />
          <Typewriter
            words={[
              'Frontend Developer',
              'UI Engineer',
              'Future AI Engineer',
            ]}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.55 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Button asChild size="lg" className="rounded-full glow">
              <a href="#projects">View Projects</a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <a href={profile.resumeUrl} download>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full"
            >
              <a href="#contact">
                <Mail className="size-4" />
                Contact Me
              </a>
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  )
}
