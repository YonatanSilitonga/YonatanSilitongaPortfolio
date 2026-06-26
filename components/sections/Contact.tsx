'use client'

import { motion } from 'framer-motion'
import { Mail, GitBranch, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionTitle } from '@/components/common/SectionTitle'
import { portfolioData } from '@/lib/portfolio-data'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulir dikirim:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Hubungi Saya"
          subtitle="Mari terhubung dan diskusikan peluang bersama"
        />

        {/* Callout Peluang */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/20 text-center mb-12"
        >
          <p className="text-lg font-semibold text-foreground">
            Terbuka untuk Peluang Magang & Kerja
          </p>
          <p className="text-muted-foreground mt-2">
            Rekayasa Perangkat Lunak, Pengembangan Backend, dan Ilmu Data
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            href={`mailto:${portfolioData.personal.email}`}
            className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all text-center group"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
              {portfolioData.personal.email}
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all text-center group"
          >
            <GitBranch className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Lihat repositori saya
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all text-center group"
          >
            <ExternalLink className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terhubung dengan saya
            </p>
          </motion.a>
        </div>

        {/* Formulir Kontak */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 rounded-lg border border-border bg-card/30 backdrop-blur space-y-4"
        >
          <h3 className="text-lg font-semibold text-center mb-2">Kirim Pesan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Nama Anda"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Anda"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <Textarea
            name="message"
            placeholder="Pesan Anda..."
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-32"
          />

          <Button type="submit" className="w-full" size="lg">
            {submitted ? '✓ Pesan Terkirim!' : 'Kirim Pesan'}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
