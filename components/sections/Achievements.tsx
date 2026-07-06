'use client'

import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { NeoCard } from '@/components/ui/neo-card'
import { portfolioData } from '@/lib/portfolio-data'

const achievementIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  trophy: Trophy,
}

interface AchievementsProps {
  embedded?: boolean
}

export function Achievements({ embedded = false }: AchievementsProps) {
  return (
    <div id="achievements" className={embedded ? '' : 'py-20 md:py-32 px-4 md:px-6'}>
      <div className={embedded ? '' : 'max-w-6xl mx-auto'}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-8"
        >
          <SectionTitle
            number={embedded ? undefined : '05'}
            title="Prestasi & Penghargaan"
            subtitle="Pengakuan atas kerja keras dan dedikasi"
            centered={!embedded}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {portfolioData.achievements.map((achievement, idx) => {
            const IconComponent = achievementIcons[achievement.icon] || Award
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <NeoCard shadow="md" press className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary text-primary-foreground border-2 border-border neo-shadow-sm shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-extrabold text-base leading-tight">
                          {achievement.title}
                        </h3>
                        <span className="text-xs font-bold bg-background border-2 border-border px-2 py-0.5 shrink-0">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
