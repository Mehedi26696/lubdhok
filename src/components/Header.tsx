'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div>
                <h1 className="text-xl font-bold text-white">Lubdhok-CSEDU-29</h1>
                <p className="text-xs text-slate-300">Computer Science & Engineering • University of Dhaka</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            <Link 
              href="/" 
              className="text-white hover:text-emerald-200 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:font-bold transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
            >
              Home
            </Link>
            <Link 
              href="/semesters" 
              className="text-white hover:text-emerald-200 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:font-bold transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
            >
              Study Materials
            </Link>
             
            <Link 
              href="/events" 
              className="text-white hover:text-emerald-200 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:font-bold transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
            >
              Events
            </Link>
            <Link 
              href="/projects" 
              className="text-white hover:text-emerald-200 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:font-bold transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
            >
              Projects
            </Link>
             
            <Link 
              href="/about" 
              className="text-white hover:text-emerald-200 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:font-bold transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-emerald-200 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:font-bold transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-emerald-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/20 bg-black/30 backdrop-blur-xl rounded-b-lg shadow-2xl">
              <Link
                href="/"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-emerald-200 hover:bg-white/20 hover:font-bold transition-all duration-200 hover:backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/semesters"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-emerald-200 hover:bg-white/20 hover:font-bold transition-all duration-200 hover:backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Study Materials
              </Link>
               
              <Link
                href="/events"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-emerald-200 hover:bg-white/20 hover:font-bold transition-all duration-200 hover:backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/projects"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-emerald-200 hover:bg-white/20 hover:font-bold transition-all duration-200 hover:backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
               
              <Link
                href="/about"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-emerald-200 hover:bg-white/20 hover:font-bold transition-all duration-200 hover:backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:text-emerald-200 hover:bg-white/20 hover:font-bold transition-all duration-200 hover:backdrop-blur-sm"
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
