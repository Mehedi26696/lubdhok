import Image from 'next/image'
import { BookOpen, CalendarDays, HeartHandshake, Laptop, Lightbulb, Target, Users } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { label: 'Batch Members', value: '60', icon: Users },
    { label: 'Academic Year', value: '3rd', icon: BookOpen },
    { label: 'Department', value: 'CSE', icon: Laptop },
    { label: 'Years Together', value: '3', icon: CalendarDays },
  ]

  const values = [
    {
      title: 'Academic Excellence',
      description: 'We support each other to do better work in our Computer Science studies.',
      icon: Target,
    },
    {
      title: 'Collaboration',
      description: 'Assignments, projects, and exam preparation become stronger when we work together.',
      icon: HeartHandshake,
    },
    {
      title: 'Learning',
      description: 'We share notes, code, references, and explanations so nobody has to start from zero.',
      icon: Lightbulb,
    },
    {
      title: 'Community',
      description: 'The batch is more than coursework: it is a network of people growing together.',
      icon: Users,
    },
  ]

 
  return (
    <div className="page-shell">
      <div className="page-content">
        <header className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="eyebrow mb-5">
              <Users className="h-4 w-4" />
              About Our Batch
            </div>
            <h1 className="section-title">Lubdhok 29</h1>
            <p className="section-copy mt-5">
              We are Department of Computer Science and Engineering students at University of Dhaka, learning, building, competing, and keeping our batch archive alive together.
            </p>
          </div>
          <div className="image-frame relative h-72 overflow-hidden sm:h-96">
            <Image
              src="/batch.jpg"
              alt="Lubdhok Batch - University of Dhaka CS Students"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-stone-950/70 p-5 text-white">
              <h2 className="text-2xl font-black">Computer Science and Engineering, University of Dhaka</h2>
              <p className="text-sm font-bold text-stone-200">Lubdhok 29</p>
            </div>
          </div>
        </header>

        <section className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <article key={stat.label} className="surface-card p-5 text-center">
                <Icon className="mx-auto mb-4 h-6 w-6" style={{ color: 'var(--accent)' }} />
                <div className="text-3xl font-black" style={{ color: 'var(--foreground)' }}>{stat.value}</div>
                <div className="mono-label mt-2">{stat.label}</div>
              </article>
            )
          })}
        </section>

        <section className="mb-20">
          <div className="mb-8 max-w-3xl">
            <h2 className="section-title">What We Value</h2>
            <p className="section-copy mt-4">
              The simple principles that keep the batch useful to each other.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <article key={value.title} className="surface-card p-5">
                  <Icon className="mb-5 h-7 w-7" style={{ color: 'var(--accent-secondary)' }} />
                  <h3 className="mb-2 text-xl font-black" style={{ color: 'var(--foreground)' }}>{value.title}</h3>
                  <p className="section-copy text-sm">{value.description}</p>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
