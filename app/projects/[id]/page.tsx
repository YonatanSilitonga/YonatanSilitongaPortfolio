import { Metadata } from 'next'
import { portfolioData } from '@/lib/portfolio-data'
import { notFound } from 'next/navigation'
import { ProjectCaseStudyClient } from './client'

interface ProjectCaseStudyProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ProjectCaseStudyProps): Promise<Metadata> {
  const resolvedParams = await params
  const projectId = parseInt(resolvedParams.id)
  const project = portfolioData.projects.find(p => p.id === projectId)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
  }
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectCaseStudy({ params }: ProjectCaseStudyProps) {
  const resolvedParams = await params
  const projectId = parseInt(resolvedParams.id)
  const project = portfolioData.projects.find(p => p.id === projectId)

  if (!project) {
    notFound()
  }

  return <ProjectCaseStudyClient project={project} />
}
