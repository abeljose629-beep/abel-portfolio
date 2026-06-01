import { PageLoader } from '@/components/page-loader'
import { CursorGradient } from '@/components/cursor-gradient'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Learning } from '@/components/sections/learning'
import { Certifications } from '@/components/sections/certifications'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <PageLoader />
      <div className="page-content">
        <CursorGradient />
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Learning />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
