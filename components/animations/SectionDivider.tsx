'use client'

import { motion } from 'framer-motion'

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative py-8"
    >
      {/* Animated dashed border */}
      <div 
        className="h-1 border-t-4 border-dashed border-border"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, var(--border) 10px, var(--border) 20px)',
          backgroundSize: '40px 4px',
          animation: 'dash-flow 1s linear infinite'
        }}
      />
      
      {/* Center rotating square */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-primary border-2 border-border rotate-45 animate-corner-pulse" />
      </div>
    </motion.div>
  )
}
