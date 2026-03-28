"use client"

import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useAppStore } from "@/lib/store"

type ProvidersProps = {
  children: React.ReactNode
}

function AnalyticsConditional() {
  const { lang, lgpdConsent } = useAppStore()
  const analyticsAllowed = lang !== "pt-BR" || lgpdConsent === "accepted"
  if (!analyticsAllowed) return null
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <AnalyticsConditional />
    </ThemeProvider>
  )
}
