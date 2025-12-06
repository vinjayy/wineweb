import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import WhatsAppButton from "@/components/whatsapp-button"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wine & Spirits | Premium Wine Collection",
  description:
    "Your premium destination for fine wines and spirits. Discover our curated selection from around the world.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} ${playfair.variable} antialiased`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
