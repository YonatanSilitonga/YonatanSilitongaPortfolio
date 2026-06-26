'use client'

import { motion } from 'framer-motion'

interface AnimatedBadgeProps {
  text: string
  delay?: number
  className?: string
}

export function AnimatedBadge({
  text,
  delay = 0,
  className = '',
}: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium ${className}`}
    >
      {text}
    </motion.div>
  )
}
