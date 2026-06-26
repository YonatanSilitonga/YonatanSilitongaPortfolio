'use client'

import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'

interface AchievementCardProps {
  title: string
  year: string
  description: string
  icon: string
  delay?: number
}

const achievementIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  trophy: Trophy,
}

export function AchievementCard({
  title,
  year,
  description,
  icon,
  delay = 0,
}: AchievementCardProps) {
  const IconComponent = achievementIcons[icon] || Award
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all text-center"
    >
      <div className="flex justify-center text-primary mb-3">
        <IconComponent className="w-10 h-10" />
      </div>
      <h3 className="text-lg font-semibold mb-1 text-foreground">{title}</h3>
      <p className="text-sm text-primary font-medium mb-3">{year}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  )
}
