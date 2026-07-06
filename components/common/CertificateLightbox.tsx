'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { NeoCard } from '@/components/ui/neo-card'
import { certificateSrc } from '@/lib/utils'

export interface CertificateItem {
  id: number
  layoutKey: string
  title: string
  subtitle?: string
  certificateImage?: string
}

interface CertificateLightboxProps {
  item: CertificateItem | null
  isOpen: boolean
  onClose: () => void
}

export function CertificateLightbox({ item, isOpen, onClose }: CertificateLightboxProps) {
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setImageError(false)
  }, [item?.id])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const imageSrc = item?.certificateImage ? certificateSrc(item.certificateImage) : null

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-default"
            onClick={onClose}
            aria-label="Tutup lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            layoutId={`certificate-${item.layoutKey}`}
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative z-10 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <NeoCard shadow="lg" className="overflow-hidden">
              <div className="flex items-start justify-between gap-4 p-4 md:p-5 border-b-2 border-border bg-primary text-primary-foreground">
                <div className="min-w-0">
                  <h3 id="certificate-title" className="font-extrabold text-base md:text-lg leading-tight">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm opacity-80 mt-1 font-medium">{item.subtitle}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 inline-flex items-center justify-center w-9 h-9 border-2 border-border bg-card text-foreground neo-shadow-sm neo-press"
                  aria-label="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative bg-muted/30 p-4 md:p-6 min-h-[240px] md:min-h-[360px] flex items-center justify-center">
                {imageSrc && !imageError ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.35 }}
                    className="relative w-full max-h-[70vh] aspect-[4/3]"
                  >
                    <Image
                      src={imageSrc}
                      alt={`Sertifikat ${item.title}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 768px"
                      onError={() => setImageError(true)}
                      priority
                    />
                  </motion.div>
                ) : (
                  <NeoCard shadow="sm" className="p-6 text-center max-w-sm">
                    <p className="text-sm font-bold text-muted-foreground">
                      Sertifikat belum tersedia untuk item ini.
                    </p>
                  </NeoCard>
                )}
              </div>
            </NeoCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
