'use client'

import { motion } from 'framer-motion'
import { FeaturedProjectCard } from '@/components/cards/FeaturedProjectCard'
import { portfolioData } from '@/lib/portfolio-data'
import { SectionTitle } from '@/components/common/SectionTitle'

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 md:px-6 bg-background/50 border-y border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-20 space-y-4"
        >
          <SectionTitle
            title="Proyek Unggulan"
            subtitle="Eksplorasi mendalam tentang tantangan dan solusi rekayasa"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            Kumpulan proyek di mana saya menangani masalah kompleks — mulai dari sistem
            full-stack hingga machine learning dan ilmu data. Setiap studi kasus menyoroti
            keputusan teknis, tantangan yang diatasi, dan dampak yang dihasilkan.
          </p>
        </motion.div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioData.projects.map((project, idx) => (
            <FeaturedProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              impact={project.impact}
              technologies={project.technologies}
              image={project.image}
              index={idx}
            />
          ))}
        </div>

        {/* CTA Bawah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Klik pada proyek mana pun untuk membaca studi kasus lengkap dengan analisis masalah,
            keputusan arsitektur, dan pelajaran yang dipetik.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
