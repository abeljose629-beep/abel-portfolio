'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { experiences } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          description="Roles where I've grown as a developer and delivered real impact."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-1/2"
            aria-hidden
          />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.role}
                direction={i % 2 === 0 ? 'right' : 'left'}
              >
                <div
                  className={`relative grid gap-4 sm:grid-cols-2 ${
                    i % 2 === 0 ? '' : 'sm:[direction:rtl]'
                  }`}
                >
                  <span className="absolute left-4 top-2 z-10 flex size-3 -translate-x-1/2 items-center justify-center sm:left-1/2">
                    <span className="size-3 rounded-full bg-primary ring-4 ring-background" />
                  </span>

                  <div
                    className={`pl-12 sm:pl-0 ${
                      i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:[direction:ltr]'
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass rounded-2xl border border-border/60 p-6 text-left transition-colors hover:border-primary/50"
                    >
                      <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs text-primary">
                        <Briefcase className="size-3.5" />
                        {exp.period}
                      </div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden sm:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
