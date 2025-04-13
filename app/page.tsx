"use client"

import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { translations } from "@/data/translations"
import { ThemeLanguageSwitcher } from "@/components/theme-language-switcher"
import { ProfileHeader } from "@/components/profile-header"
import { BioSection } from "@/components/bio-section"
import { GithubStats } from "@/components/github-stats"
import { ProjectsSection } from "@/components/projects-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { Footer } from "@/components/footer"
import { projects } from "@/data/projects"
import { technologies } from "@/data/technologies"
import { experiences } from "@/data/experiences"
import { ExperienceSection } from "@/components/experience-section"

const generateMockContributions = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    contributions: Math.floor(Math.random() * 200) + 50,
  }))
}

const fetchGithubStats = async () => {
  try {
    const response = await fetch("https://api.github.com/users/mateusarcedev")
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json()
  } catch (error) {
    console.error("Error fetching GitHub stats:", error)
    return null
  }
}

export default function Portfolio() {
  const [lang, setLang] = useState<"pt-BR" | "en-US">("pt-BR")
  const [theme, setTheme] = useState("dark")
  const t = translations[lang]


  useEffect(() => {
    if (typeof window !== "undefined") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(systemPrefersDark ? "dark" : "light")
    }
  }, [])

  const { data: githubStats, isLoading: isLoadingStats } = useQuery({
    queryKey: ["githubStats"],
    queryFn: fetchGithubStats,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  })

  const { data: contributionData } = useQuery({
    queryKey: ["contributions"],
    queryFn: generateMockContributions,
    staleTime: Number.POSITIVE_INFINITY,
  })

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-[#151515] text-white" : "bg-gray-100 text-gray-800"} font-mono transition-colors duration-300`}
    >
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <ThemeLanguageSwitcher theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
        <ProfileHeader theme={theme} t={t} />
        <BioSection theme={theme} bio={t.bio} />

        {!isLoadingStats && githubStats && (
          <GithubStats
            theme={theme}
            t={t}
            githubStats={githubStats}
            contributionData={contributionData ?? []}
          />
        )}

        <ExperienceSection theme={theme} t={t} experiences={experiences} lang={lang} />
        <ProjectsSection theme={theme} t={t} lang={lang} projects={projects} />
        <TechnologiesSection theme={theme} t={t} technologies={technologies} lang={lang} />
        <Footer theme={theme} />
      </div>
    </div>
  )
}
