"use client"

import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useAppStore } from "@/lib/store"
import { useEffect } from "react"

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

function LangSync() {
  const { lang } = useAppStore()
  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang)
    document.documentElement.setAttribute("lang", lang)
  }, [lang])
  return null
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      <LangSync />
      {children}
      <AnalyticsConditional />
    </ThemeProvider>
  )
}
