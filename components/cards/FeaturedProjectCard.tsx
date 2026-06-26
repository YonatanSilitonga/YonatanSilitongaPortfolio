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
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:shadow-lg cursor-pointer">
          {/* Gambar Proyek / Placeholder */}
          <div className="relative h-48 md:h-56 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
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
              <span className="text-6xl font-bold text-primary/10 select-none">
                {title.charAt(0)}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          </div>

          {/* Konten */}
          <div className="p-6 md:p-8 space-y-4">
            {/* Badge Kategori & Judul */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  {category}
                </span>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
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
                  className="px-2 py-1 text-xs bg-background/50 border border-border/50 rounded text-foreground/70 font-medium"
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
            <div className="pt-4 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              <span>Lihat Studi Kasus</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
