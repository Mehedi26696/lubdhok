import Image from 'next/image'
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  FileText,
  Github,
} from 'lucide-react'
import { type AcademicProject } from '@/data/projects'

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function ProjectCard({ project }: { project: AcademicProject }) {
  return (
    <article className="surface-card card-with-actions flex h-full flex-col p-2">
      <div className="card-media aspect-[1.7] border border-[var(--line)]">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <Code2 className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 muted-text" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 pb-3 sm:p-5 sm:pb-4">
        <span className="mono-label mb-2 text-[var(--accent)]">
          {project.courseCode}
        </span>
        <h3 className="card-title">{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span key={technology} className="card-tag">
              {technology}
            </span>
          ))}
        </div>
        {project.teamMembers.length > 0 && (
          <details className="mb-4 mt-4 text-xs">
            <summary className="team-summary">
              <span className="flex min-w-0 items-center gap-2.5">
                <span className="flex -space-x-2" aria-hidden="true">
                  {project.teamMembers.slice(0, 3).map((member) => (
                    <span key={member.name} className="team-avatar">
                      {initials(member.name)}
                    </span>
                  ))}
                </span>
                <span className="muted-text">
                  {project.teamMembers.length} team{' '}
                  {project.teamMembers.length === 1 ? 'member' : 'members'}
                </span>
              </span>
              <ChevronDown className="h-3.5 w-3.5 shrink-0 muted-text" />
            </summary>
            <ul className="mt-2 space-y-1 rounded-lg bg-[var(--background)] p-3">
              {project.teamMembers.map((member) => (
                <li key={member.name}>
                  {member.githubUsername.trim() ? (
                    <a
                      href={`https://github.com/${member.githubUsername.trim()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-9 items-center justify-between gap-2 hover:text-[var(--accent)]"
                    >
                      {member.name}
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 muted-text" />
                    </a>
                  ) : (
                    <span className="block py-2">{member.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </details>
        )}
        <div className="card-footer mt-auto flex-wrap justify-start gap-2">
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-action"
            >
              <Github className="h-3.5 w-3.5" />
              Source code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-action"
            >
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.documentationUrl && (
            <a
              href={project.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-action"
            >
              <FileText className="h-3.5 w-3.5" />
              Docs
            </a>
          )}
          {!project.sourceCodeUrl &&
            !project.demoUrl &&
            !project.documentationUrl && (
              <span className="py-2 text-xs muted-text">
                Project links coming soon
              </span>
            )}
        </div>
      </div>
    </article>
  )
}
