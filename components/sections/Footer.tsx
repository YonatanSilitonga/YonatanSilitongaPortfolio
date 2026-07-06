'use client'

import { motion } from 'framer-motion'
import { GitBranch, ExternalLink, Mail } from 'lucide-react'
import { NeoCard } from '@/components/ui/neo-card'
import { portfolioData } from '@/lib/portfolio-data'

const navItems = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Kontak', href: '#contact' },
]

const socialLinks = [
  { icon: GitBranch, href: portfolioData.personal.github, title: 'GitHub' },
  { icon: ExternalLink, href: portfolioData.personal.linkedin, title: 'LinkedIn' },
  { icon: Mail, href: `mailto:${portfolioData.personal.email}`, title: 'Email' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-border bg-card">
      <div className="border-b-2 border-border bg-primary py-2 overflow-hidden">
        <p className="text-center text-xs font-extrabold text-primary-foreground uppercase tracking-[0.3em]">
          YRPS — Software Engineering — Institut Teknologi Del
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <NeoCard shadow="sm" className="p-5 h-full">
              <span className="inline-block px-2 py-1 text-sm font-extrabold bg-primary text-primary-foreground border-2 border-border mb-3">
                YRPS
              </span>
              <p className="text-sm text-muted-foreground font-medium">
                Mahasiswa Rekayasa Perangkat Lunak
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Institut Teknologi Del
              </p>
            </NeoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <NeoCard shadow="sm" className="p-5 h-full">
              <h4 className="font-extrabold text-sm uppercase mb-3">Navigasi</h4>
              <ul className="space-y-1.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground font-bold hover:text-foreground hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </NeoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <NeoCard shadow="sm" className="p-5 h-full">
              <h4 className="font-extrabold text-sm uppercase mb-3">Terhubung</h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, title }) => (
                  <a
                    key={title}
                    href={href}
                    target={title !== 'Email' ? '_blank' : undefined}
                    rel={title !== 'Email' ? 'noopener noreferrer' : undefined}
                    title={title}
                    className="inline-flex items-center justify-center w-10 h-10 border-2 border-border bg-background neo-shadow-sm neo-press"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </NeoCard>
          </motion.div>
        </div>

        <div className="border-t-2 border-border pt-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground font-medium"
          >
            <p>© {currentYear} {portfolioData.personal.name}. Semua hak dilindungi.</p>
            <p className="mt-1 text-xs">
              Dibuat dengan Next.js, React, dan Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
