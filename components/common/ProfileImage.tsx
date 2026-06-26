'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { portfolioData } from '@/lib/portfolio-data'

interface ProfileImageProps {
  className?: string
}

export function ProfileImage({ className = '' }: ProfileImageProps) {
  // Gunakan foto profil statis dari konfigurasi, atau fallback ke placeholder-user.jpg
  const avatarUrl = portfolioData.personal.avatar || '/placeholder-user.jpg'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.03 }}
      className={`relative ${className}`}
    >
      {/* Efek Cahaya Latar Belakang (Glow) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl animate-pulse" />

      {/* Bingkai Lingkaran Foto */}
      <div
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-background overflow-hidden shadow-2xl border-2 border-primary/40"
      >
        <Image
          src={avatarUrl}
          alt={portfolioData.personal.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Badge Teknologi Melayang */}
      <FloatingBadge text="C/C++" position="top-2 -left-4" delay={0} />
      <FloatingBadge text="Python" position="top-2 -right-4" delay={0.1} />
      <FloatingBadge text="Laravel" position="bottom-2 -left-4" delay={0.2} />
      <FloatingBadge text="Flutter" position="bottom-2 -right-4" delay={0.3} />
    </motion.div>
  )
}

function FloatingBadge({
  text,
  position,
  delay,
}: {
  text: string
  position: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + delay, duration: 0.4 }}
      className={`absolute ${position} pointer-events-none z-10`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, delay, repeat: Infinity }}
        className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-semibold text-primary whitespace-nowrap backdrop-blur-sm dark:bg-primary/30 dark:border-primary/60"
      >
        {text}
      </motion.div>
    </motion.div>
  )
}
