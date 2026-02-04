'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, Users, Code, ExternalLink, FileText } from 'lucide-react'
import { type AcademicProject } from '@/data/projects'

type GitHubUser = {
  login: string
  name?: string | null
  avatar_url?: string | null
  location?: string | null
}

const githubUserPromiseCache = new Map<string, Promise<GitHubUser | null>>()
let githubRateLimited = false

const GITHUB_USER_CACHE_PREFIX = 'lubdhok:githubUser:'
const GITHUB_USER_CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

function readCachedGitHubUser(username: string): GitHubUser | null {
  try {
    const raw = localStorage.getItem(`${GITHUB_USER_CACHE_PREFIX}${username}`)
    if (!raw) return null
    const parsed = JSON.parse(raw) as { ts: number; data: GitHubUser }
    if (!parsed?.ts || !parsed?.data) return null
    if (Date.now() - parsed.ts > GITHUB_USER_CACHE_TTL_MS) return null
    if (!parsed.data?.login) return null
    return parsed.data
  } catch {
    return null
  }
}

function writeCachedGitHubUser(username: string, data: GitHubUser) {
  try {
    localStorage.setItem(
      `${GITHUB_USER_CACHE_PREFIX}${username}`,
      JSON.stringify({ ts: Date.now(), data })
    )
  } catch {
    // ignore
  }
}

function getLocationAcronym(location: string | null | undefined): string | null {
  if (!location) return null
  const cleaned = location.replace(/[^a-zA-Z0-9,\s-]/g, ' ').trim()
  if (!cleaned) return null

  // Prefer the part before the first comma (usually city/region)
  const primary = cleaned.split(',')[0]?.trim() ?? cleaned
  const words = primary.split(/\s+/).filter(Boolean)
  const letters = words
    .filter((w) => /[a-zA-Z]/.test(w))
    .map((w) => w[0]!.toUpperCase())
    .slice(0, 2)

  return letters.length > 0 ? letters.join('') : null
}

async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  const key = username.trim()
  if (!key) return null
  if (githubRateLimited) return null

  const cached = readCachedGitHubUser(key)
  if (cached) return cached

  const existing = githubUserPromiseCache.get(key)
  if (existing) return existing

  const promise = (async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(key)}`, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      })

      if (!res.ok) {
        if (res.status === 403) {
          // Commonly unauthenticated rate limiting; stop further requests for this session.
          githubRateLimited = true
        }
        return null
      }
      const json = (await res.json()) as GitHubUser
      if (!json?.login) return null
      writeCachedGitHubUser(key, json)
      return json
    } catch {
      return null
    }
  })()

  githubUserPromiseCache.set(key, promise)
  return promise
}

interface ProjectCardProps {
  project: AcademicProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [githubUsers, setGithubUsers] = useState<Record<string, GitHubUser | null>>({})
  const [avatarFailed, setAvatarFailed] = useState<Record<string, boolean>>({})

  // Fetch GitHub profiles for all team members (cached), no hover needed.
  const usernames = useMemo(() => {
    const names = project.teamMembers
      .map((m) => (m.githubUsername ?? '').trim())
      .filter(Boolean)
    return Array.from(new Set(names))
  }, [project.teamMembers])

  useEffect(() => {
    if (usernames.length === 0) return
    let cancelled = false

    ;(async () => {
      for (const username of usernames) {
        const user = await fetchGitHubUser(username)
        if (cancelled) return
        setGithubUsers((prev) => (prev[username] === undefined ? { ...prev, [username]: user } : prev))
      }
    })()

    return () => {
      cancelled = true
    }
  }, [usernames])

  // Motion values for tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for the rotation
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  // Transform mouse position to degrees of rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-slate-700/30 flex items-center justify-center">
            <Code className="w-12 h-12 text-slate-500" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
        
        {/* Course Badge */}
        {project.courseCode && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-violet-600/90 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-violet-400/30">
            {project.courseCode}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-900/50 border border-slate-700/50 rounded-md text-[10px] uppercase tracking-wider font-semibold text-violet-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] text-slate-500 flex items-center">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Team Members Section */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Users size={14} className="text-violet-400" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Team Members
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {project.teamMembers.map((member, idx) => (
              (() => {
                const username = member.githubUsername?.trim()
                const gh = username ? githubUsers[username] : null
                const locationAcronym = getLocationAcronym(gh?.location)
                const nameInitials = member.name
                  .split(' ')
                  .filter(Boolean)
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)

                const badgeText = locationAcronym ?? nameInitials
                const subtitle = gh?.location ? gh.location : 'Contributor'

                // Use direct avatar URL so avatars still load even if the GitHub API is rate-limited.
                const avatarUrl = username ? `https://avatars.githubusercontent.com/${encodeURIComponent(username)}?s=64` : null

                return (
              <div 
                key={idx}
                className="flex items-center justify-between bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50 hover:border-violet-500/40 transition-all group/member"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-lg group-hover/member:scale-110 transition-transform">
                    {username && typeof avatarUrl === 'string' && !avatarFailed[username] ? (
                      <Image
                        src={avatarUrl}
                        alt={gh?.name || gh?.login || member.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                        unoptimized
                        onError={() => {
                          if (!username) return
                          setAvatarFailed((prev) => ({ ...prev, [username]: true }))
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                        {badgeText}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-white group-hover:text-violet-300 transition-colors">
                      {member.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium" title={gh?.location ?? undefined}>
                      {subtitle}
                    </div>
                  </div>
                </div>
                {member.githubUsername && (
                  <a
                    href={`https://github.com/${member.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-700 rounded-lg transition-all"
                    title="View GitHub"
                  >
                    <Github size={14} />
                  </a>
                )}
              </div>
                )
              })()
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center text-slate-400 text-xs">
            <Code className="w-4 h-4 mr-1.5" />
            <span className="font-medium">Details</span>
          </div>
          
          <div className="flex items-center gap-3">
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all"
                title="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.documentationUrl && (
              <a
                href={project.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all"
                title="Documentation"
              >
                <FileText size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
