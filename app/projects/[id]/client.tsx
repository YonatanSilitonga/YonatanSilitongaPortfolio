'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, GitBranch, ExternalLink, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/lib/portfolio-data'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectCaseStudyClient({ project }: { project: typeof portfolioData.projects[0] }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigasi */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Portfolio
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Banner Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background border-b border-border/50"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-32 space-y-6">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary inline-block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Konten Utama */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
        {/* Seksi Masalah */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Permasalahan</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.problem}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-primary/50 pl-6">
            <span className="font-semibold text-foreground">Mengapa ini penting: </span>
            {project.whyItMatters}
          </p>
        </motion.section>

        {/* Seksi Dampak */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6 p-8 rounded-lg bg-primary/5 border border-primary/10"
        >
          <h3 className="text-2xl font-bold">Dampak yang Dihasilkan</h3>
          <p className="text-lg font-semibold text-primary">{project.impact}</p>
        </motion.section>

        {/* Seksi Arsitektur */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Arsitektur Sistem</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.architecture}
          </p>
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Keputusan Teknis</h4>
            <ul className="space-y-2">
              {project.techDecisions.map((decision, idx) => (
                <li key={idx} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Seksi Tantangan */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Tantangan & Solusi</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Tantangan yang Dihadapi</h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <span className="text-red-500 font-bold flex-shrink-0">✕</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Solusi yang Diterapkan</h4>
              <ul className="space-y-2">
                {project.solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Seksi Fitur Utama */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Fitur Utama</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border/50 bg-card/50 flex gap-3 items-start"
              >
                <Star className="w-4 h-4 text-primary fill-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Seksi Pelajaran */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Pelajaran yang Dipetik</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <div className="space-y-3">
            {project.lessonsLearned.map((lesson, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                <p className="text-muted-foreground">{lesson}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Seksi Teknologi */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Tumpukan Teknologi</h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Tautan */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6 pt-12 border-t border-border/50"
        >
          <h3 className="text-2xl font-bold">Jelajahi Kode</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2 w-full md:w-auto">
                <GitBranch className="w-4 h-4" />
                Lihat di GitHub
              </Button>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2 w-full md:w-auto">
                  <ExternalLink className="w-4 h-4" />
                  Lihat Demo
                </Button>
              </a>
            )}
          </div>
        </motion.section>

        {/* Kembali ke Portfolio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          className="pt-12 border-t border-border/50"
        >
          <Link href="/#projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
