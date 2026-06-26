import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Case Studies',
  description: 'Deep dives into engineering projects, challenges, and solutions',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
