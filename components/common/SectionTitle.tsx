'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className={centered ? 'text-center' : ''}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground text-balance">{subtitle}</p>
      )}
    </motion.div>
  )
}
