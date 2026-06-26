'use client'

import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Home, ClipboardList } from 'lucide-react'
import { SectionTitle } from '@/components/common/SectionTitle'
import { portfolioData } from '@/lib/portfolio-data'

const experienceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  book: BookOpen,
  graduation: GraduationCap,
  home: Home,
  clipboard: ClipboardList,
}

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-20"
        >
          <SectionTitle
            title="Pengalaman & Kepemimpinan"
            subtitle="Peran di mana saya berkontribusi dan berkembang"
          />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6 relative">
          {/* Garis Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          {/* Item Pengalaman */}
          <div className="space-y-6">
            {portfolioData.experiences.map((exp, idx) => {
              const IconComponent = experienceIcons[exp.icon] || BookOpen
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="relative pl-0 md:pl-24"
                >
                  {/* Titik Timeline */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  {/* Kartu */}
                  <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur space-y-3 hover:border-primary/30 transition-colors group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
