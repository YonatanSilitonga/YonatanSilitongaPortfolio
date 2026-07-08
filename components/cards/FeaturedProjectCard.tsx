'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NeoCard } from '@/components/ui/neo-card'
import { cn } from '@/lib/utils'

interface FeaturedProjectCardProps {
  id: number
  title: string
  category: string
  impact: string
  technologies: string[]
  image?: string
  index: number
  variant?: 'featured' | 'compact'
}

export function FeaturedProjectCard({
  id,
  title,
  category,
  impact,
  technologies,
  image,
  index,
  variant = 'compact',
}: FeaturedProjectCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'group h-full',
        isFeatured && 'md:col-span-2 md:row-span-2',
      )}
    >
      <Link href={`/projects/${id}`} className="block h-full">
        <NeoCard
          shadow="lg"
          press
          className="relative overflow-hidden h-full flex flex-col cursor-pointer"
        >
          {isFeatured && (
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-primary-foreground border-2 border-border neo-shadow font-extrabold text-xs uppercase animate-badge-bounce z-10">
              FEATURED
            </div>
          )}

          {/* Animated border on hover */}
          <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 group-hover:animate-border-draw pointer-events-none z-10" />

          <div
            className={cn(
              'relative w-full overflow-hidden bg-accent border-b-2 border-border flex items-center justify-center',
              isFeatured ? 'h-56 md:h-72' : 'h-36 md:h-40',
            )}
          >
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
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span
                className={cn(
                  'font-extrabold text-foreground/10 select-none',
                  isFeatured ? 'text-8xl' : 'text-5xl',
                )}
              >
                {title.charAt(0)}
              </span>
            </div>
          </div>

          <div className={cn('flex flex-col flex-1', isFeatured ? 'p-6 md:p-8 space-y-4' : 'p-4 space-y-3')}>
            <div className="flex items-center justify-between gap-2">
              <span className="px-2 py-0.5 text-xs font-bold bg-primary text-primary-foreground border-2 border-border neo-shadow-sm">
                {category}
              </span>
              <ArrowRight className="w-4 h-4 text-foreground" />
            </div>

            <h3
              className={cn(
                'font-extrabold text-balance',
                isFeatured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl',
              )}
            >
              {title}
            </h3>

            {isFeatured && (
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                {impact}
              </p>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {technologies.slice(0, isFeatured ? 5 : 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-background border-2 border-border font-bold"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > (isFeatured ? 5 : 3) && (
                <span className="px-2 py-0.5 text-xs text-muted-foreground font-bold">
                  +{technologies.length - (isFeatured ? 5 : 3)}
                </span>
              )}
            </div>
          </div>
        </NeoCard>
      </Link>
    </motion.div>
  )
}
