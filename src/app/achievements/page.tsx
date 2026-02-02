
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Trophy, Calendar, ExternalLink, Award, Star, ArrowLeft } from 'lucide-react'
import { achievements } from '@/data/achievements'

export default function AchievementsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -ml-40 -mb-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Navigation */}
        <nav className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <Trophy className="h-8 w-8 text-emerald-400" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent mb-6"
          >
            Our Milestones
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Celebrating the excellence, hard work, and collective victories of the Lubdhok batch.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.length === 0 ? (
            <div className="col-span-full py-20 text-center">
              <Award className="h-12 w-12 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500 text-lg italic">The trophy cabinet is waiting for its next addition...</p>
            </div>
          ) : (
            [...achievements].reverse().map((ach) => (
              <motion.div 
                key={ach.id} 
                variants={cardVariants}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative h-full bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-sm hover:border-emerald-500/30 transition-all">
                  <div className="flex flex-col h-full">
                    {ach.coverImage && (
                      <div className="mb-6 relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-800 ring-1 ring-white/10 group-hover:ring-emerald-500/30 transition-all">
                        <Image 
                          src={`/${ach.coverImage}`} 
                          alt={ach.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-bold tracking-widest uppercase border border-emerald-500/20">
                            <Star className="h-2.5 w-2.5 fill-emerald-400" />
                            Achievement
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {ach.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                      {ach.description}
                    </p>

                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
                          <Calendar className="h-4 w-4 text-emerald-500/70" />
                          <span>{new Date(ach.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        </div>
                        {ach.awardedBy && (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
                            <Award className="h-4 w-4 text-emerald-500/70" />
                            <span>{ach.awardedBy}</span>
                          </div>
                        )}
                      </div>

                      {ach.link && (
                        <a 
                          href={ach.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors pt-2 group/link"
                        >
                          Details
                          <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  )
}
