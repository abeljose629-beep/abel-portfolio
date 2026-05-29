'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { certifications } from '@/lib/data'

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & learning"
          description="Certifications that back up my skills and commitment to continuous growth."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass flex h-full items-start gap-4 rounded-2xl border border-border/60 p-6 transition-colors hover:border-primary/50"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <Award className="size-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold leading-snug">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.provider} · {cert.date}
                  </p>
                  {/* <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="mt-3 h-auto px-0 text-primary hover:bg-transparent hover:text-accent"
                  >
                    <a href={cert.verifyUrl} target="_blank" rel="noreferrer">
                      Verify
                      <ExternalLink className="size-3.5" />
                    </a>
                  </Button> */}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
