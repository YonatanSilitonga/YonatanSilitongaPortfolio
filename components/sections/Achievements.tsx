'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy, ZoomIn } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { CertificateLightbox, type CertificateItem } from '@/components/common/CertificateLightbox'
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
  const [selected, setSelected] = useState<CertificateItem | null>(null)

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
            const hasCertificate = Boolean(achievement.certificateImage)
            const cardContent = (
              <>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary text-primary-foreground border-2 border-border neo-shadow-sm shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-extrabold text-base leading-tight text-left">
                        {achievement.title}
                      </h3>
                      <span className="text-xs font-bold bg-background border-2 border-border px-2 py-0.5 shrink-0">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed text-left">
                      {achievement.description}
                    </p>
                    {hasCertificate && (
                      <p className="flex items-center gap-1.5 text-xs font-bold text-primary pt-1">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Klik untuk lihat sertifikat
                      </p>
                    )}
                  </div>
                </div>
              </>
            )

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {hasCertificate ? (
                  <motion.button
                    type="button"
                    layoutId={`certificate-achievement-${achievement.id}`}
                    onClick={() =>
                      setSelected({
                        id: achievement.id,
                        layoutKey: `achievement-${achievement.id}`,
                        title: achievement.title,
                        subtitle: achievement.year,
                        certificateImage: achievement.certificateImage,
                      })
                    }
                    className="w-full text-left"
                  >
                    <NeoCard shadow="md" press className="p-5 cursor-pointer hover:bg-accent/50 transition-colors">
                      {cardContent}
                    </NeoCard>
                  </motion.button>
                ) : (
                  <NeoCard shadow="md" className="p-5">
                    {cardContent}
                  </NeoCard>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      <CertificateLightbox
        item={selected}
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}
