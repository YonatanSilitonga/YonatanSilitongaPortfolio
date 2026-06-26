'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/SectionTitle'
import { portfolioData } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Tentang Saya"
          subtitle="Kenali lebih dalam tentang siapa saya"
        />

        <div className="mt-12 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-lg text-muted-foreground text-balance leading-relaxed mx-auto text-center max-w-2xl"
          >
            Saya adalah mahasiswa Rekayasa Perangkat Lunak yang berdedikasi dengan semangat
            tinggi terhadap teknologi dan inovasi. Selama perjalanan akademik saya, saya telah
            mengembangkan keahlian dalam pengembangan full-stack, ilmu data, dan aplikasi
            mobile. Saya aktif mencari peluang magang untuk menerapkan keterampilan saya
            pada proyek nyata dan berkontribusi pada solusi yang bermakna.
          </motion.p>

          {/* Grid Fakta Singkat */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {portfolioData.quickFacts.map((fact, idx) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur text-center hover:border-primary/50 transition-colors"
              >
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  {fact.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
