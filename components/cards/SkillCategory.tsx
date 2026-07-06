'use client'

import { motion } from 'framer-motion'
import { NeoCard } from '@/components/ui/neo-card'

interface SkillCategoryProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  index: number
}

export function SkillCategory({ title, skills, icon, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="h-full"
    >
      <NeoCard shadow="md" className="overflow-hidden h-full flex flex-col">
        <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground border-b-2 border-border">
          <span className="text-xl">{icon}</span>
          <h3 className="text-sm font-extrabold uppercase tracking-wide">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 p-4 flex-1">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs font-bold bg-background text-foreground border-2 border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </NeoCard>
    </motion.div>
  )
}
