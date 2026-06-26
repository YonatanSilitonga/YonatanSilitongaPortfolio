import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

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

// Script untuk menginisialisasi tema SEBELUM halaman render (mencegah flash)
const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
  } catch(e) {}
})();
`

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
      <head>
        {/* Script ini berjalan sebelum render untuk menghindari flash tema */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
