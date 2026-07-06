'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  number?: string
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  number,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className={centered ? 'text-center' : ''}
    >
      <div
        className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}
      >
        {number && (
          <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-extrabold bg-primary text-primary-foreground border-2 border-border neo-shadow-sm">
            {number}
          </span>
        )}
        <div className={`h-0.5 bg-border flex-1 max-w-16 ${centered ? '' : 'max-w-24'}`} />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-balance uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground text-balance">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 bg-foreground w-16 ${centered ? 'mx-auto' : ''}`}
      />
    </motion.div>
  )
}
