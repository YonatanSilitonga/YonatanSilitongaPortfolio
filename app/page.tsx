'use client'

import { Header } from '@/components/layout/Header'
import { ScrollProgress } from '@/components/common/ScrollProgress'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Achievements } from '@/components/sections/Achievements'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
