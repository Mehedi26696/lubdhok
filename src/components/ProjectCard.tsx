'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code, ExternalLink, FileText, Github, Users } from 'lucide-react'
import { type AcademicProject } from '@/data/projects'

interface ProjectCardProps {
  project: AcademicProject
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [avatarFailed, setAvatarFailed] = useState<Record<string, boolean>>({})

  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="surface-card flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-48 w-full border-b" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Code className="h-12 w-12" style={{ color: 'var(--muted)' }} />
          </div>
        )}
        {project.courseCode && (
          <div className="absolute right-3 top-3 stamp" style={{ background: 'var(--surface)' }}>
            {project.courseCode}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 line-clamp-2 text-xl font-black" style={{ color: 'var(--foreground)' }}>
          {project.title}
        </h3>
        <p className="section-copy mb-4 line-clamp-3 text-sm">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="mono-label rounded border px-2 py-1" style={{ borderColor: 'var(--line)' }}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && <span className="mono-label px-2 py-1">+{project.technologies.length - 5}</span>}
        </div>

        <div className="mb-5">
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-4 w-4" style={{ color: 'var(--accent-secondary)' }} />
            <span className="mono-label">Team Members</span>
          </div>
          <div className="grid gap-2">
            {project.teamMembers.map((member) => {
              const username = member.githubUsername.trim()
              const avatarUrl = username ? `https://avatars.githubusercontent.com/${encodeURIComponent(username)}?s=64` : null

              return (
                <div key={`${project.id}-${member.githubUsername}-${member.name}`} className="flex items-center justify-between gap-3 border p-2" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', borderRadius: 6 }}>
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative h-8 w-8 shrink-0 overflow-hidden border" style={{ borderColor: 'var(--line)', borderRadius: 6, background: 'var(--surface)' }}>
                      {avatarUrl && !avatarFailed[username] ? (
                        <Image
                          src={avatarUrl}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="32px"
                          unoptimized
                          onError={() => setAvatarFailed((prev) => ({ ...prev, [username]: true }))}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs font-black" style={{ color: 'var(--accent)' }}>
                          {initials(member.name)}
                        </div>
                      )}
                    </div>
                    <span className="truncate text-sm font-bold" style={{ color: 'var(--foreground)' }}>
                      {member.name}
                    </span>
                  </div>
                  {username && (
                    <a
                      href={`https://github.com/${username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button h-8 w-8 shrink-0"
                      title={`${member.name} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: 'var(--line)' }}>
          <span className="mono-label">Details</span>
          <div className="flex items-center gap-2">
            {project.sourceCodeUrl && (
              <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="icon-button" title="GitHub">
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="icon-button" title="Live demo">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.documentationUrl && (
              <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer" className="icon-button" title="Documentation">
                <FileText className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
