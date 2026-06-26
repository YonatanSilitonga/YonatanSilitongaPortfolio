'use client'

import { motion } from 'framer-motion'

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
      className="space-y-4 p-6 md:p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:border-primary/30 transition-all"
    >
      {/* Header with Icon */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 transition-colors hover:bg-primary/20"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
