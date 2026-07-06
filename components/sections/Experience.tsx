'use client'

import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Home, ClipboardList } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
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
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <NeoCard shadow="md" press className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <span className="text-xs font-extrabold text-muted-foreground shrink-0">
                        {num}
                      </span>
                      <div className="p-2 bg-primary text-primary-foreground border-2 border-border neo-shadow-sm shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-extrabold leading-tight">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-background border-2 border-border px-2 py-1 shrink-0">
                      {exp.period}
                    </span>
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
