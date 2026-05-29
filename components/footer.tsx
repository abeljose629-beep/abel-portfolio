import { profile, socialLinks } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#home" className="font-mono text-lg font-bold">
            <span className="text-gradient">Abel </span>
            <span className="text-foreground text-gradient">Jose</span>
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &
            Framer Motion.
          </p>
        </div>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
