'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

// Impor dinamis ThemeToggle untuk mencegah Hydration Mismatch
const ThemeToggle = dynamic(() => import('./ThemeToggle').then((mod) => mod.ThemeToggle), {
  ssr: false,
})

const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Pengalaman', href: '#experience' },
  { name: 'Prestasi', href: '#achievements' },
  { name: 'Kontak', href: '#contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 bg-card border-b-2 border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-extrabold text-xl cursor-pointer"
          onClick={() => handleNavClick('#home')}
        >
          YRPS
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="px-3 py-2 rounded-none text-sm font-semibold text-foreground hover:bg-accent transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden border-2 border-transparent hover:border-border hover:bg-accent rounded-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Buka menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto' } : { height: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden border-t-2 border-border bg-card"
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="w-full text-left px-3 py-2 rounded-none text-sm font-semibold text-foreground hover:bg-accent transition-colors"
              onClick={() => handleNavClick(link.href)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}
