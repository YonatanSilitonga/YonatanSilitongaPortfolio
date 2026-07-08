'use client'

import { motion } from 'framer-motion'
import { Mail, GitBranch, ExternalLink, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionTitle } from '@/components/common/SectionTitle'
import { NeoCard } from '@/components/ui/neo-card'
import { portfolioData } from '@/lib/portfolio-data'
import { useState } from 'react'
import { sendEmail } from '@/app/actions'
import { cn } from '@/lib/utils'


const contactLinks = [
  {
    icon: Mail,
    title: 'Email',
    description: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
    external: false,
  },
  {
    icon: GitBranch,
    title: 'GitHub',
    description: 'Lihat repositori saya',
    href: portfolioData.personal.github,
    external: true,
  },
  {
    icon: ExternalLink,
    title: 'LinkedIn',
    description: 'Terhubung dengan saya',
    href: portfolioData.personal.linkedin,
    external: true,
  },
]

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
      form.reset()
      setTimeout(() => setSubmitted(false), 4000)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          number="06"
          title="Hubungi Saya"
          subtitle="Mari terhubung dan diskusikan peluang bersama"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10"
        >
          <NeoCard accent shadow="lg" className="p-5 md:p-6 text-center mb-8">
            <p className="text-lg font-extrabold">Terbuka untuk Peluang Magang & Kerja</p>
            <p className="opacity-80 mt-2 text-sm font-medium">
              Rekayasa Perangkat Lunak, Pengembangan Backend, dan Ilmu Data
            </p>
          </NeoCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            onSubmit={handleSubmit}
            className="md:col-span-3"
          >
            <NeoCard shadow="lg" className="relative p-6 md:p-8 space-y-4 h-full">
              {submitted && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-primary border border-border"
                      style={{
                        top: '50%',
                        left: '50%',
                        animation: `confetti-${i % 4} 1s ease-out forwards`
                      }}
                    />
                  ))}
                </div>
              )}
              <h3 className="text-lg font-extrabold uppercase tracking-tight">Kirim Pesan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <p className="text-sm text-destructive font-bold text-center">{error}</p>
              )}
              <Button
                type="submit"
                size="lg"
                className={cn(
                  "w-full",
                  isSubmitting && "animate-pulse-scale",
                )}
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin-brutal" />
                ) : submitted ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-5 h-5 animate-check-pop" />
                    Pesan Terkirim!
                  </span>
                ) : 'Kirim Pesan'}
              </Button>
            </NeoCard>
          </motion.form>

          <div className="md:col-span-2 flex flex-col gap-4">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <NeoCard shadow="md" press className="p-5 flex items-center gap-4">
                    <div className="p-2 bg-primary text-primary-foreground border-2 border-border neo-shadow-sm shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-extrabold text-sm">{link.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5 break-all">
                        {link.description}
                      </p>
                    </div>
                  </NeoCard>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
