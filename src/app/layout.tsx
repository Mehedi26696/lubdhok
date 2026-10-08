import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '../components/Footer'
import ClientChatBotWrapper from '@/components/ClientChatBotWrapper'
import { ThemeProvider } from '@/components/ThemeProvider'
import CommandPalette from '@/components/CommandPalette'
import BackToTop from '@/components/BackToTop'
import { MotionConfig } from 'framer-motion'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lubdhok',
  description:
    'Official website of Lubdhok university batch. Access study materials, events, projects, and connect with batch members all in one place.',
  keywords:
    'Lubdhok batch, university batch, study materials, events, projects, batch members, academic resources',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <div className="site-shell flex flex-col min-h-screen">
              <a href="#main-content" className="skip-link">
                Skip to content
              </a>
              <Header />
              <main id="main-content" tabIndex={-1} className="flex-grow">
                {children}
              </main>
              <Footer />
              <CommandPalette />
              <BackToTop />
              <ClientChatBotWrapper />
            </div>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
