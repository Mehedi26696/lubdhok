'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Award, Calendar, ExternalLink, Star, Trophy } from 'lucide-react'
import { achievements } from '@/data/achievements'

export default function AchievementsPage() {
  return (
    <div className="page-shell">
      <div className="page-content">
        <nav className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 font-bold" style={{ color: 'var(--muted)' }}>
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </nav>

        <header className="mb-14 max-w-3xl">
          <div className="eyebrow mb-5">
            <Trophy className="h-4 w-4" />
            Batch Milestones
          </div>
          <h1 className="section-title">Our Milestones</h1>
          <p className="section-copy mt-5">
            Competition wins, recognition, and public achievements from the Lubdhok batch.
          </p>
        </header>

        <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {achievements.length === 0 ? (
            <div className="surface-card col-span-full py-20 text-center">
              <Award className="mx-auto mb-4 h-12 w-12" style={{ color: 'var(--muted)' }} />
              <p className="section-copy">The achievement archive is waiting for its next entry.</p>
            </div>
          ) : (
            [...achievements].reverse().map((achievement, index) => (
              <motion.article
                key={achievement.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="surface-card flex h-full flex-col p-5 md:p-6"
              >
                {achievement.coverImage && (
                  <div className="image-frame relative mb-6 aspect-video w-full overflow-hidden">
                    <Image
                      src={`/${achievement.coverImage}`}
                      alt={achievement.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                )}

                <div className="mb-4 flex items-center gap-2">
                  <span className="stamp">
                    <Star className="h-3.5 w-3.5" />
                    Achievement
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-black" style={{ color: 'var(--foreground)' }}>
                  {achievement.title}
                </h3>
                <p className="section-copy mb-6 line-clamp-3 text-sm">{achievement.description}</p>

                <div className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                      {new Date(achievement.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                    {achievement.awardedBy && (
                      <span className="inline-flex items-center gap-2">
                        <Award className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                        {achievement.awardedBy}
                      </span>
                    )}
                  </div>

                  {achievement.link && (
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="btn-outline">
                      Details
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))
          )}
        </motion.div>
      </div>
    </div>
  )
}
