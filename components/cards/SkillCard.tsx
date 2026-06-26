'use client'

import { motion } from 'framer-motion'

interface SkillCardProps {
  category: string
  skills: string[]
  delay?: number
}

export function SkillCard({ category, skills, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-colors"
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
