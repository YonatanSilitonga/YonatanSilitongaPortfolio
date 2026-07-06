'use client'

import { motion } from 'framer-motion'
import { Server, Smartphone, Brain, Wrench } from 'lucide-react'
import { SkillCategory } from '@/components/cards/SkillCategory'
import { SectionTitle } from '@/components/common/SectionTitle'
import { NeoCard } from '@/components/ui/neo-card'

const skillsWithIcons = [
  {
    title: 'Rekayasa Backend',
    skills: ['Laravel', 'Golang', 'REST API', 'Autentikasi', 'Desain Database'],
    icon: <Server className="w-5 h-5" />,
  },
  {
    title: 'Frontend & Mobile',
    skills: ['Flutter', 'React', 'JavaScript', 'Bootstrap', 'Desain Responsif'],
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    title: 'Ilmu Data & AI',
    skills: ['Python', 'Scikit-Learn', 'Isolation Forest', 'KMeans', 'Feature Engineering'],
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: 'Sistem & Alat',
    skills: ['MySQL', 'MongoDB', 'Docker', 'Git', 'Linux'],
    icon: <Wrench className="w-5 h-5" />,
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 md:mb-16"
        >
          <SectionTitle
            number="03"
            title="Keahlian Teknis"
            subtitle="Dikelompokkan berdasarkan domain keahlian"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10"
        >
          <NeoCard shadow="lg" className="p-5 text-center">
            <p className="text-sm text-muted-foreground font-medium">
              Keahlian dikelompokkan berdasarkan domain rekayasa, bukan teknologi individual —
              mencerminkan pendekatan saya dalam memecahkan masalah di berbagai lapisan teknologi.
            </p>
          </NeoCard>
        </motion.div>
      </div>
    </section>
  )
}
