import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { CursorTrail } from '@/components/animations/CursorTrail'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yonatan Rizky Partogi Silitonga | Mahasiswa Rekayasa Perangkat Lunak',
  description:
    'Portfolio Yonatan Rizky Partogi Silitonga - Mahasiswa Rekayasa Perangkat Lunak Terapan yang ahli dalam pengembangan full-stack, ilmu data, dan aplikasi mobile.',
  keywords: [
    'Rekayasa Perangkat Lunak',
    'Full Stack Developer',
    'Ilmu Data',
    'Flutter',
    'Laravel',
    'Python',
    'Institut Teknologi Del',
  ],
  authors: [{ name: 'Yonatan Rizky Partogi Silitonga' }],
  creator: 'Yonatan Rizky Partogi Silitonga',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://portfolio.example.com',
    title: 'Yonatan Rizky Partogi Silitonga | Mahasiswa Rekayasa Perangkat Lunak',
    description:
      'Jelajahi portofolio proyek perangkat lunak inovatif dan pengalaman profesional saya.',
    siteName: 'Portfolio YRPS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yonatan Rizky Partogi Silitonga | Mahasiswa Rekayasa Perangkat Lunak',
    description:
      'Portfolio proyek perangkat lunak inovatif dan pengalaman profesional.',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head />
      <body className="font-sans antialiased bg-background text-foreground">
        <CursorTrail />
        
        {/* Global Corner Decorations */}
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Top-left */}
          <div className="absolute top-4 left-4 w-12 h-12 border-4 border-primary animate-corner-pulse" />
          
          {/* Top-right */}
          <div className="absolute top-4 right-4 w-8 h-8 border-4 border-foreground rotate-45 animate-corner-spin" />
          
          {/* Bottom-left - only show on desktop */}
          <div className="hidden md:block absolute bottom-4 left-4 text-4xl font-black animate-bounce-slow">
            ↗
          </div>
        </div>

        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
