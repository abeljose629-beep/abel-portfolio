'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { projects } from '@/lib/data'

const allTags = [
  'All',
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
]

export function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter],
  )

  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A selection of projects where design meets engineering."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-all',
                filter === tag
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border/60 text-muted-foreground hover:border-primary/50 hover:text-foreground',
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group glass overflow-hidden rounded-2xl border border-border/60 transition-colors hover:border-primary/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                  <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="glass flex size-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:text-primary"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="glass flex size-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
