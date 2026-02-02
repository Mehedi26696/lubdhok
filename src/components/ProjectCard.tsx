'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, Globe, Users, Code, ExternalLink, FileText } from 'lucide-react'
import { type AcademicProject } from '@/data/projects'

interface ProjectCardProps {
  project: AcademicProject
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

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
    setIsHovered(false)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
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
              <div 
                key={idx}
                className="flex items-center justify-between bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50 hover:border-violet-500/40 transition-all group/member"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg group-hover/member:scale-110 transition-transform">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-white group-hover:text-violet-300 transition-colors">
                      {member.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Contributor</div>
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
