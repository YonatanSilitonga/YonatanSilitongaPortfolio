'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, GitBranch, ExternalLink, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NeoCard } from '@/components/ui/neo-card'
import { SectionTitle } from '@/components/common/SectionTitle'
import { portfolioData } from '@/lib/portfolio-data'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const tocSections = [
  { id: 'problem', label: 'Permasalahan' },
  { id: 'impact', label: 'Dampak' },
  { id: 'architecture', label: 'Arsitektur' },
  { id: 'challenges', label: 'Tantangan' },
  { id: 'features', label: 'Fitur' },
  { id: 'lessons', label: 'Pelajaran' },
  { id: 'tech', label: 'Teknologi' },
  { id: 'links', label: 'Tautan' },
]

export function ProjectCaseStudyClient({ project }: { project: typeof portfolioData.projects[0] }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 border-b-2 border-border bg-card"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-3">
          <Link href="/#projects">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Portfolio
            </Button>
          </Link>
        </div>
      </motion.nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-primary border-b-2 border-border"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24 space-y-4 text-primary-foreground">
          <span className="inline-block px-3 py-1 text-sm font-extrabold bg-card text-foreground border-2 border-border neo-shadow-sm">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {project.title}
          </h1>
          <p className="text-base md:text-lg opacity-80 max-w-2xl font-medium">
            {project.description}
          </p>
        </div>
      </motion.section>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar TOC */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-20">
              <NeoCard shadow="md" className="p-4">
                <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-3">
                  Daftar Isi
                </p>
                <nav className="space-y-1">
                  {tocSections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-2 py-1.5 text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-accent border-l-2 border-transparent hover:border-border transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </NeoCard>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-16">
            <motion.section
              id="problem"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              <SectionTitle title="Permasalahan" centered={false} number="01" />
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
              <NeoCard shadow="sm" className="p-4 border-l-4 border-l-primary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-extrabold text-foreground">Mengapa ini penting: </span>
                  {project.whyItMatters}
                </p>
              </NeoCard>
            </motion.section>

            <motion.section
              id="impact"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <NeoCard shadow="lg" className="p-6 space-y-3">
                <SectionTitle title="Dampak yang Dihasilkan" centered={false} number="02" />
                <p className="text-lg font-extrabold">{project.impact}</p>
              </NeoCard>
            </motion.section>

            <motion.section
              id="architecture"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              <SectionTitle title="Arsitektur Sistem" centered={false} number="03" />
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.architecture}
              </p>
              <NeoCard shadow="sm" className="p-5 space-y-3">
                <h4 className="font-extrabold">Keputusan Teknis</h4>
                <ul className="space-y-2">
                  {project.techDecisions.map((decision, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="font-extrabold text-foreground shrink-0">•</span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </NeoCard>
            </motion.section>

            <motion.section
              id="challenges"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              <SectionTitle title="Tantangan & Solusi" centered={false} number="04" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <NeoCard shadow="md" className="p-5 space-y-3">
                  <h4 className="font-extrabold">Tantangan</h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-destructive font-extrabold shrink-0">✕</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </NeoCard>
                <NeoCard shadow="md" className="p-5 space-y-3">
                  <h4 className="font-extrabold">Solusi</h4>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-extrabold shrink-0">✓</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </NeoCard>
              </div>
            </motion.section>

            <motion.section
              id="features"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              <SectionTitle title="Fitur Utama" centered={false} number="05" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <NeoCard key={idx} shadow="sm" className="p-4 flex gap-3 items-start">
                    <Star className="w-4 h-4 text-primary fill-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </NeoCard>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="lessons"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              <SectionTitle title="Pelajaran yang Dipetik" centered={false} number="06" />
              <div className="space-y-3">
                {project.lessonsLearned.map((lesson, idx) => (
                  <NeoCard key={idx} shadow="sm" className="p-4">
                    <p className="text-sm text-muted-foreground">{lesson}</p>
                  </NeoCard>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="tech"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              <SectionTitle title="Tumpukan Teknologi" centered={false} number="07" />
              <NeoCard shadow="md" className="p-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-extrabold bg-background border-2 border-border neo-shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </NeoCard>
            </motion.section>

            <motion.section
              id="links"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4 pt-8 border-t-2 border-border"
            >
              <SectionTitle title="Jelajahi Kode" centered={false} number="08" />
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {project.github.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px]">
                    <Button size="lg" className="gap-2 w-full">
                      <GitBranch className="w-4 h-4" />
                      Lihat di GitHub{link.label !== 'GitHub' ? ` (${link.label})` : ''}
                    </Button>
                  </a>
                ))}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="lg" variant="outline" className="gap-2 w-full">
                      <ExternalLink className="w-4 h-4" />
                      Lihat Demo
                    </Button>
                  </a>
                )}
              </div>
            </motion.section>

            <div className="pt-8 border-t-2 border-border">
              <Link href="/#projects">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
