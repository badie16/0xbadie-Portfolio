import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import CursorTracker from "@/components/cursor-tracker"

export const metadata: Metadata = {
  title: "0xBadie - Cybersecurity Portfolio",
  description:
    "Portfolio de Badie, étudiant en cybersécurité passionné par la sécurité informatique et le développement sécurisé.",
  keywords: ["cybersécurité", "sécurité informatique", "pentesting", "ethical hacking", "portfolio"],
  authors: [{ name: "0xBadie" }],
  openGraph: {
    title: "0xBadie - Cybersecurity Portfolio",
    description: "Étudiant en cybersécurité passionné par la protection des systèmes d'information",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <CursorTracker />
        {children}
      </body>
    </html>
  )
}
