'use client'

import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { portfolioData } from '@/lib/portfolio-data'

const achievementIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  trophy: Trophy,
}

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 px-4 md:px-6 bg-card/20">
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
            title="Prestasi & Penghargaan"
            subtitle="Pengakuan atas kerja keras dan dedikasi"
          />
        </motion.div>

        {/* Grid Prestasi */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {portfolioData.achievements.map((achievement, idx) => {
            const IconComponent = achievementIcons[achievement.icon] || Award
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="group p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:border-primary/40 hover:shadow-lg transition-all w-full md:w-80"
              >
                {/* Ikon */}
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                  <IconComponent className="w-10 h-10" />
                </div>

                {/* Konten */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg leading-tight">{achievement.title}</h3>
                  <p className="text-sm text-primary font-semibold">{achievement.year}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
