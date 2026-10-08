'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, Search, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/semesters', label: 'Materials', prefix: '/semester' },
  { href: '/projects', label: 'Projects', prefix: '/projects' },
  { href: '/events', label: 'Events', prefix: '/events' },
  { href: '/achievements', label: 'Achievements', prefix: '/achievements' },
  { href: '/about', label: 'About', prefix: '/about' },
]

export default function Header() {
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const pathname = usePathname()
  const isMenuOpen = menuPath === pathname
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuPath(null)
        menuButtonRef.current?.focus()
      }
    }
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuPath(null)
    }
    window.addEventListener('keydown', dismiss)
    window.addEventListener('pointerdown', outside)
    return () => {
      window.removeEventListener('keydown', dismiss)
      window.removeEventListener('pointerdown', outside)
    }
  }, [isMenuOpen])

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b"
      style={{
        background: 'var(--nav-bg)',
        borderColor: 'var(--line)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="content-width flex h-[76px] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Lubdhok home"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setMenuPath(null)}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border text-lg"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
              fontFamily: 'Georgia, serif',
            }}
          >
            L
          </span>
          <span className="text-lg font-semibold tracking-tight">
            lubdhok
            <span
              className="ml-1 align-top text-[10px] font-normal"
              style={{ color: 'var(--accent)' }}
            >
              29
            </span>
          </span>
        </Link>
        <nav
          className="hidden h-full items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.prefix)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className="relative flex h-full items-center text-[13px] font-medium transition-colors hover:text-[var(--accent)]"
                style={{ color: active ? 'var(--accent)' : 'var(--muted)' }}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setMenuPath(null)
              window.dispatchEvent(new Event('lubdhok:open-search'))
            }}
            className="icon-button sm:w-auto sm:gap-2 sm:px-3"
            aria-label="Search the archive"
          >
            <Search className="h-4 w-4" />
            <span className="hidden text-xs sm:inline">Search</span>
            <kbd
              className="ml-3 hidden rounded border px-1 text-[10px] lg:inline"
              style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
            >
              Ctrl K
            </kbd>
          </button>
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-link ml-3 hidden xl:inline-flex"
          >
            Get in touch <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuPath(isMenuOpen ? null : pathname)}
            className="icon-button lg:hidden"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="content-width grid gap-1 border-t py-4 lg:hidden"
          style={{ borderColor: 'var(--line)' }}
          aria-label="Mobile navigation"
        >
          {[
            { href: '/', label: 'Home', prefix: 'home' },
            ...navLinks,
            { href: '/contact', label: 'Contact', prefix: '/contact' },
          ].map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.prefix)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuPath(null)}
                aria-current={active ? 'page' : undefined}
                className="rounded-md px-3 py-3 text-sm"
                style={{
                  color: active ? 'var(--accent)' : 'var(--foreground)',
                  background: active ? 'var(--surface-muted)' : undefined,
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
