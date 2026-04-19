import Link from 'next/link'
import { BookOpen, CalendarDays, Mail, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="page-content narrow-content">
        <header className="mb-12 text-center">
          <div className="eyebrow mb-5">
            <Mail className="h-4 w-4" />
            Contact
          </div>
          <h1 className="section-title">Send us a Message</h1>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Have a question about materials, events, projects, or the batch archive? Use the form below.
          </p>
        </header>

        <section className="raw-panel mb-12 p-5 sm:p-8">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mono-label mb-2 block">
                  Full Name
                </label>
                <input id="name" name="name" required className="form-field" placeholder="Enter your full name" />
              </div>

              <div>
                <label htmlFor="email" className="mono-label mb-2 block">
                  Email Address
                </label>
                <input id="email" name="email" type="email" required className="form-field" placeholder="your.email@example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mono-label mb-2 block">
                Subject
              </label>
              <select id="subject" name="subject" required className="form-field">
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="academic">Academic Support</option>
                <option value="events">Events and Activities</option>
                <option value="projects">Project Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mono-label mb-2 block">
                Message
              </label>
              <textarea id="message" name="message" rows={6} required className="form-field resize-none" placeholder="Tell us more about your inquiry..." />
            </div>

            <button type="submit" className="btn-primary w-full">
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </section>

        <section className="surface-card p-6 text-center sm:p-10">
          <h2 className="mb-4 text-3xl font-black" style={{ color: 'var(--foreground)' }}>
            More Ways to Connect
          </h2>
          <p className="section-copy mx-auto mb-7 max-w-2xl">
            Join study groups, attend batch events, or connect with us on campus at the Computer Science Department, University of Dhaka.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/events" className="btn-secondary">
              <CalendarDays className="h-4 w-4" />
              View Events
            </Link>
            <Link href="/semesters" className="btn-outline">
              <BookOpen className="h-4 w-4" />
              Study Materials
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
