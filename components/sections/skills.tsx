'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { skillCategories } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          description="The technologies and tools I use to design and build modern web experiences."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <Reveal key={category.title} delay={ci * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass h-full rounded-2xl border border-border/60 p-6 transition-colors hover:border-primary/50"
              >
                <h3 className="mb-5 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
