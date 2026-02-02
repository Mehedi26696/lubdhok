'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { type Event } from '@/data/events'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  // Motion values for tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
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
      className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-orange-500/30 transition-colors duration-500"
    >
      <div className="relative h-64 w-full overflow-hidden">
        {event.images && event.images[0] ? (
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <Calendar className="w-12 h-12 text-slate-700" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        {/* Date Badge */}
        <div className="absolute top-4 left-4 px-4 py-2 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-800">
          <span className="block text-xl font-bold text-white text-center leading-none">
            {new Date(event.date).getDate()}
          </span>
          <span className="block text-[10px] uppercase font-bold text-orange-500 tracking-widest text-center mt-1">
            {new Date(event.date).toLocaleString('default', { month: 'short' })}
          </span>
        </div>

        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md ${
          event.type === 'upcoming' ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' :
          event.type === 'ongoing' ? 'bg-orange-500/20 border-orange-500/30 text-orange-400' :
          'bg-slate-500/20 border-slate-500/30 text-slate-400'
        }`}>
          {event.type}
        </div>
      </div>

      <div className="p-8" style={{ transform: "translateZ(40px)" }}>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
          {event.title}
        </h3>
        
        <div className="space-y-3 mb-8">
          <div className="flex items-center text-slate-400 text-sm">
            <MapPin size={16} className="mr-2 text-orange-500/70" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-slate-400 text-sm">
            <Calendar size={16} className="mr-2 text-orange-500/70" />
            <span>{event.time}</span>
          </div>
        </div>

        <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        <Link 
          href={`/events/${event.id}`}
          className="flex items-center justify-between w-full px-6 py-4 bg-slate-800/50 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all group/btn"
        >
          <span>View Event Details</span>
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
