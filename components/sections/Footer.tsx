'use client'

import { motion } from 'framer-motion'
import { GitBranch, ExternalLink, Mail } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-extrabold mb-2">YRPS</h3>
            <p className="text-sm text-muted-foreground">
              Mahasiswa Rekayasa Perangkat Lunak
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Institut Teknologi Del
            </p>
          </motion.div>

          {/* Tautan Cepat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-foreground hover:bg-accent p-1 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground hover:bg-accent p-1 transition-colors">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground hover:bg-accent p-1 transition-colors">
                  Proyek
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-foreground hover:bg-accent p-1 transition-colors">
                  Keahlian
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground hover:bg-accent p-1 transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Tautan Sosial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Terhubung</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:bg-accent p-2 rounded-none transition-colors"
                title="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:bg-accent p-2 rounded-none transition-colors"
                title="LinkedIn"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-foreground hover:bg-accent p-2 rounded-none transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-border my-8"></div>

        {/* Hak Cipta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} {portfolioData.personal.name}. Semua hak dilindungi.
          </p>
          <p className="mt-2">
            Dibuat dengan <span className="text-red-500">♥</span> menggunakan
            Next.js, React, dan Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

