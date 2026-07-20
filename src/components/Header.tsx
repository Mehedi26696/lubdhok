'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Command, Menu, Search, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/semesters', label: 'Materials' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openCommandPalette = () => {
    const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true })
    window.dispatchEvent(event)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
      style={{
        background: isScrolled ? 'transparent' : 'transparent',
      }}
    >
      <div
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 border px-4 shadow-[var(--shadow-soft)] sm:px-5 lg:px-6"
        style={{
          background: 'var(--nav-bg)',
          borderColor: 'var(--line)',
          borderRadius: 16,
          backdropFilter: 'blur(18px)',
        }}
      >
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border text-xl font-black shadow-sm" style={{ borderColor: 'var(--line)', background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))', color: 'var(--accent-contrast)', borderRadius: 10 }}>
            L
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-lg font-black leading-none" style={{ color: 'var(--foreground)' }}>
              Lubdhok
            </span>
            <span className="mono-label mt-1 block">CSEDU 29</span>
          </span>
        </Link>

        <nav className="hidden items-center rounded-xl border p-1 lg:flex" style={{ borderColor: 'var(--line)', background: 'color-mix(in srgb, var(--surface-muted) 68%, transparent)' }} aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-bold transition-colors ${
                  active ? '' : 'hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                style={{
                  color: active ? 'var(--accent)' : 'var(--muted)',
                  background: active ? 'color-mix(in srgb, var(--accent) 12%, transparent)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCommandPalette}
            className="hidden min-h-10 items-center gap-2 rounded-lg border px-3 text-sm font-bold transition-colors hover:bg-black/5 dark:hover:bg-white/5 sm:inline-flex"
            style={{ borderColor: 'var(--line)', color: 'var(--foreground)', background: 'color-mix(in srgb, var(--surface) 84%, transparent)' }}
            title="Search"
          >
            <Search className="h-4 w-4" />
            <span className="hidden xl:inline">Search</span>
            <Command className="hidden h-3.5 w-3.5 opacity-60 xl:block" />
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="icon-button lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden border shadow-[var(--shadow-soft)] lg:hidden" style={{ borderColor: 'var(--line)', background: 'var(--surface)', borderRadius: 16 }}>
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-base font-bold transition-colors"
                  style={{
                    color: active ? 'var(--accent)' : 'var(--foreground)',
                    background: active ? 'color-mix(in srgb, var(--accent) 12%, transparent)' : 'transparent',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
