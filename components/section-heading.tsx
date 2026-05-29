import { Reveal } from '@/components/motion/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto mb-14 max-w-2xl text-center'
          : 'mb-14 max-w-2xl'
      }
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 font-mono text-sm font-medium text-primary">
          <span className="h-px w-6 bg-primary" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
