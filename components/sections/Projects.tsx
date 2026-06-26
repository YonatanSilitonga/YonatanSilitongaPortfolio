'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/SectionTitle'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { portfolioData } from '@/lib/portfolio-data'
import { Input } from '@/components/ui/input'

export function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'all',
    'Full Stack',
    'Web',
    'Data Science',
    'Desktop',
    'AI/ML',
  ]

  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === 'all' || project.role.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Proyek Pilihan"
          subtitle="Menampilkan karya terbaik dan solusi teknis saya"
        />

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10 space-y-4"
        >
          <Input
            placeholder="Cari proyek..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto block"
          />

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {category === 'all' ? 'Semua' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-muted-foreground"
          >
            <p>Tidak ada proyek yang cocok dengan kriteria pencarian Anda.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
