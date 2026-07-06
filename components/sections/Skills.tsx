'use client'

import { motion } from 'framer-motion'
import { Server, Smartphone, Brain, Wrench } from 'lucide-react'
import { SkillCategory } from '@/components/cards/SkillCategory'
import { SectionTitle } from '@/components/common/SectionTitle'

const skillsWithIcons = [
  {
    title: 'Rekayasa Backend',
    skills: ['Laravel', 'Golang', 'REST API', 'Autentikasi', 'Desain Database'],
    icon: <Server className="w-6 h-6 text-foreground" />,
  },
  {
    title: 'Frontend & Mobile',
    skills: ['Flutter', 'React', 'JavaScript', 'Bootstrap', 'Desain Responsif'],
    icon: <Smartphone className="w-6 h-6 text-foreground" />,
  },
  {
    title: 'Ilmu Data & AI',
    skills: ['Python', 'Scikit-Learn', 'Isolation Forest', 'KMeans', 'Feature Engineering'],
    icon: <Brain className="w-6 h-6 text-foreground" />,
  },
  {
    title: 'Sistem & Alat',
    skills: ['MySQL', 'MongoDB', 'Docker', 'Git', 'Linux'],
    icon: <Wrench className="w-6 h-6 text-foreground" />,
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-20"
        >
          <SectionTitle
            title="Keahlian Teknis"
            subtitle="Dikelompokkan berdasarkan domain keahlian"
          />
        </motion.div>

        {/* Grid Keahlian */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillsWithIcons.map((category, idx) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              index={idx}
            />
          ))}
        </div>

        {/* Catatan Kemahiran */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 p-6 rounded-none bg-card border-2 border-border text-center shadow-[8px_8px_0px_var(--shadow-color)]"
        >
          <p className="text-muted-foreground">
            Keahlian dikelompokkan berdasarkan domain rekayasa, bukan teknologi individual —
            mencerminkan pendekatan saya dalam memecahkan masalah di berbagai lapisan teknologi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

