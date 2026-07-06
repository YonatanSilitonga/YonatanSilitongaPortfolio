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
          className="mt-12 p-6 rounded-none bg-primary border-2 border-border text-center mb-12 shadow-[8px_8px_0px_var(--shadow-color)]"
        >
          <p className="text-lg font-bold text-primary-foreground">
            Terbuka untuk Peluang Magang & Kerja
          </p>
          <p className="text-primary-foreground/80 mt-2">
            Rekayasa Perangkat Lunak, Pengembangan Backend, dan Ilmu Data
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            href={`mailto:${portfolioData.personal.email}`}
            className="p-6 rounded-none border-2 border-border bg-card hover:bg-accent transition-all text-center group shadow-[8px_8px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
          >
            <Mail className="w-8 h-8 text-foreground mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground break-all">
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
            className="p-6 rounded-none border-2 border-border bg-card hover:bg-accent transition-all text-center group shadow-[8px_8px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
          >
            <GitBranch className="w-8 h-8 text-foreground mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground">
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
            className="p-6 rounded-none border-2 border-border bg-card hover:bg-accent transition-all text-center group shadow-[8px_8px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-2 hover:translate-y-2"
          >
            <ExternalLink className="w-8 h-8 text-foreground mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">
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
          className="max-w-2xl mx-auto p-8 rounded-none border-2 border-border bg-card space-y-4 shadow-[8px_8px_0px_var(--shadow-color)]"
        >
          <h3 className="text-lg font-bold text-center mb-2">Kirim Pesan</h3>
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

          {error && (
            <p className="text-sm text-red-500 font-bold text-center">{error}</p>
          )}
          <Button
            type="submit"
            size="lg"
            className="w-full font-bold text-primary-foreground bg-primary border-2 border-border rounded-none shadow-[4px_4px_0px_var(--shadow-color)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:bg-muted disabled:shadow-none disabled:translate-y-0 disabled:translate-x-0"
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

