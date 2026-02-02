'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
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
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-white/10 text-white font-black text-xl">
                  L
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent uppercase tracking-tighter">
                  Lubdhok
                </h1>
                <div className="text-[10px] font-bold text-violet-500 tracking-[0.2em] uppercase leading-none mt-1">
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
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                const e = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true });
                window.dispatchEvent(e);
              }}
              className="hidden sm:flex items-center space-x-3 px-4 py-2 rounded-full bg-slate-900/50 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 transition-all group"
              title="Search (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Search</span>
              <kbd className="hidden lg:inline-flex px-1.5 py-0.5 rounded bg-slate-800 border border-white/10 text-[9px] font-bold">⌘K</kbd>
            </button>

            <ThemeToggle />

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
          <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 mx-4 mb-6 p-6 shadow-2xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl" />
            
            <div className="relative space-y-2">
              {[
                { href: "/", label: "Home", icon: "🏠" },
                { href: "/semesters", label: "Study Materials", icon: "📚" },
                { href: "/events", label: "Events", icon: "🎉" },
                { href: "/projects", label: "Academic Projects", icon: "💻" },
                { href: "/achievements", label: "Achievements", icon: "🏆" },
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
