"use client"

import React, { useState } from "react"

type Technology = {
  name: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
  description: {
    "pt-BR": string
    "en-US": string
  }
  category: string
}

type CategoryMetadata = {
  icon: string
  title: {
    "pt-BR": string
    "en-US": string
  }
  description: {
    "pt-BR": string
    "en-US": string
  }
}

type TechnologiesSectionProps = {
  theme: string
  t: {
    technologies: string
    categories: {
      [key: string]: string
    }
  }
  technologies: Technology[]
  categoryMetadata: Record<string, CategoryMetadata>
  lang: "pt-BR" | "en-US"
}

const CATEGORY_ORDER = ["frontend", "backend", "database", "devops", "cloud", "mobile", "design", "tools", "testing"]

export function TechnologiesSection({ theme, t, technologies, categoryMetadata, lang }: TechnologiesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [tooltip, setTooltip] = useState<string | null>(null)

  const isDark = theme === "dark"

  const categorizedTech = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = []
      acc[tech.category].push(tech)
      return acc
    },
    {} as Record<string, Technology[]>,
  )

  Object.keys(categorizedTech).forEach((cat) => {
    categorizedTech[cat].sort((a, b) => a.name.localeCompare(b.name))
  })

  const categories = CATEGORY_ORDER.filter((c) => categorizedTech[c])

  const allLabel = lang === "pt-BR" ? "Todos" : "All"

  const tabs = [{ key: "all", label: allLabel, icon: "✦" }, ...categories.map((c) => ({
    key: c,
    label: categoryMetadata[c]?.title[lang] ?? t.categories[c] ?? c,
    icon: categoryMetadata[c]?.icon ?? "",
  }))]

  const visibleCategories = activeCategory === "all" ? categories : [activeCategory]

  return (
    <section data-section="technologies" className="mb-16">
      <h2 className={`text-2xl font-bold mb-6 ${isDark ? "text-[#15F5BA]" : "text-blue-600"}`}>
        {t.technologies}
      </h2>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => {
          const isActive = activeCategory === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                isActive
                  ? isDark
                    ? "bg-[#15F5BA] text-black"
                    : "bg-blue-600 text-white"
                  : isDark
                    ? "bg-[#1e1e1e] text-gray-400 hover:bg-[#2a2a2a] hover:text-gray-200 border border-gray-800"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 border border-gray-200"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Technologies grid — grouped by category */}
      <div className="space-y-8">
        {visibleCategories.map((category) => {
          const meta = categoryMetadata[category]
          const techs = categorizedTech[category]

          return (
            <div key={category}>
              {/* Category label — only shown in "all" view */}
              {activeCategory === "all" && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{meta?.icon}</span>
                  <span className={`text-sm font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {meta?.title[lang]}
                  </span>
                  <div className={`flex-1 h-px ${isDark ? "bg-gray-800" : "bg-gray-200"}`} />
                </div>
              )}

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <div key={tech.name} className="relative">
                    <button
                      onMouseEnter={() => setTooltip(`${category}-${tech.name}`)}
                      onMouseLeave={() => setTooltip(null)}
                      data-tech-chip
                      onFocus={() => setTooltip(`${category}-${tech.name}`)}
                      onBlur={() => setTooltip(null)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-mono transition-all duration-200 group ${
                        isDark
                          ? "bg-[#1e1e1e] text-gray-300 hover:bg-[#252525] border border-gray-800 hover:border-gray-700"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                      }`}
                      style={{
                        boxShadow: tooltip === `${category}-${tech.name}`
                          ? `0 0 0 1px ${tech.color}40, 0 2px 8px ${tech.color}20`
                          : undefined,
                        borderColor: tooltip === `${category}-${tech.name}` ? `${tech.color}60` : undefined,
                      }}
                    >
                      {React.createElement(tech.icon, {
                        className: "text-lg shrink-0 transition-transform duration-200 group-hover:scale-110",
                        style: { color: tech.color },
                      })}
                      <span>{tech.name}</span>
                    </button>

                    {/* Tooltip */}
                    {tooltip === `${category}-${tech.name}` && (
                      <div
                        className={`absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap pointer-events-none shadow-lg ${
                          isDark
                            ? "bg-[#2a2a2a] border border-gray-700 text-gray-300"
                            : "bg-white border border-gray-200 text-gray-600"
                        }`}
                      >
                        {tech.description[lang]}
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                            isDark ? "border-t-[#2a2a2a]" : "border-t-white"
                          }`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
