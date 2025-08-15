'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
               
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white/95 drop-shadow-sm">Lubdhok-CSEDU-29</h1>
                
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link 
              href="/" 
              className="text-white hover:text-white/80 hover:font-bold px-3 py-2 text-sm font-medium transition-all duration-300"
            >
              Home
            </Link>
            <Link 
              href="/semesters" 
              className="text-white hover:text-white/80 hover:font-bold px-3 py-2 text-sm font-medium transition-all duration-300"
            >
              Study Materials
            </Link>
             
            <Link 
              href="/events" 
              className="text-white hover:text-white/80 hover:font-bold px-3 py-2 text-sm font-medium transition-all duration-300"
            >
              Events
            </Link>
            <Link 
              href="/projects" 
              className="text-white hover:text-white/80 hover:font-bold px-3 py-2 text-sm font-medium transition-all duration-300"
            >
              Projects
            </Link>
             
            <Link 
              href="/about" 
              className="text-white hover:text-white/80 hover:font-bold px-3 py-2 text-sm font-medium transition-all duration-300"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-white/80 hover:font-bold px-3 py-2 text-sm font-medium transition-all duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-white hover:text-white/80 focus:outline-none transition-all duration-300"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg border border-slate-700/50 mx-2 mb-4">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-slate-800/50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/semesters"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-slate-800/50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Study Materials
              </Link>
               
              <Link
                href="/events"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-slate-800/50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-slate-800/50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
               
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-slate-800/50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-white/80 hover:bg-slate-800/50 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
