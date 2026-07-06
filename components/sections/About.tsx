'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/common/SectionTitle'
import { NeoCard } from '@/components/ui/neo-card'
import { portfolioData } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          number="01"
          title="Tentang Saya"
          subtitle="Kenali lebih dalam tentang siapa saya"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-3"
          >
            <NeoCard shadow="lg" className="p-6 md:p-8 h-full">
              <p className="text-base md:text-lg text-muted-foreground text-balance leading-relaxed">
                Saya adalah mahasiswa Rekayasa Perangkat Lunak yang berdedikasi dengan semangat
                tinggi terhadap teknologi dan inovasi. Selama perjalanan akademik saya, saya telah
                mengembangkan keahlian dalam pengembangan full-stack, ilmu data, dan aplikasi
                mobile. Saya aktif mencari peluang magang untuk menerapkan keterampilan saya
                pada proyek nyata dan berkontribusi pada solusi yang bermakna.
              </p>
            </NeoCard>
          </motion.div>

          <div className="md:col-span-2 flex flex-col gap-3">
            {portfolioData.quickFacts.map((fact, idx) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <NeoCard shadow="md" press className="p-4 flex items-center gap-4">
                  <span className="inline-flex items-center justify-center min-w-16 px-2 py-1 text-lg font-extrabold bg-primary text-primary-foreground border-2 border-border neo-shadow-sm">
                    {fact.value}
                  </span>
                  <p className="text-sm font-bold text-muted-foreground">{fact.label}</p>
                </NeoCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
