'use client'

import { semesters } from '@/data/studyMaterials'
import { projectSemesters } from '@/data/projects'
import { motion } from 'framer-motion'
import { BookOpen, Code, FileText, Layout, Award } from 'lucide-react'

export default function StatsSection() {
  const totalMaterials = semesters.reduce((acc, semester) => 
    acc + semester.subjects.reduce((subAcc, subject) => subAcc + subject.materials.length, 0), 0
  )

  const theorySubjects = semesters.reduce((acc, semester) => 
    acc + semester.subjects.filter(subject => subject.type === 'theory').length, 0
  )
  const labSubjects = semesters.reduce((acc, semester) => 
    acc + semester.subjects.filter(subject => subject.type === 'lab').length, 0
  )

  const totalProjects = projectSemesters.reduce((acc, semester) => 
    acc + semester.courses.reduce((courseAcc, course) => courseAcc + course.projects.length, 0), 0
  )

  const stats = [
    {
      label: 'Credits Completed',
      value: '75.5',
      icon: Award,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      borderColor: 'border-amber-400/20'
    },
    {
      label: 'Study Materials',
      value: totalMaterials,
      icon: FileText,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/20'
    },
    {
      label: 'Course Projects',
      value: totalProjects,
      icon: Code,
      color: 'text-violet-400',
      bgColor: 'bg-violet-400/10',
      borderColor: 'border-violet-400/20'
    },
    {
      label: 'Courses Covered',
      value: theorySubjects + labSubjects,
      icon: BookOpen,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20'
    }
  ]

  return (
    <section id="statistics" className="relative py-32 overflow-hidden bg-slate-900 border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Academic Impact</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase"
          >
            Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Statistics</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            A quantitative overview of our digital resilience. Empowering the batch through structured resources and open collaboration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className={`inline-flex p-5 rounded-2xl ${stat.bgColor} ${stat.color} mb-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                <stat.icon className="w-8 h-8" />
              </div>
              
              <div className="space-y-3">
                <div className="text-5xl font-black text-white tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>
              </div>

              {/* High-end decorative accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-tr-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
