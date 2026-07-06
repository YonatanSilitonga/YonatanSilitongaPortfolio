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
      className="group bg-card border-2 border-border shadow-[8px_8px_0px_var(--shadow-color)] hover:shadow-none transition-all duration-200 hover:translate-x-2 hover:translate-y-2 rounded-none overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden bg-accent border-b-2 border-border flex items-center justify-center">
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
          <span className="text-6xl font-bold text-foreground/10 select-none">
            {title.charAt(0)}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-foreground font-bold">{role}</p>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <p className="text-muted-foreground text-sm mt-2">{description}</p>
        </div>

        <div className="space-y-2 text-sm">
          <div>
            <p className="font-bold text-foreground">Problem</p>
            <p className="text-muted-foreground">{problem}</p>
          </div>
          <div>
            <p className="font-bold text-foreground">Solution</p>
            <p className="text-muted-foreground">{solutions?.[0] || 'Tidak ada solusi yang terdaftar'}</p>
          </div>
        </div>

        <div>
          <p className="font-bold text-sm mb-2">Key Features</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start">
                <span className="mr-2 font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-none text-xs bg-card border-2 border-border text-foreground font-bold"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-primary-foreground bg-primary border-2 border-border rounded-none shadow-[4px_4px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <GitBranch className="w-4 h-4 mr-2" />
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-foreground bg-card border-2 border-border rounded-none shadow-[4px_4px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

