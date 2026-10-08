import Link from 'next/link'
import { ArrowUpRight, Github, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--line)' }}>
      <div className="content-width py-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight">
              lubdhok <span className="font-normal muted-text">29</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-6 muted-text">
              Our shared corner of CSEDU.
              <br />
              Computer Science & Engineering, University of Dhaka.
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-start gap-x-6 gap-y-3 text-sm muted-text"
          >
            <Link href="/about" className="hover:text-[var(--foreground)]">
              About the batch
            </Link>
            <Link href="/contact" className="hover:text-[var(--foreground)]">
              Contact
            </Link>
            <a
              href="https://www.youtube.com/@CSEDU-29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--foreground)]"
            >
              <Youtube className="h-4 w-4" /> YouTube{' '}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>
        </div>
        <div
          className="mt-8 flex flex-col justify-between gap-3 border-t pt-5 text-xs muted-text sm:flex-row"
          style={{ borderColor: 'var(--line)' }}
        >
          <span>Built for the 29th batch. Kept for everyone.</span>
          <a
            href="https://github.com/Mehedi26696"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[var(--foreground)]"
          >
            <Github className="h-3.5 w-3.5" /> Maintained by H.M. Mehedi Hasan{' '}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}
