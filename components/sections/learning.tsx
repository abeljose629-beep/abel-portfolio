'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Rocket } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { learningPath } from '@/lib/data'

export function Learning() {
  return (
    <section id="learning" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="AI / ML Journey"
          title="Always learning, always growing"
          description="Beyond frontend, I'm building a foundation in AI and machine learning — with a clear goal of becoming an AI Engineer."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {learningPath.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass h-full rounded-2xl border border-border/60 p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BrainCircuit className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-5">
                  <div className="mb-1.5 flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="glass mt-6 flex flex-col items-center gap-3 rounded-2xl border border-primary/30 p-8 text-center sm:flex-row sm:justify-center sm:gap-4">
            <Rocket className="size-6 text-primary" />
            <p className="text-pretty text-lg font-medium">
              Future Goal:{' '}
              <span className="text-gradient font-semibold">AI Engineer</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
