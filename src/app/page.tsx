'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Rocket, Sparkles, ChevronRight, Play, MapPin, Clock, Code } from 'lucide-react'
import { semesters, type Semester } from '@/data/studyMaterials'
import { events, type Event } from '@/data/events'
import { getAllProjects, type AcademicProject } from '@/data/projects'
import StatsSection from '@/components/StatsSection'

type DiscoveryItem =
  | { type: 'semester'; data: Semester }
  | { type: 'project'; data: AcademicProject }
  | { type: 'event'; data: Event }

// Discovery Card Component
function DiscoveryCard({ item }: { item: DiscoveryItem }) {
  if (item.type === 'semester') {
    return (
      <div className="group/card relative bg-[#020617]/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden h-full flex flex-col hover:scale-[1.02] hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-white group-hover/card:text-violet-400 transition-colors uppercase tracking-[0.05em] leading-tight">
              {item.data.name}
            </h3>
            <div className="p-3 bg-violet-500/10 rounded-2xl border border-violet-500/20 group-hover/card:scale-110 transition-transform">
              <Clock className="w-5 h-5 text-violet-400" />
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-3 animate-pulse"></div>
              {item.data.subjects.length} Subjects Registry
            </div>
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
              Explore the curated digital archives and collective knowledge for this temporal node.
            </p>
          </div>

          <div className="mt-auto pt-4">
            <Link
              href={`/semester/${item.data.id}`}
              className="group/btn relative inline-flex items-center w-full justify-center px-6 py-4 bg-white/5 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] rounded-[1.25rem] hover:bg-violet-600 hover:text-white transition-all duration-500 border border-white/10 hover:border-transparent overflow-hidden shadow-xl shadow-black/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Access Node</span>
              <ChevronRight className="relative z-10 ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (item.type === 'project') {
    return (
      <div className="group/card relative bg-[#020617]/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden h-full flex flex-col hover:scale-[1.02] hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-white group-hover/card:text-emerald-400 transition-colors line-clamp-2 uppercase tracking-[0.05em] leading-tight">
              {item.data.title}
            </h3>
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover/card:scale-110 transition-transform">
              <Code className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {item.data.technologies.slice(0, 3).map((tech, i) => (
                <span key={`${tech}-${i}`} className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                  {tech}
                </span>
              ))}
              {item.data.technologies.length > 3 && (
                <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-[9px] font-black text-slate-600">
                  +{item.data.technologies.length - 3}
                </span>
              )}
            </div>
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium">
              Technical implementation and architecture documentation for distributed projects.
            </p>
          </div>

          <div className="mt-auto pt-4">
            <Link
              href={item.data.sourceCodeUrl || '/projects'}
              target={item.data.sourceCodeUrl ? '_blank' : '_self'}
              className="group/btn relative inline-flex items-center w-full justify-center px-6 py-4 bg-white/5 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] rounded-[1.25rem] hover:bg-emerald-600 hover:text-white transition-all duration-500 border border-white/10 hover:border-transparent overflow-hidden shadow-xl shadow-black/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Sync Source</span>
              <Rocket className="relative z-10 ml-2 w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (item.type === 'event') {
    return (
      <div className="group/card relative bg-[#020617]/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 overflow-hidden h-full flex flex-col hover:scale-[1.02] hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-white group-hover/card:text-orange-400 transition-colors uppercase tracking-[0.05em] leading-tight line-clamp-1">
              {item.data.title}
            </h3>
            <div className="p-3 bg-orange-500/10 rounded-2xl border border-orange-500/20 group-hover/card:scale-110 transition-transform">
              <Calendar className="w-5 h-5 text-orange-400" />
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <MapPin className="w-4 h-4 mr-3 text-orange-500/60" />
              <span className="truncate">{item.data.location}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
              Scheduled synchronization event for the Lubdhok collective ecosystem.
            </p>
          </div>

          <div className="mt-auto pt-4">
            <Link
              href={`/events/${item.data.id}`}
              className="group/btn relative inline-flex items-center w-full justify-center px-6 py-4 bg-white/5 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em] rounded-[1.25rem] hover:bg-orange-600 hover:text-white transition-all duration-500 border border-white/10 hover:border-transparent overflow-hidden shadow-xl shadow-black/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Event Protocol</span>
              <Play className="relative z-10 ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default function HomePage() {
  // Get sample data for rolling animation - prioritize latest content
  const allProjects = getAllProjects()
  
  // Sort events by date (latest first)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date.split(' to ')[0])
    const dateB = new Date(b.date.split(' to ')[0])
    return dateB.getTime() - dateA.getTime()
  })
  const recentEvents = sortedEvents.slice(0, 8)
  
  // Get all study materials from all semesters and sort by upload date (latest first)
  const allStudyMaterials = semesters.flatMap(semester => 
    semester.subjects.flatMap(subject => 
      subject.materials.map(material => ({ ...material, semesterName: semester.name }))
    )
  ).sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
  
  // Create semester objects from recent materials
  const recentMaterialsBySemester = allStudyMaterials.slice(0, 12).reduce((acc, material) => {
    const semester = semesters.find(s => s.name === material.semesterName)
    if (semester && !acc.find(s => s.id === semester.id)) {
      acc.push(semester)
    }
    return acc
  }, [] as Semester[]).slice(0, 4)
  
  // Create rolling items combining all types - prioritizing recent content
  const rollingItems: DiscoveryItem[] = [
    ...recentEvents.map(event => ({
      type: 'event' as const,
      data: event
    })),
    ...recentMaterialsBySemester.map(semester => ({
      type: 'semester' as const,
      data: semester
    })),
    ...allProjects.slice(-6).reverse().map(project => ({
      type: 'project' as const,
      data: project
    }))
  ]

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-20 bg-transparent z-40"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -right-40 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_70%)]"></div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/batch.jpg)',
            filter: 'brightness(0.5) contrast(1.1) saturate(1.1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-px bg-white/20"></div>
                <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">Computer Science & Engineering</span>
                <div className="w-16 h-px bg-white/20"></div>
              </div>
              
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none">
                <span className="text-white drop-shadow-2xl">LUBDHOK</span>
              </h1>
              
              <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto shadow-2xl"></div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-widest opacity-90">
                29th Batch • CSEDU
              </h2>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      <section id="discover" className="relative py-48 bg-[#020617] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Real-time Ecosystem</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Updates</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              An automated feed of our most recent academic entries, collective builds, and synchronized events.
            </p>
          </div>

          <div className="relative h-[480px] overflow-hidden rounded-[3rem] bg-black/40 backdrop-blur-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
            <div className="absolute inset-0 flex items-center">
              <motion.div 
                className="flex space-x-8 px-8"
                animate={{
                  x: [0, -rollingItems.length * (320 + 32)],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: rollingItems.length * 4,
                    ease: 'linear',
                  },
                }}
                style={{ width: 'fit-content' }}
              >
                {rollingItems.map((item, index) => (
                  <div key={`roll-1-${item.type}-${index}`} className="flex-shrink-0 w-80 h-[400px]">
                    <DiscoveryCard item={item} />
                  </div>
                ))}
                {rollingItems.map((item, index) => (
                  <div key={`roll-2-${item.type}-${index}`} className="flex-shrink-0 w-80 h-[400px]">
                    <DiscoveryCard item={item} />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16 px-4">
            <Link href="/semesters" className="px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-2xl text-center">
              Study Materials
            </Link>
            <Link href="/projects" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-white/10 transition-all duration-300 text-center">
              Explore Projects
            </Link>
            <Link href="/events" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-white/10 transition-all duration-300 text-center">
              Timeline Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

