'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center ring-2 ring-white/30">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Lubdhok Batch</h1>
                <p className="text-sm text-violet-100">Study Materials Hub</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            <Link 
              href="/" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Home
            </Link>
            <Link 
              href="/semesters" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Study Materials
            </Link>
            <Link 
              href="/members" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Members
            </Link>
            <Link 
              href="/events" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Events
            </Link>
            <Link 
              href="/projects" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Projects
            </Link>
            <Link 
              href="/announcements" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Announcements
            </Link>
            <Link 
              href="/about" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 backdrop-blur-sm"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/20 bg-black/10 backdrop-blur-sm rounded-b-lg">
              <Link
                href="/"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/semesters"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Study Materials
              </Link>
              <Link
                href="/members"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Members
              </Link>
              <Link
                href="/events"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/projects"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/announcements"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Announcements
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
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
