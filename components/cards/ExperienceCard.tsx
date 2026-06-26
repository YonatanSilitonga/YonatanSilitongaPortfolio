'use client'

import { motion } from 'framer-motion'

interface ExperienceCardProps {
  title: string
  period: string
  company: string
  responsibilities: string[]
  delay?: number
}

export function ExperienceCard({
  title,
  period,
  company,
  responsibilities,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative pl-8 pb-8"
    >
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

      <div className="space-y-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>

        <p className="text-primary font-medium text-sm">{company}</p>

        <ul className="space-y-1 text-sm text-muted-foreground">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2">→</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
