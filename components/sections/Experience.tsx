'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Home, ClipboardList, ZoomIn } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { CertificateLightbox, type CertificateItem } from '@/components/common/CertificateLightbox'
import { NeoCard } from '@/components/ui/neo-card'
import { portfolioData } from '@/lib/portfolio-data'

const experienceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  book: BookOpen,
  graduation: GraduationCap,
  home: Home,
  clipboard: ClipboardList,
}

interface ExperienceProps {
  embedded?: boolean
}

export function Experience({ embedded = false }: ExperienceProps) {
  const [selected, setSelected] = useState<CertificateItem | null>(null)

  return (
    <div id="experience" className={embedded ? '' : 'py-20 md:py-32 px-4 md:px-6'}>
      <div className={embedded ? '' : 'max-w-4xl mx-auto'}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-8"
        >
          <SectionTitle
            number={embedded ? undefined : '04'}
            title="Pengalaman & Kepemimpinan"
            subtitle="Peran di mana saya berkontribusi dan berkembang"
            centered={!embedded}
          />
        </motion.div>

        <div className="space-y-4">
          {portfolioData.experiences.map((exp, idx) => {
            const IconComponent = experienceIcons[exp.icon] || BookOpen
            const num = String(idx + 1).padStart(2, '0')
            const hasCertificate = Boolean(exp.certificateImage)

            const cardContent = (
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="text-xs font-extrabold text-muted-foreground shrink-0">
                    {num}
                  </span>
                  <div className="p-2 bg-primary text-primary-foreground border-2 border-border neo-shadow-sm shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold leading-tight text-left">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed text-left">
                      {exp.description}
                    </p>
                    {hasCertificate && (
                      <p className="flex items-center gap-1.5 text-xs font-bold text-primary pt-2">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Klik untuk lihat sertifikat
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-xs font-bold bg-background border-2 border-border px-2 py-1 shrink-0">
                  {exp.period}
                </span>
              </div>
            )

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                {hasCertificate ? (
                  <motion.button
                    type="button"
                    layoutId={`certificate-experience-${exp.id}`}
                    onClick={() =>
                      setSelected({
                        id: exp.id,
                        layoutKey: `experience-${exp.id}`,
                        title: exp.title,
                        subtitle: exp.period,
                        certificateImage: exp.certificateImage,
                      })
                    }
                    className="w-full text-left"
                  >
                    <NeoCard shadow="md" press className="p-5 space-y-3 cursor-pointer hover:bg-accent/50 transition-colors">
                      {cardContent}
                    </NeoCard>
                  </motion.button>
                ) : (
                  <NeoCard shadow="md" className="p-5 space-y-3">
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
