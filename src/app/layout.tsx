import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import ClientChatBotWrapper from "@/components/ClientChatBotWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          {/* Floating ChatBot */}
          <div className="fixed bottom-6 right-6 z-50 max-w-full w-80">
            <ClientChatBotWrapper />
          </div>
        </div>
      </body>
    </html>
  );
}
