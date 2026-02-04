import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import ClientChatBotWrapper from "@/components/ClientChatBotWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lubdhok",
  description: "Official website of Lubdhok university batch. Access study materials, events, projects, announcements, and connect with batch members all in one place.",
  keywords: "Lubdhok batch, university batch, study materials, events, projects, announcements, batch members, academic resources",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen transition-colors duration-300`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-50">
            <Header />
            <ScrollProgress />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <CommandPalette />
            <BackToTop />
            {/* Floating ChatBot */}
            <div className="fixed bottom-6 right-6 z-50 max-w-full w-80">
              <ClientChatBotWrapper />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
