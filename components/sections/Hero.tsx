'use client'

import { motion } from 'framer-motion'
import { GitBranch, Download, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProfileImage } from '@/components/common/ProfileImage'
import { RoleSwitcher } from '@/components/common/RoleSwitcher'
import { portfolioData } from '@/lib/portfolio-data'

const stats = [
  { value: `${portfolioData.projects.length}+`, label: 'Proyek Selesai' },
  { value: portfolioData.quickFacts.find(f => f.label === 'IPK')?.value.split('/')[0] || '3.68', label: 'IPK Akademik' },
  { value: `${portfolioData.achievements.length}`, label: 'Penghargaan' },
  { value: `${portfolioData.experiences.length}`, label: 'Peran Kepemimpinan' },
]

const TAGLINE = 'Membangun sistem yang skalabel, aplikasi cerdas, dan solusi perangkat lunak nyata.'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Kolom Kiri - Konten */}
          <div className="space-y-8">
            {/* Nama dan Judul */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {portfolioData.personal.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                Mahasiswa Rekayasa Perangkat Lunak Terapan di Institut Teknologi Del
              </p>
            </motion.div>

            {/* Role Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <RoleSwitcher />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-balance leading-relaxed text-foreground"
            >
              {TAGLINE}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-none bg-card border-2 border-border">
                  <div className="text-2xl font-extrabold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tombol CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <a href="#projects">
                <Button size="lg" className="gap-2 font-bold text-primary-foreground bg-primary border-2 border-border rounded-none shadow-[4px_4px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  Lihat Proyek
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <Button size="lg" variant="outline" className="gap-2 font-bold text-foreground bg-card border-2 border-border rounded-none shadow-[4px_4px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <Download className="w-4 h-4" />
                  Unduh CV
                </Button>
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost" className="gap-2 font-semibold text-foreground hover:bg-accent rounded-none">
                  <GitBranch className="w-4 h-4" />
                  GitHub
                </Button>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost" className="gap-2 font-semibold text-foreground hover:bg-accent rounded-none">
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Kolom Kanan - Foto Profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <ProfileImage />
          </motion.div>
        </motion.div>

        {/* Indikator Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-border rounded-full flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 rounded-full bg-foreground"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
