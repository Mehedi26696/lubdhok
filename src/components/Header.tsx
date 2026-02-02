'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20 gap-x-10 lg:gap-x-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-white/10 text-white font-black text-xl">
                  L
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent uppercase tracking-tighter leading-none">
                  Lubdhok
                </h1>
                <div className="text-[10px] font-bold text-violet-500 tracking-[0.25em] uppercase leading-none mt-2 opacity-80">
                  CSEDU-29
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/semesters", label: "Materials" },
              { href: "/events", label: "Events" },
              { href: "/projects", label: "Projects" },
              { href: "/achievements", label: "Achievements" },
              { href: "/announcements", label: "Announcements" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-slate-400 hover:text-white px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full hover:bg-white/5 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-violet-500 rounded-full group-hover:w-4 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => {
                const e = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true });
                window.dispatchEvent(e);
              }}
              className="hidden sm:flex items-center group relative overflow-hidden px-5 py-2.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-violet-500/50 hover:bg-slate-900/70 transition-all duration-500"
              title="Search (Ctrl+K)"
            >
              <div className="relative z-10 flex items-center gap-4">
                <Search className="w-4 h-4 text-violet-400/80 group-hover:text-violet-400 group-hover:scale-110 transition-all duration-500" />
                <div className="h-5 w-px bg-white/10 group-hover:bg-violet-500/30 transition-colors" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-white transition-colors whitespace-nowrap">
                  Search
                </span>
              </div>
              <div className="relative z-10 hidden lg:flex items-center gap-1.5 ml-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                <kbd className="px-1.5 py-0.5 rounded bg-black/50 border border-white/10 text-[8px] font-bold font-sans text-slate-500">CTRL</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-black/50 border border-white/10 text-[8px] font-bold font-sans text-slate-500">K</kbd>
              </div>
              {/* Subtle Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-violet-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 text-slate-700 dark:text-white hover:text-indigo-600 dark:hover:text-white/80 focus:outline-none transition-all duration-300"
              >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 mx-6 mb-6 p-8 shadow-2xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl" />
            
            <div className="relative space-y-2">
              {[
                { href: "/", label: "Home", icon: "🏠" },
                { href: "/semesters", label: "Study Materials", icon: "📚" },
                { href: "/events", label: "Events", icon: "🎉" },
                { href: "/projects", label: "Academic Projects", icon: "💻" },
                { href: "/achievements", label: "Achievements", icon: "🏆" },
                { href: "/announcements", label: "Announcements", icon: "📢" },
                { href: "/about", label: "About", icon: "👥" },
                { href: "/contact", label: "Contact", icon: "📧" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-4 px-4 py-3.5 text-base font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-violet-500/50 group-hover:text-violet-400 transition-all shadow-lg">
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
