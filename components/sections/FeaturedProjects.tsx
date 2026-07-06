'use client'

import { motion } from 'framer-motion'
import { FeaturedProjectCard } from '@/components/cards/FeaturedProjectCard'
import { portfolioData } from '@/lib/portfolio-data'
import { SectionTitle } from '@/components/common/SectionTitle'
import { cn } from '@/lib/utils'

function getProjectVariant(index: number): 'featured' | 'compact' {
  if (index === 0) return 'featured'
  return 'compact'
}

function getProjectGridClass(index: number): string {
  if (index === 0) return 'md:col-span-2 md:row-span-2'
  return 'md:col-span-1'
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 md:mb-16 space-y-4"
        >
          <SectionTitle
            number="02"
            title="Proyek Unggulan"
            subtitle="Eksplorasi mendalam tentang tantangan dan solusi rekayasa"
          />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto text-center">
            Kumpulan proyek di mana saya menangani masalah kompleks — mulai dari sistem
            full-stack hingga machine learning dan ilmu data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
          {portfolioData.projects.map((project, idx) => (
            <div key={project.id} className={cn('h-full', getProjectGridClass(idx))}>
              <FeaturedProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                impact={project.impact}
                technologies={project.technologies}
                image={project.image}
                index={idx}
                variant={getProjectVariant(idx)}
              />
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center text-sm text-muted-foreground font-medium"
        >
          Klik pada proyek untuk membaca studi kasus lengkap.
        </motion.p>
      </div>
    </section>
  )
}
