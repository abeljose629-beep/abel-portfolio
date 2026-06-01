'use client'

import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from '@/components/motion/reveal'
import { Counter } from '@/components/motion/counter'
import { SectionHeading } from '@/components/section-heading'
import { profile, stats } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting interfaces with intention"
          description={profile.intro}
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            {profile.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-4 lg:col-span-2"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl border border-border/60 p-6 transition-colors hover:border-primary/50"
              >
                <div className="text-4xl font-bold text-gradient">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
