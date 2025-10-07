import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import PWAProvider from "../components/pwa-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
  manifest: "/manifest.webmanifest",
  themeColor: "#0ea5a6",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <PWAProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </PWAProvider>
        <Analytics />
      </body>
    </html>
  )
}
