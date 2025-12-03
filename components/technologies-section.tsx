"use client"

import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { ChevronDown } from "lucide-react"

type Technology = {
  name: string
  icon: IconDefinition | React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
  isReactIcon?: boolean
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

export function TechnologiesSection({ theme, t, technologies, categoryMetadata, lang }: TechnologiesSectionProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  // Group technologies by category
  const categorizedTech = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = []
      }
      acc[tech.category].push(tech)
      return acc
    },
    {} as Record<string, Technology[]>,
  )

  // Sort categories alphabetically
  const categories = Object.keys(categorizedTech).sort()

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <section className="mb-16">
      <h2 className={`text-2xl font-bold mb-8 ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}`}>
        {t.technologies}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          const isExpanded = expandedCategories.has(category)
          const metadata = categoryMetadata[category]

          return (
            <article
              key={category}
              className={`
                ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"}
                rounded-lg overflow-hidden
                transition-all duration-500 ease-in-out
                ${isExpanded ? "md:col-span-2 lg:col-span-3" : ""}
                hover:shadow-lg
                ${theme === "dark" ? "shadow-[#15F5BA]/5" : "shadow-blue-600/5"}
              `}
            >
              {/* Category Header - Clickable */}
              <button
                onClick={() => toggleCategory(category)}
                className={`
                  w-full p-6 text-left
                  transition-colors duration-200
                  ${theme === "dark" ? "hover:bg-[#222]" : "hover:bg-gray-50"}
                  flex items-center justify-between gap-4
                `}
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-3xl">{metadata?.icon}</span>
                  <div className="flex-1">
                    <h3
                      className={`
                        text-lg font-bold mb-1
                        ${theme === "dark" ? "text-[#15F5BA]" : "text-blue-600"}
                      `}
                    >
                      {metadata?.title[lang] || t.categories[category]}
                    </h3>
                    <p
                      className={`
                        text-sm
                        ${theme === "dark" ? "text-gray-400" : "text-gray-600"}
                      `}
                    >
                      {metadata?.description[lang]}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`
                    w-5 h-5 transition-transform duration-300
                    ${isExpanded ? "rotate-180" : ""}
                    ${theme === "dark" ? "text-gray-400" : "text-gray-600"}
                  `}
                />
              </button>

              {/* Technologies Grid - Expandable */}
              <div
                className={`
                  grid transition-all duration-500 ease-in-out
                  ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                `}
              >
                <div className="overflow-hidden">
                  <div
                    className={`
                      p-6 pt-4
                      ${theme === "dark" ? "border-t border-gray-800" : "border-t border-gray-200"}
                    `}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {categorizedTech[category].map((tech) => (
                        <div
                          key={tech.name}
                          className="relative group"
                          onMouseEnter={() => setHoveredTech(tech.name)}
                          onMouseLeave={() => setHoveredTech(null)}
                        >
                          {/* Technology Card */}
                          <div
                            className={`
                              p-4 rounded-lg
                              transition-all duration-200
                              ${theme === "dark" ? "bg-[#222] hover:bg-[#2a2a2a]" : "bg-gray-50 hover:bg-gray-100"}
                              flex flex-col items-center gap-3
                              cursor-pointer
                            `}
                          >
                            <div className="flex items-center justify-center h-12 w-12">
                              {tech.isReactIcon ? (
                                React.createElement(
                                  tech.icon as React.ComponentType<{
                                    className: string
                                    style: React.CSSProperties
                                  }>,
                                  {
                                    className: "text-3xl transition-transform duration-200 group-hover:scale-110",
                                    style: {
                                      color: tech.color,
                                    },
                                  },
                                )
                              ) : (
                                <FontAwesomeIcon
                                  icon={tech.icon as IconDefinition}
                                  className="text-3xl transition-transform duration-200 group-hover:scale-110"
                                  style={{
                                    color: tech.color,
                                  }}
                                />
                              )}
                            </div>
                            <span
                              className={`
                                text-xs font-mono text-center
                                ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
                              `}
                            >
                              {tech.name}
                            </span>
                          </div>

                          {/* Tooltip on Hover */}
                          {hoveredTech === tech.name && (
                            <div
                              className={`
                                absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2
                                px-3 py-2 rounded-md
                                ${theme === "dark" ? "bg-[#2a2a2a] border border-gray-700" : "bg-white border border-gray-200"}
                                shadow-lg
                                whitespace-nowrap
                                pointer-events-none
                                animate-in fade-in duration-200
                              `}
                            >
                              <p
                                className={`
                                  text-xs
                                  ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
                                `}
                              >
                                {tech.description[lang]}
                              </p>
                              {/* Tooltip Arrow */}
                              <div
                                className={`
                                  absolute top-full left-1/2 -translate-x-1/2
                                  border-4 border-transparent
                                  ${theme === "dark" ? "border-t-[#2a2a2a]" : "border-t-white"}
                                `}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
