'use client'

import { motion } from 'framer-motion'
import { GitBranch, Download, ExternalLink, ArrowRight, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NeoCard } from '@/components/ui/neo-card'
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
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 pb-20"
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-primary bg-primary/20 animate-float-1" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full border-4 border-foreground bg-secondary/20 animate-float-2" />
        <div className="absolute bottom-32 left-1/4 w-28 h-28 border-4 border-primary bg-primary/10 rotate-45 animate-float-3" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-4 md:grid-cols-6 gap-4"
        >
          {/* Nama */}
          <NeoCard
            shadow="lg"
            className="col-span-4 md:col-span-4 p-6 md:p-8 flex flex-col justify-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-none tracking-tight">
              {portfolioData.personal.name}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-3 font-medium">
              Mahasiswa Rekayasa Perangkat Lunak Terapan — Institut Teknologi Del
            </p>
          </NeoCard>

          {/* Status badge */}
          <NeoCard
            accent
            shadow="lg"
            className="col-span-2 md:col-span-2 p-4 md:p-6 flex flex-col justify-center items-center text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Status</span>
            <p className="text-sm md:text-base font-extrabold mt-2 leading-tight">
              Open to Internship
            </p>
          </NeoCard>

          {/* Role switcher */}
          <NeoCard
            shadow="md"
            className="col-span-4 md:col-span-3 p-5 md:p-6 flex items-center"
          >
            <RoleSwitcher />
          </NeoCard>

          {/* Foto profil */}
          <div className="col-span-4 md:col-span-3 flex justify-center md:justify-end items-center">
            <ProfileImage className="scale-90 md:scale-100" />
          </div>

          {/* Tagline */}
          <NeoCard
            shadow="sm"
            className="col-span-full p-4 md:p-5"
          >
            <p className="text-base md:text-lg font-medium text-balance leading-relaxed">
              {TAGLINE}
            </p>
          </NeoCard>

          {/* Stats */}
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="col-span-2 md:col-span-1"
            >
              <NeoCard shadow="sm" className="p-3 md:p-4 text-center h-full">
                <div className="text-xl md:text-2xl font-extrabold">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground mt-1 font-bold uppercase">
                  {stat.label}
                </div>
              </NeoCard>
            </motion.div>
          ))}

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="col-span-full flex flex-wrap gap-3 pt-2"
          >
            <a href="#projects">
              <Button size="lg" className="gap-2">
                Lihat Proyek
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="/resume.pdf" download>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Unduh CV
              </Button>
            </a>
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="gap-2">
                <GitBranch className="w-4 h-4" />
                GitHub
              </Button>
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator brutal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-border bg-card neo-shadow-sm neo-press animate-bounce-arrow"
            aria-label="Scroll ke bawah"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
