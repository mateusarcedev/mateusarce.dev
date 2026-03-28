"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { useAppStore } from "@/lib/store"
import { translations } from "@/data/translations"
import { ThemeLanguageSwitcher } from "@/components/theme-language-switcher"
import { ProfileHeader } from "@/components/profile-header"
import { BioSection } from "@/components/bio-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { Footer } from "@/components/footer"
import { technologies, categoryMetadata } from "@/data/technologies"
import { experiences } from "@/data/experiences"
import { ExperienceSection } from "@/components/experience-section"

const GsapAnimations = dynamic(
  () => import("@/components/gsap-animations").then((m) => m.GsapAnimations),
  { ssr: false },
)

const CustomCursor = dynamic(
  () => import("@/components/custom-cursor").then((m) => m.CustomCursor),
  { ssr: false },
)

export function HomeClient() {
  const { lang } = useAppStore()
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const t = translations[lang]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const theme = mounted ? (resolvedTheme ?? "dark") : "dark"

  return (
    <>
      <GsapAnimations />
      <CustomCursor theme={theme} />
      <main
        id="main-content"
        className={`min-h-screen ${theme === "dark" ? "bg-[#151515] text-white" : "bg-gray-100 text-gray-800"} font-mono transition-colors duration-300`}
      >
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          <ThemeLanguageSwitcher theme={theme} />
          <ProfileHeader theme={theme} t={t} />
          <BioSection theme={theme} bio={t.bio} />
          <ExperienceSection theme={theme} t={t} experiences={experiences} lang={lang} />
          <TechnologiesSection
            theme={theme}
            t={t}
            technologies={technologies}
            categoryMetadata={categoryMetadata}
            lang={lang}
          />
          <Footer theme={theme} />
        </div>
      </main>
    </>
  )
}
