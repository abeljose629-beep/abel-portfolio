import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const siteUrl = 'https://abeljose.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Abel Jose — Frontend Developer',
  description:
    'Abel Jose is a Frontend Developer from Kerala, India, building modern, scalable, and user-friendly web experiences with React, Next.js, and TypeScript.',
  keywords: [
    'Abel Jose',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'UI Developer',
    'Kerala',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Abel Jose' }],
  creator: 'Abel Jose',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Abel Jose — Frontend Developer',
    description:
      'Building modern, scalable, and user-friendly web experiences.',
    siteName: 'Abel Jose Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abel Jose — Frontend Developer',
    description:
      'Building modern, scalable, and user-friendly web experiences.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abel Jose',
    jobTitle: 'Frontend Developer',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Kerala',
      addressCountry: 'India',
    },
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
  }

  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
