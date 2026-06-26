'use client'

import { motion } from 'framer-motion'
import { GitBranch, ExternalLink } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

interface ProjectCardProps {
  title: string
  role: string
  description: string
  problem: string
  solutions: string[]
  technologies: string[]
  features: string[]
  github: string
  demo: string
  image?: string
  delay?: number
}

export function ProjectCard({
  title,
  role,
  description,
  problem,
  solutions,
  technologies,
  features,
  github,
  demo,
  image,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -4 }}
      className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
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
        {/* Teks inisial jika gambar gagal dimuat atau tidak ada */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-6xl font-bold text-primary/10 select-none">
            {title.charAt(0)}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-primary font-semibold">{role}</p>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <p className="text-muted-foreground text-sm mt-2">{description}</p>
        </div>

        <div className="space-y-2 text-sm">
          <div>
            <p className="font-semibold text-foreground">Problem</p>
            <p className="text-muted-foreground">{problem}</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Solution</p>
            <p className="text-muted-foreground">{solutions?.[0] || 'Tidak ada solusi yang terdaftar'}</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-sm mb-2">Key Features</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature) => (
              <li key={feature} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs bg-primary/10 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'default', size: 'sm', className: 'flex-1' })}
          >
            <GitBranch className="w-4 h-4 mr-2" />
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'outline', size: 'sm', className: 'flex-1' })}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
