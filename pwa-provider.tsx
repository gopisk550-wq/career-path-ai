"use client"

import type React from "react"
import { useEffect } from "react"

export default function PWAProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost"
      if (isLocalhost) return
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // intentionally silent in production to avoid console noise
      })
    }
  }, [])

  return <>{children}</>
}
