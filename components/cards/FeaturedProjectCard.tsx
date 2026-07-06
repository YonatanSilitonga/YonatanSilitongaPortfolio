'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface FeaturedProjectCardProps {
  id: number
  title: string
  category: string
  impact: string
  technologies: string[]
  image?: string
  index: number
}

export function FeaturedProjectCard({
  id,
  title,
  category,
  impact,
  technologies,
  image,
  index,
}: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group"
    >
      <Link href={`/projects/${id}`}>
        <div className="relative overflow-hidden bg-card border-2 border-border shadow-[8px_8px_0px_var(--shadow-color)] hover:shadow-none transition-all duration-200 hover:translate-x-2 hover:translate-y-2 cursor-pointer rounded-none">
          {/* Gambar Proyek / Placeholder */}
          <div className="relative h-48 md:h-56 w-full overflow-hidden bg-accent border-b-2 border-border flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            ) : null}
            {/* Placeholder teks jika gambar tidak ada */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-foreground/10 select-none">
                {title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Konten */}
          <div className="p-6 md:p-8 space-y-4">
            {/* Badge Kategori & Judul */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-bold bg-card text-foreground border-2 border-border shadow-[2px_2px_0px_var(--shadow-color)] rounded-none">
                  {category}
                </span>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-foreground transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-balance">{title}</h3>
            </div>

            {/* Pernyataan Dampak */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {impact}
            </p>

            {/* Teknologi */}
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-card border-2 border-border rounded-none font-medium"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 5 && (
                <span className="px-2 py-1 text-xs text-muted-foreground font-medium">
                  +{technologies.length - 5} lainnya
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-primary-foreground bg-primary font-bold text-sm border-2 border-border px-4 py-2 rounded-none group-hover:gap-3 transition-all duration-300 shadow-[2px_2px_0px_var(--shadow-color)]">
              <span>Lihat Studi Kasus</span>
                <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        </div>
      </Link>
    </motion.div>
  )
}

