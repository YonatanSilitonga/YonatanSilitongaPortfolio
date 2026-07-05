'use client'

import { motion } from 'framer-motion'
import { Mail, GitBranch, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionTitle } from '@/components/common/SectionTitle'
import { portfolioData } from '@/lib/portfolio-data'
import { useState } from 'react'
import { sendEmail } from '@/app/actions' // Import server action

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const result = await sendEmail(formData)

    if (result.error) {
      setError(result.error)
      setIsSubmitting(false)
    } else {
      setSubmitted(true)
      form.reset() // Reset formulir setelah berhasil
      setTimeout(() => {
        setSubmitted(false)
      }, 4000)
      setIsSubmitting(false)
    }
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
              required
              disabled={isSubmitting}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Anda"
              required
              disabled={isSubmitting}
            />
          </div>

          <Textarea
            name="message"
            placeholder="Pesan Anda..."
            required
            className="min-h-32"
            disabled={isSubmitting}
          />

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting || submitted}
          >
            {isSubmitting
              ? 'Mengirim...'
              : submitted
              ? '✓ Pesan Terkirim!'
              : 'Kirim Pesan'}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
