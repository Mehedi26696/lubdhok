'use client'

import Image from 'next/image'
import { ArrowUpRight, BookOpen, Calendar, Code, Github, Youtube } from 'lucide-react'

const footerStats = [
  { label: 'Materials', icon: BookOpen },
  { label: 'Projects', icon: Code },
  { label: 'Events', icon: Calendar },
]

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)' }}>
      <div className="mx-auto max-w-[92rem] px-4 py-10 sm:px-6 lg:px-8">
        <div className="raw-panel overflow-hidden">
          <div className="grid border-b lg:grid-cols-[1.15fr_1fr]" style={{ borderColor: 'var(--line)' }}>
            <div className="border-b p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10" style={{ borderColor: 'var(--line)' }}>
              <div className="mb-8 flex items-start gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center border text-5xl font-black" style={{ borderColor: 'var(--line-strong)', background: 'var(--surface)', color: 'var(--foreground)', borderRadius: 8 }}>
                  L
                </div>
                <div>
                  <p className="mono-label mb-2">University of Dhaka</p>
                  <h2 className="text-4xl font-black leading-none sm:text-5xl" style={{ color: 'var(--foreground)' }}>
                    Lubdhok 29
                  </h2>
                </div>
              </div>

              <p className="max-w-2xl text-lg font-bold leading-8" style={{ color: 'var(--muted)' }}>
                A maintained CSEDU 29 archive for study shelves, project records, event memories, and batch notices.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {footerStats.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 border p-4" style={{ borderColor: 'var(--line)', background: 'var(--surface)', borderRadius: 8 }}>
                    <span className="mono-label">{item.label}</span>
                    <item.icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                  </div>
                ))}
              </div>

              <a
                href="https://www.youtube.com/@CSEDU-29"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                <Youtube className="h-4 w-4" />
                YouTube Channel
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex min-h-[26rem] items-end p-6 sm:p-8 lg:p-10">
              <div className="w-full">
                <p className="mono-label mb-5">Maintainer</p>
                <a
                  href="https://github.com/Mehedi26696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border p-5 transition-colors"
                  style={{ borderColor: 'var(--line)', background: 'var(--surface)', borderRadius: 8 }}
                >
                  <div className="mb-8 flex items-center gap-5">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden border" style={{ borderColor: 'var(--line-strong)', borderRadius: 8, background: 'var(--surface-muted)' }}>
                      <Image
                        src="https://github.com/Mehedi26696.png?size=160"
                        alt="H.M. Mehedi Hasan"
                        fill
                        className="object-cover"
                        sizes="80px"
                        unoptimized
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-3xl font-black leading-tight" style={{ color: 'var(--foreground)' }}>
                        H.M. Mehedi Hasan
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t pt-5" style={{ borderColor: 'var(--line)' }}>
                    <span className="text-sm font-bold" style={{ color: 'var(--muted)' }}>
                      Developed and maintained by
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-black" style={{ color: 'var(--foreground)' }}>
                      <Github className="h-4 w-4" />
                      GitHub
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: 'var(--accent)' }} />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </footer>
  )
}
