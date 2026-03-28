"use client"

import { useState, useEffect } from "react"
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
import { GsapAnimations } from "@/components/gsap-animations"
import { CustomCursor } from "@/components/custom-cursor"

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
      <div
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
      </div>
    </>
  )
}
